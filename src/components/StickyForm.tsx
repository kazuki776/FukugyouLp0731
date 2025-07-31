import React, { useState, useEffect } from 'react';
import { Building2, User, Mail, Download, Lock, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

type SubmitStatus = 'idle' | 'loading' | 'success';

interface FormData {
  company: string;
  name: string;
  email: string;
  agree: boolean;
}

interface FormErrors {
  company?: string;
  name?: string;
  email?: string;
}

const StickyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    name: '',
    email: '',
    agree: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [csrfToken, setCsrfToken] = useState('');
  const [highlightState, setHighlightState] = useState<'none' | 'highlighted' | 'blinking'>('none');

  useEffect(() => {
    // Generate CSRF token on component mount
    const token = Math.random().toString(36).substring(2);
    setCsrfToken(token);
  }, []);

  // Custom event listener for form highlight
  useEffect(() => {
    const handleFormHighlight = () => {
      setHighlightState('highlighted');
      
      // Start blinking animation after 500ms
      setTimeout(() => {
        setHighlightState('blinking');
        
        // Remove highlight after 2 seconds (3 blinks at 1s interval = 3s total)
        setTimeout(() => {
          setHighlightState('none');
        }, 2000);
      }, 500);
    };

    // Listen for custom scroll event
    window.addEventListener('formScrollTriggered', handleFormHighlight);

    return () => {
      window.removeEventListener('formScrollTriggered', handleFormHighlight);
    };
  }, []);
  
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.company.trim()) {
      newErrors.company = '会社名を入力してください';
    }

    if (!formData.name.trim()) {
      newErrors.name = '氏名を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const isFormValid = (): boolean => {
    return (
      formData.company.trim() !== '' &&
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      validateEmail(formData.email) &&
      formData.agree
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !formData.agree) return;

    setSubmitStatus('loading');

    // Log form data with CSRF token
    console.log('Form submission data:', {
      ...formData,
      _csrfToken: csrfToken,
      timestamp: new Date().toISOString()
    });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitStatus('success');
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-xl p-8 text-center"
      >
        <div className="text-green-500 mb-4 flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ご請求ありがとうございます
        </h3>
        <p className="text-gray-600 leading-relaxed">
          担当者より1営業日以内にご連絡いたします。
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl shadow-xl p-8 transition-all duration-300 ${
        highlightState === 'highlighted' 
          ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-2xl' 
          : highlightState === 'blinking'
          ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-2xl animate-gentle-blink'
          : 'bg-white'
      }`}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          【無料】待機中人材リストを見る
        </h3>
        <p className="text-gray-600">
          即戦力人材のリストを今すぐ入手
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="_csrfToken" value={csrfToken} />
        
        {/* Company Name */}
        <div>
          <label htmlFor="company" className="sr-only">
            会社名
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="会社名"
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-vb-purple/20 transition-all duration-200 ${
                errors.company ? 'border-red-500' : 'border-gray-200 focus:border-vb-purple'
              }`}
            />
          </div>
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company}</p>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="name" className="sr-only">
            氏名（フルネーム）
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="氏名（フルネーム）"
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-vb-purple/20 transition-all duration-200 ${
                errors.name ? 'border-red-500' : 'border-gray-200 focus:border-vb-purple'
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">
            メールアドレス
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="メールアドレス"
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-vb-purple/20 transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-200 focus:border-vb-purple'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Privacy Policy Consent */}
        <div className="flex items-start space-x-3">
          <input
            id="agree"
            type="checkbox"
            checked={formData.agree}
            onChange={(e) => handleInputChange('agree', e.target.checked)}
            className="mt-1 w-4 h-4 text-vb-purple border-gray-300 rounded focus:ring-vb-purple focus:ring-2"
          />
          <label htmlFor="agree" className="text-sm text-gray-600 leading-relaxed">
            <a href="/privacy" className="text-purple-600 hover:underline" rel="noopener noreferrer">
              プライバシーポリシー
            </a>
            に同意する（必須）
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid() || submitStatus === 'loading'}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 ${
            isFormValid() && submitStatus !== 'loading'
              ? 'bg-vb-yellow text-gray-900 hover:scale-105 hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {submitStatus === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              送信中...
            </>
          ) : (
            <>
              <Download size={20} />
              上記に同意してリストを見る
            </>
          )}
        </button>

        {/* Security Message */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Lock size={16} />
          <span>お客様の情報は安全に保護されます。</span>
        </div>
      </form>
    </motion.div>
  );
};

export default StickyForm;
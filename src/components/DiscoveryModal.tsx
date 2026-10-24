import React, { useState, useEffect } from 'react';
import { Translations } from '../types';
import { X, CheckCircle2, Send, Clock, Calendar } from 'lucide-react';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({ isOpen, onClose, t }) => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState(t.modal.sectors[0]);
  const [challenge, setChallenge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!company.trim()) newErrors.company = 'Company name is required';
    if (!name.trim()) newErrors.name = 'Your name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid work email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate successful submission and store in local history
    try {
      const submission = {
        company,
        name,
        email,
        phone,
        sector,
        challenge,
        date: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem('ql_inquiries') || '[]');
      localStorage.setItem('ql_inquiries', JSON.stringify([...existing, submission]));
    } catch {
      // Storage fallback
    }

    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-[#16251D] text-[#10261C] dark:text-[#EAF1EC] w-full max-w-[580px] rounded-[24px] border border-[#D9E2DB] dark:border-[#2B4237] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[#D9E2DB] dark:border-[#2B4237] flex items-center justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#10261C] dark:text-[#EAF1EC]">
              {t.modal.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5F55] dark:text-[#9DB3A7] mt-0.5">
              {t.modal.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A5F55] dark:text-[#9DB3A7] hover:text-[#10261C] dark:hover:text-[#EAF1EC] hover:bg-[#F4F6F2] dark:hover:bg-[#1F3A2E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#DDE9E1] dark:bg-[#1F3A2E] text-[#1F7A5C] dark:text-[#4DBB93] mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-display text-2xl font-bold mb-2">
                {t.modal.successTitle}
              </h4>
              <p className="text-sm text-[#4A5F55] dark:text-[#9DB3A7] max-w-[420px] mx-auto mb-8 leading-relaxed">
                {t.modal.successDesc}
              </p>

              <div className="p-4 rounded-xl bg-[#F4F6F2] dark:bg-[#0E1913] border border-[#D9E2DB] dark:border-[#2B4237] text-left text-xs space-y-1 mb-8 max-w-[420px] mx-auto">
                <div className="font-bold text-[#10261C] dark:text-[#EAF1EC]">{company} · {name}</div>
                <div className="text-[#4A5F55] dark:text-[#9DB3A7]">{email} {phone ? `· ${phone}` : ''}</div>
                <div className="text-[#1B5E45] dark:text-[#8FD1B3] font-medium">{sector}</div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 rounded-full font-bold text-sm bg-[#1F7A5C] hover:bg-[#17634A] text-[#10261C] hover:text-white dark:bg-[#4DBB93] dark:hover:bg-[#3ca57e] transition-colors cursor-pointer"
              >
                {t.modal.closeBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5F55] dark:text-[#9DB3A7] mb-1.5">
                    {t.modal.companyLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.modal.companyPlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-[#F4F6F2]/40 dark:bg-[#0E1913]/40 focus:bg-white dark:focus:bg-[#0E1913] transition-colors ${
                      errors.company ? 'border-red-500' : 'border-[#D9E2DB] dark:border-[#2B4237]'
                    }`}
                  />
                  {errors.company && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.company}</span>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5F55] dark:text-[#9DB3A7] mb-1.5">
                    {t.modal.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.modal.namePlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-[#F4F6F2]/40 dark:bg-[#0E1913]/40 focus:bg-white dark:focus:bg-[#0E1913] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-[#D9E2DB] dark:border-[#2B4237]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5F55] dark:text-[#9DB3A7] mb-1.5">
                    {t.modal.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.modal.emailPlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-[#F4F6F2]/40 dark:bg-[#0E1913]/40 focus:bg-white dark:focus:bg-[#0E1913] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-[#D9E2DB] dark:border-[#2B4237]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5F55] dark:text-[#9DB3A7] mb-1.5">
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.modal.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#D9E2DB] dark:border-[#2B4237] bg-[#F4F6F2]/40 dark:bg-[#0E1913]/40 focus:bg-white dark:focus:bg-[#0E1913] transition-colors"
                  />
                </div>
              </div>

              {/* Food Subsector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5F55] dark:text-[#9DB3A7] mb-1.5">
                  {t.modal.sectorLabel}
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#D9E2DB] dark:border-[#2B4237] bg-[#F4F6F2]/40 dark:bg-[#0E1913]/40 focus:bg-white dark:focus:bg-[#0E1913] transition-colors cursor-pointer"
                >
                  {t.modal.sectors.map((s, idx) => (
                    <option key={idx} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Process Challenge */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5F55] dark:text-[#9DB3A7] mb-1.5">
                  {t.modal.challengeLabel}
                </label>
                <textarea
                  rows={3}
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  placeholder={t.modal.challengePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#D9E2DB] dark:border-[#2B4237] bg-[#F4F6F2]/40 dark:bg-[#0E1913]/40 focus:bg-white dark:focus:bg-[#0E1913] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#4A5F55] dark:text-[#9DB3A7] hover:text-[#10261C] dark:hover:text-[#EAF1EC] cursor-pointer"
                >
                  {t.modal.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-[#1F7A5C] hover:bg-[#17634A] text-[#10261C] hover:text-white dark:bg-[#4DBB93] dark:hover:bg-[#3ca57e] transition-all cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.modal.submitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

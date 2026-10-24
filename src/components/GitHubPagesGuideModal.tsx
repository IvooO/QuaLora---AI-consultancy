import React, { useState } from 'react';
import { X, Copy, Check, GitBranch, Terminal, ExternalLink } from 'lucide-react';

interface GitHubPagesGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesGuideModal: React.FC<GitHubPagesGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitSnippet = `git init
git add .
git commit -m "Deploy Qualora landing page to GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-[#16251D] text-[#10261C] dark:text-[#EAF1EC] w-full max-w-[640px] rounded-[24px] border border-[#D9E2DB] dark:border-[#2B4237] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[#D9E2DB] dark:border-[#2B4237] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1F7A5C]/15 dark:bg-[#4DBB93]/20 flex items-center justify-center text-[#1F7A5C] dark:text-[#4DBB93]">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">
                Publishing to GitHub Pages
              </h3>
              <p className="text-xs text-[#4A5F55] dark:text-[#9DB3A7]">
                Automated continuous deployment is pre-configured
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#4A5F55] dark:text-[#9DB3A7] hover:text-[#10261C] dark:hover:text-[#EAF1EC] hover:bg-[#F4F6F2] dark:hover:bg-[#1F3A2E] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Step 1 */}
          <div>
            <div className="flex items-center gap-2 font-bold text-[#10261C] dark:text-[#EAF1EC] mb-1.5">
              <span className="w-5 h-5 rounded-full bg-[#1F7A5C] text-white dark:text-[#0E1913] text-xs flex items-center justify-center">1</span>
              <span>Pre-configured Relative Paths & GitHub Actions</span>
            </div>
            <p className="text-xs text-[#4A5F55] dark:text-[#9DB3A7] leading-relaxed mb-2">
              <code className="bg-[#F4F6F2] dark:bg-[#0E1913] px-1.5 py-0.5 rounded text-[11px] font-mono">vite.config.ts</code> has already been set with <code className="bg-[#F4F6F2] dark:bg-[#0E1913] px-1.5 py-0.5 rounded text-[11px] font-mono">base: './'</code> and a turnkey workflow is placed at <code className="bg-[#F4F6F2] dark:bg-[#0E1913] px-1.5 py-0.5 rounded text-[11px] font-mono">.github/workflows/deploy.yml</code>.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2 font-bold text-[#10261C] dark:text-[#EAF1EC]">
                <span className="w-5 h-5 rounded-full bg-[#1F7A5C] text-white dark:text-[#0E1913] text-xs flex items-center justify-center">2</span>
                <span>Push code to your GitHub repository</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(gitSnippet, 1)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F7A5C] dark:text-[#4DBB93] hover:underline cursor-pointer"
              >
                {copiedIndex === 1 ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === 1 ? 'Copied' : 'Copy commands'}</span>
              </button>
            </div>
            <div className="bg-[#10261C] text-[#DDE9E1] p-3.5 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-[#2B4237]">
              <pre>{gitSnippet}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex items-center gap-2 font-bold text-[#10261C] dark:text-[#EAF1EC] mb-1.5">
              <span className="w-5 h-5 rounded-full bg-[#1F7A5C] text-white dark:text-[#0E1913] text-xs flex items-center justify-center">3</span>
              <span>Enable GitHub Actions in Repository Settings</span>
            </div>
            <p className="text-xs text-[#4A5F55] dark:text-[#9DB3A7] leading-relaxed">
              In your GitHub repository, go to <strong>Settings</strong> → <strong>Pages</strong> → Under <strong>Build and deployment</strong>, change <strong>Source</strong> from <em>Deploy from a branch</em> to <strong>GitHub Actions</strong>. Your site will immediately build and publish live!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F6F2] dark:bg-[#0E1913] border-t border-[#D9E2DB] dark:border-[#2B4237] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full font-bold text-xs bg-[#10261C] text-white dark:bg-[#EAF1EC] dark:text-[#0E1913] cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

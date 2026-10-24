import React, { useState } from 'react';
import { X, Copy, Check, GitBranch, AlertCircle, Sparkles, FolderCheck } from 'lucide-react';

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

  const gitSnippet = `git add .
git commit -m "Fix GitHub Pages deployment and docs bundle"
git push origin main`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-[#16251D] text-[#10261C] dark:text-[#EAF1EC] w-full max-w-[680px] rounded-[24px] border border-[#D9E2DB] dark:border-[#2B4237] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[#D9E2DB] dark:border-[#2B4237] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1F7A5C]/15 dark:bg-[#4DBB93]/20 flex items-center justify-center text-[#1F7A5C] dark:text-[#4DBB93]">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">
                Fixing & Publishing to GitHub Pages
              </h3>
              <p className="text-xs text-[#4A5F55] dark:text-[#9DB3A7]">
                Choose either Method A (Instant /docs) or Method B (GitHub Actions)
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
          {/* Why Pages was not working callout */}
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs">
            <div className="flex items-center gap-2 font-bold mb-1">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Why GitHub Pages may have shown a blank screen or 404:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-300">
              <li>
                <strong>Default Root Folder:</strong> If GitHub Pages was set to deploy from <code>/ (root)</code>, browsers cannot run raw TypeScript (<code>src/main.tsx</code>) without Vite.
              </li>
              <li>
                <strong>Peer Dependency Conflict in CI:</strong> The previous npm lockfile had an esbuild peer dependency conflict that failed GitHub Actions. This has now been resolved.
              </li>
            </ul>
          </div>

          {/* Solution 1: Direct /docs folder */}
          <div className="p-4 rounded-xl bg-[#F4F6F2] dark:bg-[#0E1913] border border-[#D9E2DB] dark:border-[#2B4237]">
            <div className="flex items-center gap-2 font-bold text-[#10261C] dark:text-[#EAF1EC] mb-2">
              <FolderCheck className="w-4 h-4 text-[#1F7A5C] dark:text-[#4DBB93]" />
              <span>Method 1 (Fastest & Guaranteed): Deploy via <code>/docs</code> folder</span>
            </div>
            <p className="text-xs text-[#4A5F55] dark:text-[#9DB3A7] leading-relaxed mb-3">
              We generated a production-ready, compiled static bundle in the <code className="bg-white dark:bg-[#16251D] px-1.5 py-0.5 rounded border border-[#D9E2DB] dark:border-[#2B4237] font-mono">/docs</code> folder with <code className="font-mono">.nojekyll</code> and <code className="font-mono">404.html</code> fallbacks.
            </p>
            <ol className="list-decimal pl-5 text-xs text-[#10261C] dark:text-[#EAF1EC] space-y-1.5 font-medium">
              <li>In your GitHub repo, click <strong>Settings</strong> → <strong>Pages</strong>.</li>
              <li>Under <strong>Build and deployment</strong> &gt; <strong>Source</strong>: select <strong>Deploy from a branch</strong>.</li>
              <li>Branch: select <strong>main</strong> (or <strong>master</strong>), and choose <strong>/docs</strong> as folder.</li>
              <li>Click <strong>Save</strong>. It goes live within 60 seconds!</li>
            </ol>
          </div>

          {/* Solution 2: Automated GitHub Actions */}
          <div className="p-4 rounded-xl bg-[#F4F6F2] dark:bg-[#0E1913] border border-[#D9E2DB] dark:border-[#2B4237]">
            <div className="flex items-center gap-2 font-bold text-[#10261C] dark:text-[#EAF1EC] mb-2">
              <Sparkles className="w-4 h-4 text-[#1F7A5C] dark:text-[#4DBB93]" />
              <span>Method 2 (Continuous CI): Deploy via GitHub Actions</span>
            </div>
            <p className="text-xs text-[#4A5F55] dark:text-[#9DB3A7] leading-relaxed mb-3">
              We updated <code className="bg-white dark:bg-[#16251D] px-1.5 py-0.5 rounded border border-[#D9E2DB] dark:border-[#2B4237] font-mono">.github/workflows/deploy.yml</code> to run with resolved peer dependencies and trigger on both <code>main</code> and <code>master</code>.
            </p>
            <ol className="list-decimal pl-5 text-xs text-[#10261C] dark:text-[#EAF1EC] space-y-1.5 font-medium">
              <li>In your GitHub repo, go to <strong>Settings</strong> → <strong>Pages</strong>.</li>
              <li>Under <strong>Source</strong>: select <strong>GitHub Actions</strong>.</li>
              <li>Push the latest code:</li>
            </ol>
            <div className="mt-3 relative">
              <div className="bg-[#10261C] text-[#DDE9E1] p-3 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-[#2B4237]">
                <pre>{gitSnippet}</pre>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(gitSnippet, 1)}
                className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded bg-[#1F7A5C] text-white hover:bg-[#17634A] transition-colors cursor-pointer flex items-center gap-1"
              >
                {copiedIndex === 1 ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedIndex === 1 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
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

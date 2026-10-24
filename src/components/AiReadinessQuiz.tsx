import React, { useState } from 'react';
import { Translations } from '../types';
import { CheckCircle2, ChevronRight, ChevronLeft, RotateCcw, ExternalLink, Award, Clock, ArrowRight } from 'lucide-react';

interface AiReadinessQuizProps {
  t: Translations;
  onOpenBooking: () => void;
}

export const AiReadinessQuiz: React.FC<AiReadinessQuizProps> = ({ t, onOpenBooking }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const questions = t.quiz.questions;
  const totalQuestions = questions.length;

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate score (out of 100)
  const totalScore = Object.entries(selectedAnswers).reduce((sum, [qIdx, optIdx]) => {
    const q = questions[Number(qIdx)];
    if (q && q.options[optIdx]) {
      return sum + q.options[optIdx].points;
    }
    return sum;
  }, 0);

  // Normalize score between 0 and 100 (each of 5 questions is max 30 points = 150 max total -> score = (total/150)*100)
  const normalizedScore = Math.round((totalScore / (totalQuestions * 30)) * 100);

  // Determine tier
  let tier = t.quiz.tiers.starter;
  let estimatedHours = "12 - 20";
  if (normalizedScore >= 75) {
    tier = t.quiz.tiers.advanced;
    estimatedHours = "25 - 40+";
  } else if (normalizedScore >= 45) {
    tier = t.quiz.tiers.intermediate;
    estimatedHours = "18 - 30";
  }

  const currentQuestion = questions[currentStep];
  const isCurrentAnswered = selectedAnswers[currentStep] !== undefined;

  return (
    <section id="readiness" className="py-20 md:py-24 transition-colors">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[780px] mb-12">
          <p className="text-xs md:text-[13px] font-bold uppercase tracking-[0.08em] text-[#1B5E45] dark:text-[#8FD1B3] mb-3">
            {t.quiz.kicker}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#10261C] dark:text-[#EAF1EC] leading-[1.12] mb-4">
            {t.quiz.title}
          </h2>
          <p className="text-base md:text-lg text-[#4A5F55] dark:text-[#9DB3A7]">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Assessment Card Container */}
        <div className="bg-white dark:bg-[#16251D] rounded-[24px] border border-[#D9E2DB] dark:border-[#2B4237] shadow-sm overflow-hidden p-6 sm:p-10 transition-colors">
          {!isCompleted ? (
            <div>
              {/* Progress Bar & Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A5F55] dark:text-[#9DB3A7] mb-3">
                  <span>
                    {t.quiz.questionCount} {currentStep + 1} of {totalQuestions}
                  </span>
                  <span>{currentQuestion.category}</span>
                </div>
                <div className="w-full h-2 bg-[#DDE9E1] dark:bg-[#1F3A2E] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1F7A5C] dark:bg-[#4DBB93] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#10261C] dark:text-[#EAF1EC] mb-6 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5 mb-10">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentStep] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(currentStep, optIdx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? 'border-[#1F7A5C] dark:border-[#4DBB93] bg-[#DDE9E1]/30 dark:bg-[#1F3A2E]/40'
                          : 'border-[#D9E2DB] dark:border-[#2B4237] hover:border-[#1F7A5C]/50 dark:hover:border-[#4DBB93]/50 bg-[#F4F6F2]/50 dark:bg-[#0E1913]/30'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-[#1F7A5C] dark:border-[#4DBB93] bg-[#1F7A5C] dark:bg-[#4DBB93] text-white'
                            : 'border-[#D9E2DB] dark:border-[#2B4237]'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-[#10261C] dark:text-[#EAF1EC]">
                          {option.label}
                        </div>
                        <div className="text-xs text-[#4A5F55] dark:text-[#9DB3A7] mt-1 font-medium">
                          {option.hint}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#D9E2DB] dark:border-[#2B4237]">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold border border-[#D9E2DB] dark:border-[#2B4237] transition-colors ${
                    currentStep === 0
                      ? 'opacity-40 cursor-not-allowed text-[#4A5F55] dark:text-[#9DB3A7]'
                      : 'hover:bg-[#F4F6F2] dark:hover:bg-[#1F3A2E] text-[#10261C] dark:text-[#EAF1EC] cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.quiz.prevBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentAnswered}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-xs ${
                    isCurrentAnswered
                      ? 'bg-[#1F7A5C] hover:bg-[#17634A] text-[#10261C] hover:text-white dark:bg-[#4DBB93] dark:hover:bg-[#3ca57e] cursor-pointer'
                      : 'bg-[#D9E2DB] dark:bg-[#2B4237] text-[#4A5F55] dark:text-[#9DB3A7] cursor-not-allowed opacity-60'
                  }`}
                >
                  <span>{currentStep === totalQuestions - 1 ? t.quiz.seeResultsBtn : t.quiz.nextBtn}</span>
                  {currentStep !== totalQuestions - 1 && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="py-2">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDE9E1] dark:bg-[#1F3A2E] text-xs font-bold text-[#1B5E45] dark:text-[#8FD1B3] uppercase tracking-wider mb-4">
                    <Award className="w-4 h-4" />
                    <span>{tier.title}</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#10261C] dark:text-[#EAF1EC] mb-4">
                    {t.quiz.scoreTitle}: <span className="text-[#1F7A5C] dark:text-[#4DBB93]">{normalizedScore}/100</span>
                  </h3>

                  <p className="text-base sm:text-lg text-[#4A5F55] dark:text-[#9DB3A7] leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="p-4.5 rounded-xl bg-[#F4F6F2] dark:bg-[#0E1913] border border-[#D9E2DB] dark:border-[#2B4237] mb-8">
                    <div className="text-xs uppercase font-bold text-[#1B5E45] dark:text-[#8FD1B3] mb-1">
                      Target Focus
                    </div>
                    <div className="text-sm font-semibold text-[#10261C] dark:text-[#EAF1EC]">
                      {tier.focus}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-[#1F7A5C] hover:bg-[#17634A] text-[#10261C] hover:text-white dark:bg-[#4DBB93] dark:hover:bg-[#3ca57e] transition-all cursor-pointer shadow-sm"
                    >
                      <span>{t.quiz.auditCta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm border border-[#D9E2DB] dark:border-[#2B4237] text-[#4A5F55] dark:text-[#9DB3A7] hover:text-[#10261C] dark:hover:text-[#EAF1EC] cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{t.quiz.retakeBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Score Card Callout */}
                <div className="w-full lg:w-[320px] bg-[#1A3A2D] dark:bg-[#0E1913] text-[#F4F6F2] dark:text-[#EAF1EC] rounded-2xl p-6 sm:p-8 border border-[#2B4237] shrink-0">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8FD1B3] mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{t.quiz.estimatedSavings}</span>
                  </div>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-[#4DBB93] my-2">
                    {estimatedHours}
                  </div>
                  <p className="text-xs sm:text-sm text-[#DDE9E1] leading-snug mb-6">
                    {t.quiz.hoursPerWeek}
                  </p>
                  <div className="text-xs text-[#8FD1B3] border-t border-[#2B4237] pt-4">
                    Audited based on 5 benchmarked food processing & logistics workflows.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Link to Claude Artifact Deep Diagnostic */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#DDE9E1]/40 dark:bg-[#1F3A2E]/30 border border-[#D9E2DB] dark:border-[#2B4237]">
          <div className="text-sm text-[#4A5F55] dark:text-[#9DB3A7]">
            <span className="font-semibold text-[#10261C] dark:text-[#EAF1EC]">
              {t.quiz.externalLinkDesc}
            </span>{' '}
            Access the deep 15-point food AI diagnostic model.
          </div>
          <a
            href="https://claude.ai/artifact/NFSP5aUWhvMVigJSm6de8G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border border-[#10261C] dark:border-[#EAF1EC] text-[#10261C] dark:text-[#EAF1EC] hover:bg-[#10261C] hover:text-[#F4F6F2] dark:hover:bg-[#EAF1EC] dark:hover:text-[#0E1913] transition-colors"
          >
            <span>{t.quiz.externalLink}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

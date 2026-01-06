
import React, { useState } from 'react';
import { MARKETING_QUESTIONS } from '../constants.ts';
import { UserAnswer, QuizStatus } from '../types.ts';
import QuestionCard from './QuestionCard.tsx';
import ResultSummary from './ResultSummary.tsx';
import { askTutorAboutQuestion } from '../services/gemini.ts';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [quizStatus, setQuizStatus] = useState<QuizStatus>('answering');
  const [tutorMessage, setTutorMessage] = useState<string | null>(null);
  const [isTutorLoading, setIsTutorLoading] = useState(false);

  const currentQuestion = MARKETING_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / MARKETING_QUESTIONS.length) * 100;

  const handleSelect = (option: 'A' | 'B' | 'C' | 'D') => {
    if (quizStatus !== 'answering') return;
    setSelectedOption(option);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    
    const isCorrect = selectedOption === currentQuestion.correct;
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect
    };

    setUserAnswers([...userAnswers, newAnswer]);
    setQuizStatus('explained');
  };

  const handleNext = () => {
    if (currentQuestionIndex < MARKETING_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setQuizStatus('answering');
      setTutorMessage(null);
    } else {
      setQuizStatus('finished');
    }
  };

  const handleAskTutor = async () => {
    setIsTutorLoading(true);
    setTutorMessage(null);
    try {
      const response = await askTutorAboutQuestion(
        currentQuestion.text,
        currentQuestion.feedback,
        `Waarom is ${currentQuestion.correct} het juiste antwoord en niet ${selectedOption}?`
      );
      setTutorMessage(response || "Ik kan hier momenteel geen uitleg over geven.");
    } catch (err) {
      setTutorMessage("Oeps, mijn verbinding met het marketing-brein is even verbroken.");
    } finally {
      setIsTutorLoading(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setQuizStatus('answering');
    setTutorMessage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-2 rounded-xl shadow-amber-200 shadow-lg">
              <i className="fa-solid fa-chart-line text-white text-lg"></i>
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">MarketingMeester</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Academische Quiz Tool</p>
            </div>
          </div>
          
          {quizStatus !== 'finished' && (
            <div className="hidden md:flex items-center gap-6">
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Voortgang</p>
                <p className="text-sm font-black text-amber-600">{currentQuestionIndex + 1} / {MARKETING_QUESTIONS.length}</p>
              </div>
              <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}
        </div>
        {quizStatus !== 'finished' && (
          <div className="h-1 w-full bg-slate-100 md:hidden">
            <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto max-w-6xl px-4 py-8 md:py-12">
        {quizStatus === 'finished' ? (
          <ResultSummary 
            answers={userAnswers} 
            totalQuestions={MARKETING_QUESTIONS.length} 
            onRestart={handleRestart} 
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <QuestionCard
                question={currentQuestion}
                selectedOption={selectedOption}
                onSelect={handleSelect}
                showFeedback={quizStatus === 'explained'}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {quizStatus === 'answering' ? (
                  <button
                    disabled={!selectedOption}
                    onClick={handleConfirm}
                    className="w-full bg-slate-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 group"
                  >
                    <span>Antwoord Bevestigen</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-amber-100 flex items-center justify-center gap-3"
                  >
                    <span>{currentQuestionIndex === MARKETING_QUESTIONS.length - 1 ? 'Naar Resultaten' : 'Volgende Vraag'}</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                )}
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 sticky top-24">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-6 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white p-1 shadow-lg mb-3 border-4 border-amber-300 overflow-hidden">
                      <img 
                        src="https://api.aistudio.google.com/v1/files/file-38x2088i3r8y" 
                        alt="Eef AI" 
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-amber-50 text-amber-500"><i class="fa-solid fa-robot text-3xl"></i></div>';
                        }}
                      />
                    </div>
                    <h3 className="font-black text-slate-900 uppercase tracking-tight">Tutor Eef</h3>
                    <p className="text-[9px] font-bold text-amber-900/60 uppercase tracking-[0.2em]">Marketing Expert</p>
                  </div>
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                <div className="p-6">
                  {quizStatus === 'explained' ? (
                    <div className="space-y-4">
                      {tutorMessage ? (
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm text-slate-600 leading-relaxed relative animate-in fade-in slide-in-from-top-2">
                          <div className="absolute -top-2 left-6 w-4 h-4 bg-slate-50 border-t border-l border-slate-100 rotate-45"></div>
                          {tutorMessage}
                        </div>
                      ) : (
                        <button
                          disabled={isTutorLoading}
                          onClick={handleAskTutor}
                          className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                        >
                          {isTutorLoading ? (
                            <><i className="fa-solid fa-circle-notch fa-spin"></i> Eef denkt na...</>
                          ) : (
                            <><i className="fa-solid fa-comment-dots"></i> Vraag Eef om uitleg</>
                          )}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-slate-400 italic text-xs">
                      "Beantwoord de vraag om mijn hulp te kunnen inschakelen!"
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-2xl border border-slate-800">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-4">Statistieken</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-400">Huidige score:</span>
                  <span className="text-lg font-black">{userAnswers.filter(a => a.isCorrect).length} <span className="text-[10px] text-slate-500">Punt(en)</span></span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div 
                    className="bg-amber-500 h-full transition-all duration-1000" 
                    style={{ width: `${(userAnswers.filter(a => a.isCorrect).length / MARKETING_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      <footer className="py-8 bg-white border-t border-slate-100 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} MarketingMeester Academie
        </p>
      </footer>
    </div>
  );
};

export default App;


import React, { useState, useCallback, useEffect } from 'react';
import { MARKETING_QUESTIONS } from './constants';
import { UserAnswer, QuizStatus } from './types';
import QuestionCard from './components/QuestionCard';
import ResultSummary from './components/ResultSummary';
import { askTutorAboutQuestion } from './services/gemini';

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
    const response = await askTutorAboutQuestion(
      currentQuestion.text,
      currentQuestion.feedback,
      `Kun je kort uitleggen waarom het juiste antwoord ${currentQuestion.correct} is en niet mijn keuze ${selectedOption}?`
    );
    setTutorMessage(response || "Geen antwoord beschikbaar.");
    setIsTutorLoading(false);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setQuizStatus('answering');
    setTutorMessage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-lg shadow-sm">
              <i className="fa-solid fa-graduation-cap text-white"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">MarketingMeester</span>
          </div>
          {quizStatus !== 'finished' && (
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Voortgang</span>
              <span className="text-sm font-bold text-amber-600">{currentQuestionIndex + 1} / {MARKETING_QUESTIONS.length}</span>
            </div>
          )}
        </div>
        {quizStatus !== 'finished' && (
          <div className="h-1 bg-slate-100 w-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl">
          {quizStatus === 'finished' ? (
            <ResultSummary 
              answers={userAnswers} 
              totalQuestions={MARKETING_QUESTIONS.length} 
              onRestart={handleRestart} 
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div className="lg:col-span-3 space-y-6">
                <QuestionCard
                  question={currentQuestion}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                  showFeedback={quizStatus === 'explained'}
                />

                <div className="flex items-center gap-4 py-4 sticky bottom-4 z-40 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl">
                  {quizStatus === 'answering' ? (
                    <button
                      disabled={!selectedOption}
                      onClick={handleConfirm}
                      className="flex-grow bg-slate-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
                    >
                      <span>Controleer Antwoord</span>
                      <i className="fa-solid fa-check-double"></i>
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex-grow bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
                    >
                      <span>{currentQuestionIndex === MARKETING_QUESTIONS.length - 1 ? 'Bekijk Resultaten' : 'Volgende Vraag'}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  )}
                </div>
              </div>

              {/* Eef Sidebar */}
              <aside className="lg:col-span-1 space-y-4">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 sticky top-24">
                  <div className="bg-amber-400 p-6 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-white shadow-inner mb-3 p-1 overflow-hidden border-4 border-amber-300 relative">
                      <img 
                        src="https://api.aistudio.google.com/v1/files/file-38x2088i3r8y" 
                        alt="Eef AI" 
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-amber-50"><i class="fa-solid fa-robot text-amber-500 text-4xl"></i></div>';
                          }
                        }}
                      />
                      {isTutorLoading && (
                        <div className="absolute inset-0 bg-amber-500/20 backdrop-blur-[1px] flex items-center justify-center">
                          <i className="fa-solid fa-circle-notch fa-spin text-white text-2xl"></i>
                        </div>
                      )}
                    </div>
                    <h3 className="font-black text-slate-900 text-lg uppercase tracking-tight">Eef</h3>
                    <p className="text-[10px] font-bold text-amber-900 uppercase tracking-widest opacity-80">Marketing Tutor</p>
                  </div>
                  
                  <div className="p-6">
                    {quizStatus === 'explained' ? (
                      <div className="space-y-4">
                        {tutorMessage ? (
                          <div className="relative">
                            <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 text-sm text-slate-700 leading-relaxed animate-in fade-in slide-in-from-top-2">
                              {tutorMessage}
                            </div>
                            <div className="absolute -top-2 -left-1 w-3 h-3 bg-slate-50 border-l border-t border-slate-100 rotate-[-45deg]"></div>
                          </div>
                        ) : (
                          <button
                            disabled={isTutorLoading}
                            onClick={handleAskTutor}
                            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 text-sm"
                          >
                            {isTutorLoading ? 'Eef denkt na...' : 'Vraag uitleg aan Eef'}
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-xs text-slate-400 font-medium italic">
                          "Maak de vraag om mijn hulp in te schakelen!"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl hidden lg:block border border-slate-800">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-amber-400">Jouw Prestaties</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-slate-400">Score:</span>
                      <span className="text-xl font-black text-white">{userAnswers.filter(a => a.isCorrect).length} <span className="text-xs text-slate-500">pt</span></span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-400 h-full transition-all duration-1000"
                        style={{ width: `${userAnswers.length > 0 ? (userAnswers.filter(a => a.isCorrect).length / userAnswers.length) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <footer className="py-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} MarketingMeester • Powered by Eef AI
      </footer>
    </div>
  );
};

export default App;

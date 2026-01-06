
import React from 'react';
import { UserAnswer } from '../types.ts';

interface ResultSummaryProps {
  answers: UserAnswer[];
  totalQuestions: number;
  onRestart: () => void;
}

const ResultSummary: React.FC<ResultSummaryProps> = ({ answers, totalQuestions, onRestart }) => {
  const correctCount = answers.filter(a => a.isCorrect).length;
  
  // Grade calculation with guessing correction (gokkanscorrectie)
  const guessFactor = totalQuestions / 4;
  let grade = 1.0;
  
  if (correctCount > guessFactor) {
    grade = 1 + 9 * ((correctCount - guessFactor) / (totalQuestions - guessFactor));
  }
  
  const formattedGrade = grade.toFixed(1).replace('.', ',');
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-slate-100 animate-in fade-in zoom-in duration-500">
      <div className="mb-8">
        <div className="relative inline-block">
          <svg className="w-40 h-40 transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="74"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-slate-100"
            />
            <circle
              cx="80"
              cy="80"
              r="74"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={464.7}
              strokeDashoffset={464.7 - (464.7 * scorePercentage) / 100}
              strokeLinecap="round"
              className={`${grade >= 5.5 ? 'text-emerald-500' : 'text-rose-500'} transition-all duration-1000 ease-out`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-slate-800">{formattedGrade}</span>
            <span className="text-xs font-bold text-slate-400 uppercase">Cijfer</span>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Quiz Voltooid!</h2>
      <p className="text-slate-500 mb-8">
        Je hebt <span className="font-bold text-slate-800">{correctCount}</span> van de <span className="font-bold text-slate-800">{totalQuestions}</span> vragen goed.
      </p>

      <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
        <div className="flex items-center gap-3 mb-4 text-slate-600">
          <i className="fa-solid fa-calculator text-indigo-500"></i>
          <span className="text-sm font-semibold uppercase tracking-wider">Resultaat Details</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <span className="block text-2xl font-bold text-emerald-600">{correctCount}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Goed</span>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <span className="block text-2xl font-bold text-rose-500">{totalQuestions - correctCount}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Fout</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-400 italic">
          * Cijfer berekend inclusief gokkanscorrectie (4-keuze).
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-indigo-200 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-rotate-right"></i> Opnieuw Beginnen
      </button>
    </div>
  );
};

export default ResultSummary;

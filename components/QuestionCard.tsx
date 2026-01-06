
import React, { useState } from 'react';
import { Question, OptionExplanations, QuestionOptions } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  onSelect: (option: 'A' | 'B' | 'C' | 'D') => void;
  showFeedback: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedOption, 
  onSelect, 
  showFeedback 
}) => {
  const options: (keyof QuestionOptions)[] = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
          {question.id}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
          {question.text}
        </h2>
      </div>

      <div className="space-y-4">
        {options.map((key) => {
          const isSelected = selectedOption === key;
          const isCorrect = key === question.correct;
          const isWrongSelection = isSelected && !isCorrect;
          
          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 ";
          
          if (!showFeedback) {
            buttonClass += isSelected 
              ? "border-indigo-600 bg-indigo-50" 
              : "border-slate-100 hover:border-indigo-200 hover:bg-slate-50";
          } else {
            if (isCorrect) buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-900";
            else if (isWrongSelection) buttonClass += "border-rose-500 bg-rose-50 text-rose-900";
            else buttonClass += "border-slate-100 opacity-60";
          }

          return (
            <div key={key}>
              <button
                disabled={showFeedback}
                onClick={() => onSelect(key)}
                className={buttonClass}
              >
                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold border ${
                  isSelected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200'
                }`}>
                  {key}
                </span>
                <span className="flex-grow pt-0.5">{question.options[key]}</span>
                {showFeedback && isCorrect && <i className="fa-solid fa-circle-check text-emerald-600 text-xl mt-1"></i>}
                {showFeedback && isWrongSelection && <i className="fa-solid fa-circle-xmark text-rose-600 text-xl mt-1"></i>}
              </button>
              
              {showFeedback && (isSelected || isCorrect) && (
                <div className={`mt-2 ml-12 p-3 rounded-lg text-sm italic ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                  {question.explanations[key]}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showFeedback && (
        <div className="mt-8 p-6 bg-slate-50 rounded-xl border-l-4 border-indigo-500 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
            <i className="fa-solid fa-lightbulb"></i> Kerninzicht
          </h4>
          <p className="text-slate-700 leading-relaxed">
            {question.feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

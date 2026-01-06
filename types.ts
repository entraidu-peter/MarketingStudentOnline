
export interface OptionExplanations {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface QuestionOptions {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOptions;
  correct: 'A' | 'B' | 'C' | 'D';
  explanations: OptionExplanations;
  feedback: string;
}

export type QuizStatus = 'idle' | 'answering' | 'explained' | 'finished';

export interface UserAnswer {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
}

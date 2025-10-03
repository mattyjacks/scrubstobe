"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, CheckCircle2, XCircle, ArrowRight, RotateCcw, Target, TrendingUp } from "lucide-react";

// Sample medical questions
const medicalQuestions = [
  {
    id: 1,
    question: "Which of the following is the primary function of the mitochondria in a cell?",
    options: [
      "Protein synthesis",
      "ATP production",
      "DNA replication",
      "Cell division"
    ],
    correctAnswer: 1,
    explanation: "Mitochondria are known as the powerhouse of the cell, primarily responsible for producing ATP (adenosine triphosphate) through cellular respiration.",
    category: "Cell Biology"
  },
  {
    id: 2,
    question: "What is the normal resting heart rate for a healthy adult?",
    options: [
      "40-50 bpm",
      "60-100 bpm",
      "110-120 bpm",
      "130-140 bpm"
    ],
    correctAnswer: 1,
    explanation: "The normal resting heart rate for adults ranges from 60 to 100 beats per minute. Athletes may have lower resting heart rates.",
    category: "Physiology"
  },
  {
    id: 3,
    question: "Which bone is the longest in the human body?",
    options: [
      "Tibia",
      "Humerus",
      "Femur",
      "Fibula"
    ],
    correctAnswer: 2,
    explanation: "The femur, or thigh bone, is the longest and strongest bone in the human body, extending from the hip to the knee.",
    category: "Anatomy"
  },
  {
    id: 4,
    question: "What is the primary role of insulin in the body?",
    options: [
      "Increase blood glucose levels",
      "Regulate calcium absorption",
      "Lower blood glucose levels",
      "Stimulate protein breakdown"
    ],
    correctAnswer: 2,
    explanation: "Insulin is a hormone produced by the pancreas that helps lower blood glucose levels by facilitating glucose uptake into cells.",
    category: "Endocrinology"
  },
  {
    id: 5,
    question: "Which organ is primarily responsible for filtering blood and producing urine?",
    options: [
      "Liver",
      "Spleen",
      "Kidney",
      "Bladder"
    ],
    correctAnswer: 2,
    explanation: "The kidneys filter blood to remove waste products and excess substances, producing urine in the process.",
    category: "Anatomy"
  }
];

export default function TestPrepPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === medicalQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNext = () => {
    if (currentQuestion < medicalQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const isQuizComplete = answeredQuestions.length === medicalQuestions.length;
  const currentQ = medicalQuestions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-5 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/hub" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
                ← Back to Hub
              </Link>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary" />
                Test Preparation
              </h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Your Score</div>
              <div className="text-2xl font-bold text-primary">
                {score}/{medicalQuestions.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-12">
        {!isQuizComplete ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Question {currentQuestion + 1} of {medicalQuestions.length}</span>
                <span className="text-sm text-muted-foreground">{currentQ.category}</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / medicalQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="rounded-2xl border border-border bg-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-8">{currentQ.question}</h2>

              {/* Answer Options */}
              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectAnswer = index === currentQ.correctAnswer;
                  const shouldShowCorrect = showResult && isCorrectAnswer;
                  const shouldShowIncorrect = showResult && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                        shouldShowCorrect
                          ? "border-green-500 bg-green-500/10"
                          : shouldShowIncorrect
                          ? "border-red-500 bg-red-500/10"
                          : isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-primary/50 hover:bg-muted/50"
                      } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        shouldShowCorrect
                          ? "border-green-500 bg-green-500"
                          : shouldShowIncorrect
                          ? "border-red-500 bg-red-500"
                          : isSelected
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/30"
                      }`}>
                        {shouldShowCorrect && <CheckCircle2 className="w-5 h-5 text-white" />}
                        {shouldShowIncorrect && <XCircle className="w-5 h-5 text-white" />}
                        {!showResult && isSelected && <div className="w-3 h-3 rounded-full bg-white" />}
                      </div>
                      <span className="font-medium">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResult && (
                <div className={`p-6 rounded-xl ${isCorrect ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="font-bold text-green-500">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-500" />
                        <span className="font-bold text-red-500">Incorrect</span>
                      </>
                    )}
                  </div>
                  <p className="text-foreground/90">{currentQ.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                    className="flex-1 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex-1 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Next Question
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Quiz Complete */
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              You scored {score} out of {medicalQuestions.length}
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Accuracy</span>
                <span className="text-sm font-bold">{Math.round((score / medicalQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${(score / medicalQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleRestart}
                className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Retry Quiz
              </button>
              <Link
                href="/hub"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Back to Hub
              </Link>
            </div>
          </div>
        )}

        {/* Study Tips */}
        {!isQuizComplete && (
          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-1">Study Tip</h3>
                <p className="text-sm text-muted-foreground">
                  Take your time to read each question carefully. Understanding the question is just as important as knowing the answer.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

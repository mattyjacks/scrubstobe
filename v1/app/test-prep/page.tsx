"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Brain, CheckCircle2, XCircle, ArrowRight, RotateCcw, Target, TrendingUp, Heart, Wind } from "lucide-react";

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Question type
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

// Shuffled question type with original correct answer tracked
interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  shuffledCorrectAnswer: number;
}

type ExamType = 'general' | 'cardiology' | 'anesthesiology';

// General medical questions
const generalQuestions: Question[] = [
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

// Cardiology questions
const cardiologyQuestions: Question[] = [
  {
    id: 1,
    question: "What is the most common cause of acute coronary syndrome?",
    options: [
      "Coronary artery spasm",
      "Atherosclerotic plaque rupture",
      "Coronary artery dissection",
      "Coronary embolism"
    ],
    correctAnswer: 1,
    explanation: "Atherosclerotic plaque rupture with subsequent thrombus formation is the most common cause of acute coronary syndrome, accounting for over 70% of cases.",
    category: "Cardiology"
  },
  {
    id: 2,
    question: "Which valve is most commonly affected by rheumatic heart disease?",
    options: [
      "Aortic valve",
      "Mitral valve",
      "Tricuspid valve",
      "Pulmonic valve"
    ],
    correctAnswer: 1,
    explanation: "The mitral valve is most commonly affected by rheumatic heart disease, leading to mitral stenosis or regurgitation.",
    category: "Cardiology"
  },
  {
    id: 3,
    question: "What is the first-line treatment for stable angina?",
    options: [
      "ACE inhibitors",
      "Beta-blockers",
      "Calcium channel blockers",
      "Nitrates"
    ],
    correctAnswer: 1,
    explanation: "Beta-blockers are the first-line treatment for stable angina as they reduce myocardial oxygen demand by decreasing heart rate and contractility.",
    category: "Cardiology"
  },
  {
    id: 4,
    question: "Which ECG finding is most specific for acute pericarditis?",
    options: [
      "ST elevation in all leads",
      "PR depression",
      "T wave inversion",
      "Q waves"
    ],
    correctAnswer: 1,
    explanation: "PR depression is the most specific ECG finding for acute pericarditis, along with diffuse ST elevation.",
    category: "Cardiology"
  },
  {
    id: 5,
    question: "What is the normal ejection fraction of the left ventricle?",
    options: [
      "35-45%",
      "55-70%",
      "75-85%",
      "85-95%"
    ],
    correctAnswer: 1,
    explanation: "The normal left ventricular ejection fraction is 55-70%. Values below 40% indicate systolic dysfunction.",
    category: "Cardiology"
  }
];

// Anesthesiology questions
const anesthesiologyQuestions: Question[] = [
  {
    id: 1,
    question: "Which volatile anesthetic has the fastest induction and emergence?",
    options: [
      "Isoflurane",
      "Sevoflurane",
      "Desflurane",
      "Halothane"
    ],
    correctAnswer: 2,
    explanation: "Desflurane has the lowest blood-gas partition coefficient, resulting in the fastest induction and emergence among volatile anesthetics.",
    category: "Anesthesiology"
  },
  {
    id: 2,
    question: "What is the primary mechanism of action of local anesthetics?",
    options: [
      "GABA receptor agonism",
      "Sodium channel blockade",
      "Potassium channel activation",
      "Calcium channel blockade"
    ],
    correctAnswer: 1,
    explanation: "Local anesthetics work by blocking voltage-gated sodium channels, preventing action potential propagation along nerve fibers.",
    category: "Anesthesiology"
  },
  {
    id: 3,
    question: "Which muscle relaxant is associated with histamine release?",
    options: [
      "Rocuronium",
      "Vecuronium",
      "Atracurium",
      "Cisatracurium"
    ],
    correctAnswer: 2,
    explanation: "Atracurium is known to cause histamine release, which can lead to hypotension and bronchospasm. Cisatracurium is a stereoisomer with minimal histamine release.",
    category: "Anesthesiology"
  },
  {
    id: 4,
    question: "What is the reversal agent for rocuronium and vecuronium?",
    options: [
      "Naloxone",
      "Flumazenil",
      "Neostigmine",
      "Atropine"
    ],
    correctAnswer: 2,
    explanation: "Neostigmine is an acetylcholinesterase inhibitor used to reverse non-depolarizing neuromuscular blockade from drugs like rocuronium and vecuronium.",
    category: "Anesthesiology"
  },
  {
    id: 5,
    question: "Which opioid has the longest duration of action?",
    options: [
      "Fentanyl",
      "Remifentanil",
      "Morphine",
      "Alfentanil"
    ],
    correctAnswer: 2,
    explanation: "Morphine has the longest duration of action (3-4 hours) among commonly used opioids in anesthesia, while remifentanil has the shortest.",
    category: "Anesthesiology"
  }
];

const examTypes = [
  {
    type: 'general' as ExamType,
    title: 'General Medical Exam',
    icon: Brain,
    description: 'Comprehensive medical knowledge across multiple specialties',
    questions: generalQuestions,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    type: 'cardiology' as ExamType,
    title: 'Cardiology Specialist Exam',
    icon: Heart,
    description: 'Advanced cardiovascular medicine and interventional cardiology',
    questions: cardiologyQuestions,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    type: 'anesthesiology' as ExamType,
    title: 'Anesthesiology Specialist Exam',
    icon: Wind,
    description: 'Perioperative care, pain management, and critical care',
    questions: anesthesiologyQuestions,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  }
];

export default function TestPrepPage() {
  const [selectedExam, setSelectedExam] = useState<ExamType | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  // Shuffle questions and answers when exam is selected
  useEffect(() => {
    if (selectedExam) {
      const examConfig = examTypes.find(e => e.type === selectedExam);
      if (examConfig) {
        const baseQuestions = shuffleArray([...examConfig.questions]);
        const shuffled = baseQuestions.map(q => {
          const optionsWithIndex = q.options.map((opt, idx) => ({ opt, idx }));
          const shuffledOpts = shuffleArray(optionsWithIndex);
          return {
            ...q,
            shuffledOptions: shuffledOpts.map(o => o.opt),
            shuffledCorrectAnswer: shuffledOpts.findIndex(o => o.idx === q.correctAnswer)
          };
        });
        setShuffledQuestions(shuffled);
      }
    }
  }, [selectedExam]);

  const handleExamSelect = (type: ExamType) => {
    setSelectedExam(type);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === shuffledQuestions[currentQuestion].shuffledCorrectAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setSelectedExam(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setShuffledQuestions([]);
  };

  const isQuizComplete = answeredQuestions.length === shuffledQuestions.length;
  const currentQ = shuffledQuestions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ?.shuffledCorrectAnswer;

  // Exam selection screen
  if (!selectedExam) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-5 py-6">
            <Link href="/hub" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
              ← Back to Hub
            </Link>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              Test Preparation - Select Your Exam
            </h1>
            <p className="text-muted-foreground mt-2">
              Choose an exam to begin your practice session
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {examTypes.map((exam) => {
              const Icon = exam.icon;
              return (
                <button
                  key={exam.type}
                  onClick={() => handleExamSelect(exam.type)}
                  className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300 text-left"
                >
                  <div className={`w-16 h-16 rounded-xl ${exam.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${exam.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{exam.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exam.description}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {exam.questions.length} Questions
                    </span>
                    <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                      Start →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-5 py-6">
          <div className="flex items-center justify-between">
            <div>
              <button 
                onClick={() => setSelectedExam(null)} 
                className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block"
              >
                ← Change Exam
              </button>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary" />
                {examTypes.find(e => e.type === selectedExam)?.title}
              </h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Your Score</div>
              <div className="text-2xl font-bold text-primary">
                {score}/{shuffledQuestions.length}
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
                <span className="text-sm font-medium">Question {currentQuestion + 1} of {shuffledQuestions.length}</span>
                <span className="text-sm text-muted-foreground">{currentQ?.category}</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="rounded-2xl border border-border bg-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-8">{currentQ?.question}</h2>

              {/* Answer Options */}
              <div className="space-y-4 mb-8">
                {currentQ?.shuffledOptions.map((option: string, index: number) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectAnswer = index === currentQ.shuffledCorrectAnswer;
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
                  <p className="text-foreground/90">{currentQ?.explanation}</p>
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
            <h2 className="text-4xl font-bold mb-4">Exam Complete!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              You scored {score} out of {shuffledQuestions.length}
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Accuracy</span>
                <span className="text-sm font-bold">{Math.round((score / shuffledQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${(score / shuffledQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleRestart}
                className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Choose Another Exam
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

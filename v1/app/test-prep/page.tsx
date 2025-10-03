"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Brain, CheckCircle2, XCircle, ArrowRight, RotateCcw, Target, TrendingUp, Heart, Wind, Zap, Bone, Activity, Stethoscope } from "lucide-react";

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

type ExamType = 'general' | 'cardiology' | 'anesthesiology' | 'neurology' | 'orthopedics' | 'gastroenterology' | 'pulmonology';

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
  },
  {
    id: 6,
    question: "What is the normal pH range of human blood?",
    options: [
      "6.35-6.45",
      "7.35-7.45",
      "8.35-8.45",
      "7.00-7.10"
    ],
    correctAnswer: 1,
    explanation: "Normal blood pH is tightly regulated between 7.35 and 7.45. Values outside this range indicate acidosis or alkalosis.",
    category: "Physiology"
  },
  {
    id: 7,
    question: "Which vitamin is essential for blood clotting?",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin K",
      "Vitamin D"
    ],
    correctAnswer: 2,
    explanation: "Vitamin K is essential for the synthesis of clotting factors in the liver, particularly factors II, VII, IX, and X.",
    category: "Biochemistry"
  },
  {
    id: 8,
    question: "What type of joint is the shoulder?",
    options: [
      "Hinge joint",
      "Ball-and-socket joint",
      "Pivot joint",
      "Saddle joint"
    ],
    correctAnswer: 1,
    explanation: "The shoulder is a ball-and-socket joint, allowing for wide range of movement in multiple directions.",
    category: "Anatomy"
  },
  {
    id: 9,
    question: "Which hormone regulates calcium levels in the blood?",
    options: [
      "Insulin",
      "Thyroxine",
      "Parathyroid hormone",
      "Cortisol"
    ],
    correctAnswer: 2,
    explanation: "Parathyroid hormone (PTH) regulates blood calcium levels by increasing calcium release from bones and absorption in the kidneys.",
    category: "Endocrinology"
  },
  {
    id: 10,
    question: "What is the primary function of red blood cells?",
    options: [
      "Fight infection",
      "Oxygen transport",
      "Blood clotting",
      "Immune response"
    ],
    correctAnswer: 1,
    explanation: "Red blood cells contain hemoglobin, which binds oxygen in the lungs and transports it to tissues throughout the body.",
    category: "Physiology"
  },
  {
    id: 11,
    question: "Which part of the brain controls balance and coordination?",
    options: [
      "Cerebrum",
      "Cerebellum",
      "Medulla oblongata",
      "Hypothalamus"
    ],
    correctAnswer: 1,
    explanation: "The cerebellum is responsible for coordinating voluntary movements, balance, and posture.",
    category: "Anatomy"
  },
  {
    id: 12,
    question: "What is the largest organ in the human body?",
    options: [
      "Liver",
      "Brain",
      "Skin",
      "Lungs"
    ],
    correctAnswer: 2,
    explanation: "The skin is the largest organ, covering the entire body and serving as a protective barrier.",
    category: "Anatomy"
  },
  {
    id: 13,
    question: "Which antibody is most abundant in the human body?",
    options: [
      "IgA",
      "IgM",
      "IgG",
      "IgE"
    ],
    correctAnswer: 2,
    explanation: "IgG is the most abundant antibody in blood and extracellular fluid, providing long-term immunity.",
    category: "Immunology"
  },
  {
    id: 14,
    question: "What is the normal respiratory rate for adults at rest?",
    options: [
      "8-10 breaths per minute",
      "12-20 breaths per minute",
      "25-30 breaths per minute",
      "35-40 breaths per minute"
    ],
    correctAnswer: 1,
    explanation: "The normal respiratory rate for healthy adults at rest is 12-20 breaths per minute.",
    category: "Physiology"
  },
  {
    id: 15,
    question: "Which electrolyte imbalance can cause cardiac arrhythmias?",
    options: [
      "Hyponatremia",
      "Hyperkalemia",
      "Hypercalcemia",
      "Hypomagnesemia"
    ],
    correctAnswer: 1,
    explanation: "Hyperkalemia (elevated potassium) can cause dangerous cardiac arrhythmias and is a medical emergency requiring immediate treatment.",
    category: "Physiology"
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
  },
  {
    id: 6,
    question: "Which medication is contraindicated in patients with severe aortic stenosis?",
    options: [
      "Beta-blockers",
      "Vasodilators like nitroglycerin",
      "Diuretics",
      "Calcium channel blockers"
    ],
    correctAnswer: 1,
    explanation: "Vasodilators are contraindicated in severe aortic stenosis as they can cause dangerous hypotension due to the fixed cardiac output.",
    category: "Cardiology"
  },
  {
    id: 7,
    question: "What is the classic triad of cardiac tamponade (Beck's triad)?",
    options: [
      "Hypotension, muffled heart sounds, JVD",
      "Chest pain, dyspnea, palpitations",
      "Fever, murmur, emboli",
      "Syncope, angina, dyspnea"
    ],
    correctAnswer: 0,
    explanation: "Beck's triad consists of hypotension, muffled heart sounds, and jugular venous distension (JVD), indicating cardiac tamponade.",
    category: "Cardiology"
  },
  {
    id: 8,
    question: "Which artery is most commonly affected in ST-elevation MI of the inferior wall?",
    options: [
      "Left anterior descending artery",
      "Left circumflex artery",
      "Right coronary artery",
      "Left main coronary artery"
    ],
    correctAnswer: 2,
    explanation: "The right coronary artery (RCA) supplies the inferior wall of the heart. Occlusion causes inferior wall MI with ST elevation in leads II, III, and aVF.",
    category: "Cardiology"
  },
  {
    id: 9,
    question: "What is the first-line treatment for atrial fibrillation with rapid ventricular response?",
    options: [
      "Amiodarone",
      "Cardioversion",
      "Rate control with beta-blockers or calcium channel blockers",
      "Digoxin"
    ],
    correctAnswer: 2,
    explanation: "Rate control using beta-blockers or non-dihydropyridine calcium channel blockers is first-line for AFib with RVR in hemodynamically stable patients.",
    category: "Cardiology"
  },
  {
    id: 10,
    question: "Which condition causes a continuous 'machinery' murmur?",
    options: [
      "Ventricular septal defect",
      "Atrial septal defect",
      "Patent ductus arteriosus",
      "Aortic stenosis"
    ],
    correctAnswer: 2,
    explanation: "Patent ductus arteriosus (PDA) causes a continuous 'machinery' murmur heard throughout systole and diastole.",
    category: "Cardiology"
  },
  {
    id: 11,
    question: "What ECG change is most specific for hyperkalemia?",
    options: [
      "Prolonged QT interval",
      "Peaked T waves",
      "U waves",
      "Delta waves"
    ],
    correctAnswer: 1,
    explanation: "Peaked (tall, narrow) T waves are an early and specific ECG sign of hyperkalemia, followed by widened QRS and flattened P waves.",
    category: "Cardiology"
  },
  {
    id: 12,
    question: "Which valve abnormality is associated with Marfan syndrome?",
    options: [
      "Mitral stenosis",
      "Aortic regurgitation",
      "Tricuspid stenosis",
      "Pulmonic stenosis"
    ],
    correctAnswer: 1,
    explanation: "Marfan syndrome is associated with aortic root dilation and aortic regurgitation due to connective tissue abnormalities.",
    category: "Cardiology"
  },
  {
    id: 13,
    question: "What is the target blood pressure for patients with diabetes and hypertension?",
    options: [
      "<140/90 mmHg",
      "<130/80 mmHg",
      "<120/70 mmHg",
      "<150/90 mmHg"
    ],
    correctAnswer: 1,
    explanation: "For patients with diabetes and hypertension, the target blood pressure is generally <130/80 mmHg to reduce cardiovascular risk.",
    category: "Cardiology"
  },
  {
    id: 14,
    question: "Which medication should be given within 24 hours of STEMI?",
    options: [
      "ACE inhibitor",
      "Statin",
      "Beta-blocker",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Post-STEMI patients should receive ACE inhibitors, statins, beta-blockers, and antiplatelet therapy within 24 hours for optimal outcomes.",
    category: "Cardiology"
  },
  {
    id: 15,
    question: "What is the most common cause of sudden cardiac death in young athletes?",
    options: [
      "Coronary artery disease",
      "Hypertrophic cardiomyopathy",
      "Long QT syndrome",
      "Myocarditis"
    ],
    correctAnswer: 1,
    explanation: "Hypertrophic cardiomyopathy (HCM) is the leading cause of sudden cardiac death in young athletes, often undiagnosed until a catastrophic event.",
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
  },
  {
    id: 6,
    question: "What is the most common cause of awareness under general anesthesia?",
    options: [
      "Equipment malfunction",
      "Inadequate anesthetic dosing",
      "Patient tolerance",
      "Drug interactions"
    ],
    correctAnswer: 1,
    explanation: "Inadequate anesthetic dosing is the most common cause of intraoperative awareness, often due to human error or reliance on lower doses.",
    category: "Anesthesiology"
  },
  {
    id: 7,
    question: "Which induction agent is contraindicated in patients with porphyria?",
    options: [
      "Propofol",
      "Etomidate",
      "Thiopental",
      "Ketamine"
    ],
    correctAnswer: 2,
    explanation: "Thiopental and other barbiturates are contraindicated in porphyria as they can precipitate acute attacks.",
    category: "Anesthesiology"
  },
  {
    id: 8,
    question: "What is the initial treatment for malignant hyperthermia?",
    options: [
      "External cooling",
      "Dantrolene",
      "Calcium channel blockers",
      "Acetaminophen"
    ],
    correctAnswer: 1,
    explanation: "Dantrolene is the specific antidote for malignant hyperthermia and should be given immediately at 2.5 mg/kg IV.",
    category: "Anesthesiology"
  },
  {
    id: 9,
    question: "Which nerve block is used for surgical anesthesia of the hand?",
    options: [
      "Brachial plexus block",
      "Femoral nerve block",
      "Sciatic nerve block",
      "Pudendal nerve block"
    ],
    correctAnswer: 0,
    explanation: "The brachial plexus block provides anesthesia to the entire upper extremity, including the hand.",
    category: "Anesthesiology"
  },
  {
    id: 10,
    question: "What is the minimum alveolar concentration (MAC)?",
    options: [
      "Concentration preventing movement in 50% of patients",
      "Concentration causing unconsciousness",
      "Maximum safe concentration",
      "Concentration for induction"
    ],
    correctAnswer: 0,
    explanation: "MAC is the alveolar concentration of volatile anesthetic that prevents movement in response to surgical incision in 50% of patients.",
    category: "Anesthesiology"
  },
  {
    id: 11,
    question: "Which medication is used to reverse benzodiazepine sedation?",
    options: [
      "Naloxone",
      "Flumazenil",
      "Sugammadex",
      "Neostigmine"
    ],
    correctAnswer: 1,
    explanation: "Flumazenil is a competitive benzodiazepine receptor antagonist used to reverse benzodiazepine effects.",
    category: "Anesthesiology"
  },
  {
    id: 12,
    question: "What is the primary advantage of sugammadex over neostigmine?",
    options: [
      "Lower cost",
      "Faster reversal without anticholinergic side effects",
      "Can reverse all muscle relaxants",
      "Longer duration of action"
    ],
    correctAnswer: 1,
    explanation: "Sugammadex provides rapid reversal of rocuronium and vecuronium without the muscarinic side effects seen with neostigmine.",
    category: "Anesthesiology"
  },
  {
    id: 13,
    question: "Which position increases risk of post-operative vision loss?",
    options: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Lateral decubitus"
    ],
    correctAnswer: 1,
    explanation: "Prone positioning, especially during prolonged spine surgery, increases risk of ischemic optic neuropathy and post-operative vision loss.",
    category: "Anesthesiology"
  },
  {
    id: 14,
    question: "What is the maximum recommended dose of lidocaine without epinephrine?",
    options: [
      "3 mg/kg",
      "4.5 mg/kg",
      "7 mg/kg",
      "10 mg/kg"
    ],
    correctAnswer: 1,
    explanation: "The maximum safe dose of lidocaine is 4.5 mg/kg without epinephrine and 7 mg/kg with epinephrine.",
    category: "Anesthesiology"
  },
  {
    id: 15,
    question: "Which anesthetic agent is safest in patients with egg allergy?",
    options: [
      "Propofol should be avoided",
      "Propofol is safe despite egg allergy",
      "Etomidate is the only option",
      "All anesthetics are contraindicated"
    ],
    correctAnswer: 1,
    explanation: "Propofol is safe in egg-allergic patients. The allergy is to egg white protein, while propofol contains purified egg lecithin from yolk.",
    category: "Anesthesiology"
  }
];

// Neurology questions
const neurologyQuestions: Question[] = [
  {
    id: 1,
    question: "Which area of the brain is primarily affected in Parkinson's disease?",
    options: [
      "Hippocampus",
      "Substantia nigra",
      "Cerebellum",
      "Frontal lobe"
    ],
    correctAnswer: 1,
    explanation: "Parkinson's disease primarily affects the substantia nigra, leading to decreased dopamine production and characteristic motor symptoms.",
    category: "Neurology"
  },
  {
    id: 2,
    question: "What is the most common cause of stroke?",
    options: [
      "Cerebral hemorrhage",
      "Subarachnoid hemorrhage",
      "Ischemic stroke from thrombosis or embolism",
      "Arteriovenous malformation"
    ],
    correctAnswer: 2,
    explanation: "Ischemic stroke from thrombosis or embolism accounts for approximately 87% of all strokes, making it the most common type.",
    category: "Neurology"
  },
  {
    id: 3,
    question: "Which neurotransmitter is primarily deficient in Alzheimer's disease?",
    options: [
      "Dopamine",
      "Serotonin",
      "Acetylcholine",
      "GABA"
    ],
    correctAnswer: 2,
    explanation: "Acetylcholine is the primary neurotransmitter affected in Alzheimer's disease, particularly in areas responsible for memory and learning.",
    category: "Neurology"
  },
  {
    id: 4,
    question: "What is the hallmark sign of an upper motor neuron lesion?",
    options: [
      "Flaccid paralysis",
      "Muscle atrophy",
      "Spastic paralysis with hyperreflexia",
      "Fasciculations"
    ],
    correctAnswer: 2,
    explanation: "Upper motor neuron lesions result in spastic paralysis with hyperreflexia and a positive Babinski sign, unlike lower motor neuron lesions which cause flaccid paralysis.",
    category: "Neurology"
  },
  {
    id: 5,
    question: "Which type of seizure involves loss of consciousness with bilateral motor involvement?",
    options: [
      "Simple partial seizure",
      "Complex partial seizure",
      "Generalized tonic-clonic seizure",
      "Absence seizure"
    ],
    correctAnswer: 2,
    explanation: "Generalized tonic-clonic seizures (grand mal) involve loss of consciousness with bilateral motor activity in both the tonic and clonic phases.",
    category: "Neurology"
  },
  {
    id: 6,
    question: "What is the first-line treatment for trigeminal neuralgia?",
    options: [
      "Gabapentin",
      "Carbamazepine",
      "Phenytoin",
      "Amitriptyline"
    ],
    correctAnswer: 1,
    explanation: "Carbamazepine is the first-line treatment for trigeminal neuralgia, effective in 70-80% of patients.",
    category: "Neurology"
  },
  {
    id: 7,
    question: "Which finding on lumbar puncture suggests bacterial meningitis?",
    options: [
      "Low glucose, high protein, neutrophilic pleocytosis",
      "Normal glucose, low protein, lymphocytic pleocytosis",
      "High glucose, low protein",
      "Normal glucose, high RBCs"
    ],
    correctAnswer: 0,
    explanation: "Bacterial meningitis typically shows low CSF glucose, elevated protein, and neutrophilic pleocytosis on lumbar puncture.",
    category: "Neurology"
  },
  {
    id: 8,
    question: "What is the gold standard for diagnosing multiple sclerosis?",
    options: [
      "CT scan",
      "MRI with gadolinium showing lesions disseminated in time and space",
      "Lumbar puncture",
      "Evoked potentials"
    ],
    correctAnswer: 1,
    explanation: "MRI showing lesions disseminated in time and space is the gold standard for MS diagnosis, often with oligoclonal bands in CSF.",
    category: "Neurology"
  },
  {
    id: 9,
    question: "Which cranial nerve is affected in Bell's palsy?",
    options: [
      "Cranial nerve V (trigeminal)",
      "Cranial nerve VII (facial)",
      "Cranial nerve IX (glossopharyngeal)",
      "Cranial nerve XII (hypoglossal)"
    ],
    correctAnswer: 1,
    explanation: "Bell's palsy involves unilateral facial weakness due to inflammation of cranial nerve VII (facial nerve).",
    category: "Neurology"
  },
  {
    id: 10,
    question: "What is the mechanism of action of tissue plasminogen activator (tPA) in stroke?",
    options: [
      "Prevents platelet aggregation",
      "Dissolves blood clots",
      "Reduces cerebral edema",
      "Lowers blood pressure"
    ],
    correctAnswer: 1,
    explanation: "tPA converts plasminogen to plasmin, which breaks down fibrin clots and restores blood flow in ischemic stroke.",
    category: "Neurology"
  },
  {
    id: 11,
    question: "Which disease is characterized by Lewy body deposits in the brain?",
    options: [
      "Alzheimer's disease",
      "Parkinson's disease",
      "Huntington's disease",
      "ALS"
    ],
    correctAnswer: 1,
    explanation: "Parkinson's disease is pathologically characterized by Lewy bodies (alpha-synuclein aggregates) in dopaminergic neurons.",
    category: "Neurology"
  },
  {
    id: 12,
    question: "What is the classic triad of normal pressure hydrocephalus?",
    options: [
      "Headache, nausea, vision changes",
      "Gait disturbance, urinary incontinence, dementia",
      "Tremor, rigidity, bradykinesia",
      "Confusion, ataxia, ophthalmoplegia"
    ],
    correctAnswer: 1,
    explanation: "Normal pressure hydrocephalus presents with the triad of gait disturbance ('magnetic gait'), urinary incontinence, and dementia ('wet, wobbly, and wacky').",
    category: "Neurology"
  },
  {
    id: 13,
    question: "Which medication is used for acute migraine treatment?",
    options: [
      "Propranolol",
      "Topiramate",
      "Sumatriptan",
      "Amitriptyline"
    ],
    correctAnswer: 2,
    explanation: "Sumatriptan and other triptans are first-line treatments for acute migraine attacks, acting as serotonin receptor agonists.",
    category: "Neurology"
  },
  {
    id: 14,
    question: "What is the most common cause of peripheral neuropathy?",
    options: [
      "Vitamin B12 deficiency",
      "Diabetes mellitus",
      "Alcohol abuse",
      "Guillain-Barré syndrome"
    ],
    correctAnswer: 1,
    explanation: "Diabetes mellitus is the most common cause of peripheral neuropathy in developed countries, affecting up to 50% of diabetic patients.",
    category: "Neurology"
  },
  {
    id: 15,
    question: "Which reflex is tested at the L3-L4 spinal level?",
    options: [
      "Achilles reflex",
      "Patellar reflex",
      "Biceps reflex",
      "Triceps reflex"
    ],
    correctAnswer: 1,
    explanation: "The patellar (knee-jerk) reflex tests the L3-L4 nerve roots, while the Achilles reflex tests S1-S2.",
    category: "Neurology"
  }
];

// Orthopedics questions
const orthopedicsQuestions: Question[] = [
  {
    id: 1,
    question: "Which type of fracture is most common in children due to their softer bones?",
    options: [
      "Comminuted fracture",
      "Greenstick fracture",
      "Spiral fracture",
      "Compound fracture"
    ],
    correctAnswer: 1,
    explanation: "Greenstick fractures are incomplete fractures where one side of the bone breaks while the other bends, common in children due to their more flexible bones.",
    category: "Orthopedics"
  },
  {
    id: 2,
    question: "What is the most common cause of osteomyelitis in adults?",
    options: [
      "Staphylococcus epidermidis",
      "Staphylococcus aureus",
      "Streptococcus pyogenes",
      "Escherichia coli"
    ],
    correctAnswer: 1,
    explanation: "Staphylococcus aureus is the most common causative organism of osteomyelitis in adults, accounting for the majority of cases.",
    category: "Orthopedics"
  },
  {
    id: 3,
    question: "Which structure is most commonly torn in an ACL injury?",
    options: [
      "Posterior cruciate ligament",
      "Medial meniscus",
      "Anterior cruciate ligament",
      "Lateral collateral ligament"
    ],
    correctAnswer: 2,
    explanation: "The anterior cruciate ligament (ACL) is one of the most commonly injured knee ligaments, often occurring during sports involving sudden stops or changes in direction.",
    category: "Orthopedics"
  },
  {
    id: 4,
    question: "What is the primary treatment for carpal tunnel syndrome in early stages?",
    options: [
      "Immediate surgery",
      "Wrist splinting and NSAIDs",
      "Corticosteroid injections only",
      "Complete immobilization"
    ],
    correctAnswer: 1,
    explanation: "Early-stage carpal tunnel syndrome is typically managed conservatively with wrist splinting (especially at night) and NSAIDs before considering surgical intervention.",
    category: "Orthopedics"
  },
  {
    id: 5,
    question: "Which imaging modality is best for detecting stress fractures?",
    options: [
      "Standard X-ray",
      "CT scan",
      "MRI",
      "Ultrasound"
    ],
    correctAnswer: 2,
    explanation: "MRI is the most sensitive imaging modality for detecting stress fractures, especially in early stages when X-rays may appear normal.",
    category: "Orthopedics"
  },
  {
    id: 6,
    question: "What is the most common type of shoulder dislocation?",
    options: [
      "Posterior dislocation",
      "Anterior dislocation",
      "Inferior dislocation",
      "Superior dislocation"
    ],
    correctAnswer: 1,
    explanation: "Anterior shoulder dislocation accounts for 95% of shoulder dislocations, typically from a fall on an outstretched arm.",
    category: "Orthopedics"
  },
  {
    id: 7,
    question: "Which nerve is most commonly injured in a mid-shaft humerus fracture?",
    options: [
      "Median nerve",
      "Ulnar nerve",
      "Radial nerve",
      "Axillary nerve"
    ],
    correctAnswer: 2,
    explanation: "The radial nerve runs along the spiral groove of the humerus and is commonly injured in mid-shaft fractures, causing wrist drop.",
    category: "Orthopedics"
  },
  {
    id: 8,
    question: "What is the Ottawa ankle rule used for?",
    options: [
      "Determining need for X-rays",
      "Assessing ligament damage",
      "Predicting healing time",
      "Choosing treatment method"
    ],
    correctAnswer: 0,
    explanation: "The Ottawa ankle rules help clinicians determine when ankle X-rays are necessary, reducing unnecessary imaging.",
    category: "Orthopedics"
  },
  {
    id: 9,
    question: "Which rotator cuff muscle is most commonly torn?",
    options: [
      "Subscapularis",
      "Supraspinatus",
      "Infraspinatus",
      "Teres minor"
    ],
    correctAnswer: 1,
    explanation: "The supraspinatus is the most commonly torn rotator cuff muscle due to its position under the acromion and poor blood supply.",
    category: "Orthopedics"
  },
  {
    id: 10,
    question: "What is compartment syndrome?",
    options: [
      "Muscle strain from overuse",
      "Increased pressure in muscle compartment causing ischemia",
      "Bone infection",
      "Joint inflammation"
    ],
    correctAnswer: 1,
    explanation: "Compartment syndrome occurs when pressure within a muscle compartment compromises circulation and tissue perfusion, requiring emergency fasciotomy.",
    category: "Orthopedics"
  },
  {
    id: 11,
    question: "Which test is used to diagnose meniscus tears?",
    options: [
      "Lachman test",
      "Drawer test",
      "McMurray test",
      "Valgus stress test"
    ],
    correctAnswer: 2,
    explanation: "The McMurray test assesses for meniscus tears by rotating the tibia while extending the knee, causing pain or clicking with tears.",
    category: "Orthopedics"
  },
  {
    id: 12,
    question: "What is the most common cause of hip fractures in elderly patients?",
    options: [
      "Motor vehicle accidents",
      "Sports injuries",
      "Falls from standing height",
      "Pathologic fractures"
    ],
    correctAnswer: 2,
    explanation: "Falls from standing height are the most common cause of hip fractures in elderly patients, often related to osteoporosis.",
    category: "Orthopedics"
  },
  {
    id: 13,
    question: "Which condition presents with 'drop foot'?",
    options: [
      "Tibial nerve injury",
      "Common peroneal nerve injury",
      "Femoral nerve injury",
      "Obturator nerve injury"
    ],
    correctAnswer: 1,
    explanation: "Common peroneal nerve injury causes inability to dorsiflex the foot, resulting in 'drop foot' and steppage gait.",
    category: "Orthopedics"
  },
  {
    id: 14,
    question: "What is the most appropriate initial treatment for a simple ankle sprain?",
    options: [
      "Immediate surgery",
      "Complete bed rest",
      "RICE protocol (Rest, Ice, Compression, Elevation)",
      "Cast immobilization"
    ],
    correctAnswer: 2,
    explanation: "The RICE protocol is first-line treatment for simple ankle sprains, reducing pain and swelling while promoting healing.",
    category: "Orthopedics"
  },
  {
    id: 15,
    question: "Which vitamin deficiency can cause rickets in children?",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ],
    correctAnswer: 2,
    explanation: "Vitamin D deficiency causes rickets in children, characterized by soft, weak bones and skeletal deformities.",
    category: "Orthopedics"
  }
];

// Gastroenterology questions
const gastroenterologyQuestions: Question[] = [
  {
    id: 1,
    question: "Which organism is most commonly associated with peptic ulcer disease?",
    options: [
      "Escherichia coli",
      "Helicobacter pylori",
      "Clostridium difficile",
      "Campylobacter jejuni"
    ],
    correctAnswer: 1,
    explanation: "Helicobacter pylori is the primary causative organism in peptic ulcer disease, found in approximately 70-90% of duodenal ulcers and 30-60% of gastric ulcers.",
    category: "Gastroenterology"
  },
  {
    id: 2,
    question: "What is the most common cause of cirrhosis in the United States?",
    options: [
      "Hepatitis B",
      "Hepatitis C",
      "Chronic alcohol use",
      "Autoimmune hepatitis"
    ],
    correctAnswer: 2,
    explanation: "Chronic alcohol use is the leading cause of cirrhosis in the United States, though hepatitis C and non-alcoholic fatty liver disease are also significant contributors.",
    category: "Gastroenterology"
  },
  {
    id: 3,
    question: "Which condition is characterized by non-caseating granulomas and can affect any part of the GI tract?",
    options: [
      "Ulcerative colitis",
      "Crohn's disease",
      "Celiac disease",
      "Diverticulitis"
    ],
    correctAnswer: 1,
    explanation: "Crohn's disease is characterized by transmural inflammation with non-caseating granulomas and can affect any part of the GI tract from mouth to anus.",
    category: "Gastroenterology"
  },
  {
    id: 4,
    question: "What is the gold standard for diagnosing celiac disease?",
    options: [
      "Anti-gliadin antibodies",
      "Small bowel biopsy showing villous atrophy",
      "Anti-tissue transglutaminase antibodies",
      "Genetic testing for HLA-DQ2/DQ8"
    ],
    correctAnswer: 1,
    explanation: "Small bowel biopsy showing villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes remains the gold standard for diagnosing celiac disease.",
    category: "Gastroenterology"
  },
  {
    id: 5,
    question: "Which medication class is first-line treatment for GERD?",
    options: [
      "H2 receptor antagonists",
      "Antacids",
      "Proton pump inhibitors",
      "Prokinetic agents"
    ],
    correctAnswer: 2,
    explanation: "Proton pump inhibitors (PPIs) are the most effective first-line treatment for GERD, providing superior acid suppression compared to H2 blockers.",
    category: "Gastroenterology"
  },
  {
    id: 6,
    question: "What is the most common complication of diverticulosis?",
    options: [
      "Perforation",
      "Bleeding",
      "Abscess formation",
      "Fistula"
    ],
    correctAnswer: 1,
    explanation: "Painless lower GI bleeding is the most common complication of diverticulosis, occurring in 15-40% of patients.",
    category: "Gastroenterology"
  },
  {
    id: 7,
    question: "Which hepatitis virus is transmitted via the fecal-oral route?",
    options: [
      "Hepatitis A",
      "Hepatitis B",
      "Hepatitis C",
      "Hepatitis D"
    ],
    correctAnswer: 0,
    explanation: "Hepatitis A and E are transmitted via the fecal-oral route, while B, C, and D are bloodborne.",
    category: "Gastroenterology"
  },
  {
    id: 8,
    question: "What is the most common cause of acute pancreatitis?",
    options: [
      "Alcohol abuse",
      "Gallstones",
      "Hypertriglyceridemia",
      "Medications"
    ],
    correctAnswer: 1,
    explanation: "Gallstones account for 40-50% of acute pancreatitis cases, followed by alcohol abuse (30-35%).",
    category: "Gastroenterology"
  },
  {
    id: 9,
    question: "Which antibody is specific for primary biliary cholangitis?",
    options: [
      "Anti-smooth muscle antibody",
      "Anti-mitochondrial antibody",
      "Anti-nuclear antibody",
      "Anti-LKM antibody"
    ],
    correctAnswer: 1,
    explanation: "Anti-mitochondrial antibodies (AMA) are present in over 95% of patients with primary biliary cholangitis (PBC).",
    category: "Gastroenterology"
  },
  {
    id: 10,
    question: "What is the most common location for colorectal cancer?",
    options: [
      "Cecum",
      "Transverse colon",
      "Rectosigmoid region",
      "Ascending colon"
    ],
    correctAnswer: 2,
    explanation: "The rectosigmoid region accounts for approximately 50-60% of all colorectal cancers.",
    category: "Gastroenterology"
  },
  {
    id: 11,
    question: "Which condition is characterized by 'apple core' lesion on barium enema?",
    options: [
      "Diverticulitis",
      "Colon cancer",
      "Ulcerative colitis",
      "Ischemic colitis"
    ],
    correctAnswer: 1,
    explanation: "The 'apple core' sign on barium enema is classic for annular colon cancer causing luminal narrowing.",
    category: "Gastroenterology"
  },
  {
    id: 12,
    question: "What is the first-line treatment for ascites in cirrhosis?",
    options: [
      "Paracentesis",
      "Sodium restriction and diuretics",
      "TIPS procedure",
      "Liver transplant"
    ],
    correctAnswer: 1,
    explanation: "Sodium restriction (<2g/day) combined with diuretics (spironolactone ± furosemide) is first-line treatment for ascites in cirrhosis.",
    category: "Gastroenterology"
  },
  {
    id: 13,
    question: "Which condition causes 'string sign' on small bowel follow-through?",
    options: [
      "Ulcerative colitis",
      "Crohn's disease",
      "Celiac disease",
      "Whipple disease"
    ],
    correctAnswer: 1,
    explanation: "The 'string sign' indicates severe narrowing of the terminal ileum in Crohn's disease due to chronic inflammation and fibrosis.",
    category: "Gastroenterology"
  },
  {
    id: 14,
    question: "What is the most sensitive test for diagnosing acute cholecystitis?",
    options: [
      "Abdominal ultrasound",
      "CT scan",
      "HIDA scan",
      "MRCP"
    ],
    correctAnswer: 2,
    explanation: "HIDA scan (hepatobiliary iminodiacetic acid scan) is the most sensitive test for acute cholecystitis, showing non-filling of the gallbladder.",
    category: "Gastroenterology"
  },
  {
    id: 15,
    question: "Which medication is used to treat hepatic encephalopathy?",
    options: [
      "Lactulose",
      "Metronidazole",
      "Omeprazole",
      "Ursodeoxycholic acid"
    ],
    correctAnswer: 0,
    explanation: "Lactulose is first-line treatment for hepatic encephalopathy, reducing ammonia absorption through acidification of the colon.",
    category: "Gastroenterology"
  }
];

// Pulmonology questions
const pulmonologyQuestions: Question[] = [
  {
    id: 1,
    question: "Which finding on spirometry is characteristic of obstructive lung disease?",
    options: [
      "Decreased FEV1/FVC ratio",
      "Increased FEV1/FVC ratio",
      "Normal FEV1/FVC ratio with decreased volumes",
      "Increased total lung capacity"
    ],
    correctAnswer: 0,
    explanation: "Obstructive lung diseases (like COPD and asthma) are characterized by a decreased FEV1/FVC ratio, typically less than 0.70.",
    category: "Pulmonology"
  },
  {
    id: 2,
    question: "What is the most common cause of community-acquired pneumonia?",
    options: [
      "Haemophilus influenzae",
      "Streptococcus pneumoniae",
      "Mycoplasma pneumoniae",
      "Staphylococcus aureus"
    ],
    correctAnswer: 1,
    explanation: "Streptococcus pneumoniae (pneumococcus) is the most common bacterial cause of community-acquired pneumonia across all age groups.",
    category: "Pulmonology"
  },
  {
    id: 3,
    question: "Which condition is characterized by irreversible dilation of bronchi?",
    options: [
      "Chronic bronchitis",
      "Emphysema",
      "Bronchiectasis",
      "Asthma"
    ],
    correctAnswer: 2,
    explanation: "Bronchiectasis is characterized by permanent, abnormal dilation of bronchi due to destruction of elastic and muscular components of bronchial walls.",
    category: "Pulmonology"
  },
  {
    id: 4,
    question: "What is the primary pathophysiologic mechanism in asthma?",
    options: [
      "Alveolar destruction",
      "Airway inflammation and hyperresponsiveness",
      "Pulmonary fibrosis",
      "Mucus hypersecretion only"
    ],
    correctAnswer: 1,
    explanation: "Asthma is primarily characterized by chronic airway inflammation and bronchial hyperresponsiveness to various triggers, leading to reversible airflow obstruction.",
    category: "Pulmonology"
  },
  {
    id: 5,
    question: "Which oxygen saturation level typically indicates need for supplemental oxygen in COPD patients?",
    options: [
      "SpO2 < 95%",
      "SpO2 < 92%",
      "SpO2 < 88%",
      "SpO2 < 85%"
    ],
    correctAnswer: 2,
    explanation: "Supplemental oxygen is typically recommended for COPD patients when SpO2 is consistently below 88% or PaO2 is less than 55 mmHg to prevent chronic hypoxemia complications.",
    category: "Pulmonology"
  },
  {
    id: 6,
    question: "What is the most common cause of pulmonary embolism?",
    options: [
      "Air embolism",
      "Fat embolism",
      "Deep vein thrombosis",
      "Septic embolism"
    ],
    correctAnswer: 2,
    explanation: "Deep vein thrombosis (DVT), particularly from the lower extremities, is the source of over 90% of pulmonary emboli.",
    category: "Pulmonology"
  },
  {
    id: 7,
    question: "Which medication is first-line for acute asthma exacerbation?",
    options: [
      "Inhaled corticosteroids",
      "Short-acting beta-agonists",
      "Leukotriene inhibitors",
      "Long-acting beta-agonists"
    ],
    correctAnswer: 1,
    explanation: "Short-acting beta-agonists (SABA) like albuterol are first-line treatment for acute asthma exacerbations, providing rapid bronchodilation.",
    category: "Pulmonology"
  },
  {
    id: 8,
    question: "What is the primary pathology in emphysema?",
    options: [
      "Airway inflammation",
      "Alveolar destruction",
      "Bronchial hyperreactivity",
      "Mucus hypersecretion"
    ],
    correctAnswer: 1,
    explanation: "Emphysema is characterized by permanent destruction of alveolar walls, leading to enlarged air spaces and loss of elastic recoil.",
    category: "Pulmonology"
  },
  {
    id: 9,
    question: "Which test confirms the diagnosis of cystic fibrosis?",
    options: [
      "Chest X-ray",
      "Sweat chloride test",
      "Pulmonary function test",
      "Sputum culture"
    ],
    correctAnswer: 1,
    explanation: "Sweat chloride test showing levels >60 mEq/L is diagnostic for cystic fibrosis, along with genetic testing for CFTR mutations.",
    category: "Pulmonology"
  },
  {
    id: 10,
    question: "What is the most common cause of hypoxemia?",
    options: [
      "Hypoventilation",
      "Diffusion impairment",
      "Ventilation-perfusion mismatch",
      "Shunt"
    ],
    correctAnswer: 2,
    explanation: "Ventilation-perfusion (V/Q) mismatch is the most common cause of hypoxemia, seen in conditions like pneumonia and COPD.",
    category: "Pulmonology"
  },
  {
    id: 11,
    question: "Which finding on chest X-ray is classic for pneumothorax?",
    options: [
      "Pleural effusion",
      "Absent lung markings with visible lung edge",
      "Consolidation",
      "Hyperinflation"
    ],
    correctAnswer: 1,
    explanation: "Pneumothorax appears as absent lung markings peripherally with a visible pleural line (lung edge) on chest X-ray.",
    category: "Pulmonology"
  },
  {
    id: 12,
    question: "What is the most appropriate initial treatment for tension pneumothorax?",
    options: [
      "Chest tube placement",
      "Immediate needle decompression",
      "Observation",
      "Oxygen therapy only"
    ],
    correctAnswer: 1,
    explanation: "Tension pneumothorax is a medical emergency requiring immediate needle decompression (2nd intercostal space, midclavicular line) before chest tube placement.",
    category: "Pulmonology"
  },
  {
    id: 13,
    question: "Which antibiotic is first-line for community-acquired pneumonia in healthy adults?",
    options: [
      "Vancomycin",
      "Amoxicillin or macrolide",
      "Fluoroquinolone",
      "Cephalosporin"
    ],
    correctAnswer: 1,
    explanation: "Amoxicillin or a macrolide (azithromycin, clarithromycin) is first-line treatment for CAP in healthy outpatients.",
    category: "Pulmonology"
  },
  {
    id: 14,
    question: "What is the characteristic finding in pulmonary fibrosis on physical exam?",
    options: [
      "Wheezing",
      "Inspiratory crackles",
      "Expiratory stridor",
      "Pleural rub"
    ],
    correctAnswer: 1,
    explanation: "Fine, late-inspiratory 'Velcro-like' crackles at the lung bases are characteristic of pulmonary fibrosis.",
    category: "Pulmonology"
  },
  {
    id: 15,
    question: "Which scoring system predicts mortality risk in community-acquired pneumonia?",
    options: [
      "APACHE II score",
      "CURB-65 score",
      "Glasgow Coma Scale",
      "MELD score"
    ],
    correctAnswer: 1,
    explanation: "CURB-65 score (Confusion, Urea, Respiratory rate, Blood pressure, age ≥65) predicts mortality and helps guide treatment setting for CAP.",
    category: "Pulmonology"
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
  },
  {
    type: 'neurology' as ExamType,
    title: 'Neurology Specialist Exam',
    icon: Zap,
    description: 'Disorders of the nervous system, brain, and spinal cord',
    questions: neurologyQuestions,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    type: 'orthopedics' as ExamType,
    title: 'Orthopedics Specialist Exam',
    icon: Bone,
    description: 'Musculoskeletal system, bones, joints, and trauma',
    questions: orthopedicsQuestions,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10'
  },
  {
    type: 'gastroenterology' as ExamType,
    title: 'Gastroenterology Specialist Exam',
    icon: Activity,
    description: 'Digestive system, liver, and gastrointestinal disorders',
    questions: gastroenterologyQuestions,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    type: 'pulmonology' as ExamType,
    title: 'Pulmonology Specialist Exam',
    icon: Stethoscope,
    description: 'Respiratory system, lungs, and breathing disorders',
    questions: pulmonologyQuestions,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
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

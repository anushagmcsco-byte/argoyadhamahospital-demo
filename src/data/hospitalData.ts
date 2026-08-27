import { Specialty, Doctor, Facility, HealthPackage, InsurancePartner, BlogPost, Testimonial, FAQItem } from '../types';
import { DR_SHAILESH_KANNUR_IMAGE } from './doctorImages';

export const HOSPITAL_INFO = {
  name: 'Arogyadhama Heart & Super Specialty Hospital',
  tagline: 'Dedicated to Cardiac Excellence & Advanced Multi-Specialty Healthcare',
  shortName: 'Arogyadhama Hospital',
  address: 'Dargah Jail Road, Vijayapura (Bijapur), Karnataka - 586103',
  googleMapsLink: 'https://maps.google.com/?q=Arogyadhama+Hospital+Dargah+Jail+Road+Vijayapura',
  emergencyPhone: '+91 74112 00102',
  receptionPhone: '+91 8352 222102',
  ambulancePhone: '+91 74112 00108',
  email: 'arogyadhamahospitalbjipur@gmail.com',
  secondaryEmail: 'arogyadhamacoo@gmail.com',
  workingHours: '24 Hours Open (Emergency, Pharmacy, ICU, Cath Lab, Dialysis & Trauma)',
  opdHours: 'Monday - Saturday: 09:00 AM - 08:00 PM | Sunday: 10:00 AM - 02:00 PM (Emergency 24x7)',
  bedsCount: 150,
  icuBeds: 30,
  surgeriesCount: '15,000+',
  cathLabProcedures: '8,500+',
  happyPatients: '1,20,000+',
  doctorsCount: '35+',
  establishedYear: 2012,
  licenseNumber: 'KPME/VJP/HOSP/2012/048',
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Cath Lab',
    slug: 'cardiology',
    category: 'super-specialty',
    iconName: 'HeartPulse',
    shortDescription: 'State-of-the-art flat panel digital Cath Lab for Angiography, Angioplasty, Pacemaker implants, and 24/7 Primary PCI.',
    fullDescription: 'The Department of Cardiology at Arogyadhama Hospital is the premier heart care center in North Karnataka. Equipped with a high-definition digital Cath Lab, advanced CCU, 2D/3D Echocardiography, TMT, and Holter monitoring, our senior cardiologists deliver round-the-clock emergency cardiac interventions including Primary Angioplasty for acute myocardial infarction (heart attack).',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Coronary Angiography (Radial & Femoral)',
      'Primary & Elective Coronary Angioplasty (PTCA with Drug Eluting Stents)',
      'Permanent & Temporary Pacemaker Implantation (PPI / TPI)',
      'AICD (Automated Implantable Cardioverter Defibrillator)',
      'CRT-D / CRT-P for Heart Failure',
      'Balloon Valvuloplasty (BMV / BAV)',
      'Peripheral Angiography & Stenting',
      'Paediatric Echocardiography & Device Closures (ASD/VSD/PDA)'
    ],
    equipmentAndTech: [
      'Advanced Philips/GE Allura Flat Panel Digital Cath Lab',
      'GE Vivid E9 4D Cardiovascular Ultrasound & ECHO System',
      'Mortara Wireless Stress Test System (TMT)',
      '24/48-Hour Multi-Channel Digital Holter Monitors',
      'Intra-Aortic Balloon Pump (IABP) for critical cardiogenic shock'
    ],
    conditionsTreated: [
      'Acute Myocardial Infarction (Heart Attack)',
      'Coronary Artery Disease (CAD) & Angina',
      'Heart Failure & Cardiomyopathy',
      'Arrhythmias (Bradycardia, Tachycardia, AF)',
      'Valvular Heart Diseases',
      'Hypertensive Heart Disease',
      'Congenital Heart Defects'
    ],
    stats: [
      { label: 'Angioplasties & Angiographies', value: '8,500+' },
      { label: 'Door-to-Balloon Time', value: '< 45 Mins' },
      { label: 'Cardiac Success Rate', value: '99.2%' }
    ],
    faqs: [
      {
        question: 'How quickly can an emergency heart attack patient get treated in your Cath Lab?',
        answer: 'Our Cath Lab team and Interventional Cardiologists are on standby 24/7. We achieve an average door-to-balloon time of under 45 minutes for emergency primary angioplasties.'
      },
      {
        question: 'Are cardiac treatments covered under Ayushman Bharat (PM-JAY)?',
        answer: 'Yes, Arogyadhama Hospital is empanelled under Ayushman Bharat PM-JAY and Arogya Karnataka for eligible cardiology and CTVS treatments.'
      }
    ]
  },
  {
    id: 'ctvs',
    name: 'Cardio Thoracic & Vascular Surgery (CTVS)',
    slug: 'ctvs',
    category: 'super-specialty',
    iconName: 'Activity',
    shortDescription: 'Advanced open heart surgery, beating heart CABG (bypass), valve repairs/replacements, and thoracic vascular reconstructions.',
    fullDescription: 'Our CTVS unit is supported by a dedicated Cardiac Modular OT with laminar airflow, advanced heart-lung machine, and a dedicated 1:1 post-operative Cardiac ICU. We routinely perform complex coronary bypass surgeries, valve replacements, and vascular trauma management.',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Coronary Artery Bypass Grafting (CABG - Off-Pump / Beating Heart)',
      'Aortic & Mitral Valve Replacement (AVR / MVR)',
      'Double Valve Replacement (DVR)',
      'Aortic Aneurysm & Dissection Repair',
      'Peripheral Arterial Bypass & Embolectomy',
      'Thoracoscopy, Lobectomy & Lung Resection',
      'AV Fistula Creation for Hemodialysis Patients'
    ],
    equipmentAndTech: [
      'Stockert S5 Heart-Lung (Cardiopulmonary Bypass) Machine',
      'Laminar Air Flow Cleanroom OT Class 10,000',
      'Maquet Dedicated Surgical Tables & LED Surgical Scialytic Lights',
      'Transesophageal Echocardiogram (TEE) Probe',
      'Dedicated 8-bed Post-Cardiothoracic Surgery ICU'
    ],
    conditionsTreated: [
      'Multi-Vessel Coronary Artery Disease',
      'Rheumatic & Degenerative Heart Valve Diseases',
      'Thoracic Aortic Aneurysms',
      'Peripheral Vascular Occlusive Disease & Gangrene',
      'Chest Trauma & Hemothorax'
    ],
    faqs: [
      {
        question: 'What is off-pump beating heart bypass surgery?',
        answer: 'Off-pump CABG allows surgeons to perform bypass grafts while the heart continues to beat naturally, reducing recovery time, blood loss, and neurological complications.'
      }
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology & Neuro Surgery',
    slug: 'neurology',
    category: 'super-specialty',
    iconName: 'Brain',
    shortDescription: 'Comprehensive care for stroke, brain hemorrhage, epilepsy, spine trauma, brain tumors, and neuro-critical emergencies.',
    fullDescription: 'The Neuro Sciences center provides comprehensive neurological assessment and microscopic neurosurgical interventions. With 24/7 CT/MRI support, digital EEG, EMG, and a Neuro-ICU, we handle stroke thrombolysis, brain tumors, spine decompression, and severe head injury cases.',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Emergency IV Thrombolysis for Acute Ischemic Stroke (Golden Hour)',
      'Craniotomy for Brain Hemorrhage & Traumatic Brain Injury (TBI)',
      'Microsurgical Excision of Brain & Spinal Tumors',
      'Microdiscectomy & Spinal Fusion (TLIF/PLIF)',
      'Ventriculoperitoneal (VP) Shunt for Hydrocephalus',
      'Digital Video EEG & Nerve Conduction Studies (NCV/EMG)',
      'Management of Parkinson’s, Neuropathy, Dementia & Migraine'
    ],
    equipmentAndTech: [
      'High-Resolution Carl Zeiss Neuro Surgical Microscope',
      'Multi-Slice CT Scanner & Neuro-Radiology Suite',
      'Nihon Kohden 32-Channel Digital EEG & EMG System',
      'Dedicated Neuro-Trauma ICU with ICP Monitoring'
    ],
    conditionsTreated: [
      'Acute Ischemic & Hemorrhagic Stroke',
      'Brain Tumors & Skull Base Lesions',
      'Head & Spinal Cord Injury',
      'Epilepsy & Seizure Disorders',
      'Herniated Disc, Sciatica & Cervical Spondylosis',
      'Parkinsonism & Movement Disorders'
    ],
    faqs: [
      {
        question: 'What should one do within the first 4.5 hours of a stroke?',
        answer: 'Bring the patient immediately to Arogyadhama Hospital Emergency. Within 4.5 hours of ischemic stroke onset, IV thrombolysis can dissolve the clot and prevent permanent paralysis.'
      }
    ]
  },
  {
    id: 'nephrology',
    name: 'Nephrology & 24/7 Dialysis Unit',
    slug: 'nephrology',
    category: 'super-specialty',
    iconName: 'Droplets',
    shortDescription: 'Modern hemodialysis unit with advanced Fresenius machines, RO water plant, peritoneal dialysis, and kidney disease care.',
    fullDescription: 'Our Nephrology department manages acute kidney injury, chronic kidney disease (CKD), diabetic nephropathy, glomerulonephritis, and dialysis requirements. The dialysis unit operates around the clock with separate dedicated machines for seropositive patients.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      '24/7 Maintenance Hemodialysis (Regular & Emergency SLED)',
      'Temporary & Tunneled Permcath Insertion for Dialysis Access',
      'Ultrasound-Guided Kidney Biopsy',
      'Continuous Renal Replacement Therapy (CRRT) for ICU Patients',
      'Plasmapheresis & Hemoperfusion for Poisoning/Autoimmune Diseases',
      'Conservative Management of Chronic Kidney Disease (CKD)'
    ],
    equipmentAndTech: [
      '15+ Fresenius 4008S Hemodialysis Machines',
      'Hospital Grade Double-Pass Reverse Osmosis (RO) Water Purification Plant',
      'Automated Dialyzer Reprocessing Systems',
      'Dedicated Isolation Dialysis Station for Hepatitis B/C Patients'
    ],
    conditionsTreated: [
      'Chronic Kidney Disease (CKD Stages 1–5)',
      'Acute Renal Failure / Sepsis-Induced Kidney Injury',
      'Diabetic Nephropathy & Hypertensive Nephrosclerosis',
      'Glomerular Diseases & Nephrotic Syndrome',
      'Polycystic Kidney Disease (ADPKD)',
      'Electrolyte Imbalances & Acid-Base Disorders'
    ],
    faqs: [
      {
        question: 'Is emergency dialysis available at night or during holidays?',
        answer: 'Yes, our dialysis center operates 24x7. We have round-the-clock trained dialysis technicians and duty nephrologists on call.'
      }
    ]
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics, Spine & Joint Replacement',
    slug: 'orthopaedics',
    category: 'surgical',
    iconName: 'Bone',
    shortDescription: 'Total Knee & Hip replacements, arthroscopic ligament reconstruction, complex fracture trauma fixation, and spine surgeries.',
    fullDescription: 'The Orthopaedic Center of Excellence offers comprehensive bone and joint care. From computerized knee and hip replacements to minimally invasive keyhole arthroscopy and complex polytrauma reconstruction, our orthopedic surgeons help patients regain painless mobility.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Total Knee Replacement (TKR - High Flex & Fast Track Rehab)',
      'Total Hip Replacement (THR - Cemented & Uncemented)',
      'Arthroscopic ACL / PCL Reconstruction & Meniscus Repair',
      'Shoulder Arthroscopy & Rotator Cuff Repair',
      'Complex Polytrauma & Pelvic-Acetabular Fracture Fixation',
      'Minimally Invasive Spine Surgery (MISS) & Decompression',
      'Pediatric Orthopaedics & Deformity Correction'
    ],
    equipmentAndTech: [
      'High-Definition Arthroscopy Tower with 4K Camera System',
      'High-Frequency C-Arm Image Intensifier in Operation Theatres',
      'Pneumatic & Electric Orthopaedic Power Drill Systems',
      'Dedicated Post-Operative Physiotherapy & Rehabilitation Center'
    ],
    conditionsTreated: [
      'Osteoarthritis of Knee & Hip',
      'Sports Injuries (Ligament Tears, Meniscal Tears)',
      'Complex Bone Fractures & Dislocations',
      'Cervical & Lumbar Disc Herniation, Spondylolisthesis',
      'Osteoporosis, Bone Infections & Non-Union Fractures'
    ],
    faqs: [
      {
        question: 'How many days of hospital stay is needed after a Knee Replacement?',
        answer: 'With our fast-track protocols, patients typically begin walking with support within 24 hours of surgery and are safely discharged within 3 to 4 days.'
      }
    ]
  },
  {
    id: 'gastroenterology',
    name: 'Medical & Surgical Gastroenterology',
    slug: 'gastroenterology',
    category: 'super-specialty',
    iconName: 'Stethoscope',
    shortDescription: 'Advanced endoscopy, colonoscopy, ERCP, liver disease management, and laparoscopic GI surgeries.',
    fullDescription: 'Providing end-to-end gastrointestinal, liver, and pancreatic care. Our dedicated endoscopy suite allows therapeutic procedures like foreign body removal, EVL banding, bile duct stone extraction, and GI bleed management without major open surgery.',
    heroImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Diagnostic & Therapeutic Upper GI Endoscopy',
      'Full-Length Colonoscopy & Polypectomy',
      'ERCP (Endoscopic Retrograde Cholangiopancreatography) for Jaundice/Stones',
      'Endoscopic Variceal Ligation (EVL Banding) for Bleeding',
      'Laparoscopic Cholecystectomy (Gallbladder Stone Removal)',
      'Laparoscopic Appendectomy & Hernia Repair',
      'Management of Cirrhosis, Hepatitis B/C, and Pancreatitis'
    ],
    equipmentAndTech: [
      'Olympus Video Endoscopy & Colonoscopy System with NBI',
      'High-Resolution Fluoroscopy C-Arm for ERCP',
      'Advanced Electrosurgical Generator & Argon Plasma Coagulator (APC)'
    ],
    conditionsTreated: [
      'GERD, Acid Peptic Disease & Stomach Ulcers',
      'Gallstones & Common Bile Duct (CBD) Stones',
      'Acute & Chronic Pancreatitis',
      'Liver Cirrhosis, Fatty Liver & Jaundice',
      'Ulcerative Colitis & Crohn’s Disease (IBD)'
    ],
    faqs: [
      {
        question: 'What is ERCP and is it safe?',
        answer: 'ERCP is a specialized endoscopic procedure to remove stones or place stents in the bile duct without making abdominal cuts. It is safe and performed under sedation.'
      }
    ]
  },
  {
    id: 'urology',
    name: 'Urology & Andrology',
    slug: 'urology',
    category: 'super-specialty',
    iconName: 'ShieldAlert',
    shortDescription: 'Laser stone removal (RIRS/URSL), prostate surgery (TURP/Laser), stricture urethroplasty, and male reproductive health.',
    fullDescription: 'Comprehensive care for urinary tract conditions, kidney stones, enlarged prostate, urinary incontinence, and uro-oncology with cutting-edge laser technology.',
    heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'RIRS (Retrograde Intrarenal Surgery) with Holmium Laser',
      'PCNL (Percutaneous Nephrolithotomy) for Large Kidney Stones',
      'URSL (Ureteroscopic Laser Lithotripsy)',
      'TURP & Laser Prostatectomy for Benign Prostatic Hyperplasia (BPH)',
      'Optical Internal Urethrotomy (OIU) & Urethroplasty',
      'Laparoscopic Urological Procedures & Bladder Tumor Resection'
    ],
    equipmentAndTech: [
      'Holmium YAG High-Watt Laser System',
      'Flexible Video Ureteroscope (Karl Storz)',
      'C-Arm Guided Uro-Surgical Workstation'
    ],
    conditionsTreated: [
      'Kidney, Ureteric & Bladder Stones',
      'Prostate Enlargement (BPH) & Urinary Blockage',
      'Urinary Tract Infections (UTI) & Hematuria',
      'Urethral Strictures & Overactive Bladder',
      'Male Infertility & Erectile Dysfunction'
    ],
    faqs: [
      {
        question: 'Can kidney stones be removed without any open cuts?',
        answer: 'Yes, with modern RIRS and Laser Lithotripsy, stones are dusted through natural urinary passages using flexible scopes and lasers without any external incision.'
      }
    ]
  },
  {
    id: 'general-surgery',
    name: 'General & Laparoscopic Surgery',
    slug: 'general-surgery',
    category: 'surgical',
    iconName: 'Scissors',
    shortDescription: 'Minimally invasive keyhole surgeries, surgical oncology, laser proctology (piles/fissure/fistula), thyroid, breast, and abdominal emergencies.',
    fullDescription: 'Equipped with cutting-edge 4K laparoscopic towers, advanced surgical oncology capabilities, and diode laser technology, our surgical department offers painless day-care procedures, oncological tumor resections, rapid healing, and minimal scarring with exceptional patient safety.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'dr-shailesh-kannur',
    keyProcedures: [
      'Surgical Oncology (Tumor & Cancer Resections)',
      'Laparoscopic Inguinal, Umbilical & Incisional Hernia Repair (TEP/TAPP)',
      'Laser Treatment for Piles (Hemorrhoids), Anal Fissures & Fistula',
      'Laparoscopic Cholecystectomy (Gallbladder Stones)',
      'Laparoscopic Appendectomy',
      'Thyroidectomy & Parotid Gland Surgeries',
      'Excision of Cysts, Lipomas & Diabetic Foot Ulcer Debridement',
      'Emergency Laparotomy for Intestinal Perforation & Obstruction'
    ],
    equipmentAndTech: [
      'Karl Storz 4K Ultra-HD Laparoscopy System',
      'Diode Laser for Proctology & Varicose Veins',
      'Harmonic Scalpel & Ultrasonic Vessel Sealer',
      'Laminar Air Flow Cleanroom Modular Operation Theatres'
    ],
    conditionsTreated: [
      'Surgical Oncology & Gastrointestinal / Soft Tissue Tumors',
      'Abdominal Hernias (Inguinal, Umbilical, Incisional)',
      'Piles, Fissure-in-Ano, Fistula & Pilonidal Sinus',
      'Gallbladder Stones & Acute Cholecystitis',
      'Appendicitis & Peritonitis',
      'Thyroid Swellings & Breast Lumps'
    ],
    faqs: [
      {
        question: 'What are the benefits of laparoscopic keyhole surgery?',
        answer: 'Laparoscopic surgery involves small incisions of less than 1 cm, which minimizes blood loss, reduces postoperative pain, decreases infection risk, and allows patients to resume normal activities within days.'
      },
      {
        question: 'What are the benefits of laser piles treatment?',
        answer: 'Laser treatment is minimally invasive, virtually bloodless, requires minimal hospital stay (often discharged within 24 hours), and allows fast return to normal routine.'
      }
    ]
  },
  {
    id: 'pulmonology',
    name: 'Respiratory Medicine & Pulmonology',
    slug: 'respiratory-medicine',
    category: 'medical',
    iconName: 'Wind',
    shortDescription: 'Advanced pulmonary diagnostics, bronchoscopy, asthma, COPD, sleep apnea, allergy clinic, and post-COVID lung care.',
    fullDescription: 'Providing comprehensive diagnostic and therapeutic solutions for acute and chronic respiratory disorders, supported by a state-of-the-art Pulmonary Function Lab and Respiratory ICU.',
    heroImage: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Fiberoptic Flexible Bronchoscopy & BAL',
      'Complete Pulmonary Function Test (Spirometry - PFT)',
      'Diagnostic & Therapeutic Pleurocentesis and Intercostal Drainage (ICD)',
      'Sleep Studies (Polysomnography) for Obstructive Sleep Apnea',
      'Non-Invasive (BiPAP/CPAP) and Invasive Mechanical Ventilation',
      'Allergy Testing & Desensitization Therapy'
    ],
    equipmentAndTech: [
      'Computerized Spirometer with Bronchodilator Reversibility',
      'Flexible Olympus Fiberoptic Video Bronchoscope',
      'Advanced High-Flow Nasal Cannula (HFNC) & BiPAP Units'
    ],
    conditionsTreated: [
      'Bronchial Asthma & Chronic Bronchitis',
      'COPD (Chronic Obstructive Pulmonary Disease) & Emphysema',
      'Pneumonia, Lung Abscess & Tuberculosis',
      'Pleural Effusion & Pneumothorax',
      'Interstitial Lung Disease (ILD) & Pulmonary Fibrosis'
    ],
    faqs: [
      {
        question: 'When should I consult a pulmonologist for a cough?',
        answer: 'If you have a cough lasting more than 2-3 weeks, breathlessness, wheezing, or blood in sputum, you should immediately consult our pulmonology specialist.'
      }
    ]
  },
  {
    id: 'critical-care',
    name: 'Emergency, Trauma & Critical Care (ICU / CCU)',
    slug: 'emergency-critical-care',
    category: 'emergency',
    iconName: 'Ambulance',
    shortDescription: '24/7 Level-1 Emergency & Trauma Care, multi-bed ICU, CCU, HDU, ventilator support, and ALS emergency ambulance network.',
    fullDescription: 'Our 24-hour Emergency Department is equipped with resuscitation bays, dedicated trauma team, emergency OT access, and instant triage protocol. Our Critical Care team includes experienced intensivists and 1:1 certified nursing staff for critically ill patients.',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Immediate Resuscitation & Advanced Cardiac Life Support (ACLS)',
      'Emergency Golden Hour Polytrauma Management',
      'Invasive Arterial & Central Venous Line Catheterization',
      'Advanced Mechanical Ventilation (ARDS Net Protocols)',
      'Emergency Pericardiocentesis, Chest Tube Insertion & Defibrillation',
      'Toxicology & Poisoning Protocol with 24/7 Dialysis Support'
    ],
    equipmentAndTech: [
      '30-Bed Centrally Monitored Multi-Specialty ICU / CCU / HDU',
      'High-End Hamilton & Dräger Invasive Mechanical Ventilators',
      'Multi-Parameter Monitors with Continuous Arrhythmia Detection',
      'Dedicated High-Flow Oxygen Plant & Medical Gas Pipeline',
      'Mobile 24/7 Advanced Life Support (ALS) Ambulances'
    ],
    conditionsTreated: [
      'Polytrauma, Road Accidents & Head Injuries',
      'Septic Shock, Multi-Organ Failure & Severe ARDS',
      'Cardiogenic Shock & Acute Cardiac Arrest Resuscitation',
      'Severe Stroke & Status Epilepticus',
      'Snake Bite Envenomation & Acute Poisoning'
    ],
    faqs: [
      {
        question: 'What is the emergency helpline number for ambulance dispatch?',
        answer: 'You can call our 24/7 Emergency & Ambulance hotline at +91 74112 00102 or +91 74112 00108 for immediate medical assistance.'
      }
    ]
  },
  {
    id: 'endocrinology',
    name: 'Endocrinology & Diabetes Care',
    slug: 'endocrinology',
    category: 'medical',
    iconName: 'Apple',
    shortDescription: 'Specialized management of complex diabetes, thyroid disorders, hormonal imbalances, and metabolic health.',
    fullDescription: 'Providing comprehensive metabolic evaluation, diabetes reversal counseling, continuous glucose monitoring (CGM), and treatment for pituitary, adrenal, and bone mineral disorders.',
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Comprehensive Diabetic Foot Care & Neuropathy Screening',
      'Continuous Glucose Monitoring System (CGMS) Placement',
      'Insulin Pump Therapy & Titration Protocols',
      'Thyroid Swelling Fine Needle Aspiration Cytology (FNAC)',
      'Gestational Diabetes Care during Pregnancy',
      'Obesity & Metabolic Syndrome Management'
    ],
    equipmentAndTech: [
      'Biothesiometer for Diabetic Neuropathy Assessment',
      'Vascular Doppler for Peripheral Blood Flow in Diabetics',
      'Automated HbA1c Glycated Hemoglobin Analyzer'
    ],
    conditionsTreated: [
      'Type 1 & Type 2 Diabetes Mellitus',
      'Diabetic Foot Ulcers & Diabetic Neuropathy',
      'Hypothyroidism, Hyperthyroidism & Hashimoto’s Disease',
      'Polycystic Ovarian Syndrome (PCOS / PCOD)',
      'Osteoporosis & Vitamin D / Calcium Deficiency'
    ],
    faqs: [
      {
        question: 'How often should a diabetic get a comprehensive foot & eye checkup?',
        answer: 'Every patient with diabetes should undergo an annual diabetic retinopathy eye screening and peripheral nerve/vascular foot assessment to prevent complications.'
      }
    ]
  },
  {
    id: 'ent-maxillofacial',
    name: 'ENT & Maxillofacial Surgery',
    slug: 'ent-maxillofacial',
    category: 'surgical',
    iconName: 'Headphones',
    shortDescription: 'Endoscopic sinus surgery (FESS), micro-ear surgery, facial trauma reconstruction, and tonsil/adenoid treatments.',
    fullDescription: 'Our ENT and Oral & Maxillofacial Surgery unit delivers high-precision microscopic ear operations, sinus clearing, facial bone fracture plating, and treatment for sleep-disordered breathing.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    keyProcedures: [
      'Endoscopic Sinus Surgery (FESS) for Chronic Sinusitis & Polyps',
      'Micro-Laryngeal Surgery for Vocal Cord Nodules & Hoarseness',
      'Tympanoplasty & Mastoidectomy for Ear Discharge & Hearing Loss',
      'Coblation / Radiofrequency Tonsillectomy & Adenoidectomy',
      'Open Reduction & Internal Fixation (ORIF) of Facial Bone Fractures',
      'Temporomandibular Joint (TMJ) Pain Management'
    ],
    equipmentAndTech: [
      'High-Magnification Zeiss Operating Microscope',
      'Storz HD Sinus Endoscopy Set',
      'Micro-Debrider for Precision Sinus Tissue Clearance'
    ],
    conditionsTreated: [
      'Chronic Sinusitis, Deviated Nasal Septum (DNS) & Polyps',
      'Otitis Media (Ear Drum Perforation & Hearing Impairment)',
      'Facial Bone Fractures from Road Accidents',
      'Tonsillitis & Adenoid Hypertrophy in Children',
      'Vertigo, Dizziness & Tinnitus'
    ],
    faqs: [
      {
        question: 'What is Coblation Tonsillectomy?',
        answer: 'Coblation utilizes low-temperature radiofrequency energy to gently dissolve tonsillar tissue, resulting in significantly less post-operative pain and faster healing compared to conventional surgery.'
      }
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-anil-patil',
    name: 'Dr. Anil Patil',
    slug: 'dr-anil-patil',
    qualifications: 'MBBS, MD (Medicine), DM (Cardiology), FESC',
    designation: 'Chief Interventional Cardiologist & Medical Director',
    departmentId: 'cardiology',
    departmentName: 'Cardiology & Cath Lab',
    experienceYears: 18,
    opdTimings: '10:00 AM - 02:00 PM & 05:00 PM - 08:00 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Dr. Anil Patil is an esteemed Interventional Cardiologist in North Karnataka with over 18 years of specialized experience. He has performed over 8,000 diagnostic angiographies, complex multi-vessel coronary angioplasties, primary PCIs for acute myocardial infarction, and pacemaker implants with high clinical success rates.',
    specialInterests: [
      'Complex Coronary Angioplasty (Bifurcation & Left Main)',
      'Primary PCI (Emergency Heart Attack Stenting)',
      'Pacemaker & AICD Implantation',
      'Radial Artery Access Angiography',
      'Heart Failure Management'
    ],
    achievements: [
      'Pioneer of 24/7 Primary Angioplasty program in Vijayapura district',
      'Fellow of European Society of Cardiology (FESC)',
      'Over 8,500+ successful coronary catheterizations performed'
    ],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi', 'Marathi'],
    rating: 4.9,
    reviewCount: 342
  },
  {
    id: 'dr-suresh-biradar',
    name: 'Dr. Suresh Biradar',
    slug: 'dr-suresh-biradar',
    qualifications: 'MBBS, MS (General Surgery), MCh (CTVS)',
    designation: 'Senior Consultant Cardio Thoracic & Vascular Surgeon',
    departmentId: 'ctvs',
    departmentName: 'Cardio Thoracic & Vascular Surgery',
    experienceYears: 16,
    opdTimings: '11:00 AM - 03:00 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Dr. Suresh Biradar brings extensive surgical expertise in adult cardiac surgery, beating-heart bypass grafting (CABG), valve repair/replacements, and thoracic vascular reconstructions. He is known for meticulous operative technique and excellent post-op outcomes.',
    specialInterests: [
      'Off-Pump Beating Heart CABG',
      'Aortic & Mitral Valve Replacement / Repair',
      'Thoracic Trauma & Vascular Emergency Surgeries',
      'Peripheral Arterial Bypass Surgery'
    ],
    achievements: [
      'Performed 1,800+ open-heart and bypass surgeries',
      'Ex-Faculty at Top Apex Cardiac Institutes'
    ],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi'],
    rating: 4.9,
    reviewCount: 198
  },
  {
    id: 'dr-priya-kulkarni',
    name: 'Dr. Priya Kulkarni',
    slug: 'dr-priya-kulkarni',
    qualifications: 'MBBS, MD (General Medicine), DM (Neurology)',
    designation: 'Senior Consultant Neurologist & Stroke Specialist',
    departmentId: 'neurology',
    departmentName: 'Neurology & Neuro Surgery',
    experienceYears: 14,
    opdTimings: '10:00 AM - 01:30 PM & 04:30 PM - 07:30 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Dr. Priya Kulkarni is a distinguished neurologist specialized in acute stroke thrombolysis, epilepsy disorders, migraine therapeutics, Parkinsonism, and autoimmune neuromuscular diseases.',
    specialInterests: [
      'Acute Stroke Thrombolysis (Golden Hour)',
      'Refractory Epilepsy & Video EEG Analysis',
      'Movement Disorders & Botox for Spasticity',
      'Peripheral Neuropathies & Myasthenia Gravis'
    ],
    achievements: [
      'Organized multiple regional stroke awareness and golden hour protocols',
      'Published clinical papers on early neuro-rehabilitation'
    ],
    image: 'https://images.unsplash.com/photo-1594824813589-91893d56bdf4?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi', 'Marathi'],
    rating: 4.8,
    reviewCount: 215
  },
  {
    id: 'dr-vijay-deshmukh',
    name: 'Dr. Vijay Deshmukh',
    slug: 'dr-vijay-deshmukh',
    qualifications: 'MBBS, MS (General Surgery), MCh (Neuro Surgery)',
    designation: 'Chief Neurosurgeon & Spine Surgeon',
    departmentId: 'neurology',
    departmentName: 'Neurology & Neuro Surgery',
    experienceYears: 15,
    opdTimings: '10:30 AM - 02:30 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Specializing in microsurgical craniotomy for brain tumors, aneurysm clipping, neuro-trauma decompression, and minimally invasive spine stabilization.',
    specialInterests: [
      'Microsurgical Brain Tumor Excision',
      'Spine Decompression & Microdiscectomy',
      'Emergency Neuro-Trauma Surgery',
      'Pediatric Hydrocephalus (Shunt & Endoscopic)'
    ],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi', 'Marathi'],
    rating: 4.9,
    reviewCount: 167
  },
  {
    id: 'dr-mahesh-hiremath',
    name: 'Dr. Mahesh Hiremath',
    slug: 'dr-mahesh-hiremath',
    qualifications: 'MBBS, MD (Medicine), DM (Nephrology), FISN',
    designation: 'Senior Consultant Nephrologist & Renal Specialist',
    departmentId: 'nephrology',
    departmentName: 'Nephrology & Dialysis',
    experienceYears: 13,
    opdTimings: '09:30 AM - 01:30 PM & 05:00 PM - 07:30 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Dr. Mahesh Hiremath oversees the 24/7 dialysis center, managing acute renal failure, chronic kidney diseases, diabetic nephropathy, and renal transplant evaluations.',
    specialInterests: [
      'Chronic Kidney Disease Management & Prevention',
      'Hemodialysis & Critical Care SLED/CRRT',
      'Permcath Insertion & Renal Biopsy',
      'Glomerular Diseases & Resistant Hypertension'
    ],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi'],
    rating: 4.8,
    reviewCount: 230
  },
  {
    id: 'dr-ramesh-patil',
    name: 'Dr. Ramesh Patil',
    slug: 'dr-ramesh-patil',
    qualifications: 'MBBS, MS (Orthopaedics), MCh (Ortho), Fellowship in Joint Replacement (Germany)',
    designation: 'Chief Joint Replacement & Orthopaedic Surgeon',
    departmentId: 'orthopaedics',
    departmentName: 'Orthopaedics & Joint Replacement',
    experienceYears: 17,
    opdTimings: '10:00 AM - 02:00 PM & 05:30 PM - 08:30 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Dr. Ramesh Patil is a renowned joint replacement surgeon with extensive experience in Computer-Assisted Total Knee and Hip Replacements, complex fracture fixations, and keyhole arthroscopic knee surgeries.',
    specialInterests: [
      'Primary & Revision Total Knee Replacement (TKR)',
      'Total Hip Replacement (THR)',
      'Arthroscopic ACL Reconstruction',
      'Complex Polytrauma & Pelvic Fractures'
    ],
    achievements: [
      'Completed over 3,500 successful joint replacement surgeries',
      'Fellowship trained in advanced arthroplasty, Germany'
    ],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi'],
    rating: 4.9,
    reviewCount: 410
  },
  {
    id: 'dr-shailesh-kannur',
    name: 'Dr. Shailesh Kannur',
    slug: 'dr-shailesh-kannur',
    qualifications: 'MS (General Surgery), Fellowship in Oncosurgery',
    designation: 'Senior Consultant General, Laparoscopic & Onco Surgeon',
    departmentId: 'general-surgery',
    departmentName: 'General & Laparoscopic Surgery',
    experienceYears: 14,
    opdTimings: '10:00 AM - 02:00 PM & 05:00 PM - 08:00 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Experienced general surgeon specializing in surgical oncology and advanced procedures. Skilled in managing complex surgical cases with a strong focus on patient safety and recovery.',
    specialInterests: [
      'Surgical Oncology & Tumor Excision Surgeries',
      'Advanced Laparoscopic & Keyhole Procedures',
      'Laparoscopic Hernia Repair (TEP/TAPP) & Cholecystectomy',
      'Laser Proctology for Piles, Fissure & Fistula',
      'Complex Gastrointestinal & Abdominal Emergencies'
    ],
    achievements: [
      'Fellowship in Surgical Oncology (Oncosurgery)',
      'Extensive clinical experience in complex oncological and advanced laparoscopic resections',
      'Specialized in patient safety protocols and fast-track postoperative recovery'
    ],
    image: DR_SHAILESH_KANNUR_IMAGE,
    languages: ['Kannada', 'English', 'Hindi', 'Marathi'],
    rating: 4.9,
    reviewCount: 280
  },
  {
    id: 'dr-santosh-kulkarni',
    name: 'Dr. Santosh Kulkarni',
    slug: 'dr-santosh-kulkarni',
    qualifications: 'MBBS, MS (General Surgery), DNB (Surgical Gastroenterology)',
    designation: 'Senior Consultant Surgical Gastroenterologist & Laparoscopic Surgeon',
    departmentId: 'gastroenterology',
    departmentName: 'Gastroenterology',
    experienceYears: 14,
    opdTimings: '11:00 AM - 03:00 PM & 06:00 PM - 08:00 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Expert in advanced GI laparoscopy, ERCP stone retrieval, gallbladder surgery, hernia repair, and colorectal surgeries.',
    specialInterests: [
      'Advanced Laparoscopic GI Surgeries',
      'Therapeutic Endoscopy & ERCP',
      'Laparoscopic Cholecystectomy & Hernia',
      'Laser Proctology for Piles & Fistula'
    ],
    image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi', 'Marathi'],
    rating: 4.8,
    reviewCount: 185
  },
  {
    id: 'dr-shrikant-joshi',
    name: 'Dr. Shrikant Joshi',
    slug: 'dr-shrikant-joshi',
    qualifications: 'MBBS, MS (General Surgery), MCh (Urology)',
    designation: 'Chief Urologist, Andrologist & Renal Transplant Surgeon',
    departmentId: 'urology',
    departmentName: 'Urology & Andrology',
    experienceYears: 15,
    opdTimings: '10:00 AM - 01:30 PM & 05:00 PM - 07:30 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Specialist in Laser Kidney Stone Surgery (RIRS / PCNL), Holmium Laser Prostatectomy, and reconstructive urology.',
    specialInterests: [
      'RIRS & Mini-PCNL for Kidney Stones',
      'Laser Prostate Surgery (HoLEP / TURP)',
      'Stricture Urethra Repair',
      'Urological Oncology'
    ],
    image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi'],
    rating: 4.9,
    reviewCount: 275
  },
  {
    id: 'dr-sunil-desai',
    name: 'Dr. Sunil Desai',
    slug: 'dr-sunil-desai',
    qualifications: 'MBBS, MD (Respiratory Medicine), FCCP',
    designation: 'Senior Consultant Pulmonologist & Chest Specialist',
    departmentId: 'pulmonology',
    departmentName: 'Respiratory Medicine',
    experienceYears: 12,
    opdTimings: '10:00 AM - 02:00 PM & 04:30 PM - 07:00 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Experienced in asthma, COPD, interstitial lung disease, bronchoscopy, and critical care pulmonary ventilation.',
    specialInterests: [
      'Bronchoscopy & Interventional Pulmonology',
      'Severe Asthma & COPD Management',
      'Sleep Apnea & Polysomnography Studies',
      'Post-Infectious Lung Fibrosis Rehabilitation'
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi'],
    rating: 4.8,
    reviewCount: 140
  },
  {
    id: 'dr-kavitha-nataraj',
    name: 'Dr. Kavitha Nataraj',
    slug: 'dr-kavitha-nataraj',
    qualifications: 'MBBS, MD (General Medicine), Fellowship in Diabetology (CMC Vellore)',
    designation: 'Senior Consultant Physician & Diabetologist',
    departmentId: 'endocrinology',
    departmentName: 'Endocrinology & Diabetology',
    experienceYears: 13,
    opdTimings: '09:00 AM - 01:00 PM & 05:00 PM - 07:30 PM (Mon-Sat)',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    bio: 'Dedicated physician specializing in adult diabetes management, thyroid disorders, hypertension, and preventive health.',
    specialInterests: [
      'Comprehensive Diabetes Management & Foot Clinic',
      'Thyroid Disorders in Pregnancy',
      'Hypertension & Lifestyle Metabolic Disorders',
      'Adult Preventive Vaccinations'
    ],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi', 'Telugu'],
    rating: 4.9,
    reviewCount: 310
  },
  {
    id: 'dr-prashant-goudar',
    name: 'Dr. Prashant Goudar',
    slug: 'dr-prashant-goudar',
    qualifications: 'MBBS, MD (Anaesthesiology), IDCCM (Critical Care)',
    designation: 'Chief Intensivist & Head of Critical Care (ICU/CCU)',
    departmentId: 'critical-care',
    departmentName: 'Emergency & Critical Care',
    experienceYears: 15,
    opdTimings: '24 Hours On-Call & Critical Care Ward Rounds',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    bio: 'Leads our 30-bed intensive care units, overseeing invasive hemodynamic monitoring, sepsis protocols, and emergency resuscitation.',
    specialInterests: [
      'Multi-Organ Dysfunction & Septic Shock',
      'Advanced Mechanical Ventilation & ARDS Management',
      'Cardiac Resuscitation & Post-CABG ICU Care',
      'Invasive Ultrasound Guided Line Insertions'
    ],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    languages: ['Kannada', 'English', 'Hindi'],
    rating: 4.9,
    reviewCount: 155
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'cath-lab',
    title: 'Advanced Digital Flat-Panel Cath Lab',
    slug: 'cath-lab',
    tag: 'Heart Care Center',
    iconName: 'HeartHandshake',
    shortDescription: 'High-precision digital angiography, emergency primary angioplasty (24/7), pacemaker implantations, and pediatric cardiac interventions.',
    detailedDescription: 'The Cath Lab suite at Arogyadhama Hospital features world-class flat-panel imaging systems that provide razor-sharp coronary roadmaps with minimal radiation exposure. Supported by fractional flow reserve (FFR), intravascular ultrasound (IVUS), and intra-aortic balloon pump (IABP), our interventional team provides immediate emergency stenting for heart attack patients.',
    highlights: [
      '24/7 Emergency Primary Angioplasty activation',
      'Radial artery route preference for painless discharge',
      'Dedicated holding and post-procedure recovery area',
      'Backup cardiac surgical theater on standby'
    ],
    operatingHours: '24 Hours / 7 Days a week',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'icu-ccu',
    title: '30-Bed Centrally Monitored ICU & CCU',
    slug: 'icu-ccu',
    tag: 'Critical Care',
    iconName: 'Activity',
    shortDescription: 'Specialized Coronary Care Unit (CCU), Neuro ICU, Surgical ICU, and High Dependency Units (HDU) with 1:1 nurse-to-patient ratio.',
    detailedDescription: 'Designed according to international critical care standards, our ICUs feature HEPA filtration, dedicated isolation beds, invasive hemodynamic monitoring, advanced multi-mode ventilators, and central continuous cardiac telemetry.',
    highlights: [
      '1:1 Certified Critical Care Nursing ratio',
      'Round-the-clock Intensivist and Anaesthetist presence',
      'Latest multi-parameter monitors with automated alarms',
      'Strict infection control and zero-tolerance barrier protocols'
    ],
    operatingHours: '24/7 Dedicated Monitoring',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dialysis-unit',
    title: '24/7 Advanced Hemodialysis Center',
    slug: 'dialysis-unit',
    tag: 'Renal Care',
    iconName: 'Droplets',
    shortDescription: 'Modern hemodialysis unit equipped with Fresenius machines, double-pass RO water plant, and isolated seropositive stations.',
    detailedDescription: 'Our dialysis unit is one of the largest in Vijayapura, conducting over 1,000 dialysis sessions per month. We ensure strict hygiene, pyrogen-free ultra-pure water, and comfortable motorized recliners for patient convenience.',
    highlights: [
      '24/7 emergency dialysis on-call availability',
      'Separate dedicated stations for Hepatitis B/C positive patients',
      'High-flux biocompatible dialyzers for optimal toxin clearance',
      'Ayushman Bharat & Arogya Karnataka cashless support'
    ],
    operatingHours: '24 Hours / 7 Days (3 Shifts + Emergency Night Dialysis)',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'modular-ot',
    title: 'Modular Operation Theatres with Laminar Air Flow',
    slug: 'modular-ot',
    tag: 'Surgical Suite',
    iconName: 'Shield',
    shortDescription: 'Class 10,000 cleanroom modular OTs with HEPA filtration, antimicrobial cladding, and cutting-edge 4K surgical imaging towers.',
    detailedDescription: 'Four ultra-modern operation theatres designed for cardiac bypass surgeries, neurosurgery, total joint replacements, and advanced laparoscopy. Fitted with seamless antimicrobial walls and positive pressure airflow to achieve near-zero infection rates.',
    highlights: [
      'Class 10,000 Laminar Air Flow with 0.3-micron HEPA filters',
      'Integrated surgical monitors and C-Arm digital imaging',
      'Centralized medical gas manifolds and suction lines',
      'Adjoining sterile post-anesthesia recovery room (PACU)'
    ],
    operatingHours: '24/7 Emergency & Elective Schedules',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'radiology-diagnostics',
    title: '24/7 Laboratory & Digital Radiology',
    slug: 'radiology-diagnostics',
    tag: 'Diagnostics',
    iconName: 'Scan',
    shortDescription: 'Full-range automated biochemistry, hematology, pathology, digital X-Ray, 2D ECHO, TMT, USG Color Doppler, and CT scan.',
    detailedDescription: 'Accreditation-standard clinical diagnostics with barcode tracking, rapid turnaround times, and direct online test report delivery. All critical alert values are immediately communicated to treating consultants.',
    highlights: [
      'Fully automated 5-part cell counter & dry biochemistry analyzers',
      'High-resolution ultrasound with abdominal and vascular Doppler probes',
      'Digital 500mA X-Ray with low-dose radiation protocols',
      'Cardiac diagnostics: 2D ECHO, Strain imaging, TMT, Holter'
    ],
    operatingHours: '24 Hours Open',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pharmacy',
    title: '24/7 In-House Pharmacy',
    slug: 'pharmacy',
    tag: 'Pharmacy',
    iconName: 'Pill',
    shortDescription: 'Fully stocked hospital pharmacy providing genuine prescription medicines, critical care injectables, cardiac stents, and surgical consumables.',
    detailedDescription: 'Our on-premise pharmacy functions 24 hours a day with strict temperature-controlled storage (2-8°C cold chain) for vaccines, insulin, and cardiac medications.',
    highlights: [
      '100% genuine medications directly from authorized manufacturers',
      'Emergency medicines, thrombolytic agents, and cardiac emergency drugs in stock',
      'Computerized inventory and computerized billing',
      'Bedside medicine delivery for admitted patients'
    ],
    operatingHours: '24 Hours / 365 Days',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ambulance',
    title: '24/7 Advanced Life Support (ALS) Ambulance',
    slug: 'ambulance',
    tag: 'Emergency Transit',
    iconName: 'Truck',
    shortDescription: 'Fleet of GPS-tracked emergency ambulances with transport ventilators, defibrillators, cardiac monitors, and emergency medical technicians.',
    detailedDescription: 'Arogyadhama’s mobile emergency ICU ambulances ensure safe patient transfer with pre-hospital stabilization for cardiac arrest, stroke, and road accidents across Vijayapura and surrounding districts.',
    highlights: [
      'Portable ventilator, multi-channel monitor & defibrillator on board',
      'Trained Emergency Medical Technician (EMT) accompanying every trip',
      'Direct radio link to hospital emergency department for pre-arrival prep',
      'Rapid response dispatch across Vijayapura and highway corridors'
    ],
    operatingHours: '24 Hours On-Demand Hotline: +91 74112 00108',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cashless-tpa',
    title: 'Cashless Mediclaim & Ayushman Bharat TPA Desk',
    slug: 'cashless-tpa',
    tag: 'Insurance Desk',
    iconName: 'CreditCard',
    shortDescription: 'Dedicated insurance coordination desk for Ayushman Bharat (PM-JAY), Arogya Karnataka, and all major private health insurance TPAs.',
    detailedDescription: 'Our insurance helpdesk facilitates hassle-free pre-authorization, document verification, and cashless discharge processing so that patients can focus solely on recovery without financial stress.',
    highlights: [
      'Empanelled with Ayushman Bharat PM-JAY & Arogya Karnataka',
      'Tie-up with 30+ leading private health insurance providers and TPAs',
      'Assistance with ECHS, CGHS and corporate medical claims',
      'Dedicated insurance liaison officers available 9 AM - 8 PM'
    ],
    operatingHours: '09:00 AM - 08:00 PM (Emergency pre-auth 24x7)',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'comprehensive-heart',
    name: 'Arogyadhama Comprehensive Heart Checkup',
    slug: 'comprehensive-heart-checkup',
    tagline: 'Complete cardiovascular risk evaluation and early heart disease detection by Chief Cardiologist',
    price: 2499,
    originalPrice: 4500,
    recommendedFor: 'Individuals aged 30+, individuals with high blood pressure, diabetes, smoking history, or family history of heart disease.',
    testCount: 22,
    fastingRequired: true,
    turnaroundHours: 'Same Day (4 Hours)',
    popular: true,
    includedCategories: [
      {
        categoryName: 'Cardiac Investigations',
        tests: ['2D Echocardiography with Doppler (2D ECHO)', 'Treadmill Stress Test (TMT / Stress ECG)', '12-Lead Resting ECG', 'Cardiologist Clinical Consultation']
      },
      {
        categoryName: 'Lipid & Cardiac Biomarkers',
        tests: ['Total Cholesterol', 'HDL Good Cholesterol', 'LDL Bad Cholesterol', 'VLDL & Triglycerides', 'Total Cholesterol / HDL Ratio']
      },
      {
        categoryName: 'Diabetic & Renal Profile',
        tests: ['Fasting Blood Sugar (FBS)', 'Post-Prandial Blood Sugar (PPBS)', 'Serum Creatinine', 'Blood Urea Nitrogen (BUN)', 'Serum Uric Acid']
      },
      {
        categoryName: 'General Health & Liver',
        tests: ['Complete Blood Count (CBC - 16 Parameters)', 'Urine Routine & Microscopic Analysis', 'Chest X-Ray (PA View)', 'Dietary & Lifestyle Counseling']
      }
    ]
  },
  {
    id: 'master-health-check',
    name: 'Executive Master Health Checkup',
    slug: 'executive-master-health-checkup',
    tagline: '360-degree full-body health audit for vital organs including heart, liver, kidneys, and lungs.',
    price: 3499,
    originalPrice: 6200,
    recommendedFor: 'Working professionals, men and women aged 25–65 desiring an in-depth annual preventive wellness audit.',
    testCount: 45,
    fastingRequired: true,
    turnaroundHours: 'Same Day (5 Hours)',
    popular: false,
    includedCategories: [
      {
        categoryName: 'Heart & Pulmonary Health',
        tests: ['12-Lead ECG', '2D ECHO or TMT', 'Chest X-Ray Digital', 'Pulmonary Function Screening (Spirometry)']
      },
      {
        categoryName: 'Complete Liver Function Tests (LFT)',
        tests: ['SGOT (AST)', 'SGPT (ALT)', 'Serum Bilirubin (Total & Direct)', 'Alkaline Phosphatase (ALP)', 'Total Proteins & Albumin/Globulin Ratio']
      },
      {
        categoryName: 'Kidney Function & Electrolytes',
        tests: ['Serum Creatinine', 'Blood Urea', 'Serum Electrolytes (Sodium, Potassium, Chloride)', 'Serum Calcium', 'Complete Urine Analysis']
      },
      {
        categoryName: 'Diabetes & Blood Health',
        tests: ['HbA1c (3-Month Average Glucose)', 'Fasting Blood Sugar', 'Complete Blood Picture with ESR', 'Blood Grouping & Rh Typing']
      },
      {
        categoryName: 'Consultations',
        tests: ['Consultation with Senior General Physician', 'Dietitian Lifestyle Assessment', 'Ophthalmology / Vision Screening']
      }
    ]
  },
  {
    id: 'diabetic-wellness',
    name: 'Diabetic Comprehensive & Organ Protection Package',
    slug: 'diabetic-wellness-package',
    tagline: 'Focused assessment to prevent diabetic complications affecting heart, kidneys, eyes, and nerves.',
    price: 1899,
    originalPrice: 3200,
    recommendedFor: 'Known diabetic patients and individuals with pre-diabetes or borderline blood sugar levels.',
    testCount: 18,
    fastingRequired: true,
    turnaroundHours: '3 Hours',
    popular: false,
    includedCategories: [
      {
        categoryName: 'Glycemic Control',
        tests: ['HbA1c (Glycated Hemoglobin)', 'Fasting Blood Glucose', 'Post-Prandial Blood Glucose', 'Estimated Average Glucose (eAG)']
      },
      {
        categoryName: 'Kidney & Microvascular Assessment',
        tests: ['Urine Microalbumin / Creatinine Ratio (UACR)', 'Serum Creatinine & eGFR Calculation', 'Serum Electrolytes']
      },
      {
        categoryName: 'Cardiac & Nerve Risk',
        tests: ['Lipid Profile Complete', '12-Lead Resting ECG', 'Biothesiometry Foot Neuropathy Examination', 'Diabetologist Consultation & Foot Care Guidance']
      }
    ]
  },
  {
    id: 'senior-citizen-health',
    name: 'Senior Citizen Vitality & Joint Health Package',
    slug: 'senior-citizen-health-package',
    tagline: 'Tailored specifically for seniors (60+) to evaluate bone density, cardiac stability, arthritis, and organ reserves.',
    price: 2999,
    originalPrice: 5400,
    recommendedFor: 'Men and women aged 60 and above.',
    testCount: 32,
    fastingRequired: true,
    turnaroundHours: 'Same Day',
    popular: false,
    includedCategories: [
      {
        categoryName: 'Bone & Joint Health',
        tests: ['Serum Calcium', 'Serum Phosphorus', 'Vitamin D3 (25-OH)', 'Serum Uric Acid (Gout Screening)', 'Digital X-Ray Knees (Both) AP & Lateral']
      },
      {
        categoryName: 'Vital Organ Screen',
        tests: ['12-Lead ECG', '2D ECHO', 'Kidney Function Test', 'Liver Function Test', 'Complete Hemogram (Anemia Screen)']
      },
      {
        categoryName: 'Specialist Reviews',
        tests: ['Orthopedic Surgeon Joint Consultation', 'Cardiologist Review', 'Physiotherapy Mobility Assessment']
      }
    ]
  }
];

export const INSURANCE_PARTNERS: InsurancePartner[] = [
  { id: 'ab-pmjay', name: 'Ayushman Bharat (PM-JAY)', type: 'government', logoPlaceholder: 'AB-PMJAY', description: 'Govt. Scheme providing free tertiary healthcare up to ₹5 Lakhs per family.' },
  { id: 'arogya-karnataka', name: 'Arogya Karnataka (SAST)', type: 'government', logoPlaceholder: 'Arogya Karnataka', description: 'Universal health coverage scheme of the Government of Karnataka.' },
  { id: 'echs', name: 'ECHS (Ex-Servicemen Contributory Health Scheme)', type: 'government', logoPlaceholder: 'ECHS', description: 'Healthcare for Armed Forces veterans and their dependents.' },
  { id: 'star-health', name: 'Star Health & Allied Insurance', type: 'private', logoPlaceholder: 'Star Health', description: 'Seamless cashless authorization for all Star Health policyholders.' },
  { id: 'hdfc-ergo', name: 'HDFC ERGO Health Insurance', type: 'private', logoPlaceholder: 'HDFC ERGO', description: 'Cashless claims approval within 60 minutes.' },
  { id: 'icici-lombard', name: 'ICICI Lombard Health Care', type: 'private', logoPlaceholder: 'ICICI Lombard', description: 'Direct cashless hospitalization coverage.' },
  { id: 'care-health', name: 'Care Health Insurance (Religare)', type: 'private', logoPlaceholder: 'Care Health', description: '24/7 cashless pre-authorization support.' },
  { id: 'bajaj-allianz', name: 'Bajaj Allianz General Insurance', type: 'private', logoPlaceholder: 'Bajaj Allianz', description: 'Comprehensive network hospital cashless claims.' },
  { id: 'niva-bupa', name: 'Niva Bupa (Max Bupa) Health Insurance', type: 'private', logoPlaceholder: 'Niva Bupa', description: 'Instant cashless approvals and cashless OPD assistance.' },
  { id: 'tata-aig', name: 'Tata AIG General Insurance', type: 'private', logoPlaceholder: 'Tata AIG', description: 'Fast-track cashless mediclaim support.' },
  { id: 'medi-assist', name: 'Medi Assist TPA', type: 'tpa', logoPlaceholder: 'Medi Assist', description: 'India’s largest health benefits TPA administrator.' },
  { id: 'paramount-tpa', name: 'Paramount Health Services TPA', type: 'tpa', logoPlaceholder: 'Paramount TPA', description: 'Empanelled across public & private sector insurers.' },
  { id: 'raksha-tpa', name: 'Raksha Health Insurance TPA', type: 'tpa', logoPlaceholder: 'Raksha TPA', description: 'Dedicated desk for paperless hospital admission.' },
  { id: 'heritage-tpa', name: 'Heritage Health Insurance TPA', type: 'tpa', logoPlaceholder: 'Heritage TPA', description: 'Round-the-clock cashless authorization.' },
  { id: 'vidal-tpa', name: 'Vidal Health TPA (TTK)', type: 'tpa', logoPlaceholder: 'Vidal Health', description: 'Pre-auth and claim processing partner.' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'signs-of-heart-attack-vs-acidity',
    title: 'Recognizing Early Signs of a Heart Attack: Is it Acidity or Angina?',
    slug: 'signs-of-heart-attack-vs-acidity',
    excerpt: 'Chest tightness, jaw discomfort, sweating, or indigestion? Learn how to distinguish between gas/acidity and a life-threatening heart attack, and why the Golden Hour is crucial.',
    content: `Many patients in emergency rooms report having thought their heart attack symptoms were simply "gas" or "severe acidity." Delaying medical help by taking antacids during a cardiac event can lead to irreversible damage to the heart muscle.

### Key Warning Signs of a Heart Attack:
- **Pressure or Tightness:** A sensation of a heavy weight, squeezing, or fullness in the center of the chest lasting more than a few minutes.
- **Pain Radiation:** Discomfort spreading to the left shoulder, neck, jaw, back, or both arms.
- **Unexplained Cold Sweating:** Breaking out in cold sweats without strenuous exertion.
- **Shortness of Breath:** Difficulty breathing with or without chest tightness.
- **Nausea and Lightheadedness:** Sudden dizziness, blackouts, or vomiting.

### Why Acidity is Different:
While acid reflux can produce burning pain behind the breastbone, it typically occurs right after heavy or spicy meals, improves when sitting upright, and does not cause breathlessness or radiation to the jaw and arms.

### What is the "Golden Hour"?
The first 60 minutes after the onset of heart attack symptoms is known as the **Golden Hour**. If the blocked coronary artery is reopened in our digital Cath Lab (via Primary Angioplasty) within this window, the vast majority of heart muscle can be completely preserved.

**Emergency Action:** If you or a family member experience sudden heavy chest pressure with sweating or breathlessness, do not wait. Call Arogyadhama Hospital Emergency at **+91 74112 00102** immediately.`,
    category: 'Cardiology',
    authorName: 'Dr. Anil Patil',
    authorDesignation: 'Chief Interventional Cardiologist',
    date: 'February 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    tags: ['Heart Attack', 'Cardiology', 'Emergency', 'Health Tips', 'Angioplasty'],
    views: 1420
  },
  {
    id: 'stroke-golden-hour-fast-rule',
    title: 'Acute Brain Stroke: The B.E. F.A.S.T. Rule to Save Lives and Prevent Paralysis',
    slug: 'stroke-golden-hour-fast-rule',
    excerpt: 'Stroke is a medical brain emergency. Learn the BE-FAST acronym to quickly spot a stroke and understand why reaching a stroke-ready hospital within 4.5 hours is critical.',
    content: `A brain stroke occurs when the blood supply to part of the brain is suddenly interrupted by a clot (Ischemic Stroke) or when a blood vessel bursts (Hemorrhagic Stroke). Every minute without blood flow causes millions of brain neurons to die.

### The BE-FAST Test for Stroke Recognition:
- **B (Balance):** Sudden loss of balance, unsteadiness, or difficulty walking.
- **E (Eyes):** Sudden loss of vision, blurriness, or double vision in one or both eyes.
- **F (Face Drooping):** One side of the face sags or goes numb when trying to smile.
- **A (Arm Weakness):** One arm feels weak or numb; unable to raise both arms equally.
- **S (Speech Difficulty):** Slurred speech, difficulty finding words, or inability to speak.
- **T (Time to Call):** If you notice any of these signs, time is brain! Rush to Arogyadhama Hospital immediately.

### IV Thrombolysis (Clot Buster Injection):
If an ischemic stroke patient reaches our emergency within **4.5 hours** of symptom onset, a specialized clot-dissolving medicine (tPA) can be administered after an immediate CT scan, often completely reversing paralysis.

At Arogyadhama Hospital, our stroke triage team, 24/7 CT imaging, and Neuro-ICU ensure rapid response around the clock.`,
    category: 'Neurology',
    authorName: 'Dr. Priya Kulkarni',
    authorDesignation: 'Senior Consultant Neurologist',
    date: 'January 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    tags: ['Brain Stroke', 'Neurology', 'BE-FAST', 'Emergency Care', 'Neuro ICU'],
    views: 980
  },
  {
    id: 'modern-knee-replacement-myths',
    title: 'Overcoming Knee Arthritis: Facts & Myths About Total Knee Replacement Surgery',
    slug: 'modern-knee-replacement-myths',
    excerpt: 'Severe knee pain restricting your walking? Discover modern fast-track knee replacement techniques, recovery timelines, and why you do not have to live with debilitating arthritis.',
    content: `Osteoarthritis is one of the most common causes of knee pain in adults over 50. When cartilage wears down completely (bone-on-bone friction), even walking a few steps becomes excruciating.

### Common Myths vs. Facts:

**Myth 1:** *"I will be bedridden for months after knee replacement surgery."*  
**Fact:** With modern minimally invasive techniques and multimodal pain control, patients take their first supported steps within 24 hours of surgery and climb stairs within 3 to 4 days.

**Myth 2:** *"Artificial knee joints only last 5 to 7 years."*  
**Fact:** High-flexion titanium and cobalt-chrome implants combined with advanced polyethylene liners now routinely last 20 to 25+ years with normal active living.

**Myth 3:** *"Surgery is too dangerous for elderly people with diabetes or hypertension."*  
**Fact:** With thorough pre-operative cardiac, renal, and diabetic clearance at a multi-specialty center like Arogyadhama Hospital, senior citizens in their 70s and 80s safely undergo successful joint replacement.

### When Should You Consider Surgery?
- Constant knee pain interfering with sleep and daily walking.
- Bowing or deformity of legs.
- Failure of medicines, physiotherapy, and lifestyle modifications to provide relief.

Consult our Joint Replacement department for personalized orthopedic evaluation and digital X-Ray assessment.`,
    category: 'Orthopaedics',
    authorName: 'Dr. Ramesh Patil',
    authorDesignation: 'Chief Joint Replacement Surgeon',
    date: 'January 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    tags: ['Knee Replacement', 'Joint Pain', 'Orthopaedics', 'Arthritis', 'Senior Care'],
    views: 1210
  },
  {
    id: 'protecting-kidneys-diabetes-hypertension',
    title: 'Silent Kidney Damage: How Diabetics & Hypertensive Patients Can Protect Renal Health',
    slug: 'protecting-kidneys-diabetes-hypertension',
    excerpt: 'Kidney disease often progresses silently without early pain. Discover key urine and blood markers, diet tips, and essential lifestyle modifications to keep your kidneys healthy.',
    content: `Chronic Kidney Disease (CKD) is often termed a "silent killer" because kidney function can drop by up to 60-70% before a patient feels noticeable symptoms such as swelling or fatigue. In India, uncontrolled diabetes and high blood pressure account for over two-thirds of all kidney failure cases.

### Early Warning Markers to Check Every 6 Months:
1. **Serum Creatinine & eGFR:** Measures how effectively the kidneys filter waste from the bloodstream.
2. **Urine Microalbumin (UACR):** Detects early microscopic protein leakage through kidney filters long before routine urine tests show protein.
3. **Blood Pressure Control:** Keeping BP strictly below 130/80 mmHg protects fragile glomeruli.
4. **HbA1c Target:** Maintaining HbA1c below 7.0% prevents glucose damage to renal microvessels.

### Essential Rules for Kidney Protection:
- **Avoid Over-The-Counter Painkillers:** Frequent use of NSAIDs (ibuprofen, diclofenac, etc.) can cause acute tubular necrosis and chronic kidney harm.
- **Moderate Salt Intake:** Limit daily salt to less than 5 grams (1 level teaspoon).
- **Adequate Hydration:** Drink 2 to 2.5 liters of clean water daily unless advised otherwise by your doctor for heart or kidney issues.
- **Routine Screening:** Every diabetic patient should undergo an annual kidney function test.

Arogyadhama Hospital provides full-spectrum renal care, from early preventative nephrology clinics to 24/7 hemodialysis and vascular access surgery.`,
    category: 'Nephrology',
    authorName: 'Dr. Mahesh Hiremath',
    authorDesignation: 'Senior Consultant Nephrologist',
    date: 'December 20, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    tags: ['Kidney Health', 'Nephrology', 'Diabetes', 'Dialysis', 'Blood Pressure'],
    views: 1050
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Basavaraj Patil',
    age: 58,
    location: 'Vijayapura',
    treatment: 'Emergency Primary Angioplasty (Heart Attack)',
    department: 'Cardiology',
    doctorTreated: 'Dr. Anil Patil',
    quote: 'When I had severe chest pain and breathlessness at 2 AM, my family rushed me to Arogyadhama Hospital. The Cath Lab team was ready in minutes. Dr. Anil Patil performed angioplasty with zero delay. Today I am living a healthy, active life thanks to this hospital.',
    detailedStory: 'The prompt decision making, clear explanation to my family, and transparent cashless insurance claim support under our health card made a stressful emergency completely manageable.',
    rating: 5,
    date: 'January 2026',
    verified: true
  },
  {
    id: 'test-2',
    patientName: 'Shridevi Biradar',
    age: 64,
    location: 'Bagalkot',
    treatment: 'Bilateral Total Knee Replacement (TKR)',
    department: 'Orthopaedics',
    doctorTreated: 'Dr. Ramesh Patil',
    quote: 'For 5 years I could barely walk 50 meters due to severe knee arthritis. Dr. Ramesh Patil performed knee replacement surgery at Arogyadhama Hospital. Within 3 days I was walking comfortably with the physio team. I can now do all my household work and temple visits without pain!',
    rating: 5,
    date: 'December 2025',
    verified: true
  },
  {
    id: 'test-3',
    patientName: 'Mallikarjun Hadapad',
    age: 49,
    location: 'Indi, Vijayapura',
    treatment: 'Acute Ischemic Stroke Thrombolysis',
    department: 'Neurology',
    doctorTreated: 'Dr. Priya Kulkarni',
    quote: 'My father suddenly developed face deviation and arm weakness. We reached Arogyadhama within 2 hours. Dr. Priya Kulkarni and the stroke team administered the clot-buster injection immediately. By the next morning, he had fully regained arm strength and clear speech.',
    rating: 5,
    date: 'February 2026',
    verified: true
  },
  {
    id: 'test-4',
    patientName: 'Kallappa Bagali',
    age: 62,
    location: 'Muddebihal',
    treatment: 'Chronic Kidney Disease & Hemodialysis Care',
    department: 'Nephrology',
    doctorTreated: 'Dr. Mahesh Hiremath',
    quote: 'The dialysis unit at Arogyadhama is exceptionally clean, well-equipped, and run by caring technicians. Under Ayushman Bharat, we received completely cashless dialysis treatment without any hassle. We are forever grateful.',
    rating: 5,
    date: 'January 2026',
    verified: true
  },
  {
    id: 'test-5',
    patientName: 'Rukmini G.',
    age: 42,
    location: 'Sindagi',
    treatment: 'Laparoscopic Gallbladder Removal (Cholecystectomy)',
    department: 'General Surgery',
    doctorTreated: 'Dr. Santosh Kulkarni',
    quote: 'I had severe gallstone pain for months. The keyhole surgery was done smoothly with tiny incisions. I was discharged in just 2 days with very little pain. The nurses and staff took wonderful care of me.',
    rating: 5,
    date: 'November 2025',
    verified: true
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'emergency',
    question: 'What should I do in a medical emergency? Is your emergency department open 24/7?',
    answer: 'Yes, our Emergency & Trauma Center is open 24 hours a day, 365 days a year. Call our 24/7 emergency hotline at +91 74112 00102 or ambulance at +91 74112 00108 for immediate assistance. On arrival, emergency triage begins immediately.'
  },
  {
    id: 'faq-2',
    category: 'insurance',
    question: 'How do I avail cashless treatment under Ayushman Bharat (PM-JAY) or private insurance?',
    answer: 'Please bring the patient’s Ayushman Bharat card / PM-JAY card, Aadhaar card, Ration card, or your private health insurance e-card along with ID proof to our Cashless TPA desk. Our insurance coordinators will process the pre-authorization immediately.'
  },
  {
    id: 'faq-3',
    category: 'appointment',
    question: 'How can I book an appointment with a specialist doctor?',
    answer: 'You can book an appointment directly through this website using the "Book Appointment" button, by calling our reception desk at +91 8352 222102, or via WhatsApp at +91 74112 00102.'
  },
  {
    id: 'faq-4',
    category: 'admission',
    question: 'What are the visiting hours for relatives of admitted patients?',
    answer: 'General Ward visiting hours: Morning 11:00 AM to 01:00 PM and Evening 05:00 PM to 07:00 PM. ICU visiting hours: 12:00 PM to 01:00 PM and 05:30 PM to 06:30 PM (Only one attendant at a time to prevent infections).'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'Where is Arogyadhama Hospital located in Vijayapura?',
    answer: 'Arogyadhama Heart & Super Specialty Hospital is located on Dargah Jail Road, Vijayapura (Bijapur), Karnataka - 586103. It is easily accessible by public transport and has dedicated emergency vehicle access.'
  },
  {
    id: 'faq-6',
    category: 'admission',
    question: 'What room categories are available for inpatients?',
    answer: 'We offer multiple inpatient accommodation options including General Wards (male/female), Semi-Private Twin Sharing Rooms, Single Private Deluxe Air-Conditioned Rooms, and Super Deluxe VIP Suites with attendant sofas and LED TVs.'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'g-1',
    title: 'Digital Cath Lab Suite',
    category: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Flat panel digital coronary angiography and angioplasty system.'
  },
  {
    id: 'g-2',
    title: 'Modular Operation Theatre',
    category: 'Surgical OT',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    description: 'Class 10,000 cleanroom laminar flow OT for cardiac and joint replacement surgery.'
  },
  {
    id: 'g-3',
    title: '30-Bed Intensive Care Unit (ICU)',
    category: 'Critical Care',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-parameter central telemetry, advanced mechanical ventilators, and 1:1 nursing.'
  },
  {
    id: 'g-4',
    title: '24/7 Hemodialysis Unit',
    category: 'Renal Center',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description: 'Modern dialysis machines with double-pass reverse osmosis RO water purification.'
  },
  {
    id: 'g-5',
    title: 'Diagnostic Radiology & 2D ECHO Suite',
    category: 'Diagnostics',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    description: 'GE 4D Cardiovascular Ultrasound, Stress ECG (TMT), and Digital X-Ray.'
  },
  {
    id: 'g-6',
    title: '24/7 Emergency & Trauma Bay',
    category: 'Emergency',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80',
    description: 'Immediate trauma resuscitation, crash carts, and direct access to emergency OT.'
  },
  {
    id: 'g-7',
    title: 'Private Deluxe Inpatient Rooms',
    category: 'Wards & Rooms',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80',
    description: 'Comfortable air-conditioned private rooms designed for peaceful patient recovery.'
  },
  {
    id: 'g-8',
    title: '24-Hour In-House Pharmacy',
    category: 'Pharmacy',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    description: 'Fully stocked genuine medicines, cardiac emergency drugs, and surgical consumables.'
  }
];

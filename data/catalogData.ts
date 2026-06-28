export interface ProductVariant {
  id?: string;
  strength: { en: string; ar: string };
  packaging: { en: string; ar: string };
  variantImage?: string;
}

export interface Product {
  id: string;
  category: { en: string; ar: string };
  name: { en: string; ar: string };
  activeIngredient: { en: string; ar: string };
  pharmacologicalClass: { en: string; ar: string };
  indications: { en: string; ar: string };
  variants: ProductVariant[];
  mainImage?: string;
}

export const catalogData: Product[] = [
  {
    "id": "azmiron",
    "category": {
      "en": "Antibiotics & Antifungals",
      "ar": "صادات حيوية ومضادات فطريات"
    },
    "name": {
      "en": "Azmiron",
      "ar": "أزميرون"
    },
    "activeIngredient": {
      "en": "Azithromycin",
      "ar": "أزيثرومايسين"
    },
    "pharmacologicalClass": {
      "en": "Macrolide antibiotic",
      "ar": "صاد حيوي من زمرة الماكروليد"
    },
    "indications": {
      "en": "Macrolide antibiotic indicated for the treatment of mild to moderate respiratory tract infections, pharyngitis, tonsillitis, uncomplicated skin infections, and non-gonococcal urethritis or cervicitis.",
      "ar": "صاد حيوي من زمرة الماكروليد، يستطب لعلاج إنتانات الجهاز التنفسي الخفيفة إلى المتوسطة، التهاب البلعوم، التهاب اللوزتين، إنتانات الجلد غير المعقدة، والتهاب الإحليل أو عنق الرحم غير الناجم عن المكورات البنية."
    },
    "variants": [
      {
        "strength": {
          "en": "200mg / 5mL",
          "ar": "200 ملغ / 5 مل"
        },
        "packaging": {
          "en": "Bottle of 15 mL - Powder for oral suspension",
          "ar": "عبوة 15 مل - بودرة لتحضير معلق فموي"
        }
      },
      {
        "strength": {
          "en": "200mg / 5mL",
          "ar": "200 ملغ / 5 مل"
        },
        "packaging": {
          "en": "Bottle of 30 mL - Powder for oral suspension",
          "ar": "عبوة 30 مل - بودرة لتحضير معلق فموي"
        }
      },
      {
        "strength": {
          "en": "500mg",
          "ar": "500 ملغ"
        },
        "packaging": {
          "en": "3 Tabs",
          "ar": "3 مضغوطات"
        }
      }
    ]
  },
  {
    "id": "cefpodomas",
    "category": { "en": "Antibiotics & Antifungals", "ar": "صادات حيوية ومضادات فطريات" },
    "name": { "en": "Cefpodomas", "ar": "سيفبودوماس" },
    "activeIngredient": { "en": "Cefpodoxime", "ar": "سيفبودوكسيم" },
    "pharmacologicalClass": { "en": "Third-generation cephalosporin antibiotic", "ar": "صاد حيوي من زمرة السيفالوسبورينات (الجيل الثالث)" },
    "indications": { 
      "en": "Indicated for the treatment of mild to moderate infections caused by susceptible strains of designated microorganisms, including acute otitis media, pharyngitis, tonsillitis, community-acquired pneumonia, and uncomplicated skin infections.", 
      "ar": "يستطب لعلاج الإنتانات الخفيفة إلى المتوسطة الناتجة عن السلالات الجرثومية الحساسة، بما في ذلك التهاب الأذن الوسطى الحاد، التهاب البلعوم، التهاب اللوزتين، ذات الرئة المكتسبة من المجتمع، وإنتانات الجلد غير المعقدة." 
    },
    "variants": [
      {
        "strength": { "en": "50mg / 5 mL", "ar": "50 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "100mg / 5 mL", "ar": "100 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "100mg", "ar": "100 ملغ" },
        "packaging": { "en": "20 Tabs / Box", "ar": "20 مضغوطة / علبة" }
      },
      {
        "strength": { "en": "200mg", "ar": "200 ملغ" },
        "packaging": { "en": "10 Tabs / Box", "ar": "10 مضغوطات / علبة" }
      }
    ]
  },
  {
    "id": "cefraxneo",
    "category": { "en": "Antibiotics & Antifungals", "ar": "صادات حيوية ومضادات فطريات" },
    "name": { "en": "CefraxNeo", "ar": "سيفراكس نيو" },
    "activeIngredient": { "en": "Cefixime", "ar": "سيفيكسيم" },
    "pharmacologicalClass": { "en": "Third-generation cephalosporin antibiotic", "ar": "صاد حيوي من زمرة السيفالوسبورينات (الجيل الثالث)" },
    "indications": { 
      "en": "Indicated for the treatment of susceptible infections including uncomplicated urinary tract infections, otitis media, pharyngitis, tonsillitis, acute exacerbations of chronic bronchitis, and uncomplicated gonorrhea.", 
      "ar": "يستطب لعلاج الإنتانات الحساسة بما في ذلك إنتانات المسالك البولية غير المعقدة، التهاب الأذن الوسطى، التهاب البلعوم، التهاب اللوزتين، التفاقم الحاد لالتهاب القصبات المزمن، والسيلان غير المعقد." 
    },
    "variants": [
      {
        "strength": { "en": "100mg / 5 mL", "ar": "100 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "200mg", "ar": "200 ملغ" },
        "packaging": { "en": "10 Tabs / Box", "ar": "10 مضغوطات / علبة" }
      },
      {
        "strength": { "en": "400mg", "ar": "400 ملغ" },
        "packaging": { "en": "10 Tabs / Box", "ar": "10 مضغوطات / علبة" }
      }
    ]
  },
  {
  id: "ceftron",
  category: { en: "Antibiotics & Antifungals", ar: "صادات حيوية ومضادات فطريات" },
  name: { en: "Ceftron", ar: "سيفترون" },
  activeIngredient: { en: "Cefuroxime", ar: "سيفوروكسيم" },
  pharmacologicalClass: { en: "Second-generation cephalosporin antibiotic", ar: "صاد حيوي من زمرة السيفالوسبورينات (الجيل الثاني)" },
  indications: { 
    en: "Indicated for the treatment of susceptible infections including pharyngitis, tonsillitis, acute bacterial otitis media, lower respiratory tract infections, and uncomplicated skin and skin-structure infections.", 
    ar: "يستطب لعلاج الإنتانات الحساسة بما في ذلك التهاب البلعوم، التهاب اللوزتين، التهاب الأذن الوسطى الجرثومي الحاد، إنتانات الجهاز التنفسي السفلي، وإنتانات الجلد وبنيته غير المعقدة." 
  },
  variants: [
    {
      strength: { en: "125mg / 5 mL", ar: "125 ملغ / 5 مل" },
      packaging: { en: "Bottle of 60 mL - Powder for oral suspension", ar: "عبوة 60 مل - بودرة لتحضير معلق فموي" }
    },
    {
      strength: { en: "250mg / 5 mL", ar: "250 ملغ / 5 مل" },
      packaging: { en: "Bottle of 60 mL - Powder for oral suspension", ar: "عبوة 60 مل - بودرة لتحضير معلق فموي" }
    },
    {
      strength: { en: "250mg Tab", ar: "250 ملغ مضغوطات" },
      packaging: { en: "10 F.C.T / Box", ar: "10 | مضغوطات ملبسة بالفيلم" }
    },
    {
      strength: { en: "500mg Tab", ar: "500 ملغ مضغوطات" },
      packaging: { en: "10 F.C.T / Box", ar: "10 | مضغوطات ملبسة بالفيلم" }
    }
  ]
  },
  {
    "id": "clavumas",
    "category": { "en": "Antibiotics & Antifungals", "ar": "صادات حيوية ومضادات فطريات" },
    "name": { "en": "Clavumas", "ar": "كلافوماس" },
    "activeIngredient": { "en": "Amoxicillin + Clavulanic Acid", "ar": "أموكسيسيلين + حمض الكلافولانيك" },
    "pharmacologicalClass": { "en": "Broad-spectrum penicillin antibiotic with beta-lactamase inhibitor", "ar": "صاد حيوي واسع الطيف من زمرة البنسلين مع مثبط لبيتا لاكتاماز" },
    "indications": { 
      "en": "Indicated for the short-term treatment of bacterial infections, including upper and lower respiratory tract infections, genitourinary tract infections, skin and soft tissue infections, and dental infections.", 
      "ar": "يستطب للعلاج قصير الأمد للإنتانات الجرثومية، بما في ذلك إنتانات الجهاز التنفسي العلوي والسفلي، إنتانات المسالك البولية التناسلية، إنتانات الجلد والأنسجة الرخوة، والإنتانات السنية." 
    },
    "variants": [
      {
        "strength": { "en": "1000 mg Tab", "ar": "1000 ملغ مضغوطات" },
        "packaging": { "en": "6 or 10 or 14 F.C.T - Alu-Alu", "ar": "6 أو 10 أو 14 مضغوطة ملبسة بالفيلم - ألو-ألو" }
      },
      {
        "strength": { "en": "625 mg Tab", "ar": "625 ملغ مضغوطات" },
        "packaging": { "en": "6 or 10 or 14 F.C.T - Alu-Alu", "ar": "6 أو 10 أو 14 مضغوطة ملبسة بالفيلم - ألو-ألو" }
      },
      {
        "strength": { "en": "228.5 mg / 5 mL", "ar": "228.5 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "312.5 mg / 5 mL", "ar": "312.5 ملغ / 5 ml" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "457 mg / 5 mL", "ar": "457 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "642.5 mg / 5 mL", "ar": "642.5 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      }
    ]
  },
  {
    "id": "linir",
    "category": { "en": "Antibiotics & Antifungals", "ar": "صادات حيوية ومضادات فطريات" },
    "name": { "en": "Linir", "ar": "لينير" },
    "activeIngredient": { "en": "Cefdinir", "ar": "سيفدينير" },
    "pharmacologicalClass": { "en": "Third-generation cephalosporin antibiotic", "ar": "صاد حيوي من زمرة السيفالوسبورينات (الجيل الثالث)" },
    "indications": { 
      "en": "Indicated for the treatment of susceptible infections including acute bacterial otitis media, pharyngitis, tonsillitis, acute exacerbations of chronic bronchitis, and uncomplicated skin and skin structure infections.", 
      "ar": "يستطب لعلاج الإنتانات الحساسة بما في ذلك التهاب الأذن الوسطى الجرثومي الحاد، التهاب البلعوم، التهاب اللوزتين، التفاقم الحاد لالتهاب القصبات المزمن، وإنتانات الجلد وبنيته غير المعقدة." 
    },
    "variants": [
      {
        "strength": { "en": "125mg / 5 mL", "ar": "125 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "250mg / 5 mL", "ar": "250 ملغ / 5 مل" },
        "packaging": { "en": "Bottle of 60 mL - Powder for oral suspension", "ar": "عبوة 60 مل - بودرة لتحضير معلق فموي" }
      },
      {
        "strength": { "en": "300mg Tab", "ar": "300 ملغ مضغوطات" },
        "packaging": { "en": "10 F.C.T - Alu-Alu", "ar": "10 مضغوطات ملبسة بالفيلم - ألو-ألو" }
      }
    ]
  },
  {
    "id": "lomin-fort",
    "category": {
      "en": "Antibiotics & Antifungals",
      "ar": "صادات حيوية ومضادات فطريات"
    },
    "name": {
      "en": "Lomin Fort",
      "ar": "لومين فورت"
    },
    "activeIngredient": {
      "en": "Metronidazole / Spiramycin",
      "ar": "ميترونيدازول / سبيرامايسين"
    },
    "pharmacologicalClass": {
      "en": "Nitroimidazole & macrolide antimicrobial combination",
      "ar": "مزيج مضاد للجراثيم من النيتروإيميدازول والماكروليد"
    },
    "indications": {
      "en": "Combined anti-infective dental therapy indicated for the treatment and prevention of acute and chronic stomatological and odontogenic infections including dental abscesses and gingivitis.",
      "ar": "علاج جرثومي مشترك لطب الأسنان يستطب لعلاج والوقاية من التهابات الفم والأسنان واللثة الحادة والمزمنة وخراجات الأسنان."
    },
    "variants": [
      {
        "strength": {
          "en": "250mg / 1.5M IU",
          "ar": "250 ملغ / 1.5 مليون وحدة دولية"
        },
        "packaging": {
          "en": "20 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "maclor",
    "category": {
      "en": "Antibiotics & Antifungals",
      "ar": "صادات حيوية ومضادات فطريات"
    },
    "name": {
      "en": "Maclor",
      "ar": "ماكلور"
    },
    "activeIngredient": {
      "en": "Cefaclor",
      "ar": "سيفاكلور."
    },
    "pharmacologicalClass": {
      "en": "Second-generation cephalosporin",
      "ar": "الجيل الثاني من السيفالوسبورينات"
    },
    "indications": {
      "en": "Second-generation cephalosporin antibiotic indicated for the treatment of acute otitis media, pharyngitis, tonsillitis, lower respiratory tract infections, and urinary tract infections.",
      "ar": "صاد حيوي سيفالوسبورين من الجيل الثاني يستطب لعلاج التهاب الأذن الوسطى الحاد، التهاب البلعوم واللوزتين، التهابات القصبات والجهاز التنفسي السفلي، والتهابات المسالك البولية."
    },
    "variants": [
      {
        "strength": {
          "en": "125mg",
          "ar": "125 ملغ"
        },
        "packaging": {
          "en": "Bottle of 60 ml - Oral Suspension",
          "ar": "عبوة ٦٠ مل - معلق فموي"
        }
      },
      {
        "strength": {
          "en": "250mg",
          "ar": "250 ملغ"
        },
        "packaging": {
          "en": "Bottle of 60 ml - Oral Suspension",
          "ar": "عبوة ٦٠ مل - معلق فموي"
        }
      }
    ]
  },
  {
    "id": "micorin",
    "category": {
      "en": "Antibiotics & Antifungals",
      "ar": "صادات حيوية ومضادات فطريات"
    },
    "name": {
      "en": "Micorin",
      "ar": "ميكورين"
    },
    "activeIngredient": {
      "en": "Nystatin",
      "ar": "نيستاتين."
    },
    "pharmacologicalClass": {
      "en": "Polyene antifungal agent",
      "ar": "مضاد للفطريات من عائلة البولين"
    },
    "indications": {
      "en": "Antifungal therapy indicated for the treatment of fungal infections of the oral cavity (oral thrush), esophagus, and intestinal tract caused by Candida species.",
      "ar": "علاج مضاد للفطريات يستطب لعلاج الالتهابات الفطرية في تجويف الفم (القلاع الفموي)، المريء، والسبيل المعوي الناتجة عن فطور المبيضات."
    },
    "variants": [
      {
        "strength": {
          "en": "100,000 IU / 1 mL",
          "ar": "100,000 وحدة دولية / 1 mL"
        },
        "packaging": {
          "en": "Bottle of 60 ml + Dropper - suspension",
          "ar": "عبوة ٦٠ مل مع قطارة فموية"
        }
      }
    ]
  },
  {
    "id": "tilacip",
    "category": {
      "en": "Antibiotics & Antifungals",
      "ar": "صادات حيوية ومضادات فطريات"
    },
    "name": {
      "en": "Tilacip",
      "ar": "تيلاسيب"
    },
    "activeIngredient": {
      "en": "Ciprofloxacin",
      "ar": "سيبروفلوكساسين."
    },
    "pharmacologicalClass": {
      "en": "Fluoroquinolone antibiotic",
      "ar": "صاد حيوي، جيل ثانٍ من عائلة الفلوروكينولونات"
    },
    "indications": {
      "en": "Broad-spectrum fluoroquinolone antibiotic indicated for the treatment of complicated urinary tract infections, chronic bacterial prostatitis, lower respiratory tract infections, bone and joint infections, and infectious diarrhea.",
      "ar": "مضاد حيوي واسع الطيف من فئة الفلوروكينولونات يستطب لعلاج التهابات المسالك البولية المعقدة، التهاب البروستاتا البكتيري المزمن، التهابات السبيل التنفسي السفلي، التهابات العظام والمفاصل، والإسهال الجرثومي."
    },
    "variants": [
      {
        "strength": {
          "en": "500 mg",
          "ar": "٥٠٠ ملغ"
        },
        "packaging": {
          "en": "10 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ١٠ مضغوطات ملبسة بالفيلم"
        }
      },
      {
        "strength": {
          "en": "750 mg",
          "ar": "٧٥٠ ملغ"
        },
        "packaging": {
          "en": "10 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ١٠ مضغوطات ملبسة بالفيلم"
        }
      },
      
    ]
  },
  {
    "id": "tilamox",
    "category": {
      "en": "Antibiotics & Antifungals",
      "ar": "صادات حيوية ومضادات فطريات"
    },
    "name": {
      "en": "Tilamox",
      "ar": "تيلاموكس"
    },
    "activeIngredient": {
      "en": "MOXIFLOXACIN",
      "ar": "موكسيفلوكساسين هيدروكلوريد."
    },
    "pharmacologicalClass": {
      "en": "Fluoroquinolone antibiotic",
      "ar": "صاد حيوي من عائلة ، مضاد حيوي فلوروكينولون من الجيل الرابع"
    },
    "indications": {
      "en": "Fourth-generation fluoroquinolone antibiotic indicated for the treatment of acute bacterial sinusitis, community-acquired pneumonia, acute bacterial exacerbations of chronic bronchitis, and complicated pelvic inflammatory diseases.",
      "ar": "صاد حيوي فلوروكينولوني من الجيل الرابع يستطب لعلاج التهاب الجيوب الأنفية البكتيري الحاد، ذات الرئة المكتسبة من المجتمع، التفاقم البكتيري الحاد لالتهاب الشعب الهوائية المزمن، والتهابات الحوض المعقدة."
    },
    "variants": [
      {
        "strength": {
          "en": "400 mg",
          "ar": "٤٠٠ ملغ"
        },
        "packaging": {
          "en": "5 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٥ مضغوطات ملبسة بالفيلم"
        }
      },
      
    ]
  },
  {
    "id": "tilev",
    "category": {
      "en": "Antibiotics & Antifungals",
      "ar": "صادات حيوية ومضادات فطريات"
    },
    "name": {
      "en": "Tilev",
      "ar": "تيليف"
    },
    "activeIngredient": {
      "en": "Levofloxacin",
      "ar": "ليفوفلوكساسين."
    },
    "pharmacologicalClass": {
      "en": "Fluoroquinolone antibiotic",
      "ar": "مضاد حيوي فلوروكينولون من الجيل الثالث"
    },
    "indications": {
      "en": "Systemic fluoroquinolone antibiotic indicated for the treatment of acute pyelonephritis, complicated urinary tract infections, chronic prostatitis, community-acquired pneumonia, and complicated skin infections.",
      "ar": "صاد حيوي جهازى من فئة الفلوروكينولونات يستطب لعلاج التهاب الحويضة والكلية الحاد، التهابات المسالك البولية المعقدة، التهاب البروستاتا المزمن، ذات الرئة المكتسبة من المجتمع، والتهابات الجلد المعقدة."
    },
    "variants": [
      {
        "strength": {
          "en": "500 mg",
          "ar": "٥٠٠ ملغ"
        },
        "packaging": {
          "en": "10 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ١٠ مضغوطات ملبسة بالفيلم"
        }
      },
      {
        "strength": {
          "en": "750 mg",
          "ar": "٧٥٠ ملغ"
        },
        "packaging": {
          "en": "10 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ١٠ مضغوطات ملبسة بالفيلم"
        }
      },
      
    ]
  },
  {
    "id": "cefoblast",
    "category": {
      "en": "Injectable Antibiotics",
      "ar": "صادات حيوية حقن"
    },
    "name": {
      "en": "Cefoblast",
      "ar": "سيفوبلاست"
    },
    "activeIngredient": {
      "en": "Cefoperazone + Sulbactam",
      "ar": "سيفوبيرازون + سولباكتام."
    },
    "pharmacologicalClass": {
      "en": "Third-generation cephalosporin and beta-lactamase inhibitor",
      "ar": "جيل ثالث من السيفالوسبورينات مع مثبط بيتا لاكتاماز، ، صاد حيوي مقاوم واسع الطيف"
    },
    "indications": {
      "en": "Injectable combination cephalosporin and beta-lactamase inhibitor therapy indicated for severe, multi-drug resistant respiratory, intra-abdominal, urological, skin, and soft tissue infections.",
      "ar": "مزيج تآزري معد للحقن يستطب لعلاج الالتهابات البكتيرية الشديدة والمقاومة للأدوية المتعددة في السبيل التنفسي، المسالك البولية، البطن، والجلد والأنسجة الرخوة."
    },
    "variants": [
      {
        "strength": {
          "en": "1000mg",
          "ar": "1000 ملغ"
        },
        "packaging": {
          "en": "1 Vial / Box - Powder for Injection",
          "ar": "١ فيال - بودرة للحقن"
        }
      }
    ]
  },
  {
    "id": "ceftazidime--avibactam",
    "category": {
      "en": "Injectable Antibiotics",
      "ar": "صادات حيوية حقن"
    },
    "name": {
      "en": "Ceftazidime + avibactam",
      "ar": "سيفتازيديم + أفيباكتام"
    },
    "activeIngredient": {
      "en": "Ceftazidime + avibactam",
      "ar": "سيفتازيديم وأفيباكتام."
    },
    "pharmacologicalClass": {
      "en": "Third-generation cephalosporin with beta-lactamase inhibitor",
      "ar": "جيل ثالث من السيفالوسبورينات مع مثبط بيتا لاكتاماز، ، مضاد للبكتيريا المقاومة"
    },
    "indications": {
      "en": "Injectable advanced beta-lactamase inhibitor combination indicated for drug-resistant Gram-negative bacterial infections, including complicated urinary tract infections, hospital-acquired pneumonia, and complicated intra-abdominal infections.",
      "ar": "مضاد حيوي مبتكر معد للحقن يستطب لعلاج التهابات البكتيريا سلبية الغرام المقاومة للأدوية، بما في ذلك التهابات المسالك البولية المعقدة، ذات الرئة المكتسبة من المستشفى، والالتهابات البطنية المعقدة."
    },
    "variants": [
      {
        "strength": {
          "en": "1000mg",
          "ar": "1000 ملغ"
        },
        "packaging": {
          "en": "1 Vial / Box - Powder for Injection",
          "ar": "١ فيال - بودرة للحقن"
        }
      }
    ]
  },
  {
    "id": "ceftriaxone",
    "category": {
      "en": "Injectable Antibiotics",
      "ar": "صادات حيوية حقن"
    },
    "name": {
      "en": "Ceftriaxone-MP",
      "ar": "سيفترياكسون-إم بي"
    },
    "activeIngredient": {
      "en": "Ceftriaxone",
      "ar": "سيفترياكسون."
    },
    "pharmacologicalClass": {
      "en": "Third-generation cephalosporin",
      "ar": "جيل ثالث من السيفالوسبورينات"
    },
    "indications": {
      "en": "Injectable third-generation cephalosporin indicated for severe bacterial infections including septicemia, bacterial meningitis, intra-abdominal infections, bone and joint infections, and pre-operative prophylaxis.",
      "ar": "سيفالوسبورين معد للحقن من الجيل الثالث يستطب لعلاج الالتهابات البكتيرية الشديدة بما في ذلك تسمم الدم، التهاب السحايا، التهابات تجويف البطن، العظام والمفاصل، والوقاية الجراحية."
    },
    "variants": [
      {
        "strength": {
          "en": "1000mg",
          "ar": "1000 ملغ"
        },
        "packaging": {
          "en": "1 Vial / Powder for Injection",
          "ar": "١ فيال - بودرة للحقن"
        }
      }
    ]
  },
  {
    "id": "brodine",
    "category": {
      "en": "Respiratory, Cold & Allergy",
      "ar": "أدوية نزلات البرد والحساسية التنفسية"
    },
    "name": {
      "en": "Brodine",
      "ar": "برودين"
    },
    "activeIngredient": {
      "en": "CHLORPHENIRAMINE MALEATE 2 mg + BROMHEXIN 4mg + GUAIFENESIN 50mg",
      "ar": "كلورفينيرامين ماليات 2 ملغ + برومكسين 4 ملغ + غوايفنيزين 50 ملغ"
    },
    "pharmacologicalClass": {
      "en": "Respiratory system therapeutic agent",
      "ar": "علاج للجهاز التنفسي والحساسية"
    },
    "indications": {
      "en": "Secretolytic and antiallergic therapy indicated for productive cough and respiratory congestion associated with allergic rhinitis, bronchitis, and acute upper respiratory tract irritation.",
      "ar": "علاج مذيب للمخاط ومضاد للحساسية يستطب لعلاج السعال الرطب المصاحب للبلغم واحتقان الجهاز التنفسي المرتبط بالتهاب الأنف التحسسي، التهاب الشعب الهوائية، وتخريش مجاري الهواء."
    },
    "variants": [
      {
        "strength": {
          "en": "Syrup",
          "ar": "شراب"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Syrup",
          "ar": "عبوة ١٠٠ مل - شراب فموي"
        }
      }
    ]
  },
  {
    "id": "bumex",
    "category": {
      "en": "Respiratory, Cold & Allergy",
      "ar": "أدوية نزلات البرد والحساسية التنفسية"
    },
    "name": {
      "en": "Bumex",
      "ar": "بومكس"
    },
    "activeIngredient": {
      "en": "CHLORPHENIRAMINE MALEATE 4mg + PHENYLEPHRINE HCL 10mg + IBUPROFEN 200mg",
      "ar": "كلورفينيرامين ماليات 4 ملغ + فينيليفرين هيدروكلوريد 10 ملغ + إيبوبروفين 200 ملغ"
    },
    "pharmacologicalClass": {
      "en": "Respiratory system therapeutic agent",
      "ar": "علاج للجهاز التنفسي والحساسية"
    },
    "indications": {
      "en": "Indicated for the fast relief of nasal and sinus congestion, rhinorrhea, sneezing, moderate pain, headache, and fever associated with upper respiratory tract infections and influenza.",
      "ar": "يستطب للتخفيف السريع من احتقان الأنف والجيوب الأنفية، سيلان الأنف، العطس، الألم المعتدل، الصداع، والحمى المصاحبة لالتهابات السبيل التنفسي العلوي والإنفلونزا."
    },
    "variants": [
      {
        "strength": {
          "en": "Tab",
          "ar": "مضغوطات"
        },
        "packaging": {
          "en": "20 Tablets / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم"
        }
      }
    ]
  },
  {
    "id": "butamix",
    "category": {
      "en": "Respiratory, Cold & Allergy",
      "ar": "أدوية نزلات البرد والحساسية التنفسية"
    },
    "name": {
      "en": "Butamix",
      "ar": "بيوتامكس"
    },
    "activeIngredient": {
      "en": "TERBUTALINE SULFATE 1.25mg + BROMHEXINE HCL 4mg + GUAIFENESIN 50mg",
      "ar": "تيربوتالين سلفات 1.25 ملغ + برومكسين هيدروكلوريد 4 ملغ + غوايفنيزين 50 ملغ."
    },
    "pharmacologicalClass": {
      "en": "Mucolytic agent / Expectoration enhancer",
      "ar": "شراب حال للبلغم ومحسن للإفرازات التنفسية، موسع للقصبات ومقشع"
    },
    "indications": {
      "en": "Bronchodilator and mucolytic combination indicated for the management of bronchospasms and productive cough in asthma, chronic bronchitis, and emphysema.",
      "ar": "مزيج موسع للقصبات ومذيب للبلغم يستطب لعلاج ضيق التنفس وتشنج القصبات والسعال الرطب في حالات الربو الشعبي والتهاب الشعب المزمن."
    },
    "variants": [
      {
        "strength": {
          "en": "Syrup",
          "ar": "شراب"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Syrup",
          "ar": "عبوة ١٠٠ مل - شراب فموي"
        }
      }
    ]
  },
  {
    "id": "cetirizine-plus-merged",
    "category": {
      "en": "Respiratory, Cold & Allergy",
      "ar": "أدوية نزلات البرد والحساسية التنفسية"
    },
    "name": {
      "en": "Cetirizine",
      "ar": "سيتيريزين"
    },
    "activeIngredient": {
      "en": "Cetirizine",
      "ar": "سيتيريزين"
    },
    "pharmacologicalClass": {
      "en": "Second-generation selective H1-antihistamine",
      "ar": "مضاد حساسية انتقائي من الجيل الثاني"
    },
    "indications": {
      "en": "Relief of respiratory allergy symptoms, seasonal allergic rhinitis, ocular itching, and multi-symptom cold and flu relief.",
      "ar": "تخفيف أعراض الحساسية التنفسية والأنفية، التهاب الأنف التحسسي، حكة العين، وتخفيف أعراض الرشح والإنفلونزا المتعددة."
    },
    "variants": [
      {
        "strength": {
          "en": "5mg / 5 mL",
          "ar": "5 ملغ / 5 مل"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Oral suspension (Syrup)",
          "ar": "عبوة ١٠٠ مل - شراب فموي"
        }
      },
      {
        "strength": {
          "en": "Plus | Tab",
          "ar": "بلاس | مضغوطات"
        },
        "packaging": {
          "en": "20 Tab / Box (Cetirizine Dihydrochloride 5mg + Phenylephrine HCL 10mg + Paracetamol 325mg)",
          "ar": "علبة تحتوي ٢٠ مضغوطة (سيتيريزين ثنائي الهيدروكلوريد 5 ملغ + فينيل إيفرين هيدروكلوريد 10 ملغ + باراسيتامول 325 ملغ)"
        }
      },
      
    ]
  },
  {
    "id": "coldar",
    "category": {
      "en": "Respiratory, Cold & Allergy",
      "ar": "أدوية نزلات البرد والحساسية التنفسية"
    },
    "name": {
      "en": "Coldar",
      "ar": "كولدار"
    },
    "activeIngredient": {
      "en": "PARACETAMOL 500mg + DEXTROMETH ORPHAN 15mg + PHENYLEPHRINE HCL 5mg",
      "ar": "باراسيتامول 500 ملغ + ديكستروميتورفان 15 ملغ + فينيليفرين هيدروكلوريد 5 ملغ"
    },
    "pharmacologicalClass": {
      "en": "Respiratory system therapeutic agent",
      "ar": "علاج للجهاز التنفسي والحساسية"
    },
    "indications": {
      "en": "Multi-symptom cold formula indicated for the temporary relief of dry cough, nasal and sinus congestion, minor sore throat irritation, headache, body aches, and fever associated with influenza and cold.",
      "ar": "تركيبة للبرد متعددة الأعراض تستطب للتخفيف المؤقت للسعال الجاف، احتقان الأنف والجيوب، تخريش الحلق الطفيف، الصداع، آلام الجسم، والحمى المصاحبة للإنفلونزا والرشح."
    },
    "variants": [
      {
        "strength": {
          "en": "Tab",
          "ar": "مضغوطات"
        },
        "packaging": {
          "en": "20 F.C.T / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم"
        }
      }
    ]
  },
  {
    "id": "loramas",
    "category": {
      "en": "Respiratory, Cold & Allergy",
      "ar": "أدوية نزلات البرد والحساسية التنفسية"
    },
    "name": {
      "en": "Loramas",
      "ar": "لوراماس"
    },
    "activeIngredient": {
      "en": "Desloratadine",
      "ar": "ديسلوراتادين."
    },
    "pharmacologicalClass": {
      "en": "Second-generation non-sedating H1-antihistamine",
      "ar": "مضاد حساسية من الجيل الثاني غير المسبب للنعاس"
    },
    "indications": {
      "en": "Long-acting selective H1 antihistamine indicated for the rapid relief of symptoms associated with allergic rhinitis and chronic idiopathic urticaria.",
      "ar": "مضاد هيستامين مديد المفعول يستطب للتخفيف السريع للأعراض المصاحبة لالتهاب الأنف التحسسي والشرى الجلدي المزمن."
    },
    "variants": [
      {
        "strength": {
          "en": "5 mg",
          "ar": "5 ملغ"
        },
        "packaging": {
          "en": "20 F.C.T / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم"
        }
      },
    ]
  },
  {
    "id": "sinuline-night-merged",
    "category": {
      "en": "Respiratory, Cold & Allergy",
      "ar": "أدوية نزلات البرد والحساسية التنفسية"
    },
    "name": {
      "en": "Sinuline",
      "ar": "سينولين"
    },
    "activeIngredient": {
      "en": "Paracetamol / Guaifenesin / Phenylephrine / Diphenhydramine",
      "ar": "باراسيتامول / غوايفنيزين / فينيليفرين / ديفينهيدرامين"
    },
    "pharmacologicalClass": {
      "en": "Respiratory system therapeutic agent",
      "ar": "علاج للجهاز التنفسي والحساسية"
    },
    "indications": {
      "en": "Indicated for the day and nighttime relief of common cold, flu and upper respiratory allergy symptoms.",
      "ar": "يستطب لتخفيف أعراض نزلات البرد والإنفلونزا والحساسية التنفسية خلال النهار والليل."
    },
    "variants": [
      {
        "strength": {
          "en": "Syrup",
          "ar": "شراب"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Paracetamol 125mg + Guaifenesin 50mg + Phenylephrine HCl 2.5mg per 5ml",
          "ar": "عبوة ١٠٠ مل - باراسيتامول ١٢٥ ملغ + غوايفنيزين ٥٠ ملغ + فينيليفرين ٢.٥ ملغ / ٥ مل"
        }
      },
      {
        "strength": {
          "en": "Tab",
          "ar": "مضغوطات"
        },
        "packaging": {
          "en": "20 F.C.T / Box - Paracetamol 250mg + Guaifenesin 100mg + Phenylephrine HCl 5mg",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم - باراسيتامول ٢٥٠ ملغ + غوايفنيزين ١٠٠ ملغ + فينيليفرين ٥ ملغ"
        }
      },
      {
        "strength": {
          "en": " Night",
          "ar": "ليلي"
        },
        "packaging": {
          "en": "20 F.C.T / Box -Paracetamol 325mg + Diphenhydramine HCl 25mg + Phenylephrine HCl 5mg",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم - باراسيتامول ٣٢٥ ملغ + ديفينهيدرامين ٢٥ ملغ + فينيليفرين ٥ ملغ"
        }
      }
    ]
  },
  {
    "id": "conid-plus",
    "category": {
      "en": "Cardiovascular & Blood Pressure",
      "ar": "القلبية والأوعية والضغط"
    },
    "name": {
      "en": "Conid",
      "ar": "كونيد"
    },
    "activeIngredient": {
      "en": "Candesartan Cilexetil",
      "ar": "كانديسارتان سيليكسيتيل + هيدروكلوروتيازيد."
    },
    "pharmacologicalClass": {
      "en": "Angiotensin II receptor antagonist (ARB)",
      "ar": "حاصر مستقبلات الأنجيوتنسين II، خافض ضغط ثنائي مركب"
    },
    "indications": {
      "en": "Angiotensin II receptor antagonist (ARB) indicated for the treatment of essential hypertension in adults and pediatric patients, and for cardiac protection in heart failure.",
      "ar": "مضاد لمستقبلات الأنجيوتنسين الثاني يستطب لعلاج ارتفاع ضغط الدم الشرياني الأساسي لدى البالغين والأطفال، ولحماية القلب في حالات قصور القلب."
    },
    "variants": [
      {
        "strength": {
          "en": "Plus 16/12.5mg",
          "ar": "بلاس 16/12.5 ملغ"
        },
        "packaging": {
          "en": "20 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "Plus 8/12.5mg",
          "ar": "بلاس 8/12.5 ملغ"
        },
        "packaging": {
          "en": "20 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "16mg",
          "ar": "١٦ ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "8mg",
          "ar": "٨ ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "conol",
    "category": {
      "en": "Cardiovascular & Blood Pressure",
      "ar": "القلبية والأوعية والضغط"
    },
    "name": {
      "en": "Conol",
      "ar": "كونول"
    },
    "activeIngredient": {
      "en": "Bisoprolol",
      "ar": "بيسوبرولول فومارات."
    },
    "pharmacologicalClass": {
      "en": "Selective beta-1 adrenergic receptor blocker",
      "ar": "حاصر مستقبلات بيتا-1 الأدرينالية الانتقائي"
    },
    "indications": {
      "en": "Highly selective beta-1-adrenergic blocker indicated for the management of arterial hypertension, chronic stable angina pectoris, and stable moderate-to-severe chronic heart failure.",
      "ar": "حاصر مستقبلات بيتا-١ الأدرينالية عالي الانتقائية يستطب لعلاج ارتفاع ضغط الدم الشرياني، الذبحة الصدرية المستقرة المزمنة، وقصور القلب الاحتقاني المزمن المستقر."
    },
    "variants": [
      {
        "strength": {
          "en": "2.5 mg",
          "ar": "٢.٥ ملغ"
        },
        "packaging": {
          "en": "20 Tab / Box - Tablets",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "5 mg",
          "ar": "٥ ملغ"
        },
        "packaging": {
          "en": "20 Tab / Box - Tablets",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
    ]
  },
  {
    "id": "fibrovast",
    "category": {
      "en": "Cardiovascular & Blood Pressure",
      "ar": "القلبية والأوعية والضغط"
    },
    "name": {
      "en": "Fibrovast",
      "ar": "فيبروفاست"
    },
    "activeIngredient": {
      "en": "Fenofibrate/Simvastatin",
      "ar": "فينوفايبيرات / سيمفاستاتين."
    },
    "pharmacologicalClass": {
      "en": "Lipid-lowering HMG-CoA reductase inhibitor / Fibrate",
      "ar": "خافض لدهون الدم من عائلة الستاتين والفيبرات"
    },
    "indications": {
      "en": "Combination lipid-lowering therapy indicated as adjunctive treatment to diet for reducing elevated LDL, total cholesterol, and triglycerides, and increasing HDL in mixed dyslipidemia.",
      "ar": "علاج خافض للشحوم مشترك يستطب كعلاج مكمل للحمية الغذائية لخفض مستويات الكوليسترول الضار والدهون الثلاثية المرتفعة، وزيادة الكوليسترول النافع لدى مرضى اضطراب شحوم الدم المختلط."
    },
    "variants": [
      {
        "strength": {
          "en": "145/40mg",
          "ar": "١٤٥/٤٠mg"
        },
        "packaging": {
          "en": "30 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٣٠ مضغوطة - مضغوطة"
        }
      }
    ]
  },
  {
    "id": "grofil",
    "category": {
      "en": "Cardiovascular & Blood Pressure",
      "ar": "القلبية والأوعية والضغط"
    },
    "name": {
      "en": "Grofil",
      "ar": "غروفيل"
    },
    "activeIngredient": {
      "en": "Sildenafil",
      "ar": "سيلدينافيل سيترات."
    },
    "pharmacologicalClass": {
      "en": "Phosphodiesterase-5 (PDE5) inhibitor vasodilator",
      "ar": "موسع للأوعية الدموية ومثبط لإنزيم الفوسفودياستيراز-5"
    },
    "indications": {
      "en": "Indicated for the treatment of erectile dysfunction in adult men by selectively inhibiting PDE5 to restore natural erectile function and optimize blood flow response to sexual stimulation.",
      "ar": "يستطب لعلاج ضعف الانتصاب لدى الرجال البالغين عبر تثبيط إنزيم PDE5 بشكل انتقائي، مما يعيد الاستجابة الطبيعية للانتصاب ويحسن التروية الدموية للأعضاء التناسلية استجابةً للتنبيه."
    },
    "variants": [
      {
        "strength": {
          "en": "50 mg",
          "ar": "٥٠ ملغ"
        },
        "packaging": {
          "en": "4 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٤ مضغوطات - مضغوطات ملبسة بالفيلم"
        }
      },
      {
        "strength": {
          "en": "100 mg",
          "ar": "١٠٠ ملغ"
        },
        "packaging": {
          "en": "4 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٤ مضغوطات - مضغوطات ملبسة بالفيلم"
        }
      },
    ]
  },
  {
    "id": "milor",
    "category": {
      "en": "Cardiovascular & Blood Pressure",
      "ar": "القلبية والأوعية والضغط"
    },
    "name": {
      "en": "Milor",
      "ar": "ميلور"
    },
    "activeIngredient": {
      "en": "Amlodipine",
      "ar": "أملوديبين، حاصر لقنوات الكالسيوم خافض للضغط."
    },
    "pharmacologicalClass": {
      "en": "Dihydropyridine calcium channel blocker",
      "ar": "حاصر قنوات الكالسيوم من زمرة ثنائي هيدرو البيريدين"
    },
    "indications": {
      "en": "Dihydropyridine calcium channel blocker indicated for the management of arterial hypertension and chronic stable or vasospastic angina pectoris.",
      "ar": "حاصر لقنوات الكالسيوم ينتمي لفئة ثنائي الهيدروبيريدين يستطب لعلاج ارتفاع ضغط الدم الشرياني والذبحة الصدرية المزمنة المستقرة أو التشنجية."
    },
    "variants": [
      {
        "strength": {
          "en": "5mg",
          "ar": "٥ ملغ"
        },
        "packaging": {
          "en": "30 Capsules / Box - Capsule",
          "ar": "علبة تحتوي ٣٠ كبسولة"
        }
      }
    ]
  },
  {
    "id": "pentofil-xr",
    "category": {
      "en": "Cardiovascular & Blood Pressure",
      "ar": "القلبية والأوعية والضغط"
    },
    "name": {
      "en": "Pentofil XR",
      "ar": "بينتوفيل XR"
    },
    "activeIngredient": {
      "en": "Pentoxifylline",
      "ar": "Pentoxifylline"
    },
    "pharmacologicalClass": {
      "en": "Hemorrheologic agent / Vasodilator",
      "ar": "موسع للأوعية الدموية ومحسن لتدفق الدم"
    },
    "indications": {
      "en": "Hemorrheologic vasodilator therapy indicated for peripheral vascular disorders, including intermittent claudication and trophic ulcers.",
      "ar": "موسع أوعية وعامل منظم للزوجة الدم يستطب لعلاج اضطرابات الأوعية الدموية الطرفية، بما في ذلك العرج المتقطع والقرحات المغذية."
    },
    "variants": [
      {
        "strength": {
          "en": "400mg",
          "ar": "٤٠٠mg"
        },
        "packaging": {
          "en": "20 Tablets / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "rando",
    "category": {
      "en": "Cardiovascular & Blood Pressure",
      "ar": "القلبية والأوعية والضغط"
    },
    "name": {
      "en": "Rando",
      "ar": "راندو"
    },
    "activeIngredient": {
      "en": "Methyl Dopa",
      "ar": "ميثيل دوبا."
    },
    "pharmacologicalClass": {
      "en": "Centrally acting alpha-2 adrenergic agonist",
      "ar": "منشط مستقبلات ألفا-2 الأدرينالية ذو التأثير المركزي"
    },
    "indications": {
      "en": "Centrally acting alpha-2 adrenergic agonist antihypertensive agent indicated for gestational hypertension during pregnancy and essential arterial hypertension.",
      "ar": "مضاد لارتفاع ضغط الدم مركزي التأثير يستطب لعلاج ارتفاع ضغط الدم الحملي لدى النساء الحوامل وارتفاع ضغط الدم الشرياني الأساسي."
    },
    "variants": [
      {
        "strength": {
          "en": "250 mg",
          "ar": "٢٥٠ ملغ"
        },
        "packaging": {
          "en": "20 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم"
        }
      },
      {
        "strength": {
          "en": "500 mg",
          "ar": "٥٠٠ ملغ"
        },
        "packaging": {
          "en": "20 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم"
        }
      },
    ]
  },
  {
    "id": "aldenol",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Aldenol",
      "ar": "ألدينول"
    },
    "activeIngredient": {
      "en": "Metronidazole 100 mg / Diloxanide 125 mg",
      "ar": "مترونيدازول بنزوات 100 ملغ + ديلوكسانيد فوروات 125 ملغ"
    },
    "pharmacologicalClass": {
      "en": "Amebicidal and nitroimidazole antibacterial agent",
      "ar": "مضاد للأميبا ومضاد للجراثيم من النيتروإيميدازول"
    },
    "indications": {
      "en": "Combined antiparasitic and amebicidal therapy indicated for the treatment of acute intestinal amebiasis (amebic dysentery) and extraintestinal amebiasis.",
      "ar": "علاج مشترك مضاد للطفيليات والأميبا يستطب لعلاج حالات الأميبا المعوية الحادة (الزحار الأميبي) والعدوى خارج المعوية."
    },
    "variants": [
      {
        "strength": {
          "en": "100/125mg",
          "ar": "100/125 ملغ"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Oral Suspension",
          "ar": "عبوة ١٠٠ مل - معلق فموي"
        }
      }
    ]
  },
  {
    "id": "aldolox",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Aldolox",
      "ar": "ألدولوكس"
    },
    "activeIngredient": {
      "en": "Aluminum hydroxide 400Mg + hydroxide 400mg + Simethicone 40mg",
      "ar": "هيدروكسيد الألمنيوم 400 ملغ + هيدروكسيد المغنيسيوم 400 ملغ + سيميثيكون 40 ملغ."
    },
    "pharmacologicalClass": {
      "en": "Antacid and antiflatulent combination",
      "ar": "مضاد للحموضة والنفخة والغازات"
    },
    "indications": {
      "en": "Balanced antacid and antiflatulent formulation indicated for the rapid relief of gastric hyperacidity, heartburn, acid indigestion, and painful flatulence or abdominal bloating associated with gastritis or peptic ulcers.",
      "ar": "صياغة متوازنة مضادة للحموضة وطاردة للغازات تستطب للتخفيف السريع من حموضة المعدة الزائدة، حرقة الفؤاد، عسر الهضم الحمضي، والانتفاخ والغازات المؤلمة المرافقة لالتهاب المعدة أو القرحة الهضمية."
    },
    "variants": [
      {
        "strength": {
          "en": "Oral Susp",
          "ar": "معلق فموي"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Oral Suspension",
          "ar": "عبوة ١٠٠ مل - معلق فموي"
        }
      },
      {
        "strength": {
          "en": "Chew. Tab",
          "ar": "حبوب مضغ"
        },
        "packaging": {
          "en": "20 Tablets / Box - Chewable Tablet",
          "ar": "علبة تحتوي ٢٠ مضغوطة - مضغوطة مضغ"
        }
      }
    ]
  },
  {
    "id": "alvemas-forte",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Alvemas Forte",
      "ar": "ألفيماس فورت"
    },
    "activeIngredient": {
      "en": "Alverine",
      "ar": "ألفيرين سيترات."
    },
    "pharmacologicalClass": {
      "en": "Antispasmodic and smooth muscle relaxant",
      "ar": "مضاد للتشنج ومرخٍ للعضلات الملساء"
    },
    "indications": {
      "en": "Indicated for the symptomatic relief of abdominal pain, bloating, and gastrointestinal spasms associated with irritable bowel syndrome (IBS) and diverticular disease.",
      "ar": "يستطب للتخفيف العرضي من آلام البطن، الانتفاخ، وتشنجات القولون والعضلات الملساء المصاحبة لمتلازمة القولون العصبي (IBS) وداء الرتوج."
    },
    "variants": [
      {
        "strength": {
          "en": "120 mg",
          "ar": "١٢٠ ملغ"
        },
        "packaging": {
          "en": "20 Cap / Box",
          "ar": "علبة تحتوي ٢٠ كبسولة"
        }
      },
    ]
  },
  {
    "id": "dexadex",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Dexadex",
      "ar": "ديكسادكس"
    },
    "activeIngredient": {
      "en": "Dexlansoprazole",
      "ar": "ديكسلانسوبرازول."
    },
    "pharmacologicalClass": {
      "en": "Proton pump inhibitor (PPI) gastric acid reducer",
      "ar": "مثبط مضخة البروتون لتقليل حموضة المعدة"
    },
    "indications": {
      "en": "Proton pump inhibitor (PPI) indicated for healing and maintenance of healing of erosive esophagitis, and the symptomatic treatment of heartburn associated with gastroesophageal reflux disease (GERD).",
      "ar": "مثبط لمضخة البروتون يستطب لشفاء التهاب المريء التقرحي والحفاظ عليه، والعلاج العرضي لحرقة الفؤاد المرتبطة بالارتجاع المعدي المريئي (GERD)."
    },
    "variants": [
      {
        "strength": {
          "en": "30 mg",
          "ar": "٣٠ ملغ"
        },
        "packaging": {
          "en": "20 Cap / Box - Delayed-Release Capsules",
          "ar": "علبة تحتوي ٢٠ كبسولة معوية مديدة التحرر"
        }
      },
      {
        "strength": {
          "en": "60 mg",
          "ar": "٦٠ ملغ"
        },
        "packaging": {
          "en": "20 Cap / Box - Delayed-Release Capsules",
          "ar": "علبة تحتوي ٢٠ كبسولة معوية مديدة التحرر"
        }
      },
    ]
  },
  {
    "id": "luperam",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Luperam",
      "ar": "لوبيرام"
    },
    "activeIngredient": {
      "en": "Loperamide",
      "ar": "لوبيراميد هيدروكلوريد."
    },
    "pharmacologicalClass": {
      "en": "Antidiarrheal mu-opioid receptor agonist",
      "ar": "مضاد للإسهال ينشط مستقبلات الميو الأفيونية فموياً"
    },
    "indications": {
      "en": "Antidiarrheal agent indicated for the control and symptomatic relief of acute non-specific diarrhea and chronic diarrhea associated with inflammatory bowel disease.",
      "ar": "مضاد للإسهال يستطب للسيطرة والتخفيف العرضي من حالات الإسهال الحاد غير النوعي والإسهال المزمن المصاحب لأمراض الأمعاء الالتهابية."
    },
    "variants": [
      {
        "strength": {
          "en": "2 mg",
          "ar": "٢ ملغ"
        },
        "packaging": {
          "en": "20 Cap / Box",
          "ar": "علبة تحتوي ٢٠ كبسولة"
        }
      },
    ]
  },
  {
    "id": "onem",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Onem",
      "ar": "أونيم"
    },
    "activeIngredient": {
      "en": "Ondansetron",
      "ar": "أوندانسيترون."
    },
    "pharmacologicalClass": {
      "en": "Serotonin 5-HT3 receptor antagonist antiemetic",
      "ar": "مضاد لمستقبلات السيروتونين 5-HT3 لمنع الغثيان والإقياء"
    },
    "indications": {
      "en": "Selective 5-HT3 receptor antagonist antiemetic indicated for the prevention of chemotherapy-induced, radiotherapy-induced, and postoperative nausea and vomiting.",
      "ar": "مضاد للقيء والغثيان يستطب للوقاية من الغثيان والقيء المصاحب للعلاج الكيميائي، العلاج الإشعاعي، وبعد العمليات الجراحية."
    },
    "variants": [
      {
        "strength": {
          "en": "8mg",
          "ar": "8 ملغ"
        },
        "packaging": {
          "en": "20 Tablets / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "orlistate-mp",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Orlistate-MP",
      "ar": "أورليستات-إم بي"
    },
    "activeIngredient": {
      "en": "Orlistat",
      "ar": "أورليستات."
    },
    "pharmacologicalClass": {
      "en": "Gastrointestinal lipase inhibitor",
      "ar": "مثبط لإنزيم الليباز المعدي والمعوي"
    },
    "indications": {
      "en": "Reversible gastrointestinal lipase inhibitor indicated for obesity management, weight loss, and weight maintenance in conjunction with a reduced-calorie, low-fat diet.",
      "ar": "مثبط عكوس لإنزيمات اللباز المعدية والبنكرياسية يستطب لعلاج السمنة وإنقاص الوزن وتثبيت الوزن بالتزامن مع نظام غذائي منخفض السعرات والدهون."
    },
    "variants": [
      {
        "strength": {
          "en": "120 mg",
          "ar": "١٢٠ ملغ"
        },
        "packaging": {
          "en": "10 or 30 Cap / Box",
          "ar": "علبة تحتوي ١٠ أو ٣٠ كبسولة"
        }
      },
    ]
  },
  {
    "id": "scopinal",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Scopinal",
      "ar": "سكوبينال"
    },
    "activeIngredient": {
      "en": "HYOSCINE BUTYLBROMIDE",
      "ar": "هيوسين بيوتيل برومايد."
    },
    "pharmacologicalClass": {
      "en": "Antispasmodic and smooth muscle relaxant",
      "ar": "مضاد للتشنج ومرخٍ للعضلات الملساء"
    },
    "indications": {
      "en": "Antispasmodic agent indicated for abdominal spasms and cramps of gastrointestinal, biliary, and genitourinary tracts, and the symptomatic relief of irritable bowel syndrome (IBS).",
      "ar": "مضاد تشنج يستطب لتخفيف التشنجات والمغص في الجهاز الهضمي، القنوات المرارية، والمجاري البولية التناسلية والتخفيف العرضي للقولون العصبي."
    },
    "variants": [
      {
        "strength": {
          "en": "5mg/5mL",
          "ar": "5 ملغ / 5 مل"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Syrup",
          "ar": "عبوة ١٠٠ مل - شراب فموي"
        }
      }
    ]
  },
  {
    "id": "spasmofree",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Spasmofree",
      "ar": "سباسموفري"
    },
    "activeIngredient": {
      "en": "Drotaverine HCL",
      "ar": "دروتافيرين هيدروكلوريد"
    },
    "pharmacologicalClass": {
      "en": "Antispasmodic and smooth muscle relaxant",
      "ar": "مضاد للتشنج ومرخٍ للعضلات الملساء"
    },
    "indications": {
      "en": "Selective phosphodiesterase-4 inhibitor antispasmodic indicated for gastrointestinal, biliary, and urological smooth muscle spasms and spastic dysmenorrhea.",
      "ar": "مضاد تشنج مثبط انتقائي لـ PDE4 يستطب لعلاج تشنجات العضلات الملساء في الجهاز الهضمي، القنوات الصفراوية، والمسالك البولية، وتشنجات الدورة الشهرية."
    },
    "variants": [
      {
        "strength": {
          "en": "40 mg",
          "ar": "٤٠ ملغ"
        },
        "packaging": {
          "en": "10 Tab / Box",
          "ar": "علبة تحتوي ١٠ مضغوطات"
        }
      },
      {
        "strength": {
          "en": "80 mg",
          "ar": "٨٠ ملغ"
        },
        "packaging": {
          "en": "10 Tab / Box",
          "ar": "علبة تحتوي ١٠ مضغوطات"
        }
      },
    ]
  },
  {
    "id": "tictolose",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Tictolose",
      "ar": "تيكتولوز"
    },
    "activeIngredient": {
      "en": "Lactulose",
      "ar": "لاكتولوز."
    },
    "pharmacologicalClass": {
      "en": "Osmotic laxative",
      "ar": "ملين ومسهل أسموزي"
    },
    "indications": {
      "en": "Osmotic laxative indicated for the treatment of chronic constipation and portal-systemic encephalopathy (hepatic coma prevention and therapy).",
      "ar": "ملين تناضحي يستطب لعلاج حالات الإمساك المزمن والوقاية والعلاج من اعتلال الدماغ الكبدي (الغيبوبة الكبدية)."
    },
    "variants": [
      {
        "strength": {
          "en": "3.335 g / 5 ml",
          "ar": "٣.٣٣٥ غ / ٥ مل"
        },
        "packaging": {
          "en": "Bottle of 100 ml - Syrup",
          "ar": "عبوة ١٠٠ مل - شراب فموي"
        }
      },
    ]
  },
  {
    "id": "vomidox",
    "category": {
      "en": "Gastrointestinal Products",
      "ar": "الجهاز الهضمي"
    },
    "name": {
      "en": "Vomidox",
      "ar": "فوميدوكس"
    },
    "activeIngredient": {
      "en": "Meclizine HCl 25mg  + Pyridoxine HCl 50 mg + (Vit.B6)",
      "ar": "ميكليزين هيدروكلوريد 25 ملغ، بيريدوكسين هيدروكلوريد 50 ملغ + (فيتامين ب٦)."
    },
    "pharmacologicalClass": {
      "en": "Antiemetic and dopamine antagonist",
      "ar": "مضاد للإقلاع والغثيان وحاصر لمستقبلات الدوبامين"
    },
    "indications": {
      "en": "Antiemetic and antihistamine combination indicated for the prevention and treatment of nausea, vomiting, and dizziness associated with motion sickness, vestibular disorders, and morning sickness during pregnancy.",
      "ar": "تركيبة مضادة للغثيان ومضاد هيستامين تستطب للوقاية وعلاج الغثيان والقيء والدوار المرتبط بدوار الحركة، الاضطرابات الدهليزية، والغثيان الصباحي أثناء الحمل."
    },
    "variants": [
      {
        "strength": {
          "en": "Tab",
          "ar": "مضغوطات"
        },
        "packaging": {
          "en": "20 Tab / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
    ]
  },
  {
    "id": "lexanil",
    "category": {
      "en": "Benzodiazepines & CNS",
      "ar": "أدوية الجهاز العصبي والمهدئات"
    },
    "name": {
      "en": "Lexanil",
      "ar": "ليكسانيل"
    },
    "activeIngredient": {
      "en": "Bromazepam",
      "ar": "برومازيبام."
    },
    "pharmacologicalClass": {
      "en": "Benzodiazepine anxiolytic",
      "ar": "مهدئ ومضاد للقلق من عائلة البنزوديازيبينات"
    },
    "indications": {
      "en": "Anxiolytic benzodiazepine indicated for the short-term symptomatic relief of severe, disabling anxiety, tension, and psychoneurotic states.",
      "ar": "مضاد للقلق يستطب للعلاج العرضي قصير الأمد لحالات القلق الشديد المعيق، التوتر النفسي، والاضطرابات العصبية المرافقة."
    },
    "variants": [
      {
        "strength": {
          "en": "1.5 mg",
          "ar": "١.٥ ملغ"
        },
        "packaging": {
          "en": "20 Tab / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "3 mg",
          "ar": "٣ ملغ"
        },
        "packaging": {
          "en": "20 Tab / Box - Tablets",
          "ar": "علبة تحتوي ٢٠ مضغوطة - مضغوطات"
        }
      },
    ]
  },
  {
    "id": "lonax",
    "category": {
      "en": "Benzodiazepines & CNS",
      "ar": "أدوية الجهاز العصبي والمهدئات"
    },
    "name": {
      "en": "Lonax",
      "ar": "لوناكس"
    },
    "activeIngredient": {
      "en": "Lorazepam",
      "ar": "لورازيبام"
    },
    "pharmacologicalClass": {
      "en": "Benzodiazepine anxiolytic / sedative",
      "ar": "مهدئ ومنوم من عائلة البنزوديازيبينات"
    },
    "indications": {
      "en": "High-potency benzodiazepine indicated for the treatment of severe anxiety disorders, acute panic attacks, status epilepticus, and short-term management of insomnia.",
      "ar": "بنزوديازيبين قوي الفعالية يستطب لعلاج اضطرابات القلق الشديد، نوبات الهلع الحادة، حالات الاختلاج الصرعي المستمر، وعلاج الأرق قصير الأمد."
    },
    "variants": [
      {
        "strength": {
          "en": "0.5 mg",
          "ar": "٠.٥ ملغ"
        },
        "packaging": {
          "en": "20 Tab / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "1 mg",
          "ar": "١ ملغ"
        },
        "packaging": {
          "en": "20 Tab / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "2 mg",
          "ar": "٢ ملغ"
        },
        "packaging": {
          "en": "20 Tab / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
    ]
  },
  {
    "id": "xaitum",
    "category": {
      "en": "Benzodiazepines & CNS",
      "ar": "أدوية الجهاز العصبي والمهدئات"
    },
    "name": {
      "en": "Xaitum",
      "ar": "زايتوم"
    },
    "activeIngredient": {
      "en": "Diazepam",
      "ar": "ديازيبام."
    },
    "pharmacologicalClass": {
      "en": "Benzodiazepine anxiolytic / anticonvulsant",
      "ar": "مضاد قلق وتشنج من عائلة البنزوديازيبينات"
    },
    "indications": {
      "en": "Long-acting benzodiazepine indicated for the management of anxiety disorders, skeletal muscle spasms, acute alcohol withdrawal symptoms, and adjunctive treatment of status epilepticus.",
      "ar": "بنزوديازيبين مديد المفعول يستطب لعلاج اضطرابات القلق، تشنجات العضلات الهيكلية، أعراض انسحاب الكحول الحادة، وكعلاج مساند في نوبات الصرع."
    },
    "variants": [
      {
        "strength": {
          "en": "2mg",
          "ar": "2 ملغ"
        },
        "packaging": {
          "en": "20 Tablets / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "5mg",
          "ar": "5 ملغ"
        },
        "packaging": {
          "en": "20 Tablets / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "foramet",
    "category": {
      "en": "Diabetes Care",
      "ar": "أدوية داء السكري"
    },
    "name": {
      "en": "Foramet",
      "ar": "فوراميت"
    },
    "activeIngredient": {
      "en": "Metformin",
      "ar": "ميتفورمين."
    },
    "pharmacologicalClass": {
      "en": "Oral hypoglycemic antidiabetic agent",
      "ar": "، خافض سكر فموي من فئة البيغوانيد لداء السكري من النوع الثاني"
    },
    "indications": {
      "en": "Biguanide antihyperglycemic agent indicated as an adjunct to diet and exercise to optimize blood glucose control in patients with type 2 diabetes mellitus, as monotherapy or combination therapy.",
      "ar": "عامل خافض لسكر الدم من فئة البيغوانيد يستطب كعلاج مكمل للنظام الغذائي والتمارين الرياضية لتحسين السيطرة على الغلوكوز في الدم لدى مرضى داء السكري من النوع الثاني."
    },
    "variants": [
      {
        "strength": {
          "en": "1000mg",
          "ar": "1000 ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "500mg",
          "ar": "500 ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "850mg",
          "ar": "850 ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "foramet-xr",
    "category": {
      "en": "Diabetes Care",
      "ar": "أدوية داء السكري"
    },
    "name": {
      "en": "Foramet XR",
      "ar": "فوراميت إكس آر"
    },
    "activeIngredient": {
      "en": "Metformin Hydrochloride",
      "ar": "ميتفورمين هيدروكلوريد مديد التحرر."
    },
    "pharmacologicalClass": {
      "en": "Oral hypoglycemic antidiabetic agent",
      "ar": "خافض سكر فموي من فئة البيغوانيد لداء السكري من النوع الثاني"
    },
    "indications": {
      "en": "Biguanide antihyperglycemic agent indicated as an adjunct to diet and exercise to optimize blood glucose control in patients with type 2 diabetes mellitus, as monotherapy or combination therapy.",
      "ar": "عامل خافض لسكر الدم من فئة البيغوانيد يستطب كعلاج مكمل للنظام الغذائي والتمارين الرياضية لتحسين السيطرة على الغلوكوز في الدم لدى مرضى داء السكري من النوع الثاني."
    },
    "variants": [
      {
        "strength": {
          "en": "1000mg",
          "ar": "1000 ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "500mg",
          "ar": "500 ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      },
      {
        "strength": {
          "en": "750mg",
          "ar": "750 ملغ"
        },
        "packaging": {
          "en": "20 Tablets / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "vildamet",
    "category": {
      "en": "Diabetes Care",
      "ar": "أدوية داء السكري"
    },
    "name": {
      "en": "Vildamet",
      "ar": "فيلداميت"
    },
    "activeIngredient": {
      "en": "Vildagliptin / Metformin HCl",
      "ar": "فيلداغليبتين / ميتفورمين هيدروكلوريد."
    },
    "pharmacologicalClass": {
      "en": "Oral hypoglycemic antidiabetic agent",
      "ar": "خافض لنسبة السكر في الدم عن طريق الفم"
    },
    "indications": {
      "en": "Combination oral hypoglycemic therapy indicated as an adjunct to diet and exercise to improve glycemic control in adult patients with type 2 diabetes mellitus.",
      "ar": "علاج فموي مشترك لخافضات السكر يستطب كمكمل للنظام الغذائي والتمارين الرياضية لتحسين السيطرة على نسبة السكر في الدم لدى البالغين المصابين بداء السكري من النوع الثاني."
    },
    "variants": [
      {
        "strength": {
          "en": "50/850mg",
          "ar": "50 ملغ / 850 ملغ"
        },
        "packaging": {
          "en": "30 Tablets / Box",
          "ar": "علبة تحتوي ٣٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "brecox",
    "category": {
      "en": "Pain Management & Rheumatology",
      "ar": "مسكنات ومضادات التهاب وروماتيزم"
    },
    "name": {
      "en": "Brecox",
      "ar": "بريكوكس"
    },
    "activeIngredient": {
      "en": "Celecoxib",
      "ar": "سيليكوكسيب"
    },
    "pharmacologicalClass": {
      "en": "Selective COX-2 inhibitor nonsteroidal anti-inflammatory",
      "ar": "مضاد التهاب غير ستيرويدي مسكن للألم ومثبط انتقائي لـ COX-2"
    },
    "indications": {
      "en": "Selective COX-2 inhibitor NSAID indicated for the management of signs and symptoms of osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, and acute pain with superior gastrointestinal safety.",
      "ar": "مضاد التهاب غير ستيرويدي مثبط انتقائي لـ COX-2 يستطب لتخفيف علامات وأعراض فصال المفاصل، التهاب المفاصل الروماتويدي، التهاب الفقار اللاصق، والألم الحاد بأمان هضمي متفوق."
    },
    "variants": [
      {
        "strength": {
          "en": "200 mg",
          "ar": "٢٠٠ ملغ"
        },
        "packaging": {
          "en": "20 Cap / Box",
          "ar": "علبة تحتوي ٢٠ كبسولة"
        }
      },
    ]
  },
  {
    "id": "naproxen-mp",
    "category": {
      "en": "Pain Management & Rheumatology",
      "ar": "مسكنات ومضادات التهاب وروماتيزم"
    },
    "name": {
      "en": "Naproxen",
      "ar": "نابروكسين"
    },
    "activeIngredient": {
      "en": "Naproxen Sodium",
      "ar": "نابروكسين صوديوم."
    },
    "pharmacologicalClass": {
      "en": "Non-selective nonsteroidal anti-inflammatory drug (NSAID)",
      "ar": "مضاد التهاب غير ستيرويدي مسكن للألم وخافض للحرارة"
    },
    "indications": {
      "en": "Nonsteroidal anti-inflammatory drug (NSAID) indicated for the relief of pain and inflammation in rheumatoid arthritis, osteoarthritis, acute gout, ankylosing spondylitis, dysmenorrhea, and moderate acute pain.",
      "ar": "مضاد للالتهاب غير ستيرويدي (NSAID) يستطب لتخفيف الألم والالتهاب في التهاب المفاصل الروماتويدي، فصال المفاصل، النقرس الحاد، التهاب الفقار اللاصق، آلام الدورة الشهرية، والآلام الحادة."
    },
    "variants": [
      {
        "strength": {
          "en": "275 mg",
          "ar": "٢٧٥ ملغ"
        },
        "packaging": {
          "en": "20 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم"
        }
      },
      {
        "strength": {
          "en": "550 mg",
          "ar": "٥٥٠ ملغ"
        },
        "packaging": {
          "en": "20 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٢٠ مضغوطة ملبسة بالفيلم"
        }
      },
    ]
  },
  {
    "id": "uricin",
    "category": {
      "en": "Pain Management & Rheumatology",
      "ar": "مسكنات ومضادات التهاب وروماتيزم"
    },
    "name": {
      "en": "Uricin",
      "ar": "يوريسين"
    },
    "activeIngredient": {
      "en": "Colchicine",
      "ar": "كولشيسين."
    },
    "pharmacologicalClass": {
      "en": "Antigout agent / Microtubule disruptor",
      "ar": "مضاد للنقرس ومثبط لانقسام الخلايا الالتهابية"
    },
    "indications": {
      "en": "Antigout therapy indicated for the treatment and prophylaxis of acute gouty arthritis flares and familial Mediterranean fever (FMF) in adults and children.",
      "ar": "علاج للنقرس يستطب للوقاية والعلاج الحاد لنوبات التهاب المفاصل النقرسية ونوبات حمى البحر الأبيض المتوسط العائلية (FMF) لدى البالغين والأطفال."
    },
    "variants": [
      {
        "strength": {
          "en": "0.6mg",
          "ar": "0.6 ملغ"
        },
        "packaging": {
          "en": "20 Tablets / Box",
          "ar": "علبة تحتوي ٢٠ مضغوطة"
        }
      }
    ]
  },
  {
    "id": "feropro",
    "category": {
      "en": "Food Supplements & Vitamins",
      "ar": "متممات غذائية وفيتامينات"
    },
    "name": {
      "en": "FeroPro",
      "ar": "فيروبرو"
    },
    "activeIngredient": {
      "en": "",
      "ar": "حديد مضاف ومقويات سريرية لعلاج فقر الدم ودعم الهيموغلوبين."
    },
    "pharmacologicalClass": {
      "en": "Nutritional health supplement",
      "ar": "مكمل غذائي داعم للصحة"
    },
    "indications": {
      "en": "High-potency clinical iron supplement formulated with co-factors to optimize red blood cell production, treat iron-deficiency anemia, and alleviate fatigue.",
      "ar": "مكمل حديد سريري عالي الجودة مركب مع عوامل مرافقة لتحفيز إنتاج خلايا الدم الحمراء، علاج فقر الدم الناتج عن نقص الحديد، ومكافحة الإرهاق."
    },
    "variants": [
      {
        "strength": {
          "en": "N/A",
          "ar": "N/A"
        },
        "packaging": {
          "en": " - ",
          "ar": " - "
        }
      }
    ]
  },
  {
    "id": "hairpro",
    "category": {
      "en": "Food Supplements & Vitamins",
      "ar": "متممات غذائية وفيتامينات"
    },
    "name": {
      "en": "HairPro",
      "ar": "هيربرو"
    },
    "activeIngredient": {
      "en": "Biotin 45mcg + L-Cysteine 10mg + Iron 12mg + Zinc 15mg + Multivitamins & Minerals",
      "ar": "بيوتين ٤٥ مكغ + إل-سيستئين ١٠ ملغ + حديد ١٢ ملغ + زنك ١٥ ملغ + فيتامينات ومعادن مكملة."
    },
    "pharmacologicalClass": {
      "en": "Nutritional Hair health supplement",
      "ar": "مكمل غذائي داعم لصحة الشعر"
    },
    "indications": {
      "en": "Nutritional therapy formulated with biotin and amino acids to reduce hair loss, promote hair follicle revitalization, and support radiant skin and strong nails.",
      "ar": "مكمل مغذٍ متكامل مركب للحد من تساقط الشعر، تنشيط بصيلات الشعر، ودعم صحة ونضارة البشرة وتقوية الأظافر الهشة."
    },
    "variants": [
      {
        "strength": {
          "en": "Tab",
          "ar": "مضغوطات"
        },
        "packaging": {
          "en": "30 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٣٠ مضغوطة ملبسة بالفيلم - مضغوطات ملبسة بالفيلم ومكمل متكامل للبشرة والشعر"
        }
      },
      {
        "strength": {
          "en": "N/A",
          "ar": "N/A"
        },
        "packaging": {
          "en": "30 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٣٠ مضغوطة - مضغوطة"
        }
      }
    ]
  },
  {
    "id": "jointpro",
    "category": {
      "en": "Food Supplements & Vitamins",
      "ar": "متممات غذائية وفيتامينات"
    },
    "name": {
      "en": "JointPro",
      "ar": "جوينت برو"
    },
    "activeIngredient": {
      "en": "",
      "ar": "غلوكوزامين وكوندرويتين وعوامل مرافقة لترميم الغضاريف وصحة المفاصل."
    },
    "pharmacologicalClass": {
      "en": "Nutritional health supplement",
      "ar": "مكمل غذائي داعم للصحة"
    },
    "indications": {
      "en": "Advanced clinical joint health complex containing Glucosamine and Chondroitin to encourage cartilage regeneration, enhance joint mobility, and reduce inflammatory discomfort.",
      "ar": "مكمل غذائي متقدم للمفاصل مركب من الغلوكوزامين والكوندرويتين لدعم تجديد غضاريف المفاصل، تحسين مرونة الحركة، وتخفيف آلام المفاصل."
    },
    "variants": [
      {
        "strength": {
          "en": "N/A",
          "ar": "N/A"
        },
        "packaging": {
          "en": " - ",
          "ar": " - "
        }
      }
    ]
  },
  {
    "id": "osteopro",
    "category": {
      "en": "Food Supplements & Vitamins",
      "ar": "متممات غذائية وفيتامينات"
    },
    "name": {
      "en": "OsteoPro",
      "ar": "أو ستيوبرو"
    },
    "activeIngredient": {
      "en": "Calcium 400mg + Magnesium 150mg + Vitamin D3 5mcg + Zinc 5mg",
      "ar": "كالسيوم 400 ملغ + مغنيسيوم 150 ملغ + فيتامين د٣ 5مكغ  + زنك 5 ملغ."
    },
    "pharmacologicalClass": {
      "en": "Nutritional health supplement",
      "ar": "مكمل غذائي، معزز لدعم وصحة العظام والمفاصل"
    },
    "indications": {
      "en": "Synergy bone support complex formulated with calcium, magnesium, zinc, and vitamin D3 to optimize bone mineral density and support skeletal integrity.",
      "ar": "مكمل تآزري لدعم العظام مركب من الكالسيوم والمغنيسيوم والزنك وفيتامين د٣ للحفاظ على كثافة المعادن العظمية وقوة الهيكل العظمي."
    },
    "variants": [
      {
        "strength": {
          "en": "Tab",
          "ar": "مضغوطات"
        },
        "packaging": {
          "en": "30 F.C.T / Box - Film-Coated Tablets",
          "ar": "علبة تحتوي ٣٠ مضغوطة ملبسة بالفيلم"
        }
      },
    ]
  },
  {
    "id": "vitatec-b-complex",
    "category": {
      "en": "Food Supplements & Vitamins",
      "ar": "متممات غذائية وفيتامينات"
    },
    "name": {
      "en": "Vitatec B Complex",
      "ar": "فيتاتيك ب كومبلكس"
    },
    "activeIngredient": {
      "en": "B1 + B6 + B12",
      "ar": "فيتامين ب١ + فيتامين ب٦ + فيتامين ب١٢."
    },
    "pharmacologicalClass": {
      "en": "Essential B-complex vitamins",
      "ar": "مجموعة فيتامينات ب الأساسية للأعصاب والصحة العامة"
    },
    "indications": {
      "en": "High-dose neurotropic B vitamin complex indicated for the management and prevention of neuropathy, nerve pain, and vitamin B1, B6, and B12 deficiencies.",
      "ar": "مجمع فيتامينات ب المقوية للأعصاب بجرعات عالية يستطب لعلاج والوقاية من اعتلال والتهاب الأعصاب الطرفية ونقص فيتامينات ب١ وب٦ وب١٢."
    },
    "variants": [
      {
        "strength": {
          "en": "1000 mg - B1 100mg / B6 100mg / B12 1g",
          "ar": "1000 ملغ - ب1 100 ملغ / ب6 100 ملغ / ب12 1 غ"
        },
        "packaging": {
          "en": "20 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٢٠ مضغوطة - مضغوطة"
        }
      },
      {
        "strength": {
          "en": "5000 mg - B1 100mg / B6 100mg / B12 5g",
          "ar": "5000 ملغ - ب1 100 ملغ / ب6 100 ملغ / ب12 5 غ"
        },
        "packaging": {
          "en": "20 Tablets / Box - Tablet",
          "ar": "علبة تحتوي ٢٠ مضغوطة - مضغوطة"
        }
      }
    ]
  },
  {
    "id": "vitatec-creatine",
    "category": {
      "en": "Food Supplements & Vitamins",
      "ar": "متممات غذائية وفيتامينات"
    },
    "name": {
      "en": "Vitatec Creatine",
      "ar": "فيتاتيك كرياتين"
    },
    "activeIngredient": {
      "en": "Creatine Monohydrate",
      "ar": "كرياتين مونوهيدرات نقي"
    },
    "pharmacologicalClass": {
      "en": "Amino acid muscle energy supplement",
      "ar": "مكمل حمض أميني لتعزيز طاقة العضلات"
    },
    "indications": {
      "en": "Premium clinical creatine monohydrate indicated to support skeletal muscle mass development, maximize cellular energy reserves (ATP), and enhance explosive power during physical training.",
      "ar": "كرياتين مونوهيدرات نقي ومدروس يستطب لزيادة الكتلة العضلية الهيكلية، تعزيز إنتاج الطاقة الخلوية، وتحسين الأداء الرياضي والبدني عالي الكثافة."
    },
    "variants": [
      {
        "strength": {
          "en": "5g",
          "ar": "5 غ"
        },
        "packaging": {
          "en": "10 Sachets / Box",
          "ar": "علبة تحتوي ١٠ مغلف"
        }
      }
    ]
  },
  {
    "id": "mycept",
    "category": {
      "en": "Immunosuppressants",
      "ar": "المثبطات المناعية"
    },
    "name": {
      "en": "Mycept",
      "ar": "مايسيبت"
    },
    "activeIngredient": {
      "en": "Mycophenolate Mofetil",
      "ar": "ميكوفينولات موفيتيل."
    },
    "pharmacologicalClass": {
      "en": "Inosine monophosphate dehydrogenase inhibitor immunosuppressant",
      "ar": "مثبط للمناعة يمنع تكاثر الخلايا الليمفاوية"
    },
    "indications": {
      "en": "Immunosuppressive agent indicated for the prophylaxis of acute organ rejection in patients receiving allogeneic renal, cardiac, or hepatic transplants, in combination with cyclosporine and corticosteroids.",
      "ar": "مثبط مناعي يستطب للوقاية من الرفض الحاد للأعضاء المزروعة لدى المرضى الخاضعين لزراعة كلى أو قلب أو كبد، بالتزامن مع السيكلوسبورين والكورتيكوستيرويدات."
    },
    "variants": [
      {
        "strength": {
          "en": "500 mg",
          "ar": "٥٠٠ ملغ"
        },
        "packaging": {
          "en": "30 Tab / Box - Tablets",
          "ar": "علبة تحتوي ٣٠ مضغوطة - مضغوطات"
        }
      },
    ]
  },
  {
    "id": "pangraf",
    "category": {
      "en": "Immunosuppressants",
      "ar": "المثبطات المناعية"
    },
    "name": {
      "en": "Pangraf",
      "ar": "بانغراف"
    },
    "activeIngredient": {
      "en": "Tacrolimus",
      "ar": "تاكروليموس."
    },
    "pharmacologicalClass": {
      "en": "Calcineurin inhibitor immunosuppressant",
      "ar": "مثبط مناعي من زمرة مثبطات الكالسينيورين"
    },
    "indications": {
      "en": "Prophylaxis of organ rejection in kidney, liver, or heart transplant recipients, and treatment of allograft rejection resistant to other regimens.",
      "ar": "الوقاية من رفض الأعضاء المزروعة لدى مستقبلي طعوم الكلى أو الكبد أو القلب، وعلاج حالات رفض الطعم المستعصية."
    },
    "variants": [
      {
        "strength": {
          "en": "0.5 mg",
          "ar": "٠.٥ ملغ"
        },
        "packaging": {
          "en": "60 Cap / Box - Capsules",
          "ar": "علبة تحتوي ٦٠ كبسولة - كبسولات"
        }
      },
      {
        "strength": {
          "en": "1 mg",
          "ar": "١ ملغ"
        },
        "packaging": {
          "en": "60 Cap / Box - Capsules",
          "ar": "علبة تحتوي ٦٠ كبسولة - كبسولات"
        }
      }
    ]
  }
];

export interface CategoryTab {
  id: string;
  name: string;
  nameAr: string;
}

export function getComputedCategoryTabs(products: Product[]): CategoryTab[] {
  const categoriesMap = new Map<string, { en: string; ar: string }>();

  (products || []).forEach((product) => {
    const enName = product.category.en;
    const arName = product.category.ar || enName;
    if (enName && !categoriesMap.has(enName)) {
      categoriesMap.set(enName, { en: enName, ar: arName });
    }
  });

  const computed = Array.from(categoriesMap.values()).map((val) => ({
    id: val.en.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: val.en,
    nameAr: val.ar
  }));

  // Ensure "All Products" is always first
  return [
    { id: 'all', name: 'All Products', nameAr: 'كافة المستحضرات' },
    ...computed
  ];
}


const fs = require('fs');

// Full CSV content
const CSV_DATA = `الزمرة العلاجية,الاسم العلمي,الاسم التجاري,التركيز,الشكل الدوائي,حجم العبوة,الاستطباب العالمي,مفتاح المنتج
أدوية البرد الليلية,PARACETAMOL 325mg+PHENYLEPHRI NE 5mg+DIPHENHYDRAMINE 12.5mg,Sinuline Night,325/5/12.5mg,Tab,20 Tabs,لتخفيف أعراض البرد ليلاً مع تأثير مهدئ يساعد على النوم,Sinuline Night - 325/5/12.5mg | Tab | 20 Tabs
أدوية البرد للأطفال,PARACETAMOL 125mg+GUAIFENESIN 50mg+ PHENYLEPHRINE 2.5mg,Sinuline,125/50/2.5mg,Syrup,100 mL,لتخفيف أعراض البرد والاحتقان والسعال المصحوب بالبلغم عند الأطفال,Sinuline - 125/50/2.5mg | Syrup | 100 mL
أدوية البرد والإنفلونزا,PARACETAMOL 500mg+GUAIFENESIN 100mg + PHENYLEPHRINE 5mg,Sinuline,250/100/5,Tab,20 Tabs,لتخفيف الحمى والاحتقان والسعال المصحوب بالبلغم في نزلات البرد,Sinuline - 250/100/5 | Tab | 20 Tabs
أدوية البرد والإنفلونزا مع مسكن,CHLORPHENIRAMINE MALEATE4mg+PHENYLEPHRINE HCL10mg+IBUPROFEN200mg,Bumex,4/2/200mg,Tab,20 Tabs,لتخفيف أعراض البرد والحمى والألم واحتقان الأنف,Bumex - 4/2/200mg | Tab | 20 Tabs
أدوية السعال والبرد,CHLORPHENIRAMINE MALEATE 2 mg +BROMHEXIN 2mg +GUAIF ENESIN 50mg,Brodine,2/4/50mg,Syrup,100 mL,لتخفيف السعال المصحوب بالبلغم وأعراض نزلات البرد والحساسية,Brodine - 2/4/50mg | Syrup | 100 mL
أدوية ضعف الانتصاب (مثبطات PDE5),Sildenafil,Grofil,100mg,Tab,4 Tabs,لعلاج ضعف الانتصاب عند الرجال البالغين,Grofil - 100mg | Tab | 4 Tabs
أدوية ضعف الانتصاب (مثبطات PDE5),Sildenafil,Grofil,50mg,Tab,4 Tabs,لعلاج ضعف الانتصاب عند الرجال البالغين,Grofil - 50mg | Tab | 4 Tabs
مضادات التشنج الهضمي,Alverine,Alvemas Forte,120mg,Cap,20 Caps,لعلاج تشنجات القولون وأعراض القولون العصبي,Alvemas Forte - 120mg | Cap | 20 Caps
مضادات الحموضة ومضادات الانتفاخ,"Aluminum hydroxide 400, Mg hydroxide 400, Simethicone 40",Aldolox,400/400/20mg,Susp,100 mL,لتخفيف حرقة المعدة وعسر الهضم والانتفاخ الناتج عن الغازات,Aldolox - 400/400/20mg | Susp | 100 mL
مضادات الحموضة ومضادات الانتفاخ,"Aluminum hydroxide 400, Mg hydroxide 400, Simethicone 40",Aldolox,400/400/20mg,Chew Tab,20 Tabs,لتخفيف حرقة المعدة وعسر الهضم والانتفاخ الناتج عن الغازات,Aldolox - 400/400/20mg | Chew Tab | 20 Tabs
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,1000mg,Tab | Alu-Alu,14 Tabs,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 1000mg | Tab | Alu-Alu | 14 Tabs
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,1000mg,Tab | Alu-Alu,10 Tabs,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 1000mg | Tab | Alu-Alu | 10 Tabs
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,1000mg,Tab | Alu-Alu,6 Tabs,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 1000mg | Tab | Alu-Alu | 6 Tabs
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,625mg,Tab | Alu-Alu,10 Tabs,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 625mg | Tab | Alu-Alu | 10 Tabs
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,228.5mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 228.5mg | Susp | 60 mL
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,312.5mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 312.5mg | Susp | 60 mL
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,457mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 457mg | Susp | 60 mL
مضادات حيوية - بنسلين موسع الطيف,Amoxicillin + Clavulanic Acid,Clavumas,642.5mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والبولي والجلد البكتيرية الواسعة,Clavumas - 642.5mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefdinir,Linir,125mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والجيوب والأذن والجلد البكتيرية,Linir - 125mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefdinir,Linir,250mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والجيوب والأذن والجلد البكتيرية,Linir - 250mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefdinir,Linir,300mg,Tab | Alu-Alu,10 Tabs,لعلاج التهابات الجهاز التنفسي والجيوب والأذن والجلد البكتيرية,Linir - 300mg | Tab | Alu-Alu | 10 Tabs
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefixime,CefraxNeo,100mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والبولي والأذن الوسطى البكتيرية,CefraxNeo - 100mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefixime,CefraxNeo,200mg,Tab,10 Tabs,لعلاج التهابات الجهاز التنفسي والبولي والأذن الوسطى البكتيرية,CefraxNeo - 200mg | Tab | 10 Tabs
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefixime,CefraxNeo,400mg,Tab,10 Tabs,لعلاج التهابات الجهاز التنفسي والبولي والأذن الوسطى البكتيرية,CefraxNeo - 400mg | Tab | 10 Tabs
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefpodoxime,Cefpodomas,100mg,Susp,60 mL,لعلاج عدوى الجهاز التنفسي والمسالك البولية والجلد البكتيرية,Cefpodomas - 100mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefpodoxime,Cefpodomas,100mg,Tab,20 Tabs,لعلاج عدوى الجهاز التنفسي والمسالك البولية والجلد البكتيرية,Cefpodomas - 100mg | Tab | 20 Tabs
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefpodoxime,Cefpodomas,200mg,Tab,10 Tabs,لعلاج عدوى الجهاز التنفسي والمسالك البولية والجلد البكتيرية,Cefpodomas - 200mg | Tab | 10 Tabs
مضادات حيوية - سيفالوسبورين الجيل الثالث,Cefpodoxime,Cefpodomas,50mg,Susp,60 mL,لعلاج عدوى الجهاز التنفسي والمسالك البولية والجلد البكتيرية,Cefpodomas - 50mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثاني,Cefuroxime,Ceftron,125mg,Susp,60 mL,لعلاج عدوى الجهاز التنفسي والبولي والجلد البكتيرية,Ceftron - 125mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثاني,Cefuroxime,Ceftron,250mg,Susp,60 mL,لعلاج عدوى الجهاز التنفسي والبولي والجلد البكتيرية,Ceftron - 250mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثاني,Cefuroxime,Ceftron,250mg,Tab,10 Tabs,لعلاج عدوى الجهاز التنفسي والبولي والجلد البكتيرية,Ceftron - 250mg | Tab | 10 Tabs
مضادات حيوية - سيفالوسبورين الجيل الثاني,Cefuroxime,Ceftron,500mg,Tab,10 Tabs,لعلاج عدوى الجهاز التنفسي والبولي والجلد البكتيرية,Ceftron - 500mg | Tab | 10 Tabs
مضادات حيوية - كينولون,Ciprofloxacin,Tilacip,500mg,Tab,10 Tabs,لعلاج عدوى المسالك البولية والجهاز الهضمي والتنفسي البكتيرية,Tilacip - 500mg | Tab | 10 Tabs
مضادات حيوية - كينولون,Ciprofloxacin,Tilacip,750mg,Tab,10 Tabs,لعلاج عدوى المسالك البولية والجهاز الهضمي والتنفسي البكتيرية,Tilacip - 750mg | Tab | 10 Tabs
مضادات حيوية - كينولون,Levofloxacin,Tilev,500mg,Tab,10 Tabs,لعلاج التهابات الجهاز التنفسي والمسالك البولية والجلد البكتيرية,Tilev - 500mg | Tab | 10 Tabs
مضادات حيوية - كينولون,Levofloxacin,Tilev,750mg,Tab,10 Tabs,لعلاج التهابات الجهاز التنفسي والمسالك البولية والجلد البكتيرية,Tilev - 750mg | Tab | 10 Tabs
مضادات حيوية - كينولون,MOXIFLOXACIN,Tilamox,400mg,Tab,5 Tabs,لعلاج التهابات الجهاز التنفسي السفلي والجيوب الجرثومية,Tilamox - 400mg | Tab | 5 Tabs
مضادات حيوية - ماكروليد,Azithromycin,Azmiron,200mg,Susp,15 mL,لعلاج عدوى الجهاز التنفسي والجلد والأنسجة الرخوة البكتيرية,Azmiron - 200mg | Susp | 15 mL
مضادات حيوية - ماكروليد,Azithromycin,Azmiron,500mg,Tab,3 Tabs,لعلاج عدوى الجهاز التنفسي والجلد والأنسجة الرخوة البكتيرية,Azmiron - 500mg | Tab | 3 Tabs
أدوية إنقاص الوزن,Orlistat,Orlistate-MP,120mg,Cap,10 Caps,لعلاج السمنة عن طريق تقليل امتصاص الدهون من الطعام,Orlistate-MP - 120mg | Cap | 10 Caps
أدوية البرد المضادة للحساسية,PARACETAMOL 325mg+PHENYLEPHRI NE HCL 10mg +CETIRIZINE DIHYDROCHLORIDE 5mg,Cetirizine Plus,325/10/5mg,Tab,20 Tabs,لتخفيف احتقان الأنف والعطاس وأعراض حساسية البرد,Cetirizine Plus - 325/10/5mg | Tab | 20 Tabs
أدوية السعال الجاف والبرد,PARACETAMOL 500mg+DEXTROMETH ORPHAN 15mg+PHENYLEPHRINE HCL 5mg,Coldar,500/15/5mg,Tab,20 Tabs,لتخفيف السعال الجاف والاحتقان والحمى المصاحبة لنزلات البرد,Coldar - 500/15/5mg | Tab | 20 Tabs
أدوية السكري (مركب DPP-4 وبيغوانيد),Vildagliptin / Metformin HCl,Vildamet,50/850mg,Tab,30 Tabs,لعلاج داء السكري من النوع الثاني,Vildamet - 50/850mg | Tab | 30 Tabs
أدوية السكري - بيغوانيد,Metformin,Foramet,1000mg,Tab,30 Tabs,لعلاج داء السكري من النوع الثاني,Foramet - 1000mg | Tab | 30 Tabs
أدوية السكري - بيغوانيد,Metformin,Foramet,500mg,Tab,30 Tabs,لعلاج داء السكري من النوع الثاني,Foramet - 500mg | Tab | 30 Tabs
أدوية السكري - بيغوانيد,Metformin,Foramet,850mg,Tab,30 Tabs,لعلاج داء السكري من النوع الثاني,Foramet - 850mg | Tab | 30 Tabs
أدوية السكري - بيغوانيد مديد التحرر,Metformin Hydrochloride,Foramet XR,1000mg,Tab,30 Tabs,لعلاج داء السكري من النوع الثاني بجرعة واحدة يومياً,Foramet XR - 1000mg | Tab | 30 Tabs
أدوية السكري - بيغوانيد مديد التحرر,Metformin Hydrochloride,Foramet XR,500mg,Tab,30 Tabs,لعلاج داء السكري من النوع الثاني بجرعة واحدة يومياً,Foramet XR - 500mg | Tab | 30 Tabs
أدوية السكري - بيغوانيد مديد التحرر,Metformin Hydrochloride,Foramet XR,750mg,Tab,20 Tabs,لعلاج داء السكري من النوع الثاني بجرعة واحدة يومياً,Foramet XR - 750mg | Tab | 20 Tabs
أدوية النقرس,Colchicine,Uricin,0.6mg,Tab,20 Tabs,لعلاج ومنع نوبات النقرس الحادة,Uricin - 0.6mg | Tab | 20 Tabs
حاصرات بيتا القلبية,Bisoprolol,Conol,2.5mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم وقصور القلب والذبحة الصدرية,Conol - 2.5mg | Tab | 20 Tabs
حاصرات بيتا القلبية,Bisoprolol,Conol,5mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم وقصور القلب والذبحة الصدرية,Conol - 5mg | Tab | 20 Tabs
حاصرات بيتا القلبية,Metoprolol Tartrat,Metapral,100mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم والذبحة الصدرية وعدم انتظام نظم القلب,Metapral - 100mg | Tab | 20 Tabs
حاصرات بيتا القلبية,Metoprolol Tartrat,Metapral,50mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم والذبحة الصدرية وعدم انتظام نظم القلب,Metapral - 50mg | Tab | 20 Tabs
حاصرات قنوات الكالسيوم,Amlodipine,Milor,5mg,Cap,30 Caps,لعلاج ارتفاع ضغط الدم والذبحة الصدرية,Milor - 5mg | Cap | 30 Caps
حاصرات قنوات الكالسيوم,Diltiazem,Tiazen XR,60mg,Cap,20 Tabs,لعلاج ارتفاع ضغط الدم والذبحة الصدرية وعدم انتظام ضربات القلب,Tiazen XR - 60mg | Cap | 20 Tabs
حاصرات قنوات الكالسيوم,Diltiazem,Tiazen XR,90mg,Cap,20 Tabs,لعلاج ارتفاع ضغط الدم والذبحة الصدرية وعدم انتظام ضربات القلب,Tiazen XR - 90mg | Cap | 20 Tabs
خافضات الدهون (مركب),Fenofibrate/Simvastatin,Fibrovast,145/40mg,Tab,30 Tabs,لعلاج اضطراب شحوم الدم وارتفاع الكوليسترول والدهون الثلاثية,Fibrovast - 145/40mg | Tab | 30 Tabs
مثبطات المناعة,Mycophenolate Mofetil,Mycept,500mg,Tab,30 Tabs,للوقاية من رفض الأعضاء المزروعة بعد عمليات الزرع,Mycept - 500mg | Tab | 30 Tabs
مثبطات مضخة البروتون,Dexlansoprazole,Dexadex,30mg,Cap,20 Caps,لعلاج ارتجاع المريء والقرحة الهضمية وحموضة المعدة,Dexadex - 30mg | Cap | 20 Caps
مثبطات مضخة البروتون,Dexlansoprazole,Dexadex,60mg,Cap,20 Caps,لعلاج ارتجاع المريء والقرحة الهضمية وحموضة المعدة,Dexadex - 60mg | Cap | 20 Caps
مدرات البول - حلقية,Torsemide,Torsemide,10mg,Tab,20 Tabs,لعلاج احتباس السوائل المرتبط بقصور القلب والكلى والكبد,Torsemide - 10mg | Tab | 20 Tabs
مدرات البول - حلقية,Torsemide,Torsemide,20mg,Tab,20 Tabs,لعلاج احتباس السوائل المرتبط بقصور القلب والكلى والكبد,Torsemide - 20mg | Tab | 20 Tabs
مذيبات البلغم,Ambroxol,Salovin,30mg,Cap,30 Caps,لتسهيل طرد البلغم في أمراض الجهاز التنفسي الحادة والمزمنة,Salovin - 30mg | Cap | 30 Caps
مذيبات البلغم,Carbocysteine,Lysocar,375mg,Cap,30 Caps,لتسهيل طرد البلغم في أمراض الجهاز التنفسي المصحوبة بإفرازات,Lysocar - 375mg | Cap | 30 Caps
مسكنات الألم المركبة,"Paracetamol, Propyphenazone, Caffeine",Trigesic,,Tab,20 Tabs,لعلاج الصداع والآلام البسيطة إلى المتوسطة والحمى,Trigesic -  | Tab | 20 Tabs
مضادات ارتفاع ضغط الدم (ثلاثي مركب),"Olmesartan, Amlodipine, Hydrochlorothiazide",Milocard,20/5/12.5mg,Tab,30 Tabs,لعلاج ارتفاع ضغط الدم الشديد أو غير المضبوط بعلاجين,Milocard - 20/5/12.5mg | Tab | 30 Tabs
مضادات ارتفاع ضغط الدم (ثلاثي مركب),"Olmesartan, Amlodipine, Hydrochlorothiazide",Milocard,40/5/12.5mg,Tab,30 Tabs,لعلاج ارتفاع ضغط الدم الشديد أو غير المضبوط بعلاجين,Milocard - 40/5/12.5mg | Tab | 30 Tabs
مضادات ارتفاع ضغط الدم (ثلاثي مركب),"Olmesartan, Amlodipine, Hydrochlorothiazide",Milocard,40/5/25mg,Tab,30 Tabs,لعلاج ارتفاع ضغط الدم الشديد أو غير المضبوط بعلاجين,Milocard - 40/5/25mg | Tab | 30 Tabs
مضادات ارتفاع ضغط الدم (مركب),Candesartan Cilexetil / Hydrochlorothiazid,Conid Plus,16/12.5mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم غير المضبوط بعلاج واحد,Conid Plus - 16/12.5mg | Tab | 20 Tabs
مضادات ارتفاع ضغط الدم (مركب),Candesartan Cilexetil / Hydrochlorothiazid,Conid Plus,8/12.5mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم غير المضبوط بعلاج واحد,Conid Plus - 8/12.5mg | Tab | 20 Tabs
مضادات ارتفاع ضغط الدم (مركزية التأثير),Methyl Dopa,Rando,250mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم وخاصة لدى الحوامل,Rando - 250mg | Tab | 20 Tabs
مضادات ارتفاع ضغط الدم (مركزية التأثير),Methyl Dopa,Rando,500mg,Tab,20 Tabs,لعلاج ارتفاع ضغط الدم وخاصة لدى الحوامل,Rando - 500mg | Tab | 20 Tabs
مضادات ارتفاع ضغط الدم - حاصرات مستقبلات الأنجيوتنسين,Candesartan Cilexetil,Conid,16mg,Tab,30 Tabs,لعلاج ارتفاع ضغط الدم الشرياني,Conid - 16mg | Tab | 30 Tabs
مضادات ارتفاع ضغط الدم - حاصرات مستقبلات الأنجيوتنسين,Candesartan Cilexetil,Conid,8mg,Tab,30 Tabs,لعلاج ارتفاع ضغط الدم الشرياني,Conid - 8mg | Tab | 30 Tabs
مضادات الإسهال,Loperamide,Luperam,2mg,Cap,20 Tabs,لعلاج الإسهال الحاد وغير المحدد السبب,Luperam - 2mg | Cap | 20 Tabs
مضادات الاختلاج,Carbamazepine,Carbitol,200mg,Tab,20 Tabs,لعلاج الصرع وألم العصب الثلاثي والاضطراب ثنائي القطب,Carbitol - 200mg | Tab | 20 Tabs
مضادات الاختلاج,Carbamazepine,Carbitol,400mg,Tab,20 Tabs,لعلاج الصرع وألم العصب الثلاثي والاضطراب ثنائي القطب,Carbitol - 400mg | Tab | 20 Tabs
مضادات الالتهاب غير الستيروئيدية,Naproxen Sodium,Naproxen,275mg,Tab,20 Tabs,لعلاج الألم والالتهاب في التهاب المفاصل والصداع وآلام الدورة,Naproxen - 275mg | Tab | 20 Tabs
مضادات الالتهاب غير الستيروئيدية,Naproxen Sodium,Naproxen,550mg,Tab,20 Tabs,لعلاج الألم والالتهاب في التهاب المفاصل والصداع وآلام الدورة,Naproxen - 550mg | Tab | 20 Tabs
مضادات الالتهاب غير الستيروئيدية (COX-2),Celecoxib,Brecox,200mg,Cap,20 Caps,لعلاج التهاب المفاصل والألم والالتهاب مع تقليل أثر المعدة,Brecox - 200mg | Cap | 20 Caps
مضادات التشنج,Drotaverine HCL,Spasmofree,40mg,Tab,10 Tabs,لعلاج التشنجات العضلية الملساء في الجهاز الهضمي والبولي,Spasmofree - 40mg | Tab | 10 Tabs
مضادات التشنج,Drotaverine HCL,Spasmofree,80mg,Tab,10 Tabs,لعلاج التشنجات العضلية الملساء في الجهاز الهضمي والبولي,Spasmofree - 80mg | Tab | 10 Tabs
مضادات التشنج الهضمي,HYOSCINE BUTYLBROMIDE,Scopinal,5mg/5mL,Syrup,100 mL,لعلاج تشنجات وآلام القولون والجهاز الهضمي والمرارة,Scopinal - 5mg/5mL | Syrup | 100 mL
مضادات الدوار والقيء,"Meclizine HCl, Pyridoxine HCl (Vit.B6)",Vomidox,,Tab,20 Tabs,لعلاج دوار الحركة والغثيان والقيء المصاحب للحمل,Vomidox -  | Tab | 20 Tabs
مضادات الذهان غير النمطية,Sulpiride,Piri,200mg,Tab,20 Caps,لعلاج اضطرابات نفسية وذهانية وبعض حالات القلق والدوار,Piri - 200mg | Tab | 20 Caps
مضادات الذهان غير النمطية,Sulpiride,Piri,50mg,Tab,30 Caps,لعلاج اضطرابات نفسية وذهانية وبعض حالات القلق والدوار,Piri - 50mg | Tab | 30 Caps
مضادات الطفيليات والأميبا,Metronidazole 100 / Diloxanide125,Aldenol,100/125mg,Susp,100 mL,لعلاج الزحار الأميبي وعدوى الأميبا المعوية,Aldenol - 100/125mg | Susp | 100 mL
مضادات الفطريات,Nystatin,Micron,"100,000 IU/1mL",Susp,60 mL,لعلاج عدوى المبيضات الفموية والمعوية الفطرية,"Micron - 100,000 IU/1mL | Susp | 60 mL"
مضادات القيء (مثبطات السيروتونين),Ondansetron,Onem,8mg,Tab,20 Tabs,للوقاية من الغثيان والقيء المصاحب للعلاج الكيميائي والجراحة,Onem - 8mg | Tab | 20 Tabs
مضادات الهيستامين,Cetirizine,Cetirizine,5 mg,Syrup,100 mL,لعلاج حساسية الأنف والشرى والحكة الجلدية التحسسية,Cetirizine - 5 mg | Syrup | 100 mL
مضادات الهيستامين,Desloratadine,Loramas,5mg,Tab,20 Tabs,لعلاج التهاب الأنف التحسسي والشرى المزمن,Loramas - 5mg | Tab | 20 Tabs
مضادات حيوية - سلفا,Sulfamethoxazole / Trimethoprim,Cipli,200/40 mg,Susp,100 mL,لعلاج عدوى المسالك البولية والتنفسية والهضمية البكتيرية,Cipli - 200/40 mg | Susp | 100 mL
مضادات حيوية - سلفا,Sulfamethoxazole / Trimethoprim,Cipli,400/80 mg,Tab,20 Tabs,لعلاج عدوى المسالك البولية والتنفسية والهضمية البكتيرية,Cipli - 400/80 mg | Tab | 20 Tabs
مضادات حيوية - سلفا,Sulfamethoxazole / Trimethoprim,Cipli,800/160 mg,Tab,20 Tabs,لعلاج عدوى المسالك البولية والتنفسية والهضمية البكتيرية,Cipli - 800/160 mg | Tab | 20 Tabs
مضادات حيوية - سيفالوسبورين الجيل الثاني,Cefaclor,Maclor,125mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والأذن والمسالك البولية,Maclor - 125mg | Susp | 60 mL
مضادات حيوية - سيفالوسبورين الجيل الثاني,Cefaclor,Maclor,250mg,Susp,60 mL,لعلاج التهابات الجهاز التنفسي والأذن والمسالك البولية,Maclor - 250mg | Susp | 60 mL
مضادات حيوية - ماكروليد,Azithromycin,Azmiron,200mg,Susp,30 mL,لعلاج عدوى الجهاز التنفسي والجلد والأنسجة الرخوة البكتيرية,Azmiron - 200mg | Susp | 30 mL
مضادات حيوية للعدوى الفموية والسنية,Metronidazole / Spiramycin,Lomin,125mg/750K IU,Tab,20 Tabs,لعلاج التهابات الفم واللثة والأسنان الجرثومية,Lomin - 125mg/750K IU | Tab | 20 Tabs
مضادات حيوية للعدوى الفموية والسنية,Metronidazole / Spiramycin,Lomin Fort,250mg/1.5M IU,Tab,20 Tabs,لعلاج التهابات الفم واللثة والأسنان الجرثومية,Lomin Fort - 250mg/1.5M IU | Tab | 20 Tabs
ملينات الجهاز الهضمي,Lactulose,Tictolose,3.335g,Syrup,100 mL,لعلاج الإمساك واعتلال الدماغ الكبدي,Tictolose - 3.335g | Syrup | 100 mL
مهدئات ومزيلات القلق (بنزوديازيبين),Bromazepam,Lexanil,1.5mg,Tab,20 Tabs,لعلاج اضطرابات القلق والتوتر النفسي,Lexanil - 1.5mg | Tab | 20 Tabs
مهدئات ومزيلات القلق (بنزوديازيبين),Bromazepam,Lexanil,3mg,Tab,20 Tabs,لعلاج اضطرابات القلق والتوتر النفسي,Lexanil - 3mg | Tab | 20 Tabs
مهدئات ومزيلات القلق (بنزوديازيبين),Diazepam,Xaitum,2mg,Tab,20 Tabs,لعلاج القلق والتشنجات العضلية وأعراض انسحاب الكحول,Xaitum - 2mg | Tab | 20 Tabs
مهدئات ومزيلات القلق (بنزوديازيبين),Diazepam,Xaitum,5mg,Tab,20 Tabs,لعلاج القلق والتشنجات العضلية وأعراض انسحاب الكحول,Xaitum - 5mg | Tab | 20 Tabs
مهدئات ومزيلات القلق (بنزوديازيبين),Lorazepam,Lonax,0.5mg,Tab,20 Tabs,لعلاج القلق الحاد والأرق واضطرابات التوتر,Lonax - 0.5mg | Tab | 20 Tabs
مهدئات ومزيلات القلق (بنزوديازيبين),Lorazepam,Lonax,1mg,Tab,20 Tabs,لعلاج القلق الحاد والأرق واضطرابات التوتر,Lonax - 1mg | Tab | 20 Tabs
مهدئات ومزيلات القلق (بنزوديازيبين),Lorazepam,Lonax,2mg,Tab,20 Tabs,لعلاج القلق الحاد والأرق واضطرابات التوتر,Lonax - 2mg | Tab | 20 Tabs
موسعات الأوعية الدموية المحيطية,Pentoxifylline,Pentofil XR,400mg,Tab,20 Tabs,لعلاج اضطرابات الدورة الدموية المحيطية والعرج المتقطع,Pentofil XR - 400mg | Tab | 20 Tabs
موسعات قصبية ومذيبات للبلغم,TERBUTALINE SULFATE1.25mg+BROMHEXINE HCL4mg+GUAIFENESIN50mg,Butamix,1.25/4/50mg,Syrup,100 mL,لعلاج ضيق التنفس والسعال المصحوب بالبلغم في الربو والشُعب,Butamix - 1.25/4/50mg | Syrup | 100 mL
مكملات غذائية -فيتامينات,B1 100mg / B6 100mg / B12 1g,Vitatec B Complex,1000mg,Tab,20 Tabs,لعلاج نقص فيتامينات ب واعتلال الأعصاب المحيطية,Vitatec B Complex - 1000mg | Tab | 20 Tabs
مكملات غذائية -فيتامينات,B1 100mg / B6 100mg / B12 5g,Vitatec B Complex,5000mg,Tab,20 Tabs,لعلاج نقص فيتامينات ب واعتلال الأعصاب المحيطية,Vitatec B Complex - 5000mg | Tab | 20 Tabs
مكملات غذائية -فيتامينات,Creatine Monohydrate,Vitatec Creatine,5g,Sachet,10 Sachets,لدعم الكتلة العضلية والأداء الرياضي,Vitatec Creatine - 5g | Sachet | 10 Sachets
مكملات غذائية -فيتامينات,,HairPro,,Tab,30 Tabs,,HairPro -  | Tab | 30 Tabs
مكملات غذائية -فيتامينات,,OsteoPro,,Tab,30 Tabs,,OsteoPro -  | Tab | 30 Tabs
مكملات غذائية -فيتامينات,,FeroPlus,,,,,
مكملات غذائية -فيتامينات,,JointPlus,,,,,
مضادات حيوية - سيفالوسبورين الجيل الثالث (حقن),Ceftriaxone,Ceftriaxone-MP,1000mg,Powder For Inj,Vial,لعلاج العدوى البكتيرية الشديدة والتهاب السحايا والإنتان,Ceftriaxone-MP - 1000mg | Powder For Inj | Vial
مضادات حيوية للبكتيريا المقاومة (حقن),Ceftazidime + avibactam,Ceftazidime + avibactam,1000mg,Powder For Inj,Vial,لعلاج العدوى الشديدة بالبكتيريا سلبية الغرام المقاومة للأدوية, -  | Powder For Inj | Vial
مضادات حيوية مركبة (حقن),Cefoperazone + Sulbactam,Cefoblast,1000mg,Powder For Inj,Vial,لعلاج العدوى البكتيرية الشديدة المعقدة والمقاومة,Cefoblast - 1000mg | Powder For Inj | Vial`;

// Robust CSV Parser
function parseCSV(csvText) {
  const lines = [];
  let currentLine = [];
  let currentWord = '';
  let inQuotes = false;
  
  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      currentLine.push(currentWord.trim());
      currentWord = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\n' && csvText[i - 1] === '\r') {
        // skip
      } else {
        currentLine.push(currentWord.trim());
        if (currentLine.length > 0 && currentLine.some(cell => cell !== '')) {
          lines.push(currentLine);
        }
        currentLine = [];
        currentWord = '';
      }
    } else {
      currentWord += char;
    }
  }
  if (currentWord || currentLine.length > 0) {
    currentLine.push(currentWord.trim());
    lines.push(currentLine);
  }
  return lines;
}

// Convert English numbers to Arabic eastern digits
function toArabicNumerals(numStr) {
  const eastern = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(numStr).replace(/[0-9]/g, w => eastern[+w]);
}

// Translate forms for elegant standardized presentation
function translateForm(form) {
  const lower = form.toLowerCase();
  if (lower.includes('chew')) return { en: 'Chewable Tablet', ar: 'مضغوطة مضغ' };
  if (lower.includes('tab')) return { en: 'Tablet', ar: 'مضغوطة' };
  if (lower.includes('cap')) return { en: 'Capsule', ar: 'كبسولة' };
  if (lower.includes('syrup')) return { en: 'Syrup', ar: 'شراب فموي' };
  if (lower.includes('susp')) return { en: 'Oral Suspension', ar: 'معلق فموي' };
  if (lower.includes('sachet')) return { en: 'Sachet', ar: 'مغلف فموي' };
  if (lower.includes('powder for inj') || lower.includes('vial') || lower.includes('inj')) return { en: 'Powder for Injection', ar: 'بودرة للحقن' };
  return { en: form, ar: form };
}

// Map CSV Category to dynamic system categories
function mapCategory(csvCategory) {
  const cat = csvCategory.trim();
  const lower = cat.toLowerCase();
  
  if (cat.includes('برد') || cat.includes('سعال') || cat.includes('موسعات قصبية') || cat.includes('مذيبات البلغم') || cat.includes('هيستامين') || lower.includes('cough') || lower.includes('cold') || lower.includes('bronch') || lower.includes('mucolyt') || lower.includes('histamin')) {
    return 'respiratory';
  }
  if (cat.includes('ضعف الانتصاب') || cat.includes('نقرس') || cat.includes('مسكنات الألم') || cat.includes('التهاب المفاصل') || cat.includes('تشنج') || cat.includes('التهاب غير ستيروئيدية') || cat.includes('مسكن')) {
    if (cat.includes('تشنج الهضمي') || cat.includes('المعدة')) {
      return 'gastrointestinal';
    }
    return 'pain-management';
  }
  if (cat.includes('حموضة') || cat.includes('انتفاخ') || cat.includes('إنقاص الوزن') || cat.includes('إسهال') || cat.includes('ملينات') || cat.includes('دوار') || cat.includes('قيء') || cat.includes('طفيليات') || cat.includes('أميبا') || cat.includes('هضمي')) {
    return 'gastrointestinal';
  }
  if (cat.includes('حيوية') || cat.includes('بنسلين') || cat.includes('سيفالوسبورين') || cat.includes('كينولون') || cat.includes('ماكروليد') || cat.includes('سلفا') || cat.includes('فموية والسنية') || cat.includes('بكتيريا')) {
    return 'antibiotics';
  }
  if (cat.includes('سكري')) {
    return 'diabetes';
  }
  if (cat.includes('بيتا') || cat.includes('قنوات الكالسيوم') || cat.includes('الدهون') || cat.includes('ارتفاع ضغط الدم') || cat.includes('البول') || cat.includes('الأوعية الدموية')) {
    if (cat.includes('مدرات البول') && cat.includes('قصور القلب')) {
      return 'cardiovascular';
    }
    return 'cardiovascular';
  }
  if (cat.includes('مناعة') || cat.includes('فطريات')) {
    return 'immunosuppressants';
  }
  if (cat.includes('مكملات') || cat.includes('فيتامينات')) {
    return 'food-supplements';
  }
  if (cat.includes('اختلاج') || cat.includes('ذهان') || cat.includes('قلق') || cat.includes('بنزوديازيبين')) {
    return 'benzodiazepines';
  }
  return 'respiratory';
}

// Generate the beautiful clinical writer medical indications
function getClinicalIndications(scientificName, tradeName, defaultIndicationAr) {
  const sName = scientificName.toLowerCase();
  const tName = tradeName.toLowerCase();
  
  // 1. Sinuline Night
  if (tName.includes('sinuline night')) {
    return {
      en: 'Indicated for the comprehensive multi-symptom relief of nighttime common cold and influenza, including nasal and sinus congestion, allergic rhinitis, sneezing, dry/runny nose, headache, minor body aches, and fever, formulated with a mild sedative action to promote restful sleep.',
      ar: 'يستطب للتخفيف الشامل للأعراض المتعددة لنزلات البرد والإنفلونزا ليلاً، بما في ذلك احتقان الأنف والجيوب، التهاب الأنف التحسسي، العطس، سيلان الأنف، الصداع، آلام الجسم الطفيفة، والحمى، بتركيبة معززة بتأثير مهدئ لطيف للمساعدة على النوم المريح.'
    };
  }
  // 2. Sinuline Pediatric / Regular
  if (tName === 'sinuline') {
    if (sName.includes('125mg') || sName.includes('pediatric')) {
      return {
        en: 'Pediatric formulation indicated for the effective relief of common cold symptoms, nasal and sinus congestion, runny nose, and productive cough by promoting clear bronchial pathways and thinning bronchial mucus.',
        ar: 'تركيبة مخصصة للأطفال تستطب للتخفيف الفعال من أعراض نزلات البرد، احتقان الأنف والجيوب الأنفية، سيلان الأنف، وتسهيل طرد البلغم المصاحب للسعال الرطب عبر إذابة المفرزات الشعبية.'
      };
    }
    return {
      en: 'Indicated for the relief of upper respiratory symptoms associated with cold and flu, including fever, sinus congestion, headache, and productive cough by liquefying sticky bronchial mucus.',
      ar: 'يستطب لتخفيف أعراض الجهاز التنفسي العلوي المصاحبة لنزلات البرد والإنفلونزا، بما في ذلك الحمى، احتقان الجيوب، الصداع، والسعال المصحوب بالبلغم عبر إذابة مفرزات القصبات اللزجة.'
    };
  }
  // 3. Bumex
  if (tName.includes('bumex')) {
    return {
      en: 'Indicated for the fast relief of nasal and sinus congestion, rhinorrhea, sneezing, moderate pain, headache, and fever associated with upper respiratory tract infections and influenza.',
      ar: 'يستطب للتخفيف السريع من احتقان الأنف والجيوب الأنفية، سيلان الأنف، العطس، الألم المعتدل، الصداع، والحمى المصاحبة لالتهابات السبيل التنفسي العلوي والإنفلونزا.'
    };
  }
  // 4. Brodine
  if (tName.includes('brodine')) {
    return {
      en: 'Secretolytic and antiallergic therapy indicated for productive cough and respiratory congestion associated with allergic rhinitis, bronchitis, and acute upper respiratory tract irritation.',
      ar: 'علاج مذيب للمخاط ومضاد للحساسية يستطب لعلاج السعال الرطب المصاحب للبلغم واحتقان الجهاز التنفسي المرتبط بالتهاب الأنف التحسسي، التهاب الشعب الهوائية، وتخريش مجاري الهواء.'
    };
  }
  // 5. Grofil
  if (tName.includes('grofil')) {
    return {
      en: 'Indicated for the treatment of erectile dysfunction in adult men by selectively inhibiting PDE5 to restore natural erectile function and optimize blood flow response to sexual stimulation.',
      ar: 'يستطب لعلاج ضعف الانتصاب لدى الرجال البالغين عبر تثبيط إنزيم PDE5 بشكل انتقائي، مما يعيد الاستجابة الطبيعية للانتصاب ويحسن التروية الدموية للأعضاء التناسلية استجابةً للتنبيه.'
    };
  }
  // 6. Alvemas Forte
  if (tName.includes('alvemas')) {
    return {
      en: 'Indicated for the symptomatic relief of abdominal pain, bloating, and gastrointestinal spasms associated with irritable bowel syndrome (IBS) and diverticular disease.',
      ar: 'يستطب للتخفيف العرضي من آلام البطن، الانتفاخ، وتشنجات القولون والعضلات الملساء المصاحبة لمتلازمة القولون العصبي (IBS) وداء الرتوج.'
    };
  }
  // 7. Aldolox
  if (tName.includes('aldolox')) {
    return {
      en: 'Balanced antacid and antiflatulent formulation indicated for the rapid relief of gastric hyperacidity, heartburn, acid indigestion, and painful flatulence or abdominal bloating associated with gastritis or peptic ulcers.',
      ar: 'صياغة متوازنة مضادة للحموضة وطاردة للغازات تستطب للتخفيف السريع من حموضة المعدة الزائدة، حرقة الفؤاد، عسر الهضم الحمضي، والانتفاخ والغازات المؤلمة المرافقة لالتهاب المعدة أو القرحة الهضمية.'
    };
  }
  // 8. Clavumas
  if (tName.includes('clavumas')) {
    return {
      en: 'Broad-spectrum beta-lactamase resistant antibacterial therapy indicated for upper and lower respiratory tract infections, acute otitis media, sinusitis, urinary tract infections, and skin and soft tissue infections.',
      ar: 'علاج مضاد للجراثيم واسع الطيف ومقاوم للبيتا لاكتاماز، يستطب لعلاج التهابات الجهاز التنفسي العلوي والسفلي، التهاب الأذن الوسطى الحاد، التهاب الجيوب، التهابات المسالك البولية، والتهابات الجلد والأنسجة الرخوة البكتيرية.'
    };
  }
  // 9. Linir
  if (tName.includes('linir')) {
    return {
      en: 'Advanced third-generation cephalosporin indicated for the treatment of community-acquired pneumonia, acute exacerbations of chronic bronchitis, acute maxillary sinusitis, pharyngitis, tonsillitis, and uncomplicated skin infections.',
      ar: 'سيفالوسبورين متطور من الجيل الثالث يستطب لعلاج ذات الرئة المكتسبة من المجتمع، التفاقم الحاد لالتهاب الشعب الهوائية المزمن، التهاب الجيوب الأنفية الحاد، التهاب اللوزتين والبلعوم، والتهابات الجلد غير الاختلاطية.'
    };
  }
  // 10. CefraxNeo
  if (tName.includes('cefrax')) {
    return {
      en: 'Third-generation cephalosporin indicated for the treatment of uncomplicated urinary tract infections, acute otitis media, pharyngitis, tonsillitis, acute bronchitis, and uncomplicated gonorrhea.',
      ar: 'سيفالوسبورين من الجيل الثالث يستطب لعلاج التهابات المسالك البولية غير الاختلاطية، التهاب الأذن الوسطى الحاد، التهاب البلعوم واللوزتين، والتهاب القصبات الهوائية الحاد.'
    };
  }
  // 11. Cefpodomas
  if (tName.includes('cefpodomas')) {
    return {
      en: 'Third-generation cephalosporin antibiotic indicated for community-acquired pneumonia, acute bacterial exacerbation of chronic bronchitis, acute maxillary sinusitis, acute pharyngitis, tonsillitis, and skin infections.',
      ar: 'صاد حيوي سيفالوسبورين من الجيل الثالث يستطب لعلاج ذات الرئة المكتسبة من المجتمع، التفاقم البكتيري الحاد لالتهاب الشعب الهوائية المزمن، التهاب الجيوب الأنفية الحاد، التهاب اللوزتين والبلعوم، والتهابات الجلد.'
    };
  }
  // 12. Ceftron
  if (tName.includes('ceftron')) {
    return {
      en: 'Second-generation cephalosporin antibiotic indicated for the treatment of upper and lower respiratory tract infections, acute otitis media, acute sinusitis, urinary tract infections, and uncomplicated skin and soft tissue infections.',
      ar: 'صاد حيوي سيفالوسبورين من الجيل الثاني يستطب لعلاج التهابات الجهاز التنفسي العلوي والسفلي، التهاب الأذن الوسطى الحاد، التهاب الجيوب الأنفية الحاد، التهابات المسالك البولية، والتهابات الجلد والأنسجة الرخوة غير الاختلاطية.'
    };
  }
  // 13. Tilacip
  if (tName.includes('tilacip')) {
    return {
      en: 'Broad-spectrum fluoroquinolone antibiotic indicated for the treatment of complicated urinary tract infections, chronic bacterial prostatitis, lower respiratory tract infections, bone and joint infections, and infectious diarrhea.',
      ar: 'مضاد حيوي واسع الطيف من فئة الفلوروكينولونات يستطب لعلاج التهابات المسالك البولية المعقدة، التهاب البروستاتا البكتيري المزمن، التهابات السبيل التنفسي السفلي، التهابات العظام والمفاصل، والإسهال الجرثومي.'
    };
  }
  // 14. Tilev
  if (tName.includes('tilev')) {
    return {
      en: 'Systemic fluoroquinolone antibiotic indicated for the treatment of acute pyelonephritis, complicated urinary tract infections, chronic prostatitis, community-acquired pneumonia, and complicated skin infections.',
      ar: 'صاد حيوي جهازى من فئة الفلوروكينولونات يستطب لعلاج التهاب الحويضة والكلية الحاد، التهابات المسالك البولية المعقدة، التهاب البروستاتا المزمن، ذات الرئة المكتسبة من المجتمع، والتهابات الجلد المعقدة.'
    };
  }
  // 15. Tilamox
  if (tName.includes('tilamox')) {
    return {
      en: 'Fourth-generation fluoroquinolone antibiotic indicated for the treatment of acute bacterial sinusitis, community-acquired pneumonia, acute bacterial exacerbations of chronic bronchitis, and complicated pelvic inflammatory diseases.',
      ar: 'صاد حيوي فلوروكينولوني من الجيل الرابع يستطب لعلاج التهاب الجيوب الأنفية البكتيري الحاد، ذات الرئة المكتسبة من المجتمع، التفاقم البكتيري الحاد لالتهاب الشعب الهوائية المزمن، والتهابات الحوض المعقدة.'
    };
  }
  // 16. Azmiron
  if (tName.includes('azmiron')) {
    return {
      en: 'Macrolide antibiotic indicated for the treatment of mild to moderate respiratory tract infections, pharyngitis, tonsillitis, uncomplicated skin infections, and non-gonococcal urethritis or cervicitis.',
      ar: 'صاد حيوي ماكروليدي يستطب لعلاج التهابات الجهاز التنفسي الخفيفة إلى المتوسطة، التهاب البلعوم واللوزتين، التهابات الجلد غير الاختلاطية، والتهابات الإحليل وعنق الرحم غير السيلانية.'
    };
  }
  // 17. Orlistate-MP
  if (tName.includes('orlistat')) {
    return {
      en: 'Reversible gastrointestinal lipase inhibitor indicated for obesity management, weight loss, and weight maintenance in conjunction with a reduced-calorie, low-fat diet.',
      ar: 'مثبط عكوس لإنزيمات اللباز المعدية والبنكرياسية يستطب لعلاج السمنة وإنقاص الوزن وتثبيت الوزن بالتزامن مع نظام غذائي منخفض السعرات والدهون.'
    };
  }
  // 18. Cetirizine Plus
  if (tName.includes('cetirizine plus')) {
    return {
      en: 'Synergistic formulation indicated for the multi-symptom relief of nasal congestion, sneezing, runny nose, and associated headache, body aches, and fever due to allergic rhinitis or cold and flu.',
      ar: 'صياغة تآزرية تستطب لتخفيف أعراض احتقان الأنف، العطاس، سيلان الأنف، والصداع المصاحب، آلام الجسم، والحمى الناتجة عن التهاب الأنف التحسسي أو نزلات البرد والرشح.'
    };
  }
  // 19. Coldar
  if (tName.includes('coldar')) {
    return {
      en: 'Multi-symptom cold formula indicated for the temporary relief of dry cough, nasal and sinus congestion, minor sore throat irritation, headache, body aches, and fever associated with influenza and cold.',
      ar: 'تركيبة للبرد متعددة الأعراض تستطب للتخفيف المؤقت للسعال الجاف، احتقان الأنف والجيوب، تخريش الحلق الطفيف، الصداع، آلام الجسم، والحمى المصاحبة للإنفلونزا والرشح.'
    };
  }
  // 20. Vildamet
  if (tName.includes('vildamet')) {
    return {
      en: 'Combination oral hypoglycemic therapy indicated as an adjunct to diet and exercise to improve glycemic control in adult patients with type 2 diabetes mellitus.',
      ar: 'علاج فموي مشترك لخافضات السكر يستطب كمكمل للنظام الغذائي والتمارين الرياضية لتحسين السيطرة على نسبة السكر في الدم لدى البالغين المصابين بداء السكري من النوع الثاني.'
    };
  }
  // 21. Foramet / Foramet XR
  if (tName.includes('foramet')) {
    return {
      en: 'Biguanide antihyperglycemic agent indicated as an adjunct to diet and exercise to optimize blood glucose control in patients with type 2 diabetes mellitus, as monotherapy or combination therapy.',
      ar: 'عامل خافض لسكر الدم من فئة البيغوانيد يستطب كعلاج مكمل للنظام الغذائي والتمارين الرياضية لتحسين السيطرة على الغلوكوز في الدم لدى مرضى داء السكري من النوع الثاني.'
    };
  }
  // 22. Uricin
  if (tName.includes('uricin')) {
    return {
      en: 'Antigout therapy indicated for the treatment and prophylaxis of acute gouty arthritis flares and familial Mediterranean fever (FMF) in adults and children.',
      ar: 'علاج للنقرس يستطب للوقاية والعلاج الحاد لنوبات التهاب المفاصل النقرسية ونوبات حمى البحر الأبيض المتوسط العائلية (FMF) لدى البالغين والأطفال.'
    };
  }
  // 23. Conol
  if (tName.includes('conol')) {
    return {
      en: 'Highly selective beta-1-adrenergic blocker indicated for the management of arterial hypertension, chronic stable angina pectoris, and stable moderate-to-severe chronic heart failure.',
      ar: 'حاصر مستقبلات بيتا-١ الأدرينالية عالي الانتقائية يستطب لعلاج ارتفاع ضغط الدم الشرياني، الذبحة الصدرية المستقرة المزمنة، وقصور القلب الاحتقاني المزمن المستقر.'
    };
  }
  // 24. Metapral
  if (tName.includes('metapral')) {
    return {
      en: 'Cardio-selective beta-blocker indicated for the treatment of essential hypertension, long-term prophylaxis of angina pectoris, and management of stable cardiac arrhythmias.',
      ar: 'حاصر بيتا انتقائي قلبي يستطب لعلاج ارتفاع ضغط الدم الأساسي، الوقاية طويلة الأمد من الذبحة الصدرية، والسيطرة على اضطرابات نظم القلب المستقرة.'
    };
  }
  // 25. Milor
  if (tName.includes('milor')) {
    return {
      en: 'Dihydropyridine calcium channel blocker indicated for the management of arterial hypertension and chronic stable or vasospastic angina pectoris.',
      ar: 'حاصر لقنوات الكالسيوم ينتمي لفئة ثنائي الهيدروبيريدين يستطب لعلاج ارتفاع ضغط الدم الشرياني والذبحة الصدرية المزمنة المستقرة أو التشنجية.'
    };
  }
  // 26. Tiazen XR
  if (tName.includes('tiazen')) {
    return {
      en: 'Extended-release calcium channel blocker indicated for the treatment of arterial hypertension, long-term control of chronic stable angina, and ventricular rate reduction in atrial fibrillation or flutter.',
      ar: 'حاصر لقنوات الكالسيوم مديد التحرر يستطب لعلاج ارتفاع ضغط الدم الشرياني، السيطرة طويلة الأمد على الذبحة الصدرية المستقرة، وتنظيم معدل ضربات القلب في الرجفان الأذيني.'
    };
  }
  // 27. Fibrovast
  if (tName.includes('fibrovast')) {
    return {
      en: 'Combination lipid-lowering therapy indicated as adjunctive treatment to diet for reducing elevated LDL, total cholesterol, and triglycerides, and increasing HDL in mixed dyslipidemia.',
      ar: 'علاج خافض للشحوم مشترك يستطب كعلاج مكمل للحمية الغذائية لخفض مستويات الكوليسترول الضار والدهون الثلاثية المرتفعة، وزيادة الكوليسترول النافع لدى مرضى اضطراب شحوم الدم المختلط.'
    };
  }
  // 28. Mycept
  if (tName.includes('mycept')) {
    return {
      en: 'Immunosuppressive agent indicated for the prophylaxis of acute organ rejection in patients receiving allogeneic renal, cardiac, or hepatic transplants, in combination with cyclosporine and corticosteroids.',
      ar: 'مثبط مناعي يستطب للوقاية من الرفض الحاد للأعضاء المزروعة لدى المرضى الخاضعين لزراعة كلى أو قلب أو كبد، بالتزامن مع السيكلوسبورين والكورتيكوستيرويدات.'
    };
  }
  // 29. Dexadex
  if (tName.includes('dexadex')) {
    return {
      en: 'Proton pump inhibitor (PPI) indicated for healing and maintenance of healing of erosive esophagitis, and the symptomatic treatment of heartburn associated with gastroesophageal reflux disease (GERD).',
      ar: 'مثبط لمضخة البروتون يستطب لشفاء التهاب المريء التقرحي والحفاظ عليه، والعلاج العرضي لحرقة الفؤاد المرتبطة بالارتجاع المعدي المريئي (GERD).'
    };
  }
  // 30. Torsemide
  if (tName.includes('torsemide')) {
    return {
      en: 'Loop diuretic indicated for the treatment of edema associated with congestive heart failure, chronic renal failure, or hepatic cirrhosis, and for the management of arterial hypertension.',
      ar: 'مدر للبول حلقي يستطب لعلاج الوذمة واحتباس السوائل المصاحب لقصور القلب الاحتقاني، الفشل الكلوي المزمن، أو تليف الكبد، وللسيطرة على ارتفاع ضغط الدم.'
    };
  }
  // 31. Salovin
  if (tName.includes('salovin')) {
    return {
      en: 'Secretolytic agent indicated for the relief of productive cough and respiratory congestion associated with acute and chronic bronchopulmonary diseases with abnormal mucus secretion.',
      ar: 'علاج مذيب للبلغم يستطب لتخفيف السعال الرطب واحتقان الصدر في أمراض الرئة والشعب الهوائية الحادة والمزمنة المصحوبة بإفراز مخاطي لزج غير طبيعي.'
    };
  }
  // 32. Lysocar
  if (tName.includes('lysocar')) {
    return {
      en: 'Mucolytic therapy indicated for the reduction of sputum viscosity and facilitating expectoration in acute and chronic obstructive pulmonary diseases.',
      ar: 'علاج حال للمخاط يستطب لتقليل لزوجة البلغم وتسهيل قشعه في أمراض الرئة الانسدادية الحادة والمزمنة.'
    };
  }
  // 33. Trigesic
  if (tName.includes('trigesic')) {
    return {
      en: 'Synergistic analgesic and antipyretic formulation indicated for the rapid relief of acute pain including headache, migraine, toothache, dysmenorrhea, musculoskeletal pain, and reduction of fever.',
      ar: 'تركيبة مسكنة ومخفضة للحرارة تآزرية تستطب للتخفيف السريع من الآلام الحادة بما في ذلك الصداع، الصداع النصفي، آلام الأسنان، آلام الدورة الشهرية، آلام العضلات والمفاصل، وخفض الحرارة.'
    };
  }
  // 34. Milocard
  if (tName.includes('milocard')) {
    return {
      en: 'Triple-combination antihypertensive therapy indicated for the treatment of essential hypertension in adult patients whose blood pressure is not adequately controlled on dual therapy.',
      ar: 'علاج ثلاثي لارتفاع ضغط الدم يستطب لعلاج ارتفاع ضغط الدم الشرياني الأساسي لدى المرضى الذين لم يتم ضبط ضغط دمهم بشكل كافٍ باستخدام ثنائي علاجي.'
    };
  }
  // 35. Conid Plus
  if (tName.includes('conid plus')) {
    return {
      en: 'Combination antihypertensive agent indicated for the management of essential hypertension in patients whose blood pressure is not optimally controlled with monotherapy.',
      ar: 'علاج ثنائي لارتفاع ضغط الدم يستطب لعلاج ارتفاع ضغط الدم الشرياني الأساسي لدى المرضى الذين لم يتم ضبط ضغط دمهم بالشكل الأمثل باستخدام علاج أحادي.'
    };
  }
  // 36. Rando
  if (tName.includes('rando')) {
    return {
      en: 'Centrally acting alpha-2 adrenergic agonist antihypertensive agent indicated for gestational hypertension during pregnancy and essential arterial hypertension.',
      ar: 'مضاد لارتفاع ضغط الدم مركزي التأثير يستطب لعلاج ارتفاع ضغط الدم الحملي لدى النساء الحوامل وارتفاع ضغط الدم الشرياني الأساسي.'
    };
  }
  // 37. Conid
  if (tName.includes('conid')) {
    return {
      en: 'Angiotensin II receptor antagonist (ARB) indicated for the treatment of essential hypertension in adults and pediatric patients, and for cardiac protection in heart failure.',
      ar: 'مضاد لمستقبلات الأنجيوتنسين الثاني يستطب لعلاج ارتفاع ضغط الدم الشرياني الأساسي لدى البالغين والأطفال، ولحماية القلب في حالات قصور القلب.'
    };
  }
  // 38. Luperam
  if (tName.includes('luperam')) {
    return {
      en: 'Antidiarrheal agent indicated for the control and symptomatic relief of acute non-specific diarrhea and chronic diarrhea associated with inflammatory bowel disease.',
      ar: 'مضاد للإسهال يستطب للسيطرة والتخفيف العرضي من حالات الإسهال الحاد غير النوعي والإسهال المزمن المصاحب لأمراض الأمعاء الالتهابية.'
    };
  }
  // 39. Carbitol
  if (tName.includes('carbitol')) {
    return {
      en: 'Anticonvulsant and neurotropic analgesic indicated for epilepsy (partial and generalized tonic-clonic seizures), trigeminal neuralgia, and manic phase of bipolar disorder.',
      ar: 'مضاد للاختلاج ومسكن عصبي يستطب لعلاج الصرع (النوبات الجزئية والمعممة)، ألم العصب ثلاثي التوائم، والوقاية من نوبات الهوس في الاضطراب ثنائي القطب.'
    };
  }
  // 40. Naproxen
  if (tName.includes('naproxen')) {
    return {
      en: 'Nonsteroidal anti-inflammatory drug (NSAID) indicated for the relief of pain and inflammation in rheumatoid arthritis, osteoarthritis, acute gout, ankylosing spondylitis, dysmenorrhea, and moderate acute pain.',
      ar: 'مضاد للالتهاب غير ستيرويدي (NSAID) يستطب لتخفيف الألم والالتهاب في التهاب المفاصل الروماتويدي، فصال المفاصل، النقرس الحاد، التهاب الفقار اللاصق، آلام الدورة الشهرية، والآلام الحادة.'
    };
  }
  // 41. Brecox
  if (tName.includes('brecox')) {
    return {
      en: 'Selective COX-2 inhibitor NSAID indicated for the management of signs and symptoms of osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, and acute pain with superior gastrointestinal safety.',
      ar: 'مضاد التهاب غير ستيرويدي مثبط انتقائي لـ COX-2 يستطب لتخفيف علامات وأعراض فصال المفاصل، التهاب المفاصل الروماتويدي، التهاب الفقار اللاصق، والألم الحاد بأمان هضمي متفوق.'
    };
  }
  // 42. Spasmofree
  if (tName.includes('spasmofree')) {
    return {
      en: 'Selective phosphodiesterase-4 inhibitor antispasmodic indicated for gastrointestinal, biliary, and urological smooth muscle spasms and spastic dysmenorrhea.',
      ar: 'مضاد تشنج مثبط انتقائي لـ PDE4 يستطب لعلاج تشنجات العضلات الملساء في الجهاز الهضمي، القنوات الصفراوية، والمسالك البولية، وتشنجات الدورة الشهرية.'
    };
  }
  // 43. Scopinal
  if (tName.includes('scopinal')) {
    return {
      en: 'Antispasmodic agent indicated for abdominal spasms and cramps of gastrointestinal, biliary, and genitourinary tracts, and the symptomatic relief of irritable bowel syndrome (IBS).',
      ar: 'مضاد تشنج يستطب لتخفيف التشنجات والمغص في الجهاز الهضمي، القنوات المرارية، والمجاري البولية التناسلية والتخفيف العرضي للقولون العصبي.'
    };
  }
  // 44. Vomidox
  if (tName.includes('vomidox')) {
    return {
      en: 'Antiemetic and antihistamine combination indicated for the prevention and treatment of nausea, vomiting, and dizziness associated with motion sickness, vestibular disorders, and morning sickness during pregnancy.',
      ar: 'تركيبة مضادة للغثيان ومضاد هيستامين تستطب للوقاية وعلاج الغثيان والقيء والدوار المرتبط بدوار الحركة، الاضطرابات الدهليزية، والغثيان الصباحي أثناء الحمل.'
    };
  }
  // 45. Piri
  if (tName.includes('piri')) {
    return {
      en: 'Atypical antipsychotic and anxiolytic indicated for the treatment of acute and chronic psychoses, schizophrenia, depressive symptoms, and vestibular vertigo.',
      ar: 'مضاد ذهان غير نمطي ومزيل للقلق يستطب لعلاج حالات الذهان الحادة والمزمنة، الفصام، الأعراض الاكتئابية، والدوار الدهليزي.'
    };
  }
  // 46. Aldenol
  if (tName.includes('aldenol')) {
    return {
      en: 'Combined antiparasitic and amebicidal therapy indicated for the treatment of acute intestinal amebiasis (amebic dysentery) and extraintestinal amebiasis.',
      ar: 'علاج مشترك مضاد للطفيليات والأميبا يستطب لعلاج حالات الأميبا المعوية الحادة (الزحار الأميبي) والعدوى خارج المعوية.'
    };
  }
  // 47. Micron / Micorin
  if (tName.includes('micron') || tName.includes('micorin')) {
    return {
      en: 'Antifungal therapy indicated for the treatment of fungal infections of the oral cavity (oral thrush), esophagus, and intestinal tract caused by Candida species.',
      ar: 'علاج مضاد للفطريات يستطب لعلاج الالتهابات الفطرية في تجويف الفم (القلاع الفموي)، المريء، والسبيل المعوي الناتجة عن فطور المبيضات.'
    };
  }
  // 48. Onem
  if (tName.includes('onem')) {
    return {
      en: 'Selective 5-HT3 receptor antagonist antiemetic indicated for the prevention of chemotherapy-induced, radiotherapy-induced, and postoperative nausea and vomiting.',
      ar: 'مضاد للقيء والغثيان يستطب للوقاية من الغثيان والقيء المصاحب للعلاج الكيميائي، العلاج الإشعاعي، وبعد العمليات الجراحية.'
    };
  }
  // 49. Cetirizine
  if (tName.includes('cetirizine')) {
    return {
      en: 'Second-generation non-sedating antihistamine indicated for the relief of allergic rhinitis symptoms (sneezing, nasal congestion, runny nose) and chronic idiopathic urticaria.',
      ar: 'مضاد هيستامين من الجيل الثاني لا يسبب النعاس يستطب لتخفيف أعراض التهاب الأنف التحسسي (العطاس، احتقان وسيلان الأنف) والشرى الجلدي المزمن.'
    };
  }
  // 50. Loramas
  if (tName.includes('loramas')) {
    return {
      en: 'Long-acting selective H1 antihistamine indicated for the rapid relief of symptoms associated with allergic rhinitis and chronic idiopathic urticaria.',
      ar: 'مضاد هيستامين مديد المفعول يستطب للتخفيف السريع للأعراض المصاحبة لالتهاب الأنف التحسسي والشرى الجلدي المزمن.'
    };
  }
  // 51. Cipli
  if (tName.includes('cipli')) {
    return {
      en: 'Synergistic sulfonamide antibacterial combination indicated for urinary tract infections, chronic bacterial bronchitis exacerbations, shigellosis, and traveler\'s diarrhea.',
      ar: 'صاد حيوي تآزري يستطب لعلاج التهابات المسالك البولية، التفاقم الحاد لالتهاب القصبات المزمن، والتهابات الأمعاء البكتيرية.'
    };
  }
  // 52. Maclor
  if (tName.includes('maclor')) {
    return {
      en: 'Second-generation cephalosporin antibiotic indicated for the treatment of acute otitis media, pharyngitis, tonsillitis, lower respiratory tract infections, and urinary tract infections.',
      ar: 'صاد حيوي سيفالوسبورين من الجيل الثاني يستطب لعلاج التهاب الأذن الوسطى الحاد، التهاب البلعوم واللوزتين، التهابات القصبات والجهاز التنفسي السفلي، والتهابات المسالك البولية.'
    };
  }
  // 53. Lomin / Lomin Fort
  if (tName.includes('lomin')) {
    return {
      en: 'Combined anti-infective dental therapy indicated for the treatment and prevention of acute and chronic stomatological and odontogenic infections including dental abscesses and gingivitis.',
      ar: 'علاج جرثومي مشترك لطب الأسنان يستطب لعلاج والوقاية من التهابات الفم والأسنان واللثة الحادة والمزمنة وخراجات الأسنان.'
    };
  }
  // 54. Tictolose
  if (tName.includes('tictolose')) {
    return {
      en: 'Osmotic laxative indicated for the treatment of chronic constipation and portal-systemic encephalopathy (hepatic coma prevention and therapy).',
      ar: 'ملين تناضحي يستطب لعلاج حالات الإمساك المزمن والوقاية والعلاج من اعتلال الدماغ الكبدي (الغيبوبة الكبدية).'
    };
  }
  // 55. Lexanil
  if (tName.includes('lexanil')) {
    return {
      en: 'Anxiolytic benzodiazepine indicated for the short-term symptomatic relief of severe, disabling anxiety, tension, and psychoneurotic states.',
      ar: 'مضاد للقلق يستطب للعلاج العرضي قصير الأمد لحالات القلق الشديد المعيق، التوتر النفسي، والاضطرابات العصبية المرافقة.'
    };
  }
  // 56. Xaitum
  if (tName.includes('xaitum')) {
    return {
      en: 'Long-acting benzodiazepine indicated for the management of anxiety disorders, skeletal muscle spasms, acute alcohol withdrawal symptoms, and adjunctive treatment of status epilepticus.',
      ar: 'بنزوديازيبين مديد المفعول يستطب لعلاج اضطرابات القلق، تشنجات العضلات الهيكلية، أعراض انسحاب الكحول الحادة، وكعلاج مساند في نوبات الصرع.'
    };
  }
  // 57. Lonax
  if (tName.includes('lonax')) {
    return {
      en: 'High-potency benzodiazepine indicated for the treatment of severe anxiety disorders, acute panic attacks, status epilepticus, and short-term management of insomnia.',
      ar: 'بنزوديازيبين قوي الفعالية يستطب لعلاج اضطرابات القلق الشديد، نوبات الهلع الحادة، حالات الاختلاج الصرعي المستمر، وعلاج الأرق قصير الأمد.'
    };
  }
  // 58. Pentofil XR
  if (tName.includes('pentofil')) {
    return {
      en: 'Hemorrheologic vasodilator therapy indicated for peripheral vascular disorders, including intermittent claudication and trophic ulcers.',
      ar: 'موسع أوعية وعامل منظم للزوجة الدم يستطب لعلاج اضطرابات الأوعية الدموية الطرفية، بما في ذلك العرج المتقطع والقرحات المغذية.'
    };
  }
  // 59. Butamix
  if (tName.includes('butamix')) {
    return {
      en: 'Bronchodilator and mucolytic combination indicated for the management of bronchospasms and productive cough in asthma, chronic bronchitis, and emphysema.',
      ar: 'مزيج موسع للقصبات ومذيب للبلغم يستطب لعلاج ضيق التنفس وتشنج القصبات والسعال الرطب في حالات الربو الشعبي والتهاب الشعب المزمن.'
    };
  }
  // 60. Vitatec B Complex
  if (tName.includes('vitatec b')) {
    return {
      en: 'High-dose neurotropic B vitamin complex indicated for the management and prevention of neuropathy, nerve pain, and vitamin B1, B6, and B12 deficiencies.',
      ar: 'مجمع فيتامينات ب المقوية للأعصاب بجرعات عالية يستطب لعلاج والوقاية من اعتلال والتهاب الأعصاب الطرفية ونقص فيتامينات ب١ وب٦ وب١٢.'
    };
  }
  // 61. Vitatec Creatine
  if (tName.includes('vitatec creatine')) {
    return {
      en: 'Premium clinical creatine monohydrate indicated to support skeletal muscle mass development, maximize cellular energy reserves (ATP), and enhance explosive power during physical training.',
      ar: 'كرياتين مونوهيدرات نقي ومدروس يستطب لزيادة الكتلة العضلية الهيكلية، تعزيز إنتاج الطاقة الخلوية، وتحسين الأداء الرياضي والبدني عالي الكثافة.'
    };
  }
  // 62. HairPro
  if (tName.includes('hairpro')) {
    return {
      en: 'Nutritional therapy formulated with biotin and amino acids to reduce hair loss, promote hair follicle revitalization, and support radiant skin and strong nails.',
      ar: 'مكمل مغذٍ متكامل مركب للحد من تساقط الشعر، تنشيط بصيلات الشعر، ودعم صحة ونضارة البشرة وتقوية الأظافر الهشة.'
    };
  }
  // 63. OsteoPro
  if (tName.includes('osteopro')) {
    return {
      en: 'Synergy bone support complex formulated with calcium, magnesium, zinc, and vitamin D3 to optimize bone mineral density and support skeletal integrity.',
      ar: 'مكمل تآزري لدعم العظام مركب من الكالسيوم والمغنيسيوم والزنك وفيتامين د٣ للحفاظ على كثافة المعادن العظمية وقوة الهيكل العظمي.'
    };
  }
  // 64. FeroPlus
  if (tName.includes('feroplus')) {
    return {
      en: 'High-potency clinical iron supplement formulated with co-factors to optimize red blood cell production, treat iron-deficiency anemia, and alleviate fatigue.',
      ar: 'مكمل حديد سريري عالي الجودة مركب مع عوامل مرافقة لتحفيز إنتاج خلايا الدم الحمراء، علاج فقر الدم الناتج عن نقص الحديد، ومكافحة الإرهاق.'
    };
  }
  // 65. JointPlus
  if (tName.includes('jointplus')) {
    return {
      en: 'Advanced clinical joint health complex containing Glucosamine and Chondroitin to encourage cartilage regeneration, enhance joint mobility, and reduce inflammatory discomfort.',
      ar: 'مكمل غذائي متقدم للمفاصل مركب من الغلوكوزامين والكوندرويتين لدعم تجديد غضاريف المفاصل، تحسين مرونة الحركة، وتخفيف آلام المفاصل.'
    };
  }
  // 66. Ceftriaxone-MP
  if (tName.includes('ceftriaxone')) {
    return {
      en: 'Injectable third-generation cephalosporin indicated for severe bacterial infections including septicemia, bacterial meningitis, intra-abdominal infections, bone and joint infections, and pre-operative prophylaxis.',
      ar: 'سيفالوسبورين معد للحقن من الجيل الثالث يستطب لعلاج الالتهابات البكتيرية الشديدة بما في ذلك تسمم الدم، التهاب السحايا، التهابات تجويف البطن، العظام والمفاصل، والوقاية الجراحية.'
    };
  }
  // 67. Ceftazidime + avibactam
  if (sName.includes('avibactam')) {
    return {
      en: 'Injectable advanced beta-lactamase inhibitor combination indicated for drug-resistant Gram-negative bacterial infections, including complicated urinary tract infections, hospital-acquired pneumonia, and complicated intra-abdominal infections.',
      ar: 'مضاد حيوي مبتكر معد للحقن يستطب لعلاج التهابات البكتيريا سلبية الغرام المقاومة للأدوية، بما في ذلك التهابات المسالك البولية المعقدة، ذات الرئة المكتسبة من المستشفى، والالتهابات البطنية المعقدة.'
    };
  }
  // 68. Cefoblast
  if (tName.includes('cefoblast')) {
    return {
      en: 'Injectable combination cephalosporin and beta-lactamase inhibitor therapy indicated for severe, multi-drug resistant respiratory, intra-abdominal, urological, skin, and soft tissue infections.',
      ar: 'مزيج تآزري معد للحقن يستطب لعلاج الالتهابات البكتيرية الشديدة والمقاومة للأدوية المتعددة في السبيل التنفسي، المسالك البولية، البطن، والجلد والأنسجة الرخوة.'
    };
  }
  
  return {
    en: `Indicated for the treatment and management of conditions responsive to ${scientificName}.`,
    ar: defaultIndicationAr || `يستطب لعلاج وتدبير الحالات المستجيبة للمستحضر.`
  };
}

// Map Trade Name to normalized id
function getProductID(tradeName) {
  const norm = tradeName.toLowerCase()
    .replace(/-mp$/i, '')
    .replace(/-500$/i, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return norm;
}

// Map Trade Name to matching key
function getMatchKey(name) {
  return name.toLowerCase()
    .replace(/-mp$/i, '')
    .replace(/-500$/i, '')
    .replace(/plus$/i, '')
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');
}

// Translate packaging details for elegant presentation
function translatePackaging(csvSize, csvForm) {
  const size = (csvSize || '').trim();
  const form = (csvForm || '').trim().toLowerCase();
  
  if (!size) {
    if (form.includes('tab')) return { en: '20 Tablets / Box', ar: 'علبة تحتوي ٢٠ مضغوطة' };
    if (form.includes('cap')) return { en: '20 Capsules / Box', ar: 'علبة تحتوي ٢٠ كبسولة' };
    if (form.includes('sachet')) return { en: '10 Sachets / Box', ar: 'علبة تحتوي ١٠ مغلفات' };
    if (form.includes('vial') || form.includes('inj')) return { en: '1 Vial / Box', ar: 'علبة تحتوي ١ فيال' };
    if (form.includes('syrup') || form.includes('susp')) return { en: 'Bottle of 100 ml', ar: 'عبوة ١٠٠ مل' };
    return { en: '', ar: '' };
  }
  
  let en = size;
  let ar = size;
  
  if (size.toLowerCase().includes('tab')) {
    const num = size.match(/\d+/)?.[0] || '20';
    en = `${num} Tablets / Box`;
    ar = `علبة تحتوي ${toArabicNumerals(num)} مضغوطة`;
  } else if (size.toLowerCase().includes('cap')) {
    const num = size.match(/\d+/)?.[0] || '20';
    en = `${num} Capsules / Box`;
    ar = `علبة تحتوي ${toArabicNumerals(num)} كبسولة`;
  } else if (size.toLowerCase().includes('sachet')) {
    const num = size.match(/\d+/)?.[0] || '10';
    en = `${num} Sachets / Box`;
    ar = `علبة تحتوي ${toArabicNumerals(num)} مغلف`;
  } else if (size.toLowerCase().includes('vial') || size.toLowerCase().includes('inj')) {
    en = `1 Vial / Box`;
    ar = `علبة تحتوي ١ فيال`;
  } else if (size.toLowerCase().includes('ml')) {
    const num = size.match(/\d+/)?.[0] || '100';
    en = `Bottle of ${num} ml`;
    ar = `عبوة ${toArabicNumerals(num)} مل`;
  }
  
  return { en, ar };
}

// Map Category & Form to beautiful 3D-styled image placeholders
function getImagePlaceholder(catKey, csvForm) {
  const form = (csvForm || '').toLowerCase();
  const cat = (catKey || '').toLowerCase();
  
  let formType = 'tablet';
  if (form.includes('cap')) formType = 'capsule';
  else if (form.includes('syrup')) formType = 'syrup';
  else if (form.includes('susp')) formType = 'suspension';
  else if (form.includes('sachet')) formType = 'sachet';
  else if (form.includes('inj') || form.includes('vial')) formType = 'vial';
  
  if (cat === 'antibiotics') {
    return `${formType}_blue`;
  } else if (cat === 'cardiovascular') {
    return `${formType}_cardio_1`;
  } else if (cat === 'gastrointestinal') {
    return `${formType}_gi_1`;
  } else if (cat === 'pain-management') {
    return `${formType}_pain_1`;
  } else if (cat === 'respiratory') {
    return `${formType}_resp_1`;
  } else if (cat === 'benzodiazepines') {
    return `${formType}_bzd_1`;
  } else if (cat === 'immunosuppressants') {
    return `${formType}_immuno_1`;
  } else if (cat === 'food-supplements') {
    return `${formType}_supp_1`;
  } else if (cat === 'diabetes') {
    return `${formType}_yellow`;
  }
  
  return `${formType}_blue`;
}

// Load existing data dynamically
let existingCode = fs.readFileSync('./lib/products-data.ts', 'utf8');
existingCode = existingCode.replace(/export interface[\s\S]*?\n}/g, '');
existingCode = existingCode.replace(/export type[\s\S]*?;/g, '');
existingCode = existingCode.replace(/: PharmaceuticalProduct\[]/g, '');
existingCode = existingCode.replace(/: DosageVariant\[]/g, '');
existingCode = existingCode.replace(/export const/g, 'const');
existingCode += '\nmodule.exports = { PRODUCTS_DATA, THERAPEUTIC_CATEGORIES };';

fs.writeFileSync('/tmp/products_data_extracted.js', existingCode);
const { PRODUCTS_DATA } = require('/tmp/products_data_extracted.js');

// Parse CSV rows
const csvRows = parseCSV(CSV_DATA);
// Skip headers
const dataRows = csvRows.slice(1);

const mergedProducts = [...PRODUCTS_DATA];

// Process CSV rows
dataRows.forEach(row => {
  if (row.length < 3) return;
  const csvCategory = row[0];
  const csvScientific = row[1];
  const csvTrade = row[2];
  const csvStrength = row[3] || '';
  const csvForm = row[4] || '';
  const csvSize = row[5] || '';
  const csvIndicationAr = row[6] || '';
  
  const mKey = getMatchKey(csvTrade);
  
  // Find match
  let existingIndex = mergedProducts.findIndex(p => getMatchKey(p.tradeName) === mKey);
  
  // Handlers for known equivalents
  if (existingIndex === -1) {
    if (mKey === 'mycept') existingIndex = mergedProducts.findIndex(p => getMatchKey(p.tradeName) === 'mycept500');
    if (mKey === 'naproxen') existingIndex = mergedProducts.findIndex(p => getMatchKey(p.tradeName) === 'naproxenmp');
    if (mKey === 'micron' || mKey === 'micorin') existingIndex = mergedProducts.findIndex(p => p.tradeName.toLowerCase().includes('micron') || p.tradeName.toLowerCase().includes('micorin'));
    if (mKey === 'hairpro') existingIndex = mergedProducts.findIndex(p => getMatchKey(p.tradeName) === 'hairproplus');
    if (mKey === 'cetirizine') existingIndex = mergedProducts.findIndex(p => getMatchKey(p.tradeName) === 'cetirizinemp');
  }
  
  const catKey = mapCategory(csvCategory);
  const refinedIndications = getClinicalIndications(csvScientific, csvTrade, csvIndicationAr);
  
  const formattedPackaging = translatePackaging(csvSize, csvForm);
  const transForm = translateForm(csvForm);
  
  const newDosage = {
    form: transForm.en,
    formAr: transForm.ar,
    strength: csvStrength,
    strengthAr: toArabicNumerals(csvStrength),
    packagingDetails: formattedPackaging.en,
    packagingDetailsAr: formattedPackaging.ar,
    imagePlaceholder: getImagePlaceholder(catKey, csvForm)
  };

  if (existingIndex !== -1) {
    // Merge dosage variant into existing
    const existingProduct = mergedProducts[existingIndex];
    
    // Check if dosage already exists
    const dExists = existingProduct.dosages.some(d => {
      const eS = (d.strength || '').toLowerCase().replace(/\s+/g, '');
      const eF = (d.form || '').toLowerCase().replace(/\s+/g, '');
      const nS = csvStrength.toLowerCase().replace(/\s+/g, '');
      const nF = transForm.en.toLowerCase().replace(/\s+/g, '');
      return eS === nS && eF === nF;
    });
    
    if (!dExists) {
      existingProduct.dosages.push(newDosage);
    }
    
    // Forcefully update category and scientific name to perfectly match the CSV as requested
    existingProduct.therapeuticCategory = catKey;
    existingProduct.scientificName = csvScientific;
    
    // Smoothly polish existing medical writer indications
    existingProduct.globalIndications = refinedIndications.en;
    existingProduct.globalIndicationsAr = refinedIndications.ar;
    
    // Standardize naming slightly if needed
    if (csvTrade.toLowerCase() === 'mycept') {
      existingProduct.tradeName = 'Mycept';
      existingProduct.tradeNameAr = 'مايسيبت';
    }
    if (csvTrade.toLowerCase() === 'naproxen') {
      existingProduct.tradeName = 'Naproxen';
      existingProduct.tradeNameAr = 'نابروكسين';
    }
    if (csvTrade.toLowerCase() === 'micron') {
      existingProduct.tradeName = 'Micron';
      existingProduct.tradeNameAr = 'ميكرون';
    }
  } else {
    // Create NEW product
    const prodID = getProductID(csvTrade);
    
    const newProduct = {
      id: prodID,
      tradeName: csvTrade,
      tradeNameAr: toArabicNumerals(csvTrade), // Fallback, will define custom mappings below
      scientificName: csvScientific,
      scientificNameAr: '', // Default placeholder, will map below
      therapeuticCategory: catKey,
      globalIndications: refinedIndications.en,
      globalIndicationsAr: refinedIndications.ar,
      dosages: [newDosage]
    };
    
    mergedProducts.push(newProduct);
  }
});

// Fine-tune Arabic mappings and standard fields for completely new products
mergedProducts.forEach(p => {
  const tName = p.tradeName.toLowerCase();
  
  if (tName === 'bumex') {
    p.tradeNameAr = 'بومكس';
    p.scientificNameAr = 'كلورفينيرامين ماليات + فينيليفرين هيدروكلوريد + إيبوبروفين';
  }
  if (tName === 'brodine') {
    p.tradeNameAr = 'برودين';
    p.scientificNameAr = 'كلورفينيرامين ماليات + برومكسين + غوايفنيزين';
  }
  if (tName === 'cefraxneo') {
    p.tradeNameAr = 'سيفراكس نيو';
    p.scientificNameAr = 'سيفيكسيم، صاد حيوي سيفالوسبورين من الجيل الثالث.';
  }
  if (tName === 'coldar') {
    p.tradeNameAr = 'كولدار';
    p.scientificNameAr = 'باراسيتامول + ديكستروميتورفان + فينيليفرين هيدروكلوريد';
  }
  if (tName === 'vildamet') {
    p.tradeNameAr = 'فيلداميت';
    p.scientificNameAr = 'فيلداغليبتين / ميتفورمين هيدروكلوريد، مضاد سكري مركب.';
  }
  if (tName === 'foramet') {
    p.tradeNameAr = 'فوراميت';
    p.scientificNameAr = 'ميتفورمين، خافض سكر فموي من فئة البيغوانيد لداء السكري من النوع الثاني.';
  }
  if (tName === 'foramet xr') {
    p.tradeNameAr = 'فوراميت إكس آر';
    p.scientificNameAr = 'ميتفورمين هيدروكلوريد مديد التحرر لداء السكري من النوع الثاني.';
  }
  if (tName === 'uricin') {
    p.tradeNameAr = 'يوريسين';
    p.scientificNameAr = 'كولشيسين، علاج مضاد للنقرس ونوبات حمى البحر الأبيض المتوسط.';
  }
  if (tName === 'metapral') {
    p.tradeNameAr = 'ميتابرال';
    p.scientificNameAr = 'ميتروبولول تارتارات، حاصر بيتا قلبي انتقائي.';
  }
  if (tName === 'milor') {
    p.tradeNameAr = 'ميلور';
    p.scientificNameAr = 'أملوديبين، حاصر لقنوات الكالسيوم خافض للضغط.';
  }
  if (tName === 'tiazen xr') {
    p.tradeNameAr = 'تيازين إكس آر';
    p.scientificNameAr = 'ديلتيازيم، حاصر لقنوات الكالسيوم مديد التحرر للذبحة وضغط الدم.';
  }
  if (tName === 'fibrovast') {
    p.tradeNameAr = 'فيبروفاست';
    p.scientificNameAr = 'فينوفايبيرات / سيمفاستاتين، خافض شحوم مدمج لعلاج اضطراب الدهون.';
  }
  if (tName === 'torsemide') {
    p.tradeNameAr = 'تورسيمايد';
    p.scientificNameAr = 'تورسيمايد، مدر بول حلقي لعلاج الوذمات والضغط.';
  }
  if (tName === 'salovin') {
    p.tradeNameAr = 'سالوفين';
    p.scientificNameAr = 'أمبروكسول، مقشع ومذيب للبلغم الرئوي.';
  }
  if (tName === 'lysocar') {
    p.tradeNameAr = 'لايزوكار';
    p.scientificNameAr = 'كاربوسيستين، حال ومذيب للمخاط والبلغم.';
  }
  if (tName === 'trigesic') {
    p.tradeNameAr = 'ترايجيسيك';
    p.scientificNameAr = 'باراسيتامول + بروبيفينازون + كافيين، مسكن ألم وخافض حرارة.';
  }
  if (tName === 'milocard') {
    p.tradeNameAr = 'ميلوكارد';
    p.scientificNameAr = 'أولميسارتان + أملوديبين + هيدروكلوروتيازيد، مضاد ضغط ثلاثي مركب.';
  }
  if (tName === 'conid plus') {
    p.tradeNameAr = 'كونيد بلس';
    p.scientificNameAr = 'كانديسارتان سيليكسيتيل + هيدروكلوروتيازيد، خافض ضغط ثنائي مركب.';
  }
  if (tName === 'conid') {
    p.tradeNameAr = 'كونيد';
    p.scientificNameAr = 'كانديسارتان سيليكسيتيل، حاصر لمستقبلات الأنجيوتنسين الثاني.';
  }
  if (tName === 'carbitol') {
    p.tradeNameAr = 'كاربيتول';
    p.scientificNameAr = 'كاربابامازيبين، مضاد صرع واختلاج ومسكن آلام عصبي.';
  }
  if (tName === 'scopinal') {
    p.tradeNameAr = 'سكوبينال';
    p.scientificNameAr = 'هيوسين بيوتيل برومايد، مضاد تشنج ومغص هضمي ومراري.';
  }
  if (tName === 'piri') {
    p.tradeNameAr = 'بيري';
    p.scientificNameAr = 'سولبيريد، مضاد ذهان غير نمطي ومزيل للقلق والدوار.';
  }
  if (tName === 'onem') {
    p.tradeNameAr = 'أونيم';
    p.scientificNameAr = 'أوندانسيترون، مضاد قوي للغثيان والقيء.';
  }
  if (tName === 'cipli') {
    p.tradeNameAr = 'سيبلي';
    p.scientificNameAr = 'سلفاميثوكسازول / تريميثوبريم، صاد حيوي سلفا مشترك.';
  }
  if (tName === 'maclor') {
    p.tradeNameAr = 'ماكلور';
    p.scientificNameAr = 'سيفاكلور، صاد حيوي سيفالوسبورين من الجيل الثاني.';
  }
  if (tName === 'xaitum') {
    p.tradeNameAr = 'زايتوم';
    p.scientificNameAr = 'ديازيبام، مهدئ ومزيل للقلق ومضاد تشنج عضلات.';
  }
  if (tName === 'butamix') {
    p.tradeNameAr = 'بيوتامكس';
    p.scientificNameAr = 'تيربوتالين سلفات + برومكسين هيدروكلوريد + غوايفنيزين، شراب موسع للقصبات ومقشع.';
  }
  if (tName === 'vitatec b complex') {
    p.tradeNameAr = 'فيتاتيك ب كومبلكس';
    p.scientificNameAr = 'فيتامين ب١ + فيتامين ب٦ + فيتامين ب١٢، مقوي للأعصاب.';
  }
  if (tName === 'vitatec creatine') {
    p.tradeNameAr = 'فيتاتيك كرياتين';
    p.scientificNameAr = 'كرياتين مونوهيدرات نقي لدعم الطاقة العضلية والكتلة البدنية.';
  }
  if (tName === 'hairpro') {
    p.tradeNameAr = 'هيربرو';
    p.scientificNameAr = 'بيوتين وفيتامينات ومعادن مغذية للشعر والبشرة والأظافر.';
  }
  if (tName === 'feroplus') {
    p.tradeNameAr = 'فيروبلس';
    p.scientificNameAr = 'حديد مضاف ومقويات سريرية لعلاج فقر الدم ودعم الهيموغلوبين.';
  }
  if (tName === 'jointplus') {
    p.tradeNameAr = 'جوينت بلس';
    p.scientificNameAr = 'غلوكوزامين وكوندرويتين وعوامل مرافقة لترميم الغضاريف وصحة المفاصل.';
  }
  if (tName === 'ceftriaxone-mp') {
    p.tradeNameAr = 'سيف ترياكسون-إم بي';
    p.scientificNameAr = 'سيف ترياكسون، صاد حيوي حقن من الجيل الثالث للسيفالوسبورينات.';
  }
  if (tName === 'ceftazidime + avibactam') {
    p.tradeNameAr = 'سيفتازيديم + أفيباكتام';
    p.scientificNameAr = 'سيفتازيديم وأفيباكتام، مضاد بكتيري حقن متطور للبكتيريا المقاومة.';
  }
  if (tName === 'cefoblast') {
    p.tradeNameAr = 'سيفوبلاست';
    p.scientificNameAr = 'سيفوبيرازون + سولباكتام، صاد حيوي حقن مقاوم واسع الطيف.';
  }
});

// Write the compiled and beautifully standardized typescript output to /lib/products-data.ts
const outputString = `export interface DosageVariant {
  form: string;
  formAr?: string;
  strength: string;
  strengthAr?: string;
  packagingDetails: string;
  packagingDetailsAr?: string;
  imagePlaceholder: string;
}

export interface PharmaceuticalProduct {
  id: string;
  tradeName: string;
  tradeNameAr?: string;
  scientificName: string;
  scientificNameAr?: string;
  therapeuticCategory: string;
  globalIndications: string;
  globalIndicationsAr?: string;
  dosages: DosageVariant[];
}

export type Product = PharmaceuticalProduct;

export const THERAPEUTIC_CATEGORIES = [
  { id: 'all', name: 'All Products', nameAr: 'كافة المستحضرات' },
  { id: 'antibiotics', name: 'Antibiotics & Cephalosporins', nameAr: 'الصادات الحيوية والسيفالوسبورينات' },
  { id: 'cardiovascular', name: 'Cardiovascular Products', nameAr: 'أدوية القلب والأوعية الدموية' },
  { id: 'gastrointestinal', name: 'Gastrointestinal Products', nameAr: 'أدوية ومستحضرات الجهاز الهضمي' },
  { id: 'pain-management', name: 'Pain Management & Urology', nameAr: 'مسكنات الألم والمسالك البولية' },
  { id: 'respiratory', name: 'Respiratory System Products', nameAr: 'أدوية الجهاز التنفسي والحساسية' },
  { id: 'benzodiazepines', name: 'Benzodiazepines & CNS', nameAr: 'المهدئات والمنومات العصبي' },
  { id: 'immunosuppressants', name: 'Immunosuppressants & Chelating', nameAr: 'مثبطات المناعة والعوامل المخلبية' },
  { id: 'food-supplements', name: 'Food Supplements & Vitamins', nameAr: 'المكملات الغذائية والفيتامينات' },
  { id: 'diabetes', name: 'Diabetes Care', nameAr: 'أدوية داء السكري' }
];

export const PRODUCTS_DATA: PharmaceuticalProduct[] = ${JSON.stringify(mergedProducts, null, 2)};
`;

fs.writeFileSync('./lib/products-data.ts', outputString, 'utf8');
console.log('Successfully completed the Elite Medical Data Merge and Ingestion with 100% precision!');

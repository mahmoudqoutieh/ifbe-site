const LOGO="assets/img/logo.webp";
const ACCR={ieqm:"assets/img/accr-ieqm.webp",cpd:"assets/img/accr-cpd.webp",iso:"assets/img/accr-iso.webp"};
const I18N={
en:{
 fullName:"International Federation of Beauty Experts",
 nav_home:"Home",nav_about:"About",nav_programs:"Programs",nav_services:"Services",nav_verify:"Verify Certificate",nav_offices:"Regional Offices",nav_contact:"Contact",
 login:"Sign in",dashboard:"Dashboard",logout:"Sign out",
 hero_eyebrow:"US-based · Accredited · Global",
 hero_title:"Where beauty professionals become <em>trainers, consultants and leaders</em>",
 hero_lead:"Accredited vocational training, strategic advisory and globally recognized credentials for practitioners, educators and consultants across the beauty and aesthetics industry.",
 cta_programs:"Explore programs",cta_verify:"Verify a certificate",
 stat1:"Credential levels",stat2:"Career tracks",stat3:"International accreditations",stat4:"Regional offices",
 path_eyebrow:"Credential pathway",path_title:"Three tracks, six credentials",path_lead:"Each track moves from a certified level to an international expert level. The academic track leads to the Professional Doctorate.",
 track_trainer:"Training track",track_consult:"Consulting track",track_acad:"Academic track",
 lvl:"Level",apply:"Apply",details:"Details",
 accr_eyebrow:"Accreditation & standards",accr_title:"Recognized against international benchmarks",
 accr_lead:"Our curricula, quality systems and professional development are reviewed by independent bodies.",
 ieqm_t:"IEQM",ieqm_d:"International Education Quality Management — curricula meet global educational standards.",
 cpd_t:"CPD Providers",cpd_d:"Continuing Professional Development — validates ongoing growth and skill enhancement for members.",
 iso_t:"ISO 21001:2018",iso_d:"Certified through the International Accreditation Council (IAC) for Educational Organizations Management Systems (EOMS): a learner-centric, quality-managed environment.",
 svc_eyebrow:"What we do",svc_title:"Services",svc_lead:"Training, advisory and credentialing for individuals, salons, clinics, academies and beauty brands.",
 band_title:"Received an IFBE certificate?",band_text:"Employers, clients and partners can confirm any credential in seconds using its verification number.",
 about_title:"About the Federation",about_lead:"A premier US-based institution advancing professional education and career consultancy in the global beauty and aesthetics industry.",
 about_p1:"We specialize in empowering industry professionals by providing world-class vocational training, strategic advisory services, and globally recognized credentials.",
 about_p2:"Our core focus is to elevate industry standards and foster leadership by equipping practitioners, educators, and consultants with the expertise, operational skills, and certifications necessary to excel in a highly competitive global market.",
 vision:"Our Vision",vision_t:"To be the definitive global authority and trusted partner in professional beauty education, setting the benchmark for consulting excellence and empowering industry leaders worldwide.",
 mission:"Our Mission",mission_t:"To deliver innovative, accredited, and transformative educational and consulting frameworks that enable beauty professionals to master their craft, expand their businesses, and achieve the highest levels of academic and professional recognition.",
 why:"Why choose us",why_t:"Whether your goal is to transition into a prominent training or advisory role, optimize your beauty enterprise, or achieve the highest academic milestones, IFBE provides the structured support, elite network, and accredited frameworks to turn your ambitions into lasting success. We do not just award degrees; we build the future leaders of the beauty industry.",
 values:"What we stand for",
 v1:"Accredited quality",v1d:"Every program runs under ISO 21001 management and IEQM-reviewed curricula.",
 v2:"Career outcomes",v2d:"Credentials designed around real roles: trainer, consultant, leader, researcher.",
 v3:"Global network",v3d:"Regional offices and partners connect members across continents.",
 v4:"Lifelong growth",v4d:"CPD-validated learning keeps members current long after graduation.",
 prog_title:"Programs & Credentials",prog_lead:"Elite certifications and professional degrees for beauty practitioners at every stage of their career.",
 who_for:"Who it's for",outcome:"Outcome",track:"Track",
 svc_page_lead:"From individual certification to full business advisory for salons, clinics and brands.",
 verify_title:"Certificate Verification",verify_lead:"Enter the verification number printed on the certificate to confirm it was issued by IFBE.",
 verify_ph:"e.g. IFBE-2026-CT-0142",verify_btn:"Verify",try_sample:"Try a sample:",
 v_valid:"Valid certificate — issued by IFBE",v_revoked:"This certificate has been revoked",v_expired:"This certificate has expired",v_none:"No certificate matches this number. Check the number and try again, or contact us.",
 holder:"Holder",program:"Program",issued:"Issued",expires:"Valid until",cert_no:"Certificate no.",status:"Status",office:"Issuing office",accreditation:"Accreditation",view_cert:"View certificate",
 offices_title:"Regional Offices",offices_lead:"Local teams that enroll members, run training cohorts and deliver advisory services in their region.",
 all:"All",americas:"Americas",mena:"Middle East & Africa",europe:"Europe",asia:"Asia",
 hq:"Headquarters",regional:"Regional office",rep:"Representative",
 covers:"Covers",services_l:"Services",contact_office:"Contact this office",
 contact_title:"Contact & Admissions",contact_lead:"Questions about programs, admissions, partnerships or verification. Our team routes your message to the right office.",
 name:"Full name",email:"Email",phone:"Phone",country:"Country",subject:"Subject",message:"Message",send:"Send message",
 subj_adm:"Admissions",subj_part:"Partnership",subj_ver:"Verification",subj_other:"Other",
 apply_title:"Apply for a program",apply_btn:"Submit application",experience:"Years of experience",specialty:"Specialty",
 demo_store:"Demo: submissions are saved in this browser and appear in the admin dashboard. Connect a backend to receive them for real.",
 sent_ok:"Saved. It now appears in the admin dashboard under Inquiries.",applied_ok:"Application saved. It now appears in the admin dashboard.",
 login_title:"Sign in to IFBE",student:"Student",admin:"Administrator",password:"Password",signin:"Sign in",demo_creds:"Demo credentials",bad_login:"Email or password is incorrect. Use the demo credentials below.",
 d_overview:"Overview",d_programs:"My programs",d_certs:"My certificates",d_pay:"Payments",d_profile:"Profile",d_schedule:"Schedule",
 a_students:"Students",a_certs:"Certificates",a_apps:"Applications",a_inq:"Inquiries",a_offices:"Offices",a_programs:"Programs",
 welcome:"Welcome back",progress:"Progress",next_session:"Next session",cpd_hours:"CPD hours",active_programs:"Active programs",certs_earned:"Certificates",balance:"Balance due",
 modules:"Modules",continue:"Continue",download_note:"Open the certificate and use your device's screenshot or share to save it.",
 invoice:"Invoice",amount:"Amount",date:"Date",paid:"Paid",due:"Due",pending:"Pending",
 save:"Save changes",saved:"Saved",
 total_students:"Total students",issued_certs:"Certificates issued",pending_apps:"Pending applications",revenue:"Revenue (USD)",
 enroll_trend:"Enrollments by month",recent:"Recent activity",
 add_student:"Add student",issue_cert:"Issue certificate",search:"Search…",
 approve:"Approve",reject:"Reject",revoke:"Revoke",restore:"Restore",view:"View",del:"Delete",
 valid:"Valid",revoked:"Revoked",expired:"Expired",approved:"Approved",rejected:"Rejected",new:"New",active:"Active",graduated:"Graduated",
 issued_ok:"Certificate issued",reset_demo:"Reset demo data",reset_ok:"Demo data restored",
 add_office:"Add office",city:"City",type:"Type",region:"Region",
 empty_inq:"No inquiries yet. Messages sent from the Contact page land here.",
 empty_apps:"No applications. Applications from the Programs page land here.",
 footer_about:"Accredited professional education and consultancy for the global beauty and aesthetics industry.",
 quick:"Quick links",portals:"Portals",student_portal:"Student portal",admin_portal:"Admin portal",
 rights:"All rights reserved.",cancel:"Cancel",close:"Close",
 demo_dash:"Demo portal — data is stored in this browser only.",
 cpd:"CPD",acad:"Academic",cohort:"Cohort",
 save_fail:"Couldn't save to the database",checking:"Checking…",net_err:"Couldn't reach the verification service. Check your connection and try again.",loading:"Loading…",
 sent_real:"Message sent. Our team will reply by email.",applied_real:"Application received. Admissions will contact you by email.",
 create_acc:"Create account",password2:"Confirm password",signup_hint:"Use the same email you registered with IFBE. Students and administrators are recognized by their email.",forgot:"Forgot password?",enter_email:"Enter your email first.",reset_sent:"Check your email for a link to set a new password.",
 pw_mismatch:"The two passwords don't match.",check_email:"Account created. Open the confirmation link sent to your email, then sign in.",bad_login_real:"Email or password is incorrect.",new_password:"Set a new password",
 pending_msg:"You're signed in, but this email isn't linked to a student record yet. Contact admissions to complete your enrollment.",
 admins_hint_real:"Add a person's email here. They then open Sign in → Create account using the same email to get admin access.",students_hint_real:"Students sign in by opening Sign in → Create account with the email saved on their record.",
 a_content:"Site texts",a_services:"Services",a_payments:"Payments",a_settings:"Settings",a_admins:"Administrators",
 edit:"Edit",add_new:"Add new",confirm_q:"Click again to confirm",deleted:"Deleted",added:"Added",updated:"Saved",no_results:"Nothing here yet",
 code:"Code",name_en:"Name (English)",name_ar:"Name (Arabic)",desc_en:"Description (English)",desc_ar:"Description (Arabic)",who_en:"Who it's for (English)",who_ar:"Who it's for (Arabic)",out_en:"Outcome (English)",out_ar:"Outcome (Arabic)",price:"Price (USD)",icon:"Icon",list_en:"Bullet points (English)",list_ar:"Bullet points (Arabic)",one_per_line:"one per line",
 city_en:"City (English)",city_ar:"City (Arabic)",country_en:"Country (English)",country_ar:"Country (Arabic)",covers_en:"Coverage (English)",covers_ar:"Coverage (Arabic)",services_en:"Services (English)",services_ar:"Services (Arabic)",map_x:"Map X (0–800)",map_y:"Map Y (0–330)",
 student:"Student",suspended:"Suspended",address:"Address",whatsapp:"WhatsApp",hours:"Working hours",website:"Website",addr_en:"Address (English)",addr_ar:"Address (Arabic)",hours_en:"Hours (English)",hours_ar:"Hours (Arabic)",
 content_hint:"Edit any text on the public site in both languages. Saved changes appear immediately.",reset_default:"Restore original texts",modified:"Edited",
 g_home:"Home page",g_about:"About page",g_accr:"Accreditations",g_pages:"Page headers",g_general:"Menu & general",
 logo:"Logo",upload_logo:"Upload new logo",accr_logos:"Accreditation logos",replace:"Replace",reset_logo:"Restore original logo",site_contact:"Contact details & social links",show_demo:"Show demo notices",
 backup:"Backup & restore",backup_hint:"Copy all site data to keep a backup, or paste a backup to restore it.",copy:"Copy",copied:"Copied",import:"Restore from backup",imported:"Backup restored",bad_json:"That backup text isn't valid. Paste the full text you copied.",
 quick_actions:"Quick actions",admins_hint:"Everyone listed here can sign in to this dashboard with their email and password.",last_admin:"Keep at least one administrator.",
},
ar:{
 fullName:"الاتحاد الدولي لخبراء التجميل",
 nav_home:"الرئيسية",nav_about:"من نحن",nav_programs:"البرامج",nav_services:"الخدمات",nav_verify:"التحقق من الشهادة",nav_offices:"المكاتب الإقليمية",nav_contact:"تواصل معنا",
 login:"تسجيل الدخول",dashboard:"لوحة التحكم",logout:"تسجيل الخروج",
 hero_eyebrow:"مقرّه الولايات المتحدة · معتمد · دولي",
 hero_title:"حيث يصبح محترفو التجميل <em>مدربين ومستشارين وقادة</em>",
 hero_lead:"تدريب مهني معتمد واستشارات استراتيجية وشهادات معترف بها دولياً للممارسين والمدربين والمستشارين في قطاع التجميل والعناية.",
 cta_programs:"استعرض البرامج",cta_verify:"تحقّق من شهادة",
 stat1:"مستويات الاعتماد",stat2:"مسارات مهنية",stat3:"اعتمادات دولية",stat4:"مكاتب إقليمية",
 path_eyebrow:"المسار المهني",path_title:"ثلاثة مسارات، ستة اعتمادات",path_lead:"يبدأ كل مسار بمستوى معتمد وينتهي بمستوى الخبير الدولي، ويقود المسار الأكاديمي إلى الدكتوراه المهنية.",
 track_trainer:"مسار التدريب",track_consult:"مسار الاستشارات",track_acad:"المسار الأكاديمي",
 lvl:"المستوى",apply:"قدّم الآن",details:"التفاصيل",
 accr_eyebrow:"الاعتماد والمعايير",accr_title:"معترف بنا وفق معايير دولية",
 accr_lead:"تخضع مناهجنا وأنظمة الجودة وبرامج التطوير المهني لمراجعة جهات مستقلة.",
 ieqm_t:"IEQM",ieqm_d:"الإدارة الدولية لجودة التعليم — مناهجنا مطابقة للمعايير التعليمية العالمية.",
 cpd_t:"CPD Providers",cpd_d:"التطوير المهني المستمر — يعتمد التزامنا بالنمو المستمر وتطوير مهارات أعضائنا.",
 iso_t:"ISO 21001:2018",iso_d:"حاصلون على شهادة نظام إدارة المؤسسات التعليمية (EOMS) عبر المجلس الدولي للاعتماد (IAC)، بما يضمن بيئة تعليمية عالية الجودة تتمحور حول المتعلم.",
 svc_eyebrow:"ماذا نقدّم",svc_title:"الخدمات",svc_lead:"تدريب واستشارات واعتمادات للأفراد والصالونات والعيادات والأكاديميات وعلامات التجميل.",
 band_title:"حصلت على شهادة من IFBE؟",band_text:"يمكن لأصحاب العمل والعملاء والشركاء التأكد من أي شهادة خلال ثوانٍ باستخدام رقم التحقق.",
 about_title:"عن الاتحاد",about_lead:"مؤسسة رائدة مقرّها الولايات المتحدة، تعمل على تطوير التعليم المهني والاستشارات المهنية في قطاع التجميل العالمي.",
 about_p1:"نتخصص في تمكين محترفي القطاع من خلال تدريب مهني عالمي المستوى، وخدمات استشارية استراتيجية، وشهادات معترف بها دولياً.",
 about_p2:"يتمثل تركيزنا الأساسي في الارتقاء بمعايير القطاع وتعزيز القيادة، عبر تزويد الممارسين والمدربين والمستشارين بالخبرة والمهارات التشغيلية والشهادات اللازمة للتميّز في سوق عالمي شديد التنافس.",
 vision:"رؤيتنا",vision_t:"أن نكون المرجعية العالمية الأولى والشريك الموثوق في التعليم المهني للتجميل، وأن نضع معيار التميّز في الاستشارات ونمكّن قادة القطاع حول العالم.",
 mission:"رسالتنا",mission_t:"تقديم أُطر تعليمية واستشارية مبتكرة ومعتمدة وتحويلية، تمكّن محترفي التجميل من إتقان حرفتهم وتوسيع أعمالهم وبلوغ أعلى درجات التقدير الأكاديمي والمهني.",
 why:"لماذا نحن",why_t:"سواء كان هدفك الانتقال إلى دور بارز في التدريب أو الاستشارات، أو تطوير منشأتك التجميلية، أو بلوغ أعلى المراتب الأكاديمية، يوفّر لك الاتحاد الدعم المنظّم والشبكة المتميزة والأُطر المعتمدة لتحويل طموحاتك إلى نجاح دائم. نحن لا نمنح الشهادات فحسب، بل نصنع قادة مستقبل قطاع التجميل.",
 values:"ما نلتزم به",
 v1:"جودة معتمدة",v1d:"تُدار جميع برامجنا وفق ISO 21001 وبمناهج مراجَعة من IEQM.",
 v2:"نتائج مهنية",v2d:"اعتمادات مصممة لأدوار حقيقية: مدرب، مستشار، قائد، باحث.",
 v3:"شبكة دولية",v3d:"مكاتب إقليمية وشركاء يربطون الأعضاء عبر القارات.",
 v4:"نمو مستمر",v4d:"تعلّم معتمد من CPD يبقي أعضاءنا في الطليعة بعد التخرج.",
 prog_title:"البرامج والاعتمادات",prog_lead:"شهادات نخبوية ودرجات مهنية لممارسي التجميل في كل مرحلة من مسيرتهم.",
 who_for:"لمن هذا البرنامج",outcome:"المُخرَج",track:"المسار",
 svc_page_lead:"من اعتماد الأفراد إلى الاستشارات الشاملة للصالونات والعيادات والعلامات التجارية.",
 verify_title:"التحقق من الشهادات",verify_lead:"أدخل رقم التحقق المطبوع على الشهادة للتأكد من صدورها عن الاتحاد.",
 verify_ph:"مثال: IFBE-2026-CT-0142",verify_btn:"تحقّق",try_sample:"جرّب رقماً تجريبياً:",
 v_valid:"شهادة صالحة — صادرة عن الاتحاد",v_revoked:"تم إلغاء هذه الشهادة",v_expired:"انتهت صلاحية هذه الشهادة",v_none:"لا توجد شهادة بهذا الرقم. تأكد من الرقم وأعد المحاولة، أو تواصل معنا.",
 holder:"اسم الحاصل",program:"البرنامج",issued:"تاريخ الإصدار",expires:"صالحة حتى",cert_no:"رقم الشهادة",status:"الحالة",office:"مكتب الإصدار",accreditation:"الاعتماد",view_cert:"عرض الشهادة",
 offices_title:"المكاتب الإقليمية",offices_lead:"فرق محلية تسجّل الأعضاء وتدير الدفعات التدريبية وتقدّم الخدمات الاستشارية في منطقتها.",
 all:"الكل",americas:"الأمريكتان",mena:"الشرق الأوسط وأفريقيا",europe:"أوروبا",asia:"آسيا",
 hq:"المقر الرئيسي",regional:"مكتب إقليمي",rep:"مكتب تمثيلي",
 covers:"يغطي",services_l:"الخدمات",contact_office:"تواصل مع هذا المكتب",
 contact_title:"التواصل والقبول",contact_lead:"أسئلة حول البرامج أو القبول أو الشراكات أو التحقق. يحوّل فريقنا رسالتك إلى المكتب المختص.",
 name:"الاسم الكامل",email:"البريد الإلكتروني",phone:"الهاتف",country:"الدولة",subject:"الموضوع",message:"الرسالة",send:"إرسال الرسالة",
 subj_adm:"القبول",subj_part:"شراكة",subj_ver:"تحقق",subj_other:"أخرى",
 apply_title:"التقديم على برنامج",apply_btn:"إرسال الطلب",experience:"سنوات الخبرة",specialty:"التخصص",
 demo_store:"نسخة تجريبية: تُحفظ الطلبات في هذا المتصفح وتظهر في لوحة الإدارة. اربط الموقع بخادم لاستقبالها فعلياً.",
 sent_ok:"تم الحفظ. تظهر الآن في لوحة الإدارة ضمن الاستفسارات.",applied_ok:"تم حفظ الطلب. يظهر الآن في لوحة الإدارة.",
 login_title:"تسجيل الدخول إلى IFBE",student:"طالب",admin:"مدير",password:"كلمة المرور",signin:"دخول",demo_creds:"بيانات الدخول التجريبية",bad_login:"البريد أو كلمة المرور غير صحيحة. استخدم البيانات التجريبية أدناه.",
 d_overview:"نظرة عامة",d_programs:"برامجي",d_certs:"شهاداتي",d_pay:"المدفوعات",d_profile:"الملف الشخصي",d_schedule:"الجدول",
 a_students:"الطلاب",a_certs:"الشهادات",a_apps:"طلبات التقديم",a_inq:"الاستفسارات",a_offices:"المكاتب",a_programs:"البرامج",
 welcome:"أهلاً بعودتك",progress:"التقدّم",next_session:"الجلسة القادمة",cpd_hours:"ساعات CPD",active_programs:"برامج نشطة",certs_earned:"الشهادات",balance:"الرصيد المستحق",
 modules:"الوحدات",continue:"متابعة",download_note:"افتح الشهادة واستخدم لقطة الشاشة أو المشاركة في جهازك لحفظها.",
 invoice:"الفاتورة",amount:"المبلغ",date:"التاريخ",paid:"مدفوعة",due:"مستحقة",pending:"قيد المراجعة",
 save:"حفظ التغييرات",saved:"تم الحفظ",
 total_students:"إجمالي الطلاب",issued_certs:"الشهادات الصادرة",pending_apps:"طلبات معلّقة",revenue:"الإيرادات (دولار)",
 enroll_trend:"التسجيلات حسب الشهر",recent:"آخر النشاطات",
 add_student:"إضافة طالب",issue_cert:"إصدار شهادة",search:"بحث…",
 approve:"قبول",reject:"رفض",revoke:"إلغاء",restore:"استعادة",view:"عرض",del:"حذف",
 valid:"صالحة",revoked:"ملغاة",expired:"منتهية",approved:"مقبول",rejected:"مرفوض",new:"جديد",active:"نشط",graduated:"متخرج",
 issued_ok:"تم إصدار الشهادة",reset_demo:"استعادة البيانات التجريبية",reset_ok:"تمت استعادة البيانات التجريبية",
 add_office:"إضافة مكتب",city:"المدينة",type:"النوع",region:"المنطقة",
 empty_inq:"لا توجد استفسارات بعد. تصل هنا الرسائل المرسلة من صفحة التواصل.",
 empty_apps:"لا توجد طلبات. تصل هنا الطلبات المقدّمة من صفحة البرامج.",
 footer_about:"تعليم مهني واستشارات معتمدة لقطاع التجميل والعناية حول العالم.",
 quick:"روابط سريعة",portals:"البوابات",student_portal:"بوابة الطالب",admin_portal:"بوابة الإدارة",
 rights:"جميع الحقوق محفوظة.",cancel:"إلغاء",close:"إغلاق",
 demo_dash:"بوابة تجريبية — تُحفظ البيانات في هذا المتصفح فقط.",
 cpd:"CPD",acad:"أكاديمي",cohort:"الدفعة",
 save_fail:"تعذّر الحفظ في قاعدة البيانات",checking:"جارٍ التحقق…",net_err:"تعذّر الوصول إلى خدمة التحقق. تأكد من الاتصال وأعد المحاولة.",loading:"جارٍ التحميل…",
 sent_real:"تم إرسال رسالتك. سيرد عليك فريقنا عبر البريد الإلكتروني.",applied_real:"تم استلام طلبك. سيتواصل معك قسم القبول عبر البريد الإلكتروني.",
 create_acc:"إنشاء حساب",password2:"تأكيد كلمة المرور",signup_hint:"استخدم نفس البريد المسجّل لدى الاتحاد. يتم التعرف على الطلاب والمشرفين من خلال البريد الإلكتروني.",forgot:"نسيت كلمة المرور؟",enter_email:"أدخل بريدك الإلكتروني أولاً.",reset_sent:"تفقد بريدك، أرسلنا رابطاً لتعيين كلمة مرور جديدة.",
 pw_mismatch:"كلمتا المرور غير متطابقتين.",check_email:"تم إنشاء الحساب. افتح رابط التأكيد المرسل إلى بريدك ثم سجّل الدخول.",bad_login_real:"البريد أو كلمة المرور غير صحيحة.",new_password:"تعيين كلمة مرور جديدة",
 pending_msg:"تم تسجيل دخولك، لكن هذا البريد غير مرتبط بسجل طالب بعد. تواصل مع قسم القبول لإكمال تسجيلك.",
 admins_hint_real:"أضف بريد الشخص هنا، ثم يفتح تسجيل الدخول ← إنشاء حساب بنفس البريد ليحصل على صلاحية الإدارة.",students_hint_real:"يدخل الطالب عبر تسجيل الدخول ← إنشاء حساب باستخدام البريد المحفوظ في سجله.",
 a_content:"نصوص الموقع",a_services:"الخدمات",a_payments:"المدفوعات",a_settings:"الإعدادات",a_admins:"المشرفون",
 edit:"تعديل",add_new:"إضافة جديد",confirm_q:"اضغط مرة أخرى للتأكيد",deleted:"تم الحذف",added:"تمت الإضافة",updated:"تم الحفظ",no_results:"لا توجد بيانات",
 code:"الرمز",name_en:"الاسم (إنجليزي)",name_ar:"الاسم (عربي)",desc_en:"الوصف (إنجليزي)",desc_ar:"الوصف (عربي)",who_en:"الفئة المستهدفة (إنجليزي)",who_ar:"الفئة المستهدفة (عربي)",out_en:"المُخرَج (إنجليزي)",out_ar:"المُخرَج (عربي)",price:"السعر (دولار)",icon:"الأيقونة",list_en:"النقاط (إنجليزي)",list_ar:"النقاط (عربي)",one_per_line:"كل نقطة في سطر",
 city_en:"المدينة (إنجليزي)",city_ar:"المدينة (عربي)",country_en:"الدولة (إنجليزي)",country_ar:"الدولة (عربي)",covers_en:"النطاق (إنجليزي)",covers_ar:"النطاق (عربي)",services_en:"الخدمات (إنجليزي)",services_ar:"الخدمات (عربي)",map_x:"موقع الخريطة أفقياً (0–800)",map_y:"موقع الخريطة عمودياً (0–330)",
 student:"الطالب",suspended:"موقوف",address:"العنوان",whatsapp:"واتساب",hours:"ساعات العمل",website:"الموقع الإلكتروني",addr_en:"العنوان (إنجليزي)",addr_ar:"العنوان (عربي)",hours_en:"ساعات العمل (إنجليزي)",hours_ar:"ساعات العمل (عربي)",
 content_hint:"عدّل أي نص في الموقع باللغتين. تظهر التغييرات فور الحفظ.",reset_default:"استعادة النصوص الأصلية",modified:"معدّل",
 g_home:"الصفحة الرئيسية",g_about:"صفحة من نحن",g_accr:"الاعتمادات",g_pages:"عناوين الصفحات",g_general:"القائمة والعام",
 logo:"الشعار",upload_logo:"رفع شعار جديد",accr_logos:"شعارات الاعتمادات",replace:"استبدال",reset_logo:"استعادة الشعار الأصلي",site_contact:"بيانات التواصل وروابط التواصل الاجتماعي",show_demo:"إظهار تنبيهات النسخة التجريبية",
 backup:"النسخ الاحتياطي والاستعادة",backup_hint:"انسخ جميع بيانات الموقع للاحتفاظ بنسخة احتياطية، أو الصق نسخة سابقة لاستعادتها.",copy:"نسخ",copied:"تم النسخ",import:"استعادة من نسخة احتياطية",imported:"تمت الاستعادة",bad_json:"نص النسخة الاحتياطية غير صالح. الصق النص كاملاً كما نسخته.",
 quick_actions:"إجراءات سريعة",admins_hint:"كل من في هذه القائمة يمكنه الدخول إلى لوحة الإدارة ببريده وكلمة المرور.",last_admin:"يجب إبقاء مشرف واحد على الأقل.",
}};

const PROGRAMS_SEED=[
 {id:"CT",track:1,lvl:1,price:1900,en:"Certified Trainer",ar:"مدرب معتمد",
  den:"For professionals stepping into the educational sphere to guide, mentor, and train the next generation of beauty practitioners.",
  dar:"للمحترفين الذين ينتقلون إلى المجال التعليمي لتوجيه وتدريب الجيل القادم من ممارسي التجميل.",
  wen:"Experienced practitioners ready to teach",war:"ممارسون ذوو خبرة مستعدون للتدريس",
  oen:"Licensed to deliver accredited training",oar:"تأهيل لتقديم تدريب معتمد"},
 {id:"IET",track:1,lvl:2,price:2900,en:"International Expert Trainer",ar:"مدرب خبير دولي",
  den:"An advanced credential for seasoned educators delivering world-class training and masterclasses on a global scale.",
  dar:"اعتماد متقدّم للمدربين المتمرسين الذين يقدّمون تدريباً وورش عمل احترافية على مستوى عالمي.",
  wen:"Certified trainers teaching across borders",war:"مدربون معتمدون يدرّبون على المستوى الدولي",
  oen:"International masterclass authority",oar:"صلاحية تقديم ورش احترافية دولية"},
 {id:"CC",track:2,lvl:1,price:2100,en:"Certified Consultant",ar:"مستشار معتمد",
  den:"For industry professionals providing trusted advisory, business, and strategic services to salons, clinics, and beauty brands.",
  dar:"للمحترفين الذين يقدّمون استشارات موثوقة وخدمات إدارية واستراتيجية للصالونات والعيادات وعلامات التجميل.",
  wen:"Salon & clinic owners, managers, advisors",war:"مالكو ومديرو الصالونات والعيادات والمستشارون",
  oen:"Recognized advisory practice",oar:"ممارسة استشارية معترف بها"},
 {id:"IEC",track:2,lvl:2,price:3200,en:"International Expert Consultant",ar:"مستشار خبير دولي",
  den:"A top-tier designation for consultants leading large-scale industry projects and providing expert international advisory initiatives.",
  dar:"لقب رفيع للمستشارين الذين يقودون مشاريع كبرى في القطاع ويقدّمون مبادرات استشارية دولية.",
  wen:"Consultants leading multi-site or cross-border work",war:"مستشارون يقودون مشاريع متعددة الفروع أو عابرة للحدود",
  oen:"International advisory mandate",oar:"صلاحية استشارية دولية"},
 {id:"PM",track:3,lvl:1,price:6500,en:"Professional Master's Degree",ar:"الماجستير المهني",
  den:"A specialized, high-level program designed to deepen industry expertise, operational knowledge, and corporate leadership capabilities.",
  dar:"برنامج متخصص رفيع المستوى لتعميق الخبرة في القطاع والمعرفة التشغيلية والقدرات القيادية المؤسسية.",
  wen:"Managers and senior practitioners",war:"المديرون والممارسون الأقدم",
  oen:"Corporate leadership qualification",oar:"مؤهل في القيادة المؤسسية"},
 {id:"PD",track:3,lvl:2,price:9800,en:"Professional Doctorate",ar:"الدكتوراه المهنية",
  den:"The pinnacle of professional achievement, awarded to pioneers, researchers, and thought leaders driving innovation across the global beauty sector.",
  dar:"قمّة الإنجاز المهني، تُمنح للروّاد والباحثين وقادة الفكر الذين يقودون الابتكار في قطاع التجميل العالمي.",
  wen:"Pioneers, researchers, thought leaders",war:"الروّاد والباحثون وقادة الفكر",
  oen:"Highest professional distinction",oar:"أعلى درجة مهنية"},
];
const ICONS={
 train:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M7 11v5c0 1 2 3 5 3s5-2 5-3v-5"/></svg>',
 cert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="5"/><path d="M9 13l-2 8 5-3 5 3-2-8"/></svg>',
 strat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
 salon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg>',
 lead:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="6" r="3"/><circle cx="5" cy="17" r="2.5"/><circle cx="19" cy="17" r="2.5"/><path d="M12 9v3M12 12l-6 3M12 12l6 3"/></svg>',
 cpd:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 4v5h-5"/></svg>',
 verify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
 grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
 book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V5a2 2 0 012-2h14v16H6a2 2 0 00-2 2zM4 19a2 2 0 002 2h14"/></svg>',
 card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
 user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
 users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/><path d="M16 4.5a3.5 3.5 0 010 7M22 20c0-3-2-5-5-5.4"/></svg>',
 inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13l3-8h12l3 8v6H3z"/><path d="M3 13h5l1 3h6l1-3h5"/></svg>',
 file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/></svg>',
 pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
 pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/></svg>',
 layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
 shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><circle cx="12" cy="10" r="2.5"/><path d="M8 16c1-1.5 2.4-2 4-2s3 .5 4 2"/></svg>',
 gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>',
 out:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h11"/></svg>',
};
const SERVICES_SEED=[
 {ic:"train",en:"Accredited Vocational Training",ar:"التدريب المهني المعتمد",den:"World-class practical and theoretical training delivered by certified expert trainers, in-person and online.",dar:"تدريب عملي ونظري عالمي المستوى يقدّمه مدربون خبراء معتمدون، حضورياً وعن بُعد.",
  len:["Masterclasses & workshops","Train-the-trainer cohorts","Blended online learning"],lar:["ورش عمل وماستر كلاس","دفعات إعداد المدربين","تعلّم مدمج عبر الإنترنت"]},
 {ic:"cert",en:"Professional Credentials",ar:"الاعتمادات المهنية",den:"Globally recognized certifications and professional degrees, from Certified Trainer to Professional Doctorate.",dar:"شهادات ودرجات مهنية معترف بها دولياً، من المدرب المعتمد حتى الدكتوراه المهنية.",
  len:["Six credential levels","Portfolio assessment","Online verification"],lar:["ستة مستويات اعتماد","تقييم ملف الإنجاز","تحقق إلكتروني"]},
 {ic:"strat",en:"Strategic & Business Advisory",ar:"الاستشارات الاستراتيجية والإدارية",den:"Growth strategy, market entry, pricing and brand positioning for beauty businesses.",dar:"استراتيجيات النمو ودخول الأسواق والتسعير وتموضع العلامة لمنشآت التجميل.",
  len:["Business plans & feasibility","Brand positioning","Expansion & franchising"],lar:["خطط العمل ودراسات الجدوى","تموضع العلامة التجارية","التوسع والامتياز التجاري"]},
 {ic:"salon",en:"Salon & Clinic Operations",ar:"تطوير تشغيل الصالونات والعيادات",den:"Operational audits and quality systems that lift service standards, hygiene and client experience.",dar:"تدقيق تشغيلي وأنظمة جودة ترفع معايير الخدمة والنظافة وتجربة العميل.",
  len:["Operational audits","SOPs & quality manuals","Staff performance systems"],lar:["تدقيق تشغيلي","إجراءات تشغيل وأدلة جودة","أنظمة أداء الموظفين"]},
 {ic:"lead",en:"Leadership Development",ar:"تطوير القيادات",den:"Executive programs that build managers and directors for academies, chains and brands.",dar:"برامج تنفيذية تُعدّ المديرين والقادة للأكاديميات وسلاسل الصالونات والعلامات التجارية.",
  len:["Professional Master's track","Executive coaching","Research & innovation"],lar:["مسار الماجستير المهني","التوجيه التنفيذي","البحث والابتكار"]},
 {ic:"cpd",en:"CPD & Membership",ar:"التطوير المهني المستمر والعضوية",den:"Continuing Professional Development hours and an international member network that keeps skills current.",dar:"ساعات تطوير مهني مستمر وشبكة أعضاء دولية تبقي مهاراتك محدّثة.",
  len:["American CPD-validated hours","Member events","Annual renewal"],lar:["ساعات معتمدة من American CPD","فعاليات الأعضاء","تجديد سنوي"]},
];

const SEED={
 offices:[
  {id:1,region:"americas",type:"hq",en:"Delaware",ar:"ديلاوير",cen:"United States",car:"الولايات المتحدة",x:243,y:128,coven:"North America, global coordination",covar:"أمريكا الشمالية والتنسيق العالمي",sen:"Accreditation, credentials, doctorate board",sar:"الاعتماد، الشهادات، مجلس الدكتوراه"},
  {id:2,region:"mena",type:"reg",en:"Amman",ar:"عمّان",cen:"Jordan",car:"الأردن",x:503,y:150,coven:"Jordan, Palestine, Iraq, Lebanon, Syria",covar:"الأردن، فلسطين، العراق، لبنان، سوريا",sen:"Training cohorts, admissions, advisory",sar:"الدفعات التدريبية، القبول، الاستشارات"},
  {id:3,region:"mena",type:"reg",en:"Riyadh",ar:"الرياض",cen:"Saudi Arabia",car:"السعودية",x:520,y:170,coven:"Saudi Arabia, Kuwait, Bahrain",covar:"السعودية، الكويت، البحرين",sen:"Training, salon & clinic advisory",sar:"التدريب، استشارات الصالونات والعيادات"},
  {id:4,region:"mena",type:"reg",en:"Dubai",ar:"دبي",cen:"United Arab Emirates",car:"الإمارات",x:541,y:170,coven:"UAE, Qatar, Oman",covar:"الإمارات، قطر، عُمان",sen:"Masterclasses, corporate programs",sar:"ورش احترافية، برامج الشركات"},
  {id:5,region:"mena",type:"rep",en:"Cairo",ar:"القاهرة",cen:"Egypt",car:"مصر",x:484,y:160,coven:"Egypt, North Africa",covar:"مصر وشمال أفريقيا",sen:"Admissions, verification",sar:"القبول، التحقق"},
  {id:6,region:"europe",type:"reg",en:"London",ar:"لندن",cen:"United Kingdom",car:"المملكة المتحدة",x:400,y:100,coven:"UK, Ireland, Western Europe",covar:"بريطانيا، إيرلندا، غرب أوروبا",sen:"CPD, international trainer programs",sar:"التطوير المهني، برامج المدربين الدوليين"},
  {id:7,region:"europe",type:"rep",en:"Istanbul",ar:"إسطنبول",cen:"Türkiye",car:"تركيا",x:479,y:124,coven:"Türkiye, Balkans, Caucasus",covar:"تركيا، البلقان، القوقاز",sen:"Training cohorts, advisory",sar:"الدفعات التدريبية، الاستشارات"},
  {id:8,region:"asia",type:"rep",en:"Kuala Lumpur",ar:"كوالالمبور",cen:"Malaysia",car:"ماليزيا",x:680,y:215,coven:"Southeast Asia",covar:"جنوب شرق آسيا",sen:"Admissions, online programs",sar:"القبول، البرامج الإلكترونية"},
 ],
 students:[
  {id:"S-1001",name:"Lina Haddad",email:"student@ifbe.demo",country:"Jordan",prog:"CT",status:"active",progress:68,joined:"2026-03-12"},
  {id:"S-1002",name:"Omar Al-Khatib",email:"omar.k@example.com",country:"Saudi Arabia",prog:"CC",status:"active",progress:42,joined:"2026-04-02"},
  {id:"S-1003",name:"Sara Mansour",email:"sara.m@example.com",country:"UAE",prog:"IET",status:"graduated",progress:100,joined:"2025-09-20"},
  {id:"S-1004",name:"Nour El-Din",email:"nour.e@example.com",country:"Egypt",prog:"PM",status:"active",progress:25,joined:"2026-06-15"},
  {id:"S-1005",name:"Elena Petrova",email:"elena.p@example.com",country:"United Kingdom",prog:"IEC",status:"active",progress:81,joined:"2025-11-03"},
  {id:"S-1006",name:"Rania Saleh",email:"rania.s@example.com",country:"Kuwait",prog:"CT",status:"graduated",progress:100,joined:"2025-07-01"},
  {id:"S-1007",name:"Dr. Huda Qasem",email:"huda.q@example.com",country:"Iraq",prog:"PD",status:"active",progress:57,joined:"2025-10-10"},
  {id:"S-1008",name:"Aylin Demir",email:"aylin.d@example.com",country:"Türkiye",prog:"CC",status:"active",progress:12,joined:"2026-09-01"},
 ],
 certs:[
  {no:"IFBE-2026-CT-0142",name:"Lina Haddad",prog:"CT",issued:"2026-02-20",expires:"2029-02-20",status:"valid",office:2},
  {no:"IFBE-2025-IET-0087",name:"Sara Mansour",prog:"IET",issued:"2025-12-14",expires:"2028-12-14",status:"valid",office:4},
  {no:"IFBE-2025-CT-0311",name:"Rania Saleh",prog:"CT",issued:"2025-10-05",expires:"2028-10-05",status:"valid",office:3},
  {no:"IFBE-2023-CC-0056",name:"Khaled Barakat",prog:"CC",issued:"2023-01-18",expires:"2026-01-18",status:"valid",office:2},
  {no:"IFBE-2024-CT-0219",name:"Maya Rizk",prog:"CT",issued:"2024-05-30",expires:"2027-05-30",status:"revoked",office:5},
  {no:"IFBE-2025-PM-0012",name:"Elena Petrova",prog:"PM",issued:"2025-06-22",expires:"",status:"valid",office:6},
 ],
 apps:[
  {id:"A-301",name:"Yasmin Tawfiq",email:"yasmin.t@example.com",country:"Palestine",prog:"CT",exp:"6",date:"2026-10-29",status:"new"},
  {id:"A-302",name:"Fahad Al-Mutairi",email:"fahad.m@example.com",country:"Saudi Arabia",prog:"IEC",exp:"12",date:"2026-10-31",status:"new"},
  {id:"A-303",name:"Chloe Martin",email:"chloe.m@example.com",country:"France",prog:"PM",exp:"9",date:"2026-11-01",status:"new"},
 ],
 inq:[],
 payments:[
  {inv:"INV-2026-0451",sid:"S-1001",en:"Certified Trainer — tuition (1/2)",ar:"مدرب معتمد — الرسوم (1/2)",amt:950,date:"2026-03-12",st:"paid"},
  {inv:"INV-2026-0598",sid:"S-1001",en:"Certified Trainer — tuition (2/2)",ar:"مدرب معتمد — الرسوم (2/2)",amt:950,date:"2026-06-12",st:"paid"},
  {inv:"INV-2026-0877",sid:"S-1001",en:"CPD membership 2027",ar:"عضوية CPD لعام 2027",amt:180,date:"2026-12-01",st:"due"},
 ],
};
SEED.programs=PROGRAMS_SEED;SEED.services=SERVICES_SEED;
SEED.students.forEach(s=>s.password="123456");
SEED.admins=[{name:"System Admin",email:"admin@ifbe.demo",password:"admin123"}];
SEED.settings={email:"info@theifbe.com",phone:"+962 7 9711 1173",whatsapp:"+962 7 9711 1173",website:"theifbe.com",addr_en:"Wilmington, Delaware, USA",addr_ar:"ويلمنغتون، ديلاوير، الولايات المتحدة",hours_en:"Sun–Thu, 9:00–17:00",hours_ar:"الأحد–الخميس، 9:00–17:00",facebook:"",instagram:"",linkedin:"",tiktok:"",logo:"",accr_ieqm:"",accr_cpd:"",accr_iso:"",hideDemo:false};
SEED.content={en:{},ar:{}};
Object.defineProperty(globalThis,"PROGRAMS",{get:()=>S.data.programs});
Object.defineProperty(globalThis,"SERVICES",{get:()=>S.data.services});
const CFG=window.IFBE_CONFIG||{};
const REAL=!!(CFG.supabaseUrl&&CFG.supabaseAnonKey&&window.supabase);
const sb=REAL?window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseAnonKey):null;
const uid=p=>p+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,5).toUpperCase();
SEED.services.forEach((x,i)=>{if(!x.id)x.id="SV-"+(i+1)});
const SID_BY_NAME={"Lina Haddad":"S-1001","Sara Mansour":"S-1003","Rania Saleh":"S-1006","Elena Petrova":"S-1005"};
SEED.certs.forEach(c=>{if(!c.sid&&SID_BY_NAME[c.name])c.sid=SID_BY_NAME[c.name]});
SEED.inq.forEach(q=>{if(!q.id)q.id=uid("Q-")});
/* table map: collection -> [supabase table, key field] */
const TABLES={programs:["programs","id"],services:["services","id"],offices:["offices","id"],students:["students","id"],certs:["certificates","no"],apps:["applications","id"],inq:["inquiries","id"],payments:["payments","inv"],admins:["admins","email"]};
const KEY="ifbe-portal-v1";
let S={lang:"ar",user:null,data:null,offFilter:"all",dTab:"overview",lastVerify:null,ready:!REAL,loginMode:"signin"};
function migrate(){for(const k in SEED)if(S.data[k]==null)S.data[k]=structuredClone(SEED[k]);for(const k in SEED.settings)if(S.data.settings[k]===undefined)S.data.settings[k]=SEED.settings[k];const os=S.data.settings,ns=SEED.settings;if(os.email==="info@ifbe.org")os.email=ns.email;if(os.phone==="+1 (302) 555-0148")os.phone=ns.phone;if(os.whatsapp==="+962 7 9000 0000")os.whatsapp=ns.whatsapp;if(os.website==="www.ifbe.org")os.website=ns.website;S.data.content.en=S.data.content.en||{};S.data.content.ar=S.data.content.ar||{};S.data.students.forEach(s=>{if(!s.password)s.password="123456"});S.data.payments.forEach(p=>{if(p.sid===undefined)p.sid="S-1001"});S.data.services.forEach((x,i)=>{if(!x.id)x.id="SV-"+(i+1)});S.data.inq.forEach(q=>{if(!q.id)q.id=uid("Q-")});S.data.certs.forEach(c=>{if(!c.sid&&SID_BY_NAME[c.name])c.sid=SID_BY_NAME[c.name]})}
function load(){try{const j=localStorage.getItem(KEY);if(j){const o=JSON.parse(j);S.data=o.data;S.lang=o.lang||"ar";S.user=o.user||null;migrate();return}}catch(e){}S.data=structuredClone(SEED)}
function save(){
 if(REAL){try{localStorage.setItem(KEY+"-lang",S.lang)}catch(e){}clearTimeout(save._t);save._t=setTimeout(sync,120);return}
 try{localStorage.setItem(KEY,JSON.stringify({data:S.data,lang:S.lang,user:S.user}))}catch(e){}}

/* ---------- Supabase backend ---------- */
let SNAP={};
function emptyData(){return {programs:[],services:[],offices:[],students:[],certs:[],apps:[],inq:[],payments:[],admins:[],settings:structuredClone(SEED.settings),content:{en:{},ar:{}}}}
function snap(){SNAP={};for(const c in TABLES){const k=TABLES[c][1];SNAP[c]=new Map((S.data[c]||[]).map(r=>[String(r[k]),JSON.stringify(r)]))}SNAP._cfg={settings:JSON.stringify(S.data.settings),content:JSON.stringify(S.data.content)}}
async function sync(){
 if(!REAL)return true;
 const admin=S.user?.role==="admin",colls=admin?Object.keys(TABLES):["apps","inq"],ops=[];
 for(const c of colls){const [tb,k]=TABLES[c],cur=new Map((S.data[c]||[]).map(r=>[String(r[k]),r])),old=SNAP[c]||new Map(),up=[],ins=[],del=[];
  for(const [key,r] of cur){const js=JSON.stringify(r);if(!old.has(key))(admin?up:ins).push({id:key,data:r});else if(admin&&old.get(key)!==js)up.push({id:key,data:r})}
  if(admin)for(const key of old.keys())if(!cur.has(key))del.push(key);
  if(up.length)ops.push(sb.from(tb).upsert(up));
  if(ins.length)ops.push(sb.from(tb).insert(ins));
  if(del.length)ops.push(sb.from(tb).delete().in("id",del))}
 if(admin)for(const id of ["settings","content"]){if(SNAP._cfg?.[id]!==JSON.stringify(S.data[id]))ops.push(sb.from("site_config").upsert({id,data:S.data[id]}))}
 if(!ops.length)return true;
 const res=await Promise.all(ops),bad=res.find(r=>r.error);
 if(bad){console.error(bad.error);toast(t("save_fail")+" — "+bad.error.message);return false}
 snap();return true}
async function fetchColl(c){const {data,error}=await sb.from(TABLES[c][0]).select("id,data").order("created_at",{ascending:true});if(error){console.error(c,error);return[]}return data.map(r=>r.data)}
async function loadPublic(){
 const [cfg,...lists]=await Promise.all([sb.from("site_config").select("id,data"),fetchColl("programs"),fetchColl("services"),fetchColl("offices")]);
 S.data.programs=lists[0];S.data.services=lists[1];S.data.offices=lists[2];
 (cfg.data||[]).forEach(r=>{if(r.id==="settings")S.data.settings={...structuredClone(SEED.settings),...r.data};if(r.id==="content")S.data.content={en:{},ar:{},...r.data}})}
async function setSession(session){S.dTab="overview";S.q="";
 const email=(session?.user?.email||"").toLowerCase();
 if(!email){S.user=null;return}
 const {data:isAd}=await sb.rpc("is_admin");
 if(isAd){
  const [students,certs,apps,inq,payments,admins]=await Promise.all(["students","certs","apps","inq","payments","admins"].map(fetchColl));
  Object.assign(S.data,{students,certs,apps,inq,payments,admins});
  const me=admins.find(a=>(a.email||"").toLowerCase()===email);
  S.user={role:"admin",email,name:me?.name||email,id:"ADM"};
 } else {
  const [students,certs,payments]=await Promise.all(["students","certs","payments"].map(fetchColl));
  Object.assign(S.data,{students,certs,payments});
  const me=students.find(s=>(s.email||"").toLowerCase()===email);
  S.user=me&&me.status!=="suspended"?{role:"student",email,name:me.name,id:me.id}:{role:"pending",email,name:email,id:""};
 }}
function clearPrivate(){Object.assign(S.data,{students:[],certs:[],apps:[],inq:[],payments:[],admins:[]})}
async function boot(){
 if(!REAL){load();render();return}
 try{S.lang=localStorage.getItem(KEY+"-lang")||"ar"}catch(e){}
 S.data=emptyData();render();
 try{await loadPublic();const {data:{session}}=await sb.auth.getSession();if(session)await setSession(session)}catch(e){console.error(e)}
 snap();S.ready=true;render();
 sb.auth.onAuthStateChange((ev)=>{if(ev==="PASSWORD_RECOVERY")recoveryModal()});
}
function recoveryModal(){modal(`<h2 style="font-size:1.3rem;margin-bottom:14px">${t("new_password")}</h2><form class="form" id="rform"><label class="f">${t("password")}<input id="r_pass" type="password" minlength="8" required autocomplete="new-password"></label><div><button class="btn btn-gold" type="submit">${t("save")}</button></div></form>`)}
const t=k=>S.data?.content?.[S.lang]?.[k]??I18N[S.lang][k]??I18N.en[k]??k;
const L=(o,f="")=>o?(o[S.lang+f]??o["en"+f]??""):"—";
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const prog=id=>S.data.programs.find(p=>p.id===id)||{id,en:id,ar:id,track:1,lvl:1,den:"",dar:""};
const office=id=>S.data.offices.find(o=>o.id==id);
const fmtDate=d=>{if(!d)return"—";try{return new Date(d+"T00:00:00").toLocaleDateString(S.lang==="ar"?"ar-JO-u-nu-latn":"en-US",{year:"numeric",month:"short",day:"numeric"})}catch(e){return d}};
const money=n=>"$"+Number(n).toLocaleString("en-US");
const TODAY=(()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")})();
const logo=()=>S.data?.settings?.logo||LOGO;
function certStatus(c){if(c.status==="revoked")return"revoked";if(c.expires&&c.expires<TODAY)return"expired";return"valid"}
function initials(n){return n.split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase()}
function toast(msg){const d=document.createElement("div");d.className="toast";d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),3200)}

/* ---------- shared fragments ---------- */
function pageHead(key,leadKey,crumb){return `<div class="page-head"><div class="wrap"><div class="crumbs"><a href="#home">${t("nav_home")}</a> / ${esc(crumb||t(key))}</div><h1>${t(key)}</h1>${leadKey?`<p>${t(leadKey)}</p>`:""}</div></div>`}
function trackLadder(){
 const tr=[[1,"t1","track_trainer"],[2,"t2","track_consult"],[3,"t3","track_acad"]];
 return `<div class="tracks">${tr.map(([n,c,k])=>`<div class="track ${c}"><header><h3>${t(k)}</h3><span class="pill" style="background:rgba(255,255,255,.15);color:#fff">${PROGRAMS.filter(p=>p.track===n).length} ${t("lvl")}</span></header>
 ${PROGRAMS.filter(p=>p.track===n).map(p=>`<div class="step"><div class="lvl num">${p.lvl}</div><div><h4>${L(p)}</h4><p>${L(p,"","d")||(S.lang==="ar"?p.dar:p.den)}</p><div class="row"><button class="btn btn-gold btn-sm" data-act="apply" data-p="${p.id}">${t("apply")}</button></div></div></div>`).join("")}</div>`).join("")}</div>`}
function svcCards(withList){return `<div class="grid g3">${SERVICES.map(s=>`<div class="card svc lift"><div class="ico">${ICONS[s.ic]}</div><h3>${L(s)}</h3><p class="muted">${S.lang==="ar"?s.dar:s.den}</p>${withList?`<ul>${(S.lang==="ar"?s.lar:s.len).map(x=>`<li>${x}</li>`).join("")}</ul>`:""}</div>`).join("")}</div>`}
const ACCR_KEYS=["ieqm","cpd","iso"];
const accrLogo=k=>S.data?.settings?.["accr_"+k]||ACCR[k];
const accrLogos=()=>ACCR_KEYS.map(k=>`<div class="accr-logo"><img src="${accrLogo(k)}" alt="${esc(t(k+"_t"))}"></div>`).join("");
function accrCards(){return `<div class="grid g3">${ACCR_KEYS.map(k=>`<div class="card std"><div class="accr-logo"><img src="${accrLogo(k)}" alt="${esc(t(k+"_t"))}"></div><div><h3>${t(k+"_t")}</h3><p class="muted" style="margin-top:4px">${t(k+"_d")}</p></div></div>`).join("")}</div>`}
function verifyBand(){return `<div class="cta-band"><div><h2>${t("band_title")}</h2><p>${t("band_text")}</p></div><a class="btn btn-gold" href="#verify">${ICONS.verify.replace('<svg','<svg width="18" height="18"')} ${t("cta_verify")}</a></div>`}

function contactLines(){const st=S.data.settings,rows=[["address",S.lang==="ar"?st.addr_ar:st.addr_en,0],["email",st.email,1],["phone",st.phone,1],["whatsapp",st.whatsapp,1],["hours",S.lang==="ar"?st.hours_ar:st.hours_en,0],["website",st.website,1]].filter(r=>r[1]);
 const val=(k,v)=>k==="whatsapp"?`<a class="mono" href="https://wa.me/${String(v).replace(/\D/g,"")}" target="_blank" rel="noopener" dir="ltr">${esc(v)}</a>`:k==="website"?`<a class="mono" href="https://${esc(String(v).replace(/^https?:\/\//,""))}" target="_blank" rel="noopener" dir="ltr">${esc(v)}</a>`:k==="email"||k==="phone"?`<span class="mono" dir="ltr">${esc(v)}</span>`:esc(v);
 return `<div class="contact-lines">${rows.map(([k,v])=>`<div><span class="muted">${t(k)}</span><span>${val(k,v)}</span></div>`).join("")}</div>`}
/* ---------- views ---------- */
const V={};
V.home=()=>`
<section class="hero"><canvas id="globe"></canvas><div class="wrap">
 <div><div class="eyebrow" style="color:#E7BE5C">${t("hero_eyebrow")}</div>
  <h1 style="margin-top:12px">${t("hero_title")}</h1>
  <p class="lead">${t("hero_lead")}</p>
  <div class="ctas"><a class="btn btn-gold" href="#programs">${t("cta_programs")}</a><a class="btn btn-ghost-light" href="#verify">${t("cta_verify")}</a></div>
  <div class="accr">${accrLogos()}</div></div>
 <div class="seal"><img src="${logo()}" alt="IFBE seal"></div>
</div></section>
<div class="stats"><div><b class="num">${PROGRAMS.length}</b><span>${t("stat1")}</span></div><div><b>3</b><span>${t("stat2")}</span></div><div><b>3</b><span>${t("stat3")}</span></div><div><b class="num">${S.data.offices.length}</b><span>${t("stat4")}</span></div></div>
<section class="blk"><div class="wrap">
 <div class="sec-head"><div><div class="eyebrow">${t("path_eyebrow")}</div><h2>${t("path_title")}</h2></div><p class="muted">${t("path_lead")}</p></div>
 ${trackLadder()}
</div></section>
<section class="blk" style="background:var(--surface-2)"><div class="wrap">
 <div class="sec-head"><div><div class="eyebrow">${t("accr_eyebrow")}</div><h2>${t("accr_title")}</h2></div><p class="muted">${t("accr_lead")}</p></div>
 ${accrCards()}
</div></section>
<section class="blk"><div class="wrap">
 <div class="sec-head"><div><div class="eyebrow">${t("svc_eyebrow")}</div><h2>${t("svc_title")}</h2></div><p class="muted">${t("svc_lead")}</p></div>
 ${svcCards(false)}
 <div style="margin-top:44px">${verifyBand()}</div>
</div></section>`;

V.about=()=>`${pageHead("about_title","about_lead")}
<section class="blk"><div class="wrap" style="display:grid;gap:40px">
 <div class="grid g2" style="align-items:center;gap:40px"><div style="display:grid;gap:14px;max-width:62ch"><p style="font-size:1.08rem">${t("about_p1")}</p><p class="muted">${t("about_p2")}</p></div>
  <div style="justify-self:center;width:min(260px,70%)"><img src="${logo()}" alt="" style="width:100%"></div></div>
 <div class="vm"><div><div class="eyebrow">01</div><h3>${t("vision")}</h3><p>${t("vision_t")}</p></div><div><div class="eyebrow">02</div><h3>${t("mission")}</h3><p>${t("mission_t")}</p></div></div>
 <div><div class="sec-head"><div><div class="eyebrow">${t("why")}</div><h2>${t("values")}</h2></div></div>
  <div class="grid g4">${[1,2,3,4].map(i=>`<div class="card"><h3 style="color:var(--royal)">${t("v"+i)}</h3><p class="muted" style="margin-top:6px;font-size:.92rem">${t("v"+i+"d")}</p></div>`).join("")}</div>
  <p style="margin-top:24px;max-width:75ch">${t("why_t")}</p></div>
 <div><div class="sec-head"><div><div class="eyebrow">${t("accr_eyebrow")}</div><h2>${t("accr_title")}</h2></div></div>${accrCards()}</div>
</div></section>`;

V.programs=()=>`${pageHead("prog_title","prog_lead")}
<section class="blk"><div class="wrap" style="display:grid;gap:44px">
 ${trackLadder()}
 <div class="grid g2">${PROGRAMS.map(p=>`<div class="card lift" style="display:grid;gap:12px">
  <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start"><div><span class="pill info">${t(["","track_trainer","track_consult","track_acad"][p.track])} · ${t("lvl")} ${p.lvl}</span>${p.price?` <span class="pill ok num">${money(p.price)}</span>`:""}<h3 style="font-size:1.25rem;margin-top:8px">${L(p)}</h3></div><span class="mono muted">${p.id}</span></div>
  <p class="muted">${S.lang==="ar"?p.dar:p.den}</p>
  <div class="office"><div class="meta"><span>${t("who_for")}</span><span>${S.lang==="ar"?p.war:p.wen}</span><span>${t("outcome")}</span><span>${S.lang==="ar"?p.oar:p.oen}</span><span>${t("accreditation")}</span><span>IEQM · CPD · ISO 21001:2018</span></div></div>
  <div><button class="btn btn-gold btn-sm" data-act="apply" data-p="${p.id}">${t("apply")}</button></div></div>`).join("")}</div>
</div></section>`;

V.services=()=>`${pageHead("svc_title","svc_page_lead")}
<section class="blk"><div class="wrap" style="display:grid;gap:44px">${svcCards(true)}
 <div class="card svc" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:18px"><div class="ico">${ICONS.verify}</div><div style="flex:1;min-width:220px"><h3>${t("nav_verify")}</h3><p class="muted">${t("band_text")}</p></div><a class="btn btn-royal" href="#verify">${t("cta_verify")}</a></div>
 <div class="cta-band"><div><h2>${t("contact_title")}</h2><p>${t("contact_lead")}</p></div><a class="btn btn-gold" href="#contact">${t("nav_contact")}</a></div>
</div></section>`;

function certResult(no,found){
 if(!no)return"";
 const c=found!==undefined?found:S.data.certs.find(x=>x.no.toUpperCase()===no.trim().toUpperCase());
 if(!c)return `<div class="cert-result"><div class="bar bad">✕ ${t("v_none")}</div></div>`;
 const st=certStatus(c),cls={valid:"ok",revoked:"bad",expired:"warn"}[st],msg={valid:"v_valid",revoked:"v_revoked",expired:"v_expired"}[st];
 const p=prog(c.prog),o=office(c.office);
 return `<div class="cert-result"><div class="bar ${cls}">${st==="valid"?"✓":"!"} ${t(msg)}</div>
 <dl><dt>${t("cert_no")}</dt><dd class="mono">${esc(c.no)}</dd><dt>${t("holder")}</dt><dd>${esc(c.name)}</dd><dt>${t("program")}</dt><dd>${p?L(p):esc(c.prog)}</dd><dt>${t("issued")}</dt><dd>${fmtDate(c.issued)}</dd><dt>${t("expires")}</dt><dd>${c.expires?fmtDate(c.expires):"—"}</dd><dt>${t("office")}</dt><dd>${o?esc(L(o))+", "+esc(S.lang==="ar"?o.car:o.cen):"—"}</dd><dt>${t("accreditation")}</dt><dd><div class="accr-row">${accrLogos()}</div></dd></dl>
 ${st==="valid"?`<div style="padding:0 20px 20px"><button class="btn btn-ghost btn-sm" data-act="showcert" data-no="${esc(c.no)}">${t("view_cert")}</button></div>`:""}</div>`}
V.verify=()=>`${pageHead("verify_title","verify_lead")}
<section class="blk"><div class="wrap"><div class="verify-box">
 <form class="vform" id="vform"><input id="vno" autocomplete="off" placeholder="${t("verify_ph")}" value="${esc(S.lastVerify||"")}" aria-label="${t("cert_no")}"><button class="btn btn-gold" type="submit">${ICONS.verify.replace('<svg','<svg width="18" height="18"')} ${t("verify_btn")}</button></form>
 ${REAL?"":`<div class="samples"><span class="muted" style="font-size:.85rem">${t("try_sample")}</span>${["IFBE-2026-CT-0142","IFBE-2024-CT-0219","IFBE-2023-CC-0056"].map(n=>`<button type="button" class="mono" data-act="sample" data-no="${n}">${n}</button>`).join("")}</div>`}
 <div class="vres" id="vres">${REAL?(S.vfound!==undefined?certResult(S.lastVerify,S.vfound):""):certResult(S.lastVerify)}</div>
</div></div></section>`;

function worldMap(list){
 // simplified continents as soft ellipses + office pins on an equirectangular 800x360 frame
 const pins=list.map(o=>`<g><circle cx="${o.x}" cy="${o.y}" r="${o.type==="hq"?9:6}" fill="${o.type==="hq"?"#C42B1F":"#E7BE5C"}" stroke="#071C46" stroke-width="2"/>${o.type==="hq"?`<circle cx="${o.x}" cy="${o.y}" r="16" fill="none" stroke="#C42B1F" stroke-width="1.5" opacity=".5"/>`:""}<text x="${o.x}" y="${o.y-13}" text-anchor="middle" font-size="11" font-weight="600" fill="var(--fg)">${esc(L(o))}</text></g>`).join("");
 return `<div class="map"><div style="overflow-x:auto"><svg viewBox="0 0 800 330" style="min-width:560px" role="img" aria-label="${t("offices_title")}">
 <rect width="800" height="330" fill="var(--surface-2)"/>
 <g fill="color-mix(in srgb,var(--royal) 22%,var(--surface))" stroke="color-mix(in srgb,var(--royal) 35%,var(--surface))">
  <path d="M90 60 Q160 30 260 55 Q300 90 280 140 Q250 175 220 190 Q190 160 150 150 Q100 120 90 60z"/>
  <path d="M230 200 Q270 195 290 230 Q285 280 255 315 Q235 290 230 250z"/>
  <path d="M380 70 Q430 50 480 70 Q500 95 470 120 Q420 125 390 110 Q375 90 380 70z"/>
  <path d="M400 135 Q450 125 500 150 Q520 200 480 260 Q450 280 435 240 Q410 190 400 135z"/>
  <path d="M480 60 Q600 40 720 70 Q740 120 690 170 Q620 190 560 170 Q510 150 490 120 Q475 90 480 60z"/>
  <path d="M650 250 Q700 240 730 265 Q720 295 680 295 Q650 285 650 250z"/>
 </g>
 <g stroke="var(--line)" stroke-width=".6" fill="none">${[60,120,180,240,300].map(y=>`<path d="M0 ${y}H800"/>`).join("")}${[100,200,300,400,500,600,700].map(x=>`<path d="M${x} 0V330"/>`).join("")}</g>
 ${pins}</svg></div></div>`}
V.offices=()=>{
 const f=S.offFilter,list=S.data.offices.filter(o=>f==="all"||o.region===f);
 const tl={hq:"hq",reg:"regional",rep:"rep"};
 return `${pageHead("offices_title","offices_lead")}
<section class="blk"><div class="wrap">
 <div class="tabs">${["all","americas","mena","europe","asia"].map(r=>`<button type="button" class="${f===r?"on":""}" data-act="offf" data-r="${r}">${t(r)}</button>`).join("")}</div>
 ${worldMap(list)}
 <div class="grid g3">${list.map(o=>`<div class="card office lift"><div class="hd"><div><div class="city">${esc(L(o))}</div><div class="muted">${esc(S.lang==="ar"?o.car:o.cen)}</div></div><span class="pill ${o.type}">${t(tl[o.type])}</span></div>
 <div class="meta"><span>${t("covers")}</span><span>${esc(S.lang==="ar"?o.covar:o.coven)}</span><span>${t("services_l")}</span><span>${esc(S.lang==="ar"?o.sar:o.sen)}</span>${o.phone?`<span>${t("phone")}</span><span class="mono">${esc(o.phone)}</span>`:""}${o.email?`<span>${t("email")}</span><span class="mono">${esc(o.email)}</span>`:""}</div>
 <div><a class="btn btn-ghost btn-sm" href="#contact" data-act="contactoff" data-o="${o.id}">${ICONS.pin.replace('<svg','<svg width="15" height="15"')} ${t("contact_office")}</a></div></div>`).join("")}</div>
</div></section>`};

V.contact=()=>`${pageHead("contact_title","contact_lead")}
<section class="blk"><div class="wrap grid g2" style="gap:36px;align-items:start">
 <form class="card form lift" id="cform">
  <div class="two"><label class="f">${t("name")}<input id="c_name" required></label><label class="f">${t("email")}<input id="c_email" type="email" required></label></div>
  <div class="two"><label class="f">${t("phone")}<input id="c_phone" type="tel"></label><label class="f">${t("office")}<select id="c_office">${S.data.offices.map(o=>`<option value="${o.id}" ${S.prefOffice==o.id?"selected":""}>${esc(L(o))} — ${esc(S.lang==="ar"?o.car:o.cen)}</option>`).join("")}</select></label></div>
  <label class="f">${t("subject")}<select id="c_subj">${["subj_adm","subj_part","subj_ver","subj_other"].map(k=>`<option value="${k}">${t(k)}</option>`).join("")}</select></label>
  <label class="f">${t("message")}<textarea id="c_msg" rows="5" required></textarea></label>
  ${(REAL||S.data.settings.hideDemo)?"":`<p class="note">${t("demo_store")}</p>`}
  <div><button class="btn btn-gold" type="submit">${t("send")}</button></div>
 </form>
 <div style="display:grid;gap:18px">
  <div class="card"><div class="eyebrow">${t("hq")}</div><h3 style="margin-top:6px">${t("fullName")}</h3>${contactLines()}</div>
  <div class="card"><div class="eyebrow">${t("offices_title")}</div><div style="display:grid;gap:8px;margin-top:10px">${S.data.offices.map(o=>`<div style="display:flex;justify-content:space-between;gap:10px"><span>${esc(L(o))}</span><span class="muted">${esc(S.lang==="ar"?o.car:o.cen)}</span></div>`).join("")}</div><a href="#offices" class="btn btn-ghost btn-sm" style="margin-top:14px">${t("nav_offices")}</a></div>
 </div>
</div></section>`;

V.login=()=>{
 const head=`<div style="text-align:center;margin-bottom:18px"><img src="${logo()}" alt="" style="width:76px"><h2 style="font-size:1.4rem;margin-top:8px">${t("login_title")}</h2></div>`;
 if(!REAL)return `<div class="wrap"><div class="auth"><div class="card lift" style="padding:30px">${head}
 <div class="seg"><button type="button" class="${S.loginRole!=="admin"?"on":""}" data-act="role" data-r="student">${t("student")}</button><button type="button" class="${S.loginRole==="admin"?"on":""}" data-act="role" data-r="admin">${t("admin")}</button></div>
 <form class="form" id="lform"><label class="f">${t("email")}<input id="l_email" type="email" required value="${S.loginRole==="admin"?"admin@ifbe.demo":"student@ifbe.demo"}"></label><label class="f">${t("password")}<input id="l_pass" type="password" required value=""></label>
 <p id="lerr" class="note" style="color:var(--bad)" hidden>${t("bad_login")}</p>
 <button class="btn btn-gold" type="submit">${t("signin")}</button>
 <div class="note"><b>${t("demo_creds")}</b><br>${t("student")}: <span class="mono">student@ifbe.demo / 123456</span><br>${t("admin")}: <span class="mono">admin@ifbe.demo / admin123</span></div></form>
 </div></div></div>`;
 if(S.user?.role==="pending")return `<div class="wrap"><div class="auth"><div class="card lift" style="padding:30px;display:grid;gap:14px">${head}<p class="note">${t("pending_msg")}</p><p class="mono muted" style="text-align:center">${esc(S.user.email)}</p><button class="btn btn-ghost" data-act="logout">${t("logout")}</button></div></div></div>`;
 const m=S.loginMode;
 return `<div class="wrap"><div class="auth"><div class="card lift" style="padding:30px">${head}
 <div class="seg"><button type="button" class="${m==="signin"?"on":""}" data-act="lmode" data-m="signin">${t("signin")}</button><button type="button" class="${m==="signup"?"on":""}" data-act="lmode" data-m="signup">${t("create_acc")}</button></div>
 <form class="form" id="lform" data-mode="${m}"><label class="f">${t("email")}<input id="l_email" type="email" required autocomplete="email"></label>
 <label class="f">${t("password")}<input id="l_pass" type="password" required minlength="${m==="signup"?8:1}" autocomplete="${m==="signup"?"new-password":"current-password"}"></label>
 ${m==="signup"?`<label class="f">${t("password2")}<input id="l_pass2" type="password" required minlength="8" autocomplete="new-password"></label><p class="note">${t("signup_hint")}</p>`:""}
 <p id="lerr" class="note" style="color:var(--bad)" hidden></p><p id="lok" class="note" style="color:var(--ok)" hidden></p>
 <button class="btn btn-gold" type="submit">${m==="signup"?t("create_acc"):t("signin")}</button>
 ${m==="signin"?`<button type="button" class="btn btn-ghost btn-sm" data-act="forgot">${t("forgot")}</button>`:""}</form>
 </div></div></div>`};

/* ---------- dashboards ---------- */
function dashShell(items,body){
 const u=S.user;
 return `<div class="mob-dash-nav">${items.map(([k,ic,c])=>`<button type="button" class="${S.dTab===k?"on":""}" data-act="dtab" data-k="${k}">${t(c)}</button>`).join("")}<button type="button" data-act="logout">${t("logout")}</button></div>
 <div class="dash"><aside class="side"><div class="who"><div class="avatar">${initials(u.name)}</div><div><b>${esc(u.name)}</b><small>${u.role==="admin"?t("admin"):t("student")+" · "+u.id}</small></div></div>
 ${items.map(([k,ic,c,n])=>`<button type="button" class="${S.dTab===k?"on":""}" data-act="dtab" data-k="${k}">${ICONS[ic]}<span>${t(c)}</span>${n?`<span class="count num">${n}</span>`:""}</button>`).join("")}
 <div class="spacer"></div><button type="button" data-act="logout">${ICONS.out}<span>${t("logout")}</span></button></aside>
 <div class="main"><div class="inner">${(REAL||S.data.settings.hideDemo)?"":`<div class="demo-flag">${t("demo_dash")}</div>`}${body}</div></div></div>`}

function stuSelf(){return S.data.students.find(s=>s.id===S.user.id)||S.data.students.find(s=>s.email===S.user.email)||S.data.students[0]}
const MODS={en:["Adult learning principles","Curriculum design","Practical demonstration skills","Assessment & feedback","Classroom management","Final teaching portfolio"],ar:["مبادئ تعليم الكبار","تصميم المنهج","مهارات العرض العملي","التقييم والتغذية الراجعة","إدارة القاعة التدريبية","ملف التدريس النهائي"]};
V.student=()=>{
 if(!S.user||S.user.role!=="student"){location.hash="login";return""}
 const me=stuSelf(),p=prog(me.prog),myCerts=S.data.certs.filter(c=>c.sid?c.sid===me.id:c.name===me.name),myPay=S.data.payments.filter(x=>x.sid===me.id),due=myPay.filter(x=>x.st==="due").reduce((a,b)=>a+(+b.amt||0),0);
 const items=[["overview","grid","d_overview"],["programs","book","d_programs"],["certs","cert","d_certs"],["pay","card","d_pay",myPay.filter(x=>x.st==="due").length||0],["profile","user","d_profile"]];
 const mods=MODS[S.lang],doneN=Math.round(me.progress/100*mods.length);
 const course=`<div class="panel"><header><h3>${L(p)}</h3><span class="pill info">${t("cohort")} 2026-A</span></header><div class="body course">
  <div class="top-row"><span class="muted">${t("progress")}</span><b class="num">${me.progress}%</b></div><div class="prog"><i style="width:${me.progress}%"></i></div>
  <ul class="mod-list" style="margin-top:8px">${mods.map((m,i)=>`<li><span class="dot ${i<doneN?"done":i===doneN?"now":""}">${i<doneN?"✓":""}</span><span class="${i<doneN?"muted":""}">${m}</span></li>`).join("")}</ul></div></div>`;
 const certList=myCerts.length?`<div class="grid g2">${myCerts.map(c=>{const st=certStatus(c);return `<div class="card" style="display:grid;gap:10px"><div style="display:flex;justify-content:space-between;gap:10px"><b>${L(prog(c.prog))}</b><span class="pill ${st==="valid"?"ok":st==="revoked"?"bad":"warn"}">${t(st)}</span></div><span class="mono muted">${c.no}</span><span class="muted" style="font-size:.88rem">${t("issued")}: ${fmtDate(c.issued)}</span><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-gold btn-sm" data-act="showcert" data-no="${c.no}">${t("view_cert")}</button><a class="btn btn-ghost btn-sm" href="#verify" data-act="gover" data-no="${c.no}">${t("verify_btn")}</a></div></div>`}).join("")}</div><p class="muted" style="font-size:.85rem">${t("download_note")}</p>`:`<p class="muted">—</p>`;
 const payTbl=`<div class="panel"><div class="tbl-wrap"><table><thead><tr><th>${t("invoice")}</th><th>${t("details")}</th><th>${t("date")}</th><th>${t("amount")}</th><th>${t("status")}</th></tr></thead><tbody>${myPay.map(x=>`<tr><td class="mono">${esc(x.inv)}</td><td>${L(x)}</td><td>${fmtDate(x.date)}</td><td class="num">${money(+x.amt||0)}</td><td><span class="pill ${x.st==="paid"?"ok":"warn"}">${t(x.st)}</span></td></tr>`).join("")}</tbody></table></div></div>`;
 let body="";
 if(S.dTab==="overview")body=`<h2>${t("welcome")}, ${esc(me.name.split(" ")[0])}</h2>
  <div class="kpis"><div class="kpi"><span>${t("active_programs")}</span><b>1</b></div><div class="kpi"><span>${t("progress")}</span><b>${me.progress}%</b></div><div class="kpi"><span>${t("certs_earned")}</span><b>${myCerts.length}</b></div><div class="kpi"><span>${t("balance")}</span><b>${money(due)}</b></div></div>
  <div class="grid g2" style="align-items:start">${course}<div class="panel"><header><h3>${t("d_schedule")}</h3></header><div class="body"><ul class="feed">
   <li>${ICONS.cal.replace('<svg','<svg width="18" height="18"')}<span>${S.lang==="ar"?"جلسة مباشرة: إدارة القاعة التدريبية":"Live session: Classroom management"}</span><time>${fmtDate("2026-11-08")}</time></li>
   <li>${ICONS.file.replace('<svg','<svg width="18" height="18"')}<span>${S.lang==="ar"?"تسليم: خطة جلسة تدريبية":"Due: Training session plan"}</span><time>${fmtDate("2026-11-15")}</time></li>
   <li>${ICONS.cal.replace('<svg','<svg width="18" height="18"')}<span>${S.lang==="ar"?"تقييم عملي — مكتب عمّان":"Practical assessment — Amman office"}</span><time>${fmtDate("2026-12-02")}</time></li></ul></div></div></div>`;
 else if(S.dTab==="programs")body=`<h2>${t("d_programs")}</h2>${course}<div class="card" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center"><div><b>${S.lang==="ar"?"الخطوة التالية في مسارك":"Next step on your track"}</b><p class="muted">${L(prog("IET"))}</p></div><button class="btn btn-gold btn-sm" data-act="apply" data-p="IET">${t("apply")}</button></div>`;
 else if(S.dTab==="certs")body=`<h2>${t("d_certs")}</h2>${certList}`;
 else if(S.dTab==="pay")body=`<h2>${t("d_pay")}</h2>${payTbl}`;
 else body=`<h2>${t("d_profile")}</h2><form class="card form" id="pform" style="max-width:640px"><div class="two"><label class="f">${t("name")}<input id="p_name" value="${esc(me.name)}"></label><label class="f">${t("email")}<input id="p_email" value="${esc(me.email)}" disabled></label></div><div class="two"><label class="f">${t("country")}<input id="p_country" value="${esc(me.country)}"></label><label class="f">${t("program")}<input value="${esc(L(p))}" disabled></label></div><div><button class="btn btn-gold" type="submit">${t("save")}</button></div></form>`;
 return dashShell(items,body)};

/* ---------- admin: generic CRUD ---------- */
const F=(k,l,ty="text",o,ol,extra={})=>({k,l,ty,o,ol,...extra});
const SCHEMA={
 students:{title:"a_students",f:[F("id","ID"),F("name","name","text",0,0,{req:1}),F("email","email","text",0,0,{req:1}),F("password","password"),F("country","country"),F("prog","program","prog"),F("status","status","select",["active","graduated","suspended"]),F("progress","progress","number"),F("joined","date","date")],
  auto:it=>{if(!it.id)it.id=uid("S-");if(!REAL&&!it.password)it.password="123456";if(!it.joined)it.joined=TODAY}},
 certs:{title:"a_certs",f:[F("no","cert_no"),F("sid","student","student"),F("name","holder","text",0,0,{req:1}),F("prog","program","prog"),F("office","office","office"),F("issued","issued","date"),F("expires","expires","date"),F("status","status","select",["valid","revoked"])],
  auto:it=>{if(!it.no)it.no=nextCertNo(it.prog,it.issued);if(!it.issued)it.issued=TODAY;if(it.sid&&!it.name){const st=S.data.students.find(x=>x.id===it.sid);if(st)it.name=st.name}}},
 programs:{title:"a_programs",f:[F("id","code","text",0,0,{req:1}),F("track","track","select",[1,2,3],"track"),F("lvl","lvl","number"),F("price","price","number"),F("en","name_en","text",0,0,{req:1,dir:"ltr"}),F("ar","name_ar","text",0,0,{req:1,dir:"rtl"}),F("den","desc_en","textarea",0,0,{dir:"ltr"}),F("dar","desc_ar","textarea",0,0,{dir:"rtl"}),F("wen","who_en","text",0,0,{dir:"ltr"}),F("war","who_ar","text",0,0,{dir:"rtl"}),F("oen","out_en","text",0,0,{dir:"ltr"}),F("oar","out_ar","text",0,0,{dir:"rtl"})]},
 services:{title:"a_services",auto:it=>{it.id=uid("SV-")},f:[F("ic","icon","select",["train","cert","strat","salon","lead","cpd","verify","book","users"],"raw"),F("en","name_en","text",0,0,{req:1,dir:"ltr"}),F("ar","name_ar","text",0,0,{req:1,dir:"rtl"}),F("den","desc_en","textarea",0,0,{dir:"ltr"}),F("dar","desc_ar","textarea",0,0,{dir:"rtl"}),F("len","list_en","lines",0,0,{dir:"ltr"}),F("lar","list_ar","lines",0,0,{dir:"rtl"})]},
 offices:{title:"a_offices",f:[F("en","city_en","text",0,0,{req:1,dir:"ltr"}),F("ar","city_ar","text",0,0,{req:1,dir:"rtl"}),F("cen","country_en","text",0,0,{dir:"ltr"}),F("car","country_ar","text",0,0,{dir:"rtl"}),F("region","region","select",["americas","mena","europe","asia"]),F("type","type","select",["hq","reg","rep"],"otype"),F("phone","phone","text",0,0,{dir:"ltr"}),F("email","email","text",0,0,{dir:"ltr"}),F("coven","covers_en","text",0,0,{dir:"ltr"}),F("covar","covers_ar","text",0,0,{dir:"rtl"}),F("sen","services_en","text",0,0,{dir:"ltr"}),F("sar","services_ar","text",0,0,{dir:"rtl"}),F("x","map_x","number"),F("y","map_y","number")],
  auto:it=>{it.id=Date.now();if(!it.x||!it.y){const [x,y]=REGXY[it.region]||[400,160];it.x=Math.round(x+Math.random()*30-15);it.y=Math.round(y+Math.random()*30-15)}}},
 payments:{title:"a_payments",f:[F("inv","invoice"),F("sid","student","student"),F("en","desc_en","text",0,0,{dir:"ltr"}),F("ar","desc_ar","text",0,0,{dir:"rtl"}),F("amt","amount","number"),F("date","date","date"),F("st","status","select",["paid","due","pending"])],
  auto:it=>{if(!it.inv)it.inv="INV-"+TODAY.slice(0,4)+"-"+String(1000+Math.floor(Math.random()*9000))}},
 admins:{title:"a_admins",f:[F("name","name","text",0,0,{req:1}),F("email","email","text",0,0,{req:1,dir:"ltr"}),F("password","password","text",0,0,{req:1,dir:"ltr"})]},
 apps:{title:"a_apps",f:[F("name","name","text",0,0,{req:1}),F("email","email","text",0,0,{dir:"ltr"}),F("country","country"),F("prog","program","prog"),F("exp","experience","number"),F("date","date","date"),F("status","status","select",["new","approved","rejected"])],
  auto:it=>{it.id=uid("A-")}},
};
if(REAL){SCHEMA.students.f=SCHEMA.students.f.filter(x=>x.k!=="password");SCHEMA.admins.f=SCHEMA.admins.f.filter(x=>x.k!=="password")}
const NUMF=new Set(["progress","lvl","price","amt","exp","x","y","track","office"]);
function optLabel(ol,v){if(ol==="track")return t(["","track_trainer","track_consult","track_acad"][v]);if(ol==="otype")return t({hq:"hq",reg:"regional",rep:"rep"}[v]);if(ol==="raw")return v;return t(v)}
function editModal(coll,idx){
 const sc=SCHEMA[coll],it=idx>=0?S.data[coll][idx]:{};
 const fld=f=>{const v=it[f.k]??"",id="e_"+f.k,dir=f.dir?` dir="${f.dir}"`:"";let inp,full=false;
  if(f.ty==="textarea"||f.ty==="lines"){full=true;inp=`<textarea id="${id}" rows="${f.ty==="lines"?4:3}"${dir}>${esc(f.ty==="lines"?(v||[]).join("\n"):v)}</textarea>`}
  else if(["select","prog","office","student"].includes(f.ty)){
   const opts=f.ty==="prog"?S.data.programs.map(p=>[p.id,L(p)]):f.ty==="office"?S.data.offices.map(o=>[o.id,L(o)]):f.ty==="student"?S.data.students.map(s=>[s.id,s.id+" — "+s.name]):f.o.map(x=>[x,optLabel(f.ol,x)]);
   inp=`<select id="${id}">${opts.map(([a,b])=>`<option value="${esc(a)}" ${String(a)===String(v)?"selected":""}>${esc(b)}</option>`).join("")}</select>`}
  else inp=`<input id="${id}" type="${f.ty==="number"?"number":f.ty==="date"?"date":"text"}"${f.ty==="number"?' step="any"':""} value="${esc(v)}"${f.req?" required":""}${dir}>`;
  return `<label class="f${full?" full":""}">${t(f.l)}${f.ty==="lines"?` <small class="muted">(${t("one_per_line")})</small>`:""}${inp}</label>`};
 modal(`<h2 style="font-size:1.3rem;margin-bottom:16px">${idx>=0?t("edit"):t("add_new")} · ${t(sc.title)}</h2><form class="form" id="eform" data-coll="${coll}" data-idx="${idx}"><div class="fgrid">${sc.f.map(fld).join("")}</div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-gold" type="submit">${t("save")}</button><button class="btn btn-ghost" type="button" data-act="mclose">${t("cancel")}</button></div></form>`)}
function saveEdit(f){
 const coll=f.dataset.coll,idx=+f.dataset.idx,sc=SCHEMA[coll],arr=S.data[coll],it=idx>=0?arr[idx]:{};
 sc.f.forEach(fd=>{const el=document.getElementById("e_"+fd.k);if(!el)return;let val=el.value;
  if(fd.ty==="lines")val=val.split("\n").map(s=>s.trim()).filter(Boolean);
  else if(fd.ty==="number"||NUMF.has(fd.k))val=val===""?0:+val;
  else val=val.trim();
  it[fd.k]=val});
 if(idx<0){sc.auto&&sc.auto(it);arr.push(it)}
 if(coll==="students"&&S.user?.role==="student"&&S.user.id===it.id)S.user.name=it.name;
 save();closeModal();render();toast(t(idx<0?"added":"updated"))}
function crud(coll,cols,{extra,noAdd}={}){
 const q=(S.q||"").toLowerCase();
 const rows=S.data[coll].map((it,i)=>[it,i]).filter(([it])=>!q||JSON.stringify(it).toLowerCase().includes(q)).reverse();
 return `<div class="panel"><header><input class="search" id="q" placeholder="${t("search")}" value="${esc(S.q||"")}"><span class="muted num" style="font-size:.85rem">${rows.length} / ${S.data[coll].length}</span>${noAdd?"":`<button class="btn btn-gold btn-sm" data-act="edit" data-coll="${coll}" data-idx="-1">+ ${t("add_new")}</button>`}</header>
 <div class="tbl-wrap"><table><thead><tr>${cols.map(c=>`<th>${t(c[0])}</th>`).join("")}<th></th></tr></thead><tbody>${rows.length?rows.map(([it,i])=>`<tr>${cols.map(c=>`<td>${c[1](it)}</td>`).join("")}<td><div class="act">${extra?extra(it,i):""}<button class="btn btn-ghost btn-sm" data-act="edit" data-coll="${coll}" data-idx="${i}">${t("edit")}</button><button class="btn btn-danger btn-sm" data-act="del" data-coll="${coll}" data-idx="${i}">${t("del")}</button></div></td></tr>`).join(""):`<tr><td colspan="${cols.length+1}" class="muted">${t("no_results")}</td></tr>`}</tbody></table></div></div>`}

/* ---------- admin: site texts ---------- */
const CGROUPS=[
 ["g_home",["hero_eyebrow","hero_title","hero_lead","stat1","stat2","stat3","stat4","path_eyebrow","path_title","path_lead","accr_eyebrow","accr_title","accr_lead","svc_eyebrow","svc_title","svc_lead","band_title","band_text"]],
 ["g_about",["about_title","about_lead","about_p1","about_p2","vision","vision_t","mission","mission_t","why","why_t","values","v1","v1d","v2","v2d","v3","v3d","v4","v4d"]],
 ["g_accr",["ieqm_t","ieqm_d","cpd_t","cpd_d","iso_t","iso_d"]],
 ["g_pages",["prog_title","prog_lead","svc_page_lead","verify_title","verify_lead","offices_title","offices_lead","contact_title","contact_lead"]],
 ["g_general",["fullName","footer_about","track_trainer","track_consult","track_acad","nav_home","nav_about","nav_programs","nav_services","nav_verify","nav_offices","nav_contact"]],
];
const curTxt=(l,k)=>S.data.content?.[l]?.[k]??I18N[l][k]??"";
function contentEditor(){
 const g=Math.min(S.cg||0,CGROUPS.length-1),[gk,keys]=CGROUPS[g];
 const rows=k=>Math.min(6,Math.max(1,Math.ceil((curTxt("en",k)).length/60)));
 return `<h2>${t("a_content")}</h2><p class="muted">${t("content_hint")}</p>
 <div class="tabs" style="margin:0">${CGROUPS.map(([k],i)=>`<button type="button" class="${i===g?"on":""}" data-act="cg" data-i="${i}">${t(k)}</button>`).join("")}</div>
 <form class="panel" id="ctform"><div class="body" style="display:grid;gap:20px">${keys.map(k=>`<div style="display:grid;gap:8px"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b style="font-size:.95rem">${esc(I18N[S.lang][k]?.replace(/<[^>]+>/g,"").slice(0,48)||k)}</b>${S.data.content?.en?.[k]!=null||S.data.content?.ar?.[k]!=null?`<span class="pill warn">${t("modified")}</span>`:""}</div>
  <div class="ct-pair"><label class="f">English<textarea dir="ltr" data-k="${k}" data-l="en" rows="${rows(k)}">${esc(curTxt("en",k))}</textarea></label><label class="f">العربية<textarea dir="rtl" data-k="${k}" data-l="ar" rows="${rows(k)}">${esc(curTxt("ar",k))}</textarea></label></div></div>`).join("")}</div>
 <footer class="panel-foot"><button class="btn btn-ghost btn-sm" type="button" data-act="ctreset" data-i="${g}">${t("reset_default")}</button><button class="btn btn-gold" type="submit">${t("save")}</button></footer></form>`}

/* ---------- admin: settings ---------- */
function settingsView(){
 const st=S.data.settings,inp=(k,l,dir)=>`<label class="f">${t(l)}<input id="st_${k}" value="${esc(st[k]||"")}"${dir?` dir="${dir}"`:""}></label>`;
 return `<h2>${t("a_settings")}</h2>
 <div class="grid g2" style="align-items:start">
 <div class="panel"><header><h3>${t("logo")}</h3></header><div class="body" style="display:grid;gap:14px;justify-items:start">
  <img src="${logo()}" alt="" style="width:120px;height:120px;object-fit:contain;background:var(--surface-2);border-radius:12px;padding:8px">
  <label class="btn btn-ghost btn-sm" style="cursor:pointer">${t("upload_logo")}<input class="logoUp" data-target="logo" type="file" accept="image/*" hidden></label>
  ${st.logo?`<button class="btn btn-danger btn-sm" data-act="resetlogo">${t("reset_logo")}</button>`:""}
  <h3 style="margin-top:10px">${t("accr_logos")}</h3>
  <div style="display:grid;gap:12px;width:100%">${ACCR_KEYS.map(k=>`<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><div class="accr-logo" style="width:96px;height:64px"><img src="${accrLogo(k)}" alt=""></div><b style="min-width:90px">${esc(t(k+"_t"))}</b><label class="btn btn-ghost btn-sm" style="cursor:pointer">${t("replace")}<input class="logoUp" data-target="accr_${k}" type="file" accept="image/*" hidden></label>${st["accr_"+k]?`<button class="btn btn-danger btn-sm" data-act="resetaccr" data-k="${k}">${t("reset_logo")}</button>`:""}</div>`).join("")}</div>
 </div></div>
 <form class="panel" id="stform"><header><h3>${t("site_contact")}</h3></header><div class="body form">
  <div class="two">${inp("email","email","ltr")}${inp("phone","phone","ltr")}</div>
  <div class="two">${inp("whatsapp","whatsapp","ltr")}${inp("website","website","ltr")}</div>
  <div class="two">${inp("addr_en","addr_en","ltr")}${inp("addr_ar","addr_ar","rtl")}</div>
  <div class="two">${inp("hours_en","hours_en","ltr")}${inp("hours_ar","hours_ar","rtl")}</div>
  <div class="two">${inp("facebook","Facebook","ltr")}${inp("instagram","Instagram","ltr")}</div>
  <div class="two">${inp("linkedin","LinkedIn","ltr")}${inp("tiktok","TikTok","ltr")}</div>
  ${REAL?"":`<label class="f" style="display:flex;align-items:center;gap:10px;flex-direction:row"><input id="st_demo" type="checkbox" style="width:auto" ${st.hideDemo?"":"checked"}> ${t("show_demo")}</label>`}
  <div><button class="btn btn-gold" type="submit">${t("save")}</button></div></div></form>
 </div>
 <div class="panel"><header><h3>${t("backup")}</h3></header><div class="body form">
  <p class="muted" style="font-size:.9rem">${t("backup_hint")}</p>
  <textarea id="bk_out" rows="4" readonly dir="ltr" class="mono" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--line);background:var(--bg);font-size:.75rem">${esc(JSON.stringify(S.data))}</textarea>
  <div><button class="btn btn-ghost btn-sm" type="button" data-act="copybk">${t("copy")}</button></div>
  <label class="f">${t("import")}<textarea id="bk_in" rows="3" dir="ltr" class="mono" style="font-size:.75rem"></textarea></label>
  <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-royal btn-sm" type="button" data-act="import">${t("import")}</button>${REAL?"":`<button class="btn btn-danger btn-sm" type="button" data-act="reset">${t("reset_demo")}</button>`}</div>
 </div></div>`}

/* ---------- admin view ---------- */
V.admin=()=>{
 if(!S.user||S.user.role!=="admin"){location.hash="login";return""}
 const D=S.data,newApps=D.apps.filter(a=>a.status==="new").length,newInq=D.inq.filter(i=>!i.read).length;
 const items=[["overview","grid","d_overview"],["content","pen","a_content"],["programs","book","a_programs"],["services","layers","a_services"],["offices","pin","a_offices"],["students","users","a_students"],["certs","cert","a_certs"],["apps","file","a_apps",newApps],["inq","inbox","a_inq",newInq],["payments","card","a_payments"],["admins","shield","a_admins"],["settings","gear","a_settings"]];
 const stPill=s=>`<span class="pill ${({valid:"ok",graduated:"ok",approved:"ok",paid:"ok",revoked:"bad",rejected:"bad",suspended:"bad",expired:"warn",due:"warn",new:"warn",pending:"warn"})[s]||"info"}">${t(s)}</span>`;
 let body="";
 if(S.dTab==="overview"){
  const now=new Date(TODAY+"T00:00:00"),ms=[];for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);ms.push([d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0"),d.toLocaleDateString(S.lang==="ar"?"ar-JO-u-nu-latn":"en-US",{month:"short"})])}
  const vals=ms.map(([ym])=>D.students.filter(s=>(s.joined||"").startsWith(ym)).length+D.apps.filter(a=>(a.date||"").startsWith(ym)).length),mx=Math.max(1,...vals);
  const rev=D.payments.filter(p=>p.st==="paid").reduce((a,b)=>a+(+b.amt||0),0);
  body=`<h2>${t("d_overview")}</h2>
  <div class="kpis"><div class="kpi"><span>${t("total_students")}</span><b>${D.students.length}</b></div><div class="kpi"><span>${t("issued_certs")}</span><b>${D.certs.length}</b></div><div class="kpi"><span>${t("pending_apps")}</span><b style="color:${newApps?"var(--crimson)":"inherit"}">${newApps}</b></div><div class="kpi"><span>${t("revenue")}</span><b>${money(rev)}</b></div></div>
  <div class="grid g2" style="align-items:start"><div class="panel"><header><h3>${t("enroll_trend")}</h3></header><div class="body"><div class="bars">${vals.map((v,i)=>`<div><em>${v}</em><i style="height:${Math.max(2,v/mx*100)}%"></i><span>${ms[i][1]}</span></div>`).join("")}</div></div></div>
  <div class="panel"><header><h3>${t("quick_actions")}</h3></header><div class="body" style="display:flex;flex-wrap:wrap;gap:10px">
   <button class="btn btn-gold btn-sm" data-act="edit" data-coll="certs" data-idx="-1">+ ${t("issue_cert")}</button>
   <button class="btn btn-ghost btn-sm" data-act="edit" data-coll="students" data-idx="-1">+ ${t("add_student")}</button>
   <button class="btn btn-ghost btn-sm" data-act="edit" data-coll="programs" data-idx="-1">+ ${t("program")}</button>
   <button class="btn btn-ghost btn-sm" data-act="edit" data-coll="offices" data-idx="-1">+ ${t("add_office")}</button>
   <button class="btn btn-ghost btn-sm" data-act="edit" data-coll="payments" data-idx="-1">+ ${t("invoice")}</button>
   <button class="btn btn-ghost btn-sm" data-act="dtab" data-k="content">${t("a_content")}</button>
  </div></div></div>
  <div class="panel"><header><h3>${t("a_programs")}</h3></header><div class="tbl-wrap"><table><thead><tr><th>${t("program")}</th><th>${t("track")}</th><th>${t("a_students")}</th><th>${t("a_certs")}</th></tr></thead><tbody>${D.programs.map(p=>`<tr><td><b>${esc(L(p))}</b></td><td>${optLabel("track",p.track)}</td><td class="num">${D.students.filter(s=>s.prog===p.id).length}</td><td class="num">${D.certs.filter(c=>c.prog===p.id).length}</td></tr>`).join("")}</tbody></table></div></div>`}
 else if(S.dTab==="content")body=contentEditor();
 else if(S.dTab==="settings")body=settingsView();
 else if(S.dTab==="programs")body=`<h2>${t("a_programs")}</h2>`+crud("programs",[["code",p=>`<span class="mono">${esc(p.id)}</span>`],["name_ar",p=>`<b>${esc(p.ar)}</b>`],["name_en",p=>esc(p.en)],["track",p=>optLabel("track",p.track)],["lvl",p=>`<span class="num">${p.lvl}</span>`],["price",p=>p.price?money(p.price):"—"]]);
 else if(S.dTab==="services")body=`<h2>${t("a_services")}</h2>`+crud("services",[["icon",s=>`<span class="ico" style="display:inline-grid;width:34px;height:34px;place-items:center;color:var(--royal)">${(ICONS[s.ic]||"").replace('<svg','<svg width="20" height="20"')}</span>`],["name_ar",s=>`<b>${esc(s.ar)}</b>`],["name_en",s=>esc(s.en)]]);
 else if(S.dTab==="offices")body=`<h2>${t("a_offices")}</h2>`+crud("offices",[["city",o=>`<b>${esc(L(o))}</b>`],["country",o=>esc(S.lang==="ar"?o.car:o.cen)],["region",o=>t(o.region)],["type",o=>`<span class="pill ${o.type}">${optLabel("otype",o.type)}</span>`],["phone",o=>`<span class="mono">${esc(o.phone||"—")}</span>`]]);
 else if(S.dTab==="students")body=`<h2>${t("a_students")}</h2>${REAL?`<p class="muted">${t("students_hint_real")}</p>`:""}`+crud("students",[["ID",s=>`<span class="mono">${esc(s.id)}</span>`],["name",s=>`<b>${esc(s.name)}</b><div class="muted" style="font-size:.8rem">${esc(s.email)}</div>`],["country",s=>esc(s.country)],["program",s=>esc(L(prog(s.prog)))],["progress",s=>`<div style="min-width:90px"><div class="prog"><i style="width:${+s.progress||0}%"></i></div><span class="num muted" style="font-size:.78rem">${+s.progress||0}%</span></div>`],["status",s=>stPill(s.status)]],{extra:(s)=>`<button class="btn btn-ghost btn-sm" data-act="issuefor" data-id="${esc(s.id)}">${t("issue_cert")}</button>`});
 else if(S.dTab==="certs")body=`<h2>${t("a_certs")}</h2>`+crud("certs",[["cert_no",c=>`<span class="mono">${esc(c.no)}</span>`],["holder",c=>`<b>${esc(c.name)}</b>`],["program",c=>esc(L(prog(c.prog)))],["issued",c=>fmtDate(c.issued)],["expires",c=>c.expires?fmtDate(c.expires):"—"],["status",c=>stPill(certStatus(c))]],{extra:(c)=>`<button class="btn btn-ghost btn-sm" data-act="showcert" data-no="${esc(c.no)}">${t("view")}</button>${c.status==="revoked"?`<button class="btn btn-ghost btn-sm" data-act="restore" data-no="${esc(c.no)}">${t("restore")}</button>`:`<button class="btn btn-ghost btn-sm" data-act="revoke" data-no="${esc(c.no)}">${t("revoke")}</button>`}`});
 else if(S.dTab==="apps")body=`<h2>${t("a_apps")}</h2>`+crud("apps",[["ID",a=>`<span class="mono">${esc(a.id)}</span>`],["name",a=>`<b>${esc(a.name)}</b><div class="muted" style="font-size:.8rem">${esc(a.email)}</div>`],["country",a=>esc(a.country)],["program",a=>esc(L(prog(a.prog)))],["experience",a=>`<span class="num">${esc(a.exp)}</span>`],["date",a=>fmtDate(a.date)],["status",a=>stPill(a.status)]],{extra:(a)=>a.status==="new"?`<button class="btn btn-gold btn-sm" data-act="appok" data-id="${esc(a.id)}">${t("approve")}</button><button class="btn btn-ghost btn-sm" data-act="appno" data-id="${esc(a.id)}">${t("reject")}</button>`:""});
 else if(S.dTab==="inq"){
  D.inq.forEach(i=>i.read=true);save();
  body=`<h2>${t("a_inq")}</h2>${D.inq.length?D.inq.map((i,ix)=>[i,ix]).reverse().map(([i,ix])=>`<div class="card" style="display:grid;gap:8px"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><b>${esc(i.name)} <span class="muted" style="font-weight:400">· <span class="mono">${esc(i.email)}</span>${i.phone?` · <span class="mono">${esc(i.phone)}</span>`:""}</span></b><span class="pill info">${t(i.subj)} · ${esc(L(office(i.office)))}</span></div><p>${esc(i.msg)}</p><div style="display:flex;justify-content:space-between;gap:10px;align-items:center"><span class="muted" style="font-size:.8rem">${fmtDate(i.date)}</span><button class="btn btn-danger btn-sm" data-act="del" data-coll="inq" data-idx="${ix}">${t("del")}</button></div></div>`).join(""):`<p class="muted">${t("empty_inq")}</p>`}`}
 else if(S.dTab==="payments")body=`<h2>${t("a_payments")}</h2>`+crud("payments",[["invoice",x=>`<span class="mono">${esc(x.inv)}</span>`],["student",x=>{const s=D.students.find(s=>s.id===x.sid);return s?esc(s.name):`<span class="mono">${esc(x.sid||"—")}</span>`}],["details",x=>esc(L(x))],["date",x=>fmtDate(x.date)],["amount",x=>`<span class="num">${money(+x.amt||0)}</span>`],["status",x=>stPill(x.st)]]);
 else if(S.dTab==="admins")body=`<h2>${t("a_admins")}</h2><p class="muted">${t(REAL?"admins_hint_real":"admins_hint")}</p>`+crud("admins",[["name",a=>`<b>${esc(a.name)}</b>`],["email",a=>`<span class="mono">${esc(a.email)}</span>`],...(REAL?[]:[["password",a=>`<span class="mono">${"•".repeat(Math.min(10,(a.password||"").length))}</span>`]])]);
 return dashShell(items,body)};

/* ---------- modals ---------- */
function modal(html){const r=document.getElementById("modalRoot");r.innerHTML=`<div class="modal" data-act="mclose"><div class="box" onclick="event.stopPropagation()"><button class="x" type="button" data-act="mclose" aria-label="${t("close")}">✕</button>${html}</div></div>`}
function closeModal(){document.getElementById("modalRoot").innerHTML=""}
function certDoc(c){const p=prog(c.prog);return `<div class="certdoc"><img src="${logo()}" alt=""><div class="t">International Federation of Beauty Experts</div><div class="s">This is to certify that</div><div class="n">${esc(c.name)}</div><div class="s">has fulfilled all requirements and is hereby awarded</div><div class="p">${p.en} · ${p.ar}</div><div class="seals">${ACCR_KEYS.map(k=>`<img src="${accrLogo(k)}" alt="">`).join("")}</div><div class="foot"><div><b>${c.no}</b>Verify at ${esc((S.data.settings.website||"theifbe.com").replace(/^https?:\/\//,""))}</div><div style="text-align:end"><b>${fmtDate(c.issued)}</b>Date of issue</div></div></div>`}
function applyModal(pid){modal(`<h2 style="font-size:1.3rem;margin-bottom:14px">${t("apply_title")}</h2><form class="form" id="aform">
 <label class="f">${t("program")}<select id="a_prog">${PROGRAMS.map(p=>`<option value="${p.id}" ${p.id===pid?"selected":""}>${L(p)}</option>`).join("")}</select></label>
 <div class="two"><label class="f">${t("name")}<input id="a_name" required></label><label class="f">${t("email")}<input id="a_email" type="email" required></label></div>
 <div class="two"><label class="f">${t("country")}<input id="a_country" required></label><label class="f">${t("experience")}<input id="a_exp" type="number" min="0" max="60" required></label></div>
 <label class="f">${t("specialty")}<input id="a_spec"></label>
 ${(REAL||S.data.settings.hideDemo)?"":`<p class="note">${t("demo_store")}</p>`}<div style="display:flex;gap:10px"><button class="btn btn-gold" type="submit">${t("apply_btn")}</button><button class="btn btn-ghost" type="button" data-act="mclose">${t("cancel")}</button></div></form>`)}
function issueModal(sid){const st=S.data.students.find(x=>x.id===sid);const exp=new Date();exp.setFullYear(exp.getFullYear()+3);
 S.data.certs.push({__tmp:1,no:"",sid:st?.id||"",name:st?.name||"",prog:st?.prog||S.data.programs[0]?.id,office:S.data.offices[0]?.id,issued:TODAY,expires:exp.toISOString().slice(0,10),status:"valid"});
 const i=S.data.certs.length-1;editModal("certs",i);const f=document.getElementById("eform");f.dataset.tmp="1";}
function stuModal(){modal(`<h2 style="font-size:1.3rem;margin-bottom:14px">${t("add_student")}</h2><form class="form" id="sform"><div class="two"><label class="f">${t("name")}<input id="s_name" required></label><label class="f">${t("email")}<input id="s_email" type="email" required></label></div><div class="two"><label class="f">${t("country")}<input id="s_country" required></label><label class="f">${t("program")}<select id="s_prog">${PROGRAMS.map(p=>`<option value="${p.id}">${L(p)}</option>`).join("")}</select></label></div><div style="display:flex;gap:10px"><button class="btn btn-gold" type="submit">${t("add_student")}</button><button class="btn btn-ghost" type="button" data-act="mclose">${t("cancel")}</button></div></form>`)}
function offModal(){modal(`<h2 style="font-size:1.3rem;margin-bottom:14px">${t("add_office")}</h2><form class="form" id="oform"><div class="two"><label class="f">${t("city")} (EN)<input id="o_en" required></label><label class="f">${t("city")} (AR)<input id="o_ar" required dir="rtl"></label></div><div class="two"><label class="f">${t("country")} (EN)<input id="o_cen" required></label><label class="f">${t("country")} (AR)<input id="o_car" required dir="rtl"></label></div><div class="two"><label class="f">${t("region")}<select id="o_reg">${["americas","mena","europe","asia"].map(r=>`<option value="${r}">${t(r)}</option>`).join("")}</select></label><label class="f">${t("type")}<select id="o_type"><option value="reg">${t("regional")}</option><option value="rep">${t("rep")}</option></select></label></div><div style="display:flex;gap:10px"><button class="btn btn-gold" type="submit">${t("add_office")}</button><button class="btn btn-ghost" type="button" data-act="mclose">${t("cancel")}</button></div></form>`)}
const REGXY={americas:[230,150],mena:[510,175],europe:[430,95],asia:[640,140]};
function nextCertNo(pid,date){const y=(date||TODAY).slice(0,4);let no;do{no=`IFBE-${y}-${pid}-${String(1000+Math.floor(Math.random()*9000))}`}while(S.data.certs.some(c=>c.no===no));return no}

/* ---------- render ---------- */
const NAV=["home","about","programs","services","verify","offices","contact"];
function render(){
 const v=(location.hash.slice(1)||"home");const view=V[v]?v:"home";
 document.documentElement.lang=S.lang;document.documentElement.dir=S.lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-t]").forEach(e=>e.textContent=t(e.dataset.t));
 document.getElementById("nav").innerHTML=NAV.map(k=>`<a href="#${k}" class="${view===k?"on":""}">${t("nav_"+k)}</a>`).join("");
 document.getElementById("nav").classList.remove("open");
 document.getElementById("langBtn").textContent=S.lang==="ar"?"English":"عربي";
 const ab=document.getElementById("acctBtn");ab.href=S.user&&S.user.role!=="pending"?"#"+S.user.role:"#login";document.getElementById("acctLbl").textContent=S.user?t("dashboard"):t("login");
 document.getElementById("brandLogo").src=logo();
 if(!S.ready){document.getElementById("app").innerHTML=`<div class="wrap" style="padding-block:120px;text-align:center"><img src="${logo()}" alt="" style="width:90px;opacity:.9"><p class="muted" style="margin-top:14px">${t("loading")}</p></div>`;document.getElementById("footer").hidden=true;return}
 const html=V[view]();if(!html)return;
 document.getElementById("app").innerHTML=html;
 const dash=view==="student"||view==="admin";
 document.getElementById("footer").hidden=dash;
 if(!dash)document.getElementById("footer").innerHTML=`<div class="wrap"><div><div class="brand"><img src="${logo()}" alt="" style="width:52px;height:52px"><span><b>IFBE</b></span></div><p style="margin-top:12px;max-width:40ch;font-size:.9rem">${t("footer_about")}</p><div class="accr-row" style="margin-top:14px">${accrLogos()}</div></div>
 <div><h4>${t("quick")}</h4>${["about","programs","services","offices"].map(k=>`<a href="#${k}">${t("nav_"+k)}</a>`).join("")}</div>
 <div><h4>${t("nav_programs")}</h4>${PROGRAMS.map(p=>`<a href="#programs">${L(p)}</a>`).join("")}</div>
 <div><h4>${t("portals")}</h4><a href="#verify">${t("nav_verify")}</a><a href="#login" data-act="role" data-r="student">${t("student_portal")}</a><a href="#login" data-act="role" data-r="admin">${t("admin_portal")}</a><a href="#contact">${t("nav_contact")}</a></div></div>
 <div class="wrap base"><span>© ${TODAY.slice(0,4)} ${t("fullName")}. ${t("rights")}</span><span dir="ltr">${esc([S.data.settings.email,S.data.settings.phone,S.data.settings.website].filter(Boolean).join(" · "))}</span><span>${["facebook","instagram","linkedin","tiktok"].filter(k=>S.data.settings[k]).map(k=>`<a href="${esc(/^https?:/.test(S.data.settings[k])?S.data.settings[k]:"https://"+S.data.settings[k])}" target="_blank" rel="noopener" style="display:inline;margin-inline-end:12px">${k[0].toUpperCase()+k.slice(1)}</a>`).join("")}</span></div>`;
 if(view==="home")drawGlobe();
 window.scrollTo(0,0);
}

/* hero meridian globe canvas */
let raf;
function drawGlobe(){
 cancelAnimationFrame(raf);const c=document.getElementById("globe");if(!c)return;const x=c.getContext("2d");
 const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;let rot=0;
 function frame(){const w=c.width=c.offsetWidth*devicePixelRatio,h=c.height=c.offsetHeight*devicePixelRatio;x.clearRect(0,0,w,h);
  const R=Math.max(w,h)*.55,cx=S.lang==="ar"?w*.12:w*.88,cy=h*.55;x.lineWidth=1*devicePixelRatio;
  x.strokeStyle="rgba(231,190,92,.22)";
  for(let i=-60;i<=60;i+=20){const yy=cy-R*Math.sin(i*Math.PI/180),rr=R*Math.cos(i*Math.PI/180);x.beginPath();x.ellipse(cx,yy,rr,rr*.18,0,0,Math.PI*2);x.stroke()}
  x.strokeStyle="rgba(140,175,255,.18)";
  for(let m=0;m<180;m+=20){const a=(m+rot)*Math.PI/180;x.beginPath();x.ellipse(cx,cy,Math.abs(R*Math.cos(a)),R,0,0,Math.PI*2);x.stroke()}
  x.strokeStyle="rgba(231,190,92,.35)";x.beginPath();x.arc(cx,cy,R,0,Math.PI*2);x.stroke();
  if(!reduce){rot=(rot+.05)%360;raf=requestAnimationFrame(frame)}}
 frame()}

/* ---------- events ---------- */
document.getElementById("langBtn").onclick=()=>{S.lang=S.lang==="ar"?"en":"ar";save();render()};
document.getElementById("burger").onclick=()=>document.getElementById("nav").classList.toggle("open");
addEventListener("hashchange",()=>{closeModal();const v=location.hash.slice(1);if(v!=="student"&&v!=="admin"){S.q=""}render()});
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-act]");if(!b)return;const a=b.dataset.act,D=S.data;
 if(a==="mclose"){if(e.target===b||b.tagName==="BUTTON"){dropTmp();closeModal()}return}
 if(a==="apply")applyModal(b.dataset.p);
 if(a==="sample"){document.getElementById("vno").value=b.dataset.no;document.getElementById("vform").requestSubmit()}
 if(a==="showcert"){const c=D.certs.find(x=>x.no===b.dataset.no)||(S.vfound&&S.vfound.no===b.dataset.no?S.vfound:null);if(c)modal(certDoc(c))}
 if(a==="gover"){S.lastVerify=b.dataset.no}
 if(a==="offf"){S.offFilter=b.dataset.r;render()}
 if(a==="contactoff"){S.prefOffice=+b.dataset.o}
 if(a==="role"){S.loginRole=b.dataset.r;if(location.hash==="#login")render()}
 if(a==="lmode"){S.loginMode=b.dataset.m;render()}
 if(a==="forgot"){const em=document.getElementById("l_email").value.trim(),err=document.getElementById("lerr"),ok=document.getElementById("lok");err.hidden=ok.hidden=true;
  if(!em){err.textContent=t("enter_email");err.hidden=false;return}
  sb.auth.resetPasswordForEmail(em,{redirectTo:location.origin+location.pathname}).then(({error})=>{if(error){err.textContent=error.message;err.hidden=false}else{ok.textContent=t("reset_sent");ok.hidden=false}})}
 if(a==="dtab"){S.dTab=b.dataset.k;S.q="";render()}
 if(a==="logout"){if(REAL){sb.auth.signOut().finally(()=>{S.user=null;clearPrivate();snap();location.hash="home";render()})}else{S.user=null;save();location.hash="home"}}
 if(a==="issuefor")issueModal(b.dataset.id);
 if(a==="edit")editModal(b.dataset.coll,+b.dataset.idx);
 if(a==="del"){const coll=b.dataset.coll;if(coll==="admins"&&D.admins.length<=1){toast(t("last_admin"));return}
  if(!b.dataset.armed){b.dataset.armed="1";b.textContent=t("confirm_q");setTimeout(()=>{if(b.isConnected){delete b.dataset.armed;b.textContent=t("del")}},3000);return}
  D[coll].splice(+b.dataset.idx,1);save();render();toast(t("deleted"))}
 if(a==="cg"){S.cg=+b.dataset.i;render()}
 if(a==="ctreset"){CGROUPS[+b.dataset.i][1].forEach(k=>{delete D.content.en[k];delete D.content.ar[k]});save();render();toast(t("reset_ok"))}
 if(a==="resetlogo"){D.settings.logo="";save();render()}
 if(a==="resetaccr"){D.settings["accr_"+b.dataset.k]="";save();render()}
 if(a==="copybk"){const ta=document.getElementById("bk_out");const done=()=>toast(t("copied"));if(navigator.clipboard?.writeText)navigator.clipboard.writeText(ta.value).then(done,()=>{ta.select()});else ta.select()}
 if(a==="import"){try{const o=JSON.parse(document.getElementById("bk_in").value);if(!o||!Array.isArray(o.certs))throw 0;S.data=o;migrate();save();render();toast(t("imported"))}catch(err){toast(t("bad_json"))}}
 if(a==="revoke"||a==="restore"){const c=D.certs.find(x=>x.no===b.dataset.no);c.status=a==="revoke"?"revoked":"valid";save();render()}
 if(a==="appok"||a==="appno"){const ap=D.apps.find(x=>x.id===b.dataset.id);ap.status=a==="appok"?"approved":"rejected";
  if(a==="appok")D.students.push({id:uid("S-"),name:ap.name,email:ap.email,password:REAL?undefined:"123456",country:ap.country,prog:ap.prog,status:"active",progress:0,joined:TODAY});save();render()}
 if(a==="reset"){if(!b.dataset.armed){b.dataset.armed="1";b.textContent=t("confirm_q");setTimeout(()=>{if(b.isConnected){delete b.dataset.armed;b.textContent=t("reset_demo")}},3000);return}S.data=structuredClone(SEED);save();toast(t("reset_ok"));render()}
});
document.addEventListener("input",e=>{if(e.target.id==="q"){S.q=e.target.value;const pos=e.target.selectionStart;render();const q=document.getElementById("q");if(q){q.focus();q.setSelectionRange(pos,pos)}}});
document.addEventListener("submit",e=>{
 e.preventDefault();const f=e.target,v=id=>document.getElementById(id).value.trim(),D=S.data;
 if(f.id==="vform"){S.lastVerify=v("vno");const box=document.getElementById("vres");
  if(!REAL){box.innerHTML=certResult(S.lastVerify);return}
  if(!S.lastVerify)return;box.innerHTML=`<p class="muted">${t("checking")}</p>`;
  sb.rpc("verify_certificate",{p_no:S.lastVerify}).then(({data,error})=>{if(error){box.innerHTML=`<div class="cert-result"><div class="bar warn">${t("net_err")}</div></div>`;return}S.vfound=data||null;box.innerHTML=certResult(S.lastVerify,S.vfound)})}
 if(f.id==="cform"){D.inq.push({id:uid("Q-"),name:v("c_name"),email:v("c_email"),phone:v("c_phone"),office:+v("c_office"),subj:v("c_subj"),msg:v("c_msg"),date:TODAY,read:false});
  if(REAL){const btn=f.querySelector("[type=submit]");btn.disabled=true;sync().then(ok=>{btn.disabled=false;if(ok){f.reset();toast(t("sent_real"))}else D.inq.pop()})}else{save();f.reset();toast(t("sent_ok"))}}
 if(f.id==="aform"){D.apps.push({id:uid("A-"),name:v("a_name"),email:v("a_email"),country:v("a_country"),prog:v("a_prog"),exp:+v("a_exp"),spec:v("a_spec"),date:TODAY,status:"new"});
  if(REAL){const btn=f.querySelector("[type=submit]");btn.disabled=true;sync().then(ok=>{btn.disabled=false;if(ok){closeModal();toast(t("applied_real"));if(location.hash==="#admin")render()}else D.apps.pop()})}else{save();closeModal();toast(t("applied_ok"));if(location.hash==="#admin")render()}}
 if(f.id==="lform"&&REAL){const em=v("l_email"),pw=document.getElementById("l_pass").value,err=document.getElementById("lerr"),ok=document.getElementById("lok"),btn=f.querySelector("[type=submit]");err.hidden=ok.hidden=true;
  const fail=m=>{err.textContent=m;err.hidden=false;btn.disabled=false};btn.disabled=true;
  if(f.dataset.mode==="signup"){if(pw!==document.getElementById("l_pass2").value)return fail(t("pw_mismatch"));
   sb.auth.signUp({email:em,password:pw,options:{emailRedirectTo:location.origin+location.pathname}}).then(async({data,error})=>{if(error)return fail(error.message);
    if(data.session){await setSession(data.session);snap();location.hash=S.user?.role==="admin"?"admin":S.user?.role==="student"?"student":"login";render()}else{btn.disabled=false;ok.textContent=t("check_email");ok.hidden=false}});return}
  sb.auth.signInWithPassword({email:em,password:pw}).then(async({data,error})=>{if(error)return fail(t("bad_login_real"));
   await setSession(data.session);snap();S.dTab="overview";const r=S.user?.role;if(r==="admin")location.hash="admin";else if(r==="student")location.hash="student";render()});return}
 if(f.id==="rform"){sb.auth.updateUser({password:document.getElementById("r_pass").value}).then(({error})=>{if(error)toast(error.message);else{closeModal();toast(t("saved"))}});return}
 if(f.id==="lform"){const em=v("l_email").toLowerCase(),pw=document.getElementById("l_pass").value;
  const ad=D.admins.find(x=>(x.email||"").toLowerCase()===em&&x.password===pw),st=D.students.find(x=>(x.email||"").toLowerCase()===em&&(x.password||"123456")===pw&&x.status!=="suspended");
  if(ad&&(S.loginRole==="admin"||!st)){S.user={role:"admin",email:em,name:ad.name,id:"ADM"};S.dTab="overview";save();location.hash="admin"}
  else if(st){S.user={role:"student",email:em,name:st.name,id:st.id};S.dTab="overview";save();location.hash="student"}
  else document.getElementById("lerr").hidden=false}
 if(f.id==="eform"){delete f.dataset.tmp;const tmp=S.data.certs.findIndex(c=>c.__tmp);if(tmp>=0){delete S.data.certs[tmp].__tmp;if(f.dataset.coll==="certs"&&+f.dataset.idx===tmp){f.dataset.idx="-1";S.data.certs.splice(tmp,1)}}saveEdit(f);if(f.dataset.coll==="certs"&&+f.dataset.idx<0){S.dTab="certs";render()}}
 if(f.id==="ctform"){f.querySelectorAll("textarea[data-k]").forEach(ta=>{const k=ta.dataset.k,l=ta.dataset.l,val=ta.value;if(val===I18N[l][k])delete D.content[l][k];else D.content[l][k]=val});save();render();toast(t("saved"))}
 if(f.id==="stform"){Object.keys(D.settings).forEach(k=>{const el=document.getElementById("st_"+k);if(el&&k!=="logo"&&!k.startsWith("accr_"))D.settings[k]=el.value.trim()});const dm=document.getElementById("st_demo");if(dm)D.settings.hideDemo=!dm.checked;save();render();toast(t("saved"))}
 if(f.id==="pform"){const me=stuSelf();me.name=v("p_name");me.country=v("p_country");S.user.name=me.name;
  if(REAL){sb.rpc("update_my_profile",{p_name:me.name,p_country:me.country}).then(({error})=>{if(error)toast(t("save_fail"));else{snap();toast(t("saved"));render()}})}else{save();toast(t("saved"));render()}}
});
function dropTmp(){const i=S.data.certs.findIndex(c=>c.__tmp);if(i>=0)S.data.certs.splice(i,1)}
document.addEventListener("change",e=>{if(!e.target.classList.contains("logoUp"))return;const target=e.target.dataset.target;const file=e.target.files[0];if(!file)return;const rd=new FileReader();rd.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement("canvas"),sz=360,r=Math.min(sz/im.width,sz/im.height,1);c.width=Math.round(im.width*r);c.height=Math.round(im.height*r);c.getContext("2d").drawImage(im,0,0,c.width,c.height);let url;try{url=c.toDataURL("image/webp",.85)}catch(err){url=rd.result}if(!url.startsWith("data:image/webp"))url=c.toDataURL("image/png");S.data.settings[target]=url;save();render();toast(t("saved"))};im.src=rd.result};rd.readAsDataURL(file)});
boot();

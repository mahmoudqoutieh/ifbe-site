/*
  IFBE — إعدادات الربط مع قاعدة البيانات (Supabase)
  ضع هنا قيمتي Project URL و anon public key من:
  Supabase → Project Settings → API

  إذا تُركت القيم فارغة يعمل الموقع في "الوضع التجريبي"
  (البيانات تُحفظ في متصفح الزائر فقط).
  مفتاح anon آمن للنشر العلني لأن الحماية تتم عبر سياسات RLS في قاعدة البيانات.
*/
window.IFBE_CONFIG = {
  supabaseUrl: "",
  supabaseAnonKey: ""
};

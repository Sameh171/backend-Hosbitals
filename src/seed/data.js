// Sample seed data for Teachers-Care
export const entities = [
  // Doctors
  {
    type: 'doctor',
    name_ar: 'د. أحمد محمد الخطيب',
    specialties: ['جراحة القلب', 'أمراض القلب'],
    services: ['قسطرة القلب', 'جراحة الشرايين', 'تخطيط القلب'],
    discount: { percent: 20, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف'],
    address: {
      city: 'الرياض',
      district: 'العليا',
      full: 'شارع العليا، مبنى برج المملكة الطبي، الدور الثالث'
    },
    location: { lat: 24.7136, lng: 46.6753 },
    phones: ['+966112345678', '+966501234567'],
    hours: [
      { day: 'الأحد', open: '09:00', close: '17:00' },
      { day: 'الإثنين', open: '09:00', close: '17:00' },
      { day: 'الثلاثاء', open: '09:00', close: '17:00' },
      { day: 'الأربعاء', open: '09:00', close: '17:00' },
      { day: 'الخميس', open: '09:00', close: '13:00' }
    ],
    rating: 4.8,
    reviews_count: 156,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Dr.+Ahmed'],
    tags: ['استشاري', 'جراحة', 'قلب']
  },
  {
    type: 'doctor',
    name_ar: 'د. فاطمة حسن العمري',
    specialties: ['طب الأطفال', 'حديثي الولادة'],
    services: ['فحص دوري', 'تطعيمات', 'متابعة النمو'],
    discount: { percent: 15, valid_to: new Date('2026-06-30') },
    insurances: ['بوبا', 'التعاونية', 'سلامة'],
    address: {
      city: 'جدة',
      district: 'الزهراء',
      full: 'طريق الأمير سلطان، مجمع الزهراء الطبي'
    },
    location: { lat: 21.5433, lng: 39.1728 },
    phones: ['+966122345678', '+966502345678'],
    hours: [
      { day: 'السبت', open: '10:00', close: '18:00' },
      { day: 'الأحد', open: '10:00', close: '18:00' },
      { day: 'الإثنين', open: '10:00', close: '18:00' },
      { day: 'الثلاثاء', open: '10:00', close: '18:00' },
      { day: 'الأربعاء', open: '10:00', close: '14:00' }
    ],
    rating: 4.9,
    reviews_count: 203,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Dr.+Fatima'],
    tags: ['استشارية', 'أطفال', 'تطعيم']
  },
  {
    type: 'doctor',
    name_ar: 'د. خالد عبدالله السالم',
    specialties: ['جراحة العظام', 'إصابات الملاعب'],
    services: ['جراحة المفاصل', 'علاج الكسور', 'العلاج الطبيعي'],
    discount: { percent: 25, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'الدمام',
      district: 'الفيصلية',
      full: 'شارع الملك خالد، مستشفى الفيصلية الخاص'
    },
    location: { lat: 26.4207, lng: 50.0888 },
    phones: ['+966133456789', '+966503456789'],
    hours: [
      { day: 'الأحد', open: '08:00', close: '16:00' },
      { day: 'الإثنين', open: '08:00', close: '16:00' },
      { day: 'الثلاثاء', open: '08:00', close: '16:00' },
      { day: 'الأربعاء', open: '08:00', close: '16:00' },
      { day: 'الخميس', open: '08:00', close: '12:00' }
    ],
    rating: 4.7,
    reviews_count: 142,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Dr.+Khalid'],
    tags: ['استشاري', 'عظام', 'رياضة']
  },
  {
    type: 'doctor',
    name_ar: 'د. نورة سعيد القحطاني',
    specialties: ['الجلدية والتجميل', 'الليزر الطبي'],
    services: ['علاج حب الشباب', 'إزالة الشعر بالليزر', 'تجميل البشرة'],
    discount: { percent: 30, valid_to: new Date('2026-03-31') },
    insurances: ['بوبا', 'التعاونية'],
    address: {
      city: 'الرياض',
      district: 'النخيل',
      full: 'طريق الملك فهد، عيادات النخيل للجلدية'
    },
    location: { lat: 24.7743, lng: 46.7385 },
    phones: ['+966114567890', '+966504567890'],
    hours: [
      { day: 'السبت', open: '14:00', close: '22:00' },
      { day: 'الأحد', open: '14:00', close: '22:00' },
      { day: 'الإثنين', open: '14:00', close: '22:00' },
      { day: 'الثلاثاء', open: '14:00', close: '22:00' },
      { day: 'الأربعاء', open: '14:00', close: '22:00' }
    ],
    rating: 4.6,
    reviews_count: 98,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Dr.+Noura'],
    tags: ['استشارية', 'جلدية', 'تجميل', 'ليزر']
  },
  {
    type: 'doctor',
    name_ar: 'د. عمر يوسف المالكي',
    specialties: ['طب الأسنان', 'تقويم الأسنان'],
    services: ['تنظيف الأسنان', 'حشوات', 'تركيبات', 'تقويم'],
    discount: { percent: 10, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'سلامة'],
    address: {
      city: 'جدة',
      district: 'الروضة',
      full: 'شارع فلسطين، عيادات الروضة لطب الأسنان'
    },
    location: { lat: 21.5810, lng: 39.1653 },
    phones: ['+966125678901', '+966505678901'],
    hours: [
      { day: 'السبت', open: '16:00', close: '23:00' },
      { day: 'الأحد', open: '16:00', close: '23:00' },
      { day: 'الإثنين', open: '16:00', close: '23:00' },
      { day: 'الثلاثاء', open: '16:00', close: '23:00' },
      { day: 'الأربعاء', open: '16:00', close: '23:00' }
    ],
    rating: 4.5,
    reviews_count: 87,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Dr.+Omar'],
    tags: ['أسنان', 'تقويم', 'تجميل']
  },

  // Pharmacies
  {
    type: 'pharmacy',
    name_ar: 'صيدلية النهدي',
    specialties: [],
    services: ['أدوية عامة', 'مستلزمات طبية', 'منتجات تجميل', 'فيتامينات'],
    discount: { percent: 15, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'السليمانية',
      full: 'شارع العروبة، مقابل مستشفى السليمانية'
    },
    location: { lat: 24.6877, lng: 46.6859 },
    phones: ['+966116789012', '+966506789012'],
    hours: [
      { day: 'السبت', open: '08:00', close: '00:00' },
      { day: 'الأحد', open: '08:00', close: '00:00' },
      { day: 'الإثنين', open: '08:00', close: '00:00' },
      { day: 'الثلاثاء', open: '08:00', close: '00:00' },
      { day: 'الأربعاء', open: '08:00', close: '00:00' },
      { day: 'الخميس', open: '08:00', close: '00:00' },
      { day: 'الجمعة', open: '14:00', close: '00:00' }
    ],
    rating: 4.4,
    reviews_count: 321,
    images: ['https://via.placeholder.com/800x600/10B981/FFFFFF?text=Nahdi+Pharmacy'],
    tags: ['صيدلية', '24 ساعة', 'توصيل']
  },
  {
    type: 'pharmacy',
    name_ar: 'صيدلية الدواء',
    specialties: [],
    services: ['أدوية', 'مستلزمات طبية', 'منتجات صحية', 'توصيل منزلي'],
    discount: { percent: 20, valid_to: new Date('2026-06-30') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف'],
    address: {
      city: 'جدة',
      district: 'الحمراء',
      full: 'طريق المدينة، مركز الحمراء التجاري'
    },
    location: { lat: 21.6342, lng: 39.1367 },
    phones: ['+966127890123', '+966507890123'],
    hours: [
      { day: 'السبت', open: '09:00', close: '23:00' },
      { day: 'الأحد', open: '09:00', close: '23:00' },
      { day: 'الإثنين', open: '09:00', close: '23:00' },
      { day: 'الثلاثاء', open: '09:00', close: '23:00' },
      { day: 'الأربعاء', open: '09:00', close: '23:00' },
      { day: 'الخميس', open: '09:00', close: '23:00' },
      { day: 'الجمعة', open: '15:00', close: '23:00' }
    ],
    rating: 4.3,
    reviews_count: 267,
    images: ['https://via.placeholder.com/800x600/10B981/FFFFFF?text=Al+Dawaa+Pharmacy'],
    tags: ['صيدلية', 'توصيل', 'خصومات']
  },
  {
    type: 'pharmacy',
    name_ar: 'صيدلية صيدليات',
    specialties: [],
    services: ['أدوية', 'عناية شخصية', 'أمومة وطفولة', 'استشارات صيدلانية'],
    discount: { percent: 10, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'سلامة'],
    address: {
      city: 'الدمام',
      district: 'الشاطئ',
      full: 'كورنيش الدمام، بجوار مستشفى الموسى'
    },
    location: { lat: 26.4301, lng: 50.1008 },
    phones: ['+966138901234', '+966508901234'],
    hours: [
      { day: 'السبت', open: '08:00', close: '22:00' },
      { day: 'الأحد', open: '08:00', close: '22:00' },
      { day: 'الإثنين', open: '08:00', close: '22:00' },
      { day: 'الثلاثاء', open: '08:00', close: '22:00' },
      { day: 'الأربعاء', open: '08:00', close: '22:00' },
      { day: 'الخميس', open: '08:00', close: '22:00' },
      { day: 'الجمعة', open: '14:00', close: '22:00' }
    ],
    rating: 4.2,
    reviews_count: 189,
    images: ['https://via.placeholder.com/800x600/10B981/FFFFFF?text=Saidliyat+Pharmacy'],
    tags: ['صيدلية', 'استشارات', 'عناية']
  },
  {
    type: 'pharmacy',
    name_ar: 'صيدلية رعاية',
    specialties: [],
    services: ['أدوية مزمنة', 'أجهزة طبية', 'منتجات طبيعية', 'فحوصات سريعة'],
    discount: { percent: 25, valid_to: new Date('2026-09-30') },
    insurances: ['التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'الملقا',
      full: 'طريق الملك فهد، مجمع الملقا الطبي'
    },
    location: { lat: 24.7764, lng: 46.6401 },
    phones: ['+966119012345', '+966509012345'],
    hours: [
      { day: 'السبت', open: '07:00', close: '23:00' },
      { day: 'الأحد', open: '07:00', close: '23:00' },
      { day: 'الإثنين', open: '07:00', close: '23:00' },
      { day: 'الثلاثاء', open: '07:00', close: '23:00' },
      { day: 'الأربعاء', open: '07:00', close: '23:00' },
      { day: 'الخميس', open: '07:00', close: '23:00' },
      { day: 'الجمعة', open: '14:00', close: '23:00' }
    ],
    rating: 4.6,
    reviews_count: 154,
    images: ['https://via.placeholder.com/800x600/10B981/FFFFFF?text=Reaya+Pharmacy'],
    tags: ['صيدلية', 'أمراض مزمنة', 'فحوصات']
  },
  {
    type: 'pharmacy',
    name_ar: 'صيدلية الشفاء',
    specialties: [],
    services: ['أدوية', 'منتجات عضوية', 'أعشاب طبية', 'قياس ضغط وسكر'],
    discount: { percent: 15, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية'],
    address: {
      city: 'جدة',
      district: 'الصفا',
      full: 'شارع الأمير عبدالله الفيصل، مقابل مول العرب'
    },
    location: { lat: 21.5755, lng: 39.2233 },
    phones: ['+966120123456', '+966500123456'],
    hours: [
      { day: 'السبت', open: '09:00', close: '00:00' },
      { day: 'الأحد', open: '09:00', close: '00:00' },
      { day: 'الإثنين', open: '09:00', close: '00:00' },
      { day: 'الثلاثاء', open: '09:00', close: '00:00' },
      { day: 'الأربعاء', open: '09:00', close: '00:00' },
      { day: 'الخميس', open: '09:00', close: '00:00' },
      { day: 'الجمعة', open: '15:00', close: '00:00' }
    ],
    rating: 4.4,
    reviews_count: 213,
    images: ['https://via.placeholder.com/800x600/10B981/FFFFFF?text=Al+Shifa+Pharmacy'],
    tags: ['صيدلية', 'أعشاب', 'عضوي']
  },

  // Hospitals
  {
    type: 'hospital',
    name_ar: 'مستشفى الملك فيصل التخصصي',
    specialties: ['جراحة القلب', 'زراعة الأعضاء', 'الأورام', 'العناية المركزة'],
    services: ['طوارئ 24 ساعة', 'عمليات جراحية', 'أشعة', 'مختبر', 'صيدلية'],
    discount: { percent: 0, valid_to: null },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'السليمانية',
      full: 'طريق الملك فهد، حي السليمانية'
    },
    location: { lat: 24.6926, lng: 46.6871 },
    phones: ['+966112881111', '+966112882222'],
    hours: [
      { day: 'يومياً', open: '00:00', close: '23:59' }
    ],
    rating: 4.9,
    reviews_count: 842,
    images: ['https://via.placeholder.com/800x600/E11D48/FFFFFF?text=KFSH+Hospital'],
    tags: ['مستشفى', 'تخصصي', 'طوارئ', '24 ساعة']
  },
  {
    type: 'hospital',
    name_ar: 'مستشفى الدكتور سليمان الحبيب',
    specialties: ['جميع التخصصات الطبية', 'الجراحة', 'الولادة', 'القلب'],
    services: ['طوارئ', 'عمليات', 'أشعة متقدمة', 'مختبر', 'عيادات خارجية'],
    discount: { percent: 10, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'العليا',
      full: 'طريق العروبة، حي العليا'
    },
    location: { lat: 24.7183, lng: 46.6753 },
    phones: ['+966920011111', '+966112222222'],
    hours: [
      { day: 'يومياً', open: '00:00', close: '23:59' }
    ],
    rating: 4.8,
    reviews_count: 1203,
    images: ['https://via.placeholder.com/800x600/E11D48/FFFFFF?text=Dr.+Sulaiman+Al+Habib'],
    tags: ['مستشفى', 'خاص', 'طوارئ', 'شامل']
  },
  {
    type: 'hospital',
    name_ar: 'مستشفى المواساة',
    specialties: ['جراحة عامة', 'باطنية', 'نساء وولادة', 'أطفال'],
    services: ['طوارئ', 'عمليات', 'أشعة', 'مختبر', 'عناية مركزة'],
    discount: { percent: 15, valid_to: new Date('2026-06-30') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف'],
    address: {
      city: 'جدة',
      district: 'الزهراء',
      full: 'شارع الأمير سلطان، حي الزهراء'
    },
    location: { lat: 21.5454, lng: 39.1697 },
    phones: ['+966126067777', '+966126068888'],
    hours: [
      { day: 'يومياً', open: '00:00', close: '23:59' }
    ],
    rating: 4.6,
    reviews_count: 567,
    images: ['https://via.placeholder.com/800x600/E11D48/FFFFFF?text=Al+Mawasah+Hospital'],
    tags: ['مستشفى', 'عام', 'ولادة']
  },
  {
    type: 'hospital',
    name_ar: 'مستشفى الموسى التخصصي',
    specialties: ['عيون', 'أنف وأذن وحنجرة', 'جلدية', 'عظام'],
    services: ['عيادات متخصصة', 'عمليات يومية', 'أشعة', 'مختبر'],
    discount: { percent: 20, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'سلامة'],
    address: {
      city: 'الدمام',
      district: 'الشاطئ',
      full: 'كورنيش الدمام، بجوار برج التجارة'
    },
    location: { lat: 26.4285, lng: 50.0975 },
    phones: ['+966138333333', '+966138444444'],
    hours: [
      { day: 'السبت', open: '08:00', close: '20:00' },
      { day: 'الأحد', open: '08:00', close: '20:00' },
      { day: 'الإثنين', open: '08:00', close: '20:00' },
      { day: 'الثلاثاء', open: '08:00', close: '20:00' },
      { day: 'الأربعاء', open: '08:00', close: '20:00' },
      { day: 'الخميس', open: '08:00', close: '14:00' }
    ],
    rating: 4.7,
    reviews_count: 389,
    images: ['https://via.placeholder.com/800x600/E11D48/FFFFFF?text=Al+Moosa+Hospital'],
    tags: ['مستشفى', 'تخصصي', 'عيون']
  },
  {
    type: 'hospital',
    name_ar: 'مستشفى السعودي الألماني',
    specialties: ['جراحة القلب', 'عظام', 'أورام', 'جراحة تجميلية'],
    services: ['طوارئ', 'عمليات جراحية', 'أشعة 3D', 'مختبر', 'صيدلية'],
    discount: { percent: 12, valid_to: new Date('2026-09-30') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'جدة',
      district: 'الحمراء',
      full: 'طريق المدينة المنورة، حي الحمراء'
    },
    location: { lat: 21.6289, lng: 39.1394 },
    phones: ['+966126659000', '+966126659111'],
    hours: [
      { day: 'يومياً', open: '00:00', close: '23:59' }
    ],
    rating: 4.7,
    reviews_count: 729,
    images: ['https://via.placeholder.com/800x600/E11D48/FFFFFF?text=Saudi+German+Hospital'],
    tags: ['مستشفى', 'ألماني', 'متقدم']
  },

  // Labs
  {
    type: 'lab',
    name_ar: 'مختبر البرج الطبي',
    specialties: [],
    services: ['تحاليل شاملة', 'فحص كورونا PCR', 'فحوصات هرمونات', 'تحليل دم شامل'],
    discount: { percent: 30, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'الملز',
      full: 'شارع الإمام عبدالله بن سعود، حي الملز'
    },
    location: { lat: 24.6588, lng: 46.7263 },
    phones: ['+966920000911', '+966112223344'],
    hours: [
      { day: 'السبت', open: '07:00', close: '22:00' },
      { day: 'الأحد', open: '07:00', close: '22:00' },
      { day: 'الإثنين', open: '07:00', close: '22:00' },
      { day: 'الثلاثاء', open: '07:00', close: '22:00' },
      { day: 'الأربعاء', open: '07:00', close: '22:00' },
      { day: 'الخميس', open: '07:00', close: '22:00' },
      { day: 'الجمعة', open: '14:00', close: '22:00' }
    ],
    rating: 4.5,
    reviews_count: 456,
    images: ['https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Al+Borg+Lab'],
    tags: ['مختبر', 'تحاليل', 'كورونا', 'سريع']
  },
  {
    type: 'lab',
    name_ar: 'مختبر المختبر',
    specialties: [],
    services: ['تحاليل طبية', 'فحص زواج', 'تحاليل جرثومية', 'فحوصات وراثية'],
    discount: { percent: 25, valid_to: new Date('2026-06-30') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف'],
    address: {
      city: 'جدة',
      district: 'الروضة',
      full: 'شارع فلسطين، مركز الروضة الطبي'
    },
    location: { lat: 21.5698, lng: 39.1571 },
    phones: ['+966920005544', '+966125556677'],
    hours: [
      { day: 'السبت', open: '07:00', close: '23:00' },
      { day: 'الأحد', open: '07:00', close: '23:00' },
      { day: 'الإثنين', open: '07:00', close: '23:00' },
      { day: 'الثلاثاء', open: '07:00', close: '23:00' },
      { day: 'الأربعاء', open: '07:00', close: '23:00' },
      { day: 'الخميس', open: '07:00', close: '23:00' },
      { day: 'الجمعة', open: '14:00', close: '23:00' }
    ],
    rating: 4.4,
    reviews_count: 321,
    images: ['https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Al+Mokhtabar+Lab'],
    tags: ['مختبر', 'فحص زواج', 'وراثة']
  },
  {
    type: 'lab',
    name_ar: 'مختبرات الأمانة الطبية',
    specialties: [],
    services: ['تحاليل شاملة', 'فحص فيتامينات', 'تحليل أنيميا', 'فحوصات كلى'],
    discount: { percent: 20, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'سلامة'],
    address: {
      city: 'الدمام',
      district: 'الفيصلية',
      full: 'شارع الملك سعود، مجمع الفيصلية'
    },
    location: { lat: 26.4374, lng: 50.0971 },
    phones: ['+966138887777', '+966138889999'],
    hours: [
      { day: 'السبت', open: '06:00', close: '21:00' },
      { day: 'الأحد', open: '06:00', close: '21:00' },
      { day: 'الإثنين', open: '06:00', close: '21:00' },
      { day: 'الثلاثاء', open: '06:00', close: '21:00' },
      { day: 'الأربعاء', open: '06:00', close: '21:00' },
      { day: 'الخميس', open: '06:00', close: '21:00' },
      { day: 'الجمعة', open: '15:00', close: '21:00' }
    ],
    rating: 4.3,
    reviews_count: 287,
    images: ['https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Al+Amana+Lab'],
    tags: ['مختبر', 'فيتامينات', 'دقيق']
  },
  {
    type: 'lab',
    name_ar: 'مختبر الدقة',
    specialties: [],
    services: ['تحاليل هرمونات', 'فحص حساسية', 'تحليل دم', 'فحص سكر تراكمي'],
    discount: { percent: 35, valid_to: new Date('2026-03-31') },
    insurances: ['التعاونية', 'ميد غلف', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'النخيل',
      full: 'طريق الملك عبدالله، مركز النخيل الطبي'
    },
    location: { lat: 24.7654, lng: 46.7198 },
    phones: ['+966114445566', '+966505556677'],
    hours: [
      { day: 'السبت', open: '07:00', close: '20:00' },
      { day: 'الأحد', open: '07:00', close: '20:00' },
      { day: 'الإثنين', open: '07:00', close: '20:00' },
      { day: 'الثلاثاء', open: '07:00', close: '20:00' },
      { day: 'الأربعاء', open: '07:00', close: '20:00' },
      { day: 'الخميس', open: '07:00', close: '14:00' }
    ],
    rating: 4.6,
    reviews_count: 198,
    images: ['https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Al+Deqa+Lab'],
    tags: ['مختبر', 'هرمونات', 'حساسية']
  },
  {
    type: 'lab',
    name_ar: 'مختبر قمة الطبي',
    specialties: [],
    services: ['فحوصات شاملة', 'تحليل سرطان', 'فحص كبد', 'تحاليل بكتيرية'],
    discount: { percent: 15, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية'],
    address: {
      city: 'جدة',
      district: 'الصفا',
      full: 'شارع الأمير محمد بن عبدالعزيز، مجمع الصفا'
    },
    location: { lat: 21.5623, lng: 39.2087 },
    phones: ['+966126667788', '+966507778899'],
    hours: [
      { day: 'السبت', open: '08:00', close: '22:00' },
      { day: 'الأحد', open: '08:00', close: '22:00' },
      { day: 'الإثنين', open: '08:00', close: '22:00' },
      { day: 'الثلاثاء', open: '08:00', close: '22:00' },
      { day: 'الأربعاء', open: '08:00', close: '22:00' },
      { day: 'الخميس', open: '08:00', close: '22:00' },
      { day: 'الجمعة', open: '15:00', close: '22:00' }
    ],
    rating: 4.5,
    reviews_count: 243,
    images: ['https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Qemma+Lab'],
    tags: ['مختبر', 'شامل', 'متقدم']
  },

  // Clinics
  {
    type: 'clinic',
    name_ar: 'عيادات الرعاية الأولية',
    specialties: ['طب عام', 'باطنية', 'أطفال'],
    services: ['كشف طبي', 'فحص دوري', 'تطعيمات', 'وصفات طبية'],
    discount: { percent: 15, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'الربوة',
      full: 'شارع عمر بن الخطاب، حي الربوة'
    },
    location: { lat: 24.7453, lng: 46.6289 },
    phones: ['+966118889999', '+966508889999'],
    hours: [
      { day: 'السبت', open: '08:00', close: '22:00' },
      { day: 'الأحد', open: '08:00', close: '22:00' },
      { day: 'الإثنين', open: '08:00', close: '22:00' },
      { day: 'الثلاثاء', open: '08:00', close: '22:00' },
      { day: 'الأربعاء', open: '08:00', close: '22:00' }
    ],
    rating: 4.3,
    reviews_count: 178,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Primary+Care+Clinic'],
    tags: ['عيادة', 'طب عام', 'تطعيم']
  },
  {
    type: 'clinic',
    name_ar: 'عيادة الأسرة',
    specialties: ['طب أسرة', 'نساء وولادة', 'أطفال'],
    services: ['كشف نسائي', 'متابعة حمل', 'تطعيم أطفال', 'استشارات'],
    discount: { percent: 20, valid_to: new Date('2026-06-30') },
    insurances: ['بوبا', 'التعاونية'],
    address: {
      city: 'جدة',
      district: 'البوادي',
      full: 'شارع حراء، حي البوادي'
    },
    location: { lat: 21.6128, lng: 39.1543 },
    phones: ['+966127776655', '+966509998877'],
    hours: [
      { day: 'السبت', open: '16:00', close: '23:00' },
      { day: 'الأحد', open: '16:00', close: '23:00' },
      { day: 'الإثنين', open: '16:00', close: '23:00' },
      { day: 'الثلاثاء', open: '16:00', close: '23:00' },
      { day: 'الأربعاء', open: '16:00', close: '23:00' }
    ],
    rating: 4.4,
    reviews_count: 156,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Family+Clinic'],
    tags: ['عيادة', 'أسرة', 'نساء']
  },
  {
    type: 'clinic',
    name_ar: 'عيادات التخصصي',
    specialties: ['عيون', 'أنف وأذن وحنجرة', 'جلدية'],
    services: ['فحص نظر', 'علاج التهابات', 'علاج جلدي', 'وصفات نظارات'],
    discount: { percent: 10, valid_to: new Date('2026-12-31') },
    insurances: ['التعاونية', 'ميد غلف'],
    address: {
      city: 'الدمام',
      district: 'الأثير',
      full: 'شارع الأمير محمد بن فهد، حي الأثير'
    },
    location: { lat: 26.4567, lng: 50.1243 },
    phones: ['+966139990011', '+966501112233'],
    hours: [
      { day: 'الأحد', open: '09:00', close: '21:00' },
      { day: 'الإثنين', open: '09:00', close: '21:00' },
      { day: 'الثلاثاء', open: '09:00', close: '21:00' },
      { day: 'الأربعاء', open: '09:00', close: '21:00' },
      { day: 'الخميس', open: '09:00', close: '13:00' }
    ],
    rating: 4.2,
    reviews_count: 134,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Specialist+Clinic'],
    tags: ['عيادة', 'تخصصي', 'عيون']
  },
  {
    type: 'clinic',
    name_ar: 'عيادة الصحة',
    specialties: ['طب عام', 'طوارئ بسيطة'],
    services: ['كشف سريع', 'خياطة جروح', 'حقن', 'قياس ضغط وسكر'],
    discount: { percent: 25, valid_to: new Date('2026-09-30') },
    insurances: ['بوبا', 'سلامة'],
    address: {
      city: 'الرياض',
      district: 'المروج',
      full: 'طريق الخرج، حي المروج'
    },
    location: { lat: 24.6234, lng: 46.7654 },
    phones: ['+966113334455', '+966502223344'],
    hours: [
      { day: 'السبت', open: '10:00', close: '23:00' },
      { day: 'الأحد', open: '10:00', close: '23:00' },
      { day: 'الإثنين', open: '10:00', close: '23:00' },
      { day: 'الثلاثاء', open: '10:00', close: '23:00' },
      { day: 'الأربعاء', open: '10:00', close: '23:00' }
    ],
    rating: 4.1,
    reviews_count: 97,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Health+Clinic'],
    tags: ['عيادة', 'سريع', 'طوارئ']
  },
  {
    type: 'clinic',
    name_ar: 'عيادة النور',
    specialties: ['عيون', 'بصريات'],
    services: ['فحص نظر شامل', 'قياس عيون للنظارات', 'عدسات لاصقة', 'علاج رمد'],
    discount: { percent: 30, valid_to: new Date('2026-12-31') },
    insurances: ['بوبا', 'التعاونية', 'ميد غلف'],
    address: {
      city: 'جدة',
      district: 'المحمدية',
      full: 'شارع الستين، حي المحمدية'
    },
    location: { lat: 21.5987, lng: 39.2345 },
    phones: ['+966125554433', '+966503334422'],
    hours: [
      { day: 'السبت', open: '15:00', close: '23:00' },
      { day: 'الأحد', open: '15:00', close: '23:00' },
      { day: 'الإثنين', open: '15:00', close: '23:00' },
      { day: 'الثلاثاء', open: '15:00', close: '23:00' },
      { day: 'الأربعاء', open: '15:00', close: '23:00' },
      { day: 'الخميس', open: '15:00', close: '23:00' }
    ],
    rating: 4.7,
    reviews_count: 221,
    images: ['https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Al+Noor+Clinic'],
    tags: ['عيادة', 'عيون', 'نظارات', 'عدسات']
  }
];

// Admin user
export const admin = {
  username: 'admin',
  password: 'admin132' // Will be hashed when seeded
};

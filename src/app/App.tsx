import { useState, ReactNode } from "react";
import {
  Home, LayoutDashboard, FlaskConical, History, ShoppingBag,
  MessageSquare, User, Globe, Bell, Search, ChevronRight,
  Star, Check, ArrowRight, Sparkles, Shield, Award, Users,
  Package, Edit, Trash2, Plus, ExternalLink, BarChart3,
  Activity, Droplets, Sun, CheckCircle2, Circle, Eye, X, Heart,
  Zap, Clock, MapPin, Menu, LogOut, Settings, ChevronDown,
  RefreshCw, AlertCircle, TrendingUp, Filter, Download,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────

type Page =
  | "landing" | "login" | "register" | "dashboard"
  | "skin-analysis" | "result" | "ingredient-checker"
  | "ingredient-detail" | "history" | "products"
  | "feedback" | "profile" | "admin" | "admin-ingredients"
  | "admin-compatibility" | "admin-feedback";

type Lang = "en" | "id";

// ─── Translations ──────────────────────────────────────────────────────────────

const TX: Record<Lang, Record<string, string>> = {
  en: {
    appName: "MatchMySkin", tagline: "AI-Powered Skincare",
    home: "Home", dashboard: "Dashboard", skinAnalysis: "Skin Analysis",
    ingredientChecker: "Ingredient Checker", history: "History",
    products: "Products", feedback: "Feedback", profile: "Profile",
    adminPanel: "Admin Panel", ingredients: "Ingredients",
    compatibility: "Compatibility", feedbackMgmt: "Feedback",
    login: "Login", register: "Register", logout: "Logout",
    heroTitle: "Find Your Perfect\nSkincare Match",
    heroSub: "AI-powered ingredient analysis tailored to your skin type, tone, and unique concerns.",
    getStarted: "Get Started Free", learnMore: "Learn More",
    ourServices: "Our Services", featuredDoctors: "Featured Dermatologists",
    aboutUs: "About MatchMySkin",
    aboutDesc: "We combine cutting-edge AI with expert dermatology to deliver personalized skincare for every skin type and tone.",
    aiAnalysis: "AI Skin Analysis", aiAnalysisDesc: "Advanced AI analyzes your skin type, tone, and concerns to generate your profile",
    ingredientSafety: "Ingredient Safety", ingredientSafetyDesc: "Check ingredient compatibility before adding a new product to your routine",
    doctorConsult: "Doctor Consultation", doctorConsultDesc: "Connect with verified dermatologists for professional advice and validation",
    productRec: "Product Recommendations", productRecDesc: "Curated product picks matched precisely to your verified skin profile",
    skinType: "Skin Type", skinConcerns: "Skin Concerns", allergies: "Allergies & Sensitivities",
    oily: "Oily", dry: "Dry", combination: "Combination", normal: "Normal", sensitive: "Sensitive",
    acne: "Acne-Prone", darkSpots: "Dark Spots / Hyperpigmentation", wrinkles: "Fine Lines & Wrinkles",
    redness: "Redness & Irritation", dullness: "Dullness", pores: "Enlarged Pores", eyeBags: "Eye Bags & Puffiness",
    skinTone: "Skin Tone", fair: "Fair", light: "Light", medium: "Medium", tan: "Tan / Warm", deep: "Deep / Dark",
    next: "Continue", back: "Back", submit: "Analyze My Skin", analyzing: "Analyzing...",
    welcome: "Welcome back", yourSkinProfile: "Your Skin Profile",
    recentAnalysis: "Recent Analyses", quickActions: "Quick Actions",
    totalAnalyses: "Analyses Done", productsRec: "Products Matched", ingredientsChecked: "Ingredients Checked", consultations: "Consultations",
    analysisResult: "Your Analysis Result", yourSkinType: "Skin Type Detected",
    recommendedIngredients: "Recommended Ingredients", avoidIngredients: "Ingredients to Avoid",
    viewProducts: "View Recommended Products",
    sortBy: "Sort by", priceRange: "Price Range", allCategories: "All Categories",
    addToWishlist: "Wishlist", buyNow: "Buy Now", affiliateLink: "View Deal",
    totalUsers: "Total Users", activeAnalyses: "Active Analyses",
    pendingFeedback: "Pending Feedback", systemStatus: "System Health",
    active: "Active", pending: "Pending", resolved: "Resolved",
    addIngredient: "Add Ingredient", searchIngredients: "Search ingredients...",
    rateExperience: "Rate Your Experience", yourFeedback: "Your Feedback",
    submitFeedback: "Submit Feedback", thankYou: "Thank You!",
    editProfile: "Edit Profile", saveChanges: "Save Changes",
    cancel: "Cancel", save: "Save", delete: "Delete", edit: "Edit",
    search: "Search", filter: "Filter", export: "Export",
    viewAll: "View All", seeMore: "See More",
    email: "Email Address", password: "Password", fullName: "Full Name",
    phone: "Phone Number", age: "Age", gender: "Gender",
    available: "Available", unavailable: "Unavailable",
    specialization: "Specialization", experience: "Experience",
    compatible: "Compatible", incompatible: "Incompatible", caution: "Use with Caution",
    enterIngredient: "Enter ingredient name...",
    checkCompatibility: "Check Compatibility",
    noHistory: "No analysis history yet. Start your first skin analysis!",
    startAnalysis: "Start New Analysis",
    step: "Step", of: "of",
    enterAllergy: "Enter allergy (e.g., fragrance, parabens)...",
    addAllergy: "Add",
    analysisComplete: "Analysis Complete!",
    rupiah: "Rp",
    male: "Male", female: "Female",
    years: "yrs exp.",
    stepsLabel: ["Skin Type & Tone", "Concerns", "Allergies", "Review"],
    confirmPassword: "Confirm Password",
    alreadyAccount: "Already have an account?", noAccount: "Don't have an account?",
    createAccount: "Create Account", signIn: "Sign In",
    doctorNote: "Validated by certified dermatologists",
    compatibilityResult: "Compatibility Result",
    ingredient1: "Ingredient 1", ingredient2: "Ingredient 2",
    benefitsOf: "Benefits of", safetyProfile: "Safety Profile",
    commonIn: "Commonly Found In", usageTips: "Usage Tips",
    viewDetail: "View Details", addToChecker: "Add to Checker",
    stars: "stars",
    statsUsers: "10,000+", statsAnalyses: "50,000+", statsDoctors: "120+", statsProducts: "2,000+",
    statsUsersLabel: "Active Users", statsAnalysesLabel: "Analyses Done", statsDoctorsLabel: "Dermatologists", statsProductsLabel: "Products Indexed",
    feedbackSent: "Your feedback has been submitted. Thank you!",
    selectGender: "Select gender",
    skinAnalysisStep1: "Tell us about your skin type",
    skinAnalysisStep2: "What are your main skin concerns?",
    skinAnalysisStep3: "Do you have any allergies?",
    skinAnalysisStep4: "Review and submit",
    profileUpdated: "Profile updated successfully.",
  },
  id: {
    appName: "MatchMySkin", tagline: "Skincare Berbasis AI",
    home: "Beranda", dashboard: "Dasbor", skinAnalysis: "Analisis Kulit",
    ingredientChecker: "Pemeriksa Bahan", history: "Riwayat",
    products: "Produk", feedback: "Umpan Balik", profile: "Profil",
    adminPanel: "Panel Admin", ingredients: "Bahan",
    compatibility: "Kompatibilitas", feedbackMgmt: "Umpan Balik",
    login: "Masuk", register: "Daftar", logout: "Keluar",
    heroTitle: "Temukan Perawatan\nKulit Sempurna Anda",
    heroSub: "Analisis bahan berbasis AI yang disesuaikan dengan jenis kulit, warna, dan masalah kulit unik Anda.",
    getStarted: "Mulai Gratis", learnMore: "Pelajari Lebih",
    ourServices: "Layanan Kami", featuredDoctors: "Dermatologis Unggulan",
    aboutUs: "Tentang MatchMySkin",
    aboutDesc: "Kami menggabungkan AI mutakhir dengan keahlian dermatologis untuk rekomendasi perawatan kulit yang dipersonalisasi.",
    aiAnalysis: "Analisis Kulit AI", aiAnalysisDesc: "AI canggih menganalisis jenis, warna, dan masalah kulit Anda untuk membuat profil",
    ingredientSafety: "Keamanan Bahan", ingredientSafetyDesc: "Periksa kompatibilitas bahan skincare sebelum menambahkan produk baru",
    doctorConsult: "Konsultasi Dokter", doctorConsultDesc: "Terhubung dengan dermatologis bersertifikat untuk saran profesional",
    productRec: "Rekomendasi Produk", productRecDesc: "Pilihan produk terpilih yang sesuai dengan profil kulit Anda",
    skinType: "Jenis Kulit", skinConcerns: "Masalah Kulit", allergies: "Alergi & Sensitivitas",
    oily: "Berminyak", dry: "Kering", combination: "Kombinasi", normal: "Normal", sensitive: "Sensitif",
    acne: "Rentan Jerawat", darkSpots: "Bintik Gelap / Hiperpigmentasi", wrinkles: "Kerutan Halus",
    redness: "Kemerahan & Iritasi", dullness: "Kusam", pores: "Pori Membesar", eyeBags: "Kantung & Bengkak Mata",
    skinTone: "Warna Kulit", fair: "Sangat Cerah", light: "Cerah", medium: "Sedang", tan: "Sawo Matang", deep: "Gelap",
    next: "Lanjutkan", back: "Kembali", submit: "Analisis Kulit Saya", analyzing: "Menganalisis...",
    welcome: "Selamat datang kembali", yourSkinProfile: "Profil Kulit Anda",
    recentAnalysis: "Analisis Terbaru", quickActions: "Tindakan Cepat",
    totalAnalyses: "Analisis Selesai", productsRec: "Produk Cocok", ingredientsChecked: "Bahan Diperiksa", consultations: "Konsultasi",
    analysisResult: "Hasil Analisis Anda", yourSkinType: "Jenis Kulit Terdeteksi",
    recommendedIngredients: "Bahan yang Direkomendasikan", avoidIngredients: "Bahan yang Dihindari",
    viewProducts: "Lihat Produk yang Direkomendasikan",
    sortBy: "Urutkan", priceRange: "Kisaran Harga", allCategories: "Semua Kategori",
    addToWishlist: "Favorit", buyNow: "Beli Sekarang", affiliateLink: "Lihat Penawaran",
    totalUsers: "Total Pengguna", activeAnalyses: "Analisis Aktif",
    pendingFeedback: "Umpan Balik Tertunda", systemStatus: "Kesehatan Sistem",
    active: "Aktif", pending: "Tertunda", resolved: "Terselesaikan",
    addIngredient: "Tambah Bahan", searchIngredients: "Cari bahan...",
    rateExperience: "Nilai Pengalaman Anda", yourFeedback: "Umpan Balik Anda",
    submitFeedback: "Kirim Umpan Balik", thankYou: "Terima Kasih!",
    editProfile: "Edit Profil", saveChanges: "Simpan Perubahan",
    cancel: "Batal", save: "Simpan", delete: "Hapus", edit: "Edit",
    search: "Cari", filter: "Filter", export: "Ekspor",
    viewAll: "Lihat Semua", seeMore: "Lihat Lebih",
    email: "Alamat Email", password: "Kata Sandi", fullName: "Nama Lengkap",
    phone: "Nomor Telepon", age: "Usia", gender: "Jenis Kelamin",
    available: "Tersedia", unavailable: "Tidak Tersedia",
    specialization: "Spesialisasi", experience: "Pengalaman",
    compatible: "Kompatibel", incompatible: "Tidak Kompatibel", caution: "Gunakan dengan Hati-hati",
    enterIngredient: "Masukkan nama bahan...",
    checkCompatibility: "Periksa Kompatibilitas",
    noHistory: "Belum ada riwayat analisis. Mulai analisis kulit pertama Anda!",
    startAnalysis: "Mulai Analisis Baru",
    step: "Langkah", of: "dari",
    enterAllergy: "Masukkan alergi (mis. wewangian, paraben)...",
    addAllergy: "Tambah",
    analysisComplete: "Analisis Selesai!",
    rupiah: "Rp",
    male: "Pria", female: "Wanita",
    years: "thn pengalaman",
    stepsLabel: ["Jenis & Warna Kulit", "Masalah Kulit", "Alergi", "Tinjau"],
    confirmPassword: "Konfirmasi Kata Sandi",
    alreadyAccount: "Sudah punya akun?", noAccount: "Belum punya akun?",
    createAccount: "Buat Akun", signIn: "Masuk",
    doctorNote: "Divalidasi oleh dermatologis bersertifikat",
    compatibilityResult: "Hasil Kompatibilitas",
    ingredient1: "Bahan 1", ingredient2: "Bahan 2",
    benefitsOf: "Manfaat dari", safetyProfile: "Profil Keamanan",
    commonIn: "Umumnya Ditemukan Di", usageTips: "Tips Penggunaan",
    viewDetail: "Lihat Detail", addToChecker: "Tambah ke Pemeriksa",
    stars: "bintang",
    statsUsers: "10.000+", statsAnalyses: "50.000+", statsDoctors: "120+", statsProducts: "2.000+",
    statsUsersLabel: "Pengguna Aktif", statsAnalysesLabel: "Analisis Selesai", statsDoctorsLabel: "Dermatologis", statsProductsLabel: "Produk Terindeks",
    feedbackSent: "Umpan balik Anda telah dikirim. Terima kasih!",
    selectGender: "Pilih jenis kelamin",
    skinAnalysisStep1: "Ceritakan tentang jenis kulit Anda",
    skinAnalysisStep2: "Apa masalah kulit utama Anda?",
    skinAnalysisStep3: "Apakah Anda memiliki alergi?",
    skinAnalysisStep4: "Tinjau dan kirimkan",
    profileUpdated: "Profil berhasil diperbarui.",
  },
};

function t(lang: Lang, key: string): string {
  return TX[lang][key] ?? TX["en"][key] ?? key;
}

// ─── Mock Data ──────────────────────────────────────────────────────────────────

const DOCTORS = [
  { id: 1, name: "Dr. Anisa Rahmawati", spec: "Clinical Dermatologist", exp: 12, rating: 4.9, reviews: 312, available: true, loc: "Jakarta", photo: "1559839914-17564567db145" },
  { id: 2, name: "Dr. Budi Santoso", spec: "Cosmetic Dermatologist", exp: 8, rating: 4.8, reviews: 245, available: true, loc: "Surabaya", photo: "1612349317529-934f7c9c2d90" },
  { id: 3, name: "Dr. Citra Dewi", spec: "Aesthetic Medicine", exp: 15, rating: 4.9, reviews: 408, available: false, loc: "Bandung", photo: "1580489944761-15a19d654956" },
];

const PRODUCTS = [
  { id: 1, name: "Cetaphil Gentle Skin Cleanser", brand: "Cetaphil", category: "Cleanser", price: 125000, rating: 4.7, reviews: 1240, skin: ["Sensitive", "Dry"], photo: "1556228720-195a672e8a03" },
  { id: 2, name: "Somethinc Niacinamide 10%", brand: "Somethinc", category: "Serum", price: 89000, rating: 4.8, reviews: 3210, skin: ["Oily", "Combination"], photo: "1620916566398-39f1143ab7be" },
  { id: 3, name: "Wardah Lightening Day Cream SPF 30", brand: "Wardah", category: "Moisturizer", price: 58000, rating: 4.5, reviews: 892, skin: ["Normal", "Combination"], photo: "1556228452-8359537fb1a7" },
  { id: 4, name: "The Ordinary Hyaluronic Acid 2%", brand: "The Ordinary", category: "Serum", price: 195000, rating: 4.9, reviews: 5670, skin: ["Dry", "Normal"], photo: "1607704958802-5f5ab6c5e3a3" },
  { id: 5, name: "Emina Sun Protection SPF 45", brand: "Emina", category: "Sunscreen", price: 45000, rating: 4.4, reviews: 621, skin: ["All"], photo: "1556228843-9163d66e9e40" },
  { id: 6, name: "Avoskin Your Skin Bae Retinol", brand: "Avoskin", category: "Serum", price: 275000, rating: 4.7, reviews: 987, skin: ["Normal", "Dry"], photo: "1599309329365-0a9cbf5a4558" },
];

const INGREDIENTS_DB = [
  { id: 1, name: "Niacinamide", safety: "Safe", category: "Active", benefits: ["Brightening", "Pore minimizing", "Sebum control"], skins: ["Oily", "Combination", "Sensitive"] },
  { id: 2, name: "Hyaluronic Acid", safety: "Safe", category: "Humectant", benefits: ["Deep hydration", "Plumping", "Anti-aging"], skins: ["Dry", "Normal", "All"] },
  { id: 3, name: "Retinol", safety: "Caution", category: "Active", benefits: ["Anti-aging", "Cell turnover", "Acne treatment"], skins: ["Normal", "Oily"] },
  { id: 4, name: "Vitamin C", safety: "Safe", category: "Antioxidant", benefits: ["Brightening", "Collagen synthesis", "Sun damage repair"], skins: ["All"] },
  { id: 5, name: "AHA (Glycolic Acid)", safety: "Caution", category: "Exfoliant", benefits: ["Exfoliation", "Texture improvement", "Brightening"], skins: ["Normal", "Combination"] },
  { id: 6, name: "BHA (Salicylic Acid)", safety: "Safe", category: "Exfoliant", benefits: ["Deep pore cleansing", "Acne treatment", "Oil control"], skins: ["Oily", "Acne-Prone"] },
  { id: 7, name: "Ceramide", safety: "Safe", category: "Emollient", benefits: ["Barrier repair", "Moisture retention", "Protection"], skins: ["Dry", "Sensitive", "All"] },
  { id: 8, name: "Benzoyl Peroxide", safety: "Caution", category: "Acne Treatment", benefits: ["Kills acne bacteria", "Anti-inflammatory"], skins: ["Oily", "Acne-Prone"] },
];

const COMPATIBILITY_DATA = [
  { id: 1, ing1: "Niacinamide", ing2: "Vitamin C", status: "caution", note: "May reduce efficacy when combined; use at different times." },
  { id: 2, ing1: "Retinol", ing2: "AHA", status: "incompatible", note: "Combined use may cause severe irritation and compromised barrier." },
  { id: 3, ing1: "Hyaluronic Acid", ing2: "Niacinamide", status: "compatible", note: "Great combination for hydration and barrier support." },
  { id: 4, ing1: "BHA", ing2: "Niacinamide", status: "compatible", note: "Works well together for oily and acne-prone skin." },
  { id: 5, ing1: "Vitamin C", ing2: "Retinol", status: "incompatible", note: "pH incompatibility reduces effectiveness of both actives." },
  { id: 6, ing1: "Ceramide", ing2: "Hyaluronic Acid", status: "compatible", note: "Excellent duo for moisture barrier repair and hydration." },
];

const HISTORY_DATA = [
  { id: 1, date: "2024-11-28", skinType: "Combination", concerns: ["Acne", "Dark Spots"], score: 87, products: 6 },
  { id: 2, date: "2024-10-14", skinType: "Oily", concerns: ["Pores", "Dullness"], score: 82, products: 4 },
  { id: 3, date: "2024-09-03", skinType: "Combination", concerns: ["Acne", "Redness"], score: 79, products: 5 },
];

const FEEDBACKS_DATA = [
  { id: 1, user: "Sari M.", rating: 5, msg: "The AI recommendations were spot-on for my sensitive skin!", date: "2024-11-30", status: "resolved" },
  { id: 2, user: "Budi R.", rating: 4, msg: "Very helpful ingredient checker. Found out niacinamide and Vit C shouldn't be mixed.", date: "2024-11-29", status: "pending" },
  { id: 3, user: "Cinta A.", rating: 5, msg: "Dr. Anisa validated my routine perfectly. Great consultation!", date: "2024-11-28", status: "resolved" },
  { id: 4, user: "Doni K.", rating: 3, msg: "Product prices could be updated more frequently.", date: "2024-11-27", status: "pending" },
];

// ─── Helper: Format Rupiah ─────────────────────────────────────────────────────

function formatRupiah(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}

// ─── UI Primitives ─────────────────────────────────────────────────────────────

function Btn({
  children, onClick, variant = "primary", size = "md", className = "", disabled = false,
}: {
  children: ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg"; className?: string; disabled?: boolean;
}) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  const variants = {
    primary: "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-lg shadow-violet-200/60 hover:shadow-violet-300/60 active:scale-[0.98]",
    secondary: "bg-[#F3F0FF] text-[#7C3AED] hover:bg-[#EDE9FE] border border-violet-100",
    ghost: "text-[#6B7280] hover:bg-[#F3F0FF] hover:text-[#7C3AED]",
    danger: "bg-[#EF4444] text-white hover:bg-[#DC2626]",
    outline: "border border-[#7C3AED] text-[#7C3AED] hover:bg-[#F3F0FF]",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

function Badge({ children, color = "violet" }: { children: ReactNode; color?: "violet" | "green" | "yellow" | "red" | "gray" }) {
  const colors = {
    violet: "bg-[#F3F0FF] text-[#7C3AED] border border-violet-100",
    green: "bg-green-50 text-green-700 border border-green-100",
    yellow: "bg-amber-50 text-amber-700 border border-amber-100",
    red: "bg-red-50 text-red-600 border border-red-100",
    gray: "bg-gray-100 text-gray-600 border border-gray-200",
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>{children}</span>;
}

function Card({ children, className = "", glass = false }: { children: ReactNode; className?: string; glass?: boolean }) {
  return (
    <div className={`rounded-2xl border border-border shadow-sm ${glass ? "bg-white/70 backdrop-blur-sm" : "bg-card"} ${className}`}>
      {children}
    </div>
  );
}

function StatCard({ icon, label, value, sub, color = "violet" }: {
  icon: ReactNode; label: string; value: string; sub?: string; color?: string;
}) {
  const colors: Record<string, string> = {
    violet: "bg-[#F3F0FF] text-[#7C3AED]",
    green: "bg-green-50 text-green-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
  };
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{value}</p>
          {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
        </div>
        <div className={`p-3 rounded-xl ${colors[color]}`}>{icon}</div>
      </div>
    </Card>
  );
}

function StarRating({ rating, size = 4 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size * 4} className={i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"} />
      ))}
    </div>
  );
}

function Input({ label, type = "text", value, onChange, placeholder, className = "" }: {
  label?: string; type?: string; value: string; onChange: (v: string) => void; placeholder?: string; className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-semibold text-foreground">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-border bg-[#F9F7FF] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all"
      />
    </div>
  );
}

function CheckBox({ label, checked, onChange, dark = false }: { label: string; checked: boolean; onChange: (v: boolean) => void; dark?: boolean }) {
  return (
    <label className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all select-none ${
      checked
        ? "border-[#7C3AED] bg-[#F3F0FF]"
        : dark
        ? "border-gray-600 bg-gray-700 hover:border-gray-500"
        : "border-border bg-card hover:border-[#C4B5FD] hover:bg-[#F9F7FF]"
    }`}>
      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${
        checked ? "border-[#7C3AED] bg-[#7C3AED]" : "border-gray-400 bg-white"
      }`}>
        {checked && <Check size={12} className="text-white" strokeWidth={3} />}
      </div>
      <span className={`text-sm font-medium ${checked ? "text-[#7C3AED]" : dark ? "text-gray-200" : "text-foreground"}`}>{label}</span>
    </label>
  );
}

// ─── Public Layout ──────────────────────────────────────────────────────────────

function PublicNav({ lang, setLang, nav }: { lang: Lang; setLang: (l: Lang) => void; nav: (p: Page) => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => nav("landing")} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>MatchMySkin</span>
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <button onClick={() => nav("landing")} className="hover:text-[#7C3AED] transition-colors cursor-pointer">{t(lang, "home")}</button>
          <button onClick={() => nav("ingredient-checker")} className="hover:text-[#7C3AED] transition-colors cursor-pointer">{t(lang, "ingredientChecker")}</button>
          <button onClick={() => nav("products")} className="hover:text-[#7C3AED] transition-colors cursor-pointer">{t(lang, "products")}</button>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F3F0FF] text-[#7C3AED] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors cursor-pointer"
          >
            <Globe size={14} />
            {lang.toUpperCase()}
          </button>
          <Btn variant="ghost" size="sm" onClick={() => nav("login")}>{t(lang, "login")}</Btn>
          <Btn variant="primary" size="sm" onClick={() => nav("register")}>{t(lang, "register")}</Btn>
        </div>
      </div>
    </header>
  );
}

// ─── App Sidebar Layout ─────────────────────────────────────────────────────────

const USER_NAV = [
  { key: "dashboard", icon: LayoutDashboard },
  { key: "skin-analysis", icon: Activity },
  { key: "result", icon: Sparkles },
  { key: "ingredient-checker", icon: FlaskConical },
  { key: "history", icon: History },
  { key: "products", icon: ShoppingBag },
  { key: "feedback", icon: MessageSquare },
  { key: "profile", icon: User },
] as const;

const ADMIN_NAV = [
  { key: "admin", icon: BarChart3 },
  { key: "admin-ingredients", icon: FlaskConical },
  { key: "admin-compatibility", icon: Shield },
  { key: "admin-feedback", icon: MessageSquare },
  { key: "profile", icon: User },
] as const;

function AppLayout({
  children, lang, setLang, nav, currentPage, isAdmin,
}: {
  children: ReactNode; lang: Lang; setLang: (l: Lang) => void; nav: (p: Page) => void; currentPage: Page; isAdmin: boolean;
}) {
  const navItems = isAdmin ? ADMIN_NAV : USER_NAV;
  const navLabels: Record<string, string> = {
    dashboard: t(lang, "dashboard"), "skin-analysis": t(lang, "skinAnalysis"),
    result: t(lang, "analysisResult"), "ingredient-checker": t(lang, "ingredientChecker"),
    history: t(lang, "history"), products: t(lang, "products"),
    feedback: t(lang, "feedback"), profile: t(lang, "profile"),
    admin: t(lang, "adminPanel"), "admin-ingredients": t(lang, "ingredients"),
    "admin-compatibility": t(lang, "compatibility"), "admin-feedback": t(lang, "feedbackMgmt"),
    "ingredient-detail": "Ingredient Detail",
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col overflow-hidden">
        <div className="p-5 border-b border-sidebar-border">
          <button onClick={() => nav("landing")} className="flex items-center gap-2 cursor-pointer w-full">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>MatchMySkin</p>
              <p className="text-xs text-muted-foreground">{t(lang, "tagline")}</p>
            </div>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {isAdmin && (
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3 py-2">Admin</p>
          )}
          {navItems.map(({ key, icon: Icon }) => {
            const active = currentPage === key;
            return (
              <button
                key={key}
                onClick={() => nav(key as Page)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  active
                    ? "bg-[#F3F0FF] text-[#7C3AED] font-semibold"
                    : "text-muted-foreground hover:bg-[#F9F7FF] hover:text-foreground"
                }`}
              >
                <Icon size={18} className={active ? "text-[#7C3AED]" : ""} />
                {navLabels[key]}
              </button>
            );
          })}

          <div className="pt-2 border-t border-sidebar-border mt-2">
            {!isAdmin && (
              <button
                onClick={() => nav("admin")}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-[#F9F7FF] hover:text-foreground transition-all cursor-pointer"
              >
                <Settings size={18} />
                {t(lang, "adminPanel")}
              </button>
            )}
            <button
              onClick={() => nav("landing")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-all cursor-pointer"
            >
              <LogOut size={18} />
              {t(lang, "logout")}
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F3F0FF]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-white text-sm font-bold">S</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">Sari Dewi</p>
              <p className="text-xs text-muted-foreground truncate">sari@email.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 flex-shrink-0">
          <div>
            <h1 className="text-base font-bold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>
              {navLabels[currentPage] ?? currentPage}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F3F0FF] text-[#7C3AED] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors cursor-pointer"
            >
              <Globe size={14} />
              {lang === "en" ? "ID" : "EN"}
            </button>
            <button className="relative p-2 rounded-lg hover:bg-[#F3F0FF] text-muted-foreground hover:text-[#7C3AED] transition-colors cursor-pointer">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#EF4444]" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

// ─── Landing Page ───────────────────────────────────────────────────────────────

function LandingPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const services = [
    { icon: <Sparkles size={24} />, title: t(lang, "aiAnalysis"), desc: t(lang, "aiAnalysisDesc") },
    { icon: <Shield size={24} />, title: t(lang, "ingredientSafety"), desc: t(lang, "ingredientSafetyDesc") },
    { icon: <Users size={24} />, title: t(lang, "doctorConsult"), desc: t(lang, "doctorConsultDesc") },
    { icon: <ShoppingBag size={24} />, title: t(lang, "productRec"), desc: t(lang, "productRecDesc") },
  ];
  const stats = [
    { val: t(lang, "statsUsers"), label: t(lang, "statsUsersLabel") },
    { val: t(lang, "statsAnalyses"), label: t(lang, "statsAnalysesLabel") },
    { val: t(lang, "statsDoctors"), label: t(lang, "statsDoctorsLabel") },
    { val: t(lang, "statsProducts"), label: t(lang, "statsProductsLabel") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/8 via-[#A78BFA]/5 to-transparent" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#C4B5FD]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#A78BFA]/15 blur-3xl" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3F0FF] border border-violet-100 text-[#7C3AED] text-sm font-semibold mb-6">
                <Sparkles size={14} />
                {t(lang, "aiAnalysis")}
              </div>
              <h1 className="text-5xl font-extrabold text-foreground leading-tight mb-6" style={{ fontFamily: "var(--font-family-display)" }}>
                {t(lang, "heroTitle").split("\n").map((line, i) => (
                  <span key={i}>{i > 0 && <br />}{i === 1 ? <span className="text-[#7C3AED]">{line}</span> : line}</span>
                ))}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">{t(lang, "heroSub")}</p>
              <div className="flex items-center gap-4">
                <Btn variant="primary" size="lg" onClick={() => nav("register")}>
                  {t(lang, "getStarted")} <ArrowRight size={18} />
                </Btn>
                <Btn variant="secondary" size="lg" onClick={() => nav("login")}>
                  {t(lang, "learnMore")}
                </Btn>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["1559839914-17564567db145", "1612349317529-934f7c9c2d90", "1580489944761-15a19d654956"].map((id) => (
                    <img key={id} src={`https://images.unsplash.com/photo-${id}?w=40&h=40&fit=crop&auto=format`}
                      alt="user" className="w-9 h-9 rounded-full border-2 border-white object-cover bg-violet-100" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1"><StarRating rating={5} size={3} /><span className="text-sm font-bold text-foreground ml-1">4.9</span></div>
                  <p className="text-xs text-muted-foreground">{t(lang, "statsUsers")} {t(lang, "statsUsersLabel")}</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-200/40">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=500&fit=crop&auto=format"
                  alt="Skincare products"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/30 to-transparent" />
              </div>
              {/* Floating card */}
              <Card glass className="absolute -bottom-6 -left-8 p-4 w-56 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center"><CheckCircle2 size={20} className="text-green-500" /></div>
                  <div>
                    <p className="text-xs font-bold text-foreground">{t(lang, "analysisComplete")}</p>
                    <p className="text-xs text-muted-foreground">Combination skin · 87% match</p>
                  </div>
                </div>
              </Card>
              <Card glass className="absolute -top-4 -right-4 p-4 w-52 shadow-xl">
                <p className="text-xs font-bold text-foreground mb-2">Top Ingredients</p>
                {["Niacinamide", "Hyaluronic Acid", "Ceramide"].map((i) => (
                  <div key={i} className="flex items-center gap-2 mb-1.5">
                    <Check size={12} className="text-green-500" />
                    <span className="text-xs text-foreground">{i}</span>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#7C3AED]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-family-display)" }}>{s.val}</p>
              <p className="text-violet-200 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge color="violet">{t(lang, "aboutUs")}</Badge>
              <h2 className="text-3xl font-extrabold text-foreground mt-4 mb-6" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "aboutUs")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t(lang, "aboutDesc")}</p>
              <div className="space-y-3">
                {[t(lang, "aiAnalysis"), t(lang, "ingredientSafety"), t(lang, "doctorConsult")].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-80 bg-violet-100">
              <img
                src="https://images.unsplash.com/photo-1607704958802-5f5ab6c5e3a3?w=600&h=400&fit=crop&auto=format"
                alt="Skincare consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-[#F3F0FF]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge color="violet">{t(lang, "ourServices")}</Badge>
            <h2 className="text-3xl font-extrabold text-foreground mt-4" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "ourServices")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="p-6 hover:shadow-lg hover:shadow-violet-100/60 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F0FF] flex items-center justify-center text-[#7C3AED] mb-4">{s.icon}</div>
                <h3 className="font-bold text-foreground mb-2 text-base" style={{ fontFamily: "var(--font-family-display)" }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge color="violet">{t(lang, "featuredDoctors")}</Badge>
            <h2 className="text-3xl font-extrabold text-foreground mt-4" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "featuredDoctors")}</h2>
            <p className="text-muted-foreground mt-2">{t(lang, "doctorNote")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <Card key={doc.id} className="overflow-hidden hover:shadow-xl hover:shadow-violet-100/40 transition-all duration-300 hover:-translate-y-1">
                <div className="h-52 bg-violet-50 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${doc.photo}?w=400&h=250&fit=crop&auto=format`}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{doc.name}</h3>
                      <p className="text-sm text-[#7C3AED] font-medium">{doc.spec}</p>
                    </div>
                    <Badge color={doc.available ? "green" : "gray"}>
                      {doc.available ? t(lang, "available") : t(lang, "unavailable")}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                    <span className="flex items-center gap-1"><MapPin size={12} />{doc.loc}</span>
                    <span className="flex items-center gap-1"><Award size={12} />{doc.exp} {t(lang, "years")}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <StarRating rating={doc.rating} size={3} />
                    <span className="text-sm font-bold text-foreground">{doc.rating}</span>
                    <span className="text-xs text-muted-foreground">({doc.reviews})</span>
                  </div>
                  <Btn variant="outline" size="sm" className="w-full mt-4 justify-center" onClick={() => nav("dashboard")}>
                    {lang === "en" ? "Book Consultation" : "Pesan Konsultasi"}
                  </Btn>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-family-display)" }}>
              {lang === "en" ? "Ready to Find Your Perfect Match?" : "Siap Menemukan Pasangan Sempurna Anda?"}
            </h2>
            <p className="text-violet-100 mb-8">
              {lang === "en" ? "Join thousands who found their ideal skincare routine with AI-powered analysis." : "Bergabung dengan ribuan orang yang menemukan rutinitas skincare ideal mereka."}
            </p>
            <Btn variant="secondary" size="lg" onClick={() => nav("register")}>
              {t(lang, "getStarted")} <ArrowRight size={18} />
            </Btn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
              <Sparkles size={14} className="text-white" />
            </div>
            <span className="font-bold text-white" style={{ fontFamily: "var(--font-family-display)" }}>MatchMySkin</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 MatchMySkin. {lang === "en" ? "All rights reserved." : "Hak cipta dilindungi."}</p>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="hover:text-white cursor-pointer">{lang === "en" ? "Privacy" : "Privasi"}</span>
            <span className="hover:text-white cursor-pointer">{lang === "en" ? "Terms" : "Ketentuan"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Login Page ─────────────────────────────────────────────────────────────────

function LoginPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#C4B5FD]/10" />
      <div className="w-full max-w-md relative">
        <button onClick={() => nav("landing")} className="flex items-center gap-2 mx-auto mb-8 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="font-extrabold text-xl text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>MatchMySkin</span>
        </button>
        <Card glass className="p-8 shadow-2xl shadow-violet-100/40">
          <h2 className="text-2xl font-extrabold text-foreground mb-1" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "signIn")}</h2>
          <p className="text-muted-foreground text-sm mb-8">{t(lang, "noAccount")} <button onClick={() => nav("register")} className="text-[#7C3AED] font-semibold hover:underline cursor-pointer">{t(lang, "createAccount")}</button></p>
          <div className="space-y-5">
            <Input label={t(lang, "email")} type="email" value={email} onChange={setEmail} placeholder="you@email.com" />
            <Input label={t(lang, "password")} type="password" value={password} onChange={setPassword} placeholder="••••••••" />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-[#7C3AED]" />
                <span className="text-muted-foreground">{lang === "en" ? "Remember me" : "Ingat saya"}</span>
              </label>
              <button className="text-[#7C3AED] font-semibold hover:underline cursor-pointer">{lang === "en" ? "Forgot password?" : "Lupa kata sandi?"}</button>
            </div>
            <Btn variant="primary" size="lg" className="w-full justify-center" onClick={() => nav("dashboard")}>
              {t(lang, "login")}
            </Btn>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">{lang === "en" ? "Demo: use any credentials to enter" : "Demo: masukkan sembarang kredensial"}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ─── Register Page ──────────────────────────────────────────────────────────────

function RegisterPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", phone: "", age: "", gender: "" });
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#C4B5FD]/10" />
      <div className="w-full max-w-lg relative">
        <button onClick={() => nav("landing")} className="flex items-center gap-2 mx-auto mb-8 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="font-extrabold text-xl text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>MatchMySkin</span>
        </button>
        <Card glass className="p-8 shadow-2xl shadow-violet-100/40">
          <h2 className="text-2xl font-extrabold text-foreground mb-1" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "createAccount")}</h2>
          <p className="text-muted-foreground text-sm mb-8">{t(lang, "alreadyAccount")} <button onClick={() => nav("login")} className="text-[#7C3AED] font-semibold hover:underline cursor-pointer">{t(lang, "signIn")}</button></p>
          <div className="grid grid-cols-2 gap-4">
            <Input label={t(lang, "fullName")} value={form.name} onChange={set("name")} placeholder="Sari Dewi" className="col-span-2" />
            <Input label={t(lang, "email")} type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className="col-span-2" />
            <Input label={t(lang, "password")} type="password" value={form.password} onChange={set("password")} placeholder="••••••••" />
            <Input label={t(lang, "confirmPassword")} type="password" value={form.confirm} onChange={set("confirm")} placeholder="••••••••" />
            <Input label={t(lang, "phone")} value={form.phone} onChange={set("phone")} placeholder="+62 812 3456 7890" />
            <Input label={t(lang, "age")} type="number" value={form.age} onChange={set("age")} placeholder="25" />
            <div className="col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground">{t(lang, "gender")}</label>
              <select
                value={form.gender}
                onChange={(e) => set("gender")(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-[#F9F7FF] text-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all"
              >
                <option value="">{t(lang, "selectGender")}</option>
                <option value="female">{t(lang, "female")}</option>
                <option value="male">{t(lang, "male")}</option>
              </select>
            </div>
          </div>
          <Btn variant="primary" size="lg" className="w-full justify-center mt-6" onClick={() => nav("dashboard")}>
            {t(lang, "createAccount")} <ArrowRight size={18} />
          </Btn>
          <p className="text-xs text-muted-foreground text-center mt-4">
            {lang === "en" ? "By registering you agree to our Terms and Privacy Policy." : "Dengan mendaftar Anda menyetujui Syarat dan Kebijakan Privasi kami."}
          </p>
        </Card>
      </div>
    </div>
  );
}

// ─── Dashboard ──────────────────────────────────────────────────────────────────

function DashboardPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const stats = [
    { icon: <Activity size={20} />, label: t(lang, "totalAnalyses"), value: "12", sub: lang === "en" ? "+2 this month" : "+2 bulan ini", color: "violet" },
    { icon: <ShoppingBag size={20} />, label: t(lang, "productsRec"), value: "48", sub: lang === "en" ? "6 new matches" : "6 cocok baru", color: "green" },
    { icon: <FlaskConical size={20} />, label: t(lang, "ingredientsChecked"), value: "93", sub: lang === "en" ? "Last 30 days" : "30 hari terakhir", color: "amber" },
    { icon: <Users size={20} />, label: t(lang, "consultations"), value: "3", sub: lang === "en" ? "1 upcoming" : "1 mendatang", color: "rose" },
  ];
  const quickActions = [
    { icon: <Activity size={18} />, label: t(lang, "skinAnalysis"), page: "skin-analysis" as Page },
    { icon: <FlaskConical size={18} />, label: t(lang, "ingredientChecker"), page: "ingredient-checker" as Page },
    { icon: <ShoppingBag size={18} />, label: t(lang, "products"), page: "products" as Page },
    { icon: <MessageSquare size={18} />, label: t(lang, "feedback"), page: "feedback" as Page },
  ];
  return (
    <div className="space-y-6 max-w-6xl">
      {/* Welcome banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] p-6 text-white">
        <div className="absolute right-0 top-0 w-64 h-full opacity-10">
          <Sparkles size={200} />
        </div>
        <p className="text-violet-100 text-sm mb-1">{t(lang, "welcome")},</p>
        <h2 className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-family-display)" }}>Sari Dewi 👋</h2>
        <p className="text-violet-100 text-sm mt-1">{lang === "en" ? "Your skin profile: Combination · Acne-prone · Light tone" : "Profil kulit: Kombinasi · Rentan jerawat · Warna cerah"}</p>
        <Btn variant="secondary" size="sm" className="mt-4" onClick={() => nav("skin-analysis")}>
          {t(lang, "startAnalysis")} <ArrowRight size={14} />
        </Btn>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent analysis */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "recentAnalysis")}</h3>
              <button onClick={() => nav("history")} className="text-sm text-[#7C3AED] font-semibold hover:underline cursor-pointer">{t(lang, "viewAll")}</button>
            </div>
            <div className="space-y-4">
              {HISTORY_DATA.map((h) => (
                <div key={h.id} className="flex items-center justify-between p-4 rounded-xl bg-[#F9F7FF] border border-border hover:border-violet-200 transition-colors">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{h.skinType} {lang === "en" ? "Skin" : "Kulit"}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{h.date} · {h.concerns.join(", ")}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#7C3AED]">{h.score}%</p>
                      <p className="text-xs text-muted-foreground">{h.products} products</p>
                    </div>
                    <button onClick={() => nav("result")} className="p-2 rounded-lg bg-[#F3F0FF] text-[#7C3AED] hover:bg-[#EDE9FE] transition-colors cursor-pointer">
                      <Eye size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick actions + skin profile */}
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "quickActions")}</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((a) => (
                <button
                  key={a.page}
                  onClick={() => nav(a.page)}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#F3F0FF] text-[#7C3AED] hover:bg-[#EDE9FE] transition-all hover:scale-105 cursor-pointer"
                >
                  {a.icon}
                  <span className="text-xs font-semibold text-center">{a.label}</span>
                </button>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <h3 className="font-bold text-foreground mb-4 text-sm" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "yourSkinProfile")}</h3>
            <div className="space-y-3">
              {[
                { label: lang === "en" ? "Type" : "Jenis", val: "Combination" },
                { label: lang === "en" ? "Tone" : "Warna", val: "Light / Warm" },
                { label: lang === "en" ? "Concerns" : "Masalah", val: "Acne, Dark Spots" },
                { label: lang === "en" ? "Allergies" : "Alergi", val: "Fragrance" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-semibold text-foreground">{row.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => nav("skin-analysis")} className="w-full mt-4 text-sm text-[#7C3AED] font-semibold hover:underline cursor-pointer flex items-center justify-center gap-1">
              <RefreshCw size={13} /> {lang === "en" ? "Update profile" : "Perbarui profil"}
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── Skin Analysis Form ─────────────────────────────────────────────────────────

function SkinAnalysisPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [skinType, setSkinType] = useState("");
  const [skinTone, setSkinTone] = useState("");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [allergyInput, setAllergyInput] = useState("");

  const stepsLabel = TX[lang].stepsLabel as unknown as string[];
  const skinTypes = [t(lang, "oily"), t(lang, "dry"), t(lang, "combination"), t(lang, "normal"), t(lang, "sensitive")];
  const tones = [t(lang, "fair"), t(lang, "light"), t(lang, "medium"), t(lang, "tan"), t(lang, "deep")];
  const toneColors = ["#FEF3C7", "#FDE68A", "#D97706", "#92400E", "#451A03"];
  const concernList = [t(lang, "acne"), t(lang, "darkSpots"), t(lang, "wrinkles"), t(lang, "redness"), t(lang, "dullness"), t(lang, "pores"), t(lang, "eyeBags")];

  const toggleConcern = (c: string) => setConcerns((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  const addAllergy = () => { if (allergyInput.trim()) { setAllergies((a) => [...a, allergyInput.trim()]); setAllergyInput(""); } };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); nav("result"); }, 2000);
  };

  const stepStepDesc = [t(lang, "skinAnalysisStep1"), t(lang, "skinAnalysisStep2"), t(lang, "skinAnalysisStep3"), t(lang, "skinAnalysisStep4")];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {stepsLabel.map((label, i) => (
            <div key={i} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all ${
                i < step ? "bg-[#7C3AED] text-white" : i === step ? "bg-[#7C3AED] text-white ring-4 ring-violet-100" : "bg-[#F3F0FF] text-muted-foreground"
              }`}>
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              {i < stepsLabel.length - 1 && (
                <div className={`h-1 w-16 md:w-24 mx-1 rounded-full transition-all ${i < step ? "bg-[#7C3AED]" : "bg-[#F3F0FF]"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {stepsLabel.map((label, i) => (
            <p key={i} className={`text-xs font-semibold ${i === step ? "text-[#7C3AED]" : "text-muted-foreground"}`}>{label}</p>
          ))}
        </div>
      </div>

      <Card className="p-8">
        <h2 className="text-xl font-extrabold text-foreground mb-2" style={{ fontFamily: "var(--font-family-display)" }}>
          {t(lang, "step")} {step + 1} {t(lang, "of")} 4
        </h2>
        <p className="text-muted-foreground text-sm mb-8">{stepStepDesc[step]}</p>

        {step === 0 && (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-bold text-foreground mb-3 block">{t(lang, "skinType")}</label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skinTypes.map((s) => (
                  <CheckBox key={s} label={s} checked={skinType === s} onChange={() => setSkinType(s)} />
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-3 block">{t(lang, "skinTone")}</label>
              <div className="grid grid-cols-5 gap-2">
                {tones.map((tone, i) => (
                  <button
                    key={tone}
                    onClick={() => setSkinTone(tone)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                      skinTone === tone ? "border-[#7C3AED] shadow-md" : "border-border hover:border-violet-200"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: toneColors[i] }} />
                    <span className="text-xs font-semibold text-foreground text-center leading-tight">{tone}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <label className="text-sm font-bold text-foreground mb-3 block">{t(lang, "skinConcerns")}</label>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {concernList.map((c) => (
                <CheckBox key={c} label={c} checked={concerns.includes(c)} onChange={() => toggleConcern(c)} />
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="text-sm font-bold text-foreground mb-3 block">{t(lang, "allergies")}</label>
            <div className="flex gap-3 mb-4">
              <input
                value={allergyInput}
                onChange={(e) => setAllergyInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addAllergy()}
                placeholder={t(lang, "enterAllergy")}
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-[#F9F7FF] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm"
              />
              <Btn variant="primary" size="md" onClick={addAllergy}>{t(lang, "addAllergy")}</Btn>
            </div>
            {allergies.length > 0 && (
              <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-[#F9F7FF] border border-border">
                {allergies.map((a) => (
                  <span key={a} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3F0FF] border border-violet-100 text-sm text-[#7C3AED] font-medium">
                    {a}
                    <button onClick={() => setAllergies((prev) => prev.filter((x) => x !== a))} className="text-violet-400 hover:text-red-500 cursor-pointer">
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
            {allergies.length === 0 && (
              <div className="p-8 rounded-xl bg-[#F9F7FF] border border-dashed border-border text-center text-muted-foreground text-sm">
                {lang === "en" ? "No allergies added yet" : "Belum ada alergi yang ditambahkan"}
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            {[
              { label: t(lang, "skinType"), value: skinType || lang === "en" ? "Not selected" : "Belum dipilih" },
              { label: t(lang, "skinTone"), value: skinTone || lang === "en" ? "Not selected" : "Belum dipilih" },
              { label: t(lang, "skinConcerns"), value: concerns.length > 0 ? concerns.join(", ") : lang === "en" ? "None" : "Tidak ada" },
              { label: t(lang, "allergies"), value: allergies.length > 0 ? allergies.join(", ") : lang === "en" ? "None" : "Tidak ada" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-start p-4 rounded-xl bg-[#F9F7FF] border border-border">
                <span className="text-sm font-semibold text-muted-foreground">{row.label}</span>
                <span className="text-sm font-bold text-foreground text-right max-w-xs">{row.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Btn variant="ghost" size="md" onClick={() => step > 0 && setStep((s) => s - 1)} disabled={step === 0}>
            {t(lang, "back")}
          </Btn>
          {step < 3 ? (
            <Btn variant="primary" size="md" onClick={() => setStep((s) => s + 1)}>
              {t(lang, "next")} <ChevronRight size={16} />
            </Btn>
          ) : (
            <Btn variant="primary" size="md" onClick={handleSubmit} disabled={submitting}>
              {submitting ? <><RefreshCw size={16} className="animate-spin" /> {t(lang, "analyzing")}</> : <>{t(lang, "submit")} <Sparkles size={16} /></>}
            </Btn>
          )}
        </div>
      </Card>
    </div>
  );
}

// ─── Analysis Result ────────────────────────────────────────────────────────────

function ResultPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const recommended = ["Niacinamide", "BHA (Salicylic Acid)", "Hyaluronic Acid", "Ceramide", "Zinc"];
  const avoid = ["Alcohol Denat", "Fragrance", "Coconut Oil", "Heavy Silicones"];
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Result header */}
      <Card className="p-6 bg-gradient-to-r from-[#7C3AED]/5 to-[#A78BFA]/5 border-violet-100">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
            <CheckCircle2 size={28} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "analysisComplete")}</h2>
            <p className="text-muted-foreground text-sm">{lang === "en" ? "Nov 28, 2024 · 87% confidence" : "28 Nov 2024 · Kepercayaan 87%"}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            { label: t(lang, "yourSkinType"), val: "Combination" },
            { label: t(lang, "skinTone"), val: "Light / Warm" },
            { label: t(lang, "skinConcerns"), val: "Acne, Dark Spots" },
          ].map((row) => (
            <div key={row.label} className="p-3 rounded-xl bg-white border border-border text-center">
              <p className="text-xs text-muted-foreground mb-1">{row.label}</p>
              <p className="text-sm font-bold text-foreground">{row.val}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Ingredients grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-family-display)" }}>
            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center"><Check size={12} className="text-green-600" /></div>
            {t(lang, "recommendedIngredients")}
          </h3>
          <div className="space-y-2.5">
            {recommended.map((ing) => (
              <button
                key={ing}
                onClick={() => nav("ingredient-detail")}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-green-50 border border-green-100 hover:border-green-300 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Check size={14} className="text-green-600" />
                  <span className="text-sm font-semibold text-green-800">{ing}</span>
                </div>
                <ChevronRight size={14} className="text-green-500" />
              </button>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-family-display)" }}>
            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center"><X size={12} className="text-red-500" /></div>
            {t(lang, "avoidIngredients")}
          </h3>
          <div className="space-y-2.5">
            {avoid.map((ing) => (
              <div key={ing} className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-100">
                <X size={14} className="text-red-500" />
                <span className="text-sm font-semibold text-red-700">{ing}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Doctor note */}
      <Card className="p-5 bg-[#F3F0FF] border-violet-100">
        <div className="flex items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1559839914-17564567db145?w=50&h=50&fit=crop&auto=format"
            alt="Doctor"
            className="w-12 h-12 rounded-full object-cover border-2 border-[#7C3AED]/30 bg-violet-100"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-bold text-foreground">Dr. Anisa Rahmawati</p>
              <Badge color="violet">{lang === "en" ? "Validated" : "Tervalidasi"}</Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === "en"
                ? "Your combination skin with acne concerns benefits most from lightweight, non-comedogenic formulas. Niacinamide and BHA are excellent choices. Avoid heavy oils and fragrances."
                : "Kulit kombinasi Anda yang rentan jerawat paling diuntungkan oleh formula ringan dan non-comedogenic. Niacinamide dan BHA adalah pilihan yang sangat baik."}
            </p>
          </div>
        </div>
      </Card>

      <Btn variant="primary" size="lg" onClick={() => nav("products")} className="w-full justify-center">
        {t(lang, "viewProducts")} <ArrowRight size={18} />
      </Btn>
    </div>
  );
}

// ─── Ingredient Checker ─────────────────────────────────────────────────────────

function IngredientCheckerPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const [ing1, setIng1] = useState("");
  const [ing2, setIng2] = useState("");
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState<(typeof COMPATIBILITY_DATA)[0] | null>(null);

  const handleCheck = () => {
    const found = COMPATIBILITY_DATA.find(
      (c) =>
        (c.ing1.toLowerCase().includes(ing1.toLowerCase()) && c.ing2.toLowerCase().includes(ing2.toLowerCase())) ||
        (c.ing1.toLowerCase().includes(ing2.toLowerCase()) && c.ing2.toLowerCase().includes(ing1.toLowerCase()))
    );
    setResult(found ?? { id: 0, ing1, ing2, status: "compatible", note: lang === "en" ? "No known interaction found. Generally safe to use together, but monitor for skin reactions." : "Tidak ada interaksi yang diketahui. Umumnya aman digunakan bersama, pantau reaksi kulit." });
    setChecked(true);
  };

  const statusConfig = {
    compatible: { color: "green" as const, label: t(lang, "compatible"), bg: "bg-green-50 border-green-200", text: "text-green-700", icon: <CheckCircle2 size={24} className="text-green-500" /> },
    incompatible: { color: "red" as const, label: t(lang, "incompatible"), bg: "bg-red-50 border-red-200", text: "text-red-700", icon: <X size={24} className="text-red-500" /> },
    caution: { color: "yellow" as const, label: t(lang, "caution"), bg: "bg-amber-50 border-amber-200", text: "text-amber-700", icon: <AlertCircle size={24} className="text-amber-500" /> },
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-foreground mb-2" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "ingredientChecker")}</h2>
        <p className="text-muted-foreground text-sm">{lang === "en" ? "Enter two ingredients to check if they are safe to use together in your routine." : "Masukkan dua bahan untuk memeriksa apakah aman digunakan bersama."}</p>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-bold text-foreground mb-2 block">{t(lang, "ingredient1")}</label>
            <input
              value={ing1}
              onChange={(e) => setIng1(e.target.value)}
              placeholder={t(lang, "enterIngredient")}
              list="ing-list"
              className="w-full px-4 py-3 rounded-xl border border-border bg-[#F9F7FF] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-foreground mb-2 block">{t(lang, "ingredient2")}</label>
            <input
              value={ing2}
              onChange={(e) => setIng2(e.target.value)}
              placeholder={t(lang, "enterIngredient")}
              list="ing-list"
              className="w-full px-4 py-3 rounded-xl border border-border bg-[#F9F7FF] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm"
            />
          </div>
          <datalist id="ing-list">
            {INGREDIENTS_DB.map((i) => <option key={i.id} value={i.name} />)}
          </datalist>
        </div>
        <Btn variant="primary" size="lg" className="w-full justify-center" onClick={handleCheck} disabled={!ing1 || !ing2}>
          <FlaskConical size={18} /> {t(lang, "checkCompatibility")}
        </Btn>
      </Card>

      {/* Quick suggestions */}
      <div>
        <p className="text-sm font-semibold text-muted-foreground mb-3">{lang === "en" ? "Popular checks:" : "Pemeriksaan populer:"}</p>
        <div className="flex flex-wrap gap-2">
          {COMPATIBILITY_DATA.slice(0, 4).map((c) => (
            <button
              key={c.id}
              onClick={() => { setIng1(c.ing1); setIng2(c.ing2); setChecked(false); }}
              className="px-3 py-1.5 rounded-full bg-[#F3F0FF] text-[#7C3AED] text-xs font-semibold hover:bg-[#EDE9FE] transition-colors cursor-pointer"
            >
              {c.ing1} + {c.ing2}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      {checked && result && (() => {
        const cfg = statusConfig[result.status as keyof typeof statusConfig] ?? statusConfig.compatible;
        return (
          <Card className={`p-6 border-2 ${cfg.bg}`}>
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-family-display)" }}>
              {cfg.icon} {t(lang, "compatibilityResult")}
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <Badge color={cfg.color}>{cfg.label}</Badge>
              <span className="text-sm text-muted-foreground">{result.ing1} + {result.ing2}</span>
            </div>
            <p className={`text-sm leading-relaxed ${cfg.text} font-medium`}>{result.note}</p>
            <div className="mt-4 flex gap-3">
              <button onClick={() => nav("ingredient-detail")} className="text-sm text-[#7C3AED] font-semibold hover:underline cursor-pointer flex items-center gap-1">
                {t(lang, "viewDetail")} <ChevronRight size={14} />
              </button>
            </div>
          </Card>
        );
      })()}

      {/* Compatibility table */}
      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-family-display)" }}>
          {lang === "en" ? "Known Interactions" : "Interaksi yang Diketahui"}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left pb-3 text-muted-foreground font-semibold">{t(lang, "ingredient1")}</th>
                <th className="text-left pb-3 text-muted-foreground font-semibold">{t(lang, "ingredient2")}</th>
                <th className="text-left pb-3 text-muted-foreground font-semibold">{lang === "en" ? "Status" : "Status"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {COMPATIBILITY_DATA.map((c) => (
                <tr key={c.id} className="hover:bg-[#F9F7FF] transition-colors">
                  <td className="py-3 font-medium text-foreground">{c.ing1}</td>
                  <td className="py-3 font-medium text-foreground">{c.ing2}</td>
                  <td className="py-3">
                    <Badge color={c.status === "compatible" ? "green" : c.status === "incompatible" ? "red" : "yellow"}>
                      {statusConfig[c.status as keyof typeof statusConfig]?.label ?? c.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// ─── Ingredient Detail ──────────────────────────────────────────────────────────

function IngredientDetailPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const ingredient = INGREDIENTS_DB[0];
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button onClick={() => nav("ingredient-checker")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#7C3AED] transition-colors cursor-pointer">
        <ChevronRight size={14} className="rotate-180" /> {t(lang, "ingredientChecker")}
      </button>

      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{ingredient.name}</h2>
              <Badge color="green">{ingredient.safety}</Badge>
            </div>
            <p className="text-muted-foreground text-sm">{ingredient.category} · INCI: {ingredient.name.toUpperCase()}</p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-[#F3F0FF] flex items-center justify-center">
            <FlaskConical size={28} className="text-[#7C3AED]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">{t(lang, "benefitsOf")} {ingredient.name}</h3>
            <div className="space-y-2">
              {ingredient.benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-100">
                  <Check size={14} className="text-green-600" />
                  <span className="text-sm text-green-800 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">{lang === "en" ? "Best for Skin Types" : "Terbaik untuk Jenis Kulit"}</h3>
            <div className="space-y-2">
              {ingredient.skins.map((s) => (
                <div key={s} className="flex items-center gap-2 p-3 rounded-lg bg-[#F3F0FF] border border-violet-100">
                  <Droplets size={14} className="text-[#7C3AED]" />
                  <span className="text-sm text-[#7C3AED] font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "safetyProfile")}</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: lang === "en" ? "Irritation Risk" : "Risiko Iritasi", val: "Low", color: "green" as const },
            { label: lang === "en" ? "Comedogenic" : "Komedogenik", val: "0/5", color: "green" as const },
            { label: lang === "en" ? "Pregnancy Safe" : "Aman Kehamilan", val: lang === "en" ? "Yes" : "Ya", color: "green" as const },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-xl bg-[#F9F7FF] border border-border text-center">
              <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
              <Badge color={s.color}>{s.val}</Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "usageTips")}</h3>
        <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {(lang === "en" ? [
            "Apply after cleansing on damp skin for best absorption.",
            "Can be used twice daily — morning and evening.",
            "Compatible with most actives including hyaluronic acid and ceramides.",
            "Start with a 5% concentration if you have sensitive skin.",
          ] : [
            "Oleskan setelah membersihkan pada kulit yang lembab untuk penyerapan terbaik.",
            "Dapat digunakan dua kali sehari — pagi dan malam.",
            "Kompatibel dengan sebagian besar bahan aktif termasuk hyaluronic acid.",
            "Mulai dengan konsentrasi 5% jika Anda memiliki kulit sensitif.",
          ]).map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#F3F0FF] text-[#7C3AED] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
              {tip}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "commonIn")}</h3>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCTS.filter((_, i) => i < 4).map((p) => (
            <button key={p.id} onClick={() => nav("products")} className="flex items-center gap-3 p-3 rounded-xl bg-[#F9F7FF] border border-border hover:border-violet-200 transition-colors cursor-pointer text-left">
              <div className="w-10 h-10 rounded-lg bg-violet-50 overflow-hidden flex-shrink-0">
                <img src={`https://images.unsplash.com/photo-${p.photo}?w=40&h=40&fit=crop&auto=format`} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground truncate">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.brand}</p>
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── History Page ───────────────────────────────────────────────────────────────

function HistoryPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const [search, setSearch] = useState("");
  const filtered = HISTORY_DATA.filter((h) => h.skinType.toLowerCase().includes(search.toLowerCase()) || h.concerns.some((c) => c.toLowerCase().includes(search.toLowerCase())));
  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "history")}</h2>
          <p className="text-muted-foreground text-sm">{lang === "en" ? "All your past skin analyses" : "Semua analisis kulit Anda sebelumnya"}</p>
        </div>
        <Btn variant="primary" size="sm" onClick={() => nav("skin-analysis")}>
          <Plus size={16} /> {t(lang, "startAnalysis")}
        </Btn>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t(lang, "search")}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm"
        />
      </div>

      {filtered.length === 0 ? (
        <Card className="p-16 text-center">
          <History size={48} className="text-muted-foreground mx-auto mb-4 opacity-40" />
          <p className="text-muted-foreground">{t(lang, "noHistory")}</p>
          <Btn variant="primary" size="md" className="mt-6" onClick={() => nav("skin-analysis")}>
            {t(lang, "startAnalysis")}
          </Btn>
        </Card>
      ) : (
        <div className="space-y-4">
          {filtered.map((h) => (
            <Card key={h.id} className="p-5 hover:shadow-md hover:shadow-violet-50 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center flex-shrink-0">
                    <Activity size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{h.skinType} {lang === "en" ? "Skin Analysis" : "Analisis Kulit"}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{h.date}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {h.concerns.map((c) => <Badge key={c} color="violet">{c}</Badge>)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-[#7C3AED]">{h.score}%</p>
                    <p className="text-xs text-muted-foreground">{lang === "en" ? "match score" : "skor cocok"}</p>
                  </div>
                  <Btn variant="secondary" size="sm" onClick={() => nav("result")}>
                    <Eye size={14} /> {t(lang, "viewDetail")}
                  </Btn>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Products Page ──────────────────────────────────────────────────────────────

function ProductsPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const cats = ["all", "Cleanser", "Serum", "Moisturizer", "Sunscreen"];
  const filtered = PRODUCTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || p.category === category;
    return matchSearch && matchCat;
  });
  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "products")}</h2>
          <p className="text-muted-foreground text-sm">{lang === "en" ? "Curated for your skin profile" : "Dikurasi untuk profil kulit Anda"}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-64">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t(lang, "search")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm"
          />
        </div>
        <div className="flex gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                category === c ? "bg-[#7C3AED] text-white" : "bg-card border border-border text-muted-foreground hover:border-violet-200"
              }`}
            >
              {c === "all" ? t(lang, "allCategories") : c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <Card key={p.id} className="overflow-hidden hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300 hover:-translate-y-1">
            <div className="h-44 bg-violet-50 overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${p.photo}?w=400&h=200&fit=crop&auto=format`}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0 mr-2">
                  <p className="text-xs text-[#7C3AED] font-semibold mb-0.5">{p.brand} · {p.category}</p>
                  <h3 className="font-bold text-foreground text-sm leading-snug" style={{ fontFamily: "var(--font-family-display)" }}>{p.name}</h3>
                </div>
                <button className="p-2 rounded-lg bg-[#F3F0FF] text-[#7C3AED] hover:bg-[#EDE9FE] flex-shrink-0 cursor-pointer">
                  <Heart size={14} />
                </button>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <StarRating rating={p.rating} size={3} />
                <span className="text-xs font-semibold text-foreground">{p.rating}</span>
                <span className="text-xs text-muted-foreground">({p.reviews.toLocaleString()})</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.skin.map((s) => <Badge key={s} color="violet">{s}</Badge>)}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{formatRupiah(p.price)}</p>
                <div className="flex gap-2">
                  <Btn variant="secondary" size="sm" onClick={() => {}}>
                    <ExternalLink size={12} /> {t(lang, "affiliateLink")}
                  </Btn>
                  <Btn variant="primary" size="sm" onClick={() => {}}>
                    {t(lang, "buyNow")}
                  </Btn>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Feedback Page ──────────────────────────────────────────────────────────────

function FeedbackPage({ lang }: { lang: Lang }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("");
  const cats = lang === "en" ? ["AI Accuracy", "Product Recommendations", "Ingredient Checker", "Doctor Consultation", "App Design"] : ["Akurasi AI", "Rekomendasi Produk", "Pemeriksa Bahan", "Konsultasi Dokter", "Desain Aplikasi"];

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto">
        <Card className="p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-foreground mb-3" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "thankYou")}</h2>
          <p className="text-muted-foreground">{t(lang, "feedbackSent")}</p>
          <Btn variant="primary" size="md" className="mt-8" onClick={() => { setSubmitted(false); setRating(0); setMsg(""); setCategory(""); }}>
            {lang === "en" ? "Submit Another" : "Kirim Lagi"}
          </Btn>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div>
        <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "feedback")}</h2>
        <p className="text-muted-foreground text-sm">{lang === "en" ? "Help us improve MatchMySkin" : "Bantu kami meningkatkan MatchMySkin"}</p>
      </div>
      <Card className="p-6 space-y-6">
        <div>
          <label className="text-sm font-bold text-foreground mb-3 block">{t(lang, "rateExperience")}</label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(i)}
                className="transition-transform hover:scale-110 cursor-pointer"
              >
                <Star size={36} className={`transition-colors ${i <= (hover || rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
              </button>
            ))}
            {rating > 0 && <span className="text-sm font-semibold text-muted-foreground ml-2">{rating}/5 {t(lang, "stars")}</span>}
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-foreground mb-3 block">{lang === "en" ? "What are you reviewing?" : "Apa yang Anda tinjau?"}</label>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  category === c ? "bg-[#7C3AED] text-white" : "bg-[#F3F0FF] text-[#7C3AED] hover:bg-[#EDE9FE]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-foreground mb-2 block">{t(lang, "yourFeedback")}</label>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={5}
            placeholder={lang === "en" ? "Share your experience with MatchMySkin..." : "Bagikan pengalaman Anda dengan MatchMySkin..."}
            className="w-full px-4 py-3 rounded-xl border border-border bg-[#F9F7FF] text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm resize-none"
          />
        </div>

        <Btn variant="primary" size="lg" className="w-full justify-center" disabled={!rating || !msg} onClick={() => setSubmitted(true)}>
          {t(lang, "submitFeedback")}
        </Btn>
      </Card>
    </div>
  );
}

// ─── Profile Page ───────────────────────────────────────────────────────────────

function ProfilePage({ lang }: { lang: Lang }) {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ name: "Sari Dewi", email: "sari.dewi@email.com", phone: "+62 812 3456 7890", age: "27", gender: "Female" });
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => { setEditing(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "profile")}</h2>
        {!editing ? (
          <Btn variant="outline" size="sm" onClick={() => setEditing(true)}>
            <Edit size={14} /> {t(lang, "editProfile")}
          </Btn>
        ) : (
          <div className="flex gap-2">
            <Btn variant="ghost" size="sm" onClick={() => setEditing(false)}>{t(lang, "cancel")}</Btn>
            <Btn variant="primary" size="sm" onClick={handleSave}>{t(lang, "saveChanges")}</Btn>
          </div>
        )}
      </div>

      {saved && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700">
          <CheckCircle2 size={18} />
          <span className="text-sm font-semibold">{t(lang, "profileUpdated")}</span>
        </div>
      )}

      <Card className="p-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-white text-2xl font-extrabold" style={{ fontFamily: "var(--font-family-display)" }}>
              SD
            </div>
            {editing && (
              <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#7C3AED] flex items-center justify-center cursor-pointer">
                <Edit size={12} className="text-white" />
              </button>
            )}
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{form.name}</h3>
            <p className="text-muted-foreground text-sm">{form.email}</p>
            <Badge color="violet">{lang === "en" ? "Standard Member" : "Anggota Standar"}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {editing ? (
            <>
              <Input label={t(lang, "fullName")} value={form.name} onChange={set("name")} className="col-span-2" />
              <Input label={t(lang, "email")} type="email" value={form.email} onChange={set("email")} className="col-span-2" />
              <Input label={t(lang, "phone")} value={form.phone} onChange={set("phone")} />
              <Input label={t(lang, "age")} type="number" value={form.age} onChange={set("age")} />
            </>
          ) : (
            [
              { label: t(lang, "fullName"), val: form.name },
              { label: t(lang, "email"), val: form.email },
              { label: t(lang, "phone"), val: form.phone },
              { label: t(lang, "age"), val: form.age + " " + (lang === "en" ? "years old" : "tahun") },
              { label: t(lang, "gender"), val: form.gender },
              { label: lang === "en" ? "Member Since" : "Bergabung Sejak", val: "January 2024" },
            ].map((row) => (
              <div key={row.label} className="p-4 rounded-xl bg-[#F9F7FF] border border-border">
                <p className="text-xs text-muted-foreground mb-1">{row.label}</p>
                <p className="text-sm font-semibold text-foreground">{row.val}</p>
              </div>
            ))
          )}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "yourSkinProfile")}</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: t(lang, "skinType"), val: "Combination" },
            { label: t(lang, "skinTone"), val: "Light / Warm" },
            { label: t(lang, "skinConcerns"), val: "Acne, Dark Spots" },
            { label: t(lang, "allergies"), val: "Fragrance" },
          ].map((row) => (
            <div key={row.label} className="p-4 rounded-xl bg-[#F9F7FF] border border-border">
              <p className="text-xs text-muted-foreground mb-1">{row.label}</p>
              <p className="text-sm font-semibold text-foreground">{row.val}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Admin Dashboard ────────────────────────────────────────────────────────────

function AdminDashboardPage({ lang, nav }: { lang: Lang; nav: (p: Page) => void }) {
  const stats = [
    { icon: <Users size={20} />, label: t(lang, "totalUsers"), value: "10,248", sub: "+148 this week", color: "violet" },
    { icon: <Activity size={20} />, label: t(lang, "activeAnalyses"), value: "2,841", sub: "+62 today", color: "green" },
    { icon: <MessageSquare size={20} />, label: t(lang, "pendingFeedback"), value: "24", sub: "Needs review", color: "amber" },
    { icon: <CheckCircle2 size={20} />, label: t(lang, "systemStatus"), value: "99.9%", sub: "Uptime", color: "green" },
  ];
  return (
    <div className="max-w-6xl space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{lang === "en" ? "Recent User Activity" : "Aktivitas Pengguna Terbaru"}</h3>
              <Badge color="green">{t(lang, "active")}</Badge>
            </div>
            <div className="space-y-3">
              {[
                { user: "Sari Dewi", action: lang === "en" ? "Completed skin analysis" : "Menyelesaikan analisis kulit", time: "2 min ago", type: "analysis" },
                { user: "Budi Hartono", action: lang === "en" ? "Checked ingredient compatibility" : "Memeriksa kompatibilitas bahan", time: "5 min ago", type: "checker" },
                { user: "Cinta Maharani", action: lang === "en" ? "Submitted feedback (5★)" : "Mengirim umpan balik (5★)", time: "12 min ago", type: "feedback" },
                { user: "Doni Kusuma", action: lang === "en" ? "Viewed product recommendations" : "Melihat rekomendasi produk", time: "18 min ago", type: "product" },
                { user: "Erna Fitriana", action: lang === "en" ? "Registered new account" : "Mendaftar akun baru", time: "24 min ago", type: "register" },
              ].map((a, i) => {
                const typeColor: Record<string, string> = { analysis: "bg-violet-100 text-violet-700", checker: "bg-blue-100 text-blue-700", feedback: "bg-amber-100 text-amber-700", product: "bg-green-100 text-green-700", register: "bg-pink-100 text-pink-700" };
                return (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F9F7FF] transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${typeColor[a.type]}`}>
                      {a.user[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{a.user}</p>
                      <p className="text-xs text-muted-foreground">{a.action}</p>
                    </div>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{a.time}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <h3 className="font-bold text-foreground mb-4 text-sm" style={{ fontFamily: "var(--font-family-display)" }}>{lang === "en" ? "Management" : "Manajemen"}</h3>
            <div className="space-y-2">
              {[
                { label: t(lang, "ingredients"), page: "admin-ingredients" as Page, count: 156, icon: <FlaskConical size={16} /> },
                { label: t(lang, "compatibility"), page: "admin-compatibility" as Page, count: 48, icon: <Shield size={16} /> },
                { label: t(lang, "feedbackMgmt"), page: "admin-feedback" as Page, count: 24, icon: <MessageSquare size={16} /> },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => nav(item.page)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F9F7FF] border border-border hover:border-violet-200 hover:bg-[#F3F0FF] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-[#7C3AED]">
                    {item.icon}
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge color="violet">{item.count}</Badge>
                    <ChevronRight size={14} className="text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <h3 className="font-bold text-foreground mb-3 text-sm" style={{ fontFamily: "var(--font-family-display)" }}>{lang === "en" ? "Skin Type Distribution" : "Distribusi Jenis Kulit"}</h3>
            {[
              { type: "Combination", pct: 38 },
              { type: "Oily", pct: 29 },
              { type: "Dry", pct: 18 },
              { type: "Normal", pct: 10 },
              { type: "Sensitive", pct: 5 },
            ].map((row) => (
              <div key={row.type} className="mb-3">
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-foreground">{row.type}</span>
                  <span className="text-muted-foreground">{row.pct}%</span>
                </div>
                <div className="h-1.5 bg-[#F3F0FF] rounded-full">
                  <div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full" style={{ width: `${row.pct}%` }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── Admin: Ingredients ─────────────────────────────────────────────────────────

function AdminIngredientsPage({ lang }: { lang: Lang }) {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState(INGREDIENTS_DB);
  const [newIng, setNewIng] = useState({ name: "", category: "", safety: "Safe" });

  const filtered = ingredients.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));

  const handleAdd = () => {
    if (newIng.name) {
      setIngredients((prev) => [...prev, { id: prev.length + 1, name: newIng.name, safety: newIng.safety, category: newIng.category, benefits: [], skins: [] }]);
      setNewIng({ name: "", category: "", safety: "Safe" });
      setShowModal(false);
    }
  };

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "ingredients")}</h2>
          <p className="text-muted-foreground text-sm">{lang === "en" ? "Manage skincare ingredient database" : "Kelola database bahan skincare"}</p>
        </div>
        <div className="flex gap-3">
          <Btn variant="secondary" size="sm"><Download size={14} /> {t(lang, "export")}</Btn>
          <Btn variant="primary" size="sm" onClick={() => setShowModal(true)}><Plus size={14} /> {t(lang, "addIngredient")}</Btn>
        </div>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t(lang, "searchIngredients")}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm"
        />
      </div>

      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F9F7FF] border-b border-border">
            <tr>
              {["#", lang === "en" ? "Name" : "Nama", lang === "en" ? "Category" : "Kategori", lang === "en" ? "Safety" : "Keamanan", lang === "en" ? "Skin Types" : "Jenis Kulit", lang === "en" ? "Actions" : "Aksi"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((ing) => (
              <tr key={ing.id} className="hover:bg-[#F9F7FF] transition-colors">
                <td className="px-5 py-4 text-muted-foreground font-mono text-xs">{String(ing.id).padStart(3, "0")}</td>
                <td className="px-5 py-4 font-semibold text-foreground">{ing.name}</td>
                <td className="px-5 py-4 text-muted-foreground">{ing.category}</td>
                <td className="px-5 py-4">
                  <Badge color={ing.safety === "Safe" ? "green" : ing.safety === "Caution" ? "yellow" : "red"}>{ing.safety}</Badge>
                </td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-1">
                    {ing.skins.slice(0, 2).map((s) => <Badge key={s} color="violet">{s}</Badge>)}
                    {ing.skins.length > 2 && <Badge color="gray">+{ing.skins.length - 2}</Badge>}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-[#F3F0FF] text-[#7C3AED] transition-colors cursor-pointer"><Edit size={14} /></button>
                    <button onClick={() => setIngredients((prev) => prev.filter((i) => i.id !== ing.id))} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors cursor-pointer"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-12 text-center text-muted-foreground">
            {lang === "en" ? "No ingredients found." : "Bahan tidak ditemukan."}
          </div>
        )}
      </Card>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <Card className="w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-foreground text-lg" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "addIngredient")}</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-[#F3F0FF] text-muted-foreground cursor-pointer"><X size={18} /></button>
            </div>
            <div className="space-y-4">
              <Input label={lang === "en" ? "Ingredient Name" : "Nama Bahan"} value={newIng.name} onChange={(v) => setNewIng((n) => ({ ...n, name: v }))} placeholder="e.g. Niacinamide" />
              <Input label={lang === "en" ? "Category" : "Kategori"} value={newIng.category} onChange={(v) => setNewIng((n) => ({ ...n, category: v }))} placeholder="e.g. Active, Humectant" />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-foreground">{lang === "en" ? "Safety Level" : "Tingkat Keamanan"}</label>
                <select value={newIng.safety} onChange={(e) => setNewIng((n) => ({ ...n, safety: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[#F9F7FF] text-foreground focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#A78BFA] transition-all text-sm">
                  <option value="Safe">Safe</option>
                  <option value="Caution">Caution</option>
                  <option value="Avoid">Avoid</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Btn variant="ghost" size="md" className="flex-1 justify-center" onClick={() => setShowModal(false)}>{t(lang, "cancel")}</Btn>
              <Btn variant="primary" size="md" className="flex-1 justify-center" onClick={handleAdd}>{t(lang, "save")}</Btn>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

// ─── Admin: Compatibility ───────────────────────────────────────────────────────

function AdminCompatibilityPage({ lang }: { lang: Lang }) {
  const [data, setData] = useState(COMPATIBILITY_DATA);
  const statusLabels = {
    compatible: t(lang, "compatible"),
    incompatible: t(lang, "incompatible"),
    caution: t(lang, "caution"),
  };
  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "compatibility")}</h2>
          <p className="text-muted-foreground text-sm">{lang === "en" ? "Manage ingredient compatibility rules" : "Kelola aturan kompatibilitas bahan"}</p>
        </div>
        <Btn variant="primary" size="sm"><Plus size={14} /> {lang === "en" ? "Add Rule" : "Tambah Aturan"}</Btn>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: t(lang, "compatible"), count: data.filter((d) => d.status === "compatible").length, color: "green" as const },
          { label: t(lang, "caution"), count: data.filter((d) => d.status === "caution").length, color: "yellow" as const },
          { label: t(lang, "incompatible"), count: data.filter((d) => d.status === "incompatible").length, color: "red" as const },
        ].map((s) => (
          <Card key={s.label} className="p-4 text-center">
            <p className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{s.count}</p>
            <Badge color={s.color}>{s.label}</Badge>
          </Card>
        ))}
      </div>

      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F9F7FF] border-b border-border">
            <tr>
              {["#", t(lang, "ingredient1"), t(lang, "ingredient2"), lang === "en" ? "Status" : "Status", lang === "en" ? "Note" : "Catatan", lang === "en" ? "Actions" : "Aksi"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-[#F9F7FF] transition-colors">
                <td className="px-5 py-4 text-muted-foreground font-mono text-xs">{String(row.id).padStart(3, "0")}</td>
                <td className="px-5 py-4 font-semibold text-foreground">{row.ing1}</td>
                <td className="px-5 py-4 font-semibold text-foreground">{row.ing2}</td>
                <td className="px-5 py-4">
                  <Badge color={row.status === "compatible" ? "green" : row.status === "incompatible" ? "red" : "yellow"}>
                    {statusLabels[row.status as keyof typeof statusLabels] ?? row.status}
                  </Badge>
                </td>
                <td className="px-5 py-4 text-muted-foreground max-w-xs truncate text-xs">{row.note}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-[#F3F0FF] text-[#7C3AED] transition-colors cursor-pointer"><Edit size={14} /></button>
                    <button onClick={() => setData((prev) => prev.filter((d) => d.id !== row.id))} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors cursor-pointer"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// ─── Admin: Feedback ────────────────────────────────────────────────────────────

function AdminFeedbackPage({ lang }: { lang: Lang }) {
  const [data, setData] = useState(FEEDBACKS_DATA);
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? data : data.filter((f) => f.status === filter);

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-family-display)" }}>{t(lang, "feedbackMgmt")}</h2>
          <p className="text-muted-foreground text-sm">{lang === "en" ? "Review and manage user feedback" : "Tinjau dan kelola umpan balik pengguna"}</p>
        </div>
        <div className="flex gap-2">
          {["all", "pending", "resolved"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer capitalize ${filter === f ? "bg-[#7C3AED] text-white" : "bg-card border border-border text-muted-foreground hover:border-violet-200"}`}>
              {f === "all" ? (lang === "en" ? "All" : "Semua") : f === "pending" ? t(lang, "pending") : t(lang, "resolved")}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((fb) => (
          <Card key={fb.id} className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {fb.user[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-foreground text-sm">{fb.user}</span>
                    <StarRating rating={fb.rating} size={3} />
                    <span className="text-xs text-muted-foreground">{fb.date}</span>
                    <Badge color={fb.status === "resolved" ? "green" : "yellow"}>
                      {fb.status === "resolved" ? t(lang, "resolved") : t(lang, "pending")}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fb.msg}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                {fb.status === "pending" && (
                  <Btn variant="secondary" size="sm" onClick={() => setData((prev) => prev.map((f) => f.id === fb.id ? { ...f, status: "resolved" } : f))}>
                    <Check size={12} /> {lang === "en" ? "Resolve" : "Selesaikan"}
                  </Btn>
                )}
                <button onClick={() => setData((prev) => prev.filter((f) => f.id !== fb.id))} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors cursor-pointer">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <Card className="p-12 text-center text-muted-foreground">
            {lang === "en" ? "No feedback found." : "Umpan balik tidak ditemukan."}
          </Card>
        )}
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("landing");
  const [lang, setLang] = useState<Lang>("en");

  const nav = (p: Page) => setPage(p);
  const isPublic = page === "landing" || page === "login" || page === "register";
  const isAdmin = page === "admin" || page === "admin-ingredients" || page === "admin-compatibility" || page === "admin-feedback";

  const renderPage = () => {
    switch (page) {
      case "landing": return <LandingPage lang={lang} nav={nav} />;
      case "login": return <LoginPage lang={lang} nav={nav} />;
      case "register": return <RegisterPage lang={lang} nav={nav} />;
      case "dashboard": return <DashboardPage lang={lang} nav={nav} />;
      case "skin-analysis": return <SkinAnalysisPage lang={lang} nav={nav} />;
      case "result": return <ResultPage lang={lang} nav={nav} />;
      case "ingredient-checker": return <IngredientCheckerPage lang={lang} nav={nav} />;
      case "ingredient-detail": return <IngredientDetailPage lang={lang} nav={nav} />;
      case "history": return <HistoryPage lang={lang} nav={nav} />;
      case "products": return <ProductsPage lang={lang} nav={nav} />;
      case "feedback": return <FeedbackPage lang={lang} />;
      case "profile": return <ProfilePage lang={lang} />;
      case "admin": return <AdminDashboardPage lang={lang} nav={nav} />;
      case "admin-ingredients": return <AdminIngredientsPage lang={lang} />;
      case "admin-compatibility": return <AdminCompatibilityPage lang={lang} />;
      case "admin-feedback": return <AdminFeedbackPage lang={lang} />;
      default: return <LandingPage lang={lang} nav={nav} />;
    }
  };

  if (isPublic) {
    return (
      <>
        <PublicNav lang={lang} setLang={setLang} nav={nav} />
        {renderPage()}
      </>
    );
  }

  return (
    <AppLayout lang={lang} setLang={setLang} nav={nav} currentPage={page} isAdmin={isAdmin}>
      {renderPage()}
    </AppLayout>
  );
}

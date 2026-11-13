import React, { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ChevronDown,
  MapPin,
  Menu,
  Search,
  ShoppingBasket,
  Sparkles,
  X,
} from 'lucide-react'

const categories = ['الكل', 'مساحيق الغسيل', 'معطرات', 'منظفات الأرضيات', 'صابون', 'مناديل']

const products = [
  {
    id: 1,
    name: 'مسحوق غسيل أوتوماتيك',
    detail: 'عبوة 10 كجم',
    category: 'مساحيق الغسيل',
    price: '78',
    oldPrice: '85',
    tone: 'lavender',
    badge: 'الأكثر طلباً',
  },
  {
    id: 2,
    name: 'منظف أرضيات ليمون',
    detail: 'كرتونة 12 × 1 لتر',
    category: 'منظفات الأرضيات',
    price: '52',
    oldPrice: null,
    tone: 'lemon',
    badge: 'جديد',
  },
  {
    id: 3,
    name: 'معطر جو نسيم الصباح',
    detail: 'كرتونة 24 حبة',
    category: 'معطرات',
    price: '64',
    oldPrice: '70',
    tone: 'mint',
    badge: 'عرض خاص',
  },
  {
    id: 4,
    name: 'صابون سائل لليدين',
    detail: 'كرتونة 12 × 500 مل',
    category: 'صابون',
    price: '45',
    oldPrice: null,
    tone: 'sky',
    badge: null,
  },
  {
    id: 5,
    name: 'مناديل ورقية ناعمة',
    detail: 'كرتونة 30 علبة',
    category: 'مناديل',
    price: '39',
    oldPrice: null,
    tone: 'rose',
    badge: null,
  },
  {
    id: 6,
    name: 'كلور متعدد الاستخدام',
    detail: 'كرتونة 12 × 1 لتر',
    category: 'منظفات الأرضيات',
    price: '31',
    oldPrice: '35',
    tone: 'blue',
    badge: 'قيمة ممتازة',
  },
]

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      className="whatsapp-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5.2 18.8 4 22l3.3-1.1A8.8 8.8 0 1 0 5.2 18.8Z" fill="currentColor" />
      <path d="M8.2 7.7c.2-.4.4-.4.8-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7c-.1.2-.1.3 0 .5.4.7 1.1 1.5 1.8 1.9.2.1.4.1.5-.1l.7-.8c.1-.2.4-.2.6-.1l1.8.9c.2.1.3.3.2.5-.1.6-.4 1.1-.9 1.4-.4.3-1 .4-1.5.2-1.2-.3-2.7-1.2-3.8-2.2-1-1-1.9-2.4-2.2-3.6-.2-.6-.1-1.2.2-1.7.2-.1.7-.4.9 0Z" fill="white" />
    </svg>
  )
}

function ProductVisual({ tone }) {
  return (
    <div className={`product-visual ${tone}`}>
      <div className="bottle bottle-back" />
      <div className="bottle bottle-front">
        <div className="bottle-cap" />
        <div className="bottle-label">
          <strong>نقاء</strong>
          <span>للنظافة اليومية</span>
        </div>
      </div>
      <Sparkles className="visual-sparkle sparkle-one" size={17} />
      <Sparkles className="visual-sparkle sparkle-two" size={11} />
    </div>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'الكل' || product.category === activeCategory
      const matchesSearch = !query || `${product.name} ${product.detail}`.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <div className="app-shell">
      <div className="top-strip">
        <div className="page-container strip-content">
          <span>أسعار جملة منافسة • جودة تثق بها</span>
          <span className="strip-link">التوصيل متاح للطلبات الكبيرة</span>
        </div>
      </div>

      <header className="site-header">
        <div className="page-container header-content">
          <a className="brand" href="#home" aria-label="الشرق لتجارة المنظفات">
            <span className="brand-mark"><ShoppingBasket size={22} strokeWidth={2.2} /></span>
            <span>
              <strong>الشرق</strong>
              <small>لتجارة المنظفات</small>
            </span>
          </a>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="التنقل الرئيسي">
            <a href="#products" onClick={() => setMenuOpen(false)}>المنتجات</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>لماذا الشرق؟</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
          </nav>
          <a className="header-whatsapp" href="https://wa.me/963947519598" aria-label="تواصل معنا عبر واتساب">
            <WhatsAppIcon size={23} />
            <span>اطلب عبر واتساب</span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="page-container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> موردك الموثوق للمنظفات بالجملة</div>
              <h1>نظافة أكثر،<br /><em>سعر أوفر.</em></h1>
              <p>نوفر لك تشكيلة واسعة من المنظفات عالية الجودة بأسعار جملة تناسب تجارتك وتكبر معك.</p>
              <a className="primary-button" href="#products">
                تصفح المنتجات
                <ArrowLeft size={18} />
              </a>
              <div className="hero-note">
                <span className="avatar-stack"><i>م</i><i>ع</i><i>ر</i></span>
                <span>يثق بنا أكثر من <strong>+500 عميل</strong> من تجار التجزئة</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-glow" />
              <div className="hero-blob blob-back" />
              <div className="hero-blob blob-front">
                <span className="art-bottle art-bottle-one" />
                <span className="art-bottle art-bottle-two" />
                <span className="art-bottle art-bottle-three" />
              </div>
              <div className="floating-card card-price"><small>أسعار تبدأ من</small><strong>25 <b>ر.س</b></strong></div>
              <div className="floating-card card-quality"><span>✓</span><div><strong>جودة مضمونة</strong><small>منتجات مختارة بعناية</small></div></div>
            </div>
          </div>
        </section>

        <section className="products-section page-container" id="products">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> تشكيلتنا</div>
              <h2>منتجاتنا <em>الأكثر طلباً</em></h2>
            </div>
            <p>اختر من تشكيلتنا الواسعة ما يناسب احتياجك<br />وبأفضل أسعار الجملة.</p>
          </div>

          <div className="catalog-tools">
            <div className="category-list" role="tablist" aria-label="تصنيفات المنتجات">
              {categories.map((category) => (
                <button
                  className={activeCategory === category ? 'category-chip active' : 'category-chip'}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  aria-selected={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Search size={18} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ابحث عن منتج..." />
            </label>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <ProductVisual tone={product.tone} />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                  <div className="product-footer">
                    <div className="price"><strong>{product.price}</strong><span>ر.س</span>{product.oldPrice && <del>{product.oldPrice} ر.س</del>}</div>
                    <a href="https://wa.me/963947519598" className="small-order" aria-label={`اطلب ${product.name}`}><WhatsAppIcon size={21} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredProducts.length === 0 && <div className="empty-state">لا توجد منتجات مطابقة لبحثك.</div>}
        </section>

        <section className="trust-section" id="about">
          <div className="page-container trust-grid">
            <div><span className="trust-icon">✦</span><strong>جودة نضمنها</strong><p>منتجات موثوقة ومختارة بعناية</p></div>
            <div><span className="trust-icon">⌁</span><strong>أسعار الجملة</strong><p>هامش ربح أفضل لتجارتك</p></div>
            <div><span className="trust-icon">◷</span><strong>استجابة سريعة</strong><p>نرد على استفساراتك بكل اهتمام</p></div>
          </div>
        </section>

        <section className="location-section" id="location">
          <div className="page-container location-card">
            <div className="location-icon"><MapPin size={24} /></div>
            <div className="location-copy">
              <span>زورونا في محلنا</span>
              <strong>الباب - غرب دوار الراعي - مقابل جامع البوشي</strong>
            </div>
            <a
              className="map-button"
              href="https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%A8%D8%A7%D8%A8%20%D8%BA%D8%B1%D8%A8%20%D8%AF%D9%88%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B1%D8%A7%D8%B9%D9%8A%20%D9%85%D9%82%D8%A7%D8%A8%D9%84%20%D8%AC%D8%A7%D9%85%D8%B9%20%D8%A7%D9%84%D8%A8%D9%88%D8%B4%D9%8A"
              target="_blank"
              rel="noreferrer"
            >
              افتح في الخرائط
              <ArrowLeft size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="page-container footer-content">
          <div className="footer-cta">
            <span className="footer-sparkle"><Sparkles size={20} /></span>
            <div>
              <strong>هل أعجبك هذا الموقع؟</strong>
              <p>تواصل مع المبرمج لبناء موقعك الجديد</p>
            </div>
          </div>
          <a className="footer-contact-button" href="https://wa.me/963969834067">
            <WhatsAppIcon size={21} />
            تواصل معي الآن
            <ArrowLeft size={16} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

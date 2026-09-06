import { Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { plans } from './data/plans'

const logoPath = '/images/logos/Gemini_Generated_Image_ixjt1nixjt1nixjt.png'
const paymentConfig = {
  currency: 'USDT',
  network: 'TRC20',
  walletAddress: 'TLXP7yBW1KzVoiNdHL74My5kwhmxsivVvW',
}

const formatMoney = (value) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(value)

const testimonials = [
  {
    id: 'alex',
    name: 'Alex Tan',
    location: 'Kuala Lumpur',
    title: 'Long-term investor',
    quote: 'The process felt polished, clear, and easy to follow from start to finish.',
    badge: 'Verified participant',
    video: '/images/testimonials/WhatsApp%20Video%202026-08-18%20at%201.54.23%20PM.mp4',
    subtitleEn: '/videos/testimonials/testimonial-alex-en.vtt',
    subtitleMs: '/videos/testimonials/testimonial-alex-ms.vtt',
  },
  {
    id: 'nora',
    name: 'Nora S.',
    location: 'Johor Bahru',
    title: 'New to gold investing',
    quote: 'I liked how simple and premium the whole experience felt. It made a big decision much easier.',
    badge: 'New member',
    video: '/images/testimonials/WhatsApp%20Video%202026-08-09%20at%209.58.15%20PM.mp4',
    subtitleEn: '/videos/testimonials/testimonial-nora-en.vtt',
    subtitleMs: '/videos/testimonials/testimonial-nora-ms.vtt',
  },
  {
    id: 'amir',
    name: 'Amir H.',
    location: 'Shah Alam',
    title: 'Strategic buyer',
    quote: 'The presentation and process felt professional, trustworthy, and easy to follow at every step.',
    badge: 'Premium member',
    video: '/images/testimonials/WhatsApp%20Video%202026-09-05%20at%2012.23.37%20PM.mp4',
    subtitleEn: '/videos/testimonials/testimonial-amir-en.vtt',
    subtitleMs: '/videos/testimonials/testimonial-amir-ms.vtt',
  },
]

function Header() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Plans', to: '/plans' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Siri Samantan home">
          <img src={logoPath} alt="Siri Samantan Gold logo" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <div className="brand-copy">
            <span className="brand-name">SIRI SAMANTAN</span>
            <span className="brand-subtitle">AFFILIATE MARKETING GOLD PROGRAM</span>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'active' : ''}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="button button-primary header-cta" to="/register">
            Register
          </Link>
          <button type="button" className="mobile-menu-button" aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

function renderPlanCard(plan) {
  return (
    <article className="plan-card vip-card" key={plan.id}>
      <div className="vip-card-header">
        <div className="vip-crown">👑</div>
        <div className="vip-number">{plan.name}</div>
      </div>

      <div className="vip-row">
        <div className="vip-column">
          <span className="vip-label">Minimum Deposit</span>
          <strong>{formatMoney(plan.usdAmount)}</strong>
        </div>

        <div className="vip-column">
          <span className="vip-label">Old Price</span>
          <strong className="old-price">{formatMoney(plan.oldPrice)}</strong>
        </div>

        <div className="vip-column">
          <span className="vip-label">Discount</span>
          <strong className="discount-price">{plan.discount}</strong>
        </div>
      </div>

      <div className="vip-rewards-box">
        <span className="vip-label">Gold Reward Plan</span>
        <div className="vip-reward-row">
          <span>Daily Gold Return</span>
          <strong>{plan.rewards.daily}</strong>
        </div>
        <div className="vip-reward-row">
          <span>Weekly Accumulation</span>
          <strong>{plan.rewards.weekly}</strong>
        </div>
        <div className="vip-reward-row">
          <span>Monthly Accumulation</span>
          <strong>{plan.rewards.monthly}</strong>
        </div>
        <p className="reward-note">
          {plan.id === 'vip1'
            ? 'Approved VIP 1 calculation based on continued participation and the program terms.'
            : 'Proportional estimate based on the approved VIP 1 calculation; confirm final figures before publishing as guaranteed.'}
        </p>
      </div>

      <div className="vip-actions">
        <Link className="button button-primary" to={`/register?plan=${plan.id}`}>
          Select {plan.name}
        </Link>
      </div>
    </article>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Siri Semantan Gold</h3>
          <p>Premium gold-focused affiliate participation program.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/risk-disclosure">Risk Disclosure</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero section-dark">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AFFILIATE MARKETING</p>
            <h1>Begin Your Gold Journey With Confidence</h1>
            <p className="lead">Explore the Siri Samantan Gold Program through structured participation, flexible plans, and a clear path to get started.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/register">Register &amp; Get Started</Link>
              <Link className="button button-secondary" to="/plans">View Plans</Link>
            </div>
            <p className="fine-print">Please review the applicable program terms, fees, eligibility requirements, and risks before completing your participation.</p>
          </div>

          <div className="hero-visual">
            <div className="gold-card">
              <span className="gold-tag">Premium Access</span>
              <h3>Gold Wealth Path</h3>
              <img
                className="gold-hero-image"
                src="/images/gold/gold.png"
                alt="Gold bars"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-strip">
        <div className="container benefits-grid">
          <div className="benefit-card">
            <span>🪙</span>
            <h4>Gold-Focused</h4>
            <p>Premium access to a gold-linked investment model.</p>
          </div>
          <div className="benefit-card">
            <span>💎</span>
            <h4>Flexible Plans</h4>
            <p>Choose the level that matches your capital and goals.</p>
          </div>
          <div className="benefit-card">
            <span>🎁</span>
            <h4>Reward Opportunities</h4>
            <p>Structured participation designed around value creation.</p>
          </div>
          <div className="benefit-card">
            <span>📦</span>
            <h4>Physical Assets</h4>
            <p>Physical gold conversion may be available under conditions.</p>
          </div>
        </div>
      </section>

      <section className="section section-investment">
        <div className="container">
          <div className="section-title-row">
            <div className="title-mark">👑</div>
            <h2>Investment Plans</h2>
          </div>

          <div className="plans-grid vip-grid">
            {plans.map((plan) => renderPlanCard(plan))}
          </div>
        </div>
      </section>

      <section className="section notice-section">
        <div className="container">
          <div className="gold-notice-box">
            <div className="notice-icon">⚠</div>
            <p>
              NOTE: 917 PURE GOLD CONVERTIBLE TO PHYSICAL ASSETS<br />
              DELIVERY TO BE MADE ON POINT OF PROVIDED PICKUP ADDRESS.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card"><span>1</span><h4>Choose Plan</h4><p>Select a plan that matches your participation level.</p></div>
            <div className="step-card"><span>2</span><h4>Register</h4><p>Complete the registration form with your details.</p></div>
            <div className="step-card"><span>3</span><h4>Pay</h4><p>Follow the crypto payment instructions and make your payment.</p></div>
            <div className="step-card"><span>4</span><h4>Submit Proof</h4><p>Upload your payment proof to complete the process.</p></div>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">REAL STORIES</p>
            <h2>Real Stories From Our Participants</h2>
          </div>

          <div className="video-testimonial-grid testimonial-two-up">
            {testimonials.map((item) => (
              <article className="video-testimonial-card" key={item.id}>
                <video
                  className="testimonial-video"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={item.video} type="video/mp4" />
                  <track kind="subtitles" src={item.subtitleEn} srclang="en" label="English" default />
                  <track kind="subtitles" src={item.subtitleMs} srclang="ms" label="Bahasa Melayu" />
                </video>

                <div className="testimonial-meta">
                  <div className="testimonial-badge">{item.badge}</div>
                  <h3>{item.name}</h3>
                  <p className="testimonial-location">{item.location}</p>
                  <p className="testimonial-title">{item.title}</p>
                  <p className="testimonial-quote">“{item.quote}”</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-box">
          <h2>FAQ</h2>
          <div className="faq-item"><h4>How does the company offer 1g of gold per day?</h4><p>Our model is built around structured sourcing, operational scale, and direct upstream access. By working with established partnerships, subcontractor networks, and licensed supply channels tied to gold-producing regions such as Mali, Ghana, and Guinea, the organisation is able to operate with stronger cost efficiency and supply continuity.</p></div>
          <div className="faq-item"><h4>What role do the partnerships and supply channels play?</h4><p>They provide the foundation for scale. The business model is designed to reduce unnecessary middle-layer costs through direct sourcing, verified logistics, and coordinated supply chain execution, allowing a more efficient route from extraction to delivery and value distribution.</p></div>
          <div className="faq-item"><h4>How does licensing and compliance affect the model?</h4><p>Proper licensing, certification, and approvals are essential for operational credibility. They help support legitimate sourcing, improve traceability, and reduce disruption in the movement and handling of gold across the supply chain.</p></div>
          <div className="faq-item"><h4>Why can the business support a daily allocation model?</h4><p>The daily allocation is based on a high-volume operational framework. When sourcing, transit, and processing are managed efficiently across a broader network, the business can create a more sustainable structure for recurring distribution and cost-controlled gold access.</p></div>
          <div className="faq-item"><h4>Is this a guaranteed investment?</h4><p>Gold has historically been recognised as a valuable asset and a way to preserve wealth. At Siri Samantan, our program is designed to provide participants with opportunities linked to gold value through structured participation. As with any asset-related opportunity, gold values may be influenced by global economic conditions, market trends, and other external factors. Our focus is to provide a clear, transparent, and rewarding experience while helping participants build long-term value through gold-based benefits.</p></div>
          <div className="faq-item"><h4>What payment method is used?</h4><p>Crypto payment instructions are provided on the payment page, including the supported wallet and blockchain network for a secure and efficient transaction process.</p></div>
          <div className="faq-item"><h4>Do I need an account?</h4><p>No account creation is required. The process is designed to be simple, direct, and transparent from registration through payment and confirmation.</p></div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <h2>Ready to Begin?</h2>
          <Link className="button button-primary" to="/register">Register &amp; Get Started</Link>
        </div>
      </section>
    </>
  )
}

function GoldMarketChart() {
  return (
    <div className="gold-chart-panel">
      <div className="chart-header-row">
        <div>
          <p className="chart-label">Market Snapshot</p>
          <h3>Gold Performance</h3>
        </div>
        <span className="chart-badge">+12.4% YTD</span>
      </div>

      <svg className="chart-svg" viewBox="0 0 520 260" role="img" aria-label="Gold performance chart">
        <defs>
          <linearGradient id="goldLine" x1="0" x2="1">
            <stop offset="0%" stopColor="#f8e7a8" />
            <stop offset="45%" stopColor="#d7b657" />
            <stop offset="100%" stopColor="#9b7423" />
          </linearGradient>
          <linearGradient id="goldFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(215,182,87,0.35)" />
            <stop offset="100%" stopColor="rgba(215,182,87,0.02)" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3].map((index) => (
          <line
            key={index}
            x1="30"
            x2="490"
            y1={45 + index * 55}
            y2={45 + index * 55}
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="5 8"
          />
        ))}

        <path
          d="M30 185 C80 170, 110 135, 150 148 S220 120, 260 100 S330 82, 370 68 S430 52, 490 42 L490 215 L30 215 Z"
          fill="url(#goldFill)"
        />

        <path
          d="M30 185 C80 170, 110 135, 150 148 S220 120, 260 100 S330 82, 370 68 S430 52, 490 42"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {[30, 150, 260, 370, 490].map((x, index) => (
          <g key={x}>
            <circle cx={x} cy={index === 0 ? 185 : index === 1 ? 148 : index === 2 ? 100 : index === 3 ? 68 : 42} r="4.5" fill="#f3d98c" />
            <text x={x} y="236" textAnchor="middle" fill="#b5bdc9" fontSize="10">{['Jan', 'Mar', 'May', 'Jul', 'Sep'][index]}</text>
          </g>
        ))}
      </svg>

      <div className="chart-stats">
        <div>
          <span className="stat-label">Spot trend</span>
          <strong>Upward</strong>
        </div>
        <div>
          <span className="stat-label">Diversification</span>
          <strong>Long-term value</strong>
        </div>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="page-shell container about-page">
      <div className="about-intro">
        <p className="eyebrow">ABOUT SIRI SEMANTAN GOLD</p>
        <h1>Built around the enduring value of gold.</h1>
        <p>Siri Semantan Gold is a premium gold-focused participation program designed to help individuals explore a clear, structured pathway into gold-linked opportunities with confidence and transparency.</p>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>Gold has long been recognised as a store of value, a hedge against volatility, and a foundational asset in diversified wealth strategies. We designed the program to present a more accessible and transparent way to understand how gold participation can fit into a long-term financial approach.</p>
          <p>Our focus is on clarity, simplicity, and trust. Every step is streamlined — from plan selection and registration to payment and confirmation — so participants can move through the experience without confusion or unnecessary friction.</p>
          <p>At its core, this program is intended to support informed participation in a premium, gold-centered opportunity, while encouraging due diligence and careful decision-making at every stage.</p>
        </div>

        <GoldMarketChart />
      </div>

        <section className="company-video-section" aria-labelledby="company-video-title">
          <div className="section-heading">
            <p className="eyebrow">INSIDE THE COMPANY</p>
            <h2 id="company-video-title">Our Team and Company Culture</h2>
            <p>See moments from the people and community behind Siri Samantan Gold.</p>
          </div>
          <div className="company-video-card">
            <video className="company-video" controls playsInline preload="metadata">
              <source src="/images/company/company-celebration-2026-09-06.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <div className="company-video-caption">
              <strong>Company Milestones</strong>
              <span>Shared for transparency and a closer look at the team behind the program.</span>
            </div>
          </div>
        </section>
    </div>
  )
}

function PlansPage() {
  return (
    <div className="page-shell container">
      <div className="section-title-row page-title-row">
        <div className="title-mark">👑</div>
        <h1>Investment Plans</h1>
      </div>
      <div className="plans-grid vip-grid">
        {plans.map((plan) => renderPlanCard(plan))}
      </div>
    </div>
  )
}

function HowItWorksPage() {
  return (
    <div className="page-shell container">
      <h1>How It Works</h1>
      <ol className="numbered-list">
        <li>Choose the plan that fits your goals.</li>
        <li>Complete the registration form.</li>
        <li>Follow the payment instructions.</li>
        <li>Submit proof of payment.</li>
        <li>Receive confirmation.</li>
      </ol>
    </div>
  )
}

function TestimonialsPage() {
  return (
    <div className="page-shell container">
      <h1>Real Stories From Our Participants</h1>
      <div className="video-testimonial-grid testimonial-two-up page-testimonials">
        {testimonials.map((item) => (
          <article className="video-testimonial-card" key={item.id}>
            <video
              className="testimonial-video"
              controls
              muted
              playsInline
              preload="metadata"
            >
              <source src={item.video} type="video/mp4" />
              <track kind="subtitles" src={item.subtitleEn} srclang="en" label="English" default />
              <track kind="subtitles" src={item.subtitleMs} srclang="ms" label="Bahasa Melayu" />
            </video>

            <div className="testimonial-meta">
              <div className="testimonial-badge">{item.badge}</div>
              <h3>{item.name}</h3>
              <p className="testimonial-location">{item.location}</p>
              <p className="testimonial-title">{item.title}</p>
              <p className="testimonial-quote">“{item.quote}”</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function FAQPage() {
  return (
    <div className="page-shell container">
      <h1>FAQ</h1>
      <div className="faq-item"><h4>Does this require a login?</h4><p>No. The journey is designed to be simple and direct: register, review payment instructions, complete the transaction, and submit proof.</p></div>
      <div className="faq-item"><h4>How do I pay?</h4><p>Use the wallet address and network shown on the payment page. You will be provided with the exact payment instructions before confirmation.</p></div>
      <div className="faq-item"><h4>Do I need an account?</h4><p>No account creation is required. The website is designed for a straightforward registration and payment flow.</p></div>
      <div className="faq-item"><h4>How do I choose the right plan?</h4><p>Each plan is structured to suit a different level of interest and participation. Review the details and select the option that best fits your goals.</p></div>
      <div className="faq-item"><h4>What happens after payment is sent?</h4><p>After payment, you return to the site and upload your payment proof so it can be reviewed and confirmed.</p></div>
      <div className="faq-item"><h4>Is this a guaranteed investment?</h4><p>Gold has historically been recognised as a valuable asset and a way to preserve wealth. At Siri Samantan, our program is designed to provide participants with opportunities linked to gold value through structured participation. As with any asset-related opportunity, gold values may be influenced by global economic conditions, market trends, and other external factors. Our focus is to provide a clear, transparent, and rewarding experience while helping participants build long-term value through gold-based benefits.</p></div>
      <div className="faq-item"><h4>Why do I need to upload proof of payment?</h4><p>Submission of proof of payment helps verify the transaction and supports confirmation of your registration and participation details.</p></div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="page-shell container contact-page">
      <div className="contact-card">
        <p className="eyebrow">Contact us</p>
        <h1>We’re here to help</h1>
        <p className="contact-copy">For general enquiries, registration support, or payment-related questions, please get in touch with our team using the contact details below.</p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:rozarkasmejk8895@hotmail.com">rozarkasmejk8895@hotmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function RegisterPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const selectedPlanId = params.get('plan') || 'vip1'
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) || plans[0]

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/payment?plan=${selectedPlan.id}`)
  }

  return (
    <div className="page-shell container registration-layout">
      <div className="registration-form-card">
        <div className="form-header">
          <p className="eyebrow">Start your membership</p>
          <h1>Register your interest</h1>
          <p className="subheading">Complete your details below to continue with your selected plan.</p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label className="field">
              <span>Preferred Account Type</span>
              <select defaultValue="Personal">
                <option>Personal</option>
                <option>Business</option>
                <option>Organization</option>
              </select>
            </label>

            <label className="field">
              <span>Full Legal Name</span>
              <input type="text" placeholder="Enter your full name" required />
            </label>

            <label className="field">
              <span>Email Address</span>
              <input type="email" placeholder="you@example.com" required />
            </label>

            <label className="field">
              <span>Phone Number</span>
              <input type="tel" placeholder="Your contact number" required />
            </label>

            <label className="field field-full">
              <span>Referral Code (Optional)</span>
              <input type="text" placeholder="If applicable" />
            </label>

            <label className="field field-full">
              <span>Selected Plan</span>
              <input type="text" value={`${selectedPlan.name} — ${formatMoney(selectedPlan.usdAmount)}`} readOnly />
            </label>
          </div>

          <div className="checkbox-group" aria-label="Required consent and acknowledgements">
            <label className="checkbox-item">
              <input type="checkbox" required />
              <span>I confirm that the information provided is accurate, complete, and up to date, and that I have not omitted any material information relevant to my registration.</span>
            </label>

            <label className="checkbox-item">
              <input type="checkbox" required />
              <span>I have read, understood, and agree to the <Link to="/terms">Terms &amp; Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>, and I consent to the processing of my personal data for registration, verification, and communication purposes.</span>
            </label>

            <label className="checkbox-item">
              <input type="checkbox" required />
              <span>I understand and accept the risks associated with participation in gold, digital asset, and asset-linked programs, including market volatility, liquidity constraints, and the irreversible nature of blockchain transactions.</span>
            </label>
          </div>

          <button type="submit" className="button button-primary form-submit">Continue to Payment</button>
        </form>
      </div>

      <aside className="registration-summary">
        <div className="summary-card">
          <p className="summary-label">Your selected plan</p>
          <h3>{selectedPlan.name}</h3>
          <div className="summary-price">{formatMoney(selectedPlan.usdAmount)}</div>
          <p className="summary-description">{selectedPlan.description}</p>

          <ul>
            {selectedPlan.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className="summary-trust">
            <span>Secure</span>
            <span>Private</span>
            <span>Verified</span>
          </div>
        </div>
      </aside>
    </div>
  )
}

function PaymentPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const selectedPlanId = params.get('plan') || 'vip1'
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) || plans[0]

  const handleCopy = async () => {
    const button = document.getElementById('copy-wallet-button')
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(paymentConfig.walletAddress)
      } else {
        const helper = document.createElement('textarea')
        helper.value = paymentConfig.walletAddress
        helper.setAttribute('readonly', '')
        helper.style.position = 'fixed'
        helper.style.top = '-9999px'
        document.body.appendChild(helper)
        helper.select()
        document.execCommand('copy')
        document.body.removeChild(helper)
      }

      if (button) {
        button.textContent = '✓ Copied'
        setTimeout(() => {
          button.textContent = 'Copy Address'
        }, 1500)
      }
    } catch (error) {
      if (button) {
        button.textContent = 'Copy Failed'
        setTimeout(() => {
          button.textContent = 'Copy Address'
        }, 1500)
      }
    }
  }

  return (
    <div className="page-shell container payment-page">
      <h1>Complete Your Payment</h1>
      <div className="selected-plan-box">
        <strong>Your Selected Plan</strong>
        <p>{selectedPlan.name}</p>
        <p>Payment Amount: {formatMoney(selectedPlan.usdAmount)}</p>
        <p>Approximate Local Amount: {selectedPlan.localAmount}</p>
      </div>

      <div className="wallet-box">
        <h3>Pay With {paymentConfig.currency}</h3>
        <p><strong>Network:</strong> {paymentConfig.network}</p>
        <p><strong>Wallet Address:</strong></p>
        <div className="wallet-address">{paymentConfig.walletAddress}</div>
        <div className="wallet-actions">
          <button id="copy-wallet-button" className="button button-primary" type="button" onClick={handleCopy}>Copy Address</button>
          <button className="button button-secondary" type="button" aria-label="QR code placeholder">QR Code</button>
        </div>
      </div>

      <div className="payment-instructions">
        <h3>Payment Instructions</h3>
        <ol>
          <li>Copy the wallet address</li>
          <li>Open your cryptocurrency wallet</li>
          <li>Send the required amount</li>
          <li>Confirm the transaction</li>
          <li>Save your transaction details</li>
          <li>Return here and submit your payment proof</li>
        </ol>
      </div>

      <div className="warning-box">
        Important: Verify the wallet address and blockchain network carefully before sending cryptocurrency. Blockchain transactions may be irreversible. Only send the supported cryptocurrency using the network displayed on this page.
      </div>

      <Link className="button button-primary" to={`/payment-proof?plan=${selectedPlan.id}`}>I&apos;ve Made My Payment</Link>
    </div>
  )
}

function PaymentProofPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const selectedPlanId = params.get('plan') || 'vip1'
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) || plans[0]

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/success')
  }

  return (
    <div className="page-shell container form-page">
      <h1>Submit Payment Proof</h1>
      <p>After completing your payment, upload your transaction proof below so we can confirm your submission.</p>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label>
          Reference Number
          <input type="text" value={`SSG-${selectedPlan.id.toUpperCase()}-${Date.now().toString().slice(-6)}`} readOnly />
        </label>
        <label>
          Selected Plan
          <input type="text" value={selectedPlan.name} readOnly />
        </label>
        <label>
          Amount Paid
          <input type="text" placeholder="Enter amount paid" />
        </label>
        <label>
          Transaction Hash / ID
          <input type="text" placeholder="Enter transaction hash or ID" />
        </label>
        <label>
          Upload Payment Proof
          <input type="file" accept="image/png,image/jpeg,image/webp" />
        </label>
        <button type="submit" className="button button-primary">Submit Payment Proof</button>
      </form>
    </div>
  )
}

function SuccessPage() {
  return (
    <div className="page-shell container success-box">
      <h1>Thank You</h1>
      <p>Your registration details and payment proof have been successfully submitted.</p>
      <p><strong>Reference Number:</strong> SSG-20260905-000001</p>
      <p>Please keep this reference number and your transaction details for your records.</p>
      <Link className="button button-primary" to="/">Back to Home</Link>
    </div>
  )
}

function TermsPage() {
  return (
    <div className="page-shell container legal-page">
      <h1>Terms &amp; Conditions</h1>

      <p>These Terms &amp; Conditions govern your access to and use of the website, registration process, payment instructions, and participation in the Siri Semantan Gold program. By continuing to browse, register, submit information, or make payment through this website, you acknowledge that you have read, understood, and agree to be legally bound by these terms. If you do not agree with any part of these terms, you must not proceed with registration or make any payment through the platform.</p>

      <p>The platform is provided for informational and operational purposes, including program registration, product or benefit selection, payment guidance, and submission of proof of payment. Any participation decision is made solely by the user, and the platform does not guarantee profit, returns, asset appreciation, or any particular outcome. These terms are intended to protect both the business and the participant by setting clear expectations regarding responsibilities, disclosures, payments, data handling, and risk awareness.</p>

      <h3>1. Scope of the Program</h3>
      <p>Siri Semantan Gold is a premium gold-focused participation program designed to present a structured and clear pathway for users to understand and participate in gold-linked opportunities. The program may include participation plans, registration workflows, payment instructions, and communication channels. While the website presents a simplified user journey, all participation must be based on the information provided at the time of registration and payment, and may be subject to additional verification, confirmation, or due diligence requirements.</p>
      <p>Participation in the program is not a promise of guaranteed financial return, asset ownership, or profit. The website is not a broker, adviser, or platform offering regulated financial advice. It is a presentation and administrative interface created to support a participation process. Any decision to join or contribute should be made only after careful review of the information made available, including risk disclosures, fees, and operating conditions.</p>

      <h3>2. Eligibility and User Responsibility</h3>
      <p>By registering or participating, you represent and warrant that you are legally competent to enter into a binding agreement, that all information you provide is accurate and truthful, and that you are acting in your own personal or authorized business capacity. You agree not to use the website for fraudulent, deceptive, abusive, or unlawful activity, including submission of false identities, manipulated payment data, or any act that could harm the business, other users, or the integrity of the platform.</p>
      <p>You are responsible for ensuring that your use of the website complies with all applicable local, national, and international laws, including those relating to taxation, anti-money laundering, data protection, sanctions, privacy, and digital transactions. The business reserves the right to request additional documentation, verify identity, reject incomplete registrations, suspend participation, or terminate access if there is any concern regarding compliance, accuracy, misconduct, or suspicious activity.</p>
      <p>We may require proof of identity, proof of payment, or other relevant documentation in order to verify the validity of a registration. Failure to provide such documentation when requested may result in delayed processing, rejection of participation, or account suspension. Any decision taken in this regard is at the sole discretion of the business and is based on operational, compliance, and risk considerations.</p>

      <h3>3. Registration and Information Accuracy</h3>
      <p>Users are required to complete the registration form with accurate and complete information. This includes, where applicable, personal details, contact information, preferred account type, payment references, and selected participation plan. You agree that any failure to provide accurate information may delay processing, affect validation, or make your participation void or ineligible.</p>
      <p>It is your responsibility to maintain the confidentiality of your information and to update any contact or account details that may affect communication, verification, or payment confirmation. We shall not be liable for missed communication, delays, or loss caused by inaccurate or outdated information supplied by the participant.</p>
      <p>By submitting the registration form, you authorize the business to use the information provided for the administrative handling of your participation, including communication, verification, payment processing, and support-related requests. This authorization is limited to operational needs associated with the participation flow and is further governed by the Privacy Policy.</p>

      <h3>4. Payment Instructions and Crypto Transactions</h3>
      <p>Payment instructions, wallet addresses, and blockchain networks displayed on this website are provided for transactional clarity and convenience. You are solely responsible for verifying that the wallet address, network, and payment amount are correct before transmitting any funds. Cryptocurrency payments are generally irreversible and may be permanently lost if sent to the wrong address, to an unsupported network, or in an incorrect amount. The business does not guarantee the recovery of funds once a transaction has been broadcast on a blockchain network.</p>
      <p>Participants must ensure they understand the network used, the supported currency, and the applicable transaction confirmation requirements prior to making payment. The business may request a proof of transaction or supporting documentation to validate a payment. If funds are sent incorrectly or unsupported, the business may not be able to reverse, track, or recover the amount, and the participant bears full responsibility for any such loss.</p>
      <p>It is the participant&apos;s responsibility to check wallet details, verify transaction confirmations, and ensure that any payment reference and transaction ID is retained for future proof and dispute resolution. All transaction records should be kept securely and reported promptly if there is a discrepancy or concern.</p>

      <h3>5. Fees, Plan Details, and Pricing</h3>
      <p>All fees, pricing, and participation amounts shown on the website are presented for reference and may be subject to change based on operational conditions, changes in pricing policy, foreign exchange movements, or administrative updates. Some amounts may be displayed in USD or local equivalent terms for convenience. These values are not guarantees and may differ depending on payment channel, exchange rate, current market conditions, or timing of transaction.</p>
      <p>If pricing or structural details change before or during the transaction process, the business may revise the relevant information or require confirmation before proceeding. Participants are encouraged to review all final details before confirming payment. Any plan selection is subject to availability, eligibility, and operational review. The business reserves the right to amend or discontinue offerings at any time without prior notice, subject to any existing lawful commitments already accepted by the business.</p>
      <p>Where a plan includes special benefits, promotional rewards, or physical asset conversion references, these terms are subject to the applicable condition, eligibility, and operational requirements. If such benefits are dependent on verification, documentation, or external conditions, the business may require additional steps or reserve the right to decline or modify such benefits if the conditions are not met.</p>

      <h3>6. No Financial Advice and Risk Disclosure</h3>
      <p>All information provided on this website is intended for general informational purposes only. It is not and should not be construed as financial, legal, tax, investment, or professional advice. The information may not be appropriate for every individual and should not be used as the sole basis for a significant financial decision. Participants are responsible for evaluating their own financial objectives, risk tolerance, liquidity needs, and personal circumstances before making any commitment.</p>
      <p>Participation in gold-related, digital asset, or asset-linked programs may involve material risk. Market prices may fluctuate, liquidity may be limited, regulatory environments may change, and external economic conditions may affect the value of assets or participation outcomes. There is no guarantee of profit, return of capital, preservation of value, or the realization of any expected reward. Applicants and participants must understand that the value of assets may rise or fall and that losses may occur.</p>
      <p>Because cryptocurrencies and digital assets can be volatile and sometimes difficult to recover once transferred, each participant must exercise caution and perform their own due diligence before making any payment. By proceeding with registration and payment, you acknowledge that you understand and accept these risks and that you are making the decision voluntarily and knowingly.</p>

      <h3>7. Privacy, Data Use, and Confidentiality</h3>
      <p>The business collects personal and transactional information in order to process registrations, verify participation, respond to enquiries, and maintain necessary records. Personal information may include name, contact details, selected plan, referral code, payment reference information, and uploaded proof of payment. This information is used only for the legitimate purposes of program administration, communication, security review, and compliance with applicable legal or operational requirements.</p>
      <p>The business will take reasonable steps to protect personal data from unauthorized access, misuse, or loss. However, no digital system is completely immune to risk, and the business cannot guarantee absolute security. Participants are responsible for protecting their own passwords, communication accounts, and sensitive information, particularly where login credentials or financial details are involved.</p>
      <p>We may share information with authorized internal staff, service providers, or relevant representatives when required to complete processing, verification, communication, or compliance review. We do not sell personal information for commercial gain, and the use of data is limited to the purposes described in the Privacy Policy. Any data exchange will be handled in accordance with the Privacy Policy and all applicable laws.</p>

      <h3>8. Intellectual Property and Website Use</h3>
      <p>All content displayed on this website, including text, graphics, branding, layout, videos, logos, product descriptions, and source code elements, is the intellectual property of the business or its authorized providers and may be protected by copyright, trademark, and other applicable intellectual property laws. Participants may not copy, reproduce, republish, distribute, modify, reverse engineer, scrape, or exploit website content without prior written permission from the business.</p>
      <p>Access to the website does not create any transfer of ownership or license to use the brand, content, or materials beyond ordinary browsing and participation-related use. Any unauthorized use of site content or branding may result in legal action and immediate suspension of access.</p>

      <h3>9. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, the business, its employees, managers, affiliates, and agents shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use or inability to use the website, participation in the program, payment instructions, communication delays, data loss, or reliance on information contained on the website. This includes, without limitation, losses arising from incorrect data entry, unsupported blockchain networks, delayed payment verification, system outages, third-party service failures, or other operational disruptions.</p>
      <p>Where local law does not allow exclusion of certain liabilities, the business will limit liability only to the extent legally permissible and shall not exclude liabilities that cannot be lawfully restricted. The participant agrees that any claim arising from usage of the website or participation in the program should be brought within a reasonable time and in a manner consistent with any applicable legal notice periods.</p>

      <h3>10. Amendment, Termination, and Dispute Resolution</h3>
      <p>The business may amend, revise, or update these Terms &amp; Conditions at any time to reflect operational changes, legal requirements, business developments, or improvements to the platform. Continued use of the website after an updated version becomes effective constitutes your acceptance of the revised terms. It is your responsibility to check this page regularly for changes.</p>
      <p>We reserve the right to suspend or terminate access to the website or participation in the program if we believe that a user has violated these terms, provided false information, attempted fraudulent activity, failed to complete required verification, or engaged in conduct harmful to the business or other participants. In such cases, the business may decline participation, reject payment, withhold confirmation, or take legal action where appropriate.</p>
      <p>Any dispute, claim, or controversy arising in connection with these terms or the participation process shall first be addressed by good-faith negotiation. If a resolution cannot be reached, the matter may be subject to formal dispute resolution or applicable legal proceedings in the jurisdiction determined by the business. You agree that the laws of the governing jurisdiction shall apply, and you accept that the interpretation and enforcement of these terms will be based on those laws.</p>

      <h3>11. Final Agreement</h3>
      <p>These Terms &amp; Conditions represent the full understanding between the user and the business regarding the website, registration workflow, payment instructions, and participation process, except where additional specific terms apply to a particular program or event. If any clause is found to be unenforceable or invalid, the remaining clauses shall remain in force to the extent permitted by law. The business may waive enforcement of a particular clause without waiving future enforcement of the same or other clauses.</p>
      <p>By using this website, completing registration, and making any payment or submission, you acknowledge that you have had the opportunity to review these terms, that you understand the legal implications of your actions, and that you agree to comply with all requirements and obligations stated above. This agreement is designed to protect the integrity of the process, support clear communication, and set transparent expectations for both parties involved.</p>
    </div>
  )
}

function PrivacyPage() {
  return (
    <div className="page-shell container legal-page">
      <h1>Privacy Policy</h1>
      <p>We respect the privacy and confidentiality of our participants. This Privacy Policy explains how information is collected, used, and protected when someone interacts with this website and submits a registration or payment reference.</p>
      <p>Information collected may include name, email address, phone number, selected plan, referral code, payment reference details, and uploaded proof of payment. This information is used to process registrations, verify payment submissions, and communicate with participants regarding their participation.</p>
      <p>We do not sell, rent, or trade personal information to third parties. Information may be shared only with authorized personnel, service providers, or legal representatives when required to complete processing, compliance, or security review.</p>
      <p>We take reasonable steps to protect submitted information and uploaded payment proof against unauthorized access, misuse, or disclosure. However, no internet-based transmission or storage system can be guaranteed to be 100% secure.</p>
      <p>By submitting information on this website, you acknowledge that you have provided accurate information and that you consent to the intended use of your data for program processing and communication related to your participation.</p>
      <p>Participants may request access, correction, or deletion of personal information where legally permitted and appropriate. Contact details for such requests, if applicable, will be provided in the relevant business communication channels.</p>
    </div>
  )
}

function RiskDisclosurePage() {
  return (
    <div className="page-shell container legal-page">
      <h1>Understanding Your Gold Participation</h1>
      <p>Gold has remained one of the world’s most recognised stores of value for generations. Like all asset-related opportunities, gold value can be affected by market movements, economic changes, and global conditions.</p>
      <p>At Siri Samantan, we believe in providing participants with clear information, a structured approach, and a platform focused on gold value growth.</p>
      <p>Participants are encouraged to understand the program details, review their personal goals, and make decisions that align with their individual circumstances.</p>
      <p>Our commitment is to create a transparent, reliable, and rewarding experience for everyone participating in the Siri Samantan Gold Program.</p>
      <p className="compliance-note"><strong>Important:</strong> This information is for general purposes and does not guarantee returns or outcomes. Please review the program terms and consider independent professional advice before participating.</p>
    </div>
  )
}

function App() {
  const mobileLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Plans', to: '/plans' },
    { label: 'Contact', to: '/contact' },
    { label: 'Login', to: '/register' },
  ]

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-proof" element={<PaymentProofPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/risk-disclosure" element={<RiskDisclosurePage />} />
        </Routes>
      </main>
      <Footer />

      <nav className="mobile-bottom-nav" aria-label="Mobile bottom navigation">
        {mobileLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'bottom-nav-item active' : 'bottom-nav-item'}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default App

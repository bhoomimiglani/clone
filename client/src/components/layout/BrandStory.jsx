import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND } from '../../utils/brand'
import Logo from '../Logo'
import toast from 'react-hot-toast'
import './BrandStory.css'

export default function BrandStory() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    toast.success('Subscribed! 🎉')
    setEmail('')
  }

  return (
    <section className="brand-combined">
      {/* Top row: brand story + newsletter side by side */}
      <div className="brand-combined-top">

        {/* Left: brand info */}
        <div className="brand-combined-left">
          <Logo size="md" dark noLink />
          <p className="brand-combined-tagline">"{BRAND.motto}"</p>
          <p className="brand-combined-desc">
            Story-driven clothing for the generation that creates. Built in India. Designed for creators.
          </p>
          <div className="brand-combined-values">
            {['Creative Expression','Creator First','High Quality','Built in India'].map(v => (
              <span key={v} className="brand-val-chip">{v}</span>
            ))}
          </div>
          <Link to="/about" className="brand-combined-link">
            Read Our Story <i className="fa fa-arrow-right" />
          </Link>
        </div>

        {/* Right: newsletter */}
        <div className="brand-combined-right">
          <h3 className="brand-newsletter-title">JOIN THE COMMUNITY</h3>
          <p className="brand-newsletter-sub">Early access to drops, exclusive deals & creator stories</p>
          <form className="brand-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="brand-socials">
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" /> {BRAND.instagram}
            </a>
            <a href={`mailto:${BRAND.email}`}>
              <i className="fa fa-envelope" /> {BRAND.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

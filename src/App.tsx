/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

// --- INLINE SVG ICONS ---

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.164.422.359 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.248 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.164-1.057.359-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.248-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.164-.422-.359-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.248-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.164 1.057-.359 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.332 4.143.628c-.788.306-1.455.717-2.12 1.382C1.358 2.675.947 3.342.641 4.13c-.296.762-.496 1.632-.556 2.91C.014 8.32 0 8.728 0 11.987v.025c0 3.259.014 3.667.072 4.947.06 1.278.26 2.148.556 2.91.306.788.717 1.455 1.382 2.12.665.665 1.332 1.076 2.12 1.382.762.296 1.632.496 2.91.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.278-.06 2.148-.26 2.91-.556.788-.306 1.455-.717 2.12-1.382.665-.665 1.076-1.332 1.382-2.12.296-.762.496-1.632.556-2.91.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.278-.26-2.148-.556-2.91-.306-.788-.717-1.455-1.382-2.12C21.326 1.345 20.659.934 19.871.628c-.762-.296-1.632-.496-2.91-.556C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.012 4.012 0 110-8.024 4.012 4.012 0 010 8.024zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white stroke-white">
    <circle cx="12" cy="12" r="9" fill="none" stroke="#f2994a" strokeWidth="0.8" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9" fill="none" stroke="#f2994a" strokeWidth="0.8" />
    <ellipse cx="12" cy="12" rx="7" ry="9" fill="none" stroke="#f2994a" strokeWidth="0.8" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="#f2994a" strokeWidth="0.8" />
    <path d="M4.5 7.5c4.5 1.5 10.5 1.5 15 0" fill="none" stroke="#f2994a" strokeWidth="0.8" />
    <path d="M4.5 16.5c4.5-1.5 10.5-1.5 15 0" fill="none" stroke="#f2994a" strokeWidth="0.8" />
  </svg>
);

// --- HIGHLIGHT & SERVICE ICONS ---

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f2994a] stroke-2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f2994a] stroke-2">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f2994a] stroke-2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const FileCheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f2994a] stroke-2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#f2994a] stroke-2">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const UserCheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#f2994a] stroke-2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#f2994a] stroke-2">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#f2994a] stroke-2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

// --- COMPONENTS ---

const SocialButton = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, rotate: 3 }}
    whileTap={{ scale: 0.95 }}
    className="w-20 h-20 rounded-full flex items-center justify-center social-gradient social-glow transition-transform"
    aria-label={label}
  >
    <Icon />
  </motion.a>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    className="badge-style px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow-sm"
  >
    {children}
  </motion.div>
);

const HighlightCard = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -6 }}
    className="bg-white p-5 rounded-xl text-center font-bold border border-brand-light-blue shadow-sm transition-transform flex flex-col items-center gap-3"
  >
    <Icon />
    <span className="text-sm text-[#333]">{children}</span>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-white p-5 rounded-xl text-center font-bold border border-black/5 shadow-sm transition-transform flex flex-col items-center gap-3"
  >
    <Icon />
    <span className="text-sm text-brand-blue">{children}</span>
  </motion.div>
);

const ContactStripItem = ({ icon, children }: { icon: string, children: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-1 text-center">
    <span className="text-xl">{icon}</span>
    <div className="text-xs font-bold text-[#333] leading-tight">
      {children}
    </div>
  </div>
);

// add import at top of file (below other imports)

export default function App() {
  return (
    <div className="w-full max-w-[900px] mx-auto py-12 px-4">
      {/* Top Hero Section - On Gradient Background */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center mb-10"
      >
        {/* logo from public folder; drop the real file at public/logo.png */}
        <img src="/logo.png" alt="Qopikun Logo" className="company-logo mb-4" />
        {/* company name image - drop your replacement file at public/company-name.png */}
        <div className="relative mb-0 text-center">
          <img
            src="/company-name.png"
            alt="Qopikun Services LLP"
            className="inline-block max-w-full h-auto company-name-img"
          />
        </div>
        
        <div className="text-lg md:text-2xl font-semibold mb-0 max-w-2xl text-gray-800 md:text-blue-50/90">
          Trusted Partners in Aerospace Quality, Inspection & Training
        </div>
        <div className="text-sm md:text-base font-bold cert-badge uppercase tracking-[0.2em]">
          AS9100D & BS EN ISO 9001:2015 Certified Company
        </div>
      </motion.div>

      {/* Main White Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="main-card p-8 md:p-12 relative overflow-hidden mb-16"
      >
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Badge>
            <span className="text-lg">👥</span>
            <span>Team Strength: 45+ Professionals</span>
          </Badge>
          <Badge>
            <span className="text-lg">👤</span>
            <span>Founder & Managing Director: Arjun & Mrs. Nancy J</span>
          </Badge>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-600 font-medium italic">
            "Delivering defence-ready inspection, vendor assessment, and technical data compliance solutions for global customers."
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: '#219653' }}
            whileTap={{ scale: 0.95 }}
            href="https://www.qopikun.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#27ae60] text-white px-10 md:px-14 py-4 md:py-5 rounded-full font-black text-xl shadow-lg contact-btn-shadow transition-all"
          >
            Contact Us
          </motion.a>
        </div>

        {/* Mini Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <HighlightCard icon={ShieldIcon}>Defence-Ready Team</HighlightCard>
          <HighlightCard icon={GlobeIcon}>Global Coverage</HighlightCard>
          <HighlightCard icon={ZapIcon}>AS9100-Certified Process</HighlightCard>
          <HighlightCard icon={FileCheckIcon}>Fast Digital Reporting</HighlightCard>
        </div>

        {/* Core Services */}
        <div>
          <h2 className="text-center text-3xl font-display font-black text-brand-blue mb-10">Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ServiceCard icon={SearchIcon}>Third-Party Inspection</ServiceCard>
            <ServiceCard icon={UserCheckIcon}>Vendor Assessment</ServiceCard>
            <ServiceCard icon={SettingsIcon}>CMM Inspection</ServiceCard>
            <ServiceCard icon={FileCheckIcon}>Technical Data (FAI & PPAP)</ServiceCard>
            <ServiceCard icon={ShieldIcon}>QMS Consultation</ServiceCard>
            <ServiceCard icon={BookIcon}>Training & Internship</ServiceCard>
          </div>
        </div>
      </motion.div>

      {/* Social Connect */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-display font-black text-white mb-10">Connect With Qopikun</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <SocialButton icon={WhatsAppIcon} href="https://wa.me/919964517976" label="WhatsApp" />
          <SocialButton icon={LinkedInIcon} href="https://www.linkedin.com/company/qopikunglobalservices/" label="LinkedIn" />
          <SocialButton icon={InstagramIcon} href="https://www.instagram.com/qopikun/" label="Instagram" />
          <SocialButton icon={YouTubeIcon} href="https://www.youtube.com/@qopikunservicesllp2798" label="YouTube" />
          <SocialButton icon={WebsiteIcon} href="https://www.qopikun.com" label="Website" />
        </div>
      </div>

      {/* Bottom Contact Strip */}
      <div className="pt-10 pb-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 text-white/90">
        <ContactStripItem icon="📍">
          Peenya, Bengaluru, Karnataka
        </ContactStripItem>
        <ContactStripItem icon="📞">
          +91 9964517976 | +91 9900861042
        </ContactStripItem>
        <ContactStripItem icon="📧">
          qopikunglobal@gmail.com
        </ContactStripItem>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12">
        <p className="text-[11px] text-white/30 font-bold tracking-[0.4em] uppercase">
          © 2026 Qopikun Services LLP
        </p>
      </div>
    </div>
  );
}

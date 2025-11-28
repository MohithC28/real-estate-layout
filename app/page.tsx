"use client";

import { CSSProperties } from "react";

const PHONE = "919591977705";
const messageEN = encodeURIComponent("Hi, I want details in English");
const messageKN = encodeURIComponent("Hi, I want details in Kannada");

const WHATSAPP_EN = `https://wa.me/${PHONE}?text=${messageEN}`;
const WHATSAPP_KN = `https://wa.me/${PHONE}?text=${messageKN}`;

export default function Home() {
  return (
    <div style={page}>
      <section style={hero}>
        <div style={overlay} />

        <div style={brandTag}>Urban Crest Realty</div>

        <div style={heroContent}>
          <h1 style={heroTitle}>Experience Luxury Living at Its Finest</h1>

          <p style={heroSubtitle}>
            Premium 30×40 Residential Sites • MUDA / RERA Approved
            <br />
            Located in Yelachahalli, Yelwala — Next to KHB Layout
          </p>

          <h3 style={heroHighlight}>Bookings Are Now Open — Don’t Miss Out!</h3>

          <div style={heroBtns}>
            <a href="#brochure" style={primaryBtn}>View Brochure</a>
            <a href="#contact" style={outlineBtn}>Enquire Now</a>
          </div>
        </div>
      </section>

      <section id="brochure" style={card}>
        <h2 style={cardTitle}>📄 Download the Project Brochure</h2>
        <p style={cardText}>
          Get layout plans, pricing, approvals & full project details.
        </p>
        <a href="/brochure.pdf" target="_blank" style={primaryBtn}>
          Download Brochure
        </a>
      </section>

      <section id="contact" style={card}>
        <h2 style={cardTitle}>💬 Enquire on WhatsApp</h2>
        <p style={cardText}>Instant pricing, photos & location.</p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href={WHATSAPP_EN} style={whButton}>🇬🇧 English</a>
          <a href={WHATSAPP_KN} style={whButton}>🇮🇳 Kannada</a>
        </div>
      </section>

      <footer style={footer}>
        <p style={footerText}>© {new Date().getFullYear()} Urban Crest Realty • All Rights Reserved</p>
      </footer>
    </div>
  );
}

/* ------- TYPE SAFE STYLES -------- */

const page: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  background: "#f8fafc",
  paddingBottom: 80,
};

const hero: CSSProperties = {
  position: "relative",
  height: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  backgroundImage: 'url("/layout-banner.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.45)",
};

const brandTag: CSSProperties = {
  position: "absolute",
  top: 20,
  left: 20,
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(6px)",
  padding: "10px 18px",
  borderRadius: 12,
  fontWeight: 700,
  fontSize: 18,
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.3)",
};

const heroContent: CSSProperties = {
  position: "relative",
  textAlign: "center",
  maxWidth: 750,
  padding: "0 20px",
};

const heroTitle: CSSProperties = {
  fontSize: 44,
  fontWeight: 700,
  marginBottom: 10,
};

const heroSubtitle: CSSProperties = {
  fontSize: 20,
  opacity: 0.9,
  lineHeight: "1.6",
  marginBottom: 20,
};

const heroHighlight: CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  color: "#ffdd57",
  marginBottom: 28,
};

const heroBtns: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  flexWrap: "wrap",
};

const primaryBtn: CSSProperties = {
  background: "#1e3a8a",
  color: "white",
  padding: "12px 22px",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 16,
};

const outlineBtn: CSSProperties = {
  border: "2px solid white",
  color: "white",
  padding: "12px 22px",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 16,
  background: "transparent",
};

const card: CSSProperties = {
  background: "white",
  maxWidth: 900,
  margin: "40px auto",
  padding: "32px",
  borderRadius: 16,
  textAlign: "center",
};

const cardTitle: CSSProperties = {
  fontSize: 26,
  fontWeight: 700,
  marginBottom: 8,
};

const cardText: CSSProperties = {
  fontSize: 16,
  color: "#475569",
  marginBottom: 20,
};

const whButton: CSSProperties = {
  background: "#25D366",
  color: "#fff",
  padding: "14px 20px",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 600,
  minWidth: 120,
  textAlign: "center",
};

const footer: CSSProperties = {
  textAlign: "center",
  padding: 20,
  marginTop: 40,
};

const footerText: CSSProperties = {
  fontSize: 14,
};

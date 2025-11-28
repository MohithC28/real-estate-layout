"use client";

import { CSSProperties } from "react";

const PHONE = "919591977705";
const MSG_EN = encodeURIComponent("Hi, I want details about the Urban Crest Realty project.");
const MSG_KN = encodeURIComponent("Hi, I want details in Kannada.");
const WHATSAPP_EN = `https://wa.me/${PHONE}?text=${MSG_EN}`;
const WHATSAPP_KN = `https://wa.me/${PHONE}?text=${MSG_KN}`;

export default function Home() {
  return (
    <div style={page}>

      {/* FULLSCREEN HERO */}
      <section style={hero}>
        <div style={darkOverlay} />

        {/* BRAND TITLE */}
        <h1 style={brandName}>Urban Crest Realty</h1>

        {/* PROJECT DESCRIPTION */}
        <p style={projectTitle}>Premium Residential Layout in Mysuru</p>

        <p style={projectSubtitle}>
          Luxury 30×40 MUDA / RERA Approved Plots<br />
          Situated in Yelachahalli, Yelwala — Beside KHB Layout
        </p>

        <p style={highlightText}>
          Experience Luxury Living at Its Finest
        </p>

        <p style={bookingText}>Bookings Now Open — Limited Plots Available</p>

        {/* CTA BUTTONS */}
        <div style={ctaRow}>
          <a href={WHATSAPP_EN} style={ctaPrimary}>Enquire Now</a>
          <a href={WHATSAPP_KN} style={ctaSecondary}>Kannada Enquiry</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <p style={footerText}>© {new Date().getFullYear()} Urban Crest Realty</p>
      </footer>
    </div>
  );
}


/* ---------- STYLES ---------- */

const page: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  background: "#0f172a",
  color: "white",
};

const hero: CSSProperties = {
  position: "relative",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "0 20px",
  backgroundImage: `url("/luxury-bg.jpg")`, // ← Replace with a luxury image
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const darkOverlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
};

const brandName: CSSProperties = {
  position: "relative",
  fontSize: 56,
  fontWeight: 900,
  letterSpacing: "2px",
  marginBottom: 20,
  textTransform: "uppercase",
};

const projectTitle: CSSProperties = {
  position: "relative",
  fontSize: 28,
  fontWeight: 600,
  opacity: 0.9,
  marginBottom: 6,
};

const projectSubtitle: CSSProperties = {
  position: "relative",
  fontSize: 20,
  lineHeight: 1.6,
  opacity: 0.85,
  marginBottom: 25,
};

const highlightText: CSSProperties = {
  position: "relative",
  fontSize: 26,
  fontWeight: 700,
  color: "#ffdd57",
  marginBottom: 15,
};

const bookingText: CSSProperties = {
  position: "relative",
  fontSize: 20,
  fontWeight: 600,
  marginBottom: 35,
  opacity: 0.95,
};

const ctaRow: CSSProperties = {
  position: "relative",
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  justifyContent: "center",
};

const ctaPrimary: CSSProperties = {
  background: "#1e3a8a",
  padding: "14px 26px",
  borderRadius: 10,
  color: "white",
  fontWeight: 700,
  fontSize: 18,
  textDecoration: "none",
  letterSpacing: 0.5,
};

const ctaSecondary: CSSProperties = {
  border: "2px solid white",
  padding: "14px 26px",
  borderRadius: 10,
  color: "white",
  fontWeight: 700,
  fontSize: 18,
  textDecoration: "none",
};

const footer: CSSProperties = {
  textAlign: "center",
  padding: 20,
  marginTop: 40,
  opacity: 0.7,
};

const footerText: CSSProperties = {
  fontSize: 14,
};

"use client";

const PHONE = "919591977705"; // replace with client number
const WHATSAPP_EN = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi, I want details in English"
)}`;
const WHATSAPP_KN = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi, I want details in Kannada"
)}`;

export default function Home() {
  return (
    <div style={container}>  
      <h1 style={title}>Premium Residential Layout — Mysore</h1>
      <p style={subtitle}>MUDA / RERA Approved • Limited Plots • Starting at ₹X/sqft</p>

      <img src="/layout-banner.jpg" style={banner} />

      <div style={box}>
        <h2>Download Brochure</h2>
        <a href="/brochure.pdf" target="_blank" style={button}>
          View Brochure
        </a>
      </div>

      <div style={box}>
        <h2>Enquire on WhatsApp</h2>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href={WHATSAPP_EN} style={whButton}>🇬🇧 English</a>
          <a href={WHATSAPP_KN} style={whButton}>🇮🇳 Kannada</a>
        </div>
      </div>
    </div>
  );
}

const container = { fontFamily: "sans-serif", padding: 24, maxWidth: 800, margin: "0 auto" };
const title = { fontSize: 36, color: "#1f2937", marginBottom: 0 };
const subtitle = { fontSize: 18, color: "#6b7280", marginTop: 4 };
const banner = { width: "100%", borderRadius: 12, margin: "20px 0" };
const box = { background: "#fff", padding: 18, borderRadius: 10, marginTop: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" };
const button = { background: "#111827", color: "white", padding: "10px 16px", borderRadius: 8, textDecoration: "none" };
const whButton = { background: "#25D366", color: "#fff", padding: "12px 16px", borderRadius: 8, textDecoration: "none" };

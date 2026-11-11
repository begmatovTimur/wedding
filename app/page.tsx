import Calendar from "./components/Calendar";
import Countdown from "./components/Countdown";
import Heart from "./components/Heart";
import MusicPlayer from "./components/MusicPlayer";

const details = [
  { label: "Sana", value: "18-noyabr" },
  { label: "Vaqt", value: "18:00" },
  { label: "Manzil", value: "Shofirkon tumani" },
  { label: "To‘yxona", value: "“Malika” to‘yxonasi" },
];

const PETALS = Array.from({ length: 14 }, (_, i) => i);

export default function Home() {
  return (
    <main className="page">
      <MusicPlayer />
      <div className="petals" aria-hidden="true">
        {PETALS.map((i) => (
          <span key={i} className="petal" style={{ ["--i" as string]: i }} />
        ))}
      </div>

      {/* ───── Hero ───── */}
      <section className="hero">
        <p className="eyebrow">To‘yga taklifnoma</p>

        <h1 className="names">
          <span className="names__groom">Samandar</span>
          <span className="names__heart">
            <span className="names__line" />
            <Heart className="names__heart-icon" />
            <span className="names__line" />
          </span>
          <span className="names__bride">Mo‘mina</span>
        </h1>

        <p className="hero__date">
          <span>18</span>
          <span className="dot" />
          <span>11</span>
          <span className="dot" />
          <span>2026</span>
        </p>

        <a href="#kalendar" className="scroll-hint" aria-label="Pastga">
          <span />
        </a>
      </section>

      {/* ───── Message ───── */}
      <section className="message">
        <span className="message__quote" aria-hidden="true">“</span>
        <p className="message__text">
          Ikki qalb birlashib, yangi hayot sari qadam qo‘yayotgan ushbu unutilmas
          kunimizda sizni kutib qolamiz!
        </p>
        <div className="divider">
          <span />
          <Heart className="divider__heart" />
          <span />
        </div>
      </section>

      {/* ───── Details ───── */}
      <section className="details">
        {details.map((d) => (
          <div key={d.label} className="detail">
            <span className="detail__label">{d.label}</span>
            <span className="detail__value">{d.value}</span>
          </div>
        ))}
      </section>

      {/* ───── Calendar ───── */}
      <section id="kalendar" className="calendar-section">
        <h2 className="section-title">Qutlug‘ kun</h2>
        <Calendar />
      </section>

      {/* ───── Countdown ───── */}
      <section className="countdown-section">
        <h2 className="section-title">To‘yga qadar</h2>
        <Countdown />
      </section>

      <footer className="footer">
        <p className="footer__text">Hurmat bilan,</p>
        <p className="footer__names">
          Samandar <Heart className="footer__heart" /> Mo‘mina
        </p>
      </footer>
    </main>
  );
}

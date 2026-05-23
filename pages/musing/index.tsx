// pages/musing/index.jsx
// Revamped Musing page — editorial dark theme, brand colors: #111, #fff, #00FFCD

import { MusingNavTitle } from "@/components/Navbar";
import { ScrollUpIcon } from "@/components/icons.js/ScrollUpIcon";
import Image from "next/image";
import Link from "next/link";
import blogimg from "../../public/images/musingpagesimg/blogimg.png";
import styles from "../../styles/pagesstyle/musing.module.scss";

/* ─── Data ──────────────────────────────────────────────────── */
const letters = [
  {
    slug: "letter-one",
    number: "01",
    title: "Letter One",
    tag: "Social Media",
    date: "16 October, 2022",
    excerpt:
      "We now live in a world where the authenticity of one's business is judged by the number of followers on Instagram. Here's how you can help — it costs you nothing.",
  },
  {
    slug: "letter-two",
    number: "02",
    title: "Letter Two",
    tag: "Emotional Support",
    date: "23 October, 2022",
    excerpt:
      "The life of an entrepreneur is filled with many dark nights. Behind every brave face is a war raging inside — and a single call can change everything.",
  },
  {
    slug: "letter-three",
    number: "03",
    title: "Letter Three",
    tag: "Networks & Value",
    date: "30 October, 2022",
    excerpt:
      "People do business with friends. Broke can't help broke. How your connections and who you are can carry your Frodo into rooms they couldn't enter alone.",
  },
  {
    slug: "letter-four",
    number: "04",
    title: "Letter Four — Bitter Truth",
    tag: "Honest Feedback",
    date: "6 November, 2022",
    excerpt:
      "A spoonful of what we're doing right, a bowl of love, a sprinkle of what the competition is doing — and one tablespoon of what we need to work on.",
  },
  {
    slug: "letter-five",
    number: "05",
    title: "Letter Five — Garage Story",
    tag: "Starting Small",
    date: "13 November, 2022",
    excerpt:
      "We tend to forget there is always a 'garage story' behind every successful brand. Be the voice that reminds us there is honour in starting small.",
  },
  {
    slug: "letter-six",
    number: "06",
    title: "Letter Six — Journey of a Thousand Miles",
    tag: "Momentum",
    date: "20 November, 2022",
    excerpt:
      "We often want to have it all at the first shot, so we never begin. Nudge us to start no matter how little. Perfection is not achieved in a single day.",
  },
  {
    slug: "letter-seven",
    number: "07",
    title: "Letter Seven — Do Your Bits",
    tag: "Collaboration",
    date: "27 November, 2022",
    excerpt:
      "There will be several players in our lives without whom it will be near impossible to achieve our dreams. Know your role and give it your best shot.",
  },
  {
    slug: "letter-eight",
    number: "08",
    title: "Letter Eight — Smell the Roses",
    tag: "Work-Life Balance",
    date: "4 December, 2022",
    excerpt:
      "I can't count the dinners I cancelled, the road trips I gave up. Nudge us to take those small breaks. Plan with us and entertain no excuses.",
  },
  {
    slug: "letter-nine",
    number: "09",
    title: "Letter Nine",
    tag: "Little Wins",
    date: "11 December, 2022",
    excerpt:
      "Celebrate our little wins with us. Sometimes it might not feel like a win, but it leaves us refreshed, energized, and hopeful for the journey ahead.",
  },
];

const featured = letters[0];
const rest = letters.slice(1);

/* ─── Page ───────────────────────────────────────────────────── */
const Musing = () => {
  return (
    <div className={styles.pageRoot}>
      <MusingNavTitle />
      <HeroSection />
      <FeaturedSection />
      <AllLettersSection />
      <ScrollUpIcon />
    </div>
  );
};

/* ─── Hero ───────────────────────────────────────────────────── */
const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.heroInner}>
      <p className={styles.eyebrow}>Est. October 2022</p>
      <h1 className={styles.heroTitle}>
        Letter to<br />
        <span className={styles.heroAccent}>Samwise</span>
      </h1>
      <p className={styles.heroSub}>
        Every Thursday, letters on how the people around entrepreneurs
        can help their Frodos reach Mount Doom and destroy the ring.
      </p>
      <div className={styles.heroDivider} />
      <p className={styles.heroMeta}>
        <span>{letters.length} Letters</span>
        <span className={styles.dot}>·</span>
        <span>Titilayo Ekundayo</span>
        <span className={styles.dot}>·</span>
        <span>Entrepreneurship</span>
      </p>
    </div>
    <div className={styles.heroImageWrap}>
      <Image
        src={blogimg}
        alt="Musing"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      <div className={styles.heroImageOverlay} />
    </div>
  </section>
);

/* ─── Featured ───────────────────────────────────────────────── */
const FeaturedSection = () => (
  <section className={styles.featuredBand}>
    <div className={styles.featuredInner}>
      <p className={styles.sectionLabel}>Featured</p>
      <Link href={`/musing/${featured.slug}`} className={styles.featuredCard}>
        <div className={styles.featuredCardLeft}>
          <span className={styles.featuredNumber}>{featured.number}</span>
          <span className={styles.featuredTag}>{featured.tag}</span>
        </div>
        <div className={styles.featuredCardBody}>
          <p className={styles.featuredDate}>{featured.date}</p>
          <h2 className={styles.featuredTitle}>{featured.title}</h2>
          <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
        </div>
        <div className={styles.featuredArrow}>→</div>
      </Link>
    </div>
  </section>
);

/* ─── All Letters ────────────────────────────────────────────── */
const AllLettersSection = () => (
  <section className={styles.lettersBand}>
    <div className={styles.lettersInner}>
      <div className={styles.lettersHeader}>
        <p className={styles.sectionLabel}>All Letters</p>
        <p className={styles.lettersCount}>{rest.length} more</p>
      </div>
      <div className={styles.lettersGrid}>
        {rest.map((letter) => (
          <Link
            key={letter.slug}
            href={`/musing/${letter.slug}`}
            className={styles.letterCard}
          >
            <div className={styles.letterCardTop}>
              <span className={styles.letterNumber}>{letter.number}</span>
              <span className={styles.letterTag}>{letter.tag}</span>
            </div>
            <h3 className={styles.letterTitle}>{letter.title}</h3>
            <p className={styles.letterExcerpt}>{letter.excerpt}</p>
            <div className={styles.letterFooter}>
              <span className={styles.letterDate}>{letter.date}</span>
              <span className={styles.letterReadMore}>Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Musing;
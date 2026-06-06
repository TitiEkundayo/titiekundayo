import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/componentstyles/books.module.scss";
import { BookNavTitle } from "@/components/Navbar";
import Book1 from "../../public/images/BooksImgs/TOAM Mockup.png";
import Book2 from "../../public/images/BooksImgs/WMEDSFL Mockup.png";
import titi from "../../public/images/BooksImgs/books-hero.jpeg";
import HomePageHeroImgDesktop from "../../public/images/BooksImgs/homepageheroimgdesktop.png";
import HomePageHeroImgMobile from "../../public/images/BooksImgs/homepageheroimgmobile.png";
import { ScrollUpIcon } from "@/components/icons.js/ScrollUpIcon";

/* ─── Data ──────────────────────────────────────────────────── */
const booksData = [
  {
    key: "b1",
    src: Book1,
     title: "Threads of a Mind",
    year: "2026",
    description:
      "A captivating exploration of consciousness, identity, and the intricate connections that weave through our thoughts and experiences. This debut work established Titi as one of Nigeria's most compelling new voices.",
  },
  {
    key: "b2",
    src: Book2,
    title: "Wetin My Eyes Don See For Lagos",
    year: "2026",
    description:
      "An extraordinary anthology that captures the essence, energy, and soul of Lagos through the eyes of 22 talented writers.",
  },
];

const GET_BOOK_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSddijfqcoguOfqv5-QiE-jH4-g3LUnRrAA_qkp6Lo5NhK17iQ/viewform?usp=sharing&ouid=112731816547039664331";

const reviews = [
  {
    id: 1,
    name: "Samuel Afolayan",
    // book: "Wetin My Eyes Don See For Lagos",
    rating: 5,
    review:
      "An absolute must-read. Titi has a rare gift for making the complex feel intimate and the personal feel universal.",
  },
  {
    id: 2,
    name: "Daniel Chukwuji",
    // book: "Threads of a Mind",
    rating: 5,
    review:
      "Reading this book felt like sitting down for a long lunch with an old friend. Well grounded, with so many actionable thoughts wrapped in relatable stories.",
  },
  {
    id: 3,
    name: "Peter Yohanna Gwafan",
    // book: "Threads of a Mind",
    rating: 4,
    review:
      "Every page carries a meaningful lesson, and what makes them stand out is how practical they are and how easily they apply to our daily lives.",
  },
  {
    id: 4,
    name: "Pelumi Okunronmu",
    // book: "Threads of a Mind",
    rating: 4,
    review:
      "Threads of a Mind was a delight to read. Relatable stories carrying valuable lessons. A great book to lose yourself in when you need to take a break.",
  },
  {
    id: 5,
    name: "Engr. Odiase",
    // book: "Threads of a Mind",
    rating: 5,
    review:
      "It is a beautiful thing and a rare privilege to have someone close write a book. Threads of a mind is an exceptionally articulated collection, full of wise nuggets that anyone can relate to.",
  },
  {
    id: 6,
    name: "Bwejuah Jojo Bibinu",
    // book: "Threads of a Mind",
    rating: 5,
    review:
      '"THREADS OF A MIND" By Titi Ekundayo is a motivational masterpiece that is all about pushing you to chase your dreams and believe that you can make it.',
  },
  {
    id: 7,
    name: "Joseph Osifeso",
    // book: "Threads of a Mind",
    rating: 4,
    review:
      'Reading "Threads of a Mind" was like journeying with Titi in her adventures. She perfectly exemplified the impact and importance of having goals and with her writing and the creation of this book, she showed the impact of being consistent.',
  },
];

/* ─── Page root ─────────────────────────────────────────────── */
export const Books = () => {
  return (
    <div className={styles.pageRoot}>
      <BookNavTitle />
      <HeroSection />
      <BooksSection />
      <ReviewsSection />
      <ScrollUpIcon />
    </div>
  );
};

/* ─── 1. HERO ────────────────────────────────────────────────── */
export const HeroSection = () => {
  return (
    <section className={styles.heroBand}>
      <div className={styles.heroInner}>
        {/* Left */}
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>Author &amp; Storyteller</p>
          <h1 className={styles.heroName}>
            Titilayo
            <br />
            Ekundayo
          </h1>

          <div className={styles.heroStats}>
            <span>{booksData.length} Books</span>
            <span className={styles.statDivider}>·</span>
            <span>{reviews.length} Reviews</span>
            <span className={styles.statDivider}>·</span>
            <span>3 Photos</span>
          </div>

          {/* <p className={styles.heroBio}>
            Titilayo Ekundayo operates at the confluence of strategy, business
            development, and long term value creation. For over a decade, she
            has built, led, and supported organizations within Africa&apos;s startup
            and innovation ecosystem, navigating growth, uncertainty, and
            transformation with discipline and intent. Her work spans
            entrepreneurship, operations, and organizational development,
            shaped by a deep respect for process and the big picture.
          </p>
          <p className={styles.heroBio}>
            She believes deeply in the creative and transformative power of
            words and in the idea that every voice, no matter how small, can
            add light to the vast body of human knowledge. And so she writes,
            hoping to leave the world a little fuller, a little wiser, and a
            little more alive.
          </p> */}

          <a
            href={GET_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Get My Book
          </a>
        </div>

        {/* Right — photo */}
        <div className={styles.heroRight}>
          <div className={styles.heroPhotoWrap}>
            <Image
              src={titi}
              alt="Titilayo Ekundayo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. BOOKS ───────────────────────────────────────────────── */
export const BooksSection = () => {
  const [active, setActive] = useState(0);
  const book = booksData[active];

  return (
    <section className={styles.booksBand}>
      <div className={styles.booksInner}>
        <div className={styles.bandHeader}>
          <h2 className={styles.bandTitle}>Books</h2>
          <p className={styles.bandSub}>{booksData.length} titles</p>
        </div>

        <div className={styles.booksLayout}>
          {/* Sidebar */}
          <aside className={styles.booksSidebar}>
            {booksData.map((b, i) => (
              <button
                key={b.key}
                className={`${styles.sidebarItem} ${
                  i === active ? styles.sidebarItemActive : ""
                }`}
                onClick={() => setActive(i)}
              >
                <Image
                  src={b.src}
                  alt={b.title}
                  width={40}
                  height={54}
                  className={styles.sidebarThumb}
                />
                <div className={styles.sidebarText}>
                  <p className={styles.sidebarTitle}>{b.title}</p>
                  <p className={styles.sidebarYear}>{b.year}</p>
                </div>
                <span className={styles.sidebarChevron}>›</span>
              </button>
            ))}
          </aside>

          {/* Featured card */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredInner}>
              <div className={styles.featuredImgCol}>
                <Image
                  src={book.src}
                  alt={book.title}
                  width={200}
                  height={270}
                  className={styles.featuredImg}
                />
              </div>
              <div className={styles.featuredBody}>
                <p className={styles.featuredYear}>📅 {book.year}</p>
                <h3 className={styles.featuredTitle}>{book.title}</h3>
                <p className={styles.featuredDesc}>{book.description}</p>
                <a
                  href={GET_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.featuredCta}
                >
                  Get This Book
                </a>
              </div>
            </div>

            {/* Pagination */}
            <div className={styles.featuredPagination}>
              <button
                className={styles.pageBtn}
                onClick={() => setActive((p) => Math.max(0, p - 1))}
                disabled={active === 0}
              >
                ← Previous
              </button>
              <span className={styles.pageCount}>
                {active + 1} / {booksData.length}
              </span>
              <button
                className={styles.pageBtn}
                onClick={() =>
                  setActive((p) => Math.min(booksData.length - 1, p + 1))
                }
                disabled={active === booksData.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 3. REVIEWS — carousel matching Jolevi style ────────────── */
export const ReviewsSection = () => {
  const VISIBLE = 3;
  const [start, setStart] = useState(0);

  const canPrev = start > 0;
  const canNext = start + VISIBLE < reviews.length;

  const visible = reviews.slice(start, start + VISIBLE);

  return (
    <section className={styles.reviewsBand}>
      <div className={styles.reviewsInner}>
        <div className={styles.reviewsTopRow}>
          <div className={styles.bandHeader}>
            <h2 className={styles.bandTitle}>Reviews</h2>
            <p className={styles.bandSub}>
              {reviews.length} reviews from real readers
            </p>
          </div>
          {/* Arrow controls — top-right like Jolevi */}
          <div className={styles.reviewsArrows}>
            <button
              className={styles.arrowBtn}
              onClick={() => setStart((s) => Math.max(0, s - 1))}
              disabled={!canPrev}
              aria-label="Previous reviews"
            >
              ‹
            </button>
            <button
              className={styles.arrowBtn}
              onClick={() => setStart((s) => s + 1)}
              disabled={!canNext}
              aria-label="Next reviews"
            >
              ›
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className={styles.reviewsGrid}>
          {visible.map((r) => (
            <div key={r.id} className={styles.reviewCard}>
              <span className={styles.quoteIcon}>&quot;</span>
              <p className={styles.reviewText}>{r.review}</p>
              <div className={styles.reviewMeta}>
                {/* <Stars count={r.rating} /> */}
                {/* <p className={styles.reviewBook}>{r.book}</p> */}
              </div>
              <div className={styles.reviewAuthor}>
                {/* <div className={styles.reviewAvatar}>
                  {getInitials(r.name)}
                </div> */}
                <span className={styles.reviewName}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className={styles.reviewsDots}>
          {Array.from({
            length: reviews.length - VISIBLE + 1,
          }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === start ? styles.dotActive : ""}`}
              onClick={() => setStart(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
 
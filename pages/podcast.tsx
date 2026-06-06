// import { PodcastNavTitle } from "@/components/Navbar";
// import UnderConstruction1 from "./underconstruction1";
// import Footer from "@/components/Footer";

// const Podcast = () => {
//   return (
//     <div>
//       <div>
//         <PodcastNavTitle />
//       </div>

//       <div>
//         <UnderConstruction1 />
//       </div>
//     </div>
//   );
// };

// export default Podcast;

import { PodcastNavTitle } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "../styles/pagesstyle/podcast.module.scss";
import awsmLogo from "../public/images/PodcastImgs/AWSM-Logo.png";

const Podcast = () => {
  return (
    <div>
      <PodcastNavTitle />
      <PodcastHero />
      <PodcastDescription />
      <PodcastListenSection />
    </div>
  );
};

const PodcastHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <div className={styles.logoBadge}>
            <Image
              src={awsmLogo}
              alt="Abeg Who Send Me Podcast Logo"
              width={400}
              height={300}
              quality={95}
              priority
              className={styles.logo}
            />
          </div>
          <p className={styles.podcastSubtitle}>The Entrepreneur&apos;s sPodcast</p>
        </div>
        <div className={styles.accentElements}>
          <div className={styles.accentLine}></div>
          <div className={styles.accentDot}></div>
        </div>
      </div>
    </section>
  );
};

const PodcastDescription = () => {
  return (
    <section className={styles.descriptionSection}>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionContent}>
          <h2 className={styles.sectionTitle}>
            A <span className={styles.highlight}>Community</span> of Builders
          </h2>
          <p className={styles.description}>
            Abeg Who Send Me is a podcast for entrepreneurs and wannabe entrepreneurs 
            focused on building a community of entrepreneurs who learn from each other, 
            collaborate, and foster growth. Join us as we explore the journeys, insights, 
            and lessons from builders shaping the entrepreneurial landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

const PodcastListenSection = () => {
  const platforms = [
    {
      name: "Spotify",
      icon: "🎵",
      url: "https://open.spotify.com/show/3B3jNoHZxohQ7WOFopzQnT",
      color: "#1DB954",
    },
    {
      name: "Apple Podcasts",
      icon: "🎙️",
      url: "https://podcasts.apple.com/us/podcast/abeg-who-send-me/id1602279004",
      color: "#FA243C",
    },
    {
      name: "YouTube",
      icon: "▶️",
      url: "https://www.youtube.com/playlist?app=desktop&list=PLq37AFBJD1DOiNz1DukWgWQ2lquMBJqiK",
      color: "#FF0000",
    },
  ];

  return (
    <section className={styles.listenSection}>
      <div className={styles.listenContainer}>
        <h2 className={styles.listenTitle}>Listen Now</h2>
        
        <div className={styles.platformsGrid}>
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platformCard}
              style={
                {
                  "--platform-color": platform.color,
                } as React.CSSProperties
              }
            >
              <span className={styles.platformIcon}>{platform.icon}</span>
              <span className={styles.platformName}>{platform.name}</span>
              <span className={styles.platformArrow}>→</span>
            </a>
          ))}
        </div>

        <p className={styles.listenCta}>
          Choose your favorite platform and start listening to conversations that matter
        </p>
      </div>
    </section>
  );
};

export default Podcast;
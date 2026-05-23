// pages/musing/[slug].jsx
// Dynamic route — handles /musing/letter-one through /musing/letter-nine

import { MusingNavTitle } from "@/components/Navbar";
import { ScrollUpIcon } from "@/components/icons.js/ScrollUpIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import musingimg from "../../public/images/musingpagesimg/musingimg.png";
import musing2 from "../../public/images/musingpagesimg/musing2.png";
import styles from "../../styles/pagesstyle/musing.module.scss";

/* ─── Type ───────────────────────────────────────────────────── */
type Letter = {
  slug: string;
  number: string;
  title: string;
  tag: string;
  date: string;
  greeting: string;
  intro?: string[];        // shown before greeting (Letter 8 has no greeting header)
  body: string[];
  actionSteps: string[];
  closing: string;
  author: string;
  ps?: string;
  contact?: string;
};

/* ─── All letter data ────────────────────────────────────────── */
const LETTERS: Letter[] = [
  {
    slug: "letter-one",
    number: "01",
    title: "Letter One",
    tag: "Social Media",
    date: "16 October, 2022",
    greeting: "Dear Samwise,",
    body: [
      `The COVID-19 pandemic has in the last one year brought to fore the power of technology and it is safe to say we have been able to craft out a new normal where high power meetings can be attended in "suits and shorts".`,
      `Technology is such a beautiful thing, it has created a level playing field for all of us and provided a platform where visibility for any business anywhere across the globe is not only possible but also very important. The barriers of entry has become lowered and from the comfort of our beds we can sell to the world. However, the low barrier of entry has also made it hard to stand out in the crowd.`,
      `Dearest Samwise, we now live in a world where the authenticity of one's business is judged by the number of followers you have on Instagram and the number of likes per post. Kindly follow all our social media handles; it costs you nothing but we gain a lot, our businesses gain more recognition and get a chance to stand out of the crowd.`,
      `You can go a step farther by liking our post, and if you wouldn't be caught dead liking such post tell us, advise us on how to beef up our social media page so it is up to par. You can be our self-appointed social media advisers, sending us pointers from time to time on how to be better. Please share our fliers on your WhatsApp status. We usually have a lot on our minds and may not be advertising our pages or posts as intensely as we should. A friendly referral from time to time goes a long way in increasing our follower-ship and in helping us build a brand. Samwise, if you are our raving fan, tell your friends about us and ask them to follow us.`,
    ],
    actionSteps: [
      "Follow Frodo's business social media handle",
      "Send pointers to Frodo on how to improve their social media presence",
    ],
    closing: "With Love,",
    author: "Titilayo Ekundayo",
  },
  {
    slug: "letter-two",
    number: "02",
    title: "Letter Two",
    tag: "Emotional Support",
    date: "23 October, 2022",
    greeting: "Dear Samwise,",
    body: [
      `I hope this missive meets you well, it's been a week since our last correspondence. I trust that you've been staying safe and practising the action points, on helping increase Frodo's social media presence, from my last letter. I'm sure those little gestures would have warmed the hearts of your Frodos and brought smiles to their faces.`,
      `Today I will be sharing an experience from when I first opened my restaurant that warms my heart every time the memory of it comes to mind. That particular week started out with different issues coming up one after another and it seemed like all hell was going to break loose. It started with different government agencies coming to the physical store to either ask for documentation or demand payment for various permits, to make matters worse I had issues with staff absenteeism, low sales and serious wastage, not to even mention the increasing pile of bills that couldn't be paid because of poor sales.`,
      `Despite the brave and strong face I was showing the world at that time, I was terribly overwhelmed and losing it big time on the inside. I was on the edge of giving up and my head was full of depressing thoughts on my impending failure and how incapable I was.`,
      `That was when I got a call from Lebene, she'd been my friend for so long that despite my automatic responses of everything being fine, she could tell that something was wrong. We gisted, she made me laugh, I felt a little better and the next day I received a cake saying "Stay fighting dear". On seeing the cake I immediately felt the stress ease out of me not just because I love cakes and it was Nectar confectioneries, but because of the message it passed.`,
      `The cake was saying to me that someone believed in me and trusted that I can make it work. After helping myself to a big portion of the cake, I pulled myself up and continued the grind, knowing that someone else believed in me gave me enough courage to start and try again. Self-confidence, courage, audacity, strength of will and a strong personality type are some of the qualities of an entrepreneur. However, the life of an entrepreneur is an interesting and highly challenging one, where we are literally putting out fires all day and if we get lucky we get a few days off.`,
      `It is a life filled with many dark nights but the mornings make it worth our while. We often put on masks that say we are in control, we know what we are doing, that we are 100% confident that our plans will work out, but behind that facade there is a war raging inside. A war where the Generals are self-doubt, confusion, loneliness, fear of failure, fear of being broke etc but we bottle it all up inside for the world must see us as strong and invulnerable. Little wonder some research has it that entrepreneurs are nearly twice as likely to experience depression compared to the general population.`,
      `Dearest Samwise, you can't shield us from the dark nights or help us kill all of the fires but you can help us through the dark nights by really looking at us and seeing through the masks we project. A phone call to check up, a hug that says "you will be fine", an SMS, a visit, a gift, a kind word, a listening ear are some of the many things you can do to get us through the many dark nights.`,
    ],
    actionSteps: [
      "Reach out to Frodo via a call, chat, SMS, gift, or hug saying 'I believe in you and you are not alone'",
      "Set up different times on your calendar to check up on Frodo",
    ],
    closing: "With Love,",
    author: "Titilayo Ekundayo",
  },
  {
    slug: "letter-three",
    number: "03",
    title: "Letter Three",
    tag: "Networks & Value",
    date: "30 October, 2022",
    greeting: "Dear Samwise,",
    body: [
      `The last one week has been eventful ranging from the arrest of protesters at the Lekki toll gate to the Valentine's Day celebration. I hope in the midst of all the drama that you created time to check up on Frodo saying you believe in them and if you didn't, it is not too late.`,
      `Earlier this week I was preparing to take a sales group on sales fundamentals and I had two quotes on my mind: "People do business with friends" and "Broke can't help broke" (Broke in money, value or influence). I have known these words to be true in the last couple of years.`,
      `When I first started my business, I was all quiet about it and never brought it up in conversation, not even to my friends! Well, predictably sales were anything but fantastic, so by the time I started business number 2, I went to the far extreme that my friends threatened to block me from flooding their statuses with images of delectable delicacies. It was during this "campaign of terror" (lol) that Miss Olujuyigbe got wind of my new venture.`,
      `Now Miss Olujuyigbe is a script writer and a very good one too. She has made movies with some big names in the movie industry, so you can imagine how ecstatic I was when I got a call from her proposing I cater for a small crew during a shoot. After acing that project we've moved on to bigger collaborations that has brought in massive profits for the business. Korede Taomu is another friend whose connections and networks have led to transactions that yielded considerable revenue for us; a serious guy with a good head on his shoulders, just an introduction from him has brought in recurrent revenue. Seda media has been with us since the concept stage of all my businesses — he is so good at what he does, all I need do is share the idea and he delivers an excellent and cost effective way of showcasing it, saving us money and giving us value.`,
      `These friends (to mention a few) have helped my businesses tremendously by being people of value themselves. People who are good at what they do, who are influencers and thought leaders in their own space, who have access to the decision makers. We still have to prove the value of our products or services, we still have to sell ourselves but we need someone to get us into the room. A scene from Lord of the Rings comes to mind when Samwise had to carry Frodo because the weight of the ring was too much for him to bear — he carried him on the last phase of the journey to Mount Doom where the ring was to be destroyed, but Frodo had to destroy the ring himself. Had Samwise not been fit himself it would have been impossible for him to help Frodo.`,
      `Dearest Samwise, you carry us by being people of value and influence in your field. You carry us by being very good at what you do, so that one day you can make an introduction that will help take our business to the next level. We of course understand that after the introduction it is left to us to prove the value of our product or service.`,
    ],
    actionSteps: [
      "Introduce Frodo to a potential Client / Investor / Business Partner",
      "Continually invest in being a person of value",
    ],
    closing: "Best Regards,",
    author: "Titilayo Ekundayo",
    contact: "stories@titiekundayo.com",
  },
  {
    slug: "letter-four",
    number: "04",
    title: "Letter Four — Bitter Truth",
    tag: "Honest Feedback",
    date: "6 November, 2022",
    greeting: "Dear Samwise,",
    body: [
      `"Try to dey relax problem no dey finish" this saying was my motto for the past week as I deliberately took some time to breathe and take things slow. I hope you found time to relax and add value to yourself.`,
      `There is a Yoruba saying that "Ti omo iya meji ba jade pelu eerin loju. Won ko bara won so eyi to je otito amo ti oju won ba koro, ooto oro ni won ba ara won so ninu ile" which means if two siblings come out of a room smiling they have not told themselves the truth, but if they come out frowning they told themselves the truth. Being an inquisitive person, I have always questioned a lot of Yoruba proverbs. The day my doubts were cleared on this particular proverb, I was left with a gbas-gbos feeling but I am better for it.`,
      `Beyond enjoying the comic relief that MTN Project Fame auditionees provide, I have often wondered who lied to them about their singing capabilities. Didn't their friends tell them the truth so as to stop them from embarrassing themselves on national TV? I failed to realize how hard it is to tell someone you love the truth because of the hurt and pain it could cause them.`,
      `On one of those Saturday mornings at the beginning of my food business, I called Lebene to know if she needed anything as I was about leaving the outlet for home, and surprisingly she said nothing. I was puzzled because I knew there was no food in the house and even more surprised when I met her eating Jollof rice. I asked where she got it from, and she replied that it was purpose rice there are two women who sell rice opposite each other on our street, so to easily differentiate we had to name them: one we called destiny rice (we are afraid of that rice, Nollywood things...) the second, purpose rice.`,
      `Lebene took another spoon, looked me in the eyes dead serious, and said "if your jollof rice was this good I wouldn't have to be buying purpose rice". I immediately sat down on the bed because the words hit me, mumbled one or two things and left the room. The words hit me so hard that they rang in my head for hours for Christ's sake my Jollof rice has a degree, well packaged, with correct customer service! And roadside purpose rice tastes better?! I was sad, hurt and vexed all at the same time.`,
      `However I knew it was said out of love and it was good criticism said not to put me down but to make me better, and I was just learning that a criticism of my work is not a criticism of me. So I had a word with the cook. Lebene soon started telling anyone who cared to listen that our Jollof rice was top-notch, and now we have several customer reviews to show for it.`,
      `Dearest Samwise, we need you to be honest with us about our product or service offering, give us good feedback not necessarily the ones we want to hear but the ones that will help us be better. Constructively criticize our work, the pricing, the positioning, marketing strategy etc. Please say this out of love and a need to see us be the best because it is not a comfortable experience for us. A spoonful of what we are doing right, a bowl of love, a sprinkle of what the competition is doing that we can adopt, one tablespoon of what we need to work on should do the trick.`,
    ],
    actionSteps: [
      "Give Frodo some good criticism",
      "Carry out a SWOT analysis for Frodo",
    ],
    closing: "Best Regards,",
    author: "Titilayo Ekundayo",
    contact: "stories@titiekundayo.com",
  },
  {
    slug: "letter-five",
    number: "05",
    title: "Letter Five — Garage Story",
    tag: "Starting Small",
    date: "13 November, 2022",
    greeting: "Dear Samwise,",
    body: [
      `One of the high points of my week was taking the train to Ibadan. It was so comfy, AC everywhere, we even did small aluta when the AC was too much. I am excited at the thought of the pressure that will be taken off the Lagos–Ibadan expressway and the job opportunities that come with a functional rail system.`,
      `Our great nation is in such a state where her youth are forced into pseudo entrepreneurship where almost everyone is an entrepreneur until they get a job, and the few who deliberately choose the path are still sent job opening adverts by their friends and loved ones because to them, entrepreneurship is what you do when you don't get a job. I remember how the early days were: barely any structure and a clientele base of less than 5 people, working and hustling like a slave with little to show for it. Self-doubt was a frequent companion and everything seemed like a defective form of the dreams I wanted to achieve. We tend to forget that there is always a "garage story" behind every successful brand.`,
      `Lebene and I are always excited about opportunities to network and meet more people, so excited that we paid for an event early and endured a 2 hour drive to get to the venue. The speakers were first class and the attendees were also made of good stuff. Then the time for our primary objective came networking! Alas, as people moved around and networked, I found myself sitting down and unable to articulate what exactly I did for a living. This is hard to believe because I am an extrovert, a natural speaker who enjoys meeting new people. But my head was filled with the pitying looks that flashed in people's eyes once I mentioned being an entrepreneur, and self-pitying thoughts on why I was having trouble finding a job as a chemical engineering graduate started playing around in my mind.`,
      `Someone found me and the exchange started, she went on to tell me about what she does and then it was my turn and I literally froze. But you see, Lebene had been watching me I don't know if she sensed what was going on, but she excused herself from who she was speaking with and came to my side, and sold my business like the best thing that happened since peanut butter. Everything she said was right and projected in the correct light, but it sounded differently because it was seen for what it was: a budding start-up. I left that event feeling more energized because someone helped me see what I do in its real sense, not in a defective form. My dreams were given wings again.`,
      `Dearest Samwise, we are pressed on all sides to give up on these dreams, to look at what we do in a defective form. We often forget that every great brand started small and had their fair share of trials. Help us by being the voice that speaks to the greatness in our dreams, the voice that reminds us that there is honour and dignity in starting small.`,
    ],
    actionSteps: [
      "Discuss with Frodo about their hopes and dreams for their business",
      "Communicate to Frodo what their business looks like from the outside and discuss the potentials you see",
    ],
    closing: "Best Regards,",
    author: "Titilayo Ekundayo",
    contact: "stories@titiekundayo.com",
  },
  {
    slug: "letter-six",
    number: "06",
    title: "Letter Six — Journey of a Thousand Miles",
    tag: "Momentum",
    date: "20 November, 2022",
    greeting: "Dear Samwise,",
    body: [
      `This past week seemed to stretch out infinitely, filled with different events and activities on my to-do list. A list that kept growing longer as I achieved or fulfilled any task on it. Thank goodness I remembered what I read in the book "The One Thing" and I went on to determine what one thing would give me the most results daily. The focus moved from ticking my list to getting the most result and it made my week a lot easier to go through.`,
      `Pelumi entered my office, his eyes judging me and willing me to post Letter 6. You see, Pelumi is my editor, he helps to piece all these together and stays on my neck till I submit the drafts for each letter. But for some weird reasons, I couldn't bring myself to upload it. All of a sudden I wanted my letters to be a masterpiece, perfect in every sense of the word. So I didn't post and broke the momentum of a 5 week posting streak. I waited for "divine inspiration" but nothing came and instead of making progress, I started to forget what it means to write with raw emotions, passion and the sole objective of sharing with the world the lessons I have learnt on my journey.`,
      `Often we lose sight of what is most important and we get carried away with the charade of achieving perfection before stepping out. We often forget that we learn to be by being, we learn to do by doing, and we learn to love by loving.`,
      `Dearest Samwise, we often want to wait till all the stars align before we launch that product or service. We often want to have it all at the first shot and so we never begin or we get stuck. We would appreciate it if you can nudge us to start no matter how little or basic, encourage us and remind us that perfection and expertise is not achieved in a single day.`,
    ],
    actionSteps: [
      "Encourage Frodo to take incremental steps",
      "Ensure Frodo doesn't get complacent",
    ],
    closing: "Warm Regards,",
    author: "Titilayo Ekundayo",
    contact: "stories@titiekundayo.com",
  },
  {
    slug: "letter-seven",
    number: "07",
    title: "Letter Seven — Do Your Bits",
    tag: "Collaboration",
    date: "27 November, 2022",
    greeting: "Dear Samwise,",
    body: [
      `I had always thought that my daily routine of waking up super early in the mornings and keeping late nights would not afford me the time to eat healthy and keep fit. However, this last week of prioritizing these two has reminded me that we always create time for what is important to us.`,
      `I love a well-planned Nigerian wedding reception, it just reminds me of all that is beautiful, starting from the beautiful bride, handsome groom, the well-dressed train, friends and family; to the decorations, table setting, photography, well served food and drinks, correct gbedu etc. However, which of these factors would you say its beauty is complete without the other?`,
      `The fellowship of the ring was formed with the sole objective of destroying the ring. It was made up of two men, an elf, a dwarf, four hobbits and a wizard. Everyone came to the table with their unique strength, there was no competition amongst them, it was about helping the ring bearer (Frodo) destroy the ring.`,
      `But there were other players apart from the fellowship of the ring whose actions and deeds made it possible for them to achieve their objective. Players like Elrond who forged back the great sword, Treebeard who led the battles of the trees that destroyed Isengard, Lady Éowyn who killed one of the nine, and King Théoden who led and fought wars to keep the enemy at bay.`,
      `Samwise was physically present with Frodo to help him, but without the others fighting wars and doing their bit in the scheme of things, it would have been impossible for Frodo to destroy the ring.`,
      `Dearest Samwise, there would be several players in our lives without whom it will be near impossible to achieve our dreams. We will have more than one Samwise helping us, supporting us, bringing to the table different strengths and skills without whom the ingredients necessary to make our businesses better and stronger will not be complete.`,
      `There will be some Samwises more obvious in the life of Frodo than others, there will be new Samwises added to Frodo's life over time and that should not create envy or competition; neither should it stop you from doing your bit unapologetically. For no matter the role you play, you are a significant part of our story.`,
    ],
    actionSteps: [
      "Know the other Samwises in Frodo's life",
      "Identify the strengths you are bringing to the table and give it your best shot",
    ],
    closing: "Warm Regards,",
    author: "Titilayo Ekundayo",
    contact: "stories@titiekundayo.com",
  },
  {
    slug: "letter-eight",
    number: "08",
    title: "Letter Eight — Take Time Out to Smell the Roses",
    tag: "Work-Life Balance",
    date: "4 December, 2022",
    greeting: "Dear Samwise,",
    intro: [
      `One of my resolutions this year was to take out time to smell the roses. Between two very demanding start-up businesses, sleep and other things it is no small feat; but I am proud that since the beginning of the year I have given myself a fighting chance to achieve work life balance.`,
    ],
    body: [
      `It is amazing how different the lives of an entrepreneur and an employee are the grass does look greener on the other side. When Lebene is happy that there is a public holiday so she can relax at home and do other things, I'm thinking about how it's another "no work but pay" day for my staff, the volume of work that has to wait and how sales will be affected while corporate Nigeria is on break. While Amele is happy that salaries will soon be paid so she can buy and pay for things, I am thinking about how much will be left in the company's account to pay bills and salaries and if the set target was met.`,
      `While they have their direct boss and customers to answer to, we have the government, regulators, competitors, employees, customers, stakeholders and shareholders to answer to. When the rest of the world is doing TGIF, we are most likely looking at covering some grounds before another work week, no leave, no holidays, no weekends, it's all just work! Work! Work!, at least at the beginning of the first few years, and rightly so because laying the foundation of anything worthwhile is a whole lot of work and not for the faint-hearted. However, we burn out very fast because we forget that relaxing and taking breaks is an essential part of our existence.`,
      `I can't count the number of movie dates, dinner hangouts, road trips, carols etc that I cancelled on the geng because my workload was much, or there was nobody to stand in for me. There was even this road trip the whole geng was excited about that I cancelled hastily because a prospective customer wanted us to do a job for him on the day of the trip. I sacrificed the trip with my friends and the customer ended up not hiring me anyway.`,
      `I received sense when the whole geng called a meeting to tell me the world will not end, everything will not scatter, and I will be better for it if I step away from work to get the rest I needed. It is amazing what new ideas we have, how refreshed we feel and how differently we see things when we dare to leave our mountain of work to take time out to relax and hang out with friends.`,
      `Dearest Samwise, nudge us to take those small breaks that we really need, a movie at the cinema, dinner with friends etc. Plan with us, entertain no excuse from us till the habit is formed.`,
    ],
    actionSteps: [
      "Plan an outing with Frodo, flexible enough for adjustment, and entertain no excuse from Frodo",
      "Call Frodo out when he starts to neglect the important things",
    ],
    closing: "Warm Regards,",
    author: "Titilayo Ekundayo",
    contact: "stories@titiekundayo.com",
  },
  {
    slug: "letter-nine",
    number: "09",
    title: "Letter Nine",
    tag: "Little Wins",
    date: "11 December, 2022",
    greeting: "Dear Samwise,",
    body: [
      `An exclamation of amazement burst out of my popcorn and zobo-filled mouth as SubZero landed a clean and glorious hit on Hanzo Kasashi as their battle built up in a crescendo, the sound eclipsed whatever Opeoluwa Fayomi was saying, causing other people around us to shoot annoyed glances in our direction. I enjoyed watching Mortal Kombat at the cinemas with her. I kept shouting from time to time (to the chagrin of other viewers) and Opeoluwa ran commentary, identifying each character and giving hints about their abilities and backstory (she's a diehard Mortal Kombat gamer).`,
      `I felt especially grateful this past week seeing Opeoluwa, for old friends remind you of how far you have come and how much work still needs to be done. Solid friendships are good investments that pay off in great dividends.`,
      `I remember looking forward to when I would finally be allowed to write with a biro instead of pencil in primary school, life would be more fun, I thought. That time came but all I wanted to do was enter secondary school, so I could start enjoying adulthood and all its freedoms. A big part of my time in FGGC Oyo was spent daydreaming about how I would spend my undergraduate days with no "in your face seniority" and no matron waking me up by 5am singing "e dide e lo we". Undergrad was spent dreaming of breaking free from exams and long lectures. I couldn't wait to live life on my own terms. I didn't see that with such freedoms came great responsibilities. I see now that adulting is a "scam" and one must enjoy the beauty of each stage in life.`,
      `Life is a marathon not a sprint, so we must learn to enjoy each phase along the journey, for every stage has its own unique challenges. The challenges one faces as an entrepreneur with less than 10 staff is a far cry from those of an entrepreneur with a thousand staff. Some things get easier but the size of the challenge never does. This makes it important to take the time to celebrate the little victories we get, whenever they appear.`,
      `Both hands up, sway your hips from side to side twice, turn around with your arms wide open as we collide into a big bear hug which usually ends with bolts of laughter, that is how we do our victory dance. I can't remember our first victory dance or how we discovered the moves but it is a tradition Lebene and I have kept up over the years. We celebrate our little wins with a 60-second dance. A little win is anything that moves you forward towards a goal, no matter how small the fraction of change.`,
      `You can be sure that when the first customer called or walked in we went to a corner to do the dance. We danced whenever we were invited for a pitch no matter the outcome, we danced when a customer gave a review that validates the reason we are in business, we danced because we survived the first year, a milestone many businesses don't reach, we danced when we achieved our target for the month or when we successfully executed a project. It has been discovered that celebrating the little wins gives us the strength to do more, contributes to our happiness and refreshes us.`,
      `Dearest Samwise, please celebrate our little wins with us. Sometimes it might not feel like a win or like something worth celebrating but please celebrate with us for it leaves us refreshed, energized and hopeful. This "little wins celebration" routine does not have to be a lot — it could be as simple as a high five, a dance, a victory sound, a drink, a meal; something simple and easy to do.`,
    ],
    actionSteps: [
      "Decide with Frodo on how to celebrate the little wins",
      "Identify Frodo's little wins and celebrate",
    ],
    closing: "Warm Regards,",
    author: "Titilayo Ekundayo",
    contact: "stories@titiekundayo.com",
    ps: "Thank you Abiodun Akinnagbe for dancing with me even on days when I didn't feel like celebrating. I usually leave those dances with a gratitude-filled heart and the strength to go on.",
  },
];

/* ─── Introduction data (shown on every letter page) ────────── */
const INTRO_PARAGRAPHS = [
  `On a Sunday morning, during the lockdown last year, my will power gave in from the stress of a long week and I lost a 20 year long battle with temptation. I finally sat down and watched The Lord of the Rings Trilogy. It was amazing. Hot puff puff, Asun, a very cold drink and 9 hours of entertainment and lifelong lessons.`,
  `I especially liked the fact that LOTR had many heroes, without whom the story would not have been complete. Frodo, the character on whom the fate of the war depended, had to go on a long journey to destroy the ring and would have failed gallantly had his friend Samwise not stubbornly followed on the journey.`,
  `Samwise believed in him even when he could not believe in himself, kept him company, and encouraged him. He reminded him of what was important, saved him and literally carried him to the fulfilment of his purpose.`,
  `Frodo was by no means a weak person but like all of us, he needed someone to walk with him through his journey, to cheer him on and remind him of what was important. In whatever we do in life, in whatever goal we set out to achieve, we play the role of Frodo and those who stand with us, help us and encourage us are our Samwise.`,
  `Every Thursday, I will be writing a letter to the Samwises on how they can help their Frodos. The letters will be written so that the Frodos (The Entrepreneurs) can achieve that which they have set out to do through the help of their Samwises (The friends of entrepreneurs).`,
];

const FOR_LIST = [
  "Entrepreneurs of 5 years and below",
  "Friends of entrepreneurs of 5 years and below",
  "Those who are considering becoming entrepreneurs",
  "Those who want to remember the beginning of their entrepreneurial journey",
  "Those who want to start a new business",
];

/* ─── Page ───────────────────────────────────────────────────── */
const LetterPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const letter = LETTERS.find((l) => l.slug === slug);

  if (!letter) {
    return (
      <div className={styles.pageRoot}>
        <MusingNavTitle />
        <div style={{ padding: "6rem 2rem", textAlign: "center", color: "#888" }}>
          <p>Letter not found.</p>
          <Link href="/musing" style={{ color: "#00FFCD" }}>← Back to Musing</Link>
        </div>
      </div>
    );
  }

  const currentIndex = LETTERS.findIndex((l) => l.slug === slug);
  const prevLetter = currentIndex > 0 ? LETTERS[currentIndex - 1] : null;
  const nextLetter = currentIndex < LETTERS.length - 1 ? LETTERS[currentIndex + 1] : null;

  return (
    <div className={styles.pageRoot}>
      <MusingNavTitle />
      <ArticleHero letter={letter} />
      <ArticleBody letter={letter} />
      <LetterNav prev={prevLetter} next={nextLetter} />
      <BackLink />
      <ScrollUpIcon />
    </div>
  );
};

/* ─── Article Hero ───────────────────────────────────────────── */
const ArticleHero = ({ letter }: { letter: Letter }) => (
  <section className={styles.articleHero}>
    <div className={styles.articleHeroInner}>
      <div className={styles.articleMeta}>
        <span className={styles.articleNumber}>{letter.number}</span>
        <span className={styles.articleTag}>{letter.tag}</span>
        <span className={styles.articleDate}>{letter.date}</span>
      </div>
      <h1 className={styles.articleTitle}>{letter.title}</h1>
      <p className={styles.articleSubtitle}>
        Letters on how the people around entrepreneurs can help their Frodos
        reach Mount Doom and destroy the ring.
      </p>
    </div>
    <div className={styles.articleHeroImg}>
      <Image
        src={musingimg}
        alt={letter.title}
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
      />
      <div className={styles.articleHeroImgOverlay} />
    </div>
  </section>
);

/* ─── Article Body ───────────────────────────────────────────── */
const ArticleBody = ({ letter }: { letter: Letter }) => (
  <div className={styles.articleBody}>
    <div className={styles.articleBodyInner}>

      {/* Introduction — only on letter-one */}
      {letter.slug === "letter-one" && (
        <div className={styles.introBlock}>
          <p className={styles.introLabel}>Introduction</p>
          {INTRO_PARAGRAPHS.map((p, i) => (
            <p key={i} className={styles.articleP}>{p}</p>
          ))}
          <div className={styles.forBlock}>
            <p className={styles.forTitle}>These letters are for:</p>
            <ul className={styles.forList}>
              {FOR_LIST.map((item, i) => (
                <li key={i} className={styles.forItem}>
                  <span className={styles.forBullet}>—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className={styles.letterDivider}>
        <span className={styles.letterDividerText}>{letter.title}</span>
      </div>

      {/* Letter content */}
      <div className={styles.letterBlock}>
        {/* Optional intro paragraphs (e.g. Letter 8) */}
        {letter.intro?.map((p, i) => (
          <p key={`intro-${i}`} className={styles.articleP}>{p}</p>
        ))}

        <p className={styles.greeting}>{letter.greeting}</p>

        {letter.body.map((p, i) => (
          <p key={i} className={styles.articleP}>{p}</p>
        ))}

        {/* Mid-article image */}
        <div className={styles.articleImgWrap}>
          <Image
            src={musing2}
            alt="Letter to Samwise"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Action steps */}
        <div className={styles.actionBlock}>
          <p className={styles.actionTitle}>Action Steps</p>
          <ul className={styles.actionList}>
            {letter.actionSteps.map((step, i) => (
              <li key={i} className={styles.actionItem}>
                <span className={styles.actionNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact prompt */}
        {letter.contact && (
          <p className={styles.contactPrompt}>
            I would love to hear your thoughts — send me a mail at{" "}
            <a href={`mailto:${letter.contact}`} className={styles.contactLink}>
              {letter.contact}
            </a>
          </p>
        )}

        {/* PS */}
        {letter.ps && (
          <p className={styles.ps}>
            <strong>PS:</strong> {letter.ps}
          </p>
        )}

        {/* Closing */}
        <div className={styles.closing}>
          <p className={styles.closingLine}>{letter.closing}</p>
          <p className={styles.closingAuthor}>{letter.author}</p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Prev / Next nav ────────────────────────────────────────── */
const LetterNav = ({
  prev,
  next,
}: {
  prev: Letter | null;
  next: Letter | null;
}) => (
  <div className={styles.letterNav}>
    <div className={styles.letterNavInner}>
      {prev ? (
        <Link href={`/musing/${prev.slug}`} className={styles.navLink}>
          <span className={styles.navDirection}>← Previous</span>
          <span className={styles.navTitle}>{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/musing/${next.slug}`} className={`${styles.navLink} ${styles.navLinkRight}`}>
          <span className={styles.navDirection}>Next →</span>
          <span className={styles.navTitle}>{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  </div>
);

/* ─── Back link ──────────────────────────────────────────────── */
const BackLink = () => (
  <div className={styles.backWrap}>
    <div className={styles.backInner}>
      <Link href="/musing" className={styles.backLink}>
        ← Back to all letters
      </Link>
    </div>
  </div>
);

export default LetterPage;
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

import HtmlIcon from "@/component/svgs/html5.svg";
import CssIcon from "@/component/svgs/css3.svg";
import JavaScriptIcon from "@/component/svgs/square-js.svg";
import ReactIcon from "@/component/svgs/react.svg";
import Crome from "@/component/svgs/chrome.svg";
import GithubIcon from "@/component/svgs/github.svg";

export const navItem = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

export const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark SaaS Landing Page",
    achievements: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtube.com",
    github_link: "https://github.com",
    image: darkSaasLandingPage,
  },
  {
    company: "Tech Solutions",
    year: "2023",
    title: "Light SaaS Landing Page",
    achievements: [
      { title: "Boosted conversion rates by 25%" },
      { title: "Optimized accessibility and UI design" },
      { title: "Decreased bounce rate by 20%" },
    ],
    link: "https://example.com",
    github_link: "https://github.com",
    image: lightSaasLandingPage,
  },
  {
    company: "AI Innovations",
    year: "2024",
    title: "AI Startup Landing Page",
    achievements: [
      { title: "Integrated AI-powered chatbot" },
      { title: "Increased engagement by 60%" },
      { title: "Reduced load time by 50%" },
    ],
    link: "https://startup.ai",
    github_link: "https://github.com",
    image: aiStartupLandingPage,
  },
  {
    company: "Tech Solutions",
    year: "2023",
    title: "Light SaaS Landing Page",
    achievements: [
      { title: "Boosted conversion rates by 25%" },
      { title: "Optimized accessibility and UI design" },
      { title: "Decreased bounce rate by 20%" },
    ],
    link: "https://example.com",
    github_link: "https://github.com",
    image: lightSaasLandingPage,
  },
  {
    company: "AI Innovations",
    year: "2024",
    title: "AI Startup Landing Page",
    achievements: [
      { title: "Integrated AI-powered chatbot" },
      { title: "Increased engagement by 60%" },
      { title: "Reduced load time by 50%" },
    ],
    link: "https://startup.ai",
    github_link: "https://github.com",
    image: aiStartupLandingPage,
  },
];

export const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const toolboxItems = [
  {
    title: "HTML",
    src: HtmlIcon,
  },
  {
    title: "JavaScript",
    src: JavaScriptIcon,
  },
  {
    title: "CSS3",
    src: CssIcon,
  },
  {
    title: "React",
    src: ReactIcon,
  },
  {
    title: "Chrom",
    src: Crome,
  },
  {
    title: "Github",
    src: GithubIcon,
  },
];
export const hobbies = [
  { title: "Reading", emoji: "📖", left: "10%", top: "10%" },
  { title: "Photography", emoji: "📸", left: "40%", top: "10%" },
  { title: "Gaming", emoji: "🎮", left: "70%", top: "10%" },

  { title: "Music", emoji: "🎵", left: "10%", top: "40%" },
  { title: "Coding", emoji: "💻", left: "40%", top: "40%" },
  { title: "Traveling", emoji: "✈️", left: "70%", top: "40%" },

  { title: "Cooking", emoji: "🍳", left: "10%", top: "70%" },
  { title: "Fitness", emoji: "🏋️", left: "40%", top: "70%" },
  { title: "Sketching", emoji: "🎨", left: "70%", top: "70%" },

  { title: "Dancing", emoji: "💃", left: "20%", top: "20%" },
  { title: "Blogging", emoji: "📝", left: "50%", top: "20%" },
  { title: "Astronomy", emoji: "🔭", left: "80%", top: "20%" },

  { title: "Meditation", emoji: "🧘", left: "20%", top: "50%" },
  { title: "Hiking", emoji: "🥾", left: "50%", top: "50%" },
  { title: "Swimming", emoji: "🏊", left: "80%", top: "50%" },

  { title: "Cycling", emoji: "🚴", left: "50%", top: "80%" },
];

export const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    title: "GitHub",
    href: "https://www.github.com/",
  },
];

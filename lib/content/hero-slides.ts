export type HeroSlide = {
  img: string;
  tag: string;
  title: string;
  sub: string;
  cta: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    img: "/hero/agri-tech-slide.png",
    tag: "Agri-Tech Spotlight",
    title: "Tillage Done\nRight",
    sub: "Walk-behind power weeders that break tough soil fast — less labor, bigger harvests, from field to furrow.",
    cta: "Shop Now",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85",
    tag: "Direct from Source",
    title: "Fresh from\nthe Factory",
    sub: "Straight from manufacturers to your doorstep. No middlemen.",
    cta: "Explore",
  },
  {
    img: "/products/mini-tiller-7hp.png",
    tag: "Wholesale Deals",
    title: "Farm Smarter\nwith Kart",
    sub: "Your one-stop wholesale marketplace for agri-tech and everyday essentials.",
    cta: "Get Started",
  },
];

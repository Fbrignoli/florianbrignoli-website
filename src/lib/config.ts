export const site = {
  name: "Florian Brignoli",

  youtube: {
    channelId: import.meta.env.YOUTUBE_CHANNEL_ID ?? "UCK2wbW99X9ojtWS880_83rw",
    channelUrl: "https://www.youtube.com/@FlorianBRIGNOLI",
    handle: "@FlorianBRIGNOLI",
  },

  cal: {
    url: "https://www.cal.eu/florianbrignoli/quick-chat",
    label: "Échanger 30 min",
  },

  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@FlorianBRIGNOLI" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/florianbrignoli" },
  ],
};

export type Pillar = {
  step: string;
  title: string;
  body: string;
};

export const pillars: Pillar[] = [
  {
    step: "01",
    title: "On regarde votre business",
    body: "On commence par identifier ce qui vous prend du temps et ce qui peut tourner sans vous.",
  },
  {
    step: "02",
    title: "On construit ensemble",
    body: "Je mets l'IA dans vos outils existants : Claude, ChatGPT, Notion, n8n. On ajuste jusqu'à ce que ça marche dans votre flux.",
  },
  {
    step: "03",
    title: "Vous reprenez la main",
    body: "Vos équipes savent s'en servir et l'améliorer seules. Vous gardez la propriété de tout.",
  },
];

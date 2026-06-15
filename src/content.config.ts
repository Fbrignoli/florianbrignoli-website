import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ressources = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/ressources" }),
  schema: z.object({
    titre: z.string(),
    promesse: z.string(),
    sous_titre: z.string().optional(),
    pdf: z.string(),
    bullets: z.array(z.string()),
    video_titre: z.string().optional(),
    video_youtube: z.string().optional(),
    mailerlite_form_id: z.string(),
    mailerlite_account_id: z.string(),
    seo_description: z.string().optional(),
  }),
});

export const collections = { ressources };

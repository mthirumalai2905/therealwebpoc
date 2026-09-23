export const CONTACT_TOPICS = [
  "Technical",
  "Commercial",
  "Media",
  "Investors",
  "Industrial partners",
  "Inventors and creators of the new earth",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];

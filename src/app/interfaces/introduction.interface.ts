/**
 * Provides Social Media Interface.
 */
export interface SocialMedia {
  icon: string;
  name: string;
  link: string;
}

/**
 * Provides Introduction Interface.
 */
export interface Introduction {
  name: string;
  job_title: string;
  preamble: string;
  mail: string;
  social_media: SocialMedia[];
}

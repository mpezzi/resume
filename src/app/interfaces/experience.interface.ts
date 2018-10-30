/**
 * Provides Experience Interface.
 */
export interface Experience {
  uuid: any;
  job: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
  start_at: string | null;
  end_at: string | null;
}

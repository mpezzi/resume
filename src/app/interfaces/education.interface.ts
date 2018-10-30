/**
 * Provides Education Interface.
 */
export interface Education {
  uuid: any;
  school: string;
  course: string;
  duration: string;
  description: string;
  start_at: string | null;
  end_at: string | null;
}

import { Education } from './education.interface';
import { Experience } from './experience.interface';
import { Interest } from './interest.interface';
import { Introduction } from './introduction.interface';
import { Skill } from './skill.interface';

/**
 * Provides Resume Interface.
 */
export interface Resume {
  introduction: Introduction;
  experiences: Experience[];
  educations: Education[];
  interests: Interest[];
  skills: Skill[];
}

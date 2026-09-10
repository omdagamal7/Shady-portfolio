export interface ExperienceCase {
  role: string;
  org: string;
  time: string;
  description: string;
  status: 'RUNNING' | 'PASSED';
  current?: boolean;
}

export interface SkillGroup {
  title: string;
  chips: string[];
}

export interface Project {
  name: string;
  type: string;
  description: string;
}

export interface Course {
  name: string;
  org: string;
  date: string;
}

export interface EducationItem {
  degree: string;
  time: string;
  institute: string;
}

export interface HeroStat {
  value: number | string;
  label: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
  external?: boolean;
}

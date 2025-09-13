interface SkillList {
  category: string;
  skills: string[];
}

interface Job {
  id: number;
  jobTitle: string;
  startDate: string;
  endDate: string;
  company: string;
  companyAdditionalInfo?: string;
  responsibilities: string[];
}

interface PersonalProject {
  name: string;
  datesActive: string;
  description: string;
}

interface AcademicDegree {
  name: string;
  endDate: string;
  schoolName: string;
}

export interface Candidate {
  name: string;
  location: string;
  email: string;
  websites: string[];
  skillLists: SkillList[];
  previousJobs: Job[];
  personalProjects?: PersonalProject[];
  degrees: AcademicDegree[];
}

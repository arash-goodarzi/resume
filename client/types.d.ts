interface UserType {
    generalInfo: GeneralInfo;
    sidebarInfo: SidebarInfo;
    sectionInfo: SectionInfo;
  }
  
  export interface GeneralInfo {
    fullname: string
    title: string
    phone: string
    email: string
    githubLink: string
    linkedInLink: string
    portfolio: string
    location: string
    locationGoogleMapLink: string
  }
  
  export interface SidebarInfo {
    strengths: Strength[]
    skills: Skill[]
    achivments: Achivment[]
    industry_experties: IndustryExperty[]
    languages: Language[]
    learning: Learning[]
  }
  
  export interface Strength {
    id: number
    title: string
    detail: string
    icon: string
  }
  
  export interface Skill {
    id:number
    groupName: string
    groupList: GroupList[]
  }
  
  export interface GroupList {
    id: number
    name: string
    icon: string
  }
  
  export interface Achivment {
    id: number
    title: string
    detail: string
    icon: string
  }
  
  export interface IndustryExperty {
    id: number
    title: string
    value: number
  }
  
  export interface Language {
    id: number
    name: string
  }
  
  export interface Learning {
    id: number
    title: string
    value: number
  }
  
  export interface SectionInfo {
    summery: string
    experience: Experience[]
    education: Education[]
    certifications: Certification[]
  }
  
  export interface Experience {
    id: number
    title: string
    company: string
    date: string
    location: string
    description: string
    details: string[]
  }
  
  export interface Education {
    id: number
    title: string
    collageName: string
    gpa: number
    date: string
    location: string
  }
  
  export interface Certification {
    id: number
    course: string
    instractor: string
    from: string
  }
  
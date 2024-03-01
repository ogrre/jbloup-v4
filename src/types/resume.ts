interface Basics {
    name: string;
    label: string;
    email: string;
    phoneNumberFr: string;
    phoneNumberCa: string;
    url: string;
    title: string;
    company: string;
    companyUrl: string;
    subtitle: string;
    summary: string;
    location: {
        locationCountryCode: string;
        city: string;
    };
    profiles: Profile[];
}

interface Profile {
    network: string;
    url: string;
    username: string;
}

interface Experience {
    name: string;
    shortName: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
    location: string;
    highlights: string[];
    url: string;
}

interface Education {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
}

interface Skill {
    name: string;
    value: number;
}

interface Language {
    name: string;
    value: number;
    language: string;
}

interface Interest {
    name: string;
}

interface Project {
    starDate: string;
    highlights: string[];
    summary: string;
    url: string;
    name: string;
}

export interface Resume {
    basics: Basics;
    work: Experience[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
    projects: Project[];
}

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  passwordEnvKey: string;
  description: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tines",
    title: "Tines Case Study",
    company: "Tines",
    passwordEnvKey: "CASE_STUDY_TINES_PASSWORD",
    description:
      "Product work and process details prepared for the Tines hiring process.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

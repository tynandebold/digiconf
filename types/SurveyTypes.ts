export type Survey = SurveyCategory[];

export type SurveyCategory = {
  title: string;
  description: string;
  subjects: SurveyCategorySubjects[];
};

type SurveyCategorySubjects = {
  title: string;
  description: string;
  chosen: boolean;
};

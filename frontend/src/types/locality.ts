export interface CategoryMetric {
  name: string;
  score: number;
  weight: string;
  icon: string;
}

export interface Locality {
  id: string;
  name: string;
  overallScore: number;
  dataCoverage: number;
  confidenceGrade: 'High' | 'Medium' | 'Low';
  categories: CategoryMetric[];
  isSampleData: boolean;
}
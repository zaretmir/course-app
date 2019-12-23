export interface Course {
  [index: string]: any;
  id?: number;
  title: string;
  duration: number | null;
  level: string;
  isActive: boolean;
  instructorId: number;
}

export interface Course {
  id: number;
  title: string;
  duration: number;
  level: string;
  isActive: boolean;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Course A',
    duration: 12,
    level: 'basic',
    isActive: true
  },
  {
    id: 2,
    title: 'Course B',
    duration: 34,
    level: 'basic',
    isActive: true
  },
  {
    id: 3,
    title: 'Course C',
    duration: 45,
    level: 'basic',
    isActive: false
  },
  {
    id: 4,
    title: 'Course D',
    duration: 767,
    level: 'basic',
    isActive: true
  }
];

export function getCourses() {
  return courses;
}

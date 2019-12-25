export class Course {
  [index: string]: any;

  constructor(
    public id: number | null,
    public title: string,
    public duration: number,
    public level: string,
    public isActive: boolean,
    public instructorId: number
  ) {}
}

export class CourseAdapter {
  adapt(item: any) {
    return new Course(
      item.id,
      item.title,
      item.duration,
      item.level,
      item.isActive,
      item.instructorId
    );
  }
}

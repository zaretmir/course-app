export class Instructor {
  constructor(public id: number, public name: string) {}
}

export class InstructorAdapter {
  adapt(item: any) {
    return new Instructor(item.id, item.name);
  }
}

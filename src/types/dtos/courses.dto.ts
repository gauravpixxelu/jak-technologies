export class SubjectDto {
  name: string;
  duration: string;
  description: string;
  image: string;
  branch: string;

  constructor(data: any) {
    this.name = data.name;
    this.duration = data.duration;
    this.description = data.description;
    this.image = data.image;
    this.branch = data.branch;
  }
}

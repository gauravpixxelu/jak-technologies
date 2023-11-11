export class FeatureDto {
  id: number;
  title: string;
  text: string;
  desc: string;
  image: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.text = data.text;
    this.desc = data.desc;
    this.image = data.image;
  }
}

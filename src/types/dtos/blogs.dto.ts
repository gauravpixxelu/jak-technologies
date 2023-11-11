class BlogPostDto {
  date: string;
  title: string;
  image: string;

  constructor(data: any) {
    this.date = data.date;
    this.title = data.title;
    this.image = data.image;
  }
}

export default BlogPostDto;

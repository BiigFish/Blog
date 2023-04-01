interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content: string;
  comments?: Comment[]
}

interface Comment {
  author: string;
  text: string;
  order: number;
  level?: number
}
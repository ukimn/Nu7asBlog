interface routeTypes {
  id: number;
  name: string;
  path: string;
}

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export type { routeTypes, IappProps };

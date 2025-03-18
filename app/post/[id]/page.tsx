import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,

} from "@/components/ui/card";
import Image from "next/image";

async function getPost(postId: string) {
  const post = await prisma.blogPost.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    notFound();
  }

  return post;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Nu7as Blog</h1>
          <p className="text-gray-600 mt-2">Thoughts, stories, and ideas</p>
        </header>

        {/* Post Content */}
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {post.title}
            </CardTitle>
            <div className="relative h-70 w-full overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={"Image"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardDescription className="text-gray-500 mt-2">
              Published on{" "}
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(post.createdAt)}
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg text-gray-700">
            <p>{post.content}</p>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-600">
          <p>© 2023 My Blog. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

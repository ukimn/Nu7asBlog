import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";
import { Suspense } from "react";

async function getData(UserId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: UserId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
export default function Dashboard() {
  return (
    <div>
      <div className="m-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium">Your Blog Articles</h2>
        </div>
        <Link href={"/dashboard/create"} className={buttonVariants()}>
          Create Post
        </Link>
      </div>

      <Suspense fallback={<h1>Please wait...</h1>}>
        <GetMyPosts />
      </Suspense>
    </div>
  );
}

async function GetMyPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post) => (
        <BlogPostCard data={post} key={post.id} deleteButton={true}/>
      ))}
    </div>
  );
}

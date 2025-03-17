"use client"

import { prisma } from "@/app/utils/db";
import { Button } from "../ui/button";

export function DeleteButton({ id }: { id: string }) {
  const deletePost = async (postId: string) => {
    await prisma.blogPost.delete({ where: { id: postId } });
  };

  return (
    <>
      <Button onClick={() => deletePost(id)}>Delete Post</Button>
    </>
  );
}

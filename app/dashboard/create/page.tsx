"use client";

import { CardHeader, Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { createPost } from "@/app/actions";
import { SubmitButton } from "@/components/general/Submitbutton";

export default function CreateBlogPage(){

    return(
        <div>
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>
                        Create a new post to share with the world
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" action={createPost}>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input name="title" required placeholder="Title"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea name="content" required placeholder="Content"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input name="url" required placeholder="Image URL"/>
                        </div>
                        <SubmitButton/>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
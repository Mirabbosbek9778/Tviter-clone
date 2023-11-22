import { IPost } from "@/types";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const PostItem = ({ post }: { post: IPost }) => {
  return (
    <div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition relative">
      <div className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src={post.user.profileImage} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-white font-semibold cursor-pointer hover:underline">
              {post.user.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

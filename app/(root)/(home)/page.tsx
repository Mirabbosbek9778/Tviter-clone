"use client";

import PostItem from "@/components/shared/PostItem";
import Form from "@/components/shared/form";
import Header from "@/components/shared/header";
import { IPost } from "@/types";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: session, status }: any = useSession();

  const [isLoading, setisLoading] = useState(false);

  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setisLoading(true);

        const { data } = await axios.get("/api/posts?limit=10");
        setPosts(data);
        setisLoading(false);
      } catch (e) {
        setisLoading(false);
      }
    };

    getPosts();
  }, []);
  return (
    <>
      <Header label="Home" />
      {isLoading || status === "loading" ? (
        <div className="flex justify-center items-center h-24">
          <Loader2 className="animate-spin text-sky-500" />
        </div>
      ) : (
        <>
          <Form
            placeholder="what is on your mind?"
            user={JSON.parse(JSON.stringify(session.currentUser))}
            setPosts={setPosts}
          />
          {posts.map((post) => (
            <PostItem
              key={post._id}
              post={post}
              user={JSON.parse(JSON.stringify(session.currentUser))}
              setPosts={setPosts}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Page;

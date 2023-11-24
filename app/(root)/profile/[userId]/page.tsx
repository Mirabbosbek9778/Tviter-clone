import Header from "@/components/shared/header";
import { getUserById } from "@/lib/actions/user.action";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import PostFeed from "@/components/shared/postFeed";
import ProfileBio from "@/components/profile/profileBio";
import ProfileHero from "@/components/profile/profileHero";

const Page = async ({ params }: { params: { userId: string } }) => {
  const session: any = await getServerSession(authOptions);
  const user = await getUserById(params.userId);

  return (
    <>
      <Header label={user.name} isBack />
      <ProfileHero user={JSON.parse(JSON.stringify(user))} />
      <ProfileBio
        user={JSON.parse(JSON.stringify(user))}
        userId={JSON.parse(JSON.stringify(session)).currentUser._id}
      />
      <PostFeed
        userId={params.userId}
        user={JSON.parse(JSON.stringify(session.currentUser))}
      />
    </>
  );
};

export default Page;

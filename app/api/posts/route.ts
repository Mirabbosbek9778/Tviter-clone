import Post from "@/database/post.model";
import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { body, userId } = await req.json();

    const post = await Post.create({ body, user: userId });

    return NextResponse.json(post);
  } catch (e) {
    const result = e as Error;
    return NextResponse.json({ e: result.message }, { status: 400 });
  }
}

// post create uchun api

export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");

    const posts = await Post.find({})
      .populate({
        path: "user",
        model: User,
        select: "name username _id profileImage email",
      })
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    return NextResponse.json(posts);
  } catch (e) {
    const result = e as Error;
    return NextResponse.json({ e: result.message }, { status: 400 });
  }
}

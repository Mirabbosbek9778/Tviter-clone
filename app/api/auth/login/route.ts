import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { compare } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    const isExistingUser = await User.findOne({ email });

    if (!isExistingUser) {
      return NextResponse.json({ e: "email does not exist" }, { status: 400 });
    }

    const isPasswordValid = await compare(password, isExistingUser.password);

    if (!isPasswordValid) {
      return NextResponse.json({ e: "password is incorrect" }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: isExistingUser });
  } catch (e) {
    const result = e as Error;
    return NextResponse.json({ e: result.message }, { status: 400 });
  }
}

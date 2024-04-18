import { connectMongoDB } from "@/lib/connect";
import BookNow from "@/modals/bookNowModal";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    await connectMongoDB();
    await BookNow.create(res);
    return NextResponse.json(
      { message: `Thank You for contacting!` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `An error occurred while registering the user. ${error} ` },
      { status: 500 }
    );
  }
}

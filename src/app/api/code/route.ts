import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.redirect("https://echo-the-dolphin.vercel.app", {status: 302});
}

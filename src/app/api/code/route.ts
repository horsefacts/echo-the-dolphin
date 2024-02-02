import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.redirect("https://echo-the-dolphin.vercel.app", {status: 302});
}

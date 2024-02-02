import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.redirect("https://github.com/horsefacts/echo-the-dolphin", {status: 302});
}

import { NextResponse } from "next/server";
import { ImageResponse } from 'next/og';
import { join } from "path";
import * as fs from "fs";

const interRegPath = join(process.cwd(), "public/Inter-Regular.ttf");
let interReg = fs.readFileSync(interRegPath);

const interBoldPath = join(process.cwd(), "public/Inter-Bold.ttf");
let interBold = fs.readFileSync(interBoldPath);

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        paddingTop: 108,
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        lineHeight: 1.2,
        fontSize: 36,
        color: "black",
      }}
    >
      <img
        width="450"
        height="450"
        src="https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2639523a-690b-47af-16ab-ca07697fd000/original"
      />
      <div style={{ marginTop: 12, color: '#0a588c', display: "flex" }}><strong>Echo The Dolphin</strong></div>
      <div style={{ display: "flex" }}>
        Type something below and Echo will say it back.{" "}
      </div>
    </div>,
    {
      width: 1200,
      height: 800,
      fonts: [
        {
          name: "Inter",
          data: interReg,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: interBold,
          weight: 800,
          style: "normal",
        },
      ],
    }
  );
}

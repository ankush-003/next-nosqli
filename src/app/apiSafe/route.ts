import { prisma } from "../db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { client } from "@gradio/client";
import { type NextRequest } from "next/server";
// import { useRouter } from "next/router";

export async function POST(req: Request) {
    const data = await req.formData();
    const username = data.get("username");
    const password = data.get("password");
    const email = data.get("email");

    // redirects only occur at server side
    // redirect('/')
    const app = await client("https://ankush-003-ankush-003-nosqli-identifier.hf.space/");
    const result:any = await app.predict("/predict", [		
                    "Howdy!", // string  in 'Enter Username' Textbox component		
                    "Howdy!", // string  in 'Enter Password' Textbox component		
                    "Malitious", // string (Option from: ['Malitious', 'Benign']) in 'Expected' Dropdown component		
                    "Howdy!", // string  in 'Enter Payload' Textbox component
        ]);

    console.log(result.data);
    return NextResponse.json({ username: username, password: password, email: email, data: result.data });
}


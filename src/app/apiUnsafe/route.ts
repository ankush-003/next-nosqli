import { prisma } from "../db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { useRouter } from "next/router";

export async function POST(req: Request) {
    const data = await req.formData();
    const username = data.get("username");
    const password = data.get("password");
    const email = data.get("email");
    const payload = JSON.stringify({ username: username, password: password});
    const test = (await fetch("/api/test", {
        method: "POST",
        body: payload,
    }))
    const test2 = await test.json()
    console.log(test2)

    // redirects only occur at server side
    // redirect('/')
    return NextResponse.json({ username: username, password: password, email: email, result: test2 });
}

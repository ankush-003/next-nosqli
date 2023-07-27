import { prisma } from "../db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { useRouter } from "next/router";

const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";

export async function POST(req: Request) {
    const data = await req.formData();
    const username = data.get("username")?.toString();
    const password = data.get("password")?.toString();
    const email = data.get("email");
    const payload = JSON.stringify({ username: username, password: password});
    const body = JSON.stringify({ payload: payload});
    const res_data = await fetch(`${URL}/test`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
    const res = await res_data.json()
    if (res.label === "Malicious") {
        console.log("Malicious request detected");
    } else {
        console.log("Safe request");
        const user = await prisma.users.findMany({
            where: {
                username: username,
                password: password
            }
        })
        console.log(user);
        res.user = user;
    }
    // redirects only occur at server side
    // redirect('/')
    return NextResponse.json({ payload: payload, res: res, });
}


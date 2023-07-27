import { prisma } from "../db";
import { redirect } from "next/navigation";
import clientPromise from "../mongo_db";
import { NextResponse } from "next/server";
// import { type NextRequest } from "next/server";
// import { useRouter } from "next/router";

const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";

export async function POST(req) {
    const data = await req.formData();
    const username = data.get("username");
    const password = data.get("password");
    const email = data.get("email")?.toString();
    const payload = JSON.stringify({ username: username, password: password});
    // const test = (await fetch("/api/test", {
    //     method: "POST",
    //     body: payload,
    // }))
    // const test = await fetch(`${URL}/hello`);
    // const test2 = await test.json()
    // console.log(test2)
    // fetching data from prisma
    // const test = await prisma.users.findMany({
    //     where: {
    //         username: username,
    //         password: password,
    //     },
    // });
    const client = await clientPromise;
    const db = client.db("nosqli");
    const test = await db.collection("users").find({
        // username: username,
        password: password,
    }).toArray();
    const test2 = JSON.stringify(test)
    console.log(test2)
    // redirects only occur at server side
    // redirect('/')
    // return NextResponse.json({ username: username, password: password, email: email , payload: payload, res: test2});
    return NextResponse.json({ res: test2});
}


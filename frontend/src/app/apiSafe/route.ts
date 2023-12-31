import { prisma } from "../db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { useRouter } from "next/router";

const URL = process.env.DETA_URL || "https://nosqlidetector-1-t9082585.deta.app/api";

export async function POST(req: Request) {
    const data = await req.formData();
    
    // const payload = JSON.stringify({ username: username, password: password});
    try {
        const username :string = data.get("username")?.toString() || "";
        const password :string = data.get("password")?.toString() || "";
        const email = data.get("email")?.toString() || "";
        const payload = JSON.stringify({
            username: username,
            password: password,
        });
        const body = JSON.stringify({ payload: payload.trim()});
        console.log(`${URL}/test`);
        const res_data = await fetch(`${URL}/test`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        const res = await res_data.json()
        // const res_text = await res_data.text();
        // const res = JSON.parse(res_text);
        if (res?.result.label === "Malicious") {
            console.log("Malicious request detected");
            return NextResponse.json(res);
        } 
        if (res?.result.label === "Benign") {
            console.log("Safe request");
            // console.log(username, password, email);
            const user = await prisma.users.findMany({
                where: {
                    username: username,
                    password: password,
                }
            })
            console.log(user);
            res.user = user[0]?.username;
            return NextResponse.json(res);
        }
            console.log("Invalid Response");
            return NextResponse.json(res);
    } catch(err) {
        console.log(err);
        let res = {
            error: err
        }
        return NextResponse.json(res);
    }
    // redirects only occur at server side
    // redirect('/')
}


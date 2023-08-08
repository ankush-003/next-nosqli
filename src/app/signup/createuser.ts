interface data {
    username: string;
    email: string;
    password: string;
}
"use server";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export default async function createUser({username, email, password}: data) {
//   const username = data.get("username")?.toString();
//   const email = data.get("email")?.toString();
//   const password = data.get("password")?.toString();
  try {
    const user = await prisma.users.create({
      data: {
        // ! means that we are sure that the value is not null
        username: username!,
        email: email!,
        password: password!,
      },
    });
    console.log(user);
      return {message: "Signup Successful", user: user}
    // redirect("/");
  } catch (e) {
    console.log(e);
    return { message: "Signup Failed", error: e };
    // redirect("/signup/fail");
  }
}

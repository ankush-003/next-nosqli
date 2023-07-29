import Navbar from "@/components/Navbar"
import LoginForm from "@/components/LoginForm"
import { prisma } from "../db"
export default function Unsafe() {
    return (
        <div>
            <Navbar/>
            <LoginForm safe={false}/>
        </div>
    )
}
import Navbar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";
import { prisma } from "../db";
export default function Safe() {
  return (
    <div>
      <Navbar />
      <LoginForm safe={true} />
    </div>
  );
}

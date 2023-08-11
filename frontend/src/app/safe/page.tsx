import Navbar from "@/components/Navbar";
import LoginFormSafe from "@/components/LoginFormSafe";
import { prisma } from "../db";
export default function Safe() {
  return (
    <div>
      <Navbar />
      <LoginFormSafe/>
    </div>
  );
}

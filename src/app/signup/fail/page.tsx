import Navbar from "@/components/Navbar"
export default function SignupFail() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-4xl font-mono">Signup Failed</h1>
                <h1 className="text-2xl font-mono">Please try again</h1>
            </div>
        </>
    )
}
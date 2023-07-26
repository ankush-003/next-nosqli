import Link from 'next/link'
import { BiInjection, BiBlock, BiHomeAlt2 } from 'react-icons/bi'
import { CgDanger } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'
import { PiSignInDuotone } from 'react-icons/pi'
export default function Navbar() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between text-slate-100">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                               <Link href="/">
                                <div className='flex gap-1 items-center'>
                                    <BiInjection className="text-2xl text-white" />
                                <h1 className="text-2xl font-mono">NoSQLi</h1>
                                </div>
                               </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                
                                    <Link href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                        <div className="flex gap-1 items-center">
                                            <BiHomeAlt2 clasName="text-2xl text-white hidden md:block" />
                                            <h1>Home</h1>
                                        </div>
                                    </Link>
                                    <Link href="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                        <div className='flex gap-1 items-center'>
                                            <PiSignInDuotone className="text-xl hidden md:block" />  
                                            <h1>Sign Up</h1>
                                        </div>
                                    </Link>
                                    <Link href="/unsafe" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                        <div className='flex gap-1 items-center'>
                                            <CgDanger className="text-xl text-red-500 hidden md:block" />  
                                            <h1>Unsafe</h1>
                                        </div>
                                    </Link>
                                    <Link href="/safe" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                        <div className='flex gap-1 items-center'>
                                            <BiBlock className="text-xl text-green-500 hidden md:block" />
                                            <h1>Safe</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative ml-3">
                                <div>
                                <Link href="https://github.com/ankush-003/NoSQLi-Detector" className="text-gray-300 hover:text-white rounded-md px-3 py-2font-medium">
                                        <div className='flex gap-1 items-center'>
                                            <AiFillGithub className="text-2xl text-white hidden md:block" />
                                            <h1>Github</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
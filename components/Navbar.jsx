'use client' 
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {ReactChild, useState} from "react";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [isDropOpen, setDropOpen] = useState(false);
    const [userData, setUserData] = useState([]);

    const toggleDropdown = () => {
        setDropOpen(!isDropOpen);
    };
    const {data: session} = useSession();
    const router = useRouter();

    const getUserData = async (email) => { // Add async keyword here
        try {
            const response = await fetch(`/api/user/userData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {email: email}
                )
            });

            if (response.status === 200) {
                try {
                    const user = await response.json();
                    setUserData(user)
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
        }

    };

    if (session && !userData.email) {
        getUserData(session ?. user ?. email);
    }

    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-none py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={
                                    () => setOpen(!open)
                            }>
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>

                        <nav className="hidden md:flex space-x-10">
                            <div className="flex space-x-10">
                                <div className="relative flex gap-5 items-center ">
                                    {
                                    session ?. user ? (
                                        <>
                                            <Link href="/Home" className="whitespace-nowrap text-black font-medium text-gray-500 hover:text-gray">Home</Link>
                                            <Link href="/Search" className="whitespace-nowrap text-black font-medium text-gray-500 hover:text-gray">Search</Link>
                                            <Link href="/Builder" className="whitespace-nowrap text-black font-medium text-gray-500 hover:text-gray">Website Builder</Link>
                                            <span className="whitespace-nowrap text-black font-medium text-gray-500 hover:text-gray">
                                                <button onClick={toggleDropdown}
                                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                                    <span className="flex gap-10 items-center">
                                                        <img className="shadow"
                                                            style={
                                                                {
                                                                    width: "40px",
                                                                    height: "40px",
                                                                    borderRadius: "100px"
                                                                }
                                                            }
                                                            src={userData.img ? userData.img : "https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif"}/>
                                                        <h1>{
                                                            userData.name
                                                        }</h1>

                                                    </span>
                                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z" clipRule="evenodd"/>
                                                    </svg>
                                                </button>
                                                {
                                                isDropOpen && (
                                                    <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg">
                                                        <button onClick={signOut}
                                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                                                            Sign Out
                                                        </button>
                                                    </div>
                                                )
                                            } </span>
                                        </>
                                    ) : null
                                } </div>
                            </div>
                        </nav>

                        {
                        !session ?. user ? <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="/Login" className="whitespace-nowrap text-black font-medium text-gray-500 hover:text-gray">
                                Sign In
                            </a>
                            <a href="/SignUp" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Sign Up
                            </a>
                            <a href="/Builder" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Website Builder
                            </a>
                        </div> : null
                    } </div>
                </div>


                <div className={
                    open ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
                }>
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                                </div>
                                <div className="-mr-2">
                                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={
                                            () => setOpen(!open)
                                    }>
                                        <span className="sr-only">Close menu</span>
                                        {/* Heroicon name: outline/x */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8"></nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            {
                            !session ?. user ? <div>
                                <a href="/Login" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    Sign In
                                </a>
                                <a href="/Builder" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    website builder
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    New User?
                                    <a href="/SignUp" className="text-indigo-600 hover:text-indigo-500">
                                        Sign Up
                                    </a>
                                </p>
                            </div> : <>

                                <div>
                                    <div className="w-full mb-6  flex items-center justify-between px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-zinc-900">
                                        <img className="shadow"
                                            style={
                                                {
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "100px"
                                                }
                                            }
                                            src={userData.img ? userData.img : "https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif"}/>
                                        <h1>{
                                            userData.name
                                        }</h1>
                                    </div>
                                    <Link href="/Home" className="w-full mb-6 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        Home
                                    </Link>
                                    <Link href="/Search" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        Search
                                    </Link>
                                    <Link href="/Builder" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        Website Builder
                                    </Link>
                                    
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        <button onClick={signOut}
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                                            Sign Out
                                        </button>

                                    </p>
                                </div>

                            </>
                        } </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default NavBar

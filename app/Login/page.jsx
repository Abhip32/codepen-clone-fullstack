"use client"
import {useRef, useState} from 'react';
import Head from 'next/head';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function EmployeeLoginForm() {
  if (typeof window !== "undefined") {

    const userName = useRef("");
    const pass = useRef("");
    const router=useRouter();
    const { data: session } = useSession();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if(session)
    {
        router.push("/Home")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
          email,
          password,
        };
      
        try {
          const response = await fetch(`/api/auth/SignIn/${email}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          if (response.status === 200) {
            try {
              const user = await response.json();
              signIn("credentials", {
                name: user.name,
                email: data.email,
                password: data.password,
                pic: user.pic.data
              });

            } catch (error) {
              console.log(error);
            }
          } else if (response.status === 401) {
            alert("Invalid Credentials");
          } else if (response.status === 404) {
            alert("User Not Found");
          } else {
            alert("Something went wrong");
          }
        } catch (error) {
          console.log(error);
        }
      };
      

    return (
        <div>
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <section className="bg-gray-50 dark:bg-gray-900 py-8">
                <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={(e)=>handleSubmit(e)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your email
                                    </label>
                                    <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" required
                                        value={email}
                                        onChange={
                                            (event) => setEmail(event.target.value)
                                        }/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:outline-none" required
                                        value={password}
                                        onChange={
                                            (event) => setPassword(event.target.value)
                                        }/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="w-6"></div>
                                    <div className="justify-end">
                                        <a href="/ResetPassword" className="text-sm font-medium text-primary-600 hover:underline text-indigo-600">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="submit" className="w-full h-12 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5">Sign in</button>                              
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
else{
  null;
}
}
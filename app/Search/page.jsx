'use client'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {
  if (typeof window !== "undefined") {
    const { data: session } = useSession();
    const [searchTerm,setSearchTerm] = useState("")
    const [fileData,setFileData] = useState([]);
    const router=useRouter();
    if(!session)
    {
      router.push("/")
    }

    
    const search =async ()=>{
            try {
              const response = await fetch(`/api/Files/search`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ searchTerm}),
              });
        
              if (response.status === 200) {
                try {
                  const files = await response.json();
                  setFileData(files.files)
                } catch (error) {
                  console.log(error);
                }
              }
            } catch (error) {
              console.log(error);
            }
            
          }
    
    
  return (
    <div style={{minHeight:"100vh"}}>
            <div className="">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Content area */}
          <div className="bg-white  shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-4">Search</h2>

              <div>
                <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Enter your search query"/>
                <button onClick={()=>search()} className='mt-5 w-min flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700' onclick={()=>search()} >
                    Search
                </button>
                </div>

            </div>
          </div>
        </div>
      </div>

  <div className="flex-grow">
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className='p-6 bg-white '>
    {!fileData.length >0  ? <>
      <h2 className="text-2xl font-semibold mb-4 items-center justify-center">Search for other's work</h2>
    
    </>:<>
    <h2 className="text-2xl font-semibold mb-4">Your Results</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
    {fileData.map((file)=>
    {
      return    <div className="border bg-zinc border-gray-200 rounded-lg shadow-md p-4">
      <div className='overflow-hidden'>
        <iframe  className="preview h-70 border-2 w-full overflow-hidden" title="HTML Preview" srcDoc={`
          <html>
            <body>${file.html}</body>
            <style>${file.css}</style>
          </html>
        `} scrolling="no" />
      </div>
      <h1 className="text-xl text-zinc font-semibold mb-2 m-3">{file.name}</h1>
      <button onClick={()=> router.push('/Editor/Search/'+file._id)} className="w-full m-2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    View
                                </button>
    </div>
    
    }

    )}
</div>
    </>}
</div>
</div>
    </div>
  
  
  
  </div>



  )
}
else{
  null
}
}

export default page
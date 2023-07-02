'use client'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {
  if (typeof window !== "undefined") {
    const { data: session } = useSession();
    const [userData,setUserData] = useState([]);
    const [fileData,setFileData] = useState([]);
    const router=useRouter();
    if(!session)
    {
      router.push("/")
    }
      const getUserData = async (email) => { // Add async keyword here
        try {
          const response = await fetch(`/api/user/userData`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email}),
          });
    
          if (response.status === 200) {
            try {
              const user = await response.json();
              setUserData(user)
              console.log(userData);
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
        
      };

      const fileDelete = async (id) => { // Add async keyword here
        try {
          const response = await fetch(`/api/Files/delete`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id}),
          });
    
          if (response.status === 200) {
            try {
              alert("File deleted successfully")
              getFileData(session.user.email);
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
        
      };

      const getFileData = async (email) => { // Add async keyword here
        try {
          const response = await fetch(`/api/user/fileData`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email}),
          });
    
          if (response.status === 200) {
            try {
              const files = await response.json();
              setFileData(files.files)
              console.log(fileData);
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
        
      };

      if(session && (!userData.email))
      {
        getUserData(session.user.email); 
        getFileData(session.user.email);
      }

    
  return (
    <div style={{minHeight:"100vh"}}>
            <div className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Content area */}
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-4">Welcome, {userData.name}</h2>
              <button className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700' onClick={()=>router.push("/Editor")}>Create a new page </button>
            </div>
          </div>
        </div>
      </div>

  <div className="flex-grow">
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className='p-6 bg-white '>
  <h2 className="text-2xl font-semibold mb-4">Your Works</h2>
  {fileData.length ==0 && <h3>No Work Done start a new one</h3>}
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
      <button onClick={()=> router.push('/Editor/'+file._id)} className="w-full m-2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    Edit
                                </button>

        <button onClick={()=> fileDelete(file._id)} className="w-full m-2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                                    Delete
        </button>
    </div>
    
    }

    )}
</div>
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
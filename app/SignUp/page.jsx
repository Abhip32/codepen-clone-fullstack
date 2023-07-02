'use client'
import {React,useState} from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
  if (typeof window !== "undefined") {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [name,setName] = useState('');
    const [img, setImg] = useState([]);
    const router = useRouter();

    const chgImg =(event)=>{

        // Get the selected file
        const file = event.target.files[0];
        
        // Create a new FileReader object
        const reader = new FileReader();
        
        // Define the onload event handler
        reader.onload = function(e) {
          // Get the image buffer
          const imageBuffer = e.target.result;
          const uint8Array = new Uint8Array(imageBuffer);
    
          // Convert the Uint8Array to a regular array
          const dataArray = Array.from(uint8Array);
          setImg(dataArray)
        };
         reader.readAsArrayBuffer(file);
        
        }
  
        const handleSubmit = async (event) => {
            event.preventDefault();
            console.log(img);
          
            try {
              const response = await fetch('/api/auth/Signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, confirmPassword, img }),
              });
          
              if (response.status === 409) {
                const data = await response.json();
                setError(data.message);
              } else if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
              } else {
                // Signup successful
                router.push("/");
                setError('');
              }
            } catch (error) {
              setError(error.message);
            }
          };
          
  
  return (
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form class="space-y-4 md:space-y-6"  onSubmit={(e)=>{handleSubmit(e)}} enctype="multipart/form-data">
                    <div>
                      <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required="" onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Pic</label>
                     <input type="file" accept='image/*' name="image" onChange={(e)=>{chgImg(e)}}/>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}

        <button
          className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
         
        >
          Create an account
        </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/Login" class="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
else{
  null
}
}

export default page
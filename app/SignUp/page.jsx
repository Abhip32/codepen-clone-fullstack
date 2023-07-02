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
    const [loading, setLoading] = useState(false);
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
                setLoading(false);
              } else if (!response.ok) {
                const errorData = await response.json();
                setLoading(false);
                throw new Error(errorData.error);
              } else {
                // Signup successful
                alert("Account Created Successfully")
                router.push("/");
                setError('');
                setLoading(false);
              }
            } catch (error) {
              setError(error.message);
            }
          };
          
  
  return (
   !loading ? <div>
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
    </div>:        <div class="flex items-center justify-center min-h-screen">
        <div role="status flex items-center justify-center">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div></div>
  )
}
else{
  null
}
}

export default page
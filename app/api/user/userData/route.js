import { compare } from "bcryptjs";
import database from "../../Database/route";
import users from "@/models/userModel";

export async function POST(request) {
  const {email}=await request.json();
  try {
    const user = await users.findOne({ email: email });
    if(user){
        
        return new Response(JSON.stringify({ name:user.name,email:user.email,img:`data:image/jpeg;base64,${Buffer.from(user.img).toString('base64')}`}), { status: 200 });
    }
    else {
      return new Response(JSON.stringify({ message: "User Not Found" }), { status: 404 });
    }

  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

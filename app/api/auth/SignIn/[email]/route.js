import { compare } from "bcryptjs";
import database from "../../../Database/route";
import users from "@/models/userModel";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const user = await users.findOne({ email: email });
    if (!user) {
      return new Response(JSON.stringify({ message: "User Not Found" }), { status: 404 });
    }

    const passwordMatch = await compare(password, user.password);
    if (passwordMatch) {
      return new Response(JSON.stringify({ message: "User Verified",name:user.name, pic:user.img }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: "Invalid Password" }), { status: 401 });
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

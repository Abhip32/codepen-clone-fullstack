import database from "../../Database/route";
import users from "@/models/userModel";
import bcrypt from "bcryptjs";

export async function POST(Request) {
  try {
    const { name, email, password, img } = await Request.json();
    const data = await users.findOne({ email: email });
    if (data) {
      return new Response(JSON.stringify({ message: "Email Already Exists" }), { status: 409 });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const userData = new users({ name: name, img: img, email: email, password: hashedPassword });
      userData.save();
      return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
    }
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

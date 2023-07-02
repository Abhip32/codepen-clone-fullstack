import { compare } from "bcryptjs";
import database from "../../Database/route";
import files from "@/models/fileModel";

export async function POST(request) {
  const {email}=await request.json();
  try {
    const fileData = await files.find({ email: email });

        
        return new Response(JSON.stringify({files:fileData}, { status: 200 }));

  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

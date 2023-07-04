import database from "../../Database/route";
import files from "@/models/fileModel";

export async function POST(request) {
  try {
    const { searchTerm,email } = await request.json();
    console.log(email)
    const regex = new RegExp(searchTerm, "i"); // Case-insensitive search Term regex
    const fileData = await files.find({ name: regex,email:{$ne :email} });
    return new Response(JSON.stringify({ files: fileData }), { status: 200 });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

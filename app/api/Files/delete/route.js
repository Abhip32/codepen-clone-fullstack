import database from "../../Database/route";
import files from "@/models/fileModel";

export async function POST(request) {
  try {
    const { id } = await request.json();
    const fileData = await files.deleteOne({ _id: id });
    return new Response (JSON.stringify({message:"Deleted Successfully"}), { status: 200 }); 
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

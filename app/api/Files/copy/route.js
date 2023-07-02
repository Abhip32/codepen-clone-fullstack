import database from "../../Database/route";
import files from "@/models/fileModel";

export async function POST(request) {
  try {
    console.log("cpo")
    const { email,id, fileName, html, css, js } = await request.json();
    const file=new files({ name: fileName+"copy"+id, email: email, html: html, css: css, js: js });
    file.save()
    return new Response (JSON.stringify({message:'File saved successfully!'}), { status: 200 });
      
    

  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

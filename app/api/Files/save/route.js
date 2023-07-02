import database from "../../Database/route";
import files from "@/models/fileModel";

export async function POST(request) {
  try {
    const { email, fileName, html, css, js } = await request.json();

    const filed=await files.findOne({name:fileName,email:email})
      if(filed) {
        return new Response(JSON.stringify({ message: "File Already Exists" }), { status: 409 });
      }
      else if(html =='' && css == '' && js == '') {
        return new Response(JSON.stringify({ message: "File is empty" }), { status: 410 });
      }
        const fileData = new files({ name: fileName, email: email, html: html, css: css, js: js });
        fileData.save(); // Wait for the file data to be saved
        // Simulating a successful save
        return new Response (JSON.stringify({message:'File saved successfully!'}), { status: 200 });
      
    

  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

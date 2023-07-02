import database from "../../Database/route";
import files from "@/models/fileModel";

export async function POST(request) {
  try {
    const { id, fileName, html, css, js } = await request.json();
    const filed=await files.findOne({name:fileName,_id: { $ne: id } });
    if(filed) {
      return new Response(JSON.stringify({ message: "File Already Exists" }), { status: 409 });
    }
    else if(html =='' && css == '' && js == '') {
      return new Response(JSON.stringify({ message: "File is empty" }), { status: 410 });
    }

      files.updateOne({_id:id},{$set:{name:fileName, html:html, css:css, js:js}}).then((data)=>{
        console.log(data);
    });

    return new Response (JSON.stringify({message:'File Updated successfully!'}, { status: 200 }));
    


    // Simulating a successful save

  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

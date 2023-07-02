'use client'
import React, { useState, useEffect } from 'react';
import Editor from '@/components/Editor';
import useLocalStorage from '@/hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');
  const [fileName, setFileName] = useState('untitled');
  const { data: session } = useSession();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const saveFile = async (email) => {
    const fileData = {
      email,
      fileName,
      html,
      css,
      js,
    };

    try {
      const response = await fetch('/api/Files/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fileData),
      });

      if (response.status === 200) {
        alert('File saved successfully')
      } 
      else if(response.status === 409) {
        console.log(response.json());
        alert('File name already exists')
      }
      else if(response.status === 410) {
        console.log(response.json());
        alert('File is empty')
      }
      else {
        console.log('Error saving the file.');
      }
    } catch (error) {
      console.error('Error saving the file:', error);
    }
  };

  return (
    <>
    {session?.user?.name ? <>
      <div className='header'>
        <div className='flex justify-between items-center border-none py-6 md:justify-start md:space-x-10 details'>
          <input type="text" value={fileName} className='proj-name' onChange={(e)=>{setFileName(e.target.value)}}></input>
          <button className="w-min flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={()=>saveFile(session.user.email)}>Save</button> {/* Added save button */}
          
        </div>
        
       
      </div>
      <div className='top-pane'>
        <Editor 
          language="xml" 
          displayName="HTML" 
          value={html} 
          onChange={setHtml} 
        />
        <Editor 
          language="css" 
          displayName="CSS" 
          value={css} 
          onChange={setCss}
        />
        <Editor 
          language="javascript" 
          displayName="JS" 
          value={js} 
          onChange={setJs} 
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder="0"
          width="100%"
          height="100%"
          />
      </div>
    </>:<> Not Logged IN
    <button onClick={()=>{signIn()}}>Sign In</button></>}
    </>
  )
}

export default App;

"use client"
import React, { useState, useEffect } from 'react';
import Editor from '@/components/Editor';
import useLocalStorage from '@/hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useParams } from 'next/navigation';

function App() {
  const router = useParams();
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileDataR, setFileDataR] = useState({});
  const [email, setEmail] = useState('');
  const { data: session } = useSession();

  useEffect(() => {
    getFile(router.id);

  }, []);

  useEffect(() => {
    setEmail(session?.user?.email);
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

  const getFile = async (id) => {
    const fileData = {
      id,
    };

    try {
      const response = await fetch('/api/Files/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fileData),
      });

      if (response.status === 200) {
        const result = await response.json();
        setFileDataR(result);

        if (result.file) {
          const { html, css, js, name,email } = result.file;
          setHtml(html || '');
          setCss(css || '');
          setJs(js || '');
          setFileName(name || '');
        }
      } else {
        console.log('Error retrieving the file.');
      }
    } catch (error) {
      console.error('Error retrieving the file:', error);
    }
  };

  const copyFile = async (id) => {
    const fileData = {
      email,
      id,
      fileName,
      html,
      css,
      js,
    };

    try {
      const response = await fetch('/api/Files/copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fileData),
      });

      if (response.status === 200) {
        alert('File copied successfully');
      } else {
        console.log('Error updating the file.');
      }
    } catch (error) {
      console.error('Error updating the file:', error);
    }
  };

  return (
    <>
      {session?.user?.name ? (
        <>
          <div className='header'>
            <div className='flex justify-between items-center border-none py-6 md:justify-start md:space-x-10 details'>
              <div>
                <input
                  type='text'
                  value={fileName}
                  className='proj-name'
                ></input>
              </div>
              <div>
                <button
                  className='w-max flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                  onClick={() => copyFile(router.id)}
                >
                  Make a copy 
                </button>

                
              </div>
            </div>
          </div>
          <div className='top-pane'>
            <Editor
              language='xml'
              displayName='HTML'
              value={html}
              onChange={setHtml}
            />
            <Editor
              language='css'
              displayName='CSS'
              value={css}
              onChange={setCss}
            />
            <Editor
              language='javascript'
              displayName='JS'
              value={js}
              onChange={setJs}
            />
          </div>
          <div className='pane'>
            <iframe
              srcDoc={srcDoc}
              title='output'
              sandbox='allow-scripts'
              frameBorder='0'
              width='100%'
              height='100%'
            />
          </div>
        </>
      ) : (
        <>
          Not Logged In
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}
    </>
  );
}

export default App;

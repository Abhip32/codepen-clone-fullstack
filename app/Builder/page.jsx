'use client'
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-plugin-toolbox/dist/grapesjs-plugin-toolbox.min.css';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapick/dist/grapick.min.css';
import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import gjsNewsBlocks from 'grapesjs-preset-newsletter';
import gjsForms from 'grapesjs-plugin-forms'
import gjsNavbar from 'grapesjs-navbar'
import gjsCKEditor from 'grapesjs-plugin-ckeditor'
import gjsImageEditor from 'grapesjs-tui-image-editor'
import gjsCountdown from 'grapesjs-component-countdown'
import gjsGradient from 'grapesjs-style-gradient'
import gjsFilter from 'grapesjs-style-filter'
import gjsbg from 'grapesjs-style-bg'
import gjsflex from 'grapesjs-blocks-flexbox'
import gjsTabs from 'grapesjs-tabs'
import gjsEditor from 'grapesjs-custom-code'
import { myPlugin } from '@/hooks/bootstrapBlocks';

const GrapeJSComponent = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: editorRef.current,
      plugins: [myPlugin,gjsEditor,gjsForms,gjsCKEditor,gjsImageEditor,gjsCountdown,gjsGradient,gjsFilter,gjsbg,gjsflex,gjsTabs,gjsBasicBlocks],
      pluginsOpts: {
        myPlugin:{ },
        gjsTabs:{ category: 'Basic',}
        
      },
      canvas: {
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
        ],
        scripts: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
        ]
      }
    });

    editor.StyleManager.addProperty('extra', { extend: 'filter' });
    editor.StyleManager.addProperty('extra', { extend: 'filter', property: 'backdrop-filter' });
    

  


    // Handle component unmount
    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={editorRef} />;
};

export default GrapeJSComponent;

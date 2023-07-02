import React, { useState } from 'react';
import { Editor as ControlledEditor } from '@monaco-editor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/Editor.css';

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  function handleChange(value) {
    onChange(value);
  }


  return (
    <div className={`editor-container${open ? '' : 'collapsed'}`}>
      <div className='editor-name'>
        {displayName}
        <button
          type='button'
          className='expand-collapse-btn'
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        height="40vh"
        value={value}
        onChange={handleChange}
        language={language}
        className='editor-wrapper'
        theme='vs-dark'
      
      />
    </div>
  );
}

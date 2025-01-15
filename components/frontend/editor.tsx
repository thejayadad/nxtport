'use client';
import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; // Import the header tool
import List from '@editorjs/list'; // Import the list tool

const Editor = () => {
  const editorInstance = useRef<EditorJS | null>(null);

  useEffect(() => {
    // Initialize Editor.js
    editorInstance.current = new EditorJS({
      holder: 'editorjs', // ID of the element where Editor.js is initialized
      autofocus: true,
      tools: {
        header: {
          class: Header, 
          inlineToolbar: ['link'],
          config: {
            placeholder: 'Enter a header',
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
      },
      placeholder: 'Start typing your content...',
      onChange: async () => {
        if (editorInstance.current) {
          const content = await editorInstance.current.save();
          console.log('Content:', content); // Outputs the current JSON structure
        }
      },
    });

    return () => {
      // Cleanup Editor.js instance on component unmount
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  return <div id="editorjs" className="border border-gray-300 p-4 rounded-md"></div>;
};

export default Editor;

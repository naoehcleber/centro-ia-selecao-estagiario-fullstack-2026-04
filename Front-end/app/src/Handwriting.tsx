import React from "react";

import { Link } from "react-router-dom";

import { Routes } from "react-router-dom";

import ImageUploader from "./components/FileLoader";


function Handrwriting() {
    
    return (
        <>
        <div>
        <ImageUploader onUpload={uploadToServer}/>
        {loading && <p>Processing image and translating...</p>}
      </div>
      <div>

        {result && (
        <div style={{ marginTop: '30px', borderTop: '1px solid #ccc' }}>
          <h4>Original Text:</h4>
          {/* Use result.text to match your Python return */}
          <p style={{ background: '#f4f4f4', padding: '10px' }}>
            {result.text}
          </p>
          
          <h4>Translated ({result.target_language}):</h4>
          <p style={{ background: '#e0f7fa', padding: '10px', fontWeight: 'bold' }}>
            {result.translated_text}
          </p>
        </div>
      )}
      </div>
      </>
    );
}

export default Handrwriting;
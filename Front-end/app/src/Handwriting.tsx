import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Routes } from "react-router-dom";

import ImageUploader from "./components/FileLoader";

function Handrwriting() {

    interface TranscriptionResult {
    filename: string;
    text: string;           // Match your FastAPI key: "text"  
  }

    const [result, setResult] = useState<TranscriptionResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
      
    const uploadToServer = async (file: File) => {
        setLoading(true); // Ative o loading!
        const formData = new FormData();
        formData.append('file', file);
        
        try {
          const response = await fetch(`/api/uploadHandwriting`, {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            const data = await response.json();
            setResult(data);
          }
        } catch (error) {
          console.error("Upload failed:", error);
        } finally {
          setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
          <h2>Transcrição de Caligrafia (IA)</h2>
          <ImageUploader onUpload={uploadToServer}/>
          
          {loading && <p>A IA está lendo a imagem... Por favor, aguarde.</p>}

          {result && (
            <div style={{ marginTop: '30px', borderTop: '1px solid #ccc' }}>
              <h4>Texto Extraído:</h4>
              <p style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', whiteSpace: 'pre-wrap' }}>
                {result.text}
              </p>
            </div>
          )}
        </div>
    );
}
export default Handrwriting;
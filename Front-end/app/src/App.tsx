import {  useState, useRef } from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import ImageUploader from './components/FileLoader.tsx'
import LanguageSelector from './components/LanguageSelector.tsx';
import './App.css'
import About from './About.tsx';

function App() {

  interface TranslationResult {
    filename: string;
    text: string;           // Match your FastAPI key: "text"
    translated_text: string;
    target_language: string;
  }

  const [targetLang, setTargetLang] = useState<string>('pt'); // Default to Portuguese
  const [result, setResult] = useState<TranslationResult>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const uploadToServer = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try{
      const response = await fetch(`/api/upload?target_lang=${targetLang}`, {
        method: 'POST',
        body: formData,
      });

      if(response.ok){
        const data = await response.json();
        console.log("Success:", data);
        setResult(data)
      }
    } catch(error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>

      <h1>Tradutor de texto de imagens</h1>
      <div>
        
        <Link to={'/about'}>Sobre o Projeto</Link>
      </div>
      <div>
        <ImageUploader onUpload={uploadToServer}/>
        <LanguageSelector 
          selectedLanguage={targetLang} 
          onChange={setTargetLang} 
        />
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
    </div>
  )
}

export default App

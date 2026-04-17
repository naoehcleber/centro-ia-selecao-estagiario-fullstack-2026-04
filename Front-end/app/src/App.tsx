import {  useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import ImageUploader from './components/FileLoader.tsx'
import LanguageSelector from './components/LanguageSelector.tsx';
import './App.css'

function App() {


  const [targetLang, setTargetLang] = useState('pt'); // Default to Portuguese
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  
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
      }
    } catch(error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <h3> Teste</h3>
      <h1>Tradutor de texto de imagens</h1>
      <div>
      <Link to="/about">Sobre o Projeto</Link>
      <Link to="/about"></Link>
      </div>
      <div>
        <ImageUploader onUpload={uploadToServer}/>
        <LanguageSelector 
          selectedLanguage={targetLang} 
          onChange={setTargetLang} 
        />

      </div>
    </div>
  )
}

export default App

import { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import ImageUploader from './components/FileLoader.tsx'

import './App.css'

function App() {
  
  const uploadToServer = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div>
      <h1>Tradutor de texto de imagens</h1>
      <div>
      <Link to="/about">Sobre o Projeto</Link>
      <Link to="/about"></Link>
      </div>
      <div>
        <ImageUploader onUpload={uploadToServer}/>


      </div>
    </div>
  )
}

export default App

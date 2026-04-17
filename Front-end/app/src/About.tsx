import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
function About(){
    return (
        <div style={style.container}>
            

            <h1 style={style.header}>Sobre o Projeto</h1>

            <h3 style={style.title}>Problema escolhido</h3>
                <p>O problema a ser solucionado utilizando
                    inteligência artificial é o de reconhecimento
                    de texto em fotos, principalmente receitas médicas
                    escritas à mão.
                </p>
            <h3 style={style.title}>Proposta da solução</h3>
                <p>
                    Dado o problema escolhido, utilizando modelos
                    de visão computacional de OCR (Reconhecimento Óptico
                    de Caracteres) a aplicação escaneia a foto que contém o texto
                    e oferece uma transcrição do Texto bem como a possibilidade de
                    traduzi-lo se for em lingua estrangeira.
                </p>
            <h3 style={style.title}>Arquitetura Implementada</h3>
                <p>
                    Para este projeto foi utilziada a Arquitetura
                    Monorepósitorio, que conta com o Front-End e 
                    o Back-End compartilhando o mesmo repositório.
                    Isso foi feito para facilitar o uso de containers
                    como docker-compose.
                </p>
            <h3 style={style.title}>Como a IA foi utilizada</h3>
                <p>
                    A IA foi usada no modelo de visão
                    computacional de OCR visando o reconhecimento de
                    texto manuscrita.
                </p>
            <Link to="/">Voltar para o Tradutor</Link>
        </div>
    );
};

const style = {
  container: {
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '40px 20px',
    color: '#212529',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#0d6efd', // Azul Bootstrap
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#6c757d',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '25px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    border: '1px solid #dee2e6',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#343a40',
  },
  text: {
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: '40px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#0d6efd',
    color: '#fff',
    padding: '10px 25px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
};

export default About

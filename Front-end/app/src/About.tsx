import React from "react";
import { Link } from "react-router-dom";

function About(){
    return (
        <div>
            <h1>Sobre o Projeto</h1>

            <h3>Problema escolhido</h3>
                <p>O problema a ser solucionado utilizando
                    inteligência artificial é o de reconhecimento
                    de texto em fotos, principalmente receitas médicas
                    escritas à mão.
                </p>
            <h3>Proposta da solução</h3>
                <p>
                    Dado o problema escolhido, utilizando modelos
                    de visão computacional de OCR (Reconhecimento Óptico
                    de Caracteres) a aplicação escaneia a foto que contém o texto
                    e oferece uma transcrição do Texto bem como a possibilidade de
                    traduzi-lo se for em lingua estrangeira.
                </p>
            <h3>Arquitetura Implementada</h3>
                <p>
                    Para este projeto foi utilziada a Arquitetura
                    Monorepósitorio, que conta com o Front-End e 
                    o Back-End compartilhando o mesmo repositório.
                    Isso foi feito para facilitar o uso de containers
                    como docker-compose.
                </p>
            <h3>Como a IA foi utilizada</h3>
                <p>
                    A IA foi usada no modelo de visão
                    computacional de OCR visando o reconhecimento de
                    texto manuscrita.
                </p>
        </div>
    );
};

export default About
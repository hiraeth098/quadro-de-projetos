import React, { useState } from "react";
import Lista from "./Lista";
import './Quadro.css';

const dadosDoQuadro = [
    {
        id: 1,
        titulo: "Tarefas Pendentes",
        cartoes: [
            { id: 'card-1', conteudo: 'Analizar dados'},
            { id: 'card-2', conteudo: 'Fazer algo'},
        ],
    },
    {
        id: 2,
        titulo: "Em Andamento",
        cartoes: [
            { id: 'card-3', conteudo: 'Terminar de fazer algo'},
            { id: 'card-4', conteudo: 'Fazer outra coisa'},
        ],
    },
    {
        id: 3,
        titulo: "Concluídas",
        cartoes: [
            { id: 'card-5', conteudo: 'Parabéns!'},
        ],
    },
];


function Quadro() {

    const [listas, setListas] = useState(dadosDoQuadro);

    return (
        <main className="quadro">
            {listas.map(lista => (
                <Lista
                    key={lista.id}
                    titulo={lista.titulo}
                    cartoes={lista.cartoes}
                />
            ))}            
        </main>
    );
}
export default Quadro;
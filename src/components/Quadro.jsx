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

  
  const handleAdicionarCartao = (listaId, conteudoCartao) => {
    const novoCartao = {
      id: `card-${Date.now()}`, 
      conteudo: conteudoCartao,
    };

    
    const novasListas = listas.map(lista => {
      if (lista.id === listaId) {
        
        return {
          ...lista,
          cartoes: [...lista.cartoes, novoCartao],
        };
      }
      return lista; 
    });

    setListas(novasListas); 
  };

  return (
    <main className="quadro">
      {listas.map(lista => (
        <Lista
          key={lista.id}
          id={lista.id} 
          titulo={lista.titulo}
          cartoes={lista.cartoes}
          onAdicionarCartao={handleAdicionarCartao} 
        />
      ))}
    </main>
  );
}
export default Quadro;
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

  // 1. A LÓGICA VIVE AQUI!
  const handleAdicionarCartao = (listaId, conteudoCartao) => {
    const novoCartao = {
      id: `card-${Date.now()}`, // ID único simples
      conteudo: conteudoCartao,
    };

    // Cria uma cópia nova do array de listas
    const novasListas = listas.map(lista => {
      if (lista.id === listaId) {
        // Se for a lista certa, adiciona o novo cartão
        return {
          ...lista,
          cartoes: [...lista.cartoes, novoCartao],
        };
      }
      return lista; // Se não, retorna a lista como estava
    });

    setListas(novasListas); // Atualiza o estado com o novo array
  };

  return (
    <main className="quadro">
      {listas.map(lista => (
        <Lista
          key={lista.id}
          id={lista.id} // 2. Passar o ID para a lista
          titulo={lista.titulo}
          cartoes={lista.cartoes}
          onAdicionarCartao={handleAdicionarCartao} // 3. Passar a função como prop
        />
      ))}
    </main>
  );
}
export default Quadro;
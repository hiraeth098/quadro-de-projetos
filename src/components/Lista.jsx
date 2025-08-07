import React from "react";
import Cartao from "./Cartao";
import './Lista.css';

function Lista({ titulo, cartoes }) {
    return (
        <div className="lista">
            <h2 className="lista-titulo">{titulo}</h2>
            <div className="lista-cartoes">
                {/* Usamos .map() para criar um componente <Cartao /> para cada item da lista */}
        {cartoes.map(cartao => (
          <Cartao key={cartao.id} conteudo={cartao.conteudo} />
        ))}
                
            </div>
        </div>
    );
}

export default Lista;


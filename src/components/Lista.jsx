import React, { useState } from 'react';
import Cartao from './Cartao';
import AdicionarCartaoForm from './AdicionarCartaoForm'; 
import './Lista.css';


function Lista({ id, titulo, cartoes, onAdicionarCartao }) { 
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);

  return (
    <div className="lista">
      <h2 className="lista-titulo">{titulo}</h2>
      <div className="lista-cartoes">
        {cartoes.map(cartao => (
          <Cartao key={cartao.id} conteudo={cartao.conteudo} />
        ))}
      </div>
      {mostrandoFormulario ? (
        <AdicionarCartaoForm
          listaId={id}
          onAdicionarCartao={onAdicionarCartao}
          onCancelar={() => setMostrandoFormulario(false)}
        />
      ) : (
        <button
          onClick={() => setMostrandoFormulario(true)}
          className="lista-btn-adicionar"
        >
          + Adicionar outro cartão
        </button>
      )}
    </div>
  );
}

export default Lista;

import React, { useState } from 'react';
import Cartao from './Cartao';
import AdicionarCartaoForm from './AdicionarCartaoForm'; 
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import './Lista.css';


function Lista({ id, titulo, cartoes, onAdicionarCartao }) { 
  const idsDosCartoes = cartoes.map(cartao => cartao.id);

  

  return (
    <div className="lista">
      <h2 className="lista-titulo">{titulo}</h2>
      <SortableContext items={idsDosCartoes} strategy={verticalListSortingStrategy}>
        <div className="lista-cartoes">
          {cartoes.map(cartao => (
            <Cartao key={cartao.id} conteudo={cartao.conteudo} />
          ))}
        </div>
      </SortableContext>
    </div>
    );
  }
export default Lista;

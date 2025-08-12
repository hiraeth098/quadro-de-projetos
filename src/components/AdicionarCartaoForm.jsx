import React, { useState } from 'react';
import './AdicionarCartaoForm.css';

function AdicionarCartaoForm ({ listaId, onAdicionarCartao, onCancelar }) {
    const [texto, setTexto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim()) {
            onAdicionarCartao(listaId, texto);
            setTexto('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className='adicionar-cartao-form'>
            <textarea
                className='adicionar-cartao-textarea'
                placeholder='Insira um título para o cartão'
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                autoFocus
            />
            <div className='adicionar-cartao-controles'>
                <button type='submuit' className='adicionar-cartao-btn-add'>Adicionar Cartão</button>
                <button type='button' onClick={onCancelar} className='adicionar-cartao-btn-cancel'>Cancelar</button>
            </div>
        </form>
    );    
}

export default AdicionarCartaoForm;


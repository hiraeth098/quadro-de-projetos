import react, { usestate } from 'react'
import './AdicionarCartaoForm.css';

function AdicionarCartaoForm ({ listaId, onAdicionarCartao, onCancelar }){
    const [texto, setTexto] = usestate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim()) {
            
        }
    } 
};
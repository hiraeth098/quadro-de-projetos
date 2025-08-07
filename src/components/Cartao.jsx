import React from "react";
import './Cartao.css'

function Cartao({ conteudo }) {
    return (
        <div className="cartao">
           { conteudo }
        </div>
    );
}

export default Cartao;

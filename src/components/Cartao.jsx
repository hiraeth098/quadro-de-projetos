import React from "react";
import './Cartao.css'
import { useSortable } from "@dnd-kit/sortable";

function Cartao({ id, conteudo }) {

    const {
        atributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...atributes} {...listeners} className="cartao">
           { conteudo }
        </div>
    );
}

export default Cartao;

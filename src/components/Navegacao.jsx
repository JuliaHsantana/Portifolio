import React from "react";
import Inicio from "./Inicio/Inicio.jsx";
import Sobre from "./Sobre/Sobre.jsx";
import Projetos from "./Projetos/Projects.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import * as S from './Style.jsx'

export default function Navegacao() {
    return (
        <>
            <header>
                <BrowserRouter>
                    <S.Navigation>
                        <S.List>
                            {/* (TO = para) um link para tal lugar (sobre, projetos e inicio */}
                            <li> <Link to="/"> Inicio </Link> </li>
                            <li> <Link to="/Sobre"> Sobre </Link> </li>
                            <li> <Link to="/Projetos"> Projetos </Link> </li>
                        </S.List>
                    </S.Navigation>

                    <Routes>
                        {/* PATH (caminho) : Configura os dois, link to = "/Sobre" path="Sobre" */}
                        {/* ELEMENT: Configura para qual componente quero ir, element={<Sobre />} */}
                        <Route path="/" element={<Inicio />} />
                        <Route path="/Sobre" element={<Sobre />} />
                        <Route path="/Projetos" element={<Projetos />} />

                    </Routes>

                </BrowserRouter>
            </header>
        </>
    )
}
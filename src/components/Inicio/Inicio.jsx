import React, { useState } from "react"
import FotoPessoal from './img/perfil2.jpg'
import Instagram from './icon/instagram.jpg'
import Linkedin from "./icon/linkedin.webp"
import Github from './icon/github.png'
import Lulu from './img/lulu.gif'

import * as S from './StyleInicio'

export default function Inicio() {

    const [apresentacao, setApresentacao] = useState([
        { link: "https://www.instagram.com/juh__helena/", logo: Instagram },
        { link: "https://www.linkedin.com/in/julia-h-99bb39137/", logo: Linkedin },
        { link: "https://github.com/JuliaHsantana", logo: Github }
    ])

    return (
        <S.Inicial>
            <S.Info>
                <S.Foto src={FotoPessoal} alt="" />
                <S.Apresentacao>
                    <h2>Olá, eu sou a Julia!</h2>
                    <p>Dê as boas-vindas ao meu portfólio! Sou apaixonada por tecnologia e uma programadora comprometida em desenvolver soluções criativas e impactantes. Ao longo do tempo, venho ampliando minha expertise em várias tecnologias e estou sempre sedenta por aprender mais. Sinta-se à vontade para explorar meus projetos e me contatar por meio das redes sociais mencionadas abaixo.
                    </p>
                
                    {apresentacao.map((redeSociais) => (
                        <a href={redeSociais.link}>
                            <S.Icones src={redeSociais.logo} alt="Minhas redes sociais" />
                        </a>
                    ))}
                </S.Apresentacao>
            </S.Info>
            <S.Gif src={Lulu} alt="GIF" />
        </S.Inicial>
    )
}

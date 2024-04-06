import React, { useState } from "react"
import VainaWeb from "./icons/vnw sem fundo 1.svg"
import Fatec from "./icons/fatec.png"
import Cisco from './icons/cisco.png'
import Bootcamp from'./icons/bootcamp.png'
import Lulu from "./icons/lulu-pix.gif"


import Html from "./icons/html.svg"
import JavaScript from "./icons/java-script.svg"
import Css from './icons/css.svg'
import Java from './icons/java.png'
import Git from './icons/git.svg'
import reactl from './icons/react.png'




import * as S from "./StyleSobre"


export default function Sobre() {

    const [estudos, setEstudos] = useState([
        { curso: "Analise e Desenvolvimento de Sistemas", imagem: Fatec},
        { curso: "Desenvolvimento Front-end + AWS", imagem: VainaWeb },
        { curso: "Cibersecurity Essentials", imagem: Cisco },
        { curso: "Decola Tech 2024", imagem: Bootcamp},
   
    ])

    const [tecnologias, setTecnologias] = useState([
        { nome: "HTML", imagem: Html },
        { nome: "CSS", imagem: Css },
        { nome: "JavaScript", imagem: JavaScript },
        { nome: "Java", imagem: Java},
        { nome: "React", imagem: reactl },
        { nome: "Github", imagem: Git },
        

    ]
    )

    return (
        <S.Sobre>
            <S.Estudos>
                <h1>ESTUDOS</h1>
                {estudos.map((estudos) => (
                    <div>
                        <h3>{estudos.curso}</h3>
                        <img src={estudos.imagem} alt="Cursos" />
                    </div>
                ))}
            </S.Estudos>

            <S.Habilidades>
                <h1>HABILIDADES</h1>
                {tecnologias.map((habilidades) => (
                    <div>
                        <h3>{habilidades.nome}</h3>
                        <img src={habilidades.imagem} alt="Tecnologias" />
                    </div>
                ))}
            </S.Habilidades>
            <S.Gif src={Lulu} alt="GIF" />

        </S.Sobre>
    )
}
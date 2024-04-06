import React from "react";
import * as S from "./ProjectsStyle";
import Cartoon from "./ImgProjetos/Cartoon.png"
import Decodificador from "./ImgProjetos/decodificador.png"
import Floricultura from"./ImgProjetos/floricultura.png"
import GeradorPixel from "./ImgProjetos/gerador-de-pixel-arte.png"
import GeradorSenha from "./ImgProjetos/gerador de senha.png"
import Patrocinadores from "./ImgProjetos/patrocinadores.png"
import ApiClima from "./ImgProjetos/image.png"
import CaraCoroa from "./ImgProjetos/cara-coroa.png"
import Lulu from './ImgProjetos/lulu-e-veigar.gif'

export default function Projects() {
    return (
        <S.ProjectsSection id="Projects">
            <h1>Projetos</h1>
            <S.ProjectsCardsGradeOne>
                    <S.ProjectsCardOne>
                        <h2>Cartoon</h2>
                        <img src={Cartoon}/>
                        <a href="https://github.com/JuliaHsantana/Cartoon" target="_blank">Código</a>
                    </S.ProjectsCardOne>
                    <S.ProjectsCardTwo>
                        <h2>Decodificador</h2>
                        <img src={Decodificador}/>
                        <a href="https://github.com/JuliaHsantana/Decodificador" target="_blank">Código</a>
                    </S.ProjectsCardTwo>
            </S.ProjectsCardsGradeOne>
            <S.ProjectsCardsGradeTwo>
                    <S.ProjectsCardThree>
                        <h2>Floricultura</h2>
                        <img src={Floricultura}/>
                        <a href="https://github.com/JuliaHsantana/Floricultura" target="_blank">Código</a>
                    </S.ProjectsCardThree>
                    <S.ProjectsCardFour>
                        <h2>Cara x Coroa</h2>
                        <img src={CaraCoroa}/>
                        <a href="https://github.com/JuliaHsantana/Cara-x-Coroa" target="_blank">Código</a>
                    </S.ProjectsCardFour>
            </S.ProjectsCardsGradeTwo>
            <S.ProjectsCardsGradeThree>
                    <S.ProjectsCardFive>
                        <h2>Gerador de Pixel Arte</h2>
                        <img src={GeradorPixel}/>
                        <a href="https://github.com/JuliaHsantana/Gerador-de-Pixel-Art" target="_blank">Código</a>
                    </S.ProjectsCardFive>
                    <S.ProjectsCardSix>
                        <h2>Gerador de Senhas</h2>
                        <img src={GeradorSenha}/>
                        <a href="https://github.com/JuliaHsantana/Gerador-de-Senha" target="_blank">Código</a>
                    </S.ProjectsCardSix>
            </S.ProjectsCardsGradeThree>
            <S.ProjectsCardsGradeFour>
                    <S.ProjectsCardSeven>
                        <h2>Patrocinadores</h2>
                        <img src={Patrocinadores}/>
                        <a href="https://github.com/JuliaHsantana/UseEffect" target="_blank">Código</a>
                    </S.ProjectsCardSeven>
                    <S.ProjectsCardEight>
                        <h2>Api de Clima</h2>
                        <img src={ApiClima}/>
                        <a href="https://github.com/JuliaHsantana/App-Clima" target="_blank">Código</a>
                    </S.ProjectsCardEight>
            </S.ProjectsCardsGradeFour>
            <S.Gif src={Lulu} alt="GIF" />
        </S.ProjectsSection>
    );
};
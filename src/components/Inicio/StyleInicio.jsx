import styled from "styled-components";

export const Inicial = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 80%;
    
`

export const Info = styled.section`
    width: 60vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #3a0057;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 30px;
`

export const Apresentacao = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: white;

    h2 {
        font-size: 1.5rem;
        font-family: "Quicksand", sans-serif;
        color: #a92d5b;
    }

    p {
        margin: 2rem;
        font-size: 1rem;
        font-family: "Quicksand", sans-serif;
    }

        @media (max-width: 768px) {
            align-items: center;
            h2,h1{
                font-size: 1,2rem;
            }
            p { 
                font-size: 1.9 rem;
            }
           
        }
        
    }
`

export const Icones = styled.img`
    width: 6vh;
`

export const Foto = styled.img`
    width: 20%;
    border-radius: 50%;
    margin: 2rem;
    
    @media (max-width: 768px) {
        display: none; 
    }
    
`

export const Gif = styled.img`
position: absolute;
bottom: 20px;
right: 20px;
width: 200px;
z-index: 999;

@media (max-width: 768px) {
    position: static;
    width: 100%; 
    margin-top: 2rem;
}


`
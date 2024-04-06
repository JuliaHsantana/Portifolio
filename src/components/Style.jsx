import styled from "styled-components";

export const Navigation = styled.nav`
    background-color: #3a0057;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 45px;
    width: 70%;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 90%; 
        border-radius: 25px; 
        padding: 10px; 
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 15vh;

    a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
        font-weight: 600;
    }

    a:hover {
        color: #a92d5b;
        font-weight: 600;
    }

    li {
        list-style: none;
    }

    @media (max-width: 768px) {
        flex-direction: row; 
        overflow-x: auto; 
        white-space: nowrap; 
    }
`;

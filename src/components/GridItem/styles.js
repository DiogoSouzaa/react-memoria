import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radious: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ? props.opacity : 1};
`;


/*
 Uma outra forma de escrever essa linha 
 ( opacity: ${props => props.opacity ? props.opacity : 1};)
 pode ser 
 ( opacity: ${props => props.opacity ?? : 1};)
  é como se disesse , se o props.opacity repetir, ou for ele mesmo é true...
  não precisando ter que repetir o mesmo item duas vezes e assim deixando o código mais limpo, mas é bom frizar que , caso seja de melhor compreensão utilizar a primeira forma assim o faça. 
 
 */
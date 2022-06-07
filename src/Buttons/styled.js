import styled, {css} from "styled-components";


export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        flex-direction: column;
}
`;

export const FlexButton = styled.button`
    max-width: 100px;
    margin: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    ${({ disabled }) => disabled === false && css`
    &:hover {
    color: rgb(158, 158, 158);
    }
    `}

`;


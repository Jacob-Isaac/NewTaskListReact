import styled from "styled-components";


export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        flex-direction: column;
}
`;

export const FlexButton = styled.div`
    max-width: 100px;
    margin: 10px;

    &:hover {
    color: rgb(158, 158, 158);
    cursor: pointer;
    }
`;


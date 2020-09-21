import styled from 'styled-components';
const lineWidth = 3;
export const dotSize = 21;

export const TimelineStyled = styled.ul`
    position: relative;
    z-index: 100;
    list-style-type: none;
    width: 70%;
    padding: 0;
    margin: 50px auto;

    &:after {
        content: '';
        width: ${lineWidth}px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${dotSize * 0.5 - lineWidth * 0.5}px;
        background: black;
    }
`;

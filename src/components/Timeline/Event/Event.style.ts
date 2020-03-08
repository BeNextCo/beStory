import styled from 'styled-components';
import {dotSize} from "../Timeline.style";


export const EventStyled = styled.li`
    margin-bottom: 30px;
    &:before {
        content: '';
        position: absolute;
        width: ${dotSize}px;
        height: ${dotSize}px;
        background-color: #000;
        border-radius: 50%;
        margin-right: 5px;
    }
`;

export const EventSection = styled.section`
    margin-left: 50px;
`;

export const Name = styled.h2`
    margin: 0 0 10px;
`;

export const Content = styled.p`
    margin: 0;
`;

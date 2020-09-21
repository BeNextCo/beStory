import styled, {keyframes} from "styled-components";
import { ReactComponent as RocketSvg} from "./img/rocket.svg";

export const Container = styled.div`
  position: fixed;
  bottom: 100px;
  left: calc(50% - 50px);
  width: 100px;
`;

export const Rocket = styled(RocketSvg)`
  position: relative;
  z-index: 10;
`;

interface ThrusterProps {
    readonly isActive: boolean;
}

export const Thruster = styled.div<ThrusterProps>`
    position: absolute;
    z-index: 5;
    top: calc(100% - 15px);
    left: calc(50% - 15px);
    width: 30px;
    height: 115px;
    background: linear-gradient(180deg, rgba(255,206,49,1) 35%, rgba(0,0,0,0) 100%);
    opacity: ${({isActive}) => isActive ? 1 : 0};
    transform-origin: top center;
    transform: scale(${({isActive}) => isActive ? 1 : 0});
    transition: opacity ease-out .4s, transform ease-out .2s;
`;
export enum Side {
    left = 'left',
    right = 'right',
}
interface RetroThrusterProps extends ThrusterProps {
    readonly side: Side;
}

export const RetroThruster = styled.div<RetroThrusterProps>`
    position: absolute;
    z-index: 5;
    top: 0;
    left: ${({side}) => side === Side.left ? 28 : 67}px;
    width: ${({isActive}) => isActive ? 5 : 0}px;
    height: ${({isActive}) => isActive ? 20 : 0}px;
    background: linear-gradient(180deg,rgba(255,255,255,.6) 35%,rgba(0,0,0,0) 100%);
    opacity: ${({isActive}) => isActive ? 1 : 0};
    transform: rotate(${({side}) => side === Side.left ? 145 : -145}deg);
    transition: opacity ease-out .4s, transform ease-out .2s;
`;

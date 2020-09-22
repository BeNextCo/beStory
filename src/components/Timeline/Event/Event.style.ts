import styled from 'styled-components';

interface WrapperProps {
    readonly index: number;
    readonly active: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  text-align: ${({index}) => index % 2 ? 'left' : 'right'};
  margin: 1000px 0;
  opacity: ${({active}) => active ? 1 : 0};
  transform: translateX(${({active, index}) => {
      const multiplicator = index % 2 ? -1 : 1;
      const translatex = active ? 0 : 650;
      return `${translatex * multiplicator}px`;
  }});
  transition: opacity ease-in-out .8s, transform ease-in-out .5s;
`;

export const Card = styled.div`
    display: inline-block;
    background: #fff;
    border-radius: 10px;
    z-index: 1;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
    padding: 15px;
    font-size: 12px;
    width: 400px;
    max-height: 200px;
    opacity: .9;
`;

export const Name = styled.h2`
    margin: 0 0 10px;
`;

export const Content = styled.p`
    margin: 0;
    max-height: 150px;
    overflow-y: auto;
`;

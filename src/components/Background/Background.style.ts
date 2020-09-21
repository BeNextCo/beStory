import styled from "styled-components";

export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${window.innerHeight}px;
  background: radial-gradient(circle, rgba(61,57,114,1) 0%, rgba(0,0,0,1) 100%);
  /* background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(61,57,114,1) 50%, rgba(0,0,0,1) 100%); */
`;
import styled from 'styled-components';

export const Title = styled('h1')`
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 5em;
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled('img').attrs({
  src: (p: any) => p.src,
})`
  max-width: 200px;
  max-height: 200px;
`;

export const Txt = styled('p')`
  width: 60%;
  font-size: 1.5em;
  text-align: center;
`;

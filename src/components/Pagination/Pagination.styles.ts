import styled, {css} from 'styled-components';

export const Wrapper = styled('div')`
  margin: 1em 0;
  border: 1px solid grey;
  border-radius: 5px;
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled('div')`
  background-color: grey;
  color: black;
  padding: 5px;
  cursor: pointer;
  border-radius: ${(props: any) => props.prev ? '5px 0px 0px 5px' : '0px 5px 5px 0px'};
  ${(props: any) => props.disabled && css`
    opacity: .5;
    cursor: default;
  `}
` as any;

export const Page = styled('div')`
  color: black;
  font-size: 1.25em;
`;

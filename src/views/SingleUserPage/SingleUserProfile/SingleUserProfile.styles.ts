import styled from 'styled-components';
import {style} from 'config/index';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  box-sizing:border-box;
  display: flex;
  flex-direction: ${(p: any) => p.flex || 'row'};
  padding: 16px;
  background-color: ${white};
  align-items: ${(p: any) => p.align || 'center'};
  justify-content: center;
  min-width: 500px;
  min-height: 500px;
` as any;

export const UserInfo = styled('div')`
  padding: 1em;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const UserAdditionalInfo = styled('div')`
  width: 60%;
  padding: 1em;
  display: flex;
`;

export const UserInfoTxt = styled('p')`
  color: ${grey};
  font-size: 1em;
  margin: .25em 0;
`;

export const Avatar = styled.img.attrs({
  src: (p: any) => p.src,
  alt: 'avatar',
})`
  max-width: 200px;
  max-height: 200px;
  margin: .5em 0;
`;

export const Title = styled('h1')`
  color: ${black};
  font-size: 1.25em;
  width: 100%;
  border-bottom: 1px solid ${black};
`;

import styled from 'styled-components';
import {style} from 'config/index';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  display: flex;
  width: 100%;
`;

export const UserInfo = styled('div')`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

export const UserAdditionalInfo = styled('div')`
  padding: 1em;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const UserInfoTxt = styled('p')`
  color: #282828;
  font-size: 1em;
  margin: .25em 0;
  font-weight: 600;
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
  width: 100%;
`;

export const SubTitle = styled('p')`
  font-size: 1.15em;
  font-weight: 600;
  color: grey;
  border-bottom: 1px solid #eaeaea;
  width: 100%;
  display: block;
`;

export const LabeledValue = styled('div')`
  width: 70%;
  display: flex;
  align-items: center;
`;

export const Label = styled('p')`
  width: 70%;
  color: grey;
  margin: 0;
`;

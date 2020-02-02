import styled from 'styled-components';

export const Spinner = styled('div')`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: ${(p: any) => p.width || 64}px;
    height: ${(p: any) => p.height || 64}px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${(p: any) => p.color || 'red'};
    border-color: ${(p: any) => p.color || 'red'} transparent ${(p: any) => p.color || 'red'} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
` as any;

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon } from './components/atoms';

const animationFirst = keyframes`
0 {
    transform: rotate(0);
}
25% {
    transform: rotate(90deg);
}
50% {
    transform: rotate(180deg);
}
75% {
    transform: rotate(270deg);
}
100% {
    transform: rotate(360deg);
}
`

const animationSecond = keyframes`
0 {
    transform: rotate(0);
}
33% {
    transform: rotate(-120deg);
}
66% {
    transform: rotate(-240deg);
}
100% {
    transform: rotate(-360deg);
}
`


export const IconStyledFirst = styled(Icon)`
    position: absolute;
    left: 20px;
    top: 10px;
    animation: ${animationFirst} 4.5s 0.5s;
`

export const IconStyledSecond = styled(Icon)`
    animation: ${animationSecond} 3s 0.5s;
`
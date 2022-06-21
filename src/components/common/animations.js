import { css, keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// export const puffInCenter = keyframes`
// 0% {
//   -webkit-transform: scale(2);
//   transform: scale(2);
//   -webkit-filter: blur(4px);
//   filter: blur(4px);
//   opacity: 0;
// }
// 100% {
//   -webkit-transform: scale(1);
//   transform: scale(1);
//   -webkit-filter: blur(0px);
//   filter: blur(0px);
//   opacity: 1;
// }`;

export const puffOutCenter = keyframes`
0% {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-filter: blur(0px);
  filter: blur(0px);
  opacity: 1;
}
100% {
  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-filter: blur(4px);
  filter: blur(4px);
  opacity: 0;
}`;

export const pulsateForward = keyframes`
0% {
  -webkit-transform: scale(1);
  transform: scale(1);
}
50% {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
100% {
  -webkit-transform: scale(1);
  transform: scale(1);
}`;

export const jelloHorz = keyframes`
0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
30% {
  -webkit-transform: scale3d(1.25, 0.75, 1);
  transform: scale3d(1.25, 0.75, 1);
}
40% {
  -webkit-transform: scale3d(0.75, 1.25, 1);
  transform: scale3d(0.75, 1.25, 1);
}
50% {
  -webkit-transform: scale3d(1.15, 0.85, 1);
  transform: scale3d(1.15, 0.85, 1);
}
65% {
  -webkit-transform: scale3d(0.95, 1.05, 1);
  transform: scale3d(0.95, 1.05, 1);
}
75% {
  -webkit-transform: scale3d(1.05, 0.95, 1);
  transform: scale3d(1.05, 0.95, 1);
}
100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
`;

export const slideInRightWithBlur = keyframes`
0% {
  -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
  transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  -webkit-filter: blur(40px);
  filter: blur(40px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0) scaleY(1) scaleX(1);
  transform: translateX(0) scaleY(1) scaleX(1);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-filter: blur(0);
  filter: blur(0);
  opacity: 1;
}
`;

export const slideOutRight = keyframes`
0% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
100% {
  -webkit-transform: translateX(1000px);
  transform: translateX(1000px);
  opacity: 0;
}
`;
export const entryAnimation = css`
  ${slideInRightWithBlur} 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
`;

export const exitAnimation = css`
  ${slideOutRight} 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

export const slideFwdTop = keyframes`
0% {
  -webkit-transform: translateZ(-1400px) translateY(-800px);
  transform: translateZ(-1400px) translateY(-800px);
  opacity: 0;
}
100% {
  -webkit-transform: translateZ(0) translateY(0);
  transform: translateZ(0) translateY(0);
  opacity: 1;
}
`;

export const slideInBottom = keyframes`
0% {
  -webkit-transform: translateY(1000px);
  transform: translateY(1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
`;

const trackingIn = keyframes`
0% {
  letter-spacing: -0.5em;
  opacity: 0;
}
40% {
  opacity: 0.6;
}
100% {
  opacity: 1;
}
`;

// const trackingOut = keyframes`
// 0% {
//   opacity: 1;
// }
// 50% {
//   opacity: 1;
// }
// 100% {
//   letter-spacing: -0.5em;
//   opacity: 0;
// }
// `;

export const trackingInAnimation = css`
  ${trackingIn} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both
`;
// export const trackingOutAnimation = css`${trackingOut} 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`;

const slideInForward = keyframes`
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const slideInForwardAmt = css`${slideInForward} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
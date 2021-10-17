import { createGlobalStyle } from "styled-components";
import FinalFantasy from './fonts/FinalFantasy-aa4m.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
      font-family: 'Final Fantasy';
      src: local('Final Fantasy'), url(${FinalFantasy}) format('ttf');
  }
`;

export default FontStyles;
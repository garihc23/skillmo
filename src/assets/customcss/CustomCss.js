import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Metropolis';
    src: url('../fonts/Metropolis-Regular.woff') format('woff');
    /* Add additional src declarations for other font weights or formats if necessary */
  }

  body {
    font-family: 'Metropolis', sans-serif;
  }
`;

export const newTag = {
  backgroundColor: '#fafafa',
  color: '#FF0000',
  borderRadius: '14px',
  padding: '3px',
  left: '5%',
};
export const subNewTag = {
  backgroundColor: '#fafafa',
  color: '#FF0000',
  borderRadius: '14px',
  padding: '3px',
};
export const certifiedTag = {
  left: '27%',
  color: '#00FF00',
  borderRadius: '14px',
  background: '#fafafa',
  padding: ' 3px',
};
export const subCertifiedTag = {
  left: '21%',
  color: '#00FF00',
  borderRadius: '14px',
  background: '#fafafa',
  padding: ' 3px',
};
export const topRatedTag = {
  borderRadius: '14px',
  background: '#fafafa',
  padding: ' 3px',
  color: '#FFA500',
  right: '10%',
};
export const subTopRatedTag = {
  borderRadius: '14px',
  background: '#fafafa',
  padding: ' 3px',
  color: '#FFA500',
  right: '1%',
};
export const titleTag = {
  borderRadius: '14px',
  left: '5%',
  background: '#fafafa',
  padding: ' 3px',
  fontWeight: 'bold',
  color: '#0000FF',
  bottom: '-20px',
};
export const categoryTag = {
  backgroundColor: '#fafafa',
  color: '#800080',
  borderRadius: '14px',
  padding: '3px',
  left: '5%',
  margin: '5px',
};

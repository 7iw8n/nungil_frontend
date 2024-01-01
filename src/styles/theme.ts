import { Theme } from '@emotion/react';

const colors = {
  primary: '#FA7268',
  Pressed_Primary: '#D75F56',
  Alpha10_Primary: '#FA72681A',
  Alpha20_Primary: '#FA726833',
  Warning_Red: '#F42111',
  White: '#FFFFFF',
  Gray0: '#F8F8F8',
  Gray1: '#EFEFEF',
  Gray2: '#E8E8E8',
  Gray3: '#E0E0E0',
  Gray4: '#D0D0D0',
  Gray5: '#B0B0B0',
  Gray6: '#909090',
  Gray7: '#707070',
  Gray8: '#505050',
  Gray9: '#303030',
  Black: '#262626',
};

export type ColorsTypes = typeof colors;

const theme: Theme = {
  colors,
};

export default theme;

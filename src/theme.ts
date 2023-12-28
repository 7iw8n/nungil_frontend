interface IColors {
  primary: string;
  Pressed_Primary: string;
  Alpha10_Primary: string;
  Alpha20_Primary: string;
  Warning_Red: string;
  White: string;
  Gray0: string;
  Gray1: string;
  Gray2: string;
  Gray3: string;
  Gray4: string;
  Gray5: string;
  Gray6: string;
  Gray7: string;
  Gray8: string;
  Gray9: string;
  Black: string;
}

const colors: IColors = {
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

interface ITheme {
  colors: IColors;
}

export const theme: ITheme = {
  colors,
};

import '@emotion/react';
import { ColorsTypes } from './theme.ts';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTypes;
  }
}

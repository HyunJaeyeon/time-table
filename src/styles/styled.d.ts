import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    BACK_GROUND: {
      INPUT_PAGE: string;
      RESULT_PAGE: string;
    };
    DROPDOWN: {
      SELECT_BOX: string;
    };
    TEXT: {
      BLACK: string;
      GRAY: string;
      BALLOON: string;
    };
    BUTTON: {
      WHITE: string;
      BROWN: string;
      BLACK: string;
      SHADOW: string;
    };
    PAGE: {
      ACTIVE: string;
      INACTIVE: string;
    };
  }
}

// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary?: string;
      background?: string;
      error?: string,
      lightGrey?: string;
      grey?: string;
      darkGrey?: string;
    },
  }
}

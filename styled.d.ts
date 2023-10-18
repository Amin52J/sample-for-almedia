import theme from "@aroundhome/around-kit/theme/aroundTheme";

// import original module declarations
import "styled-components";

type AroundThemeType = typeof theme;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends AroundThemeType {}
}

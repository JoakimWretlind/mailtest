import { createGlobalStyle } from 'styled-components';
import CabinetLight from './components/assets/fonts/CabinetGrotesk-Light.otf';
import CabinetExLight from './components/assets/fonts/CabinetGrotesk-Extralight.otf';
import CabinetBold from './components/assets/fonts/CabinetGrotesk-Bold.otf';
import Stretch from './components/assets/fonts/StretchPro.otf';
import Augustus from './components/assets/fonts/AUGUSTUS.TTF';
import Awaken from './components/assets/fonts/AwakenRegular.ttf';
import CinzelR from './components/assets/fonts/Cinzel-Regular.otf';
import CinzelDecoR from './components/assets/fonts/CinzelDecorative-Regular.otf';
import Bigilla from './components/assets/fonts/Bigilla.otf';
import BoskaL from './components/assets/fonts/Boska-Light.woff';
import Brand from './components/assets/fonts/Brand.woff';
import Rossanova from './components/assets/fonts/Rossanova-Light.otf';
import Anyatamy from './components/assets/fonts/AnyatamyRegular.otf';
import Athene from './components/assets/fonts/Athene.otf';
import Bodoni from './components/assets/fonts/BodoniRegular.ttf';
import MadeR from './components/assets/fonts/MADE-Regular.otf';
import MadeT from './components/assets/fonts/MADE-Thin.otf';
import Madesa from './components/assets/fonts/MADESAONARA400.otf';
import NewYork from './components/assets/fonts/NewYork.otf';
import Nomark from './components/assets/fonts/Nomark.otf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'anyatamy';
    src: url(${Anyatamy});
}
@font-face {
    font-family: 'augustus';
    src: url(${Augustus});
}
@font-face {
    font-family: 'athene';
    src: url(${Athene});
}
@font-face {
    font-family: 'bodoni';
    src: url(${Bodoni});
}
@font-face {
    font-family: 'brand';
    src: url(${Brand});
}
@font-face {
    font-family: 'cabinet-l';
    src: url(${CabinetLight});
}
@font-face {
    font-family: 'cabinet-xlight';
    src: url(${CabinetExLight});
}
@font-face {
    font-family: 'cabinet-bold';
    src: url(${CabinetBold});
}
@font-face {
    font-family: 'stretch';
    src: url(${Stretch});
}
@font-face {
    font-family: 'awaken';
    src: url(${Awaken});
}
@font-face {
    font-family: 'cinzelR';
    src: url(${CinzelR});
}
@font-face {
    font-family: 'cinzelDecoR';
    src: url(${CinzelDecoR});
}
@font-face {
    font-family: 'bigilla';
    src: url(${Bigilla});
}
@font-face {
    font-family: 'boskaL';
    src: url(${BoskaL});
}
@font-face {
    font-family: 'madeR';
    src: url(${MadeR});
}
@font-face {
    font-family: 'madeT';
    src: url(${MadeT});
}
@font-face {
    font-family: 'madesa';
    src: url(${Madesa});
}
@font-face {
    font-family: 'newYork';
    src: url(${NewYork});
}
@font-face {
    font-family: 'nomark';
    src: url(${Nomark});
}
@font-face {
    font-family: 'rossanova';
    src: url(${Rossanova});
}
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    
    body {
      background: linear-gradient(-5deg, hsl(228, 100%, 4%), hsl(228, 100%, 1%));
      color: #f1f1f1;
      box-sizing: border-box;
      font-family: 'cabinet-l';
     // cursor: none;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;
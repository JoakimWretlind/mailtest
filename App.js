import { GlobalStyle } from './globalStyle';

import {
  Home,
  About,
  Projects,
  Contact,
  Navbar,
  Footer,
  SmoothScroll,
  ScrollIndicator,
  ToTopBtn
} from './components/index';

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ScrollIndicator />
      <ToTopBtn />
      <SmoothScroll>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;

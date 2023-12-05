import 'swiper/swiper.min.css';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';

function App() {
    return (
      <BrowserRouter>
      <Routes>
          <Route
              path='/:category/search/:keyword'
              //component={Catalog}
              element={<>
              <Header/>
              <Catalog/>
              <Footer/>
              </>
              }
          />
          <Route
              path='/:category/:id'
              //component={Detail}
              element={<>
              <Header/>
              <Detail/>
              <Footer/>
              </>}
          />
          <Route
              path='/:category'
              //component={Catalog}
              element={<>
              <Header/>
              <Catalog/>
              <Footer/>
              </>
              }
          />
          <Route
              exact
              path="/"
              //component={Home}
              element={<>
                <Header/>
                  <Home />
                  <Footer/>
                  </>
              }
          />
      </Routes>
  </BrowserRouter>
    );
}

export default App;

import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/HomePage/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { GamePage } from './Pages/game-page/game-page'
import { OrderPage } from './Pages/order-page/order-page'
function App() {
  return (
    <Provider store={ store }>
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="react-game-shop/order" element={<OrderPage />}/>
            <Route exact path="react-game-shop/app/:title" element={<GamePage />}/>
            <Route exact path="react-game-shop/" element={<HomePage />}/>
          </Routes>
      </div>
    </BrowserRouter>
  </Provider>
    
  );
}
export default App;

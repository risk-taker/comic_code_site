import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navigation from './components/shared/navigation/Navigation';
import Cart from './pages/cart/Cart';
import Books from './pages/books/Books';
import Blog from './pages/blog/Blog';
import Authenticate from './pages/authenticate/Authenticate';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';

function App() {
  const { loading } = useLoadingWithRefresh()
  // console.log(loading);
  // const loading = true

  return loading ? (
    'loading...'
  ) : (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/books' element={<Books />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/authenticate' element={<Authenticate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
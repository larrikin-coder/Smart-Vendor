import {Box} from '@mui/material';
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import DetailView from './components/details/DetailView';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <DataProvider >
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:84}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<DetailView/>}/>
          <Route path='/cart' element={<Cart/>} />
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Drawer from '@material-ui/core/Drawer'
import Cart from './components/Cart';
import Favorite from './components/Favorite';

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <div className="flex flex-row w-full h-full max-h-screen font-family overflow-hidden">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
      <BrowserRouter>
        <Sidebar />
        <div className="w-full overflow-y-scroll">
          
          <Navbar setCartOpen={setCartOpen} />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/favorite" component={Favorite} />
            </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

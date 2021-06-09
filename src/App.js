import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Drawer from '@material-ui/core/Drawer'
import Cart from './components/Cart';

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <div className="flex flex-row w-full h-full max-h-screen font-family overflow-hidden">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        xd
        <Cart />
      </Drawer>
      <Sidebar />
      <div className="w-full overflow-y-scroll">
        <Navbar setCartOpen={setCartOpen} />
        <Main />
      </div>
      {/* Sidebar */}
      {/* Navbar */}
      {/* Hero */}
      {/* Main */}
    </div>
  );
}

export default App;

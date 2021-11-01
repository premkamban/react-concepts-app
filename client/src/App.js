import './App.css';
// import Modal from './Modal'
// import RefDemo from './RefDemo'

import Callback from './container/HomePage/Callback'
import Compoff from './component/Compoff'
import Checkbox from './container/HomePage/Checkout'
import Navbar from './component/Navbar';
import ToolkitCounter from './component/ToolkitCounter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Compoff />
      {/*<RefDemo />*/}
      {/*<Modal />*/}
      <Callback />
      <div id='countCal'>
        <Checkbox />
      </div>
      <ToolkitCounter />
    </div>
  );
}

export default App;

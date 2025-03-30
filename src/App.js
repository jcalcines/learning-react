import logo from './logo.svg';
import './css/tailwind.css';
import HelloWorld from './components/HelloWorld.js';
import CounterExample from './components/CounterExample.js';
import Header from './menu/Header.js';
import Footer from './menu/Footer.js';


function App() {
  return (
    <div>
        <Header />
        <HelloWorld name={"Jose"}/>
        <Footer />
        {/*<CounterExample />*/}
    </div>
  );
}

export default App;

import '../css/tailwind.css';
import HelloWorld from '../components/HelloWorld.js';
import Header from '../menu/Header.js';
import Footer from '../menu/Footer.js';

function HomePage() {
  return (
    <div>
        <Header />
        <HelloWorld name={"Menganito"}/>

        <Footer />
    </div>
  );
}

export default HomePage;

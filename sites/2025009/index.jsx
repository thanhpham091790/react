
import './index.css';

import Header from './pages/Header';
import Chef from './pages/Chef';

import Burger from './pages/Burger';
import Image from './pages/Burger/Image';
import BestBurger from '/2025009/assets/group3/best-burger.png';
import Text from './pages/Burger/Text';
import Button from './pages/Burger/Button';

import Statistic from './pages/Statistic';
import Package from './pages/Package';
import Review from './pages/Review';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


function Site2025009() {
  return (
    <div id='site-2025009' className='site-2025009'>
      <Header />

      <Chef />

      <Burger id="group3" reserve={false}>
        <Image src={BestBurger} alt="Best Burger" />
        <Text>
          <h2>Best Burger</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos reiciendis nam tempore molestiae
            commodi?</p>
          <Button>Order Now</Button>
        </Text>
      </Burger>

      <Burger id="group4" reserve={true}>
        <Image src={BestBurger} alt="Big Burger" />
        <Text>
          <h2>Big Burger</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos reiciendis nam tempore molestiae
            commodi?</p>
          <Button>Order Now</Button>
        </Text>
      </Burger>

      <Statistic />

      <Package />

      <Review />

      <Contact />

      <Footer />
    </div>
  )
}

export default Site2025009;

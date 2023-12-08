import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';
import { Link } from 'react-router-dom';

const imageDir = './src/img/';

function Dashboard() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='cripto-cards'>
      <Link to="/bitcoin" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card title="Bitcoin" imageSrc={`${imageDir}btc.png`} price="US$ 43.578,00" />
      </Link>
        <Card title="Ethereum" imageSrc={`${imageDir}eth.png`} price="US$ 2.245,00" />
        <Card title="Polygon" imageSrc={`${imageDir}pol.png`} price="US$ 0,89" />
      </div>
      <div className='wrappedButton'>
        <Button to="/" name="Logout" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;

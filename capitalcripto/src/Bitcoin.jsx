import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';

const imageDir = './src/img/';

function Bitcoin() {

  const [mes, setMes] = useState(0);

  const updateMes = () => {
      setMes(mes + 1);
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='cripto-cards'>
        <Card title="Preço médio" imageSrc={`${imageDir}btc.png`} price="US$ 21.370,00" />
        <div>
          <h2 className='compraText'>Meses que comprei: {mes}</h2>
            <button className='compraButton' onClick={updateMes}>Registrar nova compra</button>
        </div>
      </div>
      <div className='wrappedButton'>
        <Button to="/dashboard" name="Voltar" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Bitcoin;

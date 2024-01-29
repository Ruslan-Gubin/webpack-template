import { useState } from 'react';
import styles from  './App.module.scss'; 
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import imgPng from '@/assets/qr-img-mock.png';
import imgJpg from '@/assets/info-main-background.jpg';
import LogoSvg from '@/assets/logo.svg';
import TestSvg from '@/assets/test.svg';

const test2 = () => {
console.log('Error')
}

const test = () => {
  return test2()
}


const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickError = () => {
    return test()
  }

  return (
    <div>
      <Link to={'./shop'} style={{paddingRight: 50}}>Shop</Link>
      <Link to={'./about'}>About</Link>


    <img width={100} height={100} src={imgPng} alt="Png" />
    <img width={100} height={100} src={imgJpg} alt="jpg" />
    jpg было 5мб сжало 500кб


    <LogoSvg style={{color: 'green'}} width={200} height={200} fill='red' color='red'   />
    <TestSvg style={{color: 'green'}} width={150} height={50} fill='red' color='red'  />

      <h1>Webpack Template</h1>

      <h2>Variables</h2>
      <label>Url: {BACKEND_URL}</label>

      <button onClick={handleClickError}>Error</button>

      <h2 data-testid={'TEST_ID_APP_H2'} >Count: {count}</h2>
      <button className={styles.button} onClick={() => setCount(prev => prev + 1)}>Up</button>  
      <button className={styles.button} onClick={() => setCount(prev => prev - 1)}>Down</button>        
      <Outlet/>
    </div>
  );
};

export { App };
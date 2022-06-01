import { useState } from 'react';
import styles from './app.module.css';
import poweredImg from './assets/img/powered.png';

import {levels, calculateImc} from './helper/imc';
import {GridItem} from './components/GridItem';


function App() {
   const [heightField, setHeightFiled] = useState<number>(0);
   const [weightField, setWeightFiled] = useState<number>(0);

   const handleCalculateButton = () => {
      if (!heightField || !weightField) {
         alert('Preencha todos os campos!');
      }
      
   };

   return (
      <div className={styles.main}>
         <header>
            <div className={styles.headerContainer}>
               <img src={poweredImg} alt="logo" width={150} />
            </div>
         </header>
         <div className={styles.container}>
            <div className={styles.leftSide}>
               <h1>Calcule seu IMC</h1>
               <p>
                  IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
                  pela Organização Mundial de Saúde para calcular o peso ideal
                  de cada pessoa.
               </p>

               <input
                  type="number"
                  placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
                  value={heightField > 0 ? heightField : ''}
                  onChange={(e) => setHeightFiled(parseFloat(e.target.value))}
               />
               <input
                  type="number"
                  placeholder="Digite seu peso. Ex: 80.8 (em kilogramas)"
                  value={weightField > 0 ? weightField : ''}
                  onChange={(e) => setWeightFiled(parseFloat(e.target.value))}
               />

               <button onClick={handleCalculateButton}>Calcular</button>
            </div>
            <div className={styles.rightSide}>
               <div className={styles.grid}>
                  {levels.map((item,key)=>(
                     <GridItem key={key} data={item} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;

import { useState } from 'react';
import styles from './app.module.css';
import poweredImg from './assets/img/powered.png';
import leftArrowImg from './assets/img/leftarrow.png';

import { levels, calculateImc, Level } from './helper/imc';
import { GridItem } from './components/GridItem';

function App() {
   const [heightField, setHeightFiled] = useState<number>(0);
   const [weightField, setWeightFiled] = useState<number>(0);
   const [toShow, setToShow] = useState<Level | null>(null);

   const handleCalculateButton = () => {
      if (!heightField || !weightField) {
         alert('Preencha todos os campos!');
      }
      setToShow(calculateImc(heightField, weightField));
   };

   const handleBackClick = () => {
      setToShow(null);
      setHeightFiled(0);
      setWeightFiled(0);
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
                  disabled={toShow ? true : false}
               />
               <input
                  type="number"
                  placeholder="Digite seu peso. Ex: 80.8 (em kilogramas)"
                  value={weightField > 0 ? weightField : ''}
                  onChange={(e) => setWeightFiled(parseFloat(e.target.value))}
                  disabled={toShow ? true : false}
               />

               <button
                  onClick={handleCalculateButton}
                  disabled={toShow ? true : false}
               >
                  Calcular
               </button>
            </div>

            <div className={styles.rightSide}>
               {!toShow && (
                  <div className={styles.grid}>
                     {levels.map((item, key) => (
                        <GridItem key={key} data={item} />
                     ))}
                  </div>
               )}

               {toShow && (
                  <div className={styles.rightBig}>
                     <div
                        className={styles.rightArrow}
                        onClick={handleBackClick}
                     >
                        <img src={leftArrowImg} alt="seta" width={25} />
                     </div>
                     <GridItem data={toShow} />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default App;

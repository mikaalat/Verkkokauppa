import React, { useState } from 'react';
import './App.css';
import Ostoskori from './components/Ostoskori';
import Button from '@material-ui/core/Button';

function App() {

  const [kauppaan, setKauppaan] = useState(0)
  
 
const Kauppaan = () => {
  setKauppaan(1);
}


if (kauppaan===0){
  return (
    <div className="Kauppaan">
      Tervetuloa puhelintarvikekauppaan!
      
      <p>Puhelintarvikekauppa on kokonaan verkossa toimiva, vuonna 2022 perustettu kauppapaikka. Tarjoamme kattavan valikoiman puhelimien oheistarvikkeita jokaiseen tarpeeseen, aina markkinoiden edullisimpaan hintaan ja kuuden kuukauden takuulla. Tavoitteenamme on tuottaa asiakkaillemme mahdollisimman onnistunut ostokokemus ja tarjota ammattitaitoamme oikeanlaisten tuotteiden löytämiseen.

      Tarjoamme markkinoiden nopeimman toimituksen, mikäli teet tilauksen arkipäivänä ennen klo 16. Tällöin saamme paketin liikkeelle jo samana päivänä! Valittavanasi on useita eri toimitusvaihtoehtoja ja joustavasti erilaisia maksuvaihtoehtoja.

      Asiakaspalvelumme palvelee teitä vuorokauden jokaisena hetkenä, joten ethän epäröi ottaa yhteyttä mikäli tarvitset apua oikean tuotteen valinnassa tai ongelmatilanteissa.
      </p>
      
      <p>Asiakaspalvelu: 123 45678910 auki 24/7!</p>  <br></br>
    <Button variant="outlined" color="primary" onClick={Kauppaan}>Kauppaan</Button>
    </div>
  );
} else {
  return(
    <div className="App">
      <Ostoskori />
      
    </div>
  )
}

}

export default App;

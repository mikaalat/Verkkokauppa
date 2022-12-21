import React, { useState, useEffect } from 'react';
import items from './items.json';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from "axios";


function List({ LisaaKoriin }) {

  const [product, setProduct] = useState([]);
  const [nayta, setNayta] = useState(0);
  const [kaikkituotteet, setkaikkiTuotteet] = useState([]);
  let List = [];
  const url="http://localhost/puhelintarvikekauppa/"

  useEffect(() => {
    axios.get(url + "products/allproducts.php")
      .then((response) => {
        const json = response.data;
        // setCategoryName(json.category);
        console.log(json)
        setkaikkiTuotteet(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  })




  const Ostoskoriin = (id) => {
    product.push({ tuotenro: items[id].tuotenro, tuotenimi: items[id].tuotenimi, hinta: items[id].hinta, image: items[id].image })
    LisaaKoriin(product);
  }

  if (nayta === 0) {
    List = kaikkituotteet;
  }

  if (nayta !== 0) {
    for (let i = 0; i < kaikkituotteet.length; i++) {
      if (kaikkituotteet[i].trnro === nayta) {
        List.push(kaikkituotteet[i])
      }
    }
  }


  const tuotteet = List.map((List) => {

    return (

      <tr key={List.tuotenro} >
        <td><a target="_blank" href={List.image}><img className="Kuva" src={url+ "img/" + List.image} /></a></td>
        <td className="lisaa1" onClick={() => Ostoskoriin(List.tuotenro)}>{List.tuotenimi}</td>
        <td className="kuvaus" onClick={() => Ostoskoriin(List.tuotenro)} width={300}>{List.kuvaus}</td>
        <td className="lisaa1" onClick={() => Ostoskoriin(List.tuotenro)}>{List.hinta.toLocaleString()}€</td>
        <td> <AddCircleIcon className="lisaa2" onClick={() => Ostoskoriin(List.tuotenro)} /></td>
      </tr>

    )
  }
  )

  const Puhelin = () => {
    setNayta(4)
  }

  const Laturit = () => {
    setNayta(2)
  }

  const Kuulokkeet = () => {
    setNayta(1)
  }

  const Suojakuoret = () => {
    setNayta(3)
  }


  const Kaikki = () => {
    setNayta(0)
  }

  return (
    <>
      <div>
        <h1> </h1>
        <table className="Taulukko2">
          <th onClick={Puhelin}>Puhelimet</th>
          <th onClick={Laturit}>Laturit</th>
          <th onClick={Kuulokkeet}>Kuulokkeet</th>
          <th onClick={Suojakuoret}>Suojakuoret</th>
          <th onClick={Kaikki}>Kaikki</th>
        </table>
        <table className="Taulukko">
          <th></th>
          <th>Tuote</th>
          <th>Kuvaus</th>
          <th>Hinta</th>
          {tuotteet}
        </table>

       <h1> </h1>
      </div>
      {/*<div>
        <h3>Category </h3>
        {kaikkituotteet.map(tuote => (
          <div key={tuote.tuotenro}>
            {tuote.tuotenimi}
          </div>
        ))}
        </div>*/}
    </>
  );
}

export default List;
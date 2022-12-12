import React, { useState } from 'react';
import items from './items.json';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function List({ LisaaKoriin }) {

  const [product, setProduct] = useState([]);
  const [nayta, setNayta] = useState('Kaikki');
  let lista = [];

  const Ostoskoriin = (id) => {
    product.push({ id: items[id].id, tuote: items[id].tuote, hinta: items[id].hinta, url: items[id].url })
    LisaaKoriin(product);
  }

  if (nayta === 'Kaikki') {
    lista = items;
  }

  if (nayta !== 'Kaikki') {
    for (let i = 0; i < items.length; i++) {
      if (items[i].kategoria === nayta) {
        lista.push(items[i])
      }
    } 
  }


  const tuotteet = lista.map((lista) => {

    return (

      <tr key={lista.id} >
        <td><a target="_blank" href={lista.url}><img className="Kuva" src={lista.url} /></a></td>
        <td className="lisaa1" onClick={() => Ostoskoriin(lista.id)}>{lista.tuote}</td>
        <td className="kuvaus" onClick={() => Ostoskoriin(lista.id)} width={300}>{lista.kuvaus}</td>
        <td className="lisaa1" onClick={() => Ostoskoriin(lista.id)}>{lista.hinta.toLocaleString()}€</td>
        <td> <AddCircleIcon className="lisaa2" onClick={() => Ostoskoriin(lista.id)} /></td>
      </tr>

    )
  }
  )

  const Puhelin = () => {
    setNayta('Puhelin')
  }

  const Laturit = () => {
    setNayta('Laturit')
  }

  const Kuulokkeet = () => {
    setNayta('Kuulokkeet')
  }

  const Suojakuoret = () => {
    setNayta('Suojakuoret')
  }


  const Kaikki = () => {
    setNayta('Kaikki')
  }

  return (
    <div>
      <h1> </h1>
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

      <h1> </h1>
    </div>
  );
}

export default List;

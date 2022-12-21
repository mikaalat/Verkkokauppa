import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Tilaus from './Tilaus';


function ShowShoppingList({ ostoskori, JatkaOstoksia, TyhjennaKori }) {

    const [summa, lisaaSumma] = useState(0);
    const [virheetonSumma, setVirheetonSumma] = useState(0)


    useEffect(() => {

        LaskeSumma();
    }, [])


    const tuotteet = ostoskori.map((items, i) => {

        return (

            <tr key={i} >
                <td><a target="_blank" href={items.image}><img className="Kuva" src={items.image} /></a></td>
                <td className="ShowOstoskori">{items.tuotenimi}</td>
                <td className="ShowOstoskori"> </td>
                <td className="ShowOstoskori">{items.hinta.toLocaleString()}</td>
                <td><RemoveCircleIcon fontSize="small" name={i} onClick={() => Poisto(i)} /></td>
            </tr>
        )
    }
    )

    const Poisto = (i) => {
        ostoskori.splice(i, 1);
        LaskeSumma();
        if (ostoskori.length === 0) {
            TyhjennaKori();
        }
    }


    const Jatka = () => {
        JatkaOstoksia(ostoskori);
    }

    const Tyhjenna = () => {
        lisaaSumma(0);
        TyhjennaKori(0);
    }

    const LaskeSumma = () => {
        let matikka = 0;
        for (let i = 0; i < ostoskori.length; i++) {

            matikka = matikka + ostoskori[i].hinta;
        }
        setVirheetonSumma(matikka)
        lisaaSumma(matikka.toLocaleString())
    }


    return (
        <div>
            <h3>Ostoskorisi sisältö:</h3>
            <table className="Taulukko">
                {tuotteet}
            </table>
            <br></br>
            <div className="ShowOstoskori">Tilauksen kokonaisarvo: {summa} €</div><br></br>
            <Button variant="outlined" color="primary" onClick={Jatka}>Jatka ostoksia</Button><br></br><br></br>
            <Button variant="outlined" color="primary" onClick={Tyhjenna}>Tyhjennä ostoskori</Button>
            <Tilaus ostoskori={ostoskori} summa={virheetonSumma} />
            <br></br>
            <div> Lisätietoja antaa tarvittaessa <br></br> Asiakaspalvelu +35850050655, joka on auki 24/7. <br></br>
                
            </div>
        </div>
    )

}

export default ShowShoppingList;
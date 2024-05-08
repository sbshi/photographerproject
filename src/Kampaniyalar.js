import React from 'react';
import './Kampaniyalar.css';
import Carousel from './Carousel';
import Wrap from './Wrap';
import Footer from './Footer';
import stranici from './assets/stranici.png';
import azercell from './assets/b-2-c-logo.svg';

function Kampaniyalar() {
    return (
        <>
            <div className='third'>
                <div className='pages3'>
                    <img src={azercell} style={{ width: "109px", height: "34px" }} />
                </div>
                <p className='kampanii'>Kampaniyalar</p>
            </div>
            <p className='yaxsi-teklif'>Ən yaxşı təkliflər</p>
            <Carousel/>
            <p className='cari-teklif'> Cari təkliflər </p>
            <Wrap/>
            <img className='stranici' src={stranici} style={{width:"325px"}} />
            <Footer/>
        </>
    )                 
}
export default Kampaniyalar;

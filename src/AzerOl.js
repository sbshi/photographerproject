import React from 'react';
import './AzerOl.css';
import Footer from './Footer';
import azercell from './assets/b-2-c-logo.svg';
import azerpeople from './assets/intro-img.png.webp';
import liderlik from './assets/liderlik.png';
import statistics from './assets/statistics.png';
import shop from './assets/shop-xl.png.webp';
import statrow from './assets/stat-row.png';
import Akkordeon from './Akkordeon';

function AzerOl() {
    return (
        <>
            <div className='second'>
                <div className='pages2'>
                    <img src={azercell} style={{ width: "109px", height: "34px" }} />
                </div>
                <div className='azeli'>
                    <p className='azerliol'>Azercell-li ol</p>
                    <p className='azer-desc'>Nömrəni dəyişmədən bizə qoşul və Azercell-in geniş əhatə dairəsinə malik yüksək keyfiyyətli xidmətlərindən yararlan.</p>
                    <div className='people'>
                        <div className='azer-row'>
                        <div className='orange-azer'></div>
                        <div className='prozrach-azer'></div> 
                        </div>
                        <img className='azerpeople' src={azerpeople} />
                    </div>                   
                </div>
                
            </div>
            <div className='niye'>
               <p className='niye-name'>Niyə Azercell?</p>     
               <div className='niye-row'>
                   <div className='teklif'></div>
                   <div className='suret'></div>
               </div>
            </div>
            <div className='lider'>
                <p className='lider-desc'>Azərbaycanın aparıcı mobil operatoru</p>
                <p className='lider-name'>Liderlik mövqeyimizi saxlamaqdayıq</p>
                <img className='liderlik' src={liderlik} style={{ width: "1128px", height: "226px" }}/>
                <img className='statistics' src={statistics} style={{ width: "700px", height: "500px" }}/>
                <img className='statrow' src={statrow} style={{ width: "140px", height: "500px" }}/>
            </div>
            <div className='abuneci'>
                <div className='abuneci-col'>
                    <p className='musteri'>Azercell Müştəri Xidmətləri</p>
                    <p className='abune-name'>Abunəçilərin 24/7 dəstəklənməsi</p>
                    <p className='abune-desc'>Fərqli və fərdi yanaşma, yüksək keyfiyyətli xidmətlər</p>
                </div>
                <img className='shop' src={shop} />
            </div>
            <Akkordeon/>
            <Footer/>
        </>
    )
}
export default AzerOl;
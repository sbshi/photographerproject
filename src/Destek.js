import React from 'react';
import './Destek.css';
import azercelll from './assets/b-2-c-logo.svg';
import teztez from './assets/teztez.png';
import twophones from './assets/two-phones.webp';
import beforefoot from './assets/before-foot.png';
import Map from './Map';
import Footer from './Footer';
import Question from './Question';
import More from './More';
import map from './assets/map.png';

function Destek() {
    return (
        <>
        <div className='fourth'>
                <div className='pages4'>
                <img src={azercelll} style={{ width: "109px", height: "34px" }} />
            </div>
            <div className='destek-col'>
                <p className='destek'>Dəstək</p>
                <p className='destek-desc'>Məhsullarımız və xidmətlərimizlə bağlı tez-tez verilən suallara tez bir zamanda aydın və ətraflı cavab tap.</p>
                <p className='destek-sual'>Sualınızı burada yaza bilərsiniz</p>
                <div className='destek-row'>
                    <input className='destek-input' type='text' placeholder='Açar sözünü daxil et '/>
                    <div className='destek-btn'>Axtar</div>
                </div>
                <img className='teztez' src={teztez} style={{height:"25px", width:"500px"}} />
            </div>
        </div>
        <div className='destek-wrap'>
            <div className='akart-w'></div>
            <div className='internet-p'></div>
            <div className='balans-w'></div>
            <div className='rouming-w'></div>
            <div className='nomre-w'></div>
            <div className='tetbiq-w'></div>
            <div className='servis-w'></div>
        </div>
        <p className='suallar'>Tez-tez verilən suallar</p>
        <Question/>
        <p className='suallar'>Digər suallar</p>
        <More/>
        <div className='map-row'>
            <p className='map-name'>Azercell mağazaları</p>
            <p className='map-desc'>Harada olduğunuzu qeyd edin, harada olduğumuzu göstərək</p>
            <p className='xerite'>Xəritə</p>
        </div>
        <div className='mapdiv'>
            <img className='map' src={map}/> 
        </div>
        <div className='destek-info'>
            <img className='twophones' src={twophones}/>
            <img className='beforefoot' src={beforefoot}/>
        </div>
        <Footer/>
        </>
    )
}

export default Destek;
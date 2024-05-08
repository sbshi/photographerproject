import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import azercell from './assets/b-2-c-logo.svg';
import tarif from './assets/desktop.png';
import hiss from './assets/hiss.png';
import supersen from './assets/supersen.png';
import serbest from './assets/serbest.png';
import earth from './assets/earth.png';
import phone from './assets/phone.png';
import chat from './assets/chat.png';
import whatsapp from './assets/whatsapp.svg';
import messenger from './assets/messenger.webp';
import ayliq from './assets/ayliq.png';
import gunluk from './assets/gunluk.png';
import esim from './assets/esim.png';
import tetbiq from './assets/tetbiq.png';
import apple from './assets/apple-logo.png';
import google from './assets/google-play.png';
import info from './assets/info.png';
import azerphone from './assets/azerphone.webp';
import card from './assets/credit-card.png';
import wifi from './assets/wifi-signal.png';
import sim from './assets/sim.png';
import video from './assets/comp.mp4';
import cards from './assets/card.png';
import manat from './assets/manat.png';
import threeapps from './assets/threeapps.png';
import sixpx from './assets/sixpx.png';

function Main() {
    return (
        <>
            <div className='header'>
                <div className='pages'>
                    <img src={azercell} style={{ width: "109px", height: "34px" }} />
                </div>
                <div className='row'></div>
                <div className='super'>
                    <h1>SuperSən, tarifini seç!</h1>
                    <img className='supertarif' src={tarif} />
                </div>

            </div>
            <div className='tarif'>
                <div className='column'>
                    <h2>Tarifini özün yarat</h2>
                    <p className='tarif-desc'>Bir neçə addımla öz tarifini yaratmaqda sənə kömək edəcəyik. Çox asan və tez!</p>
                    <div className='btn'>Ətraflı</div>
                </div>
                <img className='hiss' src={hiss}/>
            </div>
            <div className='paket'>
                <div className='paket-name'>
                    <h2 className='paket-desc'>Sərfəli tarif paketlərinə abunə ol</h2>
                    <p className='paket-more1'>Hamısını göstər</p>
                    <div className='internet-name'>
                        <h2 className='paket-desc'>İnternet paketlər</h2>
                        <p className='paket-more2'>Hamısını göstər</p>
                    </div>
                </div>
                <div className='row-paket'>
                    <div className='two-paket'>
                        <div className='paket-first'>
                            <img src={supersen} style={{ width: '356px' }} />
                            <div className='tarif-desc'>
                                <div className='tarif-icons'>
                                    <img src={earth} style={{ width: '36px', height: '36px' }} />
                                    <img src={phone} style={{ width: '36px', height: '45px' }} />
                                    <img src={chat} style={{ width: '40px', height: '40px' }} />
                                </div>
                                <div className='tarif-name'>
                                    <p className='contain'>10GB</p>
                                    <p className='contain-desc'>İnternet</p>
                                    <p className='contain'>500 dəq.</p>
                                    <p className='contain-desc'>Ölkədaxili zənglər</p>
                                    <p className='contain'>Yazışma</p>
                                </div>
                            </div>
                            <div className='tarif-img'>
                                <img src={whatsapp} style={{ width: '36px', height: '36px' }} />
                                <img src={messenger} style={{ width: '36px', height: '36px' }} />
                            </div>
                            <p className='contain-desc2'>Qoşulmaq üçün "SS10" yazıb 7575-ə göndər</p>
                            <div className='btns'>
                                <div className='btn-first'>İndi qoşul</div>
                                <div className='btn-second'>Daha ətraflı </div>
                            </div>
                        </div>
                        <div className='paket-second'>
                            <img src={serbest} style={{ width: '356px' }} />
                            <div className='tarif-desc'>
                                <div className='tarif-icons'>
                                    <img src={earth} style={{ width: '36px', height: '36px' }} />
                                    <img src={phone} style={{ width: '36px', height: '45px' }} />
                                    <img src={chat} style={{ width: '40px', height: '40px' }} />
                                </div>
                                <div className='tarif-name'>
                                    <p className='contain'>5GB</p>
                                    <p className='contain-desc'>İnternet</p>
                                    <p className='contain'>500 dəq.</p>
                                    <p className='contain-desc'>Ölkədaxili zənglər**</p>
                                    <p className='contain'>Yazışma</p>
                                </div>
                            </div>
                            <div className='tarif-img'>
                                <img src={whatsapp} style={{ width: '36px', height: '36px' }} />
                                <img src={messenger} style={{ width: '36px', height: '36px' }} />
                            </div>
                            <p className='contain-desc2'>Qoşulmaq üçün "SS10" yazıb 7575-ə göndər</p>
                            <div className='btns'>
                            <div className='btn-first'>İndi qoşul</div>
                            <div className='btn-second'>Daha ətraflı </div>
                        </div>
                        </div>
                    </div>
                    <div className='internet-paket'>
                        <img src={ayliq} className='ayliq'/>
                        <img src={gunluk} className='gunluk'/>
                    </div>
                </div>
            </div>
            <div className='nomer'>
                <div className='column-nomer'>
                    <p className='nomer-desc'>İstədiyin Azercell nömrəni indi al!</p>
                    <div className='btn-nomer'>Nömrəni seç</div>
                </div>
                <img className='esim' src={esim}/>
            </div>
            <div className='tetbiq'>
                <div className='row-tetbiq'>
                    <h2 className='tetbiq-name'>Azercell tətbiqləri ilə daha çoxunu əldə et</h2>
                    <p className='paket-more1'>Hamısını göstər</p>   
                </div>
                <img className='tetbiq-img' src={tetbiq}/>
                <img className='tetbiq-img2' src={threeapps}/>
                <img className='tetbiq-img3' src={sixpx}/>
            </div>
            <div className='phone-tetbiq'>
                <div className='column-phone'>
                    <p className='phone-name'>Sənin Azercell-in, sənin tətbiqin</p>
                    <p className='phone-desc'>Daha rahat, daha sürətli, daha təhlükəsiz!</p>
                    <div className='row-phone'>
                        <div className='apple'>
                            <img src={apple} style={{ width: '20px', height: '20px' }}/>
                            <p className='icon-desc'>App Store</p>
                        </div>
                        <div className='google'>
                            <img src={google} style={{ width: '20px', height: '20px' }}/>
                            <p className='icon-desc'>Google Play</p>
                        </div>
                    </div>
                    <div className='info-row'>
                        <img src={info} style={{ width: '22px', height: '22px' }}/>
                        <p className='info'>"Azercell" tətbiqinin imkanlarından mobil cihazlarda və ya fərdi kompüterində yararlan.</p>
                    </div>
                </div>
                <img src={azerphone} style={{ width: '307px', height: '612px' }}/>
                <div className='column-card'>
                    <div className='purple-card'>
                        <img src={card} style={{ width: '40px', height: '40px' }}/>
                        <div className='column-cards'>
                            <p className='card-name'>İnnovativ, sürətli və təhlükəsiz!</p>
                            <p className='card-desc'>"akart" ilə ödənişlərini tez və rahat et</p>
                        </div>
                    </div>
                    <div className='wifi'>
                        <img src={wifi} style={{ width: '40px', height: '40px' }}/>
                        <div className='wifi-info'>
                            <p className='wifi-name'>İnternet paketlərinə qoşul</p>
                            <p className='wifi-desc'>İnternet balansını rahatlıqla tənzimlə</p>
                        </div>
                    </div>
                   <div className='sim'>
                    <img src={sim} className='sim-icon' style={{ width: '40px', height: '40px' }}/>
                    <div className='sim-info'>
                        <p className='sim-name'>Nömrəni idarə et</p>
                        <p className='sim-desc'>Balansına nəzarət et, müvafiq tarifə qoşul</p>
                    </div>
                   </div>
                </div>
            </div>
            <div className='videodiv'>
                <video className='video' autoPlay>
                <source src="https://www.azercell.com/theme/images/video/comp.mp4" type="video/mp4" />
                </video>
            </div>
            <p className='video-name'>4G sürəti ilə yeni imkanları kəşf et.</p>
            <p className='video-desc'>Sadəcə 4G-dəstəkli SIM kart və smartfon kifayətdir.</p>
            <div className='card'>
                <div className='card-column'>
                    <h3 className='info'>Balansın artırılması</h3>
                    <p className='bank-card'>Bank kartları ilə balansını dərhal artır</p>
                    <h5 className='info'>Mobil nömrə</h5>
                    <input className='mobile-number' type="tel" id="phone" name="phone" data-mask-pattern="+994 (#0) 000 00 00" placeholder="+994 ( ) ___ __ __" data-mask="phone" required/>
                    <h5 className='info'>Məbləğ</h5>
                    <input className='manat' type='number'/>
                    <div className='btn-nomer ode'>Ödə</div>
                </div>
                <img src={cards} className='card-img'  style={{ width: '540px', height: '340px' }} />  
            </div>
            <input className='card-position' placeholder='XXXX XX' pattern="\d{6}" maxLength={6} inputMode="numeric" type='text'/>
            <Footer/>
        </>
    )
}
export default Main;
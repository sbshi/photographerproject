import React from 'react';
import './Footer.css';
import azercell from './assets/b-2-c-logo.svg';
import language from './assets/language.png';
import applegray from './assets/apple-logogray.png';
import googlegray from './assets/play-button-arrowhead.png';
import appgallery from './assets/gallery.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter (1).png';
import youtube from './assets/youtube (1).png';
import insta from './assets/instagram (1).png';

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='row-footer'>
                    <div className='azer-footer'>
                        <img src={azercell} style={{ width: "109px", height: "34px" }} />
                        <img src={language} className='language' style={{ width: "90px", height: "30px" }} />
                    </div>
                    <div className='shirket'>
                        <p className='name'>Şirkət haqqında</p>
                        <p className='desc1'>Azercell Akademiyası </p>
                        <p className='desc2'>Karyera</p>
                        <p className='desc2'>Dayanıqlılıq</p>
                        <p className='desc2'>Azercell Life</p>
                        <p className='desc2'>Mətbuat</p>
                    </div>
                    <div className='xidmet'>
                        <p className='name'>Tariflər və xidmətlər</p>
                        <p className='desc1'>Tariflər</p>
                        <p className='desc2'>Xidmətlər </p>
                        <p className='desc2'>İnternet</p>
                        <p className='desc2'>Rouminq</p>
                    </div>
                    <div className='azercell-tet'>
                        <p className='name'>Azercell tətbiqləri</p>
                        <p className='desc1'>Özünəxidmət</p>
                        <p className='desc2'>Musiqi</p>
                        <p className='desc2'>Şəxsi inkişaf</p>
                        <p className='desc2'>Onlayn kinoteatr və TV</p>
                    </div>
                    <div className='kampaniyalar'>
                        <p className='name'>Kampaniyalar</p>
                        <p className='desc1'>Xüsusi təkliflər</p>
                        <p className='desc2'>Danışıq</p>
                        <p className='desc2'>İnternet</p>
                        <p className='desc2'>Bonus proqramları</p>
                        <p className='desc2'>Cihazlar</p>
                    </div>
                    <div className='destek'>
                        <p className='name'>Dəstək</p>
                        <p className='desc1'>Əlaqə</p>
                        <p className='desc2'>Azercell satış və xidmət mərkəzləri</p>
                        <p className='desc2'>Bələdçi</p>
                    </div>
                </div>
                <div className='footer-info'>
                    <p>Çağrı mərkəzi:*1111</p>
                    <p className='kabinet'>Kabinetim tətbiqini yüklə</p>
                    <p className='yenilik'>Yeniliklərə abunə ol</p>
                </div>
                <div className='apps'>
                    <div className='app-icons'>
                        <div className='apple-gray'>
                            <img className='gray-icon' src={applegray} style={{ width: "17px", height: "17px" }} />
                            <p className='gray-desc'>Apple Store</p>
                        </div>
                        <div className='google-gray'>
                            <img className='gray-icon' src={googlegray} style={{ width: "15px", height: "15px" }} />
                            <p className='gray-desc'>Google Play</p>
                        </div>
                        <div className='app-gallery'>
                            <img className='gray-icon' src={appgallery} style={{ width: "24px", height: "24px" }} />
                            <p className='gray-desc'>AppGallery</p>
                        </div>
                    </div>
                    <div className='inputs'>
                        <div className='input-email'><input className='email' type='email' placeholder='Elektron poçt' /></div>
                        <div className='app-gallerys'>
                            <p className='gray-desc'>Abunə ol</p>
                        </div>
                    </div>
                </div>
                <div className='social-media'>
                    <p className='company'>© 2024 “Azercell Telecom” MMC</p>
                    <div className='socials'>
                        <img src={facebook} style={{ width: "22px", height: "22px" }}/>
                        <img src={twitter} style={{ width: "23px", height: "23px" }}/>
                        <img src={youtube} style={{ width: "23px", height: "23px" }}/>
                        <img src={insta} style={{ width: "20px", height: "20px" }}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
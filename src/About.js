import React from 'react';
import './About.css';
import azercell from './assets/b-2-c-logo.svg';
import flag from './assets/main-flag_lg.png.webp';
import about from './assets/about.png';
import gif from './assets/azer-gif.gif';
import line from './assets/line.png';
import anlar from './assets/anlar.png';
import telekom from './assets/telekom.png';
import deyer from './assets/deyer.png';
import innovasiya from './assets/innovation.png';
import arzu from './assets/arzu.png';
import tower from './assets/tower.png.webp';
import operator from './assets/operator.png';
import hedefgif from './assets/hedef-gif.gif';
import hands from './assets/hands.png';
import peopledesc from './assets/people-desc.png';
import hellphone from './assets/hell-phone.webp';
import sponsors from './assets/sponsors.png';
import stats from './assets/statistics.png';
import Footer from './Footer';
import statsrow from './assets/stat-row.png';

function About() {
    return (
        <>
            <div className='about'>
                <div className='pages5'>
                    <img src={azercell} style={{ width: "109px", height: "34px" }} />
                </div>
                <p className='ab-desc'>Sənə yaxın gələcək</p>
                <p className='ab-info'>Şirkət haqqında</p>
                <img className='flag' src={flag} />
            </div>
            <div className='about-row'>
                <img className='aboba' src={about}/>
                <img className='gif' src={gif} style={{ width: '600px', height: '338px' }} />
            </div>
            <div className='azer-anlar'>
                <img className='anlar' src={anlar} />
                <img className='line' src={line} />
            </div>
            <p className='strategy-name'>Strategiyamızın dörd sütunu:</p>
            <div className='strategy'>
                <div className='strategy-col'>
                    <img src={telekom} style={{ width: '350px', height: '200px' }} />
                    <img src={deyer} style={{ width: '350px', height: '200px' }} />
                </div>
                <img className='tower' src={tower} />
                <div className='strategy-col'>
                    <img src={innovasiya} style={{ width: '350px', height: '170px' }} />
                    <img src={arzu} style={{ width: '350px', height: '220px' }} />
                </div>
            </div>
            <p className='oper-desc'>Azərbaycanın aparıcı mobil operatoru</p>
            <p className='oper'>Coğrafi və demoqrafik əhatə dairəsi və bazar payı baxımından şəksiz lider.</p>
            <img className='operator' src={operator} />
            <img className='stats' src={stats}/>
            <img className='statsrow' src={statsrow} />
            <div className='gifs-row'>
                <img className='gifsec' src={hedefgif} />
                <div className='gifs-col'>
                    <p className='gif-name'>Biz hədəflərimizə doğru əzmlə addımlayırıq</p>
                    <p className='gif-desc'>Bir millət nə zaman uğur əldə edə bilər?! Cəmiyyətə fayda bəxş etmək üçün hamılıqla BİRLİKDƏ öyrənib, inkişaf edib, çalışıb nümunəvi işlər ərsəyə gətirdikdə! Azercell-li olaraq bizim də məqsədimiz çox sadədir: Azərbaycanda hər bir kəs üçün bağlantını asanlaşdırmaq, həyatı daha dolğun etmək… Azercell Bağlantını asanlaşdırır, həyatı daha dolğun edirik. Azərbaycanımızın hər qarışında!</p>
                    <div className='gif-btn'>Ətraflı</div>
                </div>
            </div>
            <div className='gifs-row'>
                <div className='gifs-col'>
                    <p className='gif-desc'>İnsanlar və Cəmiyyət</p>
                    <p className='gif-name'>Korporativ Sosial Məsuliyyət</p>
                    <p className='gif-desc'>KSM siyasətimizi şirkətimizin strateji məqsədinə əsasən həyata keçiririk; “Baglantını asanlaşdırır, həyatı daha dolğun edirik.”</p>
                    <div className='gif-btn'>Ətraflı</div>
                </div>
                <img className='hands' src={hands} />
            </div>
            <div className='people-back'>
                <img src={peopledesc} style={{ width: '630px', height: '500px' }} />
            </div>
            <div className='gifs-row'>
                <img className='hellphone' src={hellphone}/>
                <div className='gifs-col'>
                    <p className='gif-desc'>İnnovasiya</p>
                    <p className='gif-name'>İnnovativ rəqəmsal həllər təqdim edən yenilikçi şirkətik</p>
                    <p className='gif-desc'>Ölkəyə bir sıra yenilikləri ilk dəfə olaraq məhz Azercell gətirib: GSM texnologiyası, öncədən ödəmə sistemi, mobil internet xidmətləri, 24/7 Telefon Mərkəzi (*1111), 7/7 Ön Masa xidmətləri, Azercell Ekspres ofisləri, M2M, 4G texnologiyası, 5G şəbəkəsi test rejimində, telekommunikasiya sektorunda ilk dəfə olaraq özündə həm bank əməliyyatları, həm də mobil rabitə imkanlarını birləşdirən Azercell Fintek, abunəçilərə öz ehtiyaclarına uyğun tarif yaratmağa imkan verən tarif paket “İstəsən”, mobil və onlayn müştəri xidmətləri, sosial media üzərindən müştəri xidmətləri, mobil elektron imza xidməti “Asan İmza” və s.</p>
                </div>
            </div>
            <div className='gifs-row'>
                <div className='gifs-col'>
                    <p className='gif-desc'>Nailiyyətlərimiz</p>
                    <p className='sponsors-name'>Cəmiyyətin inkişafına verdiyimiz töhfələr daim qiymətləndirilir</p>
                    <p className='gif-desc'>Sosial layihələrin həyata keçirilməsi dayanıqlılıq strategiyamızın əsas hissəsidir.  Layihələrimiz təhsil, ətraf-mühit, sosial rifah, iqtisadi inkişaf və s. kimi bir çox sahələri əhatə edir.</p>
                </div>
                <img className='sponsors' src={sponsors}/>
            </div>
            <div className='forest'>
                <p className='forest-name'>Dayanıqlıq</p>
                <p className='forest-desc'>Yenilikçi olmaqla yanaşı ətraf aləmin qeydinə qalırıq. Bütün fəaliyyət göstərdiyimiz ərazilərdə daim daha yaxşı bir dünya üçün çalışırıq.</p>
                <div className='forest-wrap'>
                    <div className='fiveg'></div>
                    <div className='saglam'></div>
                    <div className='mesuliyet'></div>
                    <div className='etika'></div>
                    <div className='melumat'></div>
                </div>
            </div>
            <div className='otchet-row'>
                <p className='otchet-name'>Azərbaycanın qeyri-neft sektorunun ən böyük vergi ödəyicilərindən biri</p>
                <p className='otchet-desc'>Azercell ölkənin telekommunikasiya sektorunun inkişafına və sosial rifahının artırılmasına yönəlmiş layihələrin həyata keçirilməsinə 2 milyarda yaxın ABŞ dolları sərmayə qoyub</p>
            </div>
            <div className='otchet'>
                <div className='sixt'></div>
                <div className='sevent'></div>
                <div className='eighte'></div>
                <div className='ninet'></div>
                <div className='twenty'></div>
                <div className='twentyone'></div>
                <div className='twentytwo'></div>
            </div>
            <Footer/>
        </>
    )
}
export default About;
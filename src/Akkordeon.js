import React, { useEffect } from 'react';
import './Akkordeon.css';

const Akkordeon = () => {
    useEffect(() => {
      const accordionToggles = document.querySelectorAll('.js-accordionTrigger');
  
      const skipClickDelay = (e) => {
        e.preventDefault();
        e.target.click();
      };
  
      const setAriaAttr = (el, ariaType, newProperty) => {
        el.setAttribute(ariaType, newProperty);
      };
  
      const setAccordionAria = (el1, el2, expanded) => {
        switch (expanded) {
          case "true":
            setAriaAttr(el1, 'aria-expanded', 'true');
            setAriaAttr(el2, 'aria-hidden', 'false');
            break;
          case "false":
            setAriaAttr(el1, 'aria-expanded', 'false');
            setAriaAttr(el2, 'aria-hidden', 'true');
            break;
          default:
            break;
        }
      };
  
      const switchAccordion = (e) => {
        e.preventDefault();
        console.log("triggered");
        const thisAnswer = e.target.parentNode.nextElementSibling;
        const thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
          setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
          setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('animateIn');
      };
  
      for (let i = 0, len = accordionToggles.length; i < len; i++) {
        accordionToggles[i].addEventListener('click', switchAccordion, false);
      }
  
      return () => {
        for (let i = 0, len = accordionToggles.length; i < len; i++) {
          accordionToggles[i].removeEventListener('click', switchAccordion, false);
        }
      };
    }, []);
  
    return (
      <div className="container">
        <div className="accordion">
          <dl>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">MND nədir?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>MND - Mobil Nömrələrin Daşınması deməkdir. Bu xidmət abunəçilərə mobil nömrəni dəyişmədən istənilən mobil operator şəbəkəsinə qoşulmaq imkanı verir. </p>
            </dd>
            <dt>
              <a href="#accordion2" aria-expanded="false" aria-controls="accordion2" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">
              Niyə məhz Azercell?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion2" aria-hidden="true">
              <p>Azercell ölkənin lider və innovativ həllər təqdim edən mobil operator şirkətidir:</p>
            </dd>
            <dt>
              <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" className="accordion-title accordionTitle js-accordionTrigger">
              Digər operatorlardan Azercell-ə necə keçmək olar?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed" id="accordion3" aria-hidden="true">
              <p>Mobil nömrəni Azercell şəbəkəsinə daşımaq üçün şəxsiyyət vəsiqəsi ilə Azercell Eksklüziv ofisləri və ya rəsmi dilerlərə yaxınlaşmaq lazımdır. Müraciət əsasında yeni SIM-kart təqdim edilir.</p>
              <p><b>Qeyd:</b> Abunə muqaviləsi</p>
            </dd>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">Mövcud nömrəni saxlamaqla Azercell-ə keçmək olar?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>MND xidməti vasitəsilə abunəçilər mövcud nömrələrini saxlayaraq mobil operatorlarını dəyişə bilərlər.</p>
            </dd>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">Nömrənin daşınması üçün nə qədər vaxt tələb olunur?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>Mobil nömrənin daşınmasına dair hər hansı bir çətinlik yaranmadığı təqdirdə, 3 iş günü ərzində xidmətin aktiv olunması haqqında (1 saat öncədən) abunəçiyə SMS-bildiriş göndərilir.</p>
            </dd>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger"> MND üçün əsas qaydalar hansılardır?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>MND zamanı aşağıdakı tələblərə əməl edilməlidir:</p>
              <ul>
                <li>Nömrə müraciət edən şəxsin adına olmalıdır;</li>
                <li>Nömrə ən azı 90 gün istifadədə olmalıdır;</li>
                <li>Nömrədə son MND əməliyyatından ən azı 90 gün keçməlidir;</li>
                <li>Nömrənin rəsmi istifadəçisi və mobil operator arasında yekunlaşmamış məhkəmə işi olmamalıdır;</li>
                <li>Cari mobil operatorun sistemində abunəçiyə aid məlumatlar düzgün qeyd edilməlidir.</li>
              </ul>
              <p><b>Qeyd:</b>  Data nömrələrin digər mobil operatora daşınması mümkün deyil.</p>
            </dd>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">Mobil şəbəkə operatorunu hansı müddət aralığında dəyişə bilərəm?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>Abunəçi hər 90 gündən bir mobil operatoru dəyişmək hüququna malikdir.</p>
            </dd>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">MND müraciətimi necə ləğv edə bilərəm?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>Müraciətin edilməsindən sonra 8 iş saatı ərzində müvafiq sənədləri təqdim etməklə nömrələrin daşınması sorğusunu ləğv etmək mümkündür.</p>
            </dd>
          </dl>
        </div>
      </div>
    );
  };
  

export default Akkordeon;

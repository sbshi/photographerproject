import React, { useEffect } from 'react';
import './Question.css';

const Question = () => {
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
      <div className="container11">
        <div className="accordion11">
          <dl>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">İnternet paketini necə sifariş edə və ya dəyişə bilərəm?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>İnternet paketini əldə etmək və ya dəyişmək üçün aşağıda üsullardan biri istifadə edilə bilər:</p>
              <p><b>Ətraflı</b></p>
            </dd>
            <dt>
              <a href="#accordion2" aria-expanded="false" aria-controls="accordion2" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">
              İnternet ayarlarını (9595) necə quraşdırmaq olar?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion2" aria-hidden="true">
              <p>İnternet ayarları 9595 vasitəsilə və ya telefon menyusu üzərindən quraşdırıla bilər.</p>
            </dd>
            <dt>
              <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" className="accordion-title accordionTitle js-accordionTrigger">
              Mənim üçün ən uyğun internet paketi hansıdır?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed" id="accordion3" aria-hidden="true">
              <p>Azercell-in geniş çeşidli <b>internet təklifləri</b>  sadə paketlərdən tutmuş limitsiz, yüksək sürətli internet paketi təkliflərini əhatə edir.</p>
              <p><b>Ətraflı</b></p>
            </dd>
            <dt>
              <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="accordion-title is-collapsed accordionTitle js-accordionTrigger">Azercell-in günlük 250MB internet paketini necə aktivləşdirmək olar?</a>
            </dt>
            <dd className="accordion-content accordionItem is-collapsed is-expanded" id="accordion1" aria-hidden="true">
              <p>Günlük 250MB internet paketini aşağıdakı üsullarla aktivləşdirmək olar:</p>
              <p><b>Ətraflı</b></p>
            </dd>
          </dl>
        </div>
      </div>
    );
  };
  

export default Question;

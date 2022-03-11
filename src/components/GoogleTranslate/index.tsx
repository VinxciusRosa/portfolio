import { useState, useEffect } from 'react';
import "./style.scss";
import PT from "./../../assets/img/br.png"
import EN from "./../../assets/img/en.png"
import ES from "./../../assets/img/es.png"


type LangsProps = "pt"|"en"|"es"|"";
declare const window: any;
export function GoogleTranslate(){
    const [defaultLang, setDefaultLang] = useState<LangsProps>("pt");
    
    useEffect(() => {
        // handleButton(window.comboGoogleTradutor.value);
    }, []);
    
    function changeEvent(el: any) {
        el.fireEvent ? el.fireEvent('onchange') : el.dispatchEvent(new Event("change"));
    }
    function changeLang(lang: LangsProps){
        if (window.comboGoogleTradutor) {
            window.comboGoogleTradutor.value = lang;
            changeEvent(window.comboGoogleTradutor); // Trigger select lang
            
            handleButton(lang);
        }
    }
    function handleButton(lang: LangsProps){
        if(lang === "pt"){
            const iFrame: any = document.querySelector(".goog-te-banner-frame.skiptranslate");
            if(!iFrame){ return; }
            const iconClose = iFrame.contentWindow.document.body.querySelector(".goog-close-link");
            
            iconClose.dispatchEvent(new Event("click"));
        }
        if(lang === ""){ lang = "pt"; }
        setDefaultLang(lang);
    }
    return (
        <div className='idioma'>
            <ul>
                <li><a href={void(0)} className={`mx-2 ${defaultLang === "pt" ? "active" : ""}`} onClick={() => changeLang("pt")}><img src={PT} alt="BRASIL" /></a></li>
                <li><a href={void(0)} className={`mx-2 ${defaultLang === "es" ? "active" : ""}`} onClick={() => changeLang("es")}><img src={ES} alt="Espanhol"/></a></li>
                <li><a href={void(0)} className={`mx-2 ${defaultLang === "en" ? "active" : ""}`} onClick={() => changeLang("en")}><img src={EN} alt="Inglês"/></a></li>
            </ul>
        </div>
    )
}
/* eslint-disable no-unused-vars */
import LanguageSwitcher from './LanguageSwitcher'
import { useState } from 'react'
function Page() {
    const [currentLang, setCurrentLang] = useState('AR')
    const displayLang = () => {
        switch (currentLang) {
            case 'AR':
                return 'السلام عليكم'
            case 'EN':
                return 'Hello'
            case 'FR':
                return 'Bonjour'
            case 'SP':
                return 'Hola'
            case 'IT':
                return 'Ciao'
            case 'CH':
                return '你好 '
            default:
                return 'السلام عليكم'
        }
    }
    return (
        <>
            <LanguageSwitcher onLanguageChange={(value) => setCurrentLang(value)} />
            <hr />
            Current Lang: {currentLang}
            <hr />
            {currentLang === 'FR' ?
                <div>Bonjour, Lorem ipsum dolor sit amen consectetur adipocyte élit. Quinqua, voltâtes.</div> :
                ""}
            <div className='alert alert-danger' role='alert'>
                <strong>{displayLang()}</strong></div>


        </>
    )
}

export default Page
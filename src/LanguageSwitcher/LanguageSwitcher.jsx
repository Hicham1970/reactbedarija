/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

// pour envoyer des données du parent vers le  child on utilise les props
// pour envoyer des données du child vers le parent on utilise les Callbacks
// le composant LanguageSwitcher (child) reçoit un callback du composant Page (parent). Cette callback est appelé lorsque l'utilisateur clique sur un élément de la liste de langues. Cette fonction est passée en tant que prop onLanguageChange. Lorsqu'un élément de la liste est cliqué, la fonction handleLangChange est appelée, qui empêche le comportement par défaut du lien (la navigation vers une nouvelle page) et appelle la fonction onLanguageChange avec l'attribut data-lang de l'élément cliqué en tant que paramètre. Cette valeur est ensuite utilisée pour changer la langue de l'application.

function LanguageSwitcher({ onLanguageChange }) {
    const handleLangChange = (e) => {
        e.preventDefault()
        console.log(e.target.dataset.lang)
        // on envoie la valeur de l'attribut data-lang de l'élément cliqué à la fonction onLanguageChange du composant parent (Page)
        onLanguageChange(e.target.dataset.lang)

    }
    return (
        <>
            <ul className='nav justify-content-center'>
                <li className='nav-item'>
                    <a className='nav-link active' data-lang='AR' onClick={handleLangChange} href="#">Arabic</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' data-lang='EN' onClick={handleLangChange} href="#">English</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' data-lang='FR' onClick={handleLangChange} href="#">French</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' data-lang='SP' onClick={handleLangChange} href="#">Spanish</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' data-lang='IT' onClick={handleLangChange} href="#">Italian</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' data-lang='CH' onClick={handleLangChange} href="#">Chinese</a>
                </li>
            </ul>
        </>
    )
}

export default LanguageSwitcher
import React from 'react';
import styles from './Financials.module.css'
import FileInput from '../../Componenets/FileInput/Fileinput.jsx';


const Financials =() => {
    return (
        <div className={styles.financialsContainer}>
            <div> <FileInput /></div>
            
        </div>
    )
}

export default Financials;
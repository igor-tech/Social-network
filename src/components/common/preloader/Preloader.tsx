import React from 'react';
import styles from '../../Users/users.module.css';
import preloaderSVG from '../../../assets/loader/loader.svg';

const Preloader = () => {
    return (
        <div className={styles.preloader}><img src={preloaderSVG} alt="loader"/></div>
    );
};

export default Preloader;

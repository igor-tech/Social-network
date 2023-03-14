import React from 'react';
import {Space, Spin} from 'antd';

const Preloader = () => {
    return (
        // <div className={styles.preloader}><img src={preloaderSVG} alt="loader"/></div>
        <Space
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100
            }}><Spin size="large"/></Space>
    );
};

export default Preloader;

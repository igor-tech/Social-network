import React from 'react';
import {Space, Spin} from 'antd';

const Preloader = () => {

    return (
        <Space
            style={{
                background: 'white',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100
            }}><Spin size="large"/></Space>
    );
};

export default Preloader;

import React from 'react';
import { Puff } from 'react-loader-spinner';
import { useLoading } from './LoadingContext';

const Loader = () => {
    const { loading } = useLoading();

    if (!loading) return null;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.8)'
        }}>
            <Puff color="#00BFFF" height={100} width={100} />
        </div>
    );
};

export default Loader;
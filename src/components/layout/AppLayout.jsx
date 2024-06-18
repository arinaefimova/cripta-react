import React, { useContext } from 'react';
import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppSider from './AppSider';
import CryptoContext from '../../context/CryptoContext';
const AppLayout = () => {
    const {loading} = useContext(CryptoContext)
    
    if (loading) {
        return (
            <Spin fullscreen />
        )

    }
    return (
        <Layout >
        <AppHeader />
        <Layout>
            <AppSider />
            <AppContent />
        </Layout>

    </Layout>
    );
}

export default AppLayout;

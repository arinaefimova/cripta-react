import React, { useContext } from 'react';
import { Layout, Typography } from 'antd';
import CryptoContext from '../../context/CryptoContext';
import PortfolioChart from '../PortfolioChart';
import AssetsTable from '../AssetsTable';
const { Content } = Layout;
const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh-60px)',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem'
};


const AppContent = () => {
    const {assets,crypto} = useContext(CryptoContext)
    return (
        <Content style={contentStyle}>
            <Typography.Title level={3} style={{textAlign:'left', color:'white' }}>Portfolio: {assets.map(asset=>{
                const coin = crypto.find(c=>c.id===asset.id)
                return asset.amount * coin.price
            }).reduce((acc,v)=>(acc+=v),0).toFixed(4) }$
            </Typography.Title>
            <PortfolioChart/>
            <AssetsTable/>
        </Content>
    );
}

export default AppContent;

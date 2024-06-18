import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
import { Select, Space, Button, Modal, Drawer } from 'antd';
import CryptoContext from '../../context/CryptoContext';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';

const headerStyle = {
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

};

const AppHeader = () => {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const [coin, setCoin] = useState(null)

    const { crypto } = useContext(CryptoContext)

    const handleSelect = (value) => {
        setCoin(crypto.find(c => c.id === value))
        setModal(true)
    };


    useEffect(() => {
        const keypress = e => {
            if (e.key === '/') {
                setSelect(true)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => removeEventListener('keypress', keypress)
    }, [])


    return (
        <div>
            <Header style={headerStyle}>
                <Select

                    style={{
                        width: 250,
                    }}
                    open={select}
                    onSelect={handleSelect}
                    onClick={() => setSelect(prev => !prev)}
                    value='press / to open'
                    //    optionLabelProp='label'
                    options={crypto.map((coin) => ({
                        label: coin.name,
                        value: coin.id,
                        icon: coin.icon,
                    }))}
                    optionRender={(option) => (
                        <Space>
                            <img style={{ width: 20 }} src={option.data.icon} alt="" /> {option.data.label}
                        </Space>
                    )}
                />
                <Button type="primary" onClick={()=> setDrawer(true)}>Add Asset</Button>
                <Modal open={modal}
                    footer={null}

                    onCancel={() => setModal(false)}
                >
                    <CoinInfoModal coin={coin} />
                </Modal>
                <Drawer width={600} title="Add Asset" onClose={()=> setDrawer(false)} open={drawer} destroyOnClose> 
                    <AddAssetForm onClose={()=>setDrawer(false)}/>
                </Drawer>
            </Header>

        </div>
    );
}

export default AppHeader;

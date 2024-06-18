import React from 'react';
import {Flex, Typography} from 'antd'
const CoinInfo = ({coin, withSymbol}) => {
    return (
        <div>
             <Flex align='center'>
                <img src={coin.icon} alt="" style={{ width: 40, marginRight: 10 }} />
                <Typography.Title level={2} style={{ margin: 0 }}>({coin.symbol}){coin.name}</Typography.Title>

                <Typography.Title level={2} style={{ margin: 0 }}>
                    {withSymbol && <span>({coin.symbol})</span>}
                 {coin.name}
                </Typography.Title>
            </Flex>
        </div>
    );
}

export default CoinInfo;

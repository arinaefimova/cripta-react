import React from 'react';
import { Divider, Flex, Tag, Typography } from 'antd'
import CoinInfo from './Coin.info';
const CoinInfoModal = ({ coin }) => {
    return (
        <>
           <CoinInfo coin={coin}/>
            <Divider/>
            <Typography.Paragraph>
                <Typography.Text strong> 1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ?'green' : 'red'}>{coin.priceChange1h}%</Tag>
                <Typography.Text strong> 1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ?'green' : 'red'}>{coin.priceChange1d}%</Tag>
                <Typography.Text strong> 1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ?'green' : 'red'}>{coin.priceChange1w}%</Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price: </Typography.Text>
                {coin.price.toFixed(4)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price BTC: </Typography.Text>
                {coin.priceBtc.toFixed(4)}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: </Typography.Text>
                {coin.marketCap.toFixed(4)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Contract Address: </Typography.Text>
                {coin.contractAddress}
            </Typography.Paragraph>
        </>
    );
}

export default CoinInfoModal;

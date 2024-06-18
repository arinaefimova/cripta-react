import React, { useContext } from 'react';
import { Table } from 'antd';
import CryptoContext from '../context/CryptoContext';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Price, $',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.amount - b.amount,
    },
];


const AssetsTable = () => {

    const { assets} = useContext(CryptoContext)
    const data = assets.map((a)=>({
        key:a.id,
        name:a.name,
        price:a.price,
        amount: a.amount
    }))

    return (
        <Table
            pagination={false}
            columns={columns}
            dataSource={data}
        />
    );
}

export default AssetsTable;

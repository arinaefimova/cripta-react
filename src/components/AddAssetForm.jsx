import React, { useContext, useRef, useState, } from 'react';
import { Select, Space, Typography, Flex, Divider, Button, Form, InputNumber, DatePicker, Result } from 'antd';
import CryptoContext from '../context/CryptoContext';
import CoinInfo from './Coin.info';

const validateMessages = {
    required: "${label} is required!",
    types: {
        number: "${label} is not a valid number"
    },
    number: {
        range: '${label} must be between ${min} and ${max}'
    }
};

const AddAssetForm = ({onClose}) => {
    const { crypto, addAsset } = useContext(CryptoContext)
    const [coin, setCoin] = useState(null)
    const [submitted, setSubmitted] = useState(null)
    const [form] = Form.useForm()
    const assetRef = useRef()
    if (submitted) {
        return (
            <Result
                status="success"
                title="New Asset Added"
                subTitle={`Added ${assetRef.current.amount} of ${assetRef.current.price} by price ${24}`}
                extra={[
                    <Button type="primary" key="console" onClick={onClose}>
                        Close
                    </Button>
                    
                ]}
            />
        )
    }

    if (!coin) {
        return <Select

            style={{
                width: '100%',
            }}

            onSelect={(value) => setCoin(crypto.find(c => c.id === value))}

            placeholder='Select coin'
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
    }

    function onFinish(values) {
        const newAsset ={
            id:coin.id,
            amount:values.amount,
            price: values.price,
            date:values.date ?.$d ?? new Date()

        }
        assetRef.current =  newAsset
       setSubmitted(true)
       addAsset(newAsset)
    }

    function handleAmountChange(value) {
        // const amount = form.getFieldValue('price')
        form.setFieldsValue({
            total: +(value * coin.price).toFixed(4)
        })
    }
    function handlePriceChange(value) {
        const amount = form.getFieldValue('amount')
        form.setFieldsValue({
            total: +(value * coin.amount).toFixed(4)
        })
    }

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 10,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                price: +coin.price.toFixed(4),

            }}
            onFinish={onFinish}
            validateMessages={validateMessages}

        >
           <CoinInfo coin={coin}/>
            <Divider />



            <Form.Item
                label="Amount"
                name="amount"
                rules={[
                    {
                        required: true,
                        type: 'number',
                        min: 0,

                    },
                ]}
            >
                <InputNumber placeholder='Enter coin amount' onChange={handleAmountChange} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"

            >
                <InputNumber onChange={handlePriceChange} disabled style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Date & Time"
                name="date"

            >
                <DatePicker showTime />
            </Form.Item>
            <Form.Item
                label="Total"
                name="total"

            >
                <InputNumber disabled style={{ width: '100%' }} />
            </Form.Item>



            <Form.Item

            >
                <Button type="primary" htmlType="submit">
                    Add Asset
                </Button>
            </Form.Item>
        </Form>

    );
}

export default AddAssetForm;

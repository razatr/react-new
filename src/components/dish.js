import React, { useState } from 'react'
import Button from 'antd/lib/button'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

function Dish(props) {
    const [amount, decrease, increase] = useCounter(0)
    return (
        <div>
            <div className="dish-title">
                <span>{props.name}</span>
                <span style={{ float: 'right' }}>{props.price}</span>
            </div>
            <Button onClick={decrease}
                    size="small"
                    type="primary"
                    shape="circle"
                    icon={<MinusOutlined/>}/>
            <span className="amount">{amount}</span>
            <Button onClick={increase}
                    size="small"
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined/>}/>
        </div>
    )
}

function useCounter(initialValue) {
    const [value, setAmount] = useState(initialValue)
    return [
        value,
        () => setAmount(value <= 0 ? 0 : value - 1),
        () => setAmount(value + 1)
    ]
}

export default Dish
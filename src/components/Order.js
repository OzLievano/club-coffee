import React from 'react'

const Order = ({order}) => {
    return (
        <div>
           <p>{order.name}</p>

           <p>{order.coffeeType}</p>
           <p>{order.temp}</p>
        </div>
    )
}

export default Order

import React from 'react'
import { useStateValue } from '../context/stateProvider';

const OrdersContainer = () => {
  const [{ pendingOrders }, dispatch] = useStateValue();

  return (
    <div className='flex justify-center mt-5'>
      <table className='border-collapse border-slate-500 border-spacing-2'>
        <tbody>
          <tr className='border-b-[2px] border-slate-500'>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>
              <img src="img/cu2.png" style={{height: '6rem', width: '6rem'}} alt="item"/>
            </td>
            <td className='text-center' style={{width:'20rem'}}>Curry</td>
            <td className='text-center' style={{width:'20rem'}}>2</td>
            <td className='text-center' style={{width:'20rem'}}>Ksh 450</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersContainer
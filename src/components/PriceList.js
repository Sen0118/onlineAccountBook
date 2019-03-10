import React from 'react'
import IosPlane from 'react-ionicons/lib/IosPlane'
import IosCreateOutline from 'react-ionicons/lib/IosCreateOutline'
import IosClose from 'react-ionicons/lib/IosClose'
import PropTypes from 'prop-types'

const PriceList = ({ items,onModifyItem,onDeleteItem}) =>{
    return (
        <ul className="list-group list-group-flush">
    {
        items.map((item) => (
        <li className="list-group-item d-flex
        justify-content-between align-items-center"
        key={item.id}
        >
        <span className="col-1 badge badge-primary">
        <IosPlane
          className="rounded-circle"
          fontSize="30px"
          style={{backgroundColor:'#007bff',padding:'5px'}}
          color={'#fff'}
/>
        </span>
        <span className="col-5">
         {item.title}
        </span>
        <span className="col-2 font-weight-bold">
        {(item.category.type ==='income')?'+':'-'}
         {item.price}RMB
        </span>
        <span className="col-2">
        {item.date}
        </span>
        <a className="col-1"
        onClick={() => {onModifyItem(item)}}>
        <IosCreateOutline
        className="rounded-circle"
        fontSize="30px"
        style={{backgroundColor:'#28a745',padding:'5px'}}
        color={'#fff'}
        />
        </a>
        <a className="col-1 "
        onClick={() => {onDeleteItem(item)}}>
        <IosClose
        className="rounded-circle"
        fontSize="30px"
        style={{backgroundColor:'#dc3545',padding:'5px'}}
        color={'#fff'}
        />
        </a>
        </li>
        ))
    }
     </ul>
    )
}

PriceList.propTypes = {
    items:PropTypes.array.isRequired,
    onModifyItem:PropTypes.func.isRequired,
    onDeleteItem:PropTypes.func.isRequired
}

export default PriceList;

import React, { Component, Fragment } from 'react'

import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import PriceList from '../components/PriceList'
import MonthPicker from '../components/MonthPicker'

import { LIST_VIEW, CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME,parseToYearAndMonth } from '../utility'


const  categories ={
  "1":{
    "id": "1",
    "name": "travel",
    "type": "outcome",
  },
  "2": {
    "id": "2",
    "name": "travel",
    "type": "income"
}
}

const items = [
  {
    "id": 1,
    "title": "traveling to YunNan",
    "price": 200,
    "date": "2018-09-10",
    "cid":1
  },
  {
    "id": 2,
    "title": "traveling to YunNan",
    "price": 400,
    "date": "2018-09-10",
    "cid":2
  },
  {
    "id": 3,
    "title": "salary",
    "price": 400,
    "date": "2018-09-10",
    "cid":2
  }
]
const account = {
  income: 600,
  outcome: 500
}
class Home extends Component {
  constructor(props){
  super(props)
  this.state ={
    items,
    currentDate:parseToYearAndMonth(),
    tabView:LIST_VIEW,
  }
  }
  changeView = ()=>{
    this.setState({
     view:viewName
    }
    )
  }
   changeDate = ()=>{

   }
   
   modifyItem =()=>{

   }
   
   createItem = ()=>{

   }
   deleteItem =()=>{
     
   }

  render() {
    const {item,currentDate,tabView} = this.state
    const itemsWithCategory = items.map(item => {
      item.category = categories[item.cid]
      return item
    })
    let totalIncome = 0,totalOutcome =0
    itemsWithCategory.forEach(
      item=> {
        if(item.category.type === TYPE_OUTCOME){
          totalIncome += item.price
        }else{
          totalIncome += item.price
        }
      }
    )
    return (
      <Fragment>
        <header className="App-header">
         <div className="row mb-5">
         <img src={logo} className="App-logo" alt="logo" />
         </div>
         <div className="row">
          <div className="col">
          <MonthPicker 
          year={currentDate.year}
          month={currentDate.month}
          onChange={()=>{}}
          />
          </div>
          <div className="col">
         {/* <TotalPrice
         income={totalIncome}
         outcome={totalOutcome}
         /> */}
          </div>
         </div>
        </header>
        <div className="content-area py-3 px-3">
         <ViewTab activeTab={tabView} onTabChange={()=>{}}/>
         {/* <CreatBtn onClick={()=>{}}/> */}
         <PriceList
         items={itemsWithCategory}
         onModifyItem={()=>{}}
         onDeleteItem={()=>{}}
         />
        </div>
      </Fragment>
    )
  }
}

export default Home

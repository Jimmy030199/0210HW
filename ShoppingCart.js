// 此練習題出自react官網新文件
// https://beta.reactjs.org/learn/updating-arrays-in-state#challenges

import { useState } from 'react'
import Summary from './Summary'
import ShoppingList from './ShoppingList'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
    max:10,
    price:10
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
    max:10,
    price:20


  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
    max:10,
    price:30


  },
  {
    id: 3,
    name: '日式焙茶巧克力酥',
    count: 5,
    max:10,
    price:40

  },
  {
    id: 4,
    name: '波浪洋芋片',
    count: 1,
    max:10,
    price:50

  },
]

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)
  const countAll = products.map((v,i)=>{ return v.count}).reduce((acc,v)=>{return acc+v},0)
  const totalPrice = products.map((v,i)=>{ return (v.count)*(v.price) }).reduce((acc,v)=>{return acc+v},0)


  return (  
<>
    <Summary totalPrice={totalPrice} countAll={countAll}/>
    <hr/>
    <ul>
    <ShoppingList products={products} setProducts={setProducts}/>
    </ul>
    </>)
}

export default ShoppingCart
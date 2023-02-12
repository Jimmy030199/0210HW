function ShoppingList (props){
const {products,setProducts}=props
    return <>
        {products.map((product) => (
      
      <li key={product.id}>
        {product.name} (<b>{product.count}</b>)(<b>{product.price}元</b>)




        <button
          onClick={() => {
            // 處理數量count屬性的增加
            const newProducts = products.map((v, i) => {
          
              if (v.id === product.id && v.count<10) {
                return { ...v, count: v.count + 1 }
              } else {
                return { ...v }
              }
            })

            setProducts(newProducts)
          }}
        >
          +
        </button>
        <button onClick={()=>{const prodMax = products.map((v,i)=>{if(product.id===v.id){return {...v,count: 10}} return {...v}}) 
        setProducts(prodMax)}
        }>MAX</button>
        <button
          onClick={() => {
            //預期: 目前商品數量是1了，再按下去-按鈕，數量會變0 -> 即刪除它
            if (product.count === 1) {
              //1, 2
              const newProducts = products.filter((v, i) => {
                return v.id !== product.id
              })

              //3
              setProducts(newProducts)

              return //跳出函式，下面的程式碼不會再執行
            }

            // 處理數量count屬性的減少
            const newProducts = products.map((v, i) => {
              if (v.id === product.id) {
                return { ...v, count: v.count - 1 }
              } else {
                return { ...v }
              }
            })

            setProducts(newProducts)
          }}
        >
      -
        </button>
        <button onClick={()=>{const deleData = products.filter((v,i)=>{return v.id !== product.id })
        setProducts(deleData)}}>DELETE</button>
      </li>
    ))}
    </>
}

export default ShoppingList
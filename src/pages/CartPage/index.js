import { useEffect, useState } from "react";

function CartPage(){
  // 버튼 하나 만들고 누를 때 마다 1씩 증가된 값이 화면에 보이도록
  // 처리.
  // useState 이용
  let [count, setCount] = useState(0);
  useEffect(()=>{
    // for(let i=0; i<10000; i++){
    //   console.log(i);
    // }
    console.log('안녕 난 useEffect Mounted!')
  });

  return (
    <div>
      <h3>Cart Page</h3>
      <button onClick={()=>{
        setCount(count+1)
      }}>버튼</button>
      <p>{count}</p>
    </div>
  )
}

export default CartPage;
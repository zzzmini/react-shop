import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { plusCount, minusCount, deleteCart, ascSort, descSort } from '../../store';

function CartPage() {
  let userName = useSelector((state) => {
    return state.userName;
  });

  let productStock = useSelector((state) => {
    return state.productStock;
  });

  let cartData = useSelector((state) => {
    return state.cartData;
  });

  let totalPrice = 0;
  for(let i=0; i < cartData.length; i++){
    totalPrice = totalPrice + 
      (cartData[i].count * cartData[i].price)
  }
  
  console.log('totalPrice' , totalPrice)

  totalPrice = totalPrice.toLocaleString("ko-KR")

  console.log(userName);
  console.log(productStock);
  console.log(cartData);

  // 스토어에 있는 변경함수 호출하는 택배기사를 생성
  let dispatcher = useDispatch();
  let loggindUser = useSelector((state) => {
    return state.loggindUser;
  });
  console.log('Loggind userName = ' ,loggindUser);

  let imsiData = useSelector((state)=>{
    return state.imsiData;
  })

  console.log(imsiData)
  return (
    <div>
      {/* {loggindUser}<button onClick={()=>{
        dispatcher(changeUserName());
      }}>이름실행</button>
      {imsiData.groupName} : {imsiData.name}
      <button onClick={()=>{
        dispatcher(changeGroup());
      }}>소속사</button>
      <span onClick={()=>{
        dispatcher(addAge(3));
      }}>➕</span>{imsiData.age} */}
      <p>{loggindUser}님</p>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>
              상품명
              <span onClick={()=>{
                dispatcher(ascSort())              
              }}>▲</span>
              <span onClick={()=>{
                dispatcher(descSort())              
              }} >▼</span>
            </th>
            <th>단가</th>
            <th>금액</th>
            <th>수량</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((x) => {
            return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.price}</td>
                <td>{x.price * x.count}</td>
                <td>
                  {x.count} &nbsp;
                  <span onClick={()=>{
                    dispatcher(plusCount(x.id))
                  }}>➕</span>
                  <span onClick={()=>{
                    dispatcher(minusCount(x.id))
                  }}>➖</span>
                </td>
                
                <td onClick={()=>{
                  dispatcher(deleteCart(x.id))
                }}>❌</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>총 금액</td>
            <td colSpan={2}> {totalPrice}원</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CartPage;

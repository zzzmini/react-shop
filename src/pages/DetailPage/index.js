/* eslint no-restricted-globals: ["off"] */
import { useParams } from "react-router-dom";
import Discount from "./Discount";
import { useEffect, useState } from "react";

function Detail(props) {
  let [alert, setAlert] = useState(true);
  
  // useEffect 구조
  //useEffect(()=>{
    // second
  //}, 몇초 - first)
  //,[] -- third });  ---> [] 만 주고 비워두면
  // 얘는 프로그램 시작할 때 딱 1번만 실행...

  // 2초 후에 alert state -> false
  useEffect(()=>{
    let myTimer = setTimeout(() => {setAlert(false)}, 2000)
    return () => {
      clearTimeout(myTimer)
    }
  }, []);

  let [count, setCount] = useState(0);

  useEffect(()=>{
    // 호출 시(랜더링 이후) 실행 되는 곳
    console.log('렌더링 될 때마다 실행')
    // 종료 시(사라질 때,또는 재랜더링 때) 실행 되는 곳
    return()=>{
      console.log('종료 시 실행')
    }
  },[count])


  // 없을 때 : 매번 실행
  // [ ] : 딱 1번만 실행
  // [ 스테이트 ] : 스테이트가 바뀔 때마다 실행

  let { id } = useParams();

  let findProduct = props.product.find(function(x){
    return x.id == id;
  });

  if(findProduct == null){
    alert('찾는 상품이 없습니다.');
    history.back();
    return;
  } else {
    let shoes = props.product[id];
    let i = parseInt(id) + 1;
    
    let strPrice = shoes.price.toLocaleString("ko-KR");
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/images/shoes${i}.jpg`} width={"100%"}/>
          </div>
          { 
            alert == true? <Discount/> : null
          }
          <div className="col-md-6">
            <h4 className="pt-5">{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{strPrice}원</p>
            <button onClick={()=>{
              setCount(count+1)
            }}>초기화 {count}</button>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;

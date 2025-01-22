import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import data from "./data/shoes-data";
import { useState } from "react";
import Product from "./component/Product";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage"
import axios from "axios";

function App() {
  const [product, setProduct] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate("/")
            }}>
              {/* <Link to={"/"}>Home</Link> */}
              Home
            </Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("/cart")
            }}>
              {/* <Link to={"/cart"}>Cart</Link> */}
              Cart
            </Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("/about")
            }}>
              {/* <Link to={"/cart"}>Cart</Link> */}
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" onClick={()=>{
        navigate("/detail")
      }}></div>

      {/* 라우터 처리 */}
      <Routes>
        <Route path="/main" element={<div><MainPage product={product}/></div>} />
        <Route index element={<div>홈.....</div>} />
        <Route path="/detail/:id" element={
          <div>
            <DetailPage product={product} />
          </div>} 
          />
        <Route path="/cart" element={
          <div>
            <CartPage />
          </div>} 
        />
        <Route path="/about" element={<div><AboutPage/></div>}>
          <Route path="member" element={<div>직원소개 페이지</div>}></Route>
          <Route path="location" element={<div>길안내 페이지</div>}></Route>
        </Route>
        <Route path="*" element={
          <div>
            <h4>
              404. That’s an error.
            </h4>
            <p>
              The requested URL /fdjsalflsadjfldsa was not found on this server. That’s all we know.
            </p>
          </div>
        } />
      </Routes>

      <Container>
      <Row className="justify-content-md-center">
        {product.map((p, index) => {
          return (
            <Col>
              <Product product={product} index={index} />
            </Col>
          );
        })}
      </Row>
      <button onClick={()=>{
        axios
          .get('https://zzzmini.github.io/js/react_data_02.json')
          .then((result)=>{
            // 요청 성공시 처리할 곳
            console.log(result.data)
            let temp = [... product, ...result.data];
            console.log(temp)
            setProduct([... temp]);
          })
          .catch(()=>{
            // 요청 실패시 처리할 곳
            console.log("실패함.")
          });
      }}>데이터 가져오기</button>
    </Container>
    </div>
  );
}

export default App;

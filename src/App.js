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
        <Route path="/" element={<div>메인페이지</div>} />
        <Route index element={<div>홈.....</div>} />
        <Route path="/detail/:id" element={
          <div>
            <DetailPage product={product} />
          </div>} 
          />
        <Route path="/cart" element={<div>장바구니페이지</div>} />
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
      </Container>
    </div>
  );
}

export default App;

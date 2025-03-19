import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data/shoes-data";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import RecentPage from "./pages/RecentPage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// 구글 로그인 상태여부를 파악해 주는 기능
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  // localStorage에 초기설정
  // useEffect(()=>{
  //   localStorage.setItem('recent', JSON.stringify([]));
  // }, [])

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // 구글 로그인 상태 저장 스테이트
  const [userInfo, setUserInfo] = useState(null);
  const [product, setProduct] = useState(data);

  let navigate = useNavigate();

  let outData = localStorage.getItem("data");
  console.log(JSON.parse(outData));

  localStorage.setItem("data", JSON.stringify(product));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
        console.log("=== Login Success : ", userInfo);
      } else {
        console.log("=== Logout Success : ", userInfo);
      }
    });
  }, [auth, navigate, userInfo]);

  function firebaseLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("=====" , result)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function firebaseLogout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserInfo(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              {/* <Link to={"/"}>Home</Link> */}
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/recent");
              }}
            >
              {/* <Link to={"/"}>Home</Link> */}
              Recent
            </Nav.Link>
            {userInfo === null ? null : (
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                {/* <Link to={"/cart"}>Cart</Link> */}
                Cart
              </Nav.Link>
            )}
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              {/* <Link to={"/cart"}>Cart</Link> */}
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {userInfo === null ? (
              <Nav.Link onClick={firebaseLogin}>Login</Nav.Link>
            ) : (
              <div className="userInfoArea">
                <span>{userInfo.displayName}</span>
                <img src={userInfo.photoURL} 
                  className="userImage"></img>
                <Nav.Link onClick={firebaseLogout}>Logout</Nav.Link>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        onClick={() => {
          navigate("/detail");
        }}
      ></div>

      {/* 라우터 처리 */}
      <Routes>
        <Route
          index
          element={
            <div>
              <MainPage product={product} />
            </div>
          }
        />
        <Route path="/main" element={<MainPage product={product} />}>
          <Route path=":id" element={<DetailPage product={product} />} />
        </Route>
        <Route
          path="/recent"
          element={
            <div>
              <RecentPage />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div>
              <CartPage />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <AboutPage />
            </div>
          }
        >
          <Route path="member" element={<div>직원소개 페이지</div>}></Route>
          <Route path="location" element={<div>길안내 페이지</div>}></Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h4>404. That’s an error.</h4>
              <p>
                The requested URL /fdjsalflsadjfldsa was not found on this
                server. That’s all we know.
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import NavBar from "./page/NavBar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. nav bar
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품디테일을 눌렀을 때 로그인이 안되어 있는 경우 로그인 페이지로 이동한다
// 5. 로그인인 되어있을 경우 상품디테일 페이지로 이동한다
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다
// 7. 로그인을 라면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다
// 8. 상품을 검색할 수 있다

function App() {
  const [authonticate, setAuthonticate] = useState(false); // true면 로그인, false면 로그아웃

  useEffect(() => {
    console.log(authonticate);
  }, [authonticate]);

  return (
    <div>
      <NavBar authonticate={authonticate} setAuthonticate={setAuthonticate} />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthonticate={setAuthonticate} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<PrivateRoute authonticate={authonticate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

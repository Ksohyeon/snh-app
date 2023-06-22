import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authonticate, setAuthonticate }) => {
  const manuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "S&H Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    console.log("key press");
    if (event.key == "Enter") {
      let keyword = event.target.value;

      navigate(`/?q=${keyword}`);
    }
  };

  const logout = (event) => {
    event.preventDefault();
    setAuthonticate(false);
    alert("로그아웃 되었습니다!");
    navigate("/");
  };

  useEffect(() => {
    console.log(authonticate);
  }, [authonticate]);

  return (
    <div>
      <div className="login-btn" onClick={authonticate ? logout : goToLogin}>
        <FontAwesomeIcon icon={faUser} className="" />
        {authonticate ? <div>로그아웃</div> : <div>로그인</div>}
      </div>
      <div className="logo">
        <img
          className="logo-img"
          src={`${process.env.PUBLIC_URL}/snh.png`}
          alt="React"
        ></img>
      </div>
      <div className="menu-area">
        <div className="space"></div>
        <ul className="manu-list">
          {manuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="menu-search">
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={search}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

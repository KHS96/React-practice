import {useEffect, useState} from 'react';
import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';
import Main from './home/Main';

export default function Login() {
    const baseUrl = "http://localhost:8080";

    const [ email , setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ errMsg, setErrMsg] = useState("");
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        //   'Authorization': `Bearer ${token}`
        }
      };
    const formData = new FormData();
    const navigate = useNavigate();


    const handleFormSubmit = (event) => {
        formData.append("email",email);
        formData.append("password",password);
        event.preventDefault();
        axios
          .post(`${baseUrl}/api/v1/users/login`, formData,config)
          .then((response) => {
            // 로그인 성공 시 처리할 작업
            if(response.data.state == 200){
                navigate("/Main");
            }else{
                alert("로그인 정보를 확인");
            }
            console.log(response.data);
          })
          .catch((error) => {
            setErrMsg(error.response.data.message);
            alert(errMsg);
          });
      };


    return (
    <>  
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="StarBucks Clone Site"/>
        <meta name="keywords" content="StarBucks, Clone, Site"/>
        <link rel="stylesheet" href="./assets/css/pages/login.css"/>
        <link rel="stylesheet" href="./assets/css/layouts/header.css"/>
        <link rel="stylesheet" href="./assets/css/common/color.css"/>
        <title>Document</title>
        <header className="shadow-none">
            <a href=""><img src="./assets/images/icons/close.png"
                    className="back-button" /></a>
        </header>
        <section className="login-section">
            <div className="login-top">
                <h2>로그인</h2>
                <img src="./assets/images/starbucks-logo.png" alt=""/>
                <p className="title">안녕하세요. <br /> 스타벅스입니다.</p>
                <p className="sub">회원 서비스 이용을 위해 로그인 해주세요.</p>
            </div>
            <div className="login">
                <form action="">
                    <input type="text" name="email" id="email" placeholder="아이디" onChange={(event) => setEmail(event.target.value)}/><br/>
                    <input type="password" name="password" id="password" placeholder="비밀번호" onChange={(event) => setPassword(event.target.value)} /><br/>
                </form>
            </div>
            <div className="login-btn">
                <div className="login-btn-inner">
                    <ul>
                        <li><a>아이디 찾기</a></li>
                        <li><a>비밀번호 찾기</a></li>
                        <li><a>회원가입</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="submit-container">
            <a href="">
                <button type="submit" onClick={handleFormSubmit}>다음</button>
            </a>
        </section>
    </>
    )
}



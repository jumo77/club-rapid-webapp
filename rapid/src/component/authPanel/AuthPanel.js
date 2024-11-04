import "../../css/auth.css"
import Register from "./Register";
import LogIn from "./LogIn";
import {useEffect} from "react";
import {BrowserView, MobileView} from "react-device-detect";

export default function AuthPanel() {

    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');


        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    }, []);

    return (
        <section className="section-body">
            <BrowserView>
                <div className="container3" id="container">
                    <Register set="form-container sign-up"/>
                    <LogIn set="form-container sign-in"/>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>로그인</h1>
                                <p>이미 가입하셨나요?</p>
                                <button className="hidden" id="login">로그인</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>가입하기</h1>
                                <p>아직 가입하지 않으셨다면, 지금 바로 가입하세요!</p>
                                <button className="hidden" id="register">가입</button>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="container3-mobile" id="container">
                    <Register set="form-container-mobile sign-up-mobile"/>
                    <LogIn set="form-container-mobile sign-in-mobile"/>
                    <div className="toggle-container-mobile">
                        <div className="toggle-mobile">
                            <div className="toggle-panel-mobile toggle-left-mobile">
                                <h1>로그인</h1>
                                <p>이미 가입하셨나요?</p>
                                <button className="hidden" id="login">로그인</button>
                            </div>
                            <div className="toggle-panel-mobile toggle-right-mobile">
                                <h1>가입하기</h1>
                                <p>아직 가입하지 않으셨다면, 지금 바로 가입하세요!</p>
                                <button className="hidden" id="register">가입</button>
                            </div>
                        </div>
                    </div>
                </div>
            </MobileView>
        </section>
    )
}
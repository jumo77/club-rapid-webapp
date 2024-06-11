function LogIn(props){
    return (
        <div className={props.set}>
            <form>
                <h1>로그인</h1>
                <input type="number" placeholder="학번"/>
                <input type="password" placeholder="비밀번호"/>
                <a href="#">Forget Your Password?</a>
                <button>로그인</button>
            </form>
        </div>
    )
}

export default LogIn
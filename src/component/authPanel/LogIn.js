function LogIn({set}){

    const onClick = ()=>alert("관리자에게 문의하세요")

    return (
        <div className={set}>
            <form>
                <h1>로그인</h1>
                <input type="number" placeholder="학번"/>
                <input type="password" placeholder="비밀번호"/>
                <p className="pw" onClick={onClick}>비밀번호를 잊으셨나요?</p>
                <button>로그인</button>
            </form>
        </div>
    )
}

export default LogIn
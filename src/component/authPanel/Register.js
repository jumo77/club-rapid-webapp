import {useForm} from "react-hook-form";
import sha256 from "crypto-js/sha256";

function Register(props) {

    const {register, handleSubmit}=useForm();
    const onSubmit = (data, e) => {
        alert("1학기 모집은 마감되었습니다.");
	alert("2학기에 지원 부탁드립니다.");
    };
    return (
        <div className={props.set}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>회원 신청</h1>
                <input type="number" placeholder="학번" {...register("stdNum")}/>
                <input type="password" placeholder="비밀번호" {...register("password")}/>
                <input type="text" placeholder="이름" {...register("name")}/>
                <div className="flex">
                <input type="text" placeholder="학과" {...register("major")}/>
                <input type="text" placeholder="성별" {...register("gender")}/>
                <input type="number" placeholder="학년" {...register("grade")}/>
                </div>
                <button type="submit">신청</button>
            </form>
        </div>
    )
}

export default Register

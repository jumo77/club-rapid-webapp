import {useState} from "react";
import {apiUrl, register} from "../apiUrl";

export default function Register({set}) {

    const [id, setId] = useState(0);
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [major, setMajor] = useState("");
    const [gender, setGender] = useState("");
    const [grade, setGrade] = useState(0);

    const onSubmit = async (e) => {
        e.preventDefault()

        if (id - 2000000000 < 0) {
            alert("학번을 확인해주세요")
            return
        }
        if (phone === 0) {
            alert("전화번호를 입력해주세요")
            return
        }
        if (grade === 0) {
            alert("학년을 입력해주세요")
            return
        }
        if (gender === "") {
            alert("성별을 입력해주세요")
            return
        }
        if (name === "") {
            alert("이름을 입력해주세요")
            return
        }
        if (pw === "") {
            alert("비밀번호를 입력해주세요")
            return
        }
        if (major === "") {
            alert("전공을 입력해주세요")
            return
        }

        const payload = {
            id: id.toString(),
            name: name,
            password: pw,
            phoneNum: phone,
            major: major,
            gender: gender,
            grade: grade,
        }

        await fetch(apiUrl + register, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then(res => alert(res))
    };

    return(
    <div className={set}>
        <form onSubmit={onSubmit}>
            <h1>회원 신청</h1>
            <input type="number" placeholder="학번"
                   onChange={(e) => setId(e.target.value)}/>
            <input type="password" placeholder="비밀번호"
                   onChange={(e) => setPw(e.target.value)}/>
            <input type="text" placeholder="이름"
                   onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="전화번호"
                   onChange={(e) => setPhone(e.target.value)}/>
            <div className="flex">
            <input type="text" placeholder="학과" className="left-margin-0"
                   onChange={(e) => setMajor(e.target.value)}/>
            <input type="text" placeholder="성별"
                   onChange={(e) => setGender(e.target.value)}/>
            <input type="number" placeholder="학년" className="right-margin-0"
                   onChange={(e) => setGrade(e.target.value)}/>
            </div>
            <button type="submit">신청</button>
        </form>
    </div>
    )
}
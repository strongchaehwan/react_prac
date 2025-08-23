//간단한 회원가입폼
//1. 이름
//2. 생년월일
//3.국적
//4. 자기소개
import { useState } from "react";

function Register() {
  //   const [name, setName] = useState("임채환");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   const onChageName = (e) => {
  //     //setName(e.target.value);
  //     setInput({
  //       ...input,
  //       name: e.target.value,
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     //setBirth(e.target.value);
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     //setCountry(e.target.value);
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     //setBio(e.target.value);
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="ja">일본</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
}

export default Register;

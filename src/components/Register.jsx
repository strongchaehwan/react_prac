//간단한 회원가입폼
//1. 이름
//2. 생년월일
//3.국적
//4. 자기소개
import { useState } from "react";

function Register() {
  const [name, setName] = useState("임채환");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChageName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChageName} placeholder={"이름"} />
      </div>

      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="ja">일본</option>
        </select>
        {country}
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
        {bio}
      </div>
    </div>
  );
}

export default Register;

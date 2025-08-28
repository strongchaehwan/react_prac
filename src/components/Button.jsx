// 구조 분해할당
function Button({ text }) {
  //이벤트 객체(e)
  //이벤트 핸들러
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
    >
      {text}
    </button>
  );
}

export default Button;

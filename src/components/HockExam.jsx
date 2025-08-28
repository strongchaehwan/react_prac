import useInput from "../hooks/useinput";

// 3가지 hook 관련팁
// 1. 함수 컨포넌트,커스텀 훅 내부에서만 호출가능
// 2. 조건부로 호출될수는없다. ex) if, for
// 3. 나만의 훅 직접 만들수있따.

function HookExam() {
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
}

export default HookExam;

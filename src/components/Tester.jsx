"use client";
const Tester = () => {
  const redir = () => {
    window.location.href = "http://localhost:3000/start";
  };
  return <div onClick={() => redir()}>Tester</div>;
};
export default Tester;

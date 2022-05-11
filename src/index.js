import "./styles.css";

const onClick = () => {
  var num = document.getElementById("data").value;
  const result = (num * 600 + 9480) / num;
  const div = document.createElement("div");
  const resultText = `現在、一日あたり${result}円です。`;
  div.innerText = resultText;
  console.log(div);
  //document.getElementById("resultbox").appendChild(div);
};

document.getElementById("calc").addEventListener("click", () => onClick());

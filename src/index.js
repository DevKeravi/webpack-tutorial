import { hello, add } from "./util";
import "./style.css";
import "./header.css";
import logo from "./images/logo.png";
const text = hello("<h1>나는 케라비!!</h1>");
const num = add(1, 2);
const img = `<img src="${logo}" alt="keravi" />`;
document.getElementById("root").innerHTML = img + text + num;

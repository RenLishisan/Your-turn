const divScreen = document.querySelector("#screen"); //取到屏幕的“div“
const btnCreateNumber = document.querySelector("#createNumber"); //取到“取号”按钮
const btnCallNumber = document.querySelector("#callNumber"); //取到“叫号”按钮
const spanNewNumber = document.querySelector("#newNumber"); //取到“当前号码”
const spanQueue = document.querySelector("#queue"); //取到“当前列队”
// <-------取号操作开始-------->
let n = 0; // 先定义一个“n”初始化为0，用于显示当前队列号码。
let queue = []; //再生成一个空数组，用来存放“当前列队的号码”

btnCreateNumber.onclick = () => {
  n += 1; //每当点击“取号”按钮便进行“n + 1”的操作。
  queue.push(n); //将每次叫到的号push到队列里面去
  spanNewNumber.innerText = n; //“当前号码展示取“n”的最新值。当前队列也依然展现出来。
  spanQueue.innerText = JSON.stringify(queue); //通过数组的形式显示出“当前列队”
};
// <-------取号操作结束-------->

// <-------叫号操作开始-------->
btnCallNumber.onclick = () => {
  const m = queue.shift(); //将叫的号码从队列里面弹出去
  divScreen.innerText = `报告${m}号的巨巨，现在轮到你啦！`; //在屏幕展示出被弹出的号码
  spanQueue.innerText = JSON.stringify(queue); //通过数组的形式显示出“当前列队”
};

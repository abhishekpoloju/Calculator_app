const screen = document.querySelector(".first_class2");

const button = document.querySelectorAll("button");

let stack=[]

button.forEach((element) => {
  //this line to get the class name of the button object
  let a = element.getAttribute("class");
  let b = Number(a[a.length - 1]);
  if (b || b === 0) {
    element.addEventListener("click", () => {
      screen.innerText += b;
    });
  } else {
    if (a === "button_=") {
        element.addEventListener("click", () => {
          let q = screen.innerText;
          let r = Number(q[q.length - 1]);
          if ((r || r === 0 || q[q.length-1]===")") && stack.length===0) {
            let ans = eval(screen.innerText);
            screen.innerText = ans;
          }
        });
      
    } else if (a === "button_ac") {
      element.addEventListener("click", () => {
        screen.innerText = null;
        stack=[]
      });
    } else if (a === "button_x") {
      element.addEventListener("click", () => {
        let text = screen.innerText;
        let temp=text[text.length-1]
        text = text.slice(0, -1);
        screen.innerText = text;
        if(temp==="("){
          stack.pop()
        }else if(temp===")"){
          stack.push("(")
        }
      });
    } else if (a === "button_dot") {
      element.addEventListener("click", () => {
        let tempString = screen.innerText;
        let i = tempString.length;
        let flag = true;
        while (i--) {
          let number = Number(tempString[i]);
          if (!number) {
            if (tempString[i] === ".") {
              flag = false;
            }
            break;
          }
        }
        if (flag) {
          screen.innerText += ".";
        }
      });
    } else if (a === "button_(") {
      element.addEventListener("click",()=>{
       let q=screen.innerText
       let r=Number(q[q.length-1])
       if(!r||q[q.length-1]==="("){
        let text = a[a.length - 1];
        screen.innerText += text;
        stack.push(text)
       }
      })
    } else if (a === "button_)") {
      element.addEventListener("click",()=>{
        let q=screen.innerText
        let r=Number(q[q.length-1])
        if(r||r===0||q[q.length-1]==="("){
          let text = a[a.length - 1];
          if(stack[stack.length-1]==="("){
            screen.innerText += text;
            stack.pop()
          }
        } 
      })
    } else if(a==="button_-"){
      element.addEventListener("click",()=>{
        let q = screen.innerText;
        let r = Number(q[q.length - 1]);
        if (r || r === 0||(q[q.length - 1]!=="+"&&q[q.length - 1]!=="-")) {
          let text = a[a.length - 1];
          screen.innerText += text;
        }
      })
    }
    else {
      element.addEventListener("click", () => {
        let q = screen.innerText;
        let r = Number(q[q.length - 1]);
        if (r || r === 0) {
          let text = a[a.length - 1];
          screen.innerText += text;
        }
      });
    }
  }
});


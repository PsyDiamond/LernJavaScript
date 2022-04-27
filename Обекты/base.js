// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  console.log(menu);

  multiplyNumeric(menu);
  console.log(menu);

  // после вызова функции
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
console.log(menu);

  function multiplyNumeric(obj) {
      for(let key in obj) {
          let val = obj[key];
          if(!isNaN(val)) obj[key]*=2;
      }
  }
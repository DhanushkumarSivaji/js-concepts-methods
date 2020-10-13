// example one

//in example one the this keyword refers to local obj
const obj = {
    "name":"Dhanush",
    "age":25,
    getAge (){
      console.log(this)
    }
  }
  
  obj.getAge()
  
  //example 2
  //this refers to the global obj
  function getWindowObj(){
    console.log(this)
  }
  
  getWindowObj()
  
  
  //example 3
  
  const complicatedObj = {
    "name":"i am complicated",
    "complicationLevel": ["low","medium","high"],
    getMe(){
      this.complicationLevel.forEach((level)=>{
        console.log(this,level)
      },this)
    }
  }
  
  complicatedObj.getMe()
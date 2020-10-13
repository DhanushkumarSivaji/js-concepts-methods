let name = {
    firstName:"Dhanush",
    lastName: "kumar"
  }
  let name2 = {
    firstName:"Sachin",
    lastName: "SenthilRaj"
  }
  let printFullName =  function (homeTown , state){
    console.log(this.firstName +" " + this.lastName + " from " + homeTown + ", " + state)
  }

  //call - which is used to invoke a function by passing the object as a reference - so this referes to this -passsing obj
  printFullName.call(name , "Karaikal" , "Pondicherry")

  //apply is used to combine the passing arguments as an array - second arguments is an array
  printFullName.apply(name2 , ["Kumbakonam" , "TamilNadu"])

  //bind is simialr to call which takes the copy of the method and use it when it needed , doest not invoke the mothod directly
  let consoleFullName = printFullName.bind(name2,"Kumbakonam" , "TamilNadu")
  consoleFullName()
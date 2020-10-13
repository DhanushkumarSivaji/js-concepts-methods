function getMessage(body){
    let year = new Date().getFullYear();
    // return `<h1>{body}</h1>`
    return `This year is ${year}`
  }
  
  console.log(getMessage())
Function.prototype.myCall = function(obj,...args){
 obj = obj || window  
 obj.fn = __self
 const res = obj.fn(...args) 
 delete obj.fn
 return res
}

Function.prototype.myApply = function(obj,arr){
    obj = obj || window  
    obj.fn = __self
    
    const res = obj.fn() 
    delete obj.fn
    return res
}
Function.prototype.myBind = function(obj,...args){
    obj = obj || window  
    obj.fn = __self
    return 
}
const a = {
    name:"lisi"
}

function test(arg){
  console.log(arg,this.name)
}

test.myCall(a,"12")
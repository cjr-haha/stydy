// 在函数或者方法fn直向前要添加功能，在不改变fn内部代码的情况下合成代码，最终调用还是使用fn
Function.prototype.before = function(beforeFn){
    let __self = this
    return function(){
        beforeFn.apply(this,arguments)
        return __self.apply(this,arguments)
    }
}

Function.prototype.after = function(afterFn){
    let __self = this
    return function(){
        var res = __self.apply(this,arguments)
        afterFn.apply(this,arguments)
        return res
    }
}

const aop = {
    age:3,
    name:"lisi",
    grade:"3年级",
    fn:function(){
        console.log("姓名:",this.name)
    }
} 
function addAge(){
    console.log("年龄:",this.age)
}
function addGrade(){
    console.log("年级:",this.age)
}
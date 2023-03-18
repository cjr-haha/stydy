const debounce = function (fn,delay) {
    var timer = null
    return function (...arg) {
        clearTimeout(timer)
        var __self = this
        timer = setTimeout(function () {
            fn.apply(__self,arg)
        }, delay)
    }
}
// 让timer初始值为0可以保证最少执行一次
const throttle = function(fn,delay){
    let timer = 0
    return function(){
        var __self = this
        var nowTime = Date.now()
        if(nowTime - timer > delay){
            fn.apply(__self,arguments)
            timer = nowTime
        } 
    }
}

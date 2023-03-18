// 原型链继承：利用原型链来实现继承。将父类实例化放在子类的proytype上，这样所有的子类实例都能通过原型链共享父类实例
// 1.已经实例化，传入参数，所有的子类实例共享
// 2.子类实例化的时候不能传参给父类构造函数，拥有自己私有的数据
function Parents(address,phoneNumber){
    this.address = address
    this.phoneNumber = phoneNumber
    this.change = (address,phoneNumber)=>{
        this.address = address
        this.phoneNumber = phoneNumber
    }
}

function Children(name,age){
    this.name = name
    this.age = age
    this.change = (name,age)=>{
        this.name = name
        this.age = age
    }
}

Children.prototype = new Parents("sichuan","123")
let lisi = new Children("lisi",13)
let lisi = new Children("lisi",13)
console.log()


























const protypeInherit = function(){

}
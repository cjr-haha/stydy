
(function(){
  var Chain = function(fn){
    if(typeof fn !='function'){
      throw new Error('请传入函数')
    }
    this.fn = fn
    this.nextNode = null
  }
  Object.assign(Chain.prototype,{
    setNext:function(newstFn){
      if(typeof newstFn !='function'){
        throw new Error('请传入函数')
      }
      var chain = new Chain(newstFn)
      this.nextNode = chain
      return this.nextNode
    },
    handleProcess:async function(){
      let res
      res = this.fn && await this.fn.apply(this,arguments)
      if(res === false){
        return
      }
      this.nextNode && this.nextNode.handleProcess()
    }
  })
  window.Chain = Chain
})()

var getQueryVariable = function (variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}
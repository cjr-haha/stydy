// 发布订阅
function Emitter() {
  this.listener = {};
}
// 发布 发布相关事件以后以后执行cb
Emitter.prototype.emit = function (key, ...args) {
  if (this.listener[key]) {
    this.listener[key].map((cb, index) => {
      cb(...args);
    });
    return;
  }
};
// 订阅 将某个指令发出后要执行的函数先注册
Emitter.prototype.on = function (key, cb) {
  if (this.listener[key]) {
    this.listener[key].push(cb);
    return;
  }
  this.listener[key] = [cb];
};
//移除某个订阅事件的某个订阅者
Emitter.prototype.removeAllListener = function (key, cb) {
  if (this.listener[key]) {
    this.listener[key] = this.listener[key].filters((item, index) => {
      return item.cb !== cb;
    });
    return;
  }
};
//移除某个订阅事件的所有订阅者
Emitter.prototype.removeListeners = function (key) {
  if (this.listener[key]) {
    delete this.listener[key];
  }
};
if (!window["Emit"]) {
  window["Emit"] = new Emitter();
}

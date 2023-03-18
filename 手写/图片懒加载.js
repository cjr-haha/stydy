const imgLazy = function(doms){
    const viewHeight = window.innerHeight
    let len = 1
    return function(){

        const lazyFun =function(el){
            doms.forEach(item => {
                const details = el.getBoundingClientRect()
                if(img.dataset.src && details < viewHeight && len<doms.length){
                       item.src =  img.dataset.src
                       len++
                       item.removeAttribute('data-src')
                }
                if(len>=doms.length){
                    window.removeEventListener('onScroll',lazyFun)
                }
            
            });
        }
        window.addEventListener('onScroll',lazyFun)
       
    }
}
// 图片懒加载：利用自定义属性将真是图片地址放在属性里面,src不放东西,只有当图片出现在可视区域当中的时候
// 才加载图片,当图片加载完毕就
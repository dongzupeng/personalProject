//当被绑定的元素插入到 DOM 中时
function insertDom(el, binding) {		
    el.onmousedown = function (e) {
        var x = e.clientX - el.offsetLeft;
        var y = e.clientY - el.offsetTop;
        document.onmousemove = function (eve) {
            el.style.left = eve.clientX - x + "px";
            el.style.top = eve.clientY - y + "px";
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}
export default insertDom
/* 输入一个值，返回其数据类型 */
export function type(val) {
  return Object.prototype.toString.call(val)
}

/* 数组去重 */
//方法1
export function unique1(arr) {
  return [...new Set(arr)]
}
//方法2
export function unique2(arr) {
  let obj = {}
  return arr.filter(item => {
    if (!obj[item]) {
      obj[item] = true
      return true
    }
  })
}
//方法3
export function unique3(arr) {
  let newArr = []
  arr.forEach(item => {
    if (newArr.indexOf(item) == -1) {
      newArr.push(item)
    }
  })
  return newArr
}
//方法4
export function unique4(arr) {
  let newArr = []
  arr.forEach(item => {
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  })
  return newArr
}

/* 去除连续的字符串  */
export function uniqStr(str) {
  return str.replace(/(\w)\1+/g, '$1')
}

/* 深拷贝 （深克隆不考虑函数） */
export function deepClone(obj, result) {
  var result = result || {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] == 'object' && obj[prop] !== null) {
        // 引用值(obj/array)且不为null
        if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
          // 对象
          result[prop] = {};
        } else {
          // 数组
          result[prop] = [];
        }
        deepClone(obj[prop], result[prop])
      } else {
        // 原始值或func
        result[prop] = obj[prop]
      }
    }
  }
  return result;
}

/* 返回当前时间 */
export function getDateTime() {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
    month = checkTime(month);
    day = checkTime(day);
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}

/* 获取视口的尺寸 */
export function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}

/* 检测是否回文字符串 */
export function isPalina(str) {
  if (Object.prototype.toString.call(str) !== '[object String]') {
    return false;
  }
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 截取url参数 */
export function getUrlParams(str) {
  let newStr = str.substr(str.indexOf('?') + 1)
  // 通过 reduce 方法进行处理
  let newObj = newStr.split('&').reduce((obj, item) => ((obj[item.split('=')[0]] = item.split('=')[1]), obj), {})
  return newObj
}

/* 防抖 */
export function debounce(handle, delay) {
  var timer = null;
    return function () {
        var _self = this,
            _args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handle.apply(_self, _args)
        }, delay)
    }
}

/* 节流 */
export function throttle(handle, wait) {
  var lastTime = 0;
    return function (e) {
        var nowTime = new Date().getTime();
        if (nowTime - lastTime > wait) {
            handle.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}

/* 本地存储 */
export const store = {
  set: function(name, value, day) { // 设置
    let d = new Date()
    let time = 0
    day = (typeof(day) === 'undefined' || !day) ? 1 : day // 时间,默认存储1天
    time = d.setHours(d.getHours() + (24 * day)) // 毫秒
    localStorage.setItem(name, JSON.stringify({
      data: value,
      time: time
    }))
  },
  get: function(name) { // 获取
    let data = localStorage.getItem(name)
    if (!data) {
      return null
    }
    let obj = JSON.parse(data)
    if (new Date().getTime() > obj.time) { // 过期
      localStorage.removeItem(name)
      return null
    } else {
      return obj.data
    }
  },
  clear: function(name) { // 清空
    if (name) { // 删除键为name的缓存
      localStorage.removeItem(name)
    } else { // 清空全部
      localStorage.clear()
    }
  }
}

/* 设备判断：android、ios、web */
export function isDevice() { // 判断是android还是ios还是web
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/iPhone\sOS/i) === 'iphone os' || ua.match(/iPad/i) === 'ipad') { // ios
    return 'iOS'
  }
  if (ua.match(/Android/i) === 'android') {
    return 'Android'
  }
  return 'Web'
}

/* 判断是否为微信 */
export function isWx() { // 判断是否为微信
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  }
  return false
}

/* 文本复制功能 */
export function copyTxt (text, fn) { // 复制功能
  if (typeof document.execCommand !== 'function') {
    console.log('复制失败，请长按复制')
    return
  }
  var dom = document.createElement('textarea')
  dom.value = text
  dom.setAttribute('style', 'display: block;width: 1px;height: 1px;')
  document.body.appendChild(dom)
  dom.select()
  var result = document.execCommand('copy')
  document.body.removeChild(dom)
  if (result) {
    console.log('复制成功')
    typeof fn === 'function' && fn()
    return
  }
  if (typeof document.createRange !== 'function') {
    console.log('复制失败，请长按复制')
    return
  }
  var range = document.createRange()
  var div = document.createElement('div')
  div.innerhtml = text
  div.setAttribute('style', 'height: 1px;fontSize: 1px;overflow: hidden;')
  document.body.appendChild(div)
  range.selectNode(div)
  var selection = window.getSelection()
  console.log(selection)
  if (selection.rangeCount > 0) {
    selection.removeAllRanges()
  }
  selection.addRange(range)
  document.execCommand('copy')
  typeof fn === 'function' && fn()
  console.log('复制成功')
}

/* 时间与时间戳转换 */
export const stamp = { // 时间，时间戳转换
  getTime: function(time) { // 时间转10位时间戳
    let date = time ? new Date(time) : new Date()
    return Math.round(date.getTime() / 1000)
  },
  timeToStr: function (time) {//时间戳转日期
    let date = new Date(parseInt(time) * 1000);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let m = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    let s = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    // return y + '-' + MM + '-' + d;
  },
}

/* 常用正则验证 */
export const checkStr = function(str, type) { // 常用正则验证，注意type大小写
  switch (type) {
    case 'phone': // 手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'tel': // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card': // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ': // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': // 邮箱
      return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(str)
    case 'money': // 金额(小数点2位)
      return /^\d*(?:.\d{0,2})?$/.test(str)
    case 'IP': // IP
      return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(str)
    case 'date': // 日期时间
      return /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
    case 'number': // 数字
      return /^[0-9]$/.test(str)
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': // 中文
      return /^[\u4E00-\u9FA5]+$/.test(str)
    case 'lower': // 小写
      return /^[a-z]+$/.test(str)
    case 'upper': // 大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    default:
      return true
  }
}

/* base64图片下载功能 */
export const downloadFile = function(base64, fileName) { //base64图片下载功能
  let base64ToBlob = function(code) {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType
    });
  };
  let aLink = document.createElement('a');
  let blob = base64ToBlob(base64); //new Blob([content]);
  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
}


 /* 
 导出excel文件
 request 请求api
 params 请求参数
 excelName 文件名称
 */
 export const exportExcel = function (request, params, excelName){
  request(params).then((res) => {
    const blob = new Blob([res], {type: 'application/vnd.ms-excel;charset=UTF-8'});
    const fileName = excelName.split('.')[0] + ".xlsx";
    if ("download" in document.createElement("a")) {
      // 非IE下载
      const elink = document.createElement("a");
      elink.download = fileName;
      elink.style.display = "none";
      elink.href = URL.createObjectURL(blob);
      document.body.appendChild(elink);
      elink.click();
      URL.revokeObjectURL(elink.href); // 释放URL 对象
      document.body.removeChild(elink);
    } else {
      // IE10+下载
      navigator.msSaveBlob(blob, fileName);
    }
  });
}







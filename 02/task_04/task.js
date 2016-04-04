/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var inputCity = document.getElementById("aqi-city-input").value;
	var inputValue = document.getElementById("aqi-value-input").value;
	if (!(/^[\u4e00-\u9fa5a-zA-Z]+$/i).test(inputCity)) {
		alert("输入的城市必须为中英文字符");
		return;
	}
	if (!(/^[0-9]+$/i).test(inputValue)) {
		alert("输入的值必须是整数");
		return;
	}

	aqiData[inputCity] = inputValue;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";

	for (var city in aqiData) {
		if (aqiData.hasOwnProperty(city)) {
			table.innerHTML += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
		}
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("aqi-table").addEventListener("click", function(event) {
  	if (event.target.tagName === "BUTTON") {
  		delBtnHandle(event.target.parentNode.parentNode.firstChild.innerHTML);
  	}
  });
}

window.onload = function() {
	init();
}
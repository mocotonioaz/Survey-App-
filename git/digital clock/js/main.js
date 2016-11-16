function checkTime(i) {
	if(i < 10) {
		i = "0" + i
	}

	return i
}

function startTime() {
	var currentTime = new Date()

	var hour = currentTime.getHours()
	var minute = currentTime.getMinutes()
	var second = currentTime.getSeconds()

	if (hour > 12) {

		hour = hour - 12;
	}

	minute = checkTime(minute)
	second = checkTime(second)

	document.getElementById('time').textContent = hour + ":" + minute + ":" + second

	setTimeout(function (){
		startTime()
	},1000)
}

document.getElementById('time').addEventListener('onload', startTime(), false)

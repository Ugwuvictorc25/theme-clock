const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");
const secondEl = document.querySelector(".second");
const minuteEl = document.querySelector(".minute");
const hourEl = document.querySelector(".hour");

const dateEl = document.querySelector(".date");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", function (e) {
	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		toggle.innerHtml = "Dark Mode";
	} else {
		html.classList.add("dark");
		toggle.innerHTML = "Light Mode";
	}
});

setTime();
function setTime() {
	const time = new Date();
	const hours = time.getHours();
	const clockHours = hours >= 13 ? hours % 12 : hours;

	const minute = time.getMinutes();
	const second = time.getSeconds();
	const day = time.getDay();
	const month = time.getMonth();
	const date = time.getDate();
	const ampm = hours > 12 ? "AM" : "PM";

	secondEl.style.transform = ` translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;
	minuteEl.style.transform = ` translate(-50%, -100%) rotate(${minute * 6}deg)`;
	hourEl.style.transform = ` translate(-50%, -100%) rotate(${clockHours * (360 / 12)}deg)`;

	document.querySelector(".time").innerHTML = `${hours}:${minute < 10 ? `0${minute}` : `${minute}`} ${ampm}`;
	dateEl.innerHTML = `${days[day]},  ${months[month]} <span class = "circle">${date}</span>`;
}

function scale(range, in_min, in_max, out_min, out_max) {
	return ((range - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

setInterval(setTime, 1000);

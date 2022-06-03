let menuItems = document.querySelectorAll(".menu-item");

let currentTime = document.querySelectorAll(".report-card__current-time");
let previousTime = document.querySelectorAll(".report-card__previous-time");
let cardTitle = document.querySelectorAll(".report-card__title");

fetch("./data.json")
	.then((res) => res.json())
	.then((data) => {
		// default
		for (let i = 0; i < data.length; i++) {
			cardTitle[i].innerHTML = data[i].title;
			currentTime[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
			previousTime[i].innerHTML =
				"Last Week - " + data[i].timeframes.weekly.previous + "hrs";
		}

		menuItems[0].addEventListener("click", () => {
			for (let i = 0; i < data.length; i++) {
				currentTime[i].innerHTML = data[i].timeframes.daily.current + "hrs";
				previousTime[
					i
				].innerHTML = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
			}

			menuItems.forEach((item) => item.classList.remove("active"));
			menuItems[0].classList.add("active");
		});

		menuItems[1].addEventListener("click", () => {
			setTimeValue("weekly", "Week");
			menuItems.forEach((item) => item.classList.remove("active"));
			menuItems[1].classList.add("active");
		});

		menuItems[2].addEventListener("click", () => {
			setTimeValue("monthly", "Month");
			menuItems.forEach((item) => item.classList.remove("active"));
			menuItems[2].classList.add("active");
		});

		function setTimeValue(timeFrame, timeFrameText) {
			menuItems.forEach((item) => item.classList.remove("active"));
			for (let i = 0; i < data.length; i++) {
				currentTime[i].innerHTML =
					data[i].timeframes[timeFrame].current + "hrs";
				previousTime[
					i
				].innerHTML = `Last ${timeFrameText} - ${data[i].timeframes[timeFrame].previous}hrs`;
			}
		}
	});

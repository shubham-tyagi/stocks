const initialPrice = document.querySelector("#initialPrice");
const noOfStocks = document.querySelector("#noOfStocks");
const currentPrice = document.querySelector("#currentPrice");
const message = document.querySelector(".message");
const btnSubmit = document.querySelector("#btnSubmit");
console.log("hello");
btnSubmit.addEventListener("click", btnSubmitHandler);

function btnSubmitHandler() {
	var iniPrice = initialPrice.value;
	var currPrice = currentPrice.value;
	var noStocks = noOfStocks.value;
	if (iniPrice == "" || currPrice == "" || noOfStocks == "") {
		alert("enter All the values");
		return;
	}
	iniPrice = Number(iniPrice);
	currPrice = Number(currPrice);
	noStocks = Number(noStocks);
	if (noStocks < 0) {
		alert("quantity of stocks should be greater than 0");
		return;
	}
	if (iniPrice < 0) {
		alert("Initial Price should be greater than 0");
		return;
	}
	if (currPrice < 0) {
		alert("Current Price should be greater than 0");
		return;
	}
	console.log(typeof iniPrice);
	if (iniPrice > currPrice && noStocks > 0) {
		var loss = (iniPrice - currPrice) * noStocks;
		var lossPercentage = (loss / (iniPrice * noStocks)) * 100;
		message.innerHTML =
			"Your loss is : " +
			loss +
			" your loss percentage is : " +
			lossPercentage.toFixed(2);
		message.style.backgroundColor = "red";
		message.style.border = "1px solid black";
		message.style.padding = "1rem";
		message.style.borderRadius = "1rem";
	} else if (currPrice > iniPrice && noStocks > 0) {
		var profit = (currPrice - iniPrice) * noStocks;
		var profitPercentage = (profit / (iniPrice * noStocks)) * 100;
		// console.log(profitPercentage);
		message.innerHTML =
			"Your profit is : " +
			profit +
			" your profit percentage is : " +
			profitPercentage.toFixed(2);
		message.style.backgroundColor = "green";
		message.style.border = "1px solid black";
		message.style.padding = "1rem";
		message.style.borderRadius = "1rem";
	} else {
		message.innerHTML = "no pain no gain and no gain no pain ";
		message.style.backgroundColor = "grey";
		message.style.border = "1px solid black";
		message.style.padding = "1rem";
		message.style.borderRadius = "1rem";
	}
}

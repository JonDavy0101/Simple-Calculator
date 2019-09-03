
		var plusClick = false;
		var minusClick = false;
		var timesClick = false;
		var divideClick = false;

		var operatorClick = false;

		var originalNumber = 0;
		var appendNumber = 0;
		var viewCalculations = 0;

		function Button(num)
		{
			if ( appendNumber == 0) {
				appendNumber = num;
				//viewCalculations = num.toString();
				
			} else {
				appendNumber = appendNumber + num.toString();
				//viewCalculations = viewCalculations + num.toString();
			}

			appendNumber = parseFloat(appendNumber);
			document.getElementById("calculations").value = appendNumber;
			console.log("PRESSED " + num + " BUTTON")
			console.log("originalNumber = " + originalNumber);
			console.log("appendNumber = " + appendNumber);
			//console.log("viewCalculations = " + viewCalculations);
		}

		function ButtonOperator(operator)
		{
			if (operator == "+") {
				console.log("PRESSED ADDITION BUTTON");

				if (plusClick == true) {
					//originalNumber = parseFloat(originalNumber);
					originalNumber = originalNumber + appendNumber;
					appendNumber = 0;
					plusClick = false;
				} else if (minusClick == true) {
					originalNumber = originalNumber - appendNumber;
					appendNumber = 0;
					minusClick = false;
				} else if (timesClick == true) {
					originalNumber = originalNumber * appendNumber;
					appendNumber = 0;
					timesClick = false;
				} else if (divideClick == true) {
					originalNumber = originalNumber / appendNumber;
					appendNumber = 0;
					divideClick = false;
				} else {
					// Get ready for adding
					originalNumber = appendNumber;
					appendNumber = 0;
				}

				plusClick = true;
				document.getElementById("calculations").value = originalNumber;
				console.log("originalNumber = " + originalNumber);
				console.log("appendNumber = " + appendNumber);
				//console.log("viewCalculations = " + viewCalculations);

			} else if (operator == "-") {
				console.log("PRESSED SUBTRACTION BUTTON");

				if (plusClick == true) {
					originalNumber = originalNumber + appendNumber;
					appendNumber = 0;
					plusClick = false;
				} else if (minusClick == true) {
					originalNumber = originalNumber - appendNumber;
					appendNumber = 0;
					minusClick = false;
				} else if (timesClick == true) {
					originalNumber = originalNumber * appendNumber;
					appendNumber = 0;
					timesClick = false;
				} else if (divideClick == true) {
					originalNumber = originalNumber / appendNumber;
					appendNumber = 0;
					divideClick = false;
				} else {
					// Get ready for subtraction
					originalNumber = appendNumber;
					appendNumber = 0;
				}

				minusClick = true;
				document.getElementById("calculations").value = originalNumber;
				console.log("originalNumber = " + originalNumber);
				console.log("appendNumber = " + appendNumber);
				//console.log("viewCalculations = " + viewCalculations);

			} else if (operator == "*") {
				console.log("PRESSED MULTIPLICATION BUTTON");

				if (plusClick == true) {
					originalNumber = originalNumber + appendNumber;
					appendNumber = 0;
					plusClick = false;
				} else if (minusClick == true) {
					originalNumber = originalNumber - appendNumber;
					appendNumber = 0;
					minusClick = false;
				} else if (timesClick == true) {
					originalNumber = originalNumber * appendNumber;
					appendNumber = 0;
					timesClick = false;
				} else if (divideClick == true) {
					originalNumber = originalNumber / appendNumber;
					appendNumber = 0;
					divideClick = false;
				} else {
					// Get ready for multiplying
					originalNumber = appendNumber;
					appendNumber = 0;
				}

				timesClick = true;
				document.getElementById("calculations").value = originalNumber;
				console.log("originalNumber = " + originalNumber);
				console.log("appendNumber = " + appendNumber);
				//console.log("viewCalculations = " + viewCalculations);

			} else if (operator == "/") {
				console.log("PRESSED DIVISION BUTTON");

				if (plusClick == true) {
					originalNumber = originalNumber + appendNumber;
					appendNumber = 0;
					plusClick = false;
				} else if (minusClick == true) {
					originalNumber = originalNumber - appendNumber;
					appendNumber = 0;
					minusClick = false;
				} else if (timesClick == true) {
					originalNumber = originalNumber * appendNumber;
					appendNumber = 0;
					timesClick = false;
				} else if (divideClick == true) {
					originalNumber = originalNumber / appendNumber;
					appendNumber = 0;
					divideClick = false;
				} else {
					// Get ready for divide
					originalNumber = appendNumber;
					appendNumber = 0;
				}


				divideClick = true;
				document.getElementById("calculations").value = originalNumber;
				console.log("originalNumber = " + originalNumber);
				console.log("appendNumber = " + appendNumber);
				//console.log("viewCalculations = " + viewCalculations);

			} else if (operator == "=") {
				console.log("PRESSED EQUALS BUTTON--FINISHED CALCULATIONS");

				if (plusClick == true) {
					appendNumber = originalNumber + appendNumber;
					originalNumber = 0;
					plusClick = false;
				} else if (minusClick == true) {
					appendNumber = originalNumber - appendNumber;
					originalNumber = 0;
					minusClick = false;
				} else if (timesClick == true) {
					appendNumber = originalNumber * appendNumber;
					originalNumber = 0;
					timesClick = false;
				} else if (divideClick == true) {
					appendNumber = originalNumber / appendNumber;
					originalNumber = 0;
					divideClick = false;
				} else {
					console.log("SOMETHING WENT WRONG");
				}

				document.getElementById("calculations").value = appendNumber;
				console.log("originalNumber = " + originalNumber);
				console.log("appendNumber = " + appendNumber);
				//console.log("viewCalculations = " + viewCalculations);

			} else {
				console.log("It didn't work.");
			}
			
		}

		function ButtonPeriod()
		{
			// add function
		}

		function ButtonClear()
		{
			originalNumber = 0;
			appendNumber = 0;
			document.getElementById("calculations").value = 0;
			divideClick = false;
			timesClick = false;
			minusClick = false;
			plusClick = false;
			console.log("PRESSED CLEAR BUTTON--ALL IS CLEARED")
			console.log("originalNumber = " + originalNumber);
			console.log("appendNumber = " + appendNumber);
			//console.log("viewCalculations = " + viewCalculations);
		}
let count = 1;

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}

class DonutMaker {
constructor() {
    this.donut_creator = document.getElementById("donut_creator");
    this.donut_creator.addEventListener("click", this.donutCount);

    this.auto_clicker = document.getElementById("auto_clicker");
    this.auto_clicker.addEventListener("click", this.autoClicker);

    this.donut_multiplier = document.getElementById("donut_multiplier");
    this.donut_multiplier.addEventListener("click", this.donutMultiplier);
}

donutCount() {
    this.selection = document.getElementById("donut_quantity");
    this.quantity = this.selection.innerText;
    this.updated_quantity = parseInt(this.quantity);
    this.updated_quantity = this.updated_quantity + count;
    this.selection.innerText = this.updated_quantity;
}

autoClicker = () => {
    this.donut_selection = document.getElementById("donut_quantity");
    this.donut_quantity = parseInt(this.donut_selection.innerText);

    this.clicker_selection = document.getElementById("auto_clicker_quantity");
    this.clicker_quantity = parseInt(this.clicker_selection.innerText);

    if (this.clicker_quantity === 0) {
        this.donut_price = 100;
    }
    if (this.donut_quantity >= 100) {
        this.clicker_selection = document.getElementById("auto_clicker_quantity"); //Selection of auto clicker
        this.clicker_quantity = parseInt(this.clicker_selection.innerText); //Get initital value of auto clicker
        this.new_clicker_quantity = this.clicker_quantity + 1; //Increment of +1 in previous value
        this.clicker_selection.innerText = " " + this.new_clicker_quantity; //Updating value on interface (DOM)

    if (this.clicker_quantity > 0) {
        this.donut_price = Math.floor(
        this.donut_price + this.donut_price * 0.1
        );
    }

        this.updated_donut_quantity = this.donut_quantity - this.donut_price; //Decrementing donut quantity on autoClicker purchase
        this.donut_selection.innerText = this.updated_donut_quantity; //Set new quantity in donut count (DOM)

        this.new_quantity = this.donut_quantity; 
        clearInterval(this.myInterval);
        this.myInterval = setInterval(this.autoCounter, 1000);
    } else {
        alert("Not enough donuts!");
    }
};

autoCounter = () => {
    this.clicker_selection = document.getElementById("auto_clicker_quantity");
    this.clicker_quantity = parseInt(this.clicker_selection.innerText);

    this.donut_selection = document.getElementById("donut_quantity");
    this.new_quantity =
        parseInt(this.donut_selection.innerText) + this.clicker_quantity;
    this.donut_selection.innerText = this.new_quantity;
};

donutMultiplier = () => {
    this.donut_selection = document.getElementById("donut_quantity");
    this.donut_quantity = parseInt(this.donut_selection.innerText);

    if (this.donut_quantity >= 10) {
    this.multiplier_selection = document.getElementById("donut_multiplier_count");
    this.multiplier_count = parseInt(this.multiplier_selection.innerText);
    this.new_count = this.multiplier_count + 1;
    this.multiplier_selection.innerText = this.new_count;

    count = Math.ceil(Math.pow(1.2, this.new_count));

    this.donut_selection.innerText = this.donut_quantity - 10;
    } else {
    alert("Minimum of 10 donuts needed to purchase.");
    }

reset = () => {
    document.getElementById("donut_quantity").innerText = 0;
        };
    };
}

let obj = new DonutMaker();
function Shirt(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

var whitetee  = new Shirt("White Tee", "medium", "white", 150, "img/whitetee.png")
var blacktee  = new Shirt("Black Tee", "medium", "Black", 50, "img/blacktee.png")
var redtee    = new Shirt("Red Tee", "large", "red", 20, "img/redtee.png")
var bluetee   = new Shirt("Blue Tee", "small", "blue", 70, "img/bluetee.png")
var greentee  = new Shirt("Green Tee", "large", "green", 55, "img/greentee.png")
var yellowtee = new Shirt("Yellow Tee", "medium", "yellow", 250, "img/yellowtee.png")


var shirtArray = new Array


shirtArray.push(whitetee, blacktee, redtee, bluetee, greentee, yellowtee)


for(var i = 0; i < shirtArray.length; i++) {

	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var stockH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")


	var tName   = document.createTextNode(shirtArray[i].name)
	var tSize   = document.createTextNode("Available size: " + shirtArray[i].size)
	var tColor  = document.createTextNode("Color: " + shirtArray[i].color)
	var tStock  = document.createTextNode("In stock: " + shirtArray[i].stock)
	var tButton = document.createTextNode("Buy Now!")


	image.src = shirtArray[i].image


	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"
	
	
	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	btn.appendChild(tButton)

	
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	
	newItem.appendChild(newDiv)

	document.getElementById("products").appendChild(newItem)
}

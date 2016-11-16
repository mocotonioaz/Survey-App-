var questions = ["Who's your favorit comic book hero?", "Are you a dog or cat person?","What's your favorite book?","What's your favorite movie?","What's your favorite band?","What sport did you play the most growing up?","Where were you born?","Where will your greatest accomplishment happen?","What's your spirit animal?","Are you a ron, harry, or hermioni?", "Team Edward or team Jacob?", "Plane, train or automobile?", "City, suburbs or country?", "Roller coaster or water slide?", "Your next vacation spot?", "Mountains or Beach?", "Cake or pie?", "Would you have a person chef or private plan?", "What did you want to be when you grew up?", "Skateboard, roller blades, or bicycle?", "Would you rather own a pet dragon or a flying car?", "Would you rather fight a shark in water or a bear on land?", "Star wars or star trek?", "Would you trade 5 years of your life for 1 billion dollars?", "Would you rather have 1 trillion dollars or a warp drive powered space ship?", "Jet pack or rocket boots?", "Would you rather never use a chair or never use a table?", "Favorite toy as a kid?", "Halloween or new years?", "Tree fort or snow fort?"]

//populate questions onload
var pickOne = questions[Math.floor(Math.random()*questions.length)]
document.getElementById("questions1").innerHTML = pickOne
for(i = 0; i < questions.length; i++) {
	if(pickOne == questions[i]) {
		questions.splice(i, 1)
	}
}

var pickTwo = questions[Math.floor(Math.random()*questions.length)]
document.getElementById("questions2").innerHTML = pickTwo
for(i = 0; i < questions.length; i++) {
	if(pickTwo == questions[i]) {
		questions.splice(i, 1)
	}
}

var pickThree = questions[Math.floor(Math.random()*questions.length)]
document.getElementById("questions3").innerHTML = pickThree
for(i = 0; i < questions.length; i++) {
	if(pickThree == questions[i]) {
		questions.splice(i, 1)
	}
}

var students = 10
var redTeam = 0
var blueTeam = 0

function sortingHat() {
	changeVars()

	//start new questions on click
	var pickOne = questions[Math.floor(Math.random()*questions.length)]
	document.getElementById("questions1").innerHTML = pickOne
	document.getElementById("input1").value = ""
	for(i = 0; i < questions.length; i++) {
		if(pickOne == questions[i]) {
			questions.splice(i, 1)
		}
	}
	var pickTwo = questions[Math.floor(Math.random()*questions.length)]
	document.getElementById("questions2").innerHTML = pickTwo
	document.getElementById("input2").value = ""
	for(i = 0; i < questions.length; i++) {
		if(pickTwo == questions[i]) {
			questions.splice(i, 1)
		}
	}

	var pickThree = questions[Math.floor(Math.random()*questions.length)]
	document.getElementById("questions3").innerHTML = pickThree
	document.getElementById("input3").value = ""
	for(i = 0; i < questions.length; i++) {
		if(pickThree == questions[i]) {
			questions.splice(i, 1)
		}
	}

	if(document.getElementById("questions1").innerHTML == "undefined") {
		document.getElementById("form").style.display = "none"
	}

	//audio
	// var x = document.getElementById("myAudio"); 
	// x.play(); 
}

function onRedTeam() {
	document.getElementById("redTeam").style.display = "block"
}

function onBlueTeam() {
	document.getElementById("blueTeam").style.display = "block"
}



//sorts students into team vars
function changeVars() {
	if(students == 10) {
		students = students - 1
		redTeam = redTeam + 1
		setTimeout(function(){ onRedTeam(); }, 3000);
		fireworks()
	} else if(students == 9) {
		students = students - 1
		blueTeam = blueTeam + 1
		setTimeout(function(){ onBlueTeam(); }, 3000);
		fireworks()
	} else if(students == 8) {
		students = students - 1
		blueTeam = blueTeam + 1
		setTimeout(function(){ onBlueTeam(); }, 3000);
		fireworks()
	} else if(students == 7) {
		students = students - 1
		redTeam = redTeam + 1
		setTimeout(function(){ onRedTeam(); }, 3000);
		fireworks()
	} else if(students == 6) {
		students = students - 1
		redTeam = redTeam + 1
		setTimeout(function(){ onRedTeam(); }, 3000);
		fireworks()
	} else if(students == 5) {
		students = students - 1
		blueTeam = blueTeam + 1
		setTimeout(function(){ onBlueTeam(); }, 3000);
		fireworks()
	} else if(students == 4) {
		students = students - 1
		redTeam = redTeam + 1
		setTimeout(function(){ onRedTeam(); }, 3000);
		fireworks()
	} else if(students == 3) {
		students = students - 1
		blueTeam = blueTeam + 1
		setTimeout(function(){ onBlueTeam(); }, 3000);
		fireworks()
	} else if(students == 2) {
		students = students - 1
		redTeam = redTeam + 1
		setTimeout(function(){ onRedTeam(); }, 3000);
		fireworks()
	} else if(students == 1) {
		students = students - 1
		blueTeam = blueTeam + 1
		setTimeout(function(){ onBlueTeam(); }, 3000);
		fireworks()
	}
}

function sortAnotherStudent() {
	document.getElementById("blueTeam").style.display = "none"
	document.getElementById("redTeam").style.display = "none"
	document.getElementById("canvas").remove()
	if(students == 0) {
		sortingComplete()
		console.log("complete")
	}
}

function sortingComplete() {
	document.getElementById("sortingComplete").style.display = "block"
}




function fireworks() {
	var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    mousePos = {
        x: 400,
        y: 300
    },

    // create canvas
    canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    particles = [],
    rockets = [],
    MAX_PARTICLES = 100,
    colorCode = 0;

    canvas.setAttribute("id", "canvas")

// init
$(document).ready(function() {
    document.body.appendChild(canvas);
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    setInterval(launch, 800);
    setInterval(loop, 1000 / 50);
});

// update mouse position
$(document).mousemove(function(e) {
    e.preventDefault();
    mousePos = {
        x: e.clientX,
        y: e.clientY
    };
});

// launch more rockets!!!
$(document).mousedown(function(e) {
    for (var i = 0; i < 5; i++) {
        launchFrom(Math.random() * SCREEN_WIDTH * 2 / 3 + SCREEN_WIDTH / 6);
    }
});

function launch() {
    launchFrom(mousePos.x);
}

function launchFrom(x) {
    if (rockets.length < 10) {
        var rocket = new Rocket(x);
        rocket.explosionColor = Math.floor(Math.random() * 360 / 10) * 10;
        rocket.vel.y = Math.random() * -3 - 4;
        rocket.vel.x = Math.random() * 6 - 3;
        rocket.size = 8;
        rocket.shrink = 0.999;
        rocket.gravity = 0.01;
        rockets.push(rocket);
    }
}

function loop() {
    // update screen size
    if (SCREEN_WIDTH != window.innerWidth) {
        canvas.width = SCREEN_WIDTH = window.innerWidth;
    }
    if (SCREEN_HEIGHT != window.innerHeight) {
        canvas.height = SCREEN_HEIGHT = window.innerHeight;
    }

    // clear canvas
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    var existingRockets = [];

    for (var i = 0; i < rockets.length; i++) {
        // update and render
        rockets[i].update();
        rockets[i].render(context);

        // calculate distance with Pythagoras
        var distance = Math.sqrt(Math.pow(mousePos.x - rockets[i].pos.x, 2) + Math.pow(mousePos.y - rockets[i].pos.y, 2));

        // random chance of 1% if rockets is above the middle
        var randomChance = rockets[i].pos.y < (SCREEN_HEIGHT * 2 / 3) ? (Math.random() * 100 <= 1) : false;

/* Explosion rules
             - 80% of screen
            - going down
            - close to the mouse
            - 1% chance of random explosion
        */
        if (rockets[i].pos.y < SCREEN_HEIGHT / 5 || rockets[i].vel.y >= 0 || distance < 50 || randomChance) {
            rockets[i].explode();
        } else {
            existingRockets.push(rockets[i]);
        }
    }

    rockets = existingRockets;

    var existingParticles = [];

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();

        // render and save particles that can be rendered
        if (particles[i].exists()) {
            particles[i].render(context);
            existingParticles.push(particles[i]);
        }
    }

    // update array with existing particles - old particles should be garbage collected
    particles = existingParticles;

    while (particles.length > MAX_PARTICLES) {
        particles.shift();
    }
}

function Particle(pos) {
    this.pos = {
        x: pos ? pos.x : 0,
        y: pos ? pos.y : 0
    };
    this.vel = {
        x: 0,
        y: 0
    };
    this.shrink = .97;
    this.size = 2;

    this.resistance = 1;
    this.gravity = 0;

    this.flick = false;

    this.alpha = 1;
    this.fade = 0;
    this.color = 0;
}

Particle.prototype.update = function() {
    // apply resistance
    this.vel.x *= this.resistance;
    this.vel.y *= this.resistance;

    // gravity down
    this.vel.y += this.gravity;

    // update position based on speed
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // shrink
    this.size *= this.shrink;

    // fade out
    this.alpha -= this.fade;
};

Particle.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
    gradient.addColorStop(0.8, "hsla(" + this.color + ", 100%, 50%, " + this.alpha + ")");
    gradient.addColorStop(1, "hsla(" + this.color + ", 100%, 50%, 0.1)");

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};

Particle.prototype.exists = function() {
    return this.alpha >= 0.1 && this.size >= 1;
};

function Rocket(x) {
    Particle.apply(this, [{
        x: x,
        y: SCREEN_HEIGHT}]);

    this.explosionColor = 0;
}

Rocket.prototype = new Particle();
Rocket.prototype.constructor = Rocket;

Rocket.prototype.explode = function() {
    var count = Math.random() * 10 + 80;

    for (var i = 0; i < count; i++) {
        var particle = new Particle(this.pos);
        var angle = Math.random() * Math.PI * 2;

        // emulate 3D effect by using cosine and put more particles in the middle
        var speed = Math.cos(Math.random() * Math.PI / 2) * 15;

        particle.vel.x = Math.cos(angle) * speed;
        particle.vel.y = Math.sin(angle) * speed;

        particle.size = 10;

        particle.gravity = 0.2;
        particle.resistance = 0.92;
        particle.shrink = Math.random() * 0.05 + 0.93;

        particle.flick = true;
        particle.color = this.explosionColor;

        particles.push(particle);
    }
};

Rocket.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255, 255, 255 ," + this.alpha + ")");
    gradient.addColorStop(1, "rgba(0, 0, 0, " + this.alpha + ")");

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};
}

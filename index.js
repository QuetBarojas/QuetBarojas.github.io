var activity=new Array()
activity[0] = "Frase 1";
activity[1] = "Frase 2";
activity[2] = "Frase 3";
activity[3] = "Frase 4";
activity[4] = "Frase 5";

var Q = activity.length;
var whichactivity=Math.round(Math.random()*(Q-1));

// Creamos una función para mostrar la frase
function showactivity() {
	const div = document.createElement("input"); 
	div=document.write(activity[whichactivity]);}
	
//funcion para 


//funcion para dark-mode

function darkmode(){
	var element =document.body;
	element.classList.toggle("dark-theme")
}


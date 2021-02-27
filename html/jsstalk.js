var bone=document.querySelector("#b1");
var btwo = document.querySelector("#b2");
var pone=document.querySelector("#p1");
var ptwo = document.querySelector("#p2");
var m=0; var m1 = 0;
var in = document.querySelector("#input2")
var a1 = true;
var maxs = 5;
	bone.addEventListener("click",function(){
		if(a1){
			m++;
			pone.textContent = m;
			if(m===maxs) {
				a1 = false;
				pone.classList.add("winner");
			}
		}
	})
	btwo.addEventListener("click", function(){
		if(a1){
			m1++;
			ptwo.textContent= m1;
			if(m1===maxs){
				a1=false;	
				ptwo.classList.add("winner");
			} 		
		}
	})
	var bthree = document.querySelector("#b3");
	bthree.addEventListener("click",function(){
		reset();
	})
function reset(){
	m1=0; m=0;a1=true;
		pone.textContent = m;
		ptwo.textContent = m1;
		pone.classList.remove("winner");
		ptwo.classList.remove("winner");
}

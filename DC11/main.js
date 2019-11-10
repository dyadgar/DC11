let root= document.querySelector("div");
// let newList = document.createElement("ul");
// root.appendChild(newList);
// newList.setAttribute("class","newList");
// var list= document.querySelector(".newList");


let h1= document.createElement("h1");
h1.innerText="Shopping List";
root.appendChild(h1);

let input= document.createElement("input");
root.appendChild(input);

let b1= document.createElement("button");
b1.innerText= "Add";
root.appendChild(b1);
b1.setAttribute("id","b1");

let b2= document.createElement("button");
b2.innerText="Clear All";
root.appendChild(b2);
b1.setAttribute("id","b2");


let newList = document.createElement("ul");
root.appendChild(newList);
newList.setAttribute("id","newList");

let list_item= document.createElement("li");

// input= document.querySelector("input");
// b1 =document.querySelector("#b1");
// b2 = document.querySelector("#b2");



b1.addEventListener("click", addListItem);

input.addEventListener("keypress", function(e){ //Para usar enter para el boton

	if(e.key === "Enter"){
		addListItem();
	}
});








function addListItem(){
	let text = input.value;
		if(text == ""){
			return;
		}

			list_item= document.createElement("li");
			list_item.innerText = text;
			newList.appendChild(list_item);

			input.value = "";


}



b2.addEventListener("click",clearAll);

function clearAll(){
		let list = document.querySelectorAll("li");
		for(i=0; i<list.length; i++){
			list[i].remove();
		// list_item.remove();
		// listremoveChild(list.childNodes[0]);
		// newList.removechild();
		}
	}
	








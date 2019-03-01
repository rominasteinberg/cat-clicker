"use strict";

class Cat {
	constructor (name, picture) {
		this.name= name;
		this.picture = picture;
		this.catsImg = document.createElement('img');
		}

	createCat() {
		const newCat= document.createElement('div');
		const catsName= document.createElement('h2');
		const counter= document.createElement('div');
		counter.innerHTML= 
		`<div class="counter">
            <span class="clickCounter">0 </span> 
            <span class="click">Clicks</span>
        </div>`;
        const catItem = document.createElement('p');
        const content = document.querySelector('.content');
        const listOfCats = document.querySelector('.listOfCats');

        //ADDING CAT'S IMAGE
		this.catsImg.className= ['littleCat'];
		this.catsImg.src= this.picture;
		newCat.appendChild(this.catsImg);
		
		//ADDING CAT'S NAME
		catsName.innerText= this.name;
		catsName.className = ['catsName'];
		newCat.appendChild(catsName);

		//ADDING CAT'S NAME TO THE SIDEBAR
		catItem.innerText= this.name;
		listOfCats.appendChild(catItem);

		//ADDING THE COUNTER
		newCat.appendChild(counter);
		newCat.className=['newCat'];

		//ADDING THE CAT TO ACTUALLY SEE IT
		content.appendChild(newCat);
	}

	clickCounter() {
		let clicks = 0;
		const imgToClick = this.catsImg;
		const currentIndex = document.getElementsByClassName('newCat').length - 1;
		const clickCounter = document.getElementsByClassName('clickCounter')[currentIndex];

		imgToClick.addEventListener('click', function() {
		  	clicks++
		  	clickCounter.innerText= clicks;
		}, false);
	};
};

//CREATE THE CATS USING THE CAT CONSTRUCTOR
const cat1 = new Cat("Nico", "img/kitty.jpg");
cat1.createCat();
cat1.clickCounter();

const cat2 = new Cat("Pepita", "img/cat2.jpg");
cat2.createCat();
cat2.clickCounter();

const cat3 = new Cat("Roberto", "img/cat3.jpg");
cat3.createCat();
cat3.clickCounter();

const cat4 = new Cat("Nestor", "img/cat4.jpg");
cat4.createCat();
cat4.clickCounter();

const cat5 = new Cat("Atilio", "img/cat5.jpg");
cat5.createCat();
cat5.clickCounter();

//ADDDING FUNCTIONALITY TO THE SIDEBAR
let catList = document.querySelector('.listOfCats').childNodes;
let catsSelected = [];

for(let cat of catList) {
	const content = document.querySelector('.content');

	if(cat.classList.contains('selected')=== true){
		catsSelected.push(cat);
	}

	cat.addEventListener('click', function() {
		const names= document.querySelectorAll('.catsName');


		if(catsSelected.length !== 0) {
			catsSelected[0].classList.remove('selected');
		};

		catsSelected = [];

		catsSelected.push(cat);

		catsSelected[0].classList.add('selected');

		for(let name of names) {
			const catSelected= name.parentElement;
			
			if(name.innerText === cat.innerText) {
				catSelected.classList.add('open');
				cat.classList.add('selected');

			} else {
				if(catSelected.classList.contains('open') === true){
					catSelected.classList.toggle('open');					
				}
			} 
		}
	})
}


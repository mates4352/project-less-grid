// const like = document.querySelector('.info-price__icon')
const likeBlock = document.querySelectorAll('.info-price__like')
const lineText = document.querySelector('.info-price__like-text')

likeBlock.forEach((event) => {
	event.addEventListener('click', () => {
		let data = event.getAttribute("data");
		event.classList.toggle('active')
		let like = document.querySelector(`.info-price__like-text[data="${data}"]`)

		if (like.innerHTML == 'ADD TO FAVS') {
			like.innerHTML = 'FAVED';
			like.style.color = "red"
		}
		
		else {
			like.innerHTML = 'ADD TO FAVS';
			like.style.color = "#c5c5c5"
		}

	})
});

// window.addEventListener('click', (event) => {
// 	if (event.target.classList.contains("info-price__like")) {
// 		event.target.classList.toggle("active")
// 		if (event.target.classList.contains("active")) {
// 			lineText.innerHtml = "FAVED"
// 		}
		
// 	}

// })








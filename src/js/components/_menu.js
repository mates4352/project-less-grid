const menu = document.querySelector('.warehouse__menu')
const close = document.querySelector('.warehouse__close')
const img = document.querySelector('.warehouse__img')
const nav = document.querySelector('.warehouse__nav')
const warehouse = document.querySelector('.warehouse')

const linkOne = document.querySelector('.warehouse__link-one')
const linkTwo = document.querySelector('.warehouse__link-two')
const linkThree = document.querySelector('.warehouse__link-three')


close.addEventListener('click', () => {
	classLitstRemove(close)
	classLitstRemove(nav)
	classLitstRemove(warehouse)
	classLitstRemove(menu)

	if (linkOne.classList.contains("active")) {
		classLitstRemove(linkOne)
	}

	else if (linkTwo.classList.contains("active")) {
		classLitstRemove(linkTwo)
	}

	else if (linkThree.classList.contains("active")) {
		classLitstRemove(linkThree)
	}

})

function hasRemove(hasElement, removeElement) {
		
	if(hasElement.classList.contains('active')){
		classLitstRemove(removeElement)
	}

}

function getBgColor(element,color) {
	element.style.backgroundColor = color
}

function getTextColor(element, color) {
	element.style.color = color
}


menu.addEventListener('click', (event) => {

	if (event.target.classList.contains("warehouse__link-one")) {
		classListAdd(close)
		classListAdd(nav)
		classListAdd(warehouse)
		classListAdd(linkOne)
		getBgColor(nav, '#0b3b35dc')

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkThree, linkThree)

		if (window.innerWidth <= 768) {
		classListAdd(menu)
		}
	}

	if (event.target.classList.contains("warehouse__icon-one")) {
		classListAdd(close)
		classListAdd(nav)
		classListAdd(warehouse)
		classListAdd(linkOne)
		getBgColor(nav,'#0b3b35dc')

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkThree, linkThree)

		if (window.innerWidth <= 768) {
		classListAdd(menu)
		}
	}

	if (event.target.classList.contains("warehouse__link-two")) {
		classListAdd(close)
		classListAdd(nav)
		classListAdd(warehouse)
		classListAdd(linkTwo)
		getBgColor(nav,'#5f570fd7')

		hasRemove(linkOne, linkOne)
		hasRemove(linkThree, linkThree)

		if (window.innerWidth <= 768) {
		classListAdd(menu)
		}
	}

	if (event.target.classList.contains("warehouse__icon-two")) {
		classListAdd(close)
		classListAdd(nav)
		classListAdd(warehouse)
		classListAdd(linkTwo)
		getBgColor(nav,'#5f570fd7')

		hasRemove(linkOne, linkOne)
		hasRemove(linkThree, linkThree)

		if (window.innerWidth <= 768) {
		classListAdd(menu)
		}
	}

	if (event.target.classList.contains("warehouse__link-three")) {
		classListAdd(close)
		classListAdd(nav)
		classListAdd(warehouse)
		classListAdd(menu)
		classListAdd(linkThree)
		getBgColor(nav,'#142038d7')

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkOne, linkOne)

		if (window.innerWidth <= 768) {
		classListAdd(menu)
		}

	}
	if (event.target.classList.contains("warehouse__icon-three")) {
		classListAdd(close)
		classListAdd(nav)
		classListAdd(warehouse)
		classListAdd(linkThree)
		getBgColor(nav, '#142038d7')

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkOne, linkOne)

		if (window.innerWidth <= 768) {
		classListAdd(menu)
		}
	}


})
const menu = document.querySelector('.header__menu')
const close = document.querySelector('.warehouse__close')
const img = document.querySelector('.warehouse__img')
const nav = document.querySelector('.warehouse__nav')

const linkOne = document.querySelector('.header__link-one')
const linkTwo = document.querySelector('.header__link-two')
const linkThree = document.querySelector('.header__link-three')


close.addEventListener('click', () => {
	classLitstRemove(close)
	classLitstRemove(img)
	classLitstRemove(nav)

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


menu.addEventListener('click', (event) => {

	if (event.target.classList.contains("header__link-one")) {
		classListAdd(close)
		classListAdd(img)
		classListAdd(nav)
		classListAdd(linkOne)

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkThree, linkThree)
	}

	if (event.target.classList.contains("header__icon-one")) {
		classListAdd(close)
		classListAdd(img)
		classListAdd(nav)
		classListAdd(linkOne)

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkThree, linkThree)

	}

	if (event.target.classList.contains("header__link-two")) {
		classListAdd(close)
		classListAdd(img)
		classListAdd(nav)
		classListAdd(linkTwo)


		hasRemove(linkOne, linkOne)
		hasRemove(linkThree, linkThree)

	}

	if (event.target.classList.contains("header__icon-two")) {
		classListAdd(close)
		classListAdd(img)
		classListAdd(nav)
		classListAdd(linkTwo)

		hasRemove(linkOne, linkOne)
		hasRemove(linkThree, linkThree)
	}

	if (event.target.classList.contains("header__link-three")) {
		classListAdd(close)
		classListAdd(img)
		classListAdd(nav)
		classListAdd(linkThree)

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkOne, linkOne)

	}
	if (event.target.classList.contains("header__icon-three")) {
		classListAdd(close)
		classListAdd(img)
		classListAdd(nav)
		classListAdd(linkThree)

		hasRemove(linkTwo, linkTwo)
		hasRemove(linkOne, linkOne)
	}


})
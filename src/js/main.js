const accordionBtns = document.querySelectorAll('.accordion__btn');
const accordion = document.querySelector('.accordion');
const ikons = document.querySelectorAll('.fa-solid');

function showInfo() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
		this.children[0].classList.remove('rotate');
	} else {
        
        closeInfo();
		this.children[0].classList.add('rotate');
		
		this.nextElementSibling.classList.toggle('active');
	}
}

const closeInfo = () => {
	const allActiveItems = document.querySelectorAll('.accordion__info');

	allActiveItems.forEach((item) => {
		item.classList.remove('active');
	});
    ikons.forEach(ikon=>{
        ikon.classList.remove('rotate')
    })
};

const closeOnWindow = (e) => {
	if (
		e.target.classList.contains('accordion__btn') ||
		e.target.classList.contains('accordion__info') ||
		e.target.classList.contains('accordion__info-text')
	)
		return;
	closeInfo();
};

accordionBtns.forEach((btn) => {
	btn.addEventListener('click', showInfo);
});
window.addEventListener('click', closeOnWindow);

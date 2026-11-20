const bookCard = document.querySelector('#bookCard');
const bookForm = document.querySelector('#addBook');
const newTitle = document.querySelector('#newTitle');
const newAuthor = document.querySelector('#newAuthor');
const newYear = document.querySelector('#newYear');
const newFormat = document.querySelector('#newFormat');
const digitalExtraField = document.querySelector('#digital-extra-field');
const newPlatform = document.querySelector('#newPlatform');

const bookList = [];

class Book {

	constructor(_bookTitle, _bookAuthor, _bookYear, _bookFormat, _bookPlatform ='') {
		this.bookTitle = _bookTitle;
		this.bookAuthor = _bookAuthor;
		this.bookYear = _bookYear;
		this.bookFormat = _bookFormat;
		this.bookPlatform = _bookPlatform;

	}

	printBook() {

		const newDiv = document.createElement('div');
		newDiv.classList.add('row', 'col-6', 'border', 'border-3', 'bg-body', 'py-3', 'mx-auto', 'border-primary', 'rounded-2', 'd-flex', 'justify-content-start', 'my-3')

		const titleP = document.createElement('p');
		titleP.textContent = this.bookTitle;
		titleP.classList.add('fw-bold');

		const formatB = document.createElement('span');
		formatB.textContent = this.bookFormat;
		formatB.classList.add('badge', 'rounded-pill', 'text-bg-secondary', 'text-center', 'ms-2');
		titleP.appendChild(formatB);

		if (this.bookPlatform) {
            const platformB = document.createElement('span');
            platformB.textContent = this.bookPlatform;
            platformB.classList.add('badge', 'rounded-pill', 'text-bg-info', 'ms-1');
            titleP.appendChild(platformB);
        }

		const infoContainer = document.createElement('div');
		infoContainer.classList.add('d-flex', 'justify-content-start', 'align-items-center', 'gap-2')

		const authorS = document.createElement('span');
		authorS.textContent = this.bookAuthor

		const yearP = document.createElement('span');
		yearP.textContent = `- ${this.bookYear}`

		infoContainer.appendChild(authorS);
		infoContainer.appendChild(yearP);

		newDiv.appendChild(titleP);
		titleP.appendChild(formatB);
		newDiv.appendChild(infoContainer);

		bookCard.appendChild(newDiv);
	};
}

newFormat.addEventListener('change', () => {

	if (newFormat.value === 'digitale') {
		digitalExtraField.classList.remove('d-none');
	} else{

		digitalExtraField.classList.add('d-none');
		newPlatform.value = '';
	}
	});

bookForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const currentBook = new Book(
		newTitle.value,
		newAuthor.value,
		newYear.value,
		newFormat.value,
		newPlatform.value,
	);

	const emptyBook = document.getElementById('emptyCard');
	if (emptyBook){
		emptyBook.classList.add('d-none');
	}
	
	
	bookList.push(currentBook);
	currentBook.printBook();

	bookForm.reset();

	digitalExtraField.classList.add('d-none');

});
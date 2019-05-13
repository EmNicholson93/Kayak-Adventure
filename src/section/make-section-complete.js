function makeSectionComplete(section) {
    const span = document.createElement('span');

    span.classList.add('complete');

    span.textContent = section.title;

    return span;
}

export default makeSectionComplete;
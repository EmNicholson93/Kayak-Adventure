function createSectionLink(sections) {
    const anchor = document.createElement('a');
    anchor.classList.add('sections');
    anchor.textContent = sections.title;
    const searchParams = new URLSearchParams();
    searchParams.set('id', sections.id);
    anchor.href = 'section.html?' + searchParams.toString();

    return anchor;
}

export default createSectionLink;
function createSectionLink(section) {
    //creates an element to be filled in
    const anchor = document.createElement('a');
    //add a class to the element
    anchor.classList.add('section');
    //add textContent to the element
    anchor.textContent = section.title;
    //create searchParams
    const searchParams = new URLSearchParams();
    //set the searchParams
    searchParams.set('id', section.id);
    anchor.href = 'section.html?' + searchParams.toString();

    return anchor;
}

export default createSectionLink;
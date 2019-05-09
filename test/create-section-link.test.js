const test = QUnit.test;

test('turn a section object into a DOM element', assert => {
    //arrange
    const section = {
        id: 'truss',
        title: 'The Glorious Green Truss!'
    };

    const expected = '<a class="section" href="section.html?id=truss">The Glorious Green Truss!</a>';

    //act
    const dom = createSectionLink(section);

    //assert
    assert.equal(dom.outerHTML, expected);
});

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
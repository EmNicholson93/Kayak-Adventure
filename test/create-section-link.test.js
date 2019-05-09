import createSectionLink from '../src/map/create-section-link.js';
const test = QUnit.test;
QUnit.module('createSectionLink test');

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


import '../src/services/quest-data.js';
import createSectionLink from '../src/section/create-section-link.js';

const test = QUnit.test;
QUnit.module('itsatrap');


test('take a section object and return a DOM', assert => {
    //arrange
    const sections = {
        id: 'truss',
        title: 'The Glorious Green Truss!'
    };

    const expected = '<a class="sections" href="section.html?id=truss">The Glorious Green Truss!</a>';
    //act

    const dom = createSectionLink(sections);

    //assert
    assert.equal(dom.outerHTML, expected);
});


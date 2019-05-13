import makeSectionComplete from '../src/section/make-section-complete.js';
const test = QUnit.test;
QUnit.module('create Section');

test('make span for section complete', assert => {
    //Arrange
    const section = {
        title: 'The Glorious Green Truss!'
    };

    const expected = '<span class="complete">The Glorious Green Truss!</span>';
    //Act

    const dom = makeSectionComplete(section);

    //Assert
    assert.equal(dom.outerHTML, expected);

});

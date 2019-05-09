const test = QUnit.test;
QUnit.module('sectionCompleted test');

test('create span for completing a section', assert => {
    //arrange
    const section = {
        title: 'The Glorious Green Truss!'
    };

    const expected = '<span class="section completed">The Glorious Green Truss!</span>';
    
    //act
    const dom = createSectionLink(section);

    //assert
    assert.equal(dom.outerHTML, expected);
});
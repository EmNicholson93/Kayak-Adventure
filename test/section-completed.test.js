const test = QUnit.test;
QUnit.module('sectionCompleted test');

test('create span for completing a section', assert => {
    //arrange
    const section = {
        title: 'The Glorious Green Truss!'
    };

    const expected = '<span class="section completed">The Glorious Green Truss!</span>';
    
    //act
    const dom = sectionCompleted(section);

    //assert
    assert.equal(dom.outerHTML, expected);
});

function sectionCompleted(section) {
    const span = document.createElement('span');

    const span.classList.add('section');
    const span.classList.add('completed');
    
}
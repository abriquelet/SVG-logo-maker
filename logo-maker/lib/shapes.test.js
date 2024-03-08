//import your shapes
const {triangle,circle,square} = require('./shapes');

//write tests that you can trigger using jest that ensure all prompts are working sufficiently
//testing for an orange triangle.
describe('Test triangle', function () {
    it('renders an orange triangle correctly', function () {
        const shape = new triangle();
        shape.setColor('orange');
        expect(shape.render()).toBe(`polygon points="50 15, 100 100, 0 100" fill="orange" />`);
    });
});

describe('Test circle', function () {
    it('renders a pink circle correctly', function () {
        const shape = new circle();
        shape.setColor('pink');
        expect(shape.render()).toBe(`<circle cx="25" cy="75" r="40" fill="pink" />`);
    });
});

describe('Test square', function () {
    it('renders a #FF5733 square correctly', function () {
        const shape = new square();
        shape.setColor('#FF5733');
        expect(shape.render()).toBe(`<rect x="10" y="10" width="80" height="80" fill="#FF5733" />`);
    });
});


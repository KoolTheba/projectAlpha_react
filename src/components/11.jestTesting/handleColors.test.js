import handleColors from './handleColors'

describe('handleColors function', () => {
    test('returns an array of 2 elements', () => {
        expect(handleColors()).toHaveLength(2)
    });
    test('returns an array without the blue element', () => {
        expect(handleColors()).not.toContain('blue')
    })
});
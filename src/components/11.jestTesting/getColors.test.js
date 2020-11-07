import getColors from './getColors'

describe('getColors function', () => {
    test('returns blue as element in the array', () => {
        expect(getColors()).toContain('blue')
    })
});
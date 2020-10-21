import createUser from './createUser'

const name = 'Teba'
const age = 23

describe('createUser function', () => {
    test('returns an object with name and age as its 2 elements', () => {
        expect(createUser(name, age)).toEqual({name, age})
    })
});
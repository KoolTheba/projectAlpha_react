import filterByName from './filterByName'
import products from './fixtures/products'

const name = 'Cachopo'

it('filters correctly by name in the products array given', () => {
    expect(filterByName(name, products)).toEqual([products[0]])
})

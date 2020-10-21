import changeOrderByPrice from './changeOrderByPrice'
import products from './fixtures/products'

it('returns an ordered by price array', () => {
    expect(changeOrderByPrice(products)).toEqual([products[1], products[2], products[0]])
})
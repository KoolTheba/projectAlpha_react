import getPriceColor from './getPriceColor'
import products from './fixtures/products'

describe('getPriceColor function', () => {
    it('returns red if price is higher than 25', () => {
        expect(getPriceColor(products[0].price)).toEqual('red')
    });

    it('returns orange if price is lower or equal to 25', () => {
        expect(getPriceColor(products[2].price)).toEqual('orange')
    });

    it('returns green if price is lower or equal to 15', () => {
        expect(getPriceColor(products[1].price)).toEqual('green')
    });
});
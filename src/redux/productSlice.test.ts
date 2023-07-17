import {ProductsInitialStateType, productsSlice, productsThunks} from "./productsSlice";

test('products should be added to the state', () => {
    const productId1 = 'asaf141234-fadfadf234-fsd'
    const productId2 = 'vndb857498-vnjkaff847-amf'
    const startState: ProductsInitialStateType = {}
    const gettingState = {
        [productId1]: {
            desc: 'product1',
            id: productId1,
            imgUrl: 'url',
            price: 1299,
            title: 'product1',
        },
        [productId2]: {
            desc: 'product1',
            id: productId2,
            imgUrl: 'url',
            price: 1299,
            title: 'product1',
        }
    }

    const action = productsThunks.getProducts.fulfilled({ products: gettingState} ,"requestId")

    const endState = productsSlice(startState, action)

    const keys = Object.keys(endState);
    expect(keys.length).toBe(2)
    expect(keys[0]).toBe(productId1)
    expect(keys[1]).toBe(productId2)
})
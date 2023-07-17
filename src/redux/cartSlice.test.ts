import {cartActions, CartInitialStateType, cartSlice, cartThunks} from "./cartSlice";

const productId1 = 'asaf141234-fadfadf234-fsd'
const productId2 = 'vndb857498-vnjkaff847-amf'
const startState: CartInitialStateType = [
    {
        desc: 'product1',
        id: productId1,
        imgUrl: 'url',
        price: 1299,
        title: 'product1',
        count: 1
    },
]

test('product should be added to the state', ()=>{
    const newProduct = {
        desc: 'product2',
        id: productId2,
        imgUrl: 'url',
        price: 1299,
        title: 'product2',
    }

    const action = cartThunks.addProductToCart.fulfilled({ item: {...newProduct, count: 1}}, '', { item: newProduct})

    const endState = cartSlice(startState, action)

    expect(endState.length).toBe(2)
    expect(endState[0].id).toBe(productId1)
    expect(endState[1].id).toBe(productId2)
    expect(endState[1]['count']).not.toBe(undefined)
})

test('product should not be added to the state', ()=>{
    const newProduct = {
        desc: 'product1',
        id: productId1,
        imgUrl: 'url',
        price: 1299,
        title: 'product1',
    }

    const action = cartThunks.addProductToCart.rejected(null, '', { item: newProduct})

    const endState = cartSlice(startState, action)

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(productId1)
})

test('product count should be added', ()=>{
    const action = cartActions.addProductCount({id: productId1})

    const endState = cartSlice(startState, action)

    expect(endState[0].count).toBe(2)
    expect(endState[0].id).toBe(productId1)
})

test('product count should not be added', ()=>{
    const action = cartActions.addProductCount({id: productId2})

    const endState = cartSlice(startState, action)

    expect(endState[0].count).toBe(1)
})

test('product count should be remove', ()=>{
    const startState: CartInitialStateType = [
        {
            desc: 'product1',
            id: productId1,
            imgUrl: 'url',
            price: 1299,
            title: 'product1',
            count: 5
        },
    ]
    const action = cartActions.removeProductCount({id: productId1})

    const endState = cartSlice(startState, action)

    expect(endState[0].count).toBe(4)
    expect(endState[0].id).toBe(productId1)
})

test('product count should not be remove', ()=>{
    const action = cartActions.removeProductCount({id: productId2})

    const endState = cartSlice(startState, action)

    expect(endState[0].count).toBe(1)
})

test('product should be remove', ()=>{
    const action = cartActions.removeProduct({id: productId1})

    const endState = cartSlice(startState, action)

    expect(endState.length).toBe(0)
})

test('product should not be remove', ()=>{
    const action = cartActions.removeProduct({id: productId2})

    const endState = cartSlice(startState, action)

    expect(endState.length).toBe(1)
})


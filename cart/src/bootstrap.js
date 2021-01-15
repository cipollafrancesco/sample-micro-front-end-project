import faker from 'faker'

const mount = elRef => {

    const cartText = `<div>You have ${faker.random.number()} items in your cart </div>`

// LA MOSTRO NELL'HTML
    elRef.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development') {
    const devCart = document.querySelector('#cart_dev-cart')
    devCart && mount(devCart) // We are probabily running in isolation
}

// EXTERNAL USAGE
export {mount}

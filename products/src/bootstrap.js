import faker from 'faker'

/**
 * Prendo in ingresso l'elemento sul quale montare la mia app
 * @param elRef
 */
const mount = elRef => {

    let products = ''

// GENERO UNA LISTA DI PRODOTTI
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

// LA MOSTRO NELL'HTML
    elRef.innerHTML = products
}

// WE WANT TO HANDLE 2 CONTEXT

/** Context #1
 * We're running this file in dev in isolation
 * We're usign our local index.html file so we know it has for sure #dev-products
 * We want to immediately render out app into that element
 */
if (process.env.NODE_ENV === 'development') {
    // Assuming container does not have el with id: #products_dev-products
    const devProducts = document.querySelector('#products_dev-products')

    devProducts && mount(devProducts) // We are probabily running in isolation
}

/** Context #2
 * We're running this file in dev or prod through the CONTAINER app
 * so no garantees that #dev-products exists.
 * So we don't want to immediately render the app
 */
export {mount}


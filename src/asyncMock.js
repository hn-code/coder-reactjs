const products = [
    { 
        id: '1', 
        name: 'GPU', 
        price: 500, 
        category: 'Graphic_Card', 
        img:'imgs/offers/gpu.jpg', 
        stock: 7, 
        description:'Descripcion de Tarjeta Grafica'
    },
    { 
        id: '2', 
        name: 'Power Supply', 
        price: 150, 
        category: 'Power_Supply', 
        img:'imgs/offers/p_s1.jpg', 
        stock: 18, 
        description:'Descripcion de Fuente de Poder'
    },
    { 
        id: '3', 
        name: 'Desktop', 
        price: 750,
        category: 'Desktop', 
        img:'imgs/offers/desktop1.jpg', 
        stock: 24, 
        description:'Descripcion de Equipo de Escritorio'
    }
]

export const getProducts = () => {
    return new Promise ( (resolve) => {
        setTimeout(()=>{
            resolve(products);
        }, 2000)
    })
}
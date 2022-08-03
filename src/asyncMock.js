const products = [
    { 
        id: '1', 
        name: 'GPU', 
        price: 500, 
        category: 'graphic_cards', 
        img:'/imgs/offers/gpu.jpg', 
        stock: 7, 
        description:'Tarjeta Grafica RTX 6090 (? proveniente del futuro. Consumo de 125W. 50GB de VRAM. Interfaces HDMI, DisplayPort, VDI, de todo, la conectas hasta en el microondas.'
    },
    { 
        id: '2', 
        name: 'Power Supply', 
        price: 150, 
        category: 'power_supplys', 
        img:'/imgs/offers/p_s1.jpg', 
        stock: 18, 
        description:'Fuente de Alimentacion 600W Certificacion 80 Plus Gold'
    },
    { 
        id: '3', 
        name: 'AMD Ryzen 5 5600G', 
        price: 750,
        category: 'desktops', 
        img:'/imgs/offers/desktop1.jpg', 
        stock: 24, 
        description:'Equipo de escritorio con AMD Ryzen 5 5600G, graficos VEGA Radeon integrados, 16GB de RAM, Fuente COUGAR 600W, Placa Madre Asus B450, SSD 1TB'
    },
    { 
        id: '4', 
        name: 'Intel Core I5 12500', 
        price: 850,
        category: 'desktops', 
        img:'/imgs/offers/desktop2.jpg', 
        stock: 17, 
        description:'Equipo de escritorio con Intel 12500, graficos Intel HD integrados, 16GB de RAM, Fuente COUGAR 600W, Placa Madre Asus H450, SSD 1TB'
    },
    { 
        id: '5', 
        name: 'Memoria DIMM DDR4 RAM', 
        price: 40, 
        category: 'rams', 
        img:'/imgs/offers/ram.jpg', 
        stock: 20,
        description:'Memoria DIMM DDR4 RAM 2500MHz'
    },
    { 
        id: '6', 
        name: 'Memoria SO-DIMM DDR4 RAM', 
        price: 35, 
        category: 'rams', 
        img:'/imgs/offers/ram2.jpg', 
        stock: 18,
        description:'Memoria SO-DIMM DDR4 RAM 1800MHz'
    },
    { 
        id: '7', 
        name: 'RX 9050', 
        price: 550, 
        category: 'graphic_cards', 
        img:'/imgs/offers/gpu2.jpg', 
        stock: 18,
        description:'Tarjeta Grafica RX 9050 (? proveniente del futuro. Consumo de 130W. 80GB de VRAM. Puerto HDMI, DisplayPort, VDI, VGA, Helipuerto, de todo, impresionante.'
    },
    { 
        id: '8', 
        name: 'Monitor SANSUN', 
        price: 120, 
        category: 'monitor', 
        img:'/imgs/offers/monitor.jpg', 
        stock: 85,
        description:'Monitor de 75Hz. Overclockeable hasta 144Hz (si tarjeta grafica lo permite)'
    }
]

export const getProducts = () => {
    return new Promise ( (resolve) => {
        setTimeout(()=>{
            resolve(products);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(products.find((product)=>(product.id === productId)))
        }, 200)
    }
    )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ( (resolve) => {
        setTimeout(()=>{
            resolve(products.filter((product)=>(product.category === categoryId)));
        }, 200);
    })
}



class ProductoTienda {
    constructor(
        id,
        titulo,
        descripcion,
        categoria,
        precio,
        imagen,
        stock = true,
        favorito = false,
    ) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
        this.favorito = favorito;
    }
};


let contenedorProductos = document.querySelector(".contenedorProductos");

let stockProductos = [];

const DataProductos = [
    {
        id: 1,
        titulo: "Toxic Shine Seal",
        descripcion: "Sellador | Quick Detailer formulado en base de Sílice. Sellador Polifuncional. Apto para Pintura, Llantas, Vidrios, Plásticos, Gomas y Metales",
        categoria: "Selladores",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-seal-it1-06ef3b571744e272fa15944228576968-480-0.webp",
        precio: 3.850,
        stock: true,
        favorito: false,
    }, {

        id: 2,
        titulo: "Toxic Shine Lava Crush",
        descripcion: "Sellador diseñado para proteger la pintura del vehículo. Su fórmula de polímeros siliconados, fluoropolímeros y resinas nos aseguran el máximo brillo combinado con repelencia y suavidad al tacto",
        categoria: "Selladores",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-lava-crush1-b2c0eaa0d5ce71d1df15944223086102-240-0.webp",
        precio: 2.640,
        stock: true,
        favorito: false,

    }, {

        id: 3,
        titulo: "KochChemie Quick Shine",
        descripcion: "Limpia, mantiene y preserva en un solo paso. Las superficies reciben una profundización de color brillante sin rayas. Las huellas dactilares y la suciedad se eliminan con rapidez y facilidad",
        categoria: "ceras",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/koch-chemie-quick-shine_1-9423b8a99a299f329415906039814904-480-0.webp",
        precio: 8.304,
        stock: true,
        favorito: false,

    },
    {

        id: 4,
        titulo: "Meguiars Ultimate Quick detail",
        descripcion: "El spray detallador de alto brillo más avanzado! A través del uso de tecnología de polímeros hidrofóbicos. Meguiars ha creado un detallador en spray que verdaderamente repele el agua, tolera varios lavados y brinda protección agregada a su acabado",
        categoria: "ceras",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/meguiars-ultimate-quick-detail1-8010083f988262ffd116020143827486-480-0.webp",
        precio: 13.933,
        stock: true,
        favorito: false,

    },
    {

        id: 5,
        titulo: "Meguiars Ultimate Quick detail",
        descripcion: "El spray detallador de alto brillo más avanzado! A través del uso de tecnología de polímeros hidrofóbicos. Meguiars ha creado un detallador en spray que verdaderamente repele el agua, tolera varios lavados y brinda protección agregada a su acabado",
        categoria: "ceras",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/meguiars-ultimate-quick-detail1-8010083f988262ffd116020143827486-480-0.webp",
        precio: 13.933,
        stock: true,
        favorito: false,

    },
    {

        id: 6,
        titulo: "Menzerna 3 en 1",
        descripcion: "Compuesto de pulido de corte medio, con un acabado de alto brillo y sellador al mismo tiempo. Elimina de forma fiable rayas , remolinos y opacidad y proporciona una protección duradera para la superficie con un alto brillo.",
        categoria: "pulimentos",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/menzerna-3-en-1-250ml11-08d9eb5c78be4f665016020156257273-480-0.webp",
        precio: 14.939,
        stock: true,
        favorito: false,

    },
    {

        id: 7,
        titulo: "KochChemie P6",
        descripcion: "Compuesto de pulido de corte medio, con un acabado de alto brillo y sellador al mismo tiempo. Elimina de forma fiable rayas , remolinos y opacidad y proporciona una protección duradera para la superficie con un alto brillo.",
        categoria: "pulimentos",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/p6-koch1-d4cf006b7091b7932616317332744024-480-0.webp",
        precio: 16.892,
        stock: true,
        favorito: false,

    },
    {

        id: 8,
        titulo: "KochChemie P6",
        descripcion: "Compuesto de pulido de corte medio, con un acabado de alto brillo y sellador al mismo tiempo. Elimina de forma fiable rayas , remolinos y opacidad y proporciona una protección duradera para la superficie con un alto brillo.",
        categoria: "pulimentos",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/p6-koch1-d4cf006b7091b7932616317332744024-480-0.webp",
        precio: 16.892,
        stock: true,
        favorito: false,

    },
    {

        id: 9,
        titulo: "Toxic Shine NTP",
        descripcion: "Es un acondicionador de cubiertas de base acuosa, no graso, no daña ni deteriora la superficie y deja una terminación satinada",
        categoria: "Ruedas",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-ntp1-733ec64a088fc9a4e815944226651722-480-0.webp",
        precio: 3.100,
        stock: true,
        favorito: false,

    },
    {

        id: 10,
        titulo: "Toxic Shine NTP",
        descripcion: "Es un acondicionador de cubiertas de base acuosa, no graso, no daña ni deteriora la superficie y deja una terminación satinada",
        categoria: "Ruedas",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-ntp1-733ec64a088fc9a4e815944226651722-480-0.webp",
        precio: 3.100,
        stock: true,
        favorito: false,

    },
    {

        id: 11,
        titulo: "Toxic Shine Iron Warning",
        descripcion: "Es un descontaminante férrico capaz de disolver las partículas férricas y suciedades añejas de las llantas",
        categoria: "Ruedas",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-iron-warning1-cca8fda039c859585b15944222709227-480-0.webp",
        precio: 4.000,
        stock: true,
        favorito: false,

    },
    {

        id: 12,
        titulo: "KochChemie Reactive Rust Remover",
        descripcion: "Potente limpiador que está hecho con agentes reactivos y detergentes de rendimiento extra alto. Elimine el óxido superficial, las partículas de metal, el polvo de los frenos quemados y otros contaminantes no orgánicos con Rust Remover",
        categoria: "desengrasantes",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/koch-chemie-reactive-rust-remover1-ebac304b06673565f115906069584107-480-0.webp",
        precio: 18.582,
        stock: true,
        favorito: false,

    },
    {

        id: 13,
        titulo: "Toxic Shine Infierno Gel",
        descripcion: "Potente limpiador que está hecho con agentes reactivos y detergentes de rendimiento extra alto.",
        categoria: "desengrasantes",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-infierno-gel1-9edd9eb25222c4aa9b15944221442047-480-0.webp",
        precio: 2.630,
        stock: true,
        favorito: false,

    },
    {

        id: 14,
        titulo: "Toxic Shine Shampoo Wax",
        descripcion: "Potente limpiador que está hecho con agentes reactivos y detergentes de rendimiento extra alto. Elimine el óxido superficial, las partículas de metal, ",
        categoria: "shampoo",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-infierno-gel1-9edd9eb25222c4aa9b15944221442047-480-0.webp",
        precio:1.630,
        stock: true,
        favorito: false,

    },
    {

        id: 15,
        titulo: "Toxic Shine Shampoo Elite",
        descripcion: "Es un producto con pH Neutro el cual permite penetrar y remover rápidamente la difícil suciedad adherida a la pintura. Está fabricado con una esencia a coco & banana y una base de sílice permitiéndole otorgar una protección y brillo único a los acabados de la pintura",
        categoria: "shampoo",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-shampoo-elite1-03cffb553ce74a6e1915944230571330-480-0.webp",
        precio:1.900,
        stock: true,
        favorito: false,

    },
];

const inicializacion = () => {

    contenedorProductos.innerHTML = "";


    DataProductos.forEach((item) => {
        

        let producto = new ProductoTienda(
            item.id,
            item.titulo,
            item.descripcion,
            item.categoria,
            item.imagen,
            item.precio,
            item.stock,
            item.favorito,
        );

        stockProductos.push(producto);
    });

    stockProductos.forEach((item) => {

        let columna = document.createElement("div");
        columna.className = "col";
        
        let card = `
        <div class="card">
            <div class="card-img card-img-top">
                <img class=" rounded-1" src="${item.imagen}" alt="${item.titulo}">
            </div>
            <div class="card-body">
                <div class="card-titulo">
                    <h5>${item.titulo}</h5>
                </div>
                <div class="card-precio">
                    <p>$${item.precio}</p>
                </div>
                <div class="card-stock">
                    <small>${item.stock ? "Stock Disponible" : "Sin Stock"}</small>
                </div>
                <div class="card-botones mt-2">
                    <button class="btn btn-info btn-sm w-100 botones-card">Comprar</button>
                    <button class="btn btn-dark btn-sm w-100 mt-1 botones-card">Agregar Al Carrito</button>
                </div>
            </div>
        </div> `;

        columna.innerHTML = card;
        contenedorProductos.append(columna);
    });
};

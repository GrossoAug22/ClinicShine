class producto {
    constructor(
        id,
        producto,
        descripcion,
        categoria,
        precio,
        imagen,
        stock,
    ) {
        this.id = id;
        this.producto = producto;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    }
};

const dataProductos = [
    {
        id: 1,
        producto: "Shampoo Sonax",
        descripcion: "Shampoo viscoso súper concentrado que desprende suavemente la tierra y contaminantes sin dañar la pintura de su vehículo. Sus componentes activos encapsulan y remueven los contaminantes adheridos a la pintura sin necesidad de fricción ni esfuerzo, evitando que se produzcan rallas o marcas.",
        categoria: "lavado",
        precio: "$5.900",
        imagen: "https://instagram.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/375875436_17993967896325866_2301994617700037271_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=instagram.ftuc1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=7wdyyE13mHgAX_qwmIL&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE4NzU1NjEwOTc2NTk2MTQ3Mg%3D%3D.2-ccb7-5&oh=00_AfDM3I0Ndj8FUEaNuVUJLQa0WxOEm7lMnFK_xRqp0vn_6g&oe=65045EEF&_nc_sid=ee9879",
        stock: true,
    }, {
        id: 2,
        producto: "PULIMENTOS KOCH CHEMIE",
        descripcion: `-H9: PULIMENTO DE CORTE; mayor contenido abrasivo.
        -H8: PULIMENTO DE CORTE.
        -F6: PULIMENTO CORTE MEDIO.
        -M3: PULIMENTO DE TERMINACIÓN.
        -P6: 3 EN 1; abrillantador.`,
        categoria: "pulimentos",
        precio: "$35.000",
        imagen: "https://instagram.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/363003323_17989066601325866_8321710304528433873_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.ftuc1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=g_cdbjD93PEAX8bJfre&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE2MDcwODUxNTgyMzY2ODA3Mw%3D%3D.2-ccb7-5&oh=00_AfBn7sr3bIajvD6ZZBZ7RwMgzcj-LLt5OUskLc_Yltse_w&oe=65039821&_nc_sid=b41fef",
        stock: "true",
    }, {
        id: 3,
        producto: "KIT LAVADO TÓXIC",
        descripcion: `Incluye
            - Cera Extreme Detail
        - Shampoo Atomic
    - Limpiador Multiuso All Clean
    - Acondicionador de cubiertas / plásticos de exterior
    - Acondicionador de plásticos interiores
    - Kit brochas x3
    - Aplicador Poliespuma
    - Cepillo para llantas
    - abolso tóxic shine`,
        categoria: "lavado",
        precio: "$27.500",
        imagen: "https://instagram.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/360124243_17987208395325866_1408922139705921181_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.ftuc1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=moS14SuyzLIAX-bAE-f&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE1MDUyOTI5MjMzNzI2NTg1MA%3D%3D.2-ccb7-5&oh=00_AfDivfBDwGd8iew795EmLK957xiQXhrBSk-4ywhkso2P3Q&oe=650418B0&_nc_sid=b41fef",
        stock: true,
    },
    {
        id: 4,
        producto: "KIT INICIAL DE TRABAJO - SONAX",
        descripcion: `-Claybar - Arcilla Descontaminante 180 Gramos
            -Vision Clara
            -Cutmax - Pulidor Corte Alto
            -Ex 04/06 - Pulidor Corte Medio
            -Perfect Finish - Pulidor de Terminación
            -Sonax Paint Prepare - Preparador De Superficie
            -Sonax Polymer Netshield - Sellador Con Máxima Repelencia
            -Pad Overcars Micro Cordero 5 pulgadas
            -Pad Corte Alto Overcars
            -Pad Corte Medio Overcars`,
        categoria: "pulimentos",
        precio: "$75.000",
        imagen: "https://instagram.ftuc1-2.fna.fbcdn.net/v/t51.2885-15/355237599_1348398382381509_1607375270146653220_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ftuc1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Gd3bPA2NPkQAX-EcDnZ&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzEzMDExMDU0NTUyNDI2ODU2MQ%3D%3D.2-ccb7-5&oh=00_AfALj4ww9IzTEpRPqphXbAdq9XICKtH0IUnpZo8DMPV94A&oe=650536EC&_nc_sid=b41fef",
        stock: true,
    },
    {
        id: 5,
        producto: "Soft99 Iron Terminator",
        descripcion: `Iron Terminator lidiará con la suciedad más persistente de origen férrica o metálica causando un efecto rojizo espectacular. Su pH neutro es seguro para todas las zonas tratadas incluido el aluminio pulido`,
        categoria: "llantas",
        precio: "$10.328",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/soft99-iron-terminator1-fca6fee7f9a1a6601a16020197073334-640-0.webp",
        stock: true,
    },
    {
        id: 6,
        producto: "Toxic Shine Trim Buble Gum",
        descripcion: `Es un acondicionador de plásticos interior, el cual deja una terminación natural. Protege contra los rayos uv y el deterioro. Posee una increíble fragancia a chicle`,
        categoria: "interior",
        precio: "$2.920",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/toxic-shine-trim-buble-gum1-59c97ed4446fe453bf16068276527345-640-0.webp",
        stock: true,
    },
    {
        id: 7,
        producto: "Kit Interior Dreams Detailing",
        descripcion: `-Quick interior (acondicionador de plasticos) 500ml

            -Apc (limpiador multiproposito) 500ml
            
            -Aplicador microfibra 
            
            -3 microfibras de 35*35 economicas`,
        categoria: "interior",
        precio: "$6.522",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/801a660a-6498-463b-82cf-214beb5bd0e2-0be457405b552860af16226682457316-640-0.webp",
        stock: true,
    },
    {
        id: 8,
        producto: "Toxic Shine NTP",
        descripcion: `Es un acondicionador de cubiertas de base acuosa, no graso, no daña ni deteriora la superficie y deja una terminación satinada`,
        categoria: "cubiertas",
        precio: "$3.100",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/diseno-sin-titulo-351-87690a505e4affa73016378449750709-640-0.webp",
        stock: true,
    },
    {
        id: 9,
        producto: "Dreams Detailing Hot Degreaser",
        descripcion: `Es un limpiador universal altamente concentrado`,
        categoria: "llantas",
        precio: "$2.087",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/foto-22-6-22-17-37-36-261-ee036ab99fe61f816d16639470287127-640-0.webp",
        stock: true,
    },
    {
        id: 10,
        producto: "Glabs Shampoo Color Snow",
        descripcion: `Es un shampoo neutro especialmente diseñado para Foam lance con sus colores y aromas hace del lavado una experiencia única. Su espuma activa limpia la carrocería otorgando brillo y protección.`,
        categoria: "lavado",
        precio: "$2.800",
        imagen: "https://acdn.mitiendanube.com/stores/001/178/727/products/color-snow-rosa-5l1-1be6856960a0d458be16522179698226-640-0.webp",
        stock: true,
    },
];

let contenedorProductos = document.querySelector(".contenedorProductos");


const inicializacion = () => {
    dataProductos.forEach((item) => {
        let Producto = new producto(
            item.id,
        item.producto,
        item.descripcion,
            item.categoria,
            item.precio,
            item.imagen,
            item.stock,
        );
        dataProductos.push(Producto );
    })
    listarCards;
};

const listarCards = () => {

    contenedorProductos.innerHTML = " ";

    dataProductos.forEach((item) => {
        
        let columna = document.createElement("div");
        columna.classList="col";
    
        let card = `<div class="card mt-2">
    <div class="card-img card-img-top">
        <img class=" rounded-1" src="${item.imagen}" alt="${item.producto}">
    </div>
    <div class="card-body">
        <div class="card-titulo">
            <h5>${item.producto}</h5>
        </div>
        <div class="card-precio">
            <p>${item.precio}</p>
        </div>
        <div class="card-stock">
            <small>${item.stock ? "Stock Disponible" : "Sin Stock"}</small>
        </div>
        <div class="card-botones mt-2">
            <button class="btn btn-info btn-sm w-100 botones-card">Comprar</button>
            <button class="btn btn-dark btn-sm w-100 mt-1 botones-card">Agregar Al Carrito</button>
        </div>
    </div>
    </div>`;
            
        columna.innerHTML = card;
        contenedorProductos.appendChild(columna);
    });

};
listarCards();






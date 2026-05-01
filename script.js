// 1. Lista de productos (Se mantiene igual)
const misProductos = [
    {
        nombre: "Crema Facial Ácido Hialurónico Bioaqua",
        precio: "$15.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/CUIDADO FACIAL/Crema facial acido hialuronico bioaqua2.png",
        descripcion: "Hidrata intensamente, mejora la elasticidad y suaviza la piel. Ideal para pieles secas o deshidratadas."
    },
    {
        nombre: "Agua Micelar",
        precio: "$14.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/MAQUILLAJE/Agua micelar2.png",
        descripcion: "Limpia, desmaquilla e hidrata la piel en un solo paso. Contiene micelas que atraen la suciedad y el maquillaje sin resecar la piel."
    },
    {
        nombre: "Crema Facial Centella BioAqua",
        precio: "$15.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/CUIDADO FACIAL/Crema facial centella bioaqua2.png",
        descripcion: "Hidrata, calma y regenera la piel. Contiene extracto de centella asiática que ayuda a reducir inflamación y mejorar la cicatrización.."
    },
    {
        nombre: "Crema facial Retinol BioAqua",
        precio: "$15.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/CUIDADO FACIAL/Crema facial Retinol Bioaqua2.png",
        descripcion: "es un tratamiento nocturno antienvejecimiento que combina retinol (vitamina A) y ácido hialurónico para estimular el colágeno."
    },
    {
        nombre: "Jabón Ácido Hialurónico Bioaqua",
        precio: "$12.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/CUIDADO FACIAL/Jabon acido hialuronico bioaqua2.png",
        descripcion: "El jabón de ácido hialurónico Bioaqua es un limpiador facial hidratante diseñado para eliminar impurezas y exceso de grasa."
    },
    {
        nombre: "Jabon centella asiatica BioAqua",
        precio: "$12.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/CUIDADO FACIAL/Jabon centella asiatica bioaqua2.png",
        descripcion: "Hidrata, ilumina y unifica el tono de la piel. Contiene extracto de arroz que ayuda a reducir manchas y mejorar la textura. "
    },
    {
        nombre: "Jabon de arroz BioAqua",
        precio: "$12.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/CUIDADO FACIAL/Jabon de arroz bioaqua2.png",
        descripcion: "Limpia profundamente ain resecar, elimina impurezas y exceso de grasa, dejando la piel suave, fresca y equilibrada."
    },
    {
        nombre: "Crema facial arroz BioAqua",
        precio: "$15.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/CUIDADO FACIAL/Crema facial arroz bioaqua2.png",
        descripcion: "Hidrata, ilumina y unifica el tono de la piel. Contiene extracto de arroz que ayuda a reducir manchas y mejorar la textura."
    },
    {
        nombre: "Crema Facial Agua de rosas Sagui",
        precio: "$15.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/MAQUILLAJE/Agua de rosas Sagui.png",
        descripcion: "Es un tónico natural formulado con rosa centifolia y ácido láctico, ideal para calmar, refrescar y equilibrar el pH de la piel."
    },
    {
        nombre: "Balsamo Hidratante Bioaqua",
        precio: "$6.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/MAQUILLAJE/Balsamo hidratante Bioaqua2.png",
        descripcion: " Nutre y revitaliza la piel seca y agrietada. Contiene ingredientes hidratantes, repara y suaviza la piel."
    },
    {
        nombre: "Base 2 en 1 Bloom Shell",
        precio: "$36.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/MAQUILLAJE/Base 2 en 1 bloom shell2.png",
        descripcion: " Proporciona cobertura y duración permitiendote lucir impecable todo el día además de ser resistente al agua y al sudor. Su fórmula ligera se adapta perfectamentea tu piel."
    },
    {
        nombre: "Base fluida Elaya",
        precio: "$17.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/MAQUILLAJE/Base fluida Elaya2.png",
        descripcion: "Empareja el tono de la piel y proporciona cobertura natural."
    },
    {
        nombre: "Base hd Engol",
        precio: "$10.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/MAQUILLAJE/Base hd Engol2.png",
        descripcion: "Proporciona una cobertura total y un acabado mate, ideal para pieles grasas o mixtas."
    },
    {
        nombre: "Base mate Elaya",
        precio: "$23.000",
        imagen: "images/ROSA NOVA COMPRIMIDO/MAQUILLAJE/Base mate Elaya2.png",
        descripcion: "Alta cobertura y textura ligera que unifica el tono de la piel."
    }
];

// 2. Variables Globales
let carrito = [];
const grid = document.getElementById('grid-productos');

// 3. Función para mostrar productos
function cargarProductos() {
    if (!grid) return;
    grid.innerHTML = "";

    misProductos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p class="price">${producto.precio}</p>
                <button class="chevron-btn" onclick="toggleDetails(this)">
                    <i data-lucide="chevron-down"></i>
                </button>
                <div class="details">
                    <p>${producto.descripcion}</p>
                    <button class="buy-btn" onclick="agregarAlCarrito(${index})">Añadir al carrito</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
}

// --- FUNCIÓN AGREGADA: Controla la visibilidad de los detalles ---
function toggleDetails(btn) {
    // Buscamos el div 'details' que está justo después del botón
    const details = btn.nextElementSibling;
    if (details) {
        details.classList.toggle('active');
    }
    // Rotamos la flechita
    btn.classList.toggle('rotate');
}

// 4. Lógica del Carrito
function agregarAlCarrito(index) {
    const productoSeleccionado = misProductos[index];
    carrito.push(productoSeleccionado);
    actualizarContadorCarrito();
    // Reemplacé el alert por un log para no interrumpir, pero puedes dejarlo
    console.log(`✅ ${productoSeleccionado.nombre} añadido.`);
}

function actualizarContadorCarrito() {
    const contadorHeader = document.getElementById('cart-count-header');
    const contadorResumen = document.getElementById('cart-count');
    const totalElemento = document.getElementById('total-precio');

    if (contadorHeader) contadorHeader.innerText = carrito.length;
    if (contadorResumen) contadorResumen.innerText = carrito.length;

    if (totalElemento) {
        let sumaTotal = 0;
        carrito.forEach(p => {
            const precio = parseInt(p.precio.replace(/[^0-9]/g, ""));
            sumaTotal += precio;
        });
        totalElemento.innerText = `$${sumaTotal.toLocaleString('es-CO')}`;
    }
}

// 5. Envío a WhatsApp
function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. ¡Añade algunos productos! 🌹");
        return;
    }

    const telefonoNegocio = "573204939307";
    let mensaje = "¡Hola! Me gustaría realizar el siguiente pedido en Rosa Nova: \n\n";
    let total = 0;

    carrito.forEach((producto, index) => {
        mensaje += `*${index + 1}.* ${producto.nombre} - ${producto.precio}\n`;
        const precioNumerico = parseInt(producto.precio.replace(/[^0-9]/g, ""));
        total += precioNumerico;
    });

    mensaje += `\n*Total estimado:* $${total.toLocaleString('es-CO')}`;
    mensaje += `\n\n¡Quedo atento para coordinar el pago y envío!`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${telefonoNegocio}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, '_blank');
}

// 6. Iniciar la página
cargarProductos();
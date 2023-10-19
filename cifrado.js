
function cifrar() {
    const mensaje = document.getElementById("mensaje").value;
    const filas = parseInt(document.getElementById("filas").value);

    if (isNaN(filas) || filas <= 0) {
        alert("Por favor, ingresa un número de filas válido.");
        return;
    }

    const mensajeCifrado = escitalaCifrar(mensaje, filas);
    document.getElementById("resultado").textContent = mensajeCifrado;
}

function descifrar() {
    const mensajeCifrado = document.getElementById("mensaje").value;
    const filas = parseInt(document.getElementById("filas").value);

    if (isNaN(filas) || filas <= 0) {
        alert("Por favor, ingresa un número de filas válido.");
        return;
    }

    const mensajeDescifrado = escitalaDescifrar(mensajeCifrado, filas);
    document.getElementById("resultado").textContent = mensajeDescifrado;
}

function escitalaCifrar(mensaje, filas) {
    let mensajeCifrado = '';
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz.push([]);
    }

    for (let i = 0; i < filas; i++) {
        for (let j = i; j < mensaje.length; j += filas) {
            matriz[i].push(mensaje[j]);
        }
    }

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            mensajeCifrado += matriz[i][j];
        }
    }

    mostrarMatriz(matriz);
    return mensajeCifrado;
}

function escitalaDescifrar(mensajeCifrado, filas) {
    const columnas = Math.ceil(mensajeCifrado.length / filas);
    let mensajeDescifrado = '';
    let matriz = [];
    let k = 0;
    for (let i = 0; i < filas; i++) {
        matriz.push([]);
    }

    for (let j = 0; j < columnas; j++) {
        for (let i = 0; i < filas; i++) {
            if (k < mensajeCifrado.length) {
                matriz[i][j] = mensajeCifrado[k];
                k++;
            }
        }
    }

    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[j][i]) {
                mensajeDescifrado += matriz[j][i];
            }
        }
    }

    mostrarMatriz(matriz);
    return mensajeDescifrado;
}

function mostrarMatriz(matriz) {
    const tabla = document.getElementById("matriz");
    tabla.innerHTML = ''; // Limpiar la tabla
    for (let i = 0; i < matriz.length; i++) {
        const fila = tabla.insertRow();
        for (let j = 0; j < matriz[i].length; j++) {
            const celda = fila.insertCell();
            celda.innerHTML = matriz[i][j];
        }
    }
}

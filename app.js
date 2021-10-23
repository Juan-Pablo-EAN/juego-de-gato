const fondo = document.querySelector(".fondo");
const fondoModal = document.querySelector(".fondoModal");
const botonX = document.getElementById("botonX");
const botonO = document.getElementById("botonO");
const modalResult = document.querySelector(".modalResult");
const aceptar = document.getElementById("aceptar");
const reiniciar = document.getElementById("reiniciar");
const resultadoModal = document.querySelector(".resultadoModal");
const textoResult = document.querySelector(".resultado");

var simbolo = "";
var simboloComp = "";
var ganador = false;
var juegaC = false;

const abrirModalR = texto => {
    setTimeout(() => {
        resultadoModal.style.display = "flex";
        textoResult.textContent = texto;
        ganador = true;
    }, 500);
}

aceptar.addEventListener("click", () => {
    cerrarModal();
});

reiniciar.addEventListener("click", () => {
    location.reload();
});

const cerrarModal = () => {
    fondoModal.style.display = "none";
    resultadoModal.style.display = "none";
}

botonX.addEventListener("click", () => {
    simbolo = "X";
    simboloComp = "O";
    cerrarModal();
});
botonO.addEventListener("click", () => {
    simbolo = "O";
    simboloComp = "X";
    cerrarModal();
});

const crearTabla = () => {
    const tabla = document.createElement("table");
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const tr3 = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");
    const td9 = document.createElement("td");

    tabla.classList.add("tabla");
    tr1.classList.add("fila1");
    tr2.classList.add("fila2");
    tr3.classList.add("fila3");

    td1.classList.add("id0f0");
    td2.classList.add("id1f0");
    td3.classList.add("id2f0");
    td4.classList.add("id0f1");
    td5.classList.add("id1f1");
    td6.classList.add("id2f1");
    td7.classList.add("id0f2");
    td8.classList.add("id1f2");
    td9.classList.add("id2f2");

    td1.addEventListener("click", () => {
        if (td1.classList.length === 1) {
            escribirSimbolo(simbolo, td1);
        }
    });
    td2.addEventListener("click", () => {
        if (td2.classList.length === 1) {
            escribirSimbolo(simbolo, td2);
        }
    });
    td3.addEventListener("click", () => {
        if (td3.classList.length === 1) {
            escribirSimbolo(simbolo, td3);
        }
    });
    td4.addEventListener("click", () => {
        if (td4.classList.length === 1) {
            escribirSimbolo(simbolo, td4);
        }
    });
    td5.addEventListener("click", () => {
        if (td5.classList.length === 1) {
            escribirSimbolo(simbolo, td5);
        }
    });
    td6.addEventListener("click", () => {
        if (td6.classList.length === 1) {
            escribirSimbolo(simbolo, td6);
        }
    });
    td7.addEventListener("click", () => {
        if (td7.classList.length === 1) {
            escribirSimbolo(simbolo, td7);
        }
    });
    td8.addEventListener("click", () => {
        if (td8.classList.length === 1) {
            escribirSimbolo(simbolo, td8);
        }
    });
    td9.addEventListener("click", () => {
        if (td9.classList.length === 1) {
            escribirSimbolo(simbolo, td9);
        }
    });

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);

    tr3.appendChild(td7);
    tr3.appendChild(td8);
    tr3.appendChild(td9);

    tabla.appendChild(tr1);
    tabla.appendChild(tr2);
    tabla.appendChild(tr3);

    fondo.appendChild(tabla);
}

crearTabla();

var cuadricula = [
    [
        "",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ]
];

const escribirSimbolo = (simb, nodo) => {
    if (ganador === false && juegaC === false) {
        nodo.textContent = simb;
        juegaC = true;
        let id = nodo.className;
        id = id.replace("id", "");
        id = id.replace("f", "");
        let f = parseInt(id.charAt(id.length - 1));
        let n = parseInt(id.substring(1, 0));

        cuadricula[f][n] = `${simbolo}`;
        nodo.classList.add("ok");

        setTimeout(() => {
            jugadaComputadora();
        }, 1000);

        leerCuadricula(simbolo);
    }
}

var espaciosVacios = [];

const jugadaComputadora = () => {
    if(ganador === false){
        for (let row = 0; row < cuadricula.length; row++) {
            for (let colum = 0; colum < cuadricula[row].length; colum++) {
                if (cuadricula[row][colum] === "") {
                    espaciosVacios.push(`${row}/${colum}`);
                }
            }
        }
        escogerEspacio();
    }
}

const escogerEspacio = () => {
    if (espaciosVacios.length !== 0) {
        let radom = Math.round(Math.random() * (espaciosVacios.length - 1));
        console.log(cuadricula);
        let numero = espaciosVacios[radom].replace("/", "");
        let nFila = numero.charAt(0);
        let nColum = numero.charAt(1);
        let cuadro = document.querySelector(`.id${nColum}f${nFila}`);
        cuadro.style.color = "rgb(8, 248, 60)";
        cuadro.textContent = simboloComp;
        juegaC = false;
        cuadro.classList.add("ok");
        cuadricula[nFila][nColum] = `${simboloComp}`;
        leerCuadricula(simboloComp);
        while (espaciosVacios.length > 0) {
            espaciosVacios.pop();
        }
    } else {
        if(ganador === false){
            abrirModalR("No hubo ganador");
        }
    }
}

const leerCuadricula = letra => {
    if (cuadricula[0][0] === letra && cuadricula[1][1] === letra && cuadricula[2][2] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[0][0] === letra && cuadricula[1][1] === letra && cuadricula[2][2] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[0][0] === letra && cuadricula[1][0] === letra && cuadricula[2][0] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[0][0] === letra && cuadricula[1][1] === letra && cuadricula[2][0] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[0][1] === letra && cuadricula[1][1] === letra && cuadricula[2][1] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[0][2] === letra && cuadricula[1][2] === letra && cuadricula[2][2] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[0][0] === letra && cuadricula[0][1] === letra && cuadricula[0][2] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[1][0] === letra && cuadricula[1][1] === letra && cuadricula[1][2] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[2][0] === letra && cuadricula[2][1] === letra && cuadricula[2][2] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    } else if (cuadricula[0][2] === letra && cuadricula[1][1] === letra && cuadricula[2][0] === letra) {
        abrirModalR(`El ganador es ${letra}`);
    }
}

const mostrarAviso = () => {

}
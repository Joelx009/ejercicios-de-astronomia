function ejercicioIf() {
    const input = prompt("Ingrese la magnitud aparente de la estrella (e.g., 0.5, 6.2):");
    if (input === null || input.trim() === "") {
        alert("Operación cancelada.");
        return;
    }
    const magnitud = parseFloat(input);
    let clasificacion;

    if (isNaN(magnitud)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    if (magnitud < 1.0) {
        clasificacion = "Extremadamente brillante (e.g., Sirio)";
    } else if (magnitud < 2.5) {
        clasificacion = "Muy brillante (e.g., Polar)";
    } else if (magnitud < 6.0) {
        clasificacion = "Brillante (visible a simple vista)";
    } else if (magnitud < 8.0) {
        clasificacion = "Débil (requiere binoculares)";
    } else {
        clasificacion = "No visible (requiere equipo avanzado)";
    }

    alert(`La magnitud ${magnitud} se clasifica como: \n\n ${clasificacion}`);
}

function ejercicioFor() {
    const numDistancias = 3; 
    let sumaDistancias = 0;
    let registro = "Distancias ingresadas (millones de km):\n";

    for (let i = 0; i < numDistancias; i++) {
        const input = prompt(`Ingrese la distancia #${i + 1} en millones de km:`);
        if (input === null) {
            alert("Operación cancelada.");
            return;
        }
        const distancia = parseFloat(input);

        if (isNaN(distancia) || distancia < 0) {
            alert("ingrese un número positivo válido. Reinicie el ejercicio.");
            return;
        }
        
        sumaDistancias += distancia;
        registro += `- ${distancia.toFixed(2)}\n`;
    }

    const promedio = sumaDistancias / numDistancias;
    
    alert(`${registro}\nEl promedio de las ${numDistancias} distancias es: \n\n${promedio.toFixed(2)} millones de km`);
}

function ejercicioWhile() {
    let contadorCratéresGrandes = 0;
    let diametro = -1; 
    let totalCratéres = 0;

    alert("Ingresa el diámetro de los cráteres en km. Ingresa 0 para terminar.");

    while (diametro !== 0) {
        const input = prompt(`Cráter #${totalCratéres + 1}: Ingrese diámetro (km, 0 para terminar):`);
        if (input === null) {
            alert("Operación cancelada.");
            return;
        }
        diametro = parseFloat(input);

        if (isNaN(diametro) || diametro < 0) {
            alert("Por favor, ingrese un número positivo válido. Reinicie el ejercicio.");
            return;
        }
        
        if (diametro > 0) {
            totalCratéres++;
            if (diametro > 50) {
                contadorCratéresGrandes++;
            }
        }
    }

    alert(`Procesamiento finalizado. \n\nNúmero total de cráteres leídos: ${totalCratéres} \nCráteres que superan los 50 km: ${contadorCratéresGrandes}`);
}


function ejercicioSwitch() {
    const input = prompt("Ingrese el código (1-5) para identificar el cuerpo celeste: \n1: Estrella \n2: Planeta \n3: Cometa \n4: Asteroide \n5: Galaxia");
    if (input === null || input.trim() === "") {
        alert("Operación cancelada.");
        return;
    }
    
    const codigo = parseInt(input);
    let tipoCuerpo;

    if (isNaN(codigo)) {
        alert("Por favor, ingrese un número entero válido.");
        return;
    }

    switch (codigo) {
        case 1:
            tipoCuerpo = "Estrella (cuerpo que emite luz propia)";
            break;
        case 2:
            tipoCuerpo = "Planeta (cuerpo que orbita una estrella)";
            break;
        case 3:
            tipoCuerpo = "Cometa (cuerpo helado con cola de gas y polvo)";
            break;
        case 4:
            tipoCuerpo = "Asteroide (cuerpo rocoso menor, generalmente en un cinturón)";
            break;
        case 5:
            tipoCuerpo = "Galaxia (conjunto masivo de estrellas, gas y materia oscura)";
            break;
        default:
            tipoCuerpo = "Código no reconocido (Cuerpo desconocido)";
    }

    alert(`El código ${codigo} corresponde a: \n\n**${tipoCuerpo}**`);
}

function ejercicioDoWhile() {
    let mensaje = "--- Resumen de Registros de Lux ---\n";
    let continuar;
    let contador = 0;

    do {
        const luxInput = prompt(`Registro #${contador + 1}: Ingrese nivel de luz (lux):`);
        if (luxInput === null) {
            alert("Operación cancelada.");
            return;
        }
        const lux = parseFloat(luxInput);

        if (isNaN(lux) || lux < 0) {
            alert("Por favor, ingrese un número positivo válido. Reinicie el proceso.");
            return;
        }
        
        contador++;
        mensaje += `\n- Valor registrado: ${lux} lux.`;
        
        if (lux < 5) {
            mensaje += ` **¡Alerta: Noche Profunda!**`;
        }
        
        continuar = prompt("¿Desea registrar otro valor? (Escriba 'no' para salir)").toLowerCase();

    } while (continuar !== "no");
    
    alert(mensaje);
}
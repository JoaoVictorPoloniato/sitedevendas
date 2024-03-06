// contador.js
function startCounters() {
    let estadosAtendidos = 1;
    let numeroClientes = 1;
    let numeroUsuarios = 1;
    let numeroUnidades = 1;
    let counterInterval;

    const estadosAtendidosElement = document.getElementById('estadosAtendidos');
    const numeroClientesElement = document.getElementById('numeroClientes');
    const numeroUsuariosElement = document.getElementById('numeroUsuarios');
    const numeroUnidadesElement = document.getElementById('numeroUnidades');


    const incrementRates = {
        estadosAtendidos: 0.2,  
        numeroClientes: 5,    
        numeroUsuarios: 20,    
        numeroUnidades: 0.1     
    };

    function updateCounters() {
        estadosAtendidosElement.textContent = Math.min(Math.ceil(estadosAtendidos), 12);
        numeroClientesElement.textContent = Math.min(Math.ceil(numeroClientes), 301);
        numeroUsuariosElement.textContent = Math.min(Math.ceil(numeroUsuarios), 1000);
        numeroUnidadesElement.textContent = Math.min(Math.ceil(numeroUnidades), 5);

        if (estadosAtendidos >= 12 && numeroClientes >= 301 && numeroUsuarios >= 1000 && numeroUnidades >= 5) {

            clearInterval(counterInterval);
        } else {

            estadosAtendidos += incrementRates.estadosAtendidos;
            numeroClientes += incrementRates.numeroClientes;
            numeroUsuarios += incrementRates.numeroUsuarios;
            numeroUnidades += incrementRates.numeroUnidades;
        }
    }

    function handleIntersection(entries) {
        if (entries[0].isIntersecting) {
           
            counterInterval = setInterval(updateCounters, 10);
        }
    }


    const observer = new IntersectionObserver(handleIntersection);


    observer.observe(estadosAtendidosElement);
}

window.onload = startCounters;

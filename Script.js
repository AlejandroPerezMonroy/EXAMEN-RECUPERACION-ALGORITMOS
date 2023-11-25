function calcularPrestamo() {
    const nombre = document.getElementById('prestamo').value;
    const cargo = document.getElementById('cuotas').value;
    const horasExtras = parseFloat(document.getElementById('interes').value);
  
    const cuota tres = 333.33;
    const cuota seis = 166.67;
    const cuota nueve = 111.11;

    const interes = {
      cuota tres: 2.5,
      cuota seis: 5,
      cuota nueve: 10
    };
  
    const calcularPrestamo = interes[cuota] || 0.00;
    if (salarioBase === 0.00) {
      document.getElementById('resultado').innerHTML = "Cargo no válido";
      return;
    }
  
    const calcularPrestamo = interes * cuota tres * tiempo;
    const calcularPrestamo = interes * cuota seis * tiempo;
    const calcularPrestamo = interes * cuota nueve * tiempo;
  
    // Mostrar resultados
    const resultadoHTML = `
      <h2>Resultados</h2>
      <p>Prestamo: ${prestamo}</p>
      <p>Cuota: ${cuota}</p>
      <p>Calculo Prestamo: Q${calculoPrestamo.toFixed(2)}</p>
    `;
  
    document.getElementById('prestamo').innerHTML = resultadoHTML;
  }
  
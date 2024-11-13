function calcularDiasRestantes() {
    const hoje = new Date(); // Data atual
    const fimNovembro = new Date(hoje.getFullYear(), 10, 30); // 30 de novembro (mês 10 porque o índice começa em 0)
  
    const diferenca = fimNovembro - hoje; // Diferença em milissegundos
    const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); // Converte de milissegundos para dias
  
    // Exibe o resultado no span com id "dias"
    document.getElementById('dias').textContent = diasRestantes;
  }
  
  // Calcular automaticamente ao carregar a página
  window.onload = calcularDiasRestantes;
  
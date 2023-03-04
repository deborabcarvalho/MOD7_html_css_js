const form = document.getElementById('form-compara')




form.addEventListener("submit", function(e) {
  e.preventDefault();

  const valorA = document.getElementById('valor-A')
  const valorB = document.getElementById('valor-B')
  const mensagemSucesso = `O valor B <b>${valorB.value}</b> é maior que o valor A <b>${valorA.value}</b>`
  const mensagemErro = `O valor B <b>${valorB.value}</b> é MENOR que o valor A <b>${valorA.value}</b>`
  
  
  if (valorB.value > valorA.value) {
    const containerMensageSucess = document.querySelector('.mensagem-sucesso')
    containerMensageSucess.innerHTML = mensagemSucesso
    containerMensageSucess.style.display = "block"
    document.querySelector(".mensagem-erro").style.display = "none"

    valorA.value = ''
    valorB.value = ''

  } else {
    const containerMensageError = document.querySelector('.mensagem-erro')
    containerMensageError.innerHTML = mensagemErro
    containerMensageError.style.display = "block"
    document.querySelector(".mensagem-sucesso").style.display = "none"

    valorA.value = ''
    valorB.value = ''

  }



});


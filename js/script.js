const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('form')

  let carregando = "<img src='assets/ajax-loader.gif' /> "

  let pronto = `<p>Reserva efetuada! Obrigado! </p>`
  
  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = pronto    
  }, 2000)  

})
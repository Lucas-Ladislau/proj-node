const form = document.getElementById('create-curso');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const ch = document.getElementById('ch').value;
  
  const data = { nome, ch };
  console.log(data);

  fetch('/cursos/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    
  })
  .then(response =>{ 
    response.json();
    console.log(response.json())})
  .then(data => {
    console.log('Dados enviados:', data);
    // faça algo com a resposta
  })
  .catch(error => {
    console.error('Erro:', error);
    // faça algo com o erro
  });
});
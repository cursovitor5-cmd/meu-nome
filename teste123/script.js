// Seleciona elementos do HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Função para adicionar tarefa
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim(); // remove espaços

  if(taskText !== '') {
    const li = document.createElement('li'); 
    li.className = 'task-item list-group-item';
    li.innerHTML = `<span>${taskText}</span> <button class="btn-delete">×</button>`;
    taskList.appendChild(li); // adiciona tarefa
    taskInput.value = '';      // limpa input
    taskInput.focus();         // mantém foco
  }
});

// Evento para marcar como concluída ou deletar tarefa
taskList.addEventListener('click', (e) => {
  if(e.target.tagName === 'SPAN') {
    e.target.parentElement.classList.toggle('completed'); // risca tarefa
  }
  if(e.target.classList.contains('btn-delete')) {
    e.target.parentElement.remove(); // remove tarefa
  }
});

// Permite adicionar tarefa pressionando Enter
taskInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') addTaskBtn.click();
});

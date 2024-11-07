document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, escribe una tarea');
        return;
    }

    // Crear el elemento de la lista
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Añadir el botón al item de la lista
    li.appendChild(deleteBtn);

    // Añadir la tarea al listado
    document.getElementById('taskList').appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = '';
});
// Funzione per creare una nuova attività e aggiungerla alla lista
function creaAttivita(titolo, data) {
    // Crea il nuovo elemento <li>
    const li = document.createElement('li');

    // Crea il contenitore del titolo
    const titleSpan = document.createElement('span');
    titleSpan.className = 'task-title';
    titleSpan.textContent = titolo;

    // Crea il contenitore della data
    const dateSpan = document.createElement('span');
    dateSpan.className = 'task-date';
    dateSpan.textContent = data;

    // Crea il contenitore per le azioni (es: elimina)
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    // Bottone elimina (puoi aggiungere altre azioni)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Elimina';
    deleteBtn.onclick = function() {
        li.remove();
    };

    actionsDiv.appendChild(deleteBtn);

    // Aggiungi titolo, data e azioni al <li>
    li.appendChild(titleSpan);
    li.appendChild(dateSpan);
    li.appendChild(actionsDiv);

    // Aggiungi il <li> alla lista delle attività
    document.getElementById('tasks').appendChild(li);
}

// Gestione dell'invio del form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const titolo = document.getElementById('task-title').value;
        const data = document.getElementById('task-date').value;
        creaAttivita(titolo, data);
        form.reset();
    });
});
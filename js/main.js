document.addEventListener('DOMContentLoaded', function() {
    const noteForm = document.getElementById('noteForm');
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');

    noteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addNote();
    });

    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText === '') {
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = noteText;

        notesList.appendChild(listItem);

        noteInput.value = '';
        noteInput.focus();
    }
});

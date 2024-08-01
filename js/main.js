document.addEventListener('DOMContentLoaded', function() {
    const noteForm = document.getElementById('noteForm');
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');

    noteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addNote();
    });


    noteInput.addEventListener('input', function() {
        const originalValue = this.value;
        this.value = this.value.replace(/[^0-9]/g, '');
        if (originalValue !== this.value) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Solo se pueden ingresar números',
                showConfirmButton: true,
                customClass: {
                    popup: 'swal-bg-alert'
                },
                background: '#e0f7fa', 
                color: '#004d79', 
                confirmButtonColor: '#00796b'
            });
        }
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

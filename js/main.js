document.addEventListener('DOMContentLoaded', function() {
    const noteForm = document.getElementById('noteForm');
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');
    const averageDisplay = document.getElementById('averageDisplay');

    let notes = [];

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

        const noteValue = parseFloat(noteText);
        if (isNaN(noteValue)) {
            return;
        }

        notes.push(noteValue);

        const listItem = document.createElement('li');
        listItem.textContent = noteValue;
        notesList.appendChild(listItem);

        noteInput.value = '';
        noteInput.focus();

        updateAverage();
    }

    function updateAverage() {
        if (notes.length === 0) {
            averageDisplay.textContent = 'Promedio: 0';
            return;
        }

        const total = notes.reduce((acc, val) => acc + val, 0);
        const average = total / notes.length;
        averageDisplay.textContent = `Promedio: ${average.toFixed(2)}`;
    }
});

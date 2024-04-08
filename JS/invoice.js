function calculateAmount() {
    let rows = document.querySelectorAll('#invoice-table tbody tr');
    let totalAmount = 0;

    rows.forEach((row) => {
        let quantity = parseFloat(row.querySelector('td:nth-child(2) input').value) || 0;
        let rate = parseFloat(row.querySelector('td:nth-child(3) input').value) || 0;
        let amount = quantity * rate;
        row.querySelector('.amount').textContent = amount.toFixed(2);
        totalAmount += amount;
    });

    // Display the total amount
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    calculateAmount();
}

function addRow() {
    let tbody = document.getElementById('tableBody');
    let newRow = `
        <tr>
            <td><input type="text"></td>
            <td><input type="number" min="0"></td>
            <td><input type="number" min="0" step="0.01"></td>
            <td class="amount"></td>
            <td><button onclick="removeRow(this)">Remove</button></td>
        </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', newRow);
}
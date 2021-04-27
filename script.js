const Modal = {
    open() {
        // Abrir Modal
        //Adicionar a class active do modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        //Fechar o modal
        //Remover a classe active do modal
        document.querySelector('.modal-overlay').classList.remove('active')

    }
}

const transactions = [{
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Água',
        amount: -3500,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Salário',
        amount: 26600,
        date: '05/01/2021'
    }
]

const Transaction = {
    incomes() {
        // Somar as entradas
    },
    expenses() {
        // Somar as saídas
    },
    total() {
        // Entradas - Saídas
    }

}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclasses = transaction.amount > 0 ? "income" : "expense"
        const amount = Utils.formatCurrency(transaction)
        const html = `
        <tr>
        <td class="description">${transaction.description}</td>
        <td class="${CSSclasses}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img src="./assets/minus.svg" alt="Remover transação"></td>
    </tr>`

        return html
    }
}



DOM.addTransaction(transactions[0])

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
    }
}

transactions.forEach(function (transaction) {
    DOM.addTransaction(transaction)
})
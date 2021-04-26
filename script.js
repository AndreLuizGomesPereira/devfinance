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
    innerHTMLTransaction() {
        const html = `
        <tr>
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">06/04/2021</td>
        <td><img src="./assets/minus.svg" alt="Remover transação"></td>
    </tr>`
    }
}
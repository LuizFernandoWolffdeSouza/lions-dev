const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let funcionarios = []
exibirMenu()


function exibirMenu() {
    console.log(`
Menu:
1. Cadastrar funcionário
2. Listar todos os funcionários
3. Exibir funcionário com maior salário
4. Sair
`)
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarFuncionario()

                break
            case '2':
                listarFuncionarios()
                break
            case '3':
                exibirMaiorSalario()

                break
            case '4':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
}
function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
            rl.question('Digite o salário do funcionário: ', (salario) => {
                console.log("Não há funcionarios cadastrados"), funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
                console.log('Funcionário cadastrado com sucesso!')
                exibirMenu()
            })
        })
    })
}
function listarFuncionarios() {
    if (funcionarios.length == 0) {
        console.log("nenhum funcionario encontrado")
    }
    else {

        for (let i = 0; i < funcionarios.length; i++) {
            console.log(`A lista de funcionários é ${funcionarios[i].nome}`)
            console.log(`A lista de funcioários é ${funcionarios[i].cargo}`)
            console.log(`A lista de funcioários é ${funcionarios[i].salario}`)

        }

    }
    exibirMenu()
}
function exibirMaiorSalario() {
    if (funcionarios.length == 0) {
        console.log("Nenhum sálario cadastrado")
    } else {
        let salariomaior = funcionarios[0]
        for (let i = 0; i < funcionarios.length; i++) {
            if (funcionarios[i].salario > salariomaior.salario) {
                salariomaior = funcionarios[i]
            }

        }
        console.log(`Funcionário com maior salário:
        Nome: ${salariomaior.nome}
        Cargo: ${salariomaior.cargo}
        Salário:R$${salariomaior.salario}`)

        exibirMenu()

    }


}












// se funcionarios estiver vazio, exibir mensagem
// senão, percorrer o vetor funcionarios, e encontrar o funcionario com maior salario


























/*let Luiz = {
    nome: "Luiz Wolff",
    cargo: "GYM",
    salario: 10.000
}
let Adam = {
    nome: "Luiz Wolff",
    cargo: "GYM",
    salario: 10.000
}*/
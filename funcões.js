// funcoes nomeadas

// calculo do IMC
function imc(altura, peso){
  let result = peso / (altura * altura)
  console.log(result.toFixed(2))
}

// função nomeada
function discountCalculate(name, price, discount){
  let calculate =  price - (price * discount / 100)
  console.log(`O produto ${name}, possui ${discount}% de desconto e o valor final é: ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(calculate)}`)
}

// arrow function
const speak = (name) => {
  console.log(`Olá ${name}`)
}
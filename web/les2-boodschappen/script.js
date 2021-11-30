console.log("Script is geladen!")

const groentevak = document.getElementById('groente')
const fruitvak = document.getElementById('fruit')

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'navy';
    fruitvak.appendChild(nieuwElement);
}

function zetInGroenteLa(groente){
    console.log(groente);

    const nieuweElement = document.createElement('h2');
    nieuweElement.innerHTML = groente;
    nieuweElement.className = 'navy';
    groentevak.appendChild(nieuweElement);
}
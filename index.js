const but = document.querySelector("#new-quote");
const quote = document.querySelector(".quote-span");
const name = document.querySelector(".name")

const quotes = [{ quote:`hello again`, name: `Kumar`},
                { quote:`hi`, name: `Ash`},
                ];

but.addEventListener('click', function(){

    let ranquote = Math.floor(Math.random() * quotes.length);

    name.innerText = quotes[ranquote].name;
    quote.innerText = quotes[ranquote].quote;

})
let numbers = [1, 2, 500, 2, 200, 1, 1, 125]
let ingredients = [' Salzgurke(n)', ' Paprikascht(n) rot und grün', 'g Tomate(n)', ' Zwiebeln(n)', 'g Schafskäse(n)', ' Glas Oliven schwarz 1000g', ' Zitronen', 'ml Olivenöl', 'Salz und Pfeffer', 'Oregano'];
let results = [];

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
    convert();
}

function convert() {
    let output = document.getElementById('listItems');
    output.innerHTML = '';
    results = [];
    let ref = document.getElementById('counter');
    numberAsString = ref.value;
    multiplier = parseInt(numberAsString);
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        let result = multiplier * number;
        results.push(result);
    }

    for (let i = 0; i < ingredients.length; i++) {
        const result = results[i];
        const ingredient = ingredients[i];
        if (ingredient && result) {
            output.innerHTML += `
            <li>${result}${ingredient}</li>
            `;
        } else {
            output.innerHTML += `
            <li>${ingredient}</li>
            `;
        }

    }
}
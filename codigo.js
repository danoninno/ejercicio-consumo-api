const apiUrl = "https://breakingbadapi.com/api/"
// const fakeQuotes = [
//     {
//         quote: "Sit cupidatat sint ex non labore amet exercitation consequat tempor cillum fugiat eu occaecat.",
//         author: "Nombre de autor 1",
//         id: 1
//     },
//     {
//         quote: "Incididunt commodo aliqua dolor fugiat ut non.",
//         author: "Nombre de autor 2",
//         id: 2
//     },
//     {
//         quote: "Sunt amet pariatur do duis.",
//         author: "Nombre de autor 3",
//         id: 3
//     },
//     {
//         quote: "Amet irure deserunt commodo nostrud ex exercitation officia.",
//         author: "Nombre de autor 4",
//         id: 4
//     },
//     {
//         quote: "Nisi irure ullamco eiusmod anim laboris esse quis Lorem aliquip officia cillum aute.",
//         author: "Nombre de autor 5",
//         id: 5
//     },
    
// ]



function doQuery( url , displayFunction ) {
    
    //mandamos una solicitud y obtenemos una promesa
    const request = fetch( apiUrl + url )

    //esperar a que resuelva la promesa
    request.then( function(response) {
        
        //info sobre buestra respuesta
        console.log("response", response)
        // extraer "cuerpo" de respuesta
        response.json().then( function(data) {
            console.log("data", data)

            if(typeof displayFunction == "function") {
                displayFunction( data )  
            }

        })
    })

    console.log("request", request )

}


function displayQuotes( data ) {

    console.log("display", data);  

    const body = document.querySelector("body")

    data.forEach(createAppendQuote)

}
function createAppendQuote(quote) {
    const body = document.querySelector("body")
    const quoteBox = createQuoteHTML(quote)
    body.append(quoteBox)
}

function createQuoteHTML (quote) {

    const quoteBox = document.createElement("blockquote")
    const textBox = document.createElement("p")
    const authorBox = document.createElement("p")

    textBox.innerHTML = quote.quote
    authorBox.innerHTML = quote.author

    quoteBox.append (textBox)
    quoteBox.append (authorBox)
    quoteBox.classList.add("quote")

    return quoteBox

}


doQuery("quotes", displayQuotes)
doQuery("characters")
doQuery("episodes")



console.log("Consulta API")
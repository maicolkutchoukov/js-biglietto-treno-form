/*

Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
 realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina
 in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali,
     per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, 
questa potrebbe essere un'implementazione da seguire per il secondo milestone. 
Potete scegliere di implementare una soluzione completamente diversa oppure simile, 
ma in ogni caso cercate di farla vostra.

*/

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {

    // Richiesta età del passeggero 
    const age = document.getElementById('age');
    const ageValue = parseInt(age.value);
    console.log('age', ageValue, typeof ageValue);

    // Richiesta Km da percorrere
    const km = document.getElementById('km');
    const kmValue = parseInt(km.value);
    console.log('km', kmValue, typeof kmValue);

    // Calcolo Prezzo del biglietto senza sconti
    let priceTicket;
    priceTicket = (kmValue * 0.21);
    console.log(priceTicket);

    // Calcolo prezzo del biglietto con sconti:
    // 20% per i minorenni
    // 40% per gli over 65

    if (ageValue < 18) {
        priceTicket *= 0.8;
        console.log('prezzo',priceTicket, typeof priceTicket);
        document.querySelector('.ticketType').innerHTML = "Biglietto Minorenne";
    }
    else if (ageValue >= 65){
        priceTicket *= 0.6;
        console.log('prezzo',priceTicket, typeof priceTicket);
        document.querySelector('.ticketType').innerHTML = "Biglietto Over";

    }
    else {
        document.querySelector('.ticketType').innerHTML = "Biglietto Standard"
    } 

    let finalPrice;
    finalPrice = priceTicket.toFixed(2);
    console.log('Prezzo Arrotondato', finalPrice, typeof finalPrice);

    // document.getElementById('price').innerHTML = finalPrice;

    const resultTicket = document.getElementById('result');
    resultTicket.classList.remove('d-none');

    const nameInput = document.getElementById('name');
    const nameInputValue = nameInput.value;
    const carrozza = Math.round(Math.random() * 10);
    const cpCode = Math.round(Math.random() * 100000);
    document.querySelector('.passengerName').innerHTML = nameInputValue;
    document.querySelector('.ticketPrice').innerHTML = finalPrice + '€';
    document.querySelector('.carrozza').innerHTML = carrozza;
    document.querySelector('.cpCode').innerHTML = cpCode;

    nameInput.value = "";
    age.value = "";
    km.value = "";
    

})



















   
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

doctument.addEventListener('keypress',(event)=> {
    let name = event.key;
    let code = event.code;
    alert ('key pressed ${name} \r\n key code value: ${code}');

}, false);

document.addEventListener('keyup', (event)=>{
    let name = event.key;
    let code = event.code;
    alert('key pressed ${name} \r\n key code value: ${code}');
}, false);

function search(str) {
	let results = [];
	// TODO
    let val = str.toLowerCase();
    console.log(val);
    
      for (let i of fruit){
        if(i.toLowerCase().indexOf(val) > -1) {
            results.push(i);
        }
      }
	return results;
}

function searchHandler(e) {
	// TODO
    const inputVal = e.target.value;
	console.log(inputVal);
	let results = [];
	if(inputVal.length > 0){
		results = search(inputVal);
	}
    showSuggestions(results, inputVal);
}


function showSuggestions(results, inputVal) {

	// TODO
    suggestions.innnerHTML = '';

    if(results.langth > 0){
        for(i=0; i<results.length; i++){
            let item = results [i];
            console.log(RegExp(inputVal, "i"))
            const match = item.match(new RegExp(inputVal,"i"));

            console.log(match);

             item = item.replace(match[0], `<strong>${match[0]}</strong>`);

            suggestions.innerHTML += `<li>${item}</li>`;

        }

        suggestions.classList.add('has-suggestions');

    } else {

        results = [];

        suggestions.innerHTML = '';

        suggestions.classList.remove('has-suggestions');

    }
        }
    



function useSuggestion(e) {
	// TODO
    input.value = e.target.innerText;
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

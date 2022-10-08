let btnText = document.querySelector('#btnText');
let btnHtml = document.querySelector('#btnHtml');
let content = document.querySelector('#content');
let paragraph = document.querySelector('p');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6871b6d224mshc49ef5ac599f888p1ad332jsnf00009e1fc25',
		'X-RapidAPI-Host': 'twinword-word-associations-v1.p.rapidapi.com'
	}
};
		
btnText.addEventListener('click', async() => {
	const txt1 =  document.getElementById('tbuser');
	console.log(txt1.value);
	const response = await fetch('https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry='+txt1.value, options);
	const data = await response.json();
	console.log(data.associations_array);
	document.getElementById("yassking").innerHTML = data.associations_array;



});


function quadrado()
{
	var quadrados = document.createElement('div');
	quadrados.style.width = '100px';
	quadrados.style.height = '100px';
	quadrados.style.backgroundColor = '#FF0000';
	quadrados.style.marginBottom = '1px'
	quadrados.style.display = 'inline-block';
	var resultado = document.getElementById('teste');
	resultado.appendChild(quadrados);
}

function quadradoColorido()
{
	var quadrados = document.createElement('div');
	quadrados.style.width = '100px';
	quadrados.style.height = '100px';
	quadrados.style.backgroundColor = '#FF0000';
	quadrados.style.marginBottom = '1px'
	quadrados.style.display = 'inline-block';
	var resultado = document.getElementById('teste');
	quadrados.onmouseover = function() {
        quadrados.style.backgroundColor = getRandomColor();
      }
	resultado.appendChild(quadrados);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


function terceiraQuestao ()
{
	var nomes = ["Rafael", "Sebastian", "Lucas"];
    var elemento = document.createElement('ul');
	elemento.style.display = 'inline-block';
	for (i of nomes) 
	{
      var acrescentarli = document.createElement('li');
      var texto = document.createTextNode(i);

      acrescentarli.appendChild(texto);
      elemento.appendChild(acrescentarli);
	}

	var resultado = document.getElementById('teste2');
	resultado.appendChild(elemento);


}

var nomes_array = ["Rafael", "Sebatian", "Lucas"];


function adicionar ()
{
	var elemento_quarto = document.getElementById('teste3');
	var valordoinput = document.getElementById('text').value;
	for (i of nomes_array) 
	{
      var acrescentarli = document.createElement('li');
      var texto = document.createTextNode(i);

	  acrescentarli.appendChild(texto);
	  elemento_quarto.appendChild(acrescentarli);
	}

	var acrescentarli = document.createElement('li');
	var texto = document.createTextNode(valordoinput);

	acrescentarli.appendChild(texto);
	elemento_quarto.appendChild(acrescentarli);

nomes_array.splice(0,3);
}
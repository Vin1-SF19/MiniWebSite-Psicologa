var Sobremim = document.getElementById('SobreMim');
var meustrabalhos = document.getElementById('MeusTrabalhos');
var Estagio = document.getElementById('Estagio');
var Aceitacao = document.getElementById('Aceitacao');
var Formacao = document.getElementById('Formacao');

/* Botoes*/

var sobreButton = document.getElementById("sobremim");
var meustrabalhosButton = document.getElementById("meustrabalhos");
var estagioButton = document.getElementById("estagio");
var aceitacaoButton = document.getElementById("aceitacao");
var formacaoButton = document.getElementById("formacao");

meustrabalhosButton.addEventListener("click", function(){
  meustrabalhos.style.display = 'block';

  Sobremim.style.display = 'none';
  Estagio.style.display = 'none';
  Aceitacao.style.display = 'none';
  Formacao.style.display = 'none';

});
sobreButton.addEventListener("click", function(){
  Sobremim.style.display = 'block';

  meustrabalhos.style.display = 'none';
  Estagio.style.display = 'none';
  Aceitacao.style.display = 'none';
  Formacao.style.display = 'none';

});
estagioButton.addEventListener("click", function(){
  Estagio.style.display = 'block';
  
  Aceitacao.style.display = 'none';
  Sobremim.style.display = 'none';
  meustrabalhos.style.display = 'none';
  Formacao.style.display = 'none';

});
aceitacaoButton.addEventListener("click", function(){
  Aceitacao.style.display = 'block';

  Sobremim.style.display = 'none';
  meustrabalhos.style.display = 'none';
  Formacao.style.display = 'none';
  Estagio.style.display = 'none';
  
});
formacaoButton.addEventListener("click", function(){
  Formacao.style.display = 'block';
  
  Sobremim.style.display = 'none';
  meustrabalhos.style.display = 'none';
  Estagio.style.display = 'none';
  Aceitacao.style.display = 'none';

});

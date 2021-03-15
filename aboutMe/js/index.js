var aText = new Array(
  "<span class='terminal__text__span'>yarn add create-react-app About-me </span>",
  "<span class='terminal__text__span'>creating a new React app</span>", 
  "<span class='terminal__text__span'>sucess. done in 7.40s</span>", 
  "<span class='terminal__text__span'>yarn start</span>", 
  "<span class='terminal__text__span'><a href='#about'>Sobre Mim</a></span>",
  "<span class='terminal__text__span'><a href='#timeline'>Formação Acadêmica</a></span>",
  "<span class='terminal__text__span'><a href='#projects'>Projetos</a></span>",
  "<span class='terminal__text__span'><a href='#skills-area'> Habilidades </a></span>",
  "<span class='terminal__text__span'><a href='#awards'>Prêmios</a></span>",
  "<span class='terminal__text__span'># # # # # # #</span>",
  "<span class='terminal__text__span'><a href='https://www.linkedin.com/in/guilherme-henrique-752508189/'>Linkedin</a> / <a href='https://github.com/ghenriquec'>github</a></span>",
 
);
var iSpeed = 30; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
 
var iTextPos = 0; 
var sContents = ''; 
var iRow; 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 200);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

$(function() {
	$( ".terminal" ).draggable();
});


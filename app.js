window.onload = function(){

	createbutton();
}

function createButton(){
    var xml = new XMLHttpRequest();
    xml.open("GET","superheroes.php",true);
    xml.send();
    action = xml.responseText
    console.log(response)
    document.getElementById("search").onclick = function(){
    alert(xml.responseText)
    }}


      	
    
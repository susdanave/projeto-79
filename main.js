menuListArray = ["Pizza Vegetariana",
                "Pizza de Frango",
                "Pizza Portuguesa",
                "Pizza Quatro Queijos",
                "Pizza de Calabresa",
                "Pizza Extravaganza"];

function getMenu(){
    var htmldata'';
    menuListArray.sort();
    for(var i=0;i<menuListArray.length;i++){
     htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
    }

function addItem()}

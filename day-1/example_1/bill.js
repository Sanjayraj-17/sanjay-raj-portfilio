let grandtotal = 0;

function cal(){

    let item = document.getElementById("items").value;
    let quantity = Number(document.getElementById("quantity").value);

    let price = 0;

    if(item == "pen"){
        price = 20;
    }
    else if(item == "pencil"){
        price = 5;
    }
    else if(item == "eraser"){
        price = 8;
    }
    else if(item == "notebook"){
        price = 10;
    }
    let total = price * quantity;
    grandtotal += total;
    document.getElementById("grandtotal").innerHTML = "Grand Total: " + grandtotal;


}

function confirm_tour(){
    let confirmation= confirm("Are you sure you want to book your dream vacation with us?")
    if (confirmation) {
        let a=prompt("Enter Your name")
        alert(a+ "  your Booking is confirmed!");
    } 
    else{  
        alert("Booking canceled.");
    }
}

function hide(){
    document.getElementById("dip").hidden=true;
}
function show(){
    document.getElementById("dip").hidden=false;
}
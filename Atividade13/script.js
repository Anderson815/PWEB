const input = document.getElementById("texto")

function tudoMaiusculo(){    
    input.value = input.value.toUpperCase();
    const checks = document.getElementsByName("check");
    checks[1].checked = false;
}

function tudoMinusculo(){
    input.value = input.value.toLowerCase();
    const checks = document.getElementsByName("check");
        checks[0].checked = false;
}
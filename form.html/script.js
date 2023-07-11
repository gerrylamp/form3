var progress = 1;
var count = 0;
var vestibulum_text_before = "Vestibulum bibendum posuere dui, in pharetra est hendrerit ac. Integer posuere metus lacus";
var vestibulum_text_after = "Duis risus urna, mattis eget justo non, gravida ultrices diam";

function next(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var amount = document.getElementById("amount").value;
    var cardHolderName = document.getElementById("cardHolderName").value;
    var creditNo = document.getElementById("creditNo").value;
    var securityCode = document.getElementById("securityCode").value;
    var expDate = document.getElementById("expDate").value;

    var donation = [amount, cardHolderName, creditNo, securityCode, expDate];

    if (progress == 1){
        if (fname != "" && lname != "" && email != "" && phone != ""){
            document.getElementById("progress1").classList.add("display-none");
            document.getElementById("progress2").classList.remove("display-none");

            document.getElementById("prevButton").classList.remove("display-none");
            document.getElementById("buttons").classList.remove("flex-end");

            document.getElementById("nextButton").textContent = "Proceed";

            document.getElementById("vestibulum").textContent = vestibulum_text_after;

            document.getElementById("bullet2").classList.add("transition");
            document.getElementById("bullet1").classList.remove("transition");

            progress++;
        }
    }
    else if (progress == 2){
        if (amount != "" && cardHolderName != "" && creditNo != "" && securityCode != ""){
            document.getElementById("progress2").classList.add("display-none");
            document.getElementById("progress3").classList.remove("display-none");

            document.getElementById("nextButton").textContent = "Finish";

            document.getElementById("vestibulum").textContent = vestibulum_text_before;

            document.getElementById("bullet3").classList.add("transition");
            document.getElementById("bullet2").classList.remove("transition");

            progress++;
        }
    }
    else{
        document.getElementById("progress3").classList.add("display-none");
        document.getElementById("progress4").classList.remove("display-none");

        document.getElementById("prevButton").classList.add("display-none");
        document.getElementById("nextButton").classList.add("display-none");
        document.getElementById("backButton").classList.remove("display-none");
    }
}

function previous(){
    if (progress == 2){
        document.getElementById("progress1").classList.remove("display-none");
        document.getElementById("progress2").classList.add("display-none");

        document.getElementById("prevButton").classList.add("display-none");
        document.getElementById("nextButton").classList.remove("display-none");

        document.getElementById("buttons").classList.add("flex-end");

        document.getElementById("nextButton").textContent = "Next";
        document.getElementById("vestibulum").textContent = vestibulum_text_before;

        document.getElementById("bullet2").classList.remove("transition");
        document.getElementById("bullet1").classList.add("transition");
        progress--;
    }
    else if (progress == 3){
        document.getElementById("progress2").classList.remove("display-none");
        document.getElementById("progress3").classList.add("display-none");
        document.getElementById("progress4").classList.add("display-none");

        document.getElementById("nextButton").textContent = "Proceed";
        document.getElementById("vestibulum").textContent = vestibulum_text_after;

        document.getElementById("bullet3").classList.remove("transition");
        document.getElementById("bullet2").classList.add("transition");

        progress--;
    }
}

function refreshPage(){
    location.reload();
}

function incognito(){
    if (count == 0){
        document.getElementById("incognito").classList.add("incognito");

        count++;
    }
    else{
        document.getElementById("incognito").classList.remove("incognito");

        count--;
    }
}

function credit(){
    document.getElementsByClassName("credit")[0].classList.remove("bg-white");
    document.getElementsByClassName("credit")[0].classList.remove("text-blue");

    document.getElementsByClassName("paypal")[0].classList.add("text-blue");
    document.getElementsByClassName("paypal")[0].classList.add("bg-white");
}

function paypal(){
    document.getElementsByClassName("paypal")[0].classList.remove("bg-white");
    document.getElementsByClassName("paypal")[0].classList.remove("text-blue");

    document.getElementsByClassName("credit")[0].classList.add("text-blue");
    document.getElementsByClassName("credit")[0].classList.add("bg-white");
}
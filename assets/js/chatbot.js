var username=""
function send_message(message){
    var prevMessage = $("#container").html();
    // console.log(prevMessage.length);
    if (prevMessage.length > 6) {
        prevMessage = prevMessage + "<br>"
    }
    $("#container").html(prevMessage +"<span class='current_message'>"+"<span id='bot'>ChatBot:</span>" +message + "</span>");
    $(".current_message").hide();
    $(".current_message").delay(500).fadeIn();
    $(".current_message").removeClass("current_message");
}



function get_username() {
    send_message("hello, whats your name?");
    
}

function ai(message){
    if(username.length<6){
        username=message;
        send_message("nice to meet you "+ username + ", how are you?");
    }
    if(message.indexOf("how are you")>=0){
        send_message("i am good");
    }
}
get_username();




$("#textbox").keypress(function(event){
    if (event.which ==13){
        if ($("#enter").prop("checked")){
            $("#b1").click();// clears the value inside textbox
            event.preventDefault();
        }
    }
});

$("#b1").click(function(){
    var username= "<span id='username'>You:</span>"
    var newMessage =$("#textbox").val();
    $("#textbox").val(""); //clears the value inside the text box
        
    var prevMessage = $("#container").html();
    // console.log(prevMessage.length);
    if (prevMessage.length > 6){
        prevMessage=prevMessage + "<br>"
    }

    $("#container").html(prevMessage + username + newMessage);
    $("#container").scrollTop($("#container").prop("scrollHeight"));

    ai(newMessage);


});
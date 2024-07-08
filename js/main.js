var msg = "";

function encrypt(){
    msg = document.form1.msg.value;
    let newMessage = "";
    for(let i = 0; i < msg.length; i++){
        switch(msg[i]){
            case 'a':
                newMessage += "ai";
                break;
            case 'e':
                newMessage += "enter";
                break;
            case 'i':
                newMessage += "imes";
                break;
            case 'o':
                newMessage += "ober";
                break;
            case 'u':
                newMessage += "ufat";
                break;
            default:
                newMessage += msg[i];
                break;
        }
    }
    let result = document.getElementById("result");
    console.log(newMessage);
    result.innerText = newMessage;
}

function decrypt(){
    msg = document.form1.msg.value;

    while(msg.includes("ai"))
        msg = msg.replace("ai", "a");

    while(msg.includes("enter"))
        msg = msg.replace("enter", "e");

    while(msg.includes("imes"))
        msg = msg.replace("imes", "i");

    while(msg.includes("ober"))
        msg = msg.replace("ober", "o");

    while(msg.includes("ufat"))
        msg = msg.replace("ufat", "u");

    let result = document.getElementById("result");
    console.log(msg);
    result.innerText = msg;
}

function copyClipboard(){
    let copiedContent = document.getElementById("result").innerText;
    try {
        navigator.clipboard.writeText(copiedContent);
        console.log('Contenido copiado al portapapeles!');        
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
}
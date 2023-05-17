var isi = "Ocean One are a turnkey solution to begin the journey of reducing your business’s environmental footprint or going plastic neutral.";
function edit(){
    document.getElementById("edit").innerHTML = 
    '<textarea name="" id="" cols="30" rows="5">'+isi+'</textarea><br><input type="button"value="Replace" id="replace" onclick="replace()" class="btn btn-outline-light"></input>';
}

function replace(){
    document.getElementById("edit").innerHTML = isi;
}

function info() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    document.getElementById("info").innerHTML = `
        <p>Hello ${name},<br> Thank you for submitting the message form. 
        Here is a summary of the data you have provided:<br><br>
        Email: ${email} <br>
        Name: ${name} <br>
        Message: ${message} <br><br>
        We will review your message promptly and provide a response as soon as possible.
        <br><br>
        Thank you,
        Support Team</p>
    `;
}

function fn1(){
    var str = document.getElementById('text').value;
    
    document.getElementById("display").innerHTML = "<code class='prettyprint'>"  + str + "</code>";
    PR.prettyPrint()
}

function capture(){
    html2canvas(document.querySelector("#main__editor")).then(canvas => {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.download = "export.png";
		anchorTag.href = canvas.toDataURL();
		anchorTag.target = '_blank';
		anchorTag.click();
    });
}

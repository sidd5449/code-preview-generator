

function fn1(){
    var str = document.getElementById('text').value;
    
    document.getElementById("display").innerHTML = "<code class='prettyprint'>"  + str + "</code>";

    document.querySelectorAll('code').forEach(el => {
        // then highlight each
        hljs.highlightElement(el);
    });
    
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

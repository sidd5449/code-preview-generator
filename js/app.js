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

const main=document.querySelector('#main__editor') ;
const btn1= document.getElementById('button1');
const btn2= document.querySelector('#button2');
const btn3= document.querySelector('#button3');
const btn4= document.querySelector('#button4');
const btn5= document.querySelector('#button5');

btn1.addEventListener("click", () => {
    main.style.background="linear-gradient(-45deg, rgb(63, 124, 246), rgb(209, 33, 142))";
});
btn2.addEventListener("click", () => {
    main.style.background="linear-gradient(-45deg, #2E3192 , #1BFFFF)";
});
btn3.addEventListener("click", () => {
    main.style.background="linear-gradient(-45deg, #D4145A ,#FBB03B)";
});
btn4.addEventListener("click", () => {
    main.style.background="linear-gradient(-45deg,#FF5F6D, #FFC371)";
});
btn5.addEventListener("click", () => {
    main.style.background="linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #FED2CE 100%)";
});
  
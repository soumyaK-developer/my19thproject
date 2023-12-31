console.log(`hello, i am soumya!`)

document.getElementById("myBtn").onclick = function () {
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    let modalHeader = document.getElementById("modalHeader")
    modalHeader.appendChild(span)

    var div = document.getElementById("myModal")
    div.style.display = "block"


    let close = document.querySelector(".close")
    close.onclick = function () {
        var div = document.getElementById("myModal")
        div.style.display = "none"
    }
    window.onclick =  function(e) {
        if(e.target.className === "modal") {
            var div = document.getElementById("myModal")
            div.style.display = "none"
        }
   
    }
}



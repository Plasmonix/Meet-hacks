// Auto leave class
let minimumStrength = 12 // Set minimum strength
let delay = 5; // Delay between each checks
let classroomStrength = document.querySelector('.uGOf1d');
let leaveCallBtn = document.querySelector('.ftJPW');

function Exit() {
  if (parseInt(classroomStrength.innerHTML) < minimumStrength) {
    leaveCallBtn.click();
  }
}

const leaveTheClass = setInterval(Exit, delay * 1000);



// Auto admit
setInterval(function () {
    for (let element of document.getElementsByTagName("span")) {
        if (element.innerHTML === "Admit") {
            element.click();
        }
    }
}, 2000);



// Presentation spinner
var styles = `

.Gv1mTb-aTv5jf{
    animation-name: spinner;
    animation-duration: 2s;
    animation-iteration-count: infinite;

}

@keyframes spinner{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(1440deg);
    }
}
`

const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

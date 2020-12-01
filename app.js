var char = document.getElementById("char");
var block = document.getElementById("block");

function jump() {
  if (char.classList != "animate") {
    char.classList.add("animate");
  }
  setTimeout(function () {
    char.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
  var BlockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (BlockLeft < 50 && BlockLeft > 0 && charTop >= 450) {
    alert("you lose");

    block.style.animation = "none";
    block.style.display = "none";
  }
}, 10);

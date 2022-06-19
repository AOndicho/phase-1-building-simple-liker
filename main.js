// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
modal.className = "hidden";
const likes = document.querySelectorAll(".like");

for (like of likes) {
  like.addEventListener("click", (e) => {
    alert("clicked");
    mimicServerCall()
      .then((response) => {})
      .catch((error) => {
        modal.classList.remove("hidden");
        const message = modal.querySelector("#modal-message");
        message.innerHTML=`${error}`

        setTimeout(3000,modal.className='hidden')
      });
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

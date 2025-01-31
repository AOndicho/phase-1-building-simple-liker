// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
modal.className = "hidden";
const likes = document.querySelectorAll(".like");

for (let like of likes) {
  const heart = like.querySelector(".like-glyph");

  like.addEventListener("click", (e) => {
    mimicServerCall()
      .then((response) => {
        if (heart.classList.contains("activated-heart")) {
          heart.classList.remove("activated-heart");
          heart.innerHTML = `${EMPTY_HEART}`;
        } else {
          heart.className = "activated-heart";
          heart.innerHTML = `${FULL_HEART}`;
        }
      })
      .catch((error) => {
        modal.classList.remove("hidden");
        const message = modal.querySelector("#modal-message");
        message.innerHTML = `${error}`;

        setTimeout(3000, (modal.className = "hidden"));
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

(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const cw4 = document.getElementById("cw4");
  const cw4_1 = document.getElementById("cw4_1");
  const cw4_2 = document.getElementById("cw4_2");
  const cw4_3 = document.getElementById("cw4_3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  function showLoadingPopup(title) {
    const popup = document.createElement("div");
    popup.classList.add("loading-popup");
    popup.textContent = title;
    document.body.appendChild(popup);
  }

  function hideLoadingPopup() {
    const popup = document.querySelector(".loading-popup");
    if (popup) document.body.removeChild(popup);
  }

  cw1.addEventListener("click", function () {
    showLoadingPopup("Loading...");
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((array) => {
            console.log(array);
            console.log(array[0].title);
            const list = array
              .map(
                (post) =>
                  `<li class="post"><h3>${post.title}</h3><p>${post.body}</p></li>`,
              )
              .join("");
            answer.innerHTML = `<ul>${list}</ul>`;
            hideLoadingPopup();
          }),
      1000,
    );
  });

  cw2.addEventListener("click", function () {
    showLoadingPopup("Loading...");
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/posts/1")
          .then((response) => response.json())
          .then((post) => {
            console.log(post);
            answer.innerHTML = `<div class="post"><h3>${post.title}</h3><p>${post.body}</p></div>`;
            hideLoadingPopup();
          }),
      1000,
    );
  });

  cw3.addEventListener("click", function () {
    showLoadingPopup("Processing...");
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Metoda post",
            body: "Metoda post pozwala przekazywać dane",
            userId: 1,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            answer.innerHTML = `<p>Dodano nowy post o ID = ${data.id}</p><div class="post"><h3>${data.title}</h3><p>${data.body}</p></div>`;
            hideLoadingPopup();
          }),
      1000,
    );
  });

  cw4.addEventListener("click", function () {
    showLoadingPopup("Loading...");
    setTimeout(
      () =>
        fetch("https://my-json-server.typicode.com/micang7/json/posts")
          .then((response) => response.json())
          .then((array) => {
            console.log(array);
            console.log(array[0].title);
            const list = array
              .map((post) => `<li class="post"><h3>${post.title}</h3></li>`)
              .join("");
            answer.innerHTML = `<ul>${list}</ul>`;
            hideLoadingPopup();
          }),
      1000,
    );
  });

  cw4_1.addEventListener("click", function () {
    showLoadingPopup("Processing...");
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Metoda put",
            body: "Metoda put pozwala modyfikować obiekty",
            userId: 1,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            answer.innerHTML = `<p>Zaktualizowano post ID=1: Nowy tytuł: ${data.title}</p>`;
            hideLoadingPopup();
          }),
      1000,
    );
  });

  cw4_2.addEventListener("click", function () {
    showLoadingPopup("Processing...");
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Nowy tytuł",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            answer.innerHTML = JSON.stringify(data);
            hideLoadingPopup();
          }),
      1000,
    );
  });

  cw4_3.addEventListener("click", function () {
    showLoadingPopup("Processing...");
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "DELETE",
        })
          .then((response) => {
            answer.innerHTML = `Post ID=1 usunięty (status: ${response.status}).`;
            return response.json();
          })
          .then((data) => {
            console.log(data);
            hideLoadingPopup();
          }),
      1000,
    );
  });
})();

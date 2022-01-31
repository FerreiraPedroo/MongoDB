let allData = "";

const closeModal = () => document.getElementById("modal").style.display = "none";
const allCards = async () => {
  const data = await fetch("http:/localhost:8000/find/all", {
    method: "GET", credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(data => data.json())
    .then(data => data)
    .catch(error => {
      console.log(error)
    });
  console.log(data)
  if (!data.cod) {
    let containerMainCard = document.getElementById("main-cards");
    document.getElementById("title").innerHTML = "TODOS OS USUARIOS";
    let cards = "";
    data.forEach((element) => {
      cards += `
      <div class="card-container" style="background-color:${element.theme};">
        <div class="title-container">
          <button class="edit-btn" onclick="editCard('${element._id}')">EDIT</button>
          <button class="delete-btn" onclick="deleteCard('${element._id}')">EXCLUIR</button>
        </div>
        <div class="info-container">
          <div class="input-container"><p>Active</p><input type="text" name="isActive" id="isActive" readonly value="${element.isActive}"></div>
          <div class="input-container"><p>Name</p><input type="text" name="name" id="name" readonly value="${element.name}"></div>
          <div class="input-container"><p>Img</p><input type="text" name="img" id="img" readonly value="${element.img}"></div>
          <div class="input-container"><p>E-mail</p><input type="text" name="email" id="email" readonly value="${element.email}"></div>
          <div class="input-container"><p>About</p><input type="text" name="about" id="about" readonly value="${element.about}"></div>
          <div class="input-container"><p>Theme</p><input type="text" name="theme" id="theme" readonly value="${element.theme}"></div>
        </div>
      </div>`
    });
    allData = data;
    containerMainCard.innerHTML = cards
  }
}
const editCard = (id) => {
  const documentModal = document.getElementById("modal")
  const data = allData.filter(element => element._id === id);
  documentModal.style.display = "flex";
  documentModal.innerHTML = `
    <div id="modal-card">
    <div id="close-btn" onclick="closeModal()">X</div>
      <div class="title-container">
        <div class="delete-btn" onclick="updateAction()">SALVAR</div>
      </div>
      <div class="info-container">
        <div class="input-container">
          <p>ID</p><p id="modal-_id">${data[0]._id}</p>
        </div>
        <div class="input-container">
          <p>isActive</p><input id="modal-isActive" class="input-modal" type="text" name="isActive" autocomplete="off" value="${data[0].isActive}">
        </div>
        <div class="input-container">
          <p>Name</p><input id="modal-name" class="input-modal" type="text" name="name" autocomplete="off" value="${data[0].name}">
        </div>
        <div class="input-container">
          <p>Img</p><input id="modal-img" class="input-modal" type="text" name="img" autocomplete="off" value="${data[0].img}">
        </div>
        <div class="input-container">
          <p>E-mail</p><input id="modal-email" class="input-modal" type="text" name="email" autocomplete="off" value="${data[0].email}">
        </div>
        <div class="input-container">
          <p>About</p><input id="modal-about" class="input-modal" type="text" name="about" autocomplete="off" value="${data[0].about}">
        </div>
        <div class="input-container">
          <p>Theme</p><input id="modal-theme" class="input-modal" type="text" name="theme" autocomplete="off" value="${data[0].theme}">
        </div>
      </div>
    </div
  `
}
const updateAction = async () => {
  const _id = document.getElementById("modal-_id").innerText;
  const isActive = document.getElementById("modal-isActive").value;
  const name = document.getElementById("modal-name").value;
  const img = document.getElementById("modal-img").value;
  const email = document.getElementById("modal-email").value;
  const about = document.getElementById("modal-about").value;
  const theme = document.getElementById("modal-theme").value;

  const data = await fetch("http:/localhost:8000/update/user", {
    method: "PUT", credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id,
      isActive,
      name,
      img,
      email,
      about,
      theme
    })
  })
    .then(data => data.json())
    .then((data) => data)
    .catch(error => {
      console.log(error)
      return next(error)

    });
  console.log(data)

  if (data.cod === "200") {
    document.getElementById("mensagens").innerText = "UPDATE EFETUADO COM SUCESSO"
    document.getElementById("mensagens").style.display = "flex";
    setTimeout(() => {
      document.getElementById("mensagens").style.display = "none";
      document.getElementById("modal").style.display = "none";
      document.getElementById("main-cards").innerText = "";
      allCards();
    }, 2000)

  } else {
    document.getElementById("mensagens").innerText = "UPDATE NÃO EFETUADO"
    document.getElementById("mensagens").style.display = "flex";
    setTimeout(() => {
      document.getElementById("mensagens").style.display = "none";
      document.getElementById("modal").style.display = "none";
      document.getElementById("main-cards").innerText = "";
      allCards();
    }, 2000)
  }
}


const deleteCard = (id) => {
  const documentModal = document.getElementById("modal")
  const data = allData.filter(element => element._id === id);
  documentModal.style.display = "flex";
  documentModal.innerHTML = `
    <div id="modal-card">
    <div id="close-btn" onclick="closeModal()">X</div>
      <div class="title-container">
        <div class="delete-btn" onclick="deleteAction()">EXCLUIR</div>
      </div>
      <div class="info-container">
        <div class="input-container">
          <p>ID</p><p id="modal-_id" class="delete-card">${data[0]._id}</p>
        </div>
        <div class="input-container">
          <p>isActive</p><p id="modal-isActive" class="delete-card">${data[0].isActive}</p>
        </div>
        <div class="input-container">
          <p>Name</p><p id="modal-name" class="delete-card">${data[0].name}</p>
        </div>
        <div class="input-container">
          <p>Img</p><p id="modal-img" class="delete-card">${data[0].img}</p>
        </div>
        <div class="input-container">
          <p>E-mail</p><p id="modal-email" class="delete-card">${data[0].email}</p>
        </div>
        <div class="input-container">
          <p>About</p><p id="modal-about" class="delete-card">${data[0].about}</p>
        </div>
        <div class="input-container">
          <p>Theme</p><p id="modal-theme" class="delete-card">${data[0].theme}</p>
        </div>
      </div>
    </div
  `
}

const deleteAction = async () =>{
  const _id = document.getElementById("modal-_id").innerText;
  const isActive = document.getElementById("modal-isActive").innerText;
  const name = document.getElementById("modal-name").innerText;
  const img = document.getElementById("modal-img").innerText;
  const email = document.getElementById("modal-email").innerText;
  const about = document.getElementById("modal-about").innerText;
  const theme = document.getElementById("modal-theme").innerText;

  const data = await fetch("http:/localhost:8000/delete/user", {
    method: "DELETE", credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({_id})
  })
    .then(data => data.json())
    .then((data) => data)
    .catch(error => {
      console.log(error)
      return next(error)

    });
  console.log(data)

  // if (data.cod === "200") {
  //   document.getElementById("mensagens").innerText = "UPDATE EFETUADO COM SUCESSO"
  //   document.getElementById("mensagens").style.display = "flex";
  //   setTimeout(() => {
  //     document.getElementById("mensagens").style.display = "none";
  //     document.getElementById("modal").style.display = "none";
  //     document.getElementById("main-cards").innerText = "";
  //     allCards();
  //   }, 2000)

  // } else {
  //   document.getElementById("mensagens").innerText = "UPDATE NÃO EFETUADO"
  //   document.getElementById("mensagens").style.display = "flex";
  //   setTimeout(() => {
  //     document.getElementById("mensagens").style.display = "none";
  //     document.getElementById("modal").style.display = "none";
  //     document.getElementById("main-cards").innerText = "";
  //     allCards();
  //   }, 2000)
  // }
}



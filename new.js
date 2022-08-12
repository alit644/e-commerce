//  حساب المجموع الكلي

const updateTotalPrice = () => {
  const AllproductBlackScreen = document.querySelectorAll(".item-container");
  let total = 0;

  AllproductBlackScreen.forEach((item) => {
    const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    const quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );

    total = total + price * quantity;
  });
  total = total.toFixed("2");
  totalprice.innerText = `$ ${total}`;
};

blackScreen3.addEventListener("change", (eo) => {
  updateTotalPrice();
});

// search
const search = document.getElementById("search");
search.addEventListener("click", (eo) => {
  fromInput.style.display = "block";
});

const close = document.getElementById("close");
close.addEventListener("click", (eo) => {
  fromInput.style.display = "none";
});

// kargo

truck1.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(0)";
});

blackRemove.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(-200vw)";
});

// list mobail

const listMobail = document.querySelector(".list-mobail");

bergerList.addEventListener("click", (eo) => {
  listMobail.classList.toggle("active");
});

// Create Account

Username.addEventListener("keyup", (eo) => {
  Username.classList.add("error");
  userMass.style.display = "block";

  if (Username.value.length >= 3) {
    Username.classList.add("success");
    userMass.style.display = "none";
  } else {
    Username.classList.remove("success");
    Username.classList.add("error");
    userMass.style.display = "block";
  }
});

email.addEventListener("keyup", (eo) => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  email.classList.add("error");
  emailMess.style.display = "block";

  if (regEmail.test(email.value)) {
    email.classList.add("success");
    emailMess.style.display = "none";
  } else {
    email.classList.remove("success");
    email.classList.add("error");
    emailMess.style.display = "block";
  }
});

psw.addEventListener("keyup", (eo) => {
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  psw.classList.add("error");
  passMess.style.display = "block";

  if (regPassword.test(psw.value)) {
    psw.classList.add("success");
    passMess.style.display = "none";
  } else {
    psw.classList.remove("success");
    psw.classList.add("error");
    passMess.style.display = "block";
  }
});

// aaGGVD453$$#5

pswrepeat.addEventListener("keyup", (ro) => {
  pswrepeat.classList.add("error");
  repPAss.style.display = "block";

  if (pswrepeat.value.length === psw.value.length) {
    pswrepeat.classList.add("success");
    repPAss.style.display = "none";
  } else {
    pswrepeat.classList.remove("success");
    pswrepeat.classList.add("error");
    repPAss.style.display = "block";
  }
});

// user block

user.addEventListener("click", (eo) => {
  blackScreen2.style.transform = "translateX(0)";
});

close2.addEventListener("click", (eo) => {
  blackScreen2.style.transform = "translateX(200vw)";
});

//  ==========

// عملية الشراء

const allBtn = document.querySelectorAll(".btn-primary");
const shopAraba = document.createElement("div");

allBtn.forEach((item) => {
  item.addEventListener("click", (eo) => {
    item.setAttribute("disabled", "");
    item.classList.remove("btn-primary");
    item.classList.add("btn-Success");
    item.innerHTML = `&#10003; Done`;

    const pupUp = document.createElement("div");
    dark.append(pupUp);
    pupUp.innerText = " Purchase completed successfully ";
    pupUp.classList.add("PopUp");

    setTimeout(() => {
      pupUp.style.transform = " translateX(-160vw)";
    }, 2000);

    setTimeout(() => {
      pupUp.remove();
    }, 3000);

    dark.append(shopAraba);
    shopAraba.innerHTML = `<div class="icon-cart"></div>  shopping cart`;
    shopAraba.classList.add("shoppingCart");

    const cart = item.parentElement.parentElement.parentElement;
    const imgSrc = cart
      .getElementsByClassName("card-img-top")[0]
      .getAttribute("src");
    const titleNamde = cart.getElementsByClassName("card-title")[0].innerText;
    const itemPrice = cart.getElementsByClassName("price")[0].innerText;

    const addproducts = `

    <div class="item-container">

    <div class="img-title-parnet">
      <img src="${imgSrc}" alt="">
      <p class="prudact-name">${titleNamde}</p>

    </div>

<div class = "mobail-flex">
  
      <div style="display: flex; align-items : center; ">
        <input value="1" min="1" class="input-quantity" type="number" id="input-quantity">
        <p style="margin-left: 10px;">Quantity</p>
      </div>
  
      <div id="price" class="price">
        ${itemPrice}
      </div>
  
      <div class="btn-secondary">
  
        Delete
  
      </div>
  
  
</div>

  </div>

    `;

    allproducts2.innerHTML += addproducts;
    updateTotalPrice();
  });
});

close3.addEventListener("click", (eo) => {
  blackScreen3.style.transform = "translateX(-200vw)";
});

shopAraba.addEventListener("click", (eo) => {
  blackScreen3.style.transform = "translateX(0)";
});

// remove prudact

blackScreen3.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.parentElement.remove();

    updateTotalPrice();

    const nameDelet =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "prudact-name"
      )[0].innerText;

    const allCard = document.querySelectorAll(".card");

    allCard.forEach((item) => {
      const nameOFProduct =
        item.getElementsByClassName("card-title")[0].innerText;

      if (nameDelet == nameOFProduct) {
        const doneBtn = item.getElementsByClassName("btn btn-Success")[0];

        doneBtn.innerText = "Buy";
        doneBtn.removeAttribute("disabled");
        doneBtn.classList.remove("btn-Success");
        doneBtn.classList.add("btn-primary");
      }
    });
  }
});

// Confirm Buy

danger.addEventListener("click", (eo) => {
  blackScreen4.style.transform = "translateX(0)";
});
close4.addEventListener("click", (eo) => {
  blackScreen4.style.transform = "translateX(200vw)";
});

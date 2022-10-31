// let root = document.getElementsByClassName('root')[0]
let data = {
  fullName: "Carla Montano",
  position: "Software Engineer",
  work: "Green Mountain Technology",
  socials: [
    {
      id: "pf",
      service: "Portfolio",
      url: "https://carlamontano.tech",
      icon: "fas fa-code",
    },
    {
      id: "lk",
      service: "LinkedIn",
      url: "https://www.linkedin.com/in/carla-montano",
      icon: "fab fa-linkedin",
    },
    {
      id: "gh",
      service: "GitHub",
      url: "https://github.com/Cmmh1101",
      icon: "fab fa-github",
    },
    {
      id: "bg",
      service: "Blog",
      url: "https://journey.carlamontano.tech",
      icon: "fas fa-pencil-alt",
    },
    {
      id: "tw",
      service: "Twitter",
      url: "https://twitter.com/cmmh11",
      icon: "fab fa-twitter",
    },
  ],
};
let cardApp = (data) => {
  // data on variables / use ${fullName} to call the variable
  // let fullName = 'Jennifer Smith';
  // let position = 'Web Developer';
  // get element by tag
  let body = document.getElementsByTagName("body")[0];
  // creating html elements with js
  let root = document.createElement("div");
  let style = document.createElement("style");
  let card = document.createElement("section");
  let html = `
<div class="card__wrapper">
    <img src="/img/profile-carla.png" class="card__user-img" alt="" srcset="">

    <div class="card__info">
            <span class="card__name">${data.fullName}</span>
            <span class="card__title">${data.position}</span>
            <span class="card__title">${data.work}</span>
    </div>
   <div class="card__socials">
        
              
    </div>
</div>
`;
  let cssStyles = `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html,
    body {
    font-family: "Noto Sans JP", sans-serif;
    }

    .card {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
    }

    .card__wrapper {
    height: auto;
    padding: 20px 20px 2rem;
    max-width: 300px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .card__user-img {
    border: 2px solid #2c5eff;
    height: 100px;
    width: 100px;
    margin: 2rem 0 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    }

    .card__info {
    margin-bottom: 2rem;
    }

    .card__name {
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    }
    .card__title {
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    text-align: center;
    }

    a {
        text-decoration: none;
    }

    .card__icon {
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #000;
    margin-bottom: 0.8rem;
    overflow: hidden;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
    }

    .card__icon-box {
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .card__icon-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    }

    .card__icon--pf {
    color: #014cff;
    border: 1px solid #014cff;
    }

    .card__icon--pf:hover {
    background: #014cff;
;
    color: #fff;
    }
    .card__icon--bg {
    color: #014cff;
    border: 1px solid #014cff;
    }

    .card__icon--bg:hover {
    background: #014cff;
    color: #fff;
    }
    .card__icon--gh {
    color: #000000;
    border: 1px solid #000000;
    }
    .card__icon--gh:hover {
    background: #000000;
    color: #fff;
    }

    .card__icon--tw {
    color: #00acee;
    border: 1px solid #00acee;
    }
    .card__icon--tw:hover {
    background: #00acee;
    color: #fff;
    }
    .card__icon--lk {
    color: #0e76a8;
    border: 1px solid #0e76a8;
    }

    .card__icon--lk:hover {
    background: #0e76a8;
    color: #fff;
    }

`;
  // place body tag before root
  body.prepend(root);
  root.prepend(card);
  // add a class to and element
  root.classList.add("root");
  // add css to an element
  root.style.cssText = `
background: url('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg'); background-size: cover; background-position: center;
`;
  root.prepend(style);
  card.classList.add("card");

  style.innerHTML = cssStyles;
  card.innerHTML = html;

  let cardSocials = card.getElementsByClassName("card__socials")[0];

  data.socials.forEach((item, index) => {
    let tempNode = document.createElement("a");

    tempNode.classList.add("card__icon", `card__icon--${item.id}`);
    tempNode.setAttribute("href", `${item.url}`);
    tempNode.setAttribute("target", "_blank");

    tempNode.innerHTML = `
    <span class="card__icon-box">
        <i class="${item.icon}"></i>
    </span>
    <span class="card__icon-title">
        ${item.service}
    </span> 
    `;
    cardSocials.append(tempNode);
  });
};

cardApp(data);

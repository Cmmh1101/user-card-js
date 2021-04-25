// let root = document.getElementsByClassName('root')[0]
let fullName = 'Jennifer Smith';
let position = 'Web Developer';
let style = document.createElement('style')

// creating html elements with js
let root = document.createElement('div');
// get element by tag
let body = document.getElementsByTagName('body')[0]
let card = document.createElement('section');
let html = `
<div class="card__wrapper">
    <img src="https://uifaces.co/our-content/donated/XdLjsJX_.jpg" class="card__user-img" alt="" srcset="">

        <div class="card__info">
            <span class="card__name">${fullName}</span>
            <span class="card__title">${position}</span>
        </div>
        <div class="card__socials">
            <div class="card__icon card__icon--fb">
                <span class="card__icon-box">
                     <i class="fab fa-facebook-f"></i>
                </span>
                <span class="card__icon-title">
                    Facebook
                </span>
                </div>
                <div class="card__icon card__icon--ig">
                    <span class="card__icon-box">
                        <i class="fab fa-instagram"></i>
                    </span>
                    <span class="card__icon-title">
                        Instagram 
                    </span>
                </div>
                <div class="card__icon card__icon--db">
                    <span class="card__icon-box">
                        <i class="fab fa-dribbble"></i>
                    </span>
                    <span class="card__icon-title">
                        Dibbble 
                    </span>
                </div>
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
    padding: 20px;
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
    height: 70px;
    width: 70px;
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
    margin-bottom: 2rem;
    text-align: center;
    }

    .card__icon {
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #000;
    margin-bottom: 1.4rem;
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
    }

    .card__icon--fb {
    color: #2c5eff;
    border: 1px solid #2c5eff;
    }

    .card__icon--fb:hover {
    background: #2c5eff;
    color: #fff;
    }
    .card__icon--ig {
    color: #773fe7;
    border: 1px solid #773fe7;
    }

    .card__icon--ig:hover {
    background: #773fe7;
    color: #fff;
    }
    .card__icon--db {
    color: #f962b1;
    border: 1px solid #f962b1;
    }

    .card__icon--db:hover {
    background: #f962b1;
    color: #fff;
    }

`;
// place body tag before root 
body.prepend(root);
root.prepend(card);
// add a class to and element 
root.classList.add('root')
card.classList.add('card')
// add css to an element 
root.style.cssText = `
background: url('https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_Experiences_ReopeningBeaches_RF_1156532604_1280x640.jpg?itok=tPCjquVe'); background-size: cover; background-position: center;
`;
root.prepend(style);
style.innerHTML = cssStyles;
card.innerHTML = html;
console.log(card)
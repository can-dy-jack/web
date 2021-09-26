// class WordCount extends HTMLParagraphElement{
//     constructor(){
//         super(); // 建立正确的原型链继承关系。
        
//     }
// }
// customElements.define('word-cound',WordCount,{extends: 'p'});


// class popUpInfo extends HTMLElement{
//   constructor(){
//     super();
//     var shadow = this.attachShadow({mode: 'open'});

//     var wrapper = document.createElement('span');
//     wrapper.setAttribute('class','wrapper');

//     var icon = document.createElement('span');
//     icon.setAttribute('class','icon');
//     icon.setAttribute('tabindex','0');
//     var info = document.createElement('span');
//     info.setAttribute('class','info');

//     var text = this.getAttribute('text');
//     info.textContent = text;

//     var imgUrl;
//     if(this.hasAttribute('img')) {
//       imgUrl = this.getAttribute('img');
//     }
//     else {
//       imgUrl = '../assets/img/media.png';
//     }
//     var img = document.createElement('img');
//     img.src = imgUrl;
//     icon.appendChild(img);


//     // Create some CSS to apply to the shadow dom
//     const style = document.createElement('style');
//     console.log(style.isConnected);

//     style.textContent = `
//     .wrapper {
//       position: relative;
//     }
//     .info {
//       font-size: 0.8rem;
//       width: 200px;
//       display: inline-block;
//       border: 1px solid black;
//       padding: 10px;
//       background: white;
//       border-radius: 10px;
//       opacity: 0;
//       transition: 0.6s all;
//       position: absolute;
//       bottom: 20px;
//       left: 10px;
//       z-index: 3;
//     }
//     img {
//       width: 1.2rem;
//     }
//     .icon:hover + .info, .icon:focus + .info {
//       opacity: 1;
//     }
//     `;

//     // Attach the created elements to the shadow dom
//     shadow.appendChild(style);
//     console.log(style.isConnected);

//     shadow.appendChild(wrapper);
//     shadow.appendChild(icon);
//     shadow.appendChild(info);

//   }
// }
// customElements.define('popup-info',popUpInfo);



class UserCard extends HTMLElement {
  constructor() {
    super();
    var image = document.createElement('img');
    image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
    image.classList.add('image');

    var container = document.createElement('div');
    container.classList.add('container');

    var name = document.createElement('p');
    name.classList.add('name');
    name.innerText = 'User Name';

    var email = document.createElement('p');
    email.classList.add('email');
    email.innerText = 'yourmail@some-email.com';

    var button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Follow';

    container.append(name, email, button);
    this.append(image, container);
    // 
    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true);
    this.appendChild(content);
  }
}
customElements.define('user-card', UserCard);

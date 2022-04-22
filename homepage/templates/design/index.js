class Picture {
  constructor(props, i) {
    this.index = i;
    this.url = props.url;
    this.heading = props.heading;
  }
  render() {
    return (`
      <div class="card"
      style='background: url(${this.url})
        no-repeat center;
        font-size: 1.5em'>
        <div class="jc ac oc60 bgblack">${this.heading}</div>
      </div>
      `);
  }
}

let urls = [{
  url:"https://images.unsplash.com/photo-1616627434852-097e535878d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
  heading: "words"
},
{ url:"https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
heading: "these words"
},
{ url:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  heading: "words"
},
{ url:"https://images.unsplash.com/photo-1616627434852-097e535878d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
heading: "more words"
},
{ url:"https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  heading: "words"
},
{ url:"https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  heading: "the words"
}];


//Render Everything
const profile = document.getElementById("pictures");

for (var i=0; i < urls.length; i++) {
  var picture = new Picture(urls[i], i);
  profile.innerHTML += picture.render();
}

function togglelinks() {
  let links = document.getElementById("nav-links");
  links.style.width = (links.offsetWidth === 0) ? "100%" : "0";
}

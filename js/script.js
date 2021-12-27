const myApp = document.createElement('div');

document.body.append(myApp); //див в боди

const myUl = document.createElement("ul"); // создаем ul
myUl.classList.add("app-list"); // добавляем на него класс
myApp.append(myUl); // список вставили в див

const photo = [
  {
    url: "img/mount.jpg",
    title: "Горный пейзаж",
  },
  {
    url: "img/2.jpg",
    title: "Девушка в лодке",
  },
  {
    url: "img/3.jpg",
    title: "Дорога",
  },
  {
    url: "img/4.jpg",
    title: "Горная река",
  },
  {
    url: "img/5.jpg",
    title: "Горное озеро",
  },
  {
    url: "img/6.jpg",
    title: "Дорога с облаками",
  },
  {
    url: "img/7.jpg",
    title: "Лавандовые поля",
  },
  {
    url: "img/8.jpg",
    title: "Горы и небо",
  },
];

photo.forEach(item => {
  // console.log(item.url);
  // console.log(item.title);
  const li = document.createElement('li');

  const myImg = document.createElement('img');
  myImg.src = item.url;
  myImg.style.cssText = `
    height: 120px;
    width: 300px;
  `;
  
  const myP = document.createElement('p');
  myP.textContent = item.title;
  myP.style.cssText = `
    color:red;
    font-size:24px;
    font-weight:900;
    text-align:center;
  `;

  li.style.cssText = `
    height: 200px;
    width:300px;
    border: 1px solid black;
  `;
  
  myUl.append(li); //вставляем в ul
  li.append(myImg);
  li.append(myP);

})



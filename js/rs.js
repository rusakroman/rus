const myApp = document.querySelector(".app");
const myUl = document.createElement("ul"); // создаем ul
myUl.classList.add("app-list"); // добавляем на него класс
console.log(myApp);
const photo = [
  {
    url: "img/doll.jpg",
    title: "Кукла",
  },
  {
    url: "img/lotos.jpg",
    title: "Лотос",
  },
  {
    url: "img/mask.jpg",
    title: "Маска",
  },
  {
    url: "img/monitor",
    title: "Монитор",
  },
  {
    url: "img/mount.jspg",
    title: "Гора",
  },
  {
    url: "img/notebook.jpg",
    title: "Ноут",
  },
  {
    url: "img/road.jpg",
    title: "Дорога",
  },
  {
    url: "img/tree.jpg",
    title: "Дерево",
  },
];

photo.forEach(item => {
  console.log(item.url);
  console.log(item.title);
  const li = document.createElement('li');
  li.innerHTML = `
    <img src=${item.url}>
    <p>${item.title}</p>
  `;
  li.style.cssText = `
    height: 200px;
    width:300px;
    border: 1px solid black;
  `;
  myApp.append(li);

})


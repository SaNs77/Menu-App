const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 150,
    img: "/Images/Img1.jpg",
    desc: `Indian cuisine is always filled with a lot of herbs and spices. Furthermore, the specialty of Indian dishes is, it is always filled with curries. Whether veg or non-veg the dishes are in curry form. Moreover, Indian cuisine has so many varieties of food that has further branches. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "breakfast",
    price: 750,
    img: "Images/img2.jpg",
    desc: `Chinese cuisine in India is also very popular. There are many Chinese theme-based restaurants here. Moreover, in these restaurants Chinese are preferable chefs because they can only give the perfect Chinese blend. Chinese cuisines have a wide variety of dishes.  `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "breakfast",
    price: 655,
    img: "Images/img3.jpg",
    desc: `Italian cuisines is one of the most popular cuisines around the world. Moreover, it is widely available in our India too. Dishes like pizza, pasta, and lasagna own a special place in the hearts’ of people.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 215,
    img: "Images/img4.jpg",
    desc: `Chinese cuisine in India is also very popular. There are many Chinese theme-based restaurants here. Moreover, in these restaurants Chinese are preferable chefs because they can only give the perfect Chinese blend. Chinese cuisines have a wide variety of dishes. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "dinner",
    price: 79,
    img: "Images/imgd1.jpg",
    desc: `Italian cuisines is one of the most popular cuisines around the world. Moreover, it is widely available in our India too. Dishes like pizza, pasta, and lasagna own a special place in the hearts’ of people. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "dinner",
    price: 200,
    img: "Images/imgd2.jpg",
    desc: `Chinese cuisine in India is also very popular. There are many Chinese theme-based restaurants here. Moreover, in these restaurants Chinese are preferable chefs because they can only give the perfect Chinese blend. Chinese cuisines have a wide variety of dishes. .`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "dinner",
    price: 899,
    img: "Images/imgd3.jpg",
    desc: `Italian cuisines is one of the most popular cuisines around the world. Moreover, it is widely available in our India too. Dishes like pizza, pasta, and lasagna own a special place in the hearts’ of people. `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 1000,
    img: "Images/imgL1.jpg",
    desc: `Chinese cuisine in India is also very popular. There are many Chinese theme-based restaurants here. Moreover, in these restaurants Chinese are preferable chefs because they can only give the perfect Chinese blend. Chinese cuisines have a wide variety of dishes.  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "lunch",
    price: 1699,
    img: "Images/imgL2.jpg",
    desc: `Indian cuisine is always filled with a lot of herbs and spices. Furthermore, the specialty of Indian dishes is, it is always filled with curries. Whether veg or non-veg the dishes are in curry form. Moreover, Indian cuisine has so many varieties of food that has further branches. `,
  },
  {
    id: 10,
    title: "Super Lunch",
    category: "lunch",
    price: 1009,
    img: "Images/imgL3.jpg",
    desc: `Chinese cuisine in India is also very popular. There are many Chinese theme-based restaurants here. Moreover, in these restaurants Chinese are preferable chefs because they can only give the perfect Chinese blend. Chinese cuisines have a wide variety of dishes. Some of them are Chinese noodles, fried rice, Dumplings, etc..`,
  },
  {
    id: 11,
    title: "Vodka",
    category: "drinks",
    price: 150,
    img: "Images/imgdr1.jpg",
    desc: `Thus, all the dishes have different taste. Furthermore, our nature provides us a variety of food. From fruits to vegetables, from Dairy food to seafood everything is available. Different countries have their own specialty of dishes. Therefore some of them are below`,
  },
  {
    id: 12,
    title: "Lemonade",
    category: "drinks",
    price: 59,
    img: "Images/imgdr2.jpg",
    desc: `Indian cuisine is always filled with a lot of herbs and spices. Furthermore, the specialty of Indian dishes is, it is always filled with curries. Whether veg or non-veg the dishes are in curry form. Moreover, Indian cuisine has so many varieties of food that has further branches.`,
  },
  {
    id: 13,
    title: "Stress buddy",
    category: "drinks",
    price: 499,
    img: "Images/imgdr3.jpg",
    desc: `Thus, all the dishes have different taste. Furthermore, our nature provides us a variety of food. From fruits to vegetables, from Dairy food to seafood everything is available. Different countries have their own specialty of dishes. Therefore some of them are below`,
  },
  {
    id: 14,
    title: "Special Jal",
    category: "drinks",
    price: 799,
    img: "Images/imgdr4.jpg",
    desc: `Thus, all the dishes have different taste. Furthermore, our nature provides us a variety of food. From fruits to vegetables, from Dairy food to seafood everything is available. Different countries have their own specialty of dishes. Therefore some of them are below.`,
  },
  {
    id: 15,
    title: "Vape",
    category: "Vape",
    price: 999,
    img: "Images/vape1.jpg",
    desc: `Thus, all the dishes have different taste. Furthermore, our nature provides us a variety of food. From fruits to vegetables, from Dairy food to <strong>SMOKING KILLS</strong>. Different countries have their own specialty of dishes. Therefore some of them are below.`,
  },
];

const container = document.querySelector(".container");
const btncontainer = document.querySelector(".button");

window.addEventListener("DOMContentLoaded", function () {
  showMenu(menu);
});

const newBtns = menu.reduce(
  function (values, newItem) {
    if (!values.includes(newItem.category)) values.push(newItem.category);
    return values;
  },
  ["all"]
);

const btnArray = newBtns
  .map(function (items) {
    return `<button class="btn ${items}" data-id="${items}">${items}</button>`;
  })
  .join("");
btncontainer.innerHTML = btnArray;
const buttons = document.querySelectorAll(".btn");

// ---------------Filtering Items-----------
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const newBtnMenu = menu.filter(function (items) {
      if (items.category === category) {
        return items;
      }
    });
    if (category === "all") {
      showMenu(menu);
    } else {
      showMenu(newBtnMenu);
    }
  });
});
// ---------------End Of Filtering Items-----------

// --------------SHOW ITEMS----------------
function showMenu(newarray) {
  newMenu = newarray
    .map(function (items) {
      return ` 
      <div class="food_image">
          <img src=${items.img} alt="${items.title}" />
        </div>
        <div class="food_desc">
          <h1>${items.title}</h1>

          <h1>Rs ${items.price}</h1>
          <div class="line"></div>
          <p>
            ${items.desc}
          </p>
        </div>
      
      </div>`;
    })
    .join("");
  container.innerHTML = newMenu;
}
// --------------END OF SHOW ITEMS ----------------

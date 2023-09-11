// Elemtnts

let image = document.getElementById("emp--img");

let Name = document.getElementById("employee--name");
let jb_post = document.getElementById("job--post");
let desc = document.getElementById("desc");
let prev_btn = document.getElementById("prev--btn");
let next_btn = document.getElementById("next--btn");
let random_btn = document.getElementById("random--btn");

review = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Peter Jones",
        JobPost: "Inter 1",
        desc: "1 eleifend tempus, tellus orci torquent odio potenti id sociosqu nulla. Posuere nostra vel cubilia egestas himenaeos bibendum neque curabitur semper, pretium nascetur morbi torquent tincidunt proin dis ac, leo imperdiet tempus est lacinia pellentesque justo cursus. Eros cum vehicula pharetra eget gravida volutpat justo, nam ut porttitor habitant sodales imperdiet"
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Peter Jones 1",
        JobPost: "Inter 2",
        desc: "2 eleifend tempus, tellus orci torquent odio potenti id sociosqu nulla. Posuere nostra vel cubilia egestas himenaeos bibendum neque curabitur semper, pretium nascetur morbi torquent tincidunt proin dis ac, leo imperdiet tempus est lacinia pellentesque justo cursus. Eros cum vehicula pharetra eget gravida volutpat justo, nam ut porttitor habitant sodales imperdiet"
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Peter Jones 2",
        JobPost: "Inter 3",
        desc: "3 eleifend tempus, tellus orci torquent odio potenti id sociosqu nulla. Posuere nostra vel cubilia egestas himenaeos bibendum neque curabitur semper, pretium nascetur morbi torquent tincidunt proin dis ac, leo imperdiet tempus est lacinia pellentesque justo cursus. Eros cum vehicula pharetra eget gravida volutpat justo, nam ut porttitor habitant sodales imperdiet"
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Peter Jones 3",
        JobPost: "Inter 4",
        desc: "4 eleifend tempus, tellus orci torquent odio potenti id sociosqu nulla. Posuere nostra vel cubilia egestas himenaeos bibendum neque curabitur semper, pretium nascetur morbi torquent tincidunt proin dis ac, leo imperdiet tempus est lacinia pellentesque justo cursus. Eros cum vehicula pharetra eget gravida volutpat justo, nam ut porttitor habitant sodales imperdiet"
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Peter Jones 4",
        JobPost: "Inter 5",
        desc: "5 eleifend tempus, tellus orci torquent odio potenti id sociosqu nulla. Posuere nostra vel cubilia egestas himenaeos bibendum neque curabitur semper, pretium nascetur morbi torquent tincidunt proin dis ac, leo imperdiet tempus est lacinia pellentesque justo cursus. Eros cum vehicula pharetra eget gravida volutpat justo, nam ut porttitor habitant sodales imperdiet"
    },
]

// current item 
currentItem = 0;


// data on itial load 
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
})

// data rendering 
function showPerson(person) {
    const item = review[person];
    Name.textContent = item.name;
    jb_post.textContent = item.JobPost;
    desc.textContent = item.desc;
    image.src = item.image;
}

// next button click event listener
next_btn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Prev button click event listener
prev_btn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = review.length -1;
    }
    showPerson(currentItem);
});

// random button click event listener
random_btn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * review.length)
    showPerson(currentItem);
})
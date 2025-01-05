var swiper = new Swiper('.mySwiper', {
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});

async function getAllPosts() {
  let response = await fetch('http://localhost:3000/all-posts?&_limit=5');
  let content = await response.json();
  content = content.splice(0, 10);

  let getallposts = document.querySelector('.swiper-slide-2');

  let key;

  for (key in content) {
    getallposts.innerHTML += `
              <div class="posts-block startup">
                      <div class="startup-photo">
                        <img src="${content[key].photo}" alt="startup" />
                      </div>
                      <div class="startup-info">
                        <span><a href="category.html">${content[key].name}</a></span>
                        <h3>
                          <a href="blogpost.html"
                            >${content[key].fname}</a
                          >
                        </h3>
                        <p>
                        ${content[key].description}
                        </p>
                      </div>
                    </div>
  
      `;

    console.log(content[key]);
  }
}
getAllPosts();

async function getAllPostsThree() {
  let response = await fetch('http://localhost:3000/all-posts-three?&_limit=5');
  let content = await response.json();
  content = content.splice(0, 10);

  let getallposts = document.querySelector('.swiper-slide-3');

  let key;

  for (key in content) {
    getallposts.innerHTML += `
                <div class="posts-block startup">
                        <div class="startup-photo">
                          <img src="${content[key].photo}" alt="startup" />
                        </div>
                        <div class="startup-info">
                          <span><a href="category.html">${content[key].name}</a></span>
                          <h3>
                            <a href="blogpost.html"
                              >${content[key].fname}</a
                            >
                          </h3>
                          <p>
                          ${content[key].description}
                          </p>
                        </div>
                      </div>
    
        `;

    console.log(content[key]);
  }
}
getAllPostsThree();

async function getResponse() {
  let response = await fetch('http://localhost:3000/categories');
  let content = await response.json();
  content = content.splice(0, 10);

  let category = document.querySelector('.block-3-main');

  let key;

  for (key in content) {
    category.innerHTML += `
              <div class="block-3-blocks">
                <img class="block-3-icons" src="${content[key].icon}" alt="Business" />
                <h3><a href="author.html">${content[key].name}</a></h3>
                <p>${content[key].description}</p>
              </div>
  
      `;

    console.log(content[key]);
  }
}
getResponse();

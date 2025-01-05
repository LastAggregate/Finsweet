async function getAuthors() {
  let response = await fetch('http://localhost:3000/authors?&_limit=4');
  let content = await response.json();
  content = content.splice(0, 10);

  let authors = document.querySelector('.block-6-authors-info');

  let key;

  for (key in content) {
    authors.innerHTML += `
              

              <div class="block-6-authors">
                        <img src="${content[key].photo}" alt="author-1">
                        <h3><a href="author.html">${content[key].name}</a></h3>
                        <span>Content Writer @Company</span>
                        <div class="block-6-section-links">
                            <a href="${content[key].fb}" class="link-images fb"><img src="./images/Home/social-net/Facebook _ Negative.png" alt="fb"></a>
                            <a href="${content[key].tw}" class="link-images tw"><img src="./images/Home/social-net/Twitter _ Negative.png" alt="tw"></a>
                            <a href="${content[key].iw}" class="link-images ig"><img src="./images/Home/social-net/Instagram _ Negative.png" alt="ig"></a>
                            <a href="${content[key].in}" class="link-images in"><img src="./images/Home/social-net/LinkedIn _ Negative.png" alt="in"></a>
                        </div>
                    </div>
      `;
  }
}
getAuthors();

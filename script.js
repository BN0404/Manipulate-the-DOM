let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const shortText = document.querySelector('#main-title')
  shortText.innerText = 'Hello All!!';


  // Part 2
  const body = document.querySelector('body')
  body.style.backgroundColor = '#5885df';

  // Part 3
    
const domFavList = document.querySelector("#favorite-things")
console.log(domFavList);

const lastLi = domFavList.lastElementChild
// console.log(lastLi);
  lastLi.remove()
  

  // Part 4
  const specialClass = document.querySelectorAll(".special-title");
//   console.log(specialClass);
  specialClass.forEach(element => {
    element.style.fontSize = '2rem';
  })

  // Part 5

  console.log(body)
  const newCity = document.getElementById('past-races')
  newCity.lastElementChild.previousElementSibling.previousElementSibling.remove();

  // console.log(newCity);
  // const chicagoRem = newCity.querySelectorAll('li');
  // console.log(chicagoRem);

  // chicagoRem.forEach(city => {
  //   if(city.innerText === 'Chicago') {
  //     city.remove;
  //   }
  //   console.log(chicagoRem);
  // })

   // Part 6
  const li = document.createElement('li')
  newCity.appendChild(li);
  li.innerText = 'Pittsburgh';
  

  // Part 7

  const div = document.createElement('div');
  const main = document.querySelector('.main')
  div.setAttribute('class', 'blog-post purple' )
  // div.className = '.blog-post';
  
  const h1 = document.createElement('h1');
  
  h1.textContent = 'Pittsburgh';
  const p = document.createElement('p');
  p.textContent = 'My First Race';
  main.appendChild(div); 
  console.log(div);
  div.appendChild(h1);
  div.appendChild(p);
 
  // console.log(body)


  // Part 8


  const quote = document.querySelector('#quote-title');
  quote.addEventListener('click', function () {
    randomQuote();
  })

  // Part 9

  function togglePost(post)
  {
    post.classList.toggle('purple')
    post.classList.toggle('red')
  }
  const blogPosts = document.querySelectorAll('.blog-post')
  console.log(blogPosts)
  blogPosts.forEach(post =>
  {
    post.addEventListener('mouseleave', (e) =>
    {
      console.log('LEAVING')
      togglePost(e.target)
    })
    post.addEventListener('mouseenter', (e) =>
    {
      console.log('ENTERED')
      togglePost(e.target)
    })
  }) 



});

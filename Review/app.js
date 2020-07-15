// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
     },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      }
  ];
  //select items
  const img = document.getElementById('person-img')
  const author = document.getElementById('author')
  const job = document.getElementById('job')
  

  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')
  const randomBtn = document.querySelector('.surprice')

  //set starting item
  let currentValue = 3

  //load initial item 
  window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentValue)
  })

  //show person based on item
  function showPerson(person) {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job 
  }

  //show net person
  nextBtn.addEventListener('click', function() {
    currentValue++
    if (currentValue > reviews.length) {
        currentValue = 0
        showPerson(currentValue)
    } else {
        showPerson(currentValue)
    }
  })
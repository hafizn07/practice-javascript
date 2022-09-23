const course = [
    {
        name: "Complete React Js course",
        price: "2.3"
    },
    {
        name: "Complete NodeJs course",
        price: "2.5"
    },
    {
        name: "Complete MERN course",
        price: "3.2"
    },
    {
        name: "Complete Angular course",
        price: "2.7"
    }
]

/* <ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
      </ul> */


function generateList() {
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ("")
    course.forEach(course => {

        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)
    })
}

// generateList()

window.addEventListener("load", generateList)

const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    course.sort((a, b) => a.price - b.price)
    generateList()
})
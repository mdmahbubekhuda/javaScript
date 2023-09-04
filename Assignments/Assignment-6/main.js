// navigation
const header = document.querySelector('#navigation')
const nav = document.createElement('nav')
nav.classList.add('w-11/12', 'mx-auto', 'py-8')
nav.innerHTML = `
    <div class="flex flex-col sm:flex-row gap-4 justify-between my-4">
        <img src="./Logo.png" />
        <button id="sort-btn" class="btn btn-active focus:bg-[#FF1F3D] focus:text-white">Sort by View</button>
        <a class="btn bg-[#FF1F3D] hover:bg-[#FF1F3D] text-white" href="./blog.html" target="_blank">
        Blog
        </a>
    </div>
    <hr />
`
header.appendChild(nav)

// categories - load data
const loadCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    const categories = data.data
    displayCategories(categories)
}

// categories tab - display
const displayCategories = (categories) => {
    const categoriesContainer = document.querySelector('#categories-container')
    // add categories
    categories.forEach(categoryTab => {
        // add tabs
        const tab = document.createElement('a')
        tab.classList.add('tab', 'bg-gray-300', 'font-medium', 'text-[#1f293780]', 'hover:bg-[#FF1F3D]', 'hover:text-white')
        tab.setAttribute('onclick', `loadCardDetails(${categoryTab?.category_id})`)
        tab.innerText = `${categoryTab?.category}`
        categoriesContainer.appendChild(tab)

        // active tab
        if (tab.innerText === 'All') tab.classList.replace('bg-gray-300', 'bg-[#FF1F3D]')
        if (tab.innerText === 'All') tab.classList.replace('text-[#1f293780]', 'text-white')

        categoriesContainer.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            document.querySelectorAll('.tab').forEach(tab => {
                if (e.target === tab) {
                    tab.classList.replace('bg-gray-300', 'bg-[#FF1F3D]')
                    tab.classList.replace('text-[#1f293780]', 'text-white')
                }
                else if (e.target !== categoriesContainer) {
                    tab.classList.replace('bg-[#FF1F3D]', 'bg-gray-300')
                    tab.classList.replace('text-white', 'text-[#1f293780]')
                }
            })
        })
    })
}

// function - post date counter
const timeSincePost = (seconds) => {
    const hrs = (seconds / 3600)
    const mins = (hrs - Math.floor(hrs)) * 60

    return (seconds > 0) ? (`${Math.floor(hrs)} hrs ${Math.floor(mins)} mins ago`) : ''
}

// function - sort by view
const sort = (details) => {

    document.querySelector('#sort-btn').addEventListener('click', () => {
        const sortedData = details.sort((b, a) => a.others.views.toLowerCase().replace('k', '') - b.others.views.toLowerCase().replace('k', ''))

        displayCard(sortedData)
    })
}

// card - load data
const loadCardDetails = async (id = '1000') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const details = data.data
    displayCard(details)
    sort(details)
}

// card - display
const displayCard = (details) => {
    const cardContainer = document.querySelector('#card-container')
    cardContainer.innerHTML = ''

    // display - validation (no data found)
    if (Array.isArray(details) && !details.length) {
        cardContainer.innerHTML = `
            <div class="col-span-full place-self-center p-8">
                <img class="mx-auto" src="./Icon.png" />
                <h1 class="text-2xl md:text-4xl font-bold mt-4 text-center">Oops!! Sorry, There is no content here</h1>
            </div>
        `
    }

    // display - card details
    details.forEach(card => {
        // get date in seconds & convert to millisecond
        const seconds = Number(card.others.posted_date)

        // add card content
        const div = document.createElement('div')
        div.classList.add('card', 'w-full', 'bg-base-100')
        div.innerHTML = `
        <figure class="rounded-none">
            <img class="h-[35vh] aspect-video rounded-lg" src="${card?.thumbnail}"/>
        </figure>
        <div class="flex justify-end">
            <p class="-translate-y-10 -translate-x-2 text-sm font-bold bg-[#171717] text-white w-fit py-1 px-2 rounded">
            ${timeSincePost(seconds)}
            </p>
        </div>
        <div class="card-body flex flex-row p-2">
            <img class="h-[10vh] aspect-square rounded-full" src="${card.authors?.map((pic) => pic.profile_picture)}"/>
            <div>
                <h2 class="card-title">${card?.title}</h2>
                <h3>${card.authors?.map((name) => name.profile_name)}
                <img class="inline ml-4" src="${card.authors[0]?.verified ? './badge.svg' : ''}" /></h3>
                <p>${card.others?.views} views</p>
            </div>
        </div>
    `
        cardContainer.appendChild(div)
    })
}

loadCategories()
loadCardDetails()
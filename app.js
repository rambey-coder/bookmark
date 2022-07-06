const tabs = document.querySelectorAll('.toggle');
const content = document.querySelectorAll('.tabs-content');

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        content.forEach((content) => {
            content.classList.remove('active')
        })

        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })

        content[i].classList.add('active')
        tabs[i].classList.add('active')
    })
})


const faq = document.querySelectorAll('.acc-1')

faq.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
    })
})
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

/*
styles for text(.summary)
.acc-1.active .summary {
    max-height: 300px;
}
styles for arrow
.acc-1.active i {
    color: hsl(0, 94%, 66%);
    transform: rotate(180deg);
}
*/



function validateForm() {
    const validate = document.querySelector('.form-submit')
    validate.addEventListener('submit', (e) => {

        const val = document.querySelector('.val').value
        let regex = /[a-z0-9]+@[a-z0-9]/;

        if(regex.test(val)){
            alert('Form submitted successfully')
        } else {
            validate.classList.add('active')
            setTimeout(() => {
                validate.classList.remove('active')
            }, 3000);
        }

        e.preventDefault()
    })
}

validateForm()
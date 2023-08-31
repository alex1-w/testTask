const btns = document.querySelectorAll('.btn')
// const description = document.querySelectorAll('.btnDescription')
// elem.classList.toggle('.btn__active')


btns.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        const inner = btn.getElementsByClassName('btnDescription')
        inner[0].classList.toggle('btn__active')

    })
})

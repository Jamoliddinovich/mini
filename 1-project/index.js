let atr = document.querySelectorAll('.article')
atr.forEach(a=>{
    a.addEventListener('click',()=>{
        atr.forEach(b=>{
            b.classList.contains('active')&&b.classList.remove('active')
        })
        a.classList.add('active')
    })
})
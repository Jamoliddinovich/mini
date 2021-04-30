document.querySelectorAll('.accordion-title').forEach((element) => {
    element.addEventListener('click', (e) => {
        e.target.parentNode.style.height = 55 + 'px'
        e.target.parentNode.classList.toggle('active')
    if(e.target.parentNode.classList.contains('active')) {
        let a1  =getComputedStyle(e.target.parentNode.children[1]).height;
        let a2  =getComputedStyle(e.target.parentNode.children[0]).height;
        let b1 = ''
        let b2 = ''
        for(let i = 0;i <a1.length-2;i++){
b1+=a1[i]
        }
        for(let i = 0;i <a2.length-2;i++){
            b2+=a2[i]
                    }
      e.target.parentNode.style.height = (+b1 + +b2+30) + 'px'
    }
    else{
        e.target.parentNode.style.height = '55px'
    }
})
})
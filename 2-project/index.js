let queries = document.querySelectorAll('.level')
let btn = document.querySelectorAll('.btn')

let level = 1

queries.forEach((a) => {

})

let [prev,next] = btn
prev.addEventListener('click',()=>{
    if(level===2){
     prev.disabled  =true   
     level= 1
    }else{
        level--
        prev.disabled = false
        next.disabled = false
    }
    update()
})
next.addEventListener('click',()=>{
    if(level===3){
     next.disabled  =true   
     level = 4
    }else{
        level++
        prev.disabled = false
        next.disabled = false
    }
    update()
})
function update() {
    queries.forEach((q, i) => {
        if(q.classList.contains('active')){
            q.classList.remove('active')
        }
        if (level > i) {
            q.classList.add('active')
        }
    })
    document.querySelector('.after').style.width = (level-1)*100/3 +'%'
}
document.querySelector('input').onchange = ()=>{
    console.log(document.querySelector('input').value)
}
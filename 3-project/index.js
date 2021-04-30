document.querySelector('.ustun').addEventListener('click',()=>{
    document.querySelector('.nav').className='nav active'
document.querySelector('.navbar').className = 'navbar active'
document.querySelector('article').className='active'
})
document.querySelector('.yopiq').addEventListener('click',()=>{
    document.querySelector('.nav').classList.remove('active')
    document.querySelector('.navbar').classList.remove('active')
    document.querySelector('article').classList.remove('active')
})
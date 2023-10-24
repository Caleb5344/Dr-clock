setInterval(() => {
    let date = new Date()
    let Clock = 
    document.getElementById('clock')
    Clock.innerHTML = 
    date.getHours()+':'+
    date.getMinutes()+':'+
    date.getSeconds()
}, 1000);
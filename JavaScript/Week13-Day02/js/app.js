function countDown(count, callback) {

    let interval = setInterval(function() {
        if (count <= 0) {
            callback()
            clearInterval(interval)
        } else {
            count--
            console.log(count)
        }
    }, 500)
}

function customTrigger() {
    let count = 10;
    let interval = setInterval(function() {
        if (count <= 0) {
            clearInterval(interval)
        } else {
            count--
            console.log(count)
        }
    }, 1000)
}

function miniCallback(trigger, callback) {
    trigger()
    setTimeout(callback, 11000)


}

miniCallback(customTrigger, function() {
    console.log('Nehayet ki menim siram geldi')
})
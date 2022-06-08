function clock() {
    function getTimeFromSecond(seconds) {
        const date = new Date(seconds * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const clock = document.querySelector('.clock')
    let seconds = 0
    let timer

    function startClock() {
        timer = setInterval(function () {
            seconds++
            clock.innerHTML = getTimeFromSecond(seconds)
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const element = e.target

        if (element.classList.contains('start')) {
            clock.classList.remove('stopped')
            clearInterval(timer)
            startClock()
        }

        if (element.classList.contains('stop')) {
            clock.classList.add('stopped')
            clearInterval(timer)
        }

        if (element.classList.contains('restart')) {
            clock.classList.remove('stopped')
            clearInterval(timer)
            clock.innerHTML = '00:00:00'
            seconds = 0
        }
    })
}

clock()


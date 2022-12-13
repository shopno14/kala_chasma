let belly = document.getElementById("belly");
let body = document.querySelector("body")
// let chasma = document.getElementById("chasma");
let start = 420;
let end = 600;
let now_y = start;
let up_down;

// let myaudio = document.getElementById("my_audio");



function change_belly(n) {
    belly.setAttribute('d', `M 550,350 C 650,280 800,${n} 980,395`)
}
function dance() {

    setTimeout(() => {
        // console.log('9000 s end')




        up_down= setInterval(() => {
            // console.log(now_y)
            change_belly(now_y)

            if (now_y == start) {
                let endClose = setInterval(() => {

                    now_y = now_y + 30;
                    if (now_y >= end) {
                        now_y = end;
                        // chasma.setAttribute("fill", "rgb(66, 64, 64)")

                        clearInterval(endClose)
                    }
                }, 20);
            }
            if (now_y == end) {
                let startClose = setInterval(() => {


                    now_y = now_y - 30;
                    if (now_y <= start) {
                        now_y = start;
                        // chasma.setAttribute("fill", "white")

                        clearInterval(startClose)
                    }
                }, 20);
            }
        }, 40);



    }, 10000);

}

function music() {
    let audio = new Audio("./kala_chasma2.mp3")
    audio.play()

    audio.addEventListener('ended', function () {
        // console.log("audio stoped")
        clearInterval(up_down);
        main_body_click()
    })
}


function all() {
    dance()
    music()
}

function main_body_click(){
            body.addEventListener("click", () => {
            // console.log("body clicked")
            all();
        }, { once: true })

}

window.onload = function () {
    setTimeout(() => {
        main_body_click();
    }, 300);


}
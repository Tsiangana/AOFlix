
let search  = document.getElementById('search');
let search_icon  = document.getElementById('search_icon');

search_icon.addEventListener('click', ()=>{
    search.classList.toggle('search_input')
})

let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click', ()=>{
    cato_bx.scrollLeft -= 100;
})
right_scroll.addEventListener('click', ()=>{
    cato_bx.scrollLeft += 100;
})

let mvoes_bx_1 = document.getElementById('mvoes_bx_1');
let left_scroll1 = document.getElementById('left_scroll1');
let right_scroll1 = document.getElementById('right_scroll1');

left_scroll1.addEventListener('click', ()=>{
    mvoes_bx_1.scrollLeft -= 150;
})
right_scroll1.addEventListener('click', ()=>{
    mvoes_bx_1.scrollLeft += 150;
})




// year and a-z box start
let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', ()=>{
    year.classList.toggle('show_year1');
})
a_z.addEventListener('click', ()=>{
    a_z.classList.toggle('show_year1');
})
// year and a-z box end 

//other list start
let list = document.getElementById('list');

list.addEventListener('click', ()=>{
    list.classList.toggle('ohetlist');
})
//other list end



// video control start //
let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');

play_btn.addEventListener('click', ()=>{
    videos.play();
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});

plays.addEventListener('click', ()=>{
    if (videos.paused || videos.currentTime <= 0)  {
        plays.classList.add('bi-pause-fill');
        plays.classList.remove('bi-play-fill');
        videos.play();
    }else{
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
        videos.pause();
    }
});
// video control end //

// video time update start //
videos.addEventListener('timeupdate', ()=>{
    let start_time = document.getElementById('start_time');
    let end_time = document.getElementById('end_time');
    let video_duration = videos.duration;
    let min = Math.floor(video_duration/60);
    let hour = Math.floor(min/60);
    let sec = Math.floor(video_duration%60);
    let video_current_time = videos.currentTime;

    let start_min = Math.floor(video_current_time /60);
    let start_sec = Math.floor(video_current_time %60);
    let start_hour = Math.floor(start_min /60);

    if (start_min < 10) {
        start_min = "0" + start_min;
    } 
    if (start_sec < 10) {
        start_sec = "0" + start_sec;
    } 

    start_time.innerText = start_min + ":" + start_sec;

    if (start_hour < 10) {
        start_hour = "0" + start_hour;
    } 
    if (start_min == 60 || start_min  > 60) {
        start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
    }

    // end 
    let end_min = min - start_min;
    let end_sec = video_duration - start_sec;
    let end_hour = hour - start_hour;


    let end_mins = Math.floor(end_min % 60);
    let end_secs = Math.floor(end_sec % 60);
    let end_hours = Math.floor(end_min / 60);

    if (end_mins < 10) {
        end_mins = "0" + end_mins;
    } 
    if (end_secs < 10) {
        end_secs = "0" + end_secs;
    }
    if (end_hours < 10) {
        end_hours = "0" + end_hours;
    }  


    end_time.innerText =  "-"  + end_mins + ":" + end_secs;

    if (end_min == 60 || end_min  > 60) {
        end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;
    }


//  seek bar start
let seek = document.getElementById('seek');
let seek_2 = document.getElementById('seek_2');
let seek_dot = document.getElementById('seek_dot');

let progressbar = parseInt((videos.currentTime / videos.duration)*100);

seek.value = progressbar;
let seekbar = seek.value;
seek_2.style.width = `${seekbar}%`;
seek_dot.style.left = `${seekbar}%`;

// seekbar value change //

let sec_30 = document.getElementById('sec_30');
seek.addEventListener('change', ()=>{
    videos.currentTime = seek.value * videos.duration / 100;
    sec_30.addEventListener('click', ()=>{
        videos.currentTime = seek.value * ((videos.duration - 30)/ 100);
    })
});

//video end event
videos.addEventListener('ended', ()=>{
    plays.classList.remove('bi-pause-fill');
    plays.classList.add('bi-play-fill');
})
});
// video time update end //


// volume change //
let start_seekbar_end = document.querySelector('.start_seekbar_end');
let cc_vol_screen = document.querySelector('.cc_vol_screen');
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');

vol_icon.addEventListener('click', ()=>{
    cc_vol_screen.classList.toggle('cc_vol');
    start_seekbar_end.classList.toggle('start_seekbar');
    vol.classList.toggle('input_vol');
});

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 60) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    videos.volume = vol_a /100;
})

// full screen start

let full_screen = document.getElementById('full_screen');
full_screen.addEventListener('click', ()=>{
    videos.requestFullscreen();
});


// video box start

let title_video = document.getElementsByClassName('title_video');
let video_1 = document.getElementsByClassName('video_1');

video_1[0].addEventListener('click', ()=>{
    videos.src = "video/trailer1.mp4";
    videos.play();
    title_video[0].innerText = "Pantera Negra Wakanda para Sempre Marvel Studios Trailer Oficial(2023)";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
})
video_1[1].addEventListener('click', ()=>{
    videos.src = "video/trailer2.mp4";
    videos.play();
    title_video[0].innerText = "ARMOR WARS Trailer 1 HD Disney- Concept Don Cheadle- Gwyneth Paltrow";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
})
video_1[2].addEventListener('click', ()=>{
    videos.src = "video/trailer3.mp4";
    videos.play();
    title_video[0].innerText = "TRANSFORMERS O DESPERTAR DAS FERAS Trailer Brasileiro -2023- ᴴᴰ";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});


let action1 = document.getElementById('action1');
let action_bx = document.getElementById('action_bx');

action1.addEventListener('click', ()=>{
    action1.classList.toggle('cato_button_active');
    action_bx.classList.toggle('movie_box_active');
});

const action_array = movies.filter((e)=>{
    return e.genre1 == 'action';
});

action_array.forEach(element => {
    const {img, title, year, url, rate} = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="bi bi-heart-fill"></i>
                            <i class="bi bi-eye-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    action_bx.appendChild(card);
});





// crime button and active box

let crime1 = document.getElementById('crime1');
let crime_bx = document.getElementById('crime_bx');

crime1.addEventListener('click', ()=>{
    crime1.classList.toggle('cato_button_active');
    crime_bx.classList.toggle('movie_box_active');
});

const crime_array = movies.filter((e)=>{
    return e.genre2 == 'crime';
});

crime_array.forEach(element => {
    const {img, title, year, url, rate} = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="bi bi-heart-fill"></i>
                            <i class="bi bi-eye-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    crime_bx.appendChild(card);
});




// drama button and active box

let drama1 = document.getElementById('drama1');
let drama_bx = document.getElementById('drama_bx');

drama1.addEventListener('click', ()=>{
    drama1.classList.toggle('cato_button_active');
    drama_bx.classList.toggle('movie_box_active');
});

const drama_array = movies.filter((e)=>{
    return e.genre8 == 'drama';
});

drama_array.forEach(element => {
    const {img, title, year, url, rate} = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="bi bi-heart-fill"></i>
                            <i class="bi bi-eye-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    drama_bx.appendChild(card);
});

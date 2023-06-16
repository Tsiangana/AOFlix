
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


// header slider start//
let header_dur = document.getElementById('header_dur');
let header_gen = document.getElementById('header_gen');
let header_title = document.getElementById('header_title');
let header_pra = document.getElementById('header_pra');
let header = document.getElementsByTagName('header')[0];
let slider_btn = document.getElementsByClassName('slider');

const slider_load = ()=>{
    setTimeout(() => {
        header.style.background = "url('img/capa1.jpg') no-repeat center center/cover";
        header_dur.innerText = "02h 10min";
        header_gen.innerHTML = `<i class="bi bi-star-fill"></i>6.5
        <span>Action /Adventure /Sci-Fi</span>`;
        header_title.innerText = "Black Panther";
        header_pra.innerText = "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt...";
        slider_btn[0].style.background = "#fff";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    },0000);
    setTimeout(() => {
        header.style.background = "url('img/capa2.jpg') no-repeat center center/cover";
        header_dur.innerText = "2h 50min";
        header_gen.innerHTML = `<i class="bi bi-star-fill"></i>8.5
        <span>Action /Adventure /Ficção /Super Powers /heros</span>`;
        header_title.innerText = "Avengers Infinitive Wars";
        header_pra.innerText = "Avengers Infinitive Wars is a movie based on marvel adeption, is the best of best marvel adaptetion for the cinema ";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    },5000);
    setTimeout(() => {
        header.style.background = "url('img/capa3.png') no-repeat center center/cover";
        header_dur.innerText = "2h 10min";
        header_gen.innerHTML = `<i class="bi bi-star-fill"></i>7.3
        <span>Action /Adventure /Ficção /Super Powers</span>`;
        header_title.innerText = "Thor Amor e Trovão";
        header_pra.innerText = "Thor Amor e Trovão é uma das adaptações mais recentes da marvel em que o famoso thor se reencontra com o seu antigo amor possuidora do seu antigo martelo miolnir em que ambos tentar travar uma ameaça que deseja destruir o mundo.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
    },10000);
}
setInterval(slider_load, 15000);

slider_load();
// header slider end//



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

// Movies Box set 
/*
const movies = [
    {
        id: 1,
        img: "capas/A-Menina-Que-Roubava-Livros.jpg",
        title: "A Menina Que Roubava Livros",
        letter: "a",
        genre1: "none",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "horor",
        year: 2021,
        rate: 6.5,
        url: "Amenina.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 2,
        img: "capas/1.jpg",
        title: "Percy jackson e o ladrao de raios",
        letter: "p",
        genre1: "none",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "horor",
        year: 2017,
        rate: 6.2,
        url: "Percy.html",
        tppr: "recent",
        msot: "movie",
        upload: "all",
    },
    {
        id: 3,
        img: "capas/2.jpg",
        title: "Eternos",
        letter: "e",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2022,
        rate: 8.5,
        url: "Eternos.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 4,
        img: "capas/3.jpg",
        title: "Black Panther",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2021,
        rate: 9.5,
        url: "Black.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 5,
        img: "capas/4.webp",
        title: "Percy jackson e os olimpianos",
        letter: "p",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "none",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "horor",
        year: 2017,
        rate: 5.5,
        url: "Percy_jackson.html",
        tppr: "all",
        msot: "movie",
        upload: "all",
    },
    {
        id: 6,
        img: "capas/5.jpg",
        title: "Os 7 pecados capitais",
        letter: "o",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "horor",
        year: 2020,
        rate: 6.5,
        url: "pecados.html",
        tppr: "recent",
        msot: "anime",
        upload: "all",
    },
    {
        id: 7,
        img: "capas/6.jpg",
        title: "Mulan",
        letter: "m",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2021,
        rate: 7.5,
        url: "mulan.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 8,
        img: "capas/7.jpg",
        title: "Avengers Infinitive wars",
        letter: "a",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2021,
        rate: 9.5,
        url: "Avengers.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 9,
        img: "capas/8.jpg",
        title: "Matrix",
        letter: "m",
        genre1: "action",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "horor",
        year: 2021,
        rate: 6.5,
        url: "matrix.html",
        tppr: "recent",
        msot: "movie",
        upload: "all",
    },
    {
        id: 10,
        img: "capas/9.jpg",
        title: "Veneza",
        letter: "v",
        genre1: "none",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2020,
        rate: 4.5,
        url: "veneza.html",
        tppr: "recent",
        msot: "movie",
        upload: "all",
    },
    {
        id: 11,
        img: "capas/10.jpg",
        title: "Eu Acredito",
        letter: "e",
        genre1: "none",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "scifi",
        genre12: "none",
        year: 2021,
        rate: 6.5,
        url: "Acredito.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 12,
        img: "capas/11.jpg",
        title: "Rambo até ao fim",
        letter: "r",
        genre1: "action",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "18+",
        genre11: "none",
        genre12: "horor",
        year: 2016,
        rate: 6.5,
        url: "Rambo.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 13,
        img: "capas/12.jpg",
        title: "Implacavél",
        letter: "i",
        genre1: "action",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "18+",
        genre11: "none",
        genre12: "horor",
        year: 2016,
        rate: 6.5,
        url: "implacavel.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 14,
        img: "capas/13.jpg",
        title: "Infiltrado",
        letter: "i",
        genre1: "action",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "18+",
        genre11: "none",
        genre12: "horor",
        year: 2017,
        rate: 7.5,
        url: "infiltrado.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 15,
        img: "capas/14.jpg",
        title: "Encare & Dance",
        letter: "e",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "Drama",
        genre9: "webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2019,
        rate: 6.5,
        url: "encare_e_dance.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 16,
        img: "capas/15.jpg",
        title: "Alice no país das Maravilhas",
        letter: "a",
        genre1: "none",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "webseries",
        genre10: "none",
        genre11: "none",
        genre12: "horor",
        year: 2016,
        rate: 7.5,
        url: "Alice.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 17,
        img: "capas/16.jpg",
        title: "9 Pelotão",
        letter: "9",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2018,
        rate: 7.5,
        url: "Pelotão.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 18,
        img: "capas/17.jpg",
        title: "A Menina Que Roubava Livros 2",
        letter: "a",
        genre1: "none",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "none",
        genre6: "none",
        genre7: "docmentary",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2020,
        rate: 6.5,
        url: "Amenina.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 19,
        img: "capas/18.jpg",
        title: "Black Panther 2",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "none",
        genre9: "none",
        genre10: "none",
        genre11: "Scifi",
        genre12: "none",
        year: 2023,
        rate: 9.5,
        url: "Black.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 20,
        img: "capas/19.jpg",
        title: "Aladin",
        letter: "a",
        genre1: "none",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2021,
        rate: 6.5,
        url: "Aladin.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 21,
        img: "capas/20.jpg",
        title: "Oriente",
        letter: "o",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "comady",
        genre7: "none",
        genre8: "none",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2020,
        rate: 7.5,
        url: "oriente.html",
        tppr: "recent",
        msot: "Anime",
        upload: "latest",
    },
    {
        id: 22,
        img: "capas/21.jpg",
        title: "Hanrry Poter 1",
        letter: "h",
        genre1: "action",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "18+",
        genre11: "none",
        genre12: "horor",
        year: 2017,
        rate: 8.5,
        url: "Hanrry.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 23,
        img: "capas/22.webp",
        title: "Cinderela POP",
        letter: "c",
        genre1: "none",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "scifi",
        genre12: "none",
        year: 2022,
        rate: 5.5,
        url: "cinderela.html",
        tppr: "recent",
        msot: "serie",
        upload: "latest",
    },
    {
        id: 24,
        img: "capas/23.jpg",
        title: "Sherlock Holms",
        letter: "s",
        genre1: "action",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "horor",
        year: 2019,
        rate: 7.5,
        url: "sherlock.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 25,
        img: "capas/24.jpg",
        title: "Comiysan ya ha comuyusho",
        letter: "c",
        genre1: "none",
        genre2: "none",
        genre3: "animation",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2022,
        rate: 8.5,
        url: "comiysan.html",
        tppr: "recent",
        msot: "anime",
        upload: "latest",
    },
    {
        id: 26,
        img: "capas/25.webp",
        title: "Komisan",
        letter: "k",
        genre1: "none",
        genre2: "none",
        genre3: "animation",
        genre4: "none",
        genre5: "none",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2021,
        rate: 8.5,
        url: "komisan.html",
        tppr: "recent",
        msot: "anime",
        upload: "latest",
    },
    {
        id: 27,
        img: "capas/26.jpg",
        title: "A Prova de Fogo",
        letter: "a",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "docmentary",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2014,
        rate: 7.5,
        url: "prova.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 28,
        img: "capas/27.webp",
        title: "Magi",
        letter: "m",
        genre1: "action",
        genre2: "crime",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2020,
        rate: 6.5,
        url: "magi.html",
        tppr: "recent",
        msot: "anime",
        upload: "latest",
    },
    {
        id: 29,
        img: "capas/28.webp",
        title: "Coco",
        letter: "c",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "none",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2021,
        rate: 6.5,
        url: "coco.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 30,
        img: "capas/29.jpg",
        title: "Thor Ragnarok",
        letter: "t",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "comady",
        genre7: "none",
        genre8: "none",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2021,
        rate: 8.5,
        url: "Amenina.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
    {
        id: 31,
        img: "capas/30.jpg",
        title: "Guardiões da Galáxia",
        letter: "g",
        genre1: "action",
        genre2: "none",
        genre3: "adventure",
        genre4: "none",
        genre5: "animation",
        genre6: "comady",
        genre7: "none",
        genre8: "drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        year: 2022,
        rate: 8.5,
        url: "guardioes.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest",
    },
]
*/
// action button and active box

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

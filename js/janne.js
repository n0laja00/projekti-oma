$(document).ready(function(){
    
$("#start").click(function(){
    $("#subWrapper button, h2, h3").remove();
    $("#subWrapper").addClass("beach_dark_gold");
    $("#kultakala").addClass("float-left, fixed-bottom");
    $("#finish").toggleClass("collapse");
    game.start();

});

$("#finish").click(function(){
    $("#finish").toggleClass("collapse");
    game.done();
    game.resultFinish();
});

/*Kysymykset ja vastaukset oliona*/
let questions = [{
    question:"Milloin ensimmäinen maailmansota alkoi?", 
    answers:["1914-luvulla", "1234-luvulla", "2014-luvulla", "1500-luvulla"],
    correctAnswer:"1914-luvulla"
}, {
    question:"Milloin Amerikka löydettiin", 
    answers:["2000-luvulla", "1420-luvulla", "1492-luvulla", "1945-luvulla"],
    correctAnswer:"1492-luvulla"
}, {
    question:"Minkä valtion hallitsija Julius Caesar oli?", 
    answers:["Saksa", "Ranska", "Egypti", "Englanti", "Rooman imperiumi", "Rooman tasavalta"],
    correctAnswer:"Rooman tasavalta"
}, {
    question:"Milloin islamin usko perustettiin?", 
    answers:["600-luvulla", "900-luvulla", "1843-luvulla", "200-luvulla"],
    correctAnswer:"600-luvulla"
}, {
    question:"Mitä merkittävää tapahtui vuonna 10 000 ennen Kristuksen syntymää?", 
    answers:["Tulimaa hyökkäsi", "Ihmiset oppi puhumaan", "Ihmiset oppivat vilejelemään maata"],
    correctAnswer:"Ihmiset oppivat vilejelemään maata"
}, {
    question:"Milloin Suomi itsenäistyi?", 
    answers:["1940-luvulla", "1917-luvulla", "1980-luvulla", "Viime jouluna"],
    correctAnswer:"1917-luvulla"
}, 
];

/*Pelin olio perus tiedot: countdown, start funktio, etc.*/
let game = {
    correct: 0,
    incorrect: 0,
    answersNumber: 0,
    counter: 30,
    
    checkProgress: function(){
        if (answersNumber === questions.length) {
            this.result();
        };
    },

    countdown: function(){
        game.counter--;
        $(":radio").each(function(){
        });
        
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
            game.result();
        };
    },
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $("#subWrapper").prepend("<h2> Aikaa jäljellä: <spa id='counter'>30</span> Seconds</h2>");
        

        for (let i = 0; i < questions.length; i++) {
            $("#subWrapper").append("<h2 class='col-12 text-center pt-3'>" + questions[i].question + "</h2>");

            for (let j = 0; j < questions[i].answers.length; j++){
                $("#subWrapper").append("<h3 class='col-12'><input type='radio' class='checkmark' name='questions-" + i + "' id='" + questions[i].answers[j] +"' value='"+ questions[i].answers[j] + "'> <label for='" + questions[i].answers[j] +"' class='radiolabel'>" + questions[i].answers[j] + "</h3>");
            }
        };
        
    },
    done: function(){
        $.each($('input[name="questions-0"]:checked'),
            function(){
                if ($(this).val() == questions[0].correctAnswer) {
                    game.correct++;
                    
                } else {
                    game.incorrect++;
        
                }
            
        });
        $.each($('input[name="questions-1"]:checked'),
            function(){
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                    
                } else {
                    game.incorrect++;
                    
                }
        });
        $.each($('input[name="questions-2"]:checked'),
            function(){
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                    
                } else {
                    game.incorrect++;
                    
                }
        });
        $.each($('input[name="questions-3"]:checked'),
            function(){
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                    
                } else {
                    game.incorrect++;
                    
                }
        });
        $.each($('input[name="questions-4"]:checked'),
            function(){
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                    
                } else {
                    game.incorrect++;
        
                }
            
        });
        $.each($('input[name="questions-5"]:checked'),
            function(){
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                    
                } else {
                    game.incorrect++;
                    
                }
        });
        $.each($('input[name="questions-6"]:checked'),
            function(){
                if ($(this).val() == questions[6].correctAnswer) {
                    game.correct++;
                    
                } else {
                    game.incorrect++;
                    
                }
        });
    
    
    }, 
    
    /*Result koodit*/
    result: function(){
        clearInterval(timer);
        $("#kultakala").removeClass("float-left, fixed-bottom");
        $("#kultakala").remove();
        $("#subWrapper h2, h3").remove();
        $("header").toggleClass("collapse");
        $("#finish").toggleClass("collapse");
        $("#subWrapper h2, h3").remove();
        
        if (this.correct > (questions.length / 2)) {
            $("#subWrapper").append("<img src='img/kultakala-janne.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("main").removeClass("beach_green");
            $("main").addClass("bg-success");
            $("#subWrapper").removeClass("beach_dark_gold");
            $("#subWrapper").append("<h3>Peli loppui! <i class='far fa-clock fa-lg'></i> <br>Mutta kultakala sai tähtensä takaisin!<i class='far fa-star fa-lg'></i></h3>");
        } else if ((questions.length - (this.incorrect + this.correct)) > (questions.length / 2)) {
            $("#subWrapper").append("<img src='img/kultakala-janne-ilman-tahtea.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("main").removeClass("beach_green");
            $("main").addClass("bg-warning");
            $("#subWrapper").removeClass("beach_dark_gold");
            $("#subWrapper").append("<h3>Aika loppui! <i class='far fa-clock fa-lg'></i> <br>Et saanut tarpeeksi vastauksia! Tähti pääsi karkuun! <i class='far fa-frown fa-lg'></h3>");
        } else {
            $("#subWrapper").append("<img src='img/kultakala-janne-ilman-tahtea.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("main").removeClass("beach_green");
            $("main").addClass("beach_dark_red");
            $("#subWrapper").removeClass("beach_dark_gold");
            $("#subWrapper").append("<h3>Aika loppui! <i class='far fa-clock fa-lg'></i> <br>Et päässyt läpi! <i class='far fa-frown fa-lg'></h3>");
        }

        $("#subWrapper").append("<h3><h3>Oikeita vastauksia oli: " + this.correct + "</h3>");
        $("#subWrapper").append("<h3>Vääriä vastauksia oli: " + this.incorrect + "</h3>");
        $("#subWrapper").append("<h3>Vastaamattomaksi jäi:  " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        $("#subWrapper").append("<div class='col-12'><a class='text-white' href='index.html'><button id='etusivulle_janne' class='button'>Etusivulle</button></a></div>");
        $("#subWrapper").append("<div class='col-12'><a class='text-white' href='jannevisa1.html'><button id='alkuun_janne' class='button'>Takaisin Alkuun</button></a></div>");
    },

    resultFinish: function(){
        clearInterval(timer);
        $("#kultakala").removeClass("float-left, fixed-bottom");
        $("#kultakala").remove();
        $("#subWrapper h2, h3").remove();
        $("header").toggleClass("collapse");

        if (this.correct > (questions.length / 2)) {
            $("#subWrapper").append("<img src='img/kultakala-janne.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("main").removeClass("beach_green");
            $("main").addClass("bg-success");
            $("#subWrapper").removeClass("beach_dark_gold");
            $("#subWrapper").append("<h3>Peli loppui! <i class='fas fa-flag-checkered fa-lg'></i><br>Pääsit läpi! kultakala sai tähtensä takaisin! <i class='far fa-star fa-lg'></i> </h3>");
        } else if ((questions.length - (this.incorrect + this.correct)) > (questions.length / 2)) {
            $("#subWrapper").append("<img src='img/kultakala-janne-ilman-tahtea.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("main").removeClass("beach_green");
            $("main").addClass("bg-warning");
            $("#subWrapper").removeClass("beach_dark_gold");
            $("#subWrapper").append("<h3>Peli loppui! <i class='fas fa-flag-checkered fa-lg'></i><br>Et saanut tarpeeksi vastauksia! Tähti pääsi karkuun! <i class='far fa-frown fa-lg'></i></h3>");
        } else {
            $("#subWrapper").append("<img src='img/kultakala-janne-ilman-tahtea.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("main").removeClass("beach_green");
            $("main").addClass("beach_dark_red");
            $("#subWrapper").removeClass("beach_dark_gold");
            $("#subWrapper").append("<h3>Peli loppui! <i class='fas fa-flag-checkered fa-lg'></i><br>Liikaa vastauksia väärin! Tähtipääsi karkuun! <i class='far fa-frown fa-lg'></i></h3>");
        }
    
        $("#subWrapper").append("<h3>Oikeita vastauksia oli: " + this.correct + "</h3>");
        $("#subWrapper").append("<h3>Vääriä vastauksia oli: " + this.incorrect + "</h3>");
        $("#subWrapper").append("<h3>Vastaamattomaksi jäi: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        $("#subWrapper").append("<div class='col-12'><a class='text-white' href='index.html'><button id='etusivulle_janne' class='button'>Etusivulle</button></a></div>");
        $("#subWrapper").append("<div class='col-12'><a class='text-white' href='jannevisa1.html'><button id='alkuun_janne' class='button'>Takaisin Alkuun</button></a></div>");    
    }
};





$("#start1").click(function(){
    $("#subWrapper1 button, h2, h3").remove();
    $("#answerButtons").toggleClass("collapse");
    game1.start();
});


let questions1 = [{
    question:"Kuka valtasi Akemenidien  Imperiumin?", 
    answers:["Aleksanteri Suuri", "Erwin Rommel", "Julius Caesar", "Matti Meikäläinen"],
    correctAnswer:"Aleksanteri Suuri"
}, {
    question:"Kuka on Suomen presidentti?", 
    answers:["Sauli Niinistö", "Tarja Halonen", "Petteri Koponen", "Pekka Pouta"],
    correctAnswer:"Sauli Niinistö"
}, {
    question:"Milloin talvisota alkoi?", 
    answers:[ "Viime kesänä", "2110-luvulla", "1939-luvulla", "2001-luvulla"],
    correctAnswer: "1939-luvulla"
}, {
    question:"Kuka oli antiikin Kreikkalaisten suurin jumala?", 
    answers:["Zeus", "Athena", "Ares", "Poseidon"],
    correctAnswer:"Zeus"
}, {
    question:"Kuka oli Palestiinan hallitsija Jeesuksen syntyessä?", 
    answers:["Kaarle XVI Kustaa", "Kuningatar Viktoria", "Herodes Suuri", "Vladimir Putin"],
    correctAnswer:"Herodes Suuri"
}, {
    question:"Kuka saattoi Juutalaiset luvattuun maahan Egyptiläisten kynsistä?", 
    answers:["Alexander Stubb", "Risto Räppääjä", "Päivi Räsänen", "Mooses"],
    correctAnswer:"Mooses"
},];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let game1 = {
    correct: 0,
    incorrect: 0,
    current: 0,
    
    start: function(){
        if (questions1.length <= 0) {
            game1.result();
            return;
        };
        game1.current = getRndInteger(0, questions1.length - 1);
        $("#kysymys").html("<h3>" + questions1[game1.current].question + "</h3>");
        $("#valinta-a").prop("value", questions1[game1.current].answers[0]);
        $("#valinta-b").prop("value", questions1[game1.current].answers[1]);
        $("#valinta-c").prop("value", questions1[game1.current].answers[2]);
        $("#valinta-d").prop("value", questions1[game1.current].answers[3]);
        $("#valinta-a").html("<p>" + questions1[game1.current].answers[0] + "</p>");
        $("#valinta-b").html("<p>" + questions1[game1.current].answers[1] + "</p>");
        $("#valinta-c").html("<p>" + questions1[game1.current].answers[2] + "</p>");
        $("#valinta-d").html("<p>" + questions1[game1.current].answers[3]  + "</p>");
    },

    result: function(){
        $("#kultakala").remove();
        $("header").toggleClass("collapse");
        $("#answerButtons").toggleClass("collapse");
        $("#kysymys h3").remove();

        
        if (game1.correct > 4) {
            $("#kysymys").html("<img src='img/kultakala-janne.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("#kysymys").append("<h3> Kultakala sai kruunuansa takaisin! Hyvin tehty! <i class='far fa-star fa-lg'></i>");

            $("main").removeClass("beach_green");
            $("main").addClass("bg-success");

            $("#kysymys").append("<div class='col-12'><a class='text-white' href='index.html'><button id='etusivulle_janne' class='button'>Etusivulle</button></a></div>");
            $("#kysymys").append("<div class='col-12'><a class='text-white' href='jannevisa2.html'><button id='alkuun_janne' class='button'>Takaisin Alkuun</button></a></div>");

        } else if(game1.correct > 2){
            $("#kysymys").html("<img src='img/kultakala-janne-ilman-kruunua.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("#kysymys").append("<h3>Läheltä piti, mutta kultakala ei saanut kruunuansa takaisin...<i class='fas fa-star-half-alt fa-lg'></i>");

            $("main").removeClass("beach_green");
            $("main").addClass("bg-warning");

            $("#kysymys").append("<div class='col-12'><a class='text-white' href='index.html'><button id='etusivulle_janne' class='button'>Etusivulle</button></a></div>");
            $("#kysymys").append("<div class='col-12'><a class='text-white' href='jannevisa2.html'><button id='alkuun_janne' class='button'>Yritä uudelleen!</button></a></div>");
        } else {
            $("#kysymys").html("<img src='img/kultakala-janne-ilman-kruunua.png' alt='no-tahti' class='img-fluid col-2' id='kultakala'></img>");
            $("#kysymys").append("<h3>Eii! Kruunuvaras pääsi karkuun! <i class='fas fa-star-half-alt fa-lg'></i>");

            $("main").removeClass("beach_green");
            $("main").addClass("beach_dark_red");

            $("#kysymys").append("<div class='col-12'><a class='text-white' href='index.html'><button id='etusivulle_janne' class='button'>Etusivulle</button></a></div>");
            $("#kysymys").append("<div class='col-12'><a class='text-white' href='jannevisa2.html'><button id='alkuun_janne' class='button'>Yritä uudelleen!</button></a></div>");
        };
    },
};

$("#valinta-a, #valinta-b, #valinta-c, #valinta-d").click(function(){
    $("#valinta-a, #valinta-b, #valinta-c, #valinta-d").attr("disabled", true)
    setTimeout(function(){
        $("#valinta-a, #valinta-b, #valinta-c, #valinta-d").attr("disabled", false)
    }, 1300);

    if ($(this).val() == questions1[game1.current].correctAnswer) {
        $("main").removeClass("beach_green");
        $("main").addClass("bg-success");
        setTimeout(function(){
            questions1.splice(game1.current, 1)
            game1.correct++;
            $("main").removeClass("bg-success");
            $("main").addClass("beach_green");
            game1.start();
        }, 1000);
    } else {
        $("main").removeClass("beach_green");
        $("main").addClass("beach_dark_red");
        setTimeout(function(){
            questions1.splice(game1.current, 1)
            game1.incorrect++;
            $("main").removeClass("beach_dark_red");
            $("main").addClass("beach_green");
            game1.start();
        }, 1000);
    };
    
});




});
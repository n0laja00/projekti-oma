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
        $("#subWrapper").append("<div class='col-12'><a class='text-white' href='pohja.html'><button id='alkuun_janne' class='button'>Takaisin Alkuun</button></a></div>");
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
        $("#subWrapper").append("<div class='col-12'><a class='text-white' href='pohja.html'><button id='alkuun_janne' class='button'>Takaisin Alkuun</button></a></div>");    
    }
};





$("#start1").click(function(){
    $("#subWrapper1 button, h2, h3").remove();
    $("#subWrapper1").addClass("beach_dark_gold");
    $("#kultakala").addClass("float-left, fixed-bottom");
    $("#finish1").toggleClass("collapse");
});

});
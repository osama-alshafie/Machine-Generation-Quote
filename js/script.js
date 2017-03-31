$(document).ready(function(){
    var quotes = ["A room without books is like a body without a soul.",
                  "You only live once, but if you do it right, once is enough.",
                  "Be the change that you wish to see in the world.",
                  "In three words I can sum up everything I've learned about life: it goes on.",
                  "If you tell the truth, you don't have to remember anything.",
                  "A friend is someone who knows all about you and still loves you.",
                  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
                  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                  "No one can make you feel inferior without your consent.",
                  "Don't cry because it's over, smile because it happened.",
                  "It is better to be hated for what you are than to be loved for what you are not.",
                  "Life is what happens to us while we are making other plans."
                 ];
    var authers = ["Marcus Tullius Cicero","Mae West","Mahatma Gandhi","Robert Frost","Mark Twain","Elbert Hubbard",
                   "Mahatma Gandhi","Ralph Waldo Emerson","Eleanor Roosevelt","Dr. Seuss","André Gide, Autumn Leaves",
                   "Allen Saunders"];
    
    // return length of quotes
    function getLengthOfQuotes() {
        return quotes.length;
    }
    // generate & return random index from 0 to length of quotes - 1
    function generatRandomIndwx() {
        return Math.floor( Math.random() * getLengthOfQuotes() );
    }
    // generate random quote when press the button
    $(".container .containt .generator").on("click", function() {
        
        var randomIndex = generatRandomIndwx();
        var quote = quotes[randomIndex];
        var auther = authers[randomIndex];
        
        $(".container .containt .quote p").html(quote);
        $(".container .containt .quote span").html(auther);
    });
    // tweet the quote when click the button
    $(".container .containt .tweet").on("click" ,function() {
        
        var q = $(".container .containt .quote p").html();
        var a = $(".container .containt .quote span").html();
        var quote = q + a;
        var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(quote);
        window.open(twtLink,'_blank');
    });
});
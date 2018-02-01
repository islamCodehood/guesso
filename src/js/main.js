$( document ).ready(function() {
    /*var error defines the number of errors to show different hanged man pic and end game in 
 *case max errors reached.*/
let error = 0;
//score variable.
let score = 0;
//variable to choose the next word in the array of functions of words.
let nextWord = 0;
//gets the date to use it with the next variable
/*let date = new Date();
*let hour = date.getHours();
*let second = date.getSeconds();*/

//onOffKey variable to deterine if game is on or off.
let onOffKey  = 0;
//check if the word is solved or not to avoid multi solve or fail functions calling after word is solved or failed.
let doneWord = 0;
//hangman image selector variable
const hangImage = $('.hangman');
//keyCode variables
const a = 65;
const b = 66;
const c = 67;
const d = 68;
const e = 69;
const f = 70;
const g = 71;
const h = 72;
const i = 73;
const j = 74;
const k = 75;
const l = 76;
const m = 77;
const n = 78;
const o = 79;
const p = 80;
const q = 81;
const r = 82;
const s = 83;
const t = 84;
const u = 85;
const v = 86;
const w = 87;
const x = 88;
const y = 89;
const z = 90;
//for start button.
const enterKey = 13;
//for next button.
const shiftKey = 16;
$('.startPlaying').on('click', function(evt){
    $('.tutorial').remove();
    $('.rightSide').toggleClass('sideOpacity');
    $('.leftSide').toggleClass('sideOpacity');
})
//function for resetting.
function reset() {
    //reseting everything.
    if (doneWord>0){
         hangImage.attr('src', "src/img/closedMouth.png");
    }
    error = 0;
    doneWord = 0;
    $('body').off('keydown');
    $('.btn').off('mousedown');
    $('.hint').children().remove();
    $('.main').children().remove();
   

}

//function run when solved.
function solved() {
    if (doneWord === 0){
        //getting word length(length of children div elements.)
    let wordLength = $('.main').children().length;
    //counter for cells with text to increase it when a cell have text while looping then compare it with wordLength if equal then the word guessing solved.
    let solvedCounter = 0;
    for (let child = 0; child < wordLength; child++) {
        if ($('.main').children().eq(child).text()) {
            solvedCounter += 1;
            if (solvedCounter === wordLength) {
                $('body').off('keydown');
                $('.btn').off('mousedown');
                score += 1;
                $('.score').html(score);
                $('.solvedSound').trigger('play');
                nextWord += 1;
                doneWord += 1;
                keyClick();
                keyPress();
            }
        }
    }
    }
    
}

function failed() {
    if (doneWord === 0){
        error += 1;
    if (error < 6){
        if (error === 1) {
            hangImage.attr('src', "src/img/1.png");
        } else if (error === 2) {
            hangImage.attr('src', "src/img/2.png");
        } else if (error === 3) {
            hangImage.attr('src', "src/img/3.png");
        } else if (error === 4) {
            hangImage.attr('src', "src/img/4.png");
        } else { //runs in case of 5 chances lost.
            hangImage.attr('src', "src/img/5.png");
            $('.cell').css('color', "red");
            $('.letter-a').text("a");
            $('.letter-b').text("b");
            $('.letter-c').text("c");
            $('.letter-d').text("d");
            $('.letter-e').text("e");
            $('.letter-f').text("f");
            $('.letter-g').text("g");
            $('.letter-h').text("h");
            $('.letter-i').text("i");
            $('.letter-j').text("j");
            $('.letter-k').text("k");
            $('.letter-l').text("l");
            $('.letter-m').text("m");
            $('.letter-n').text("n");
            $('.letter-o').text("o");
            $('.letter-p').text("p");
            $('.letter-q').text("q");
            $('.letter-r').text("r");
            $('.letter-s').text("s");
            $('.letter-t').text("t");
            $('.letter-u').text("u");
            $('.letter-v').text("v");
            $('.letter-w').text("w");
            $('.letter-x').text("x");
            $('.letter-y').text("y");
            $('.letter-z').text("z");
            $('body').off('keydown');
            $('.btn').off('mousedown');
            $('.score').html(score);
            $('.failedSound').trigger('play');
            nextWord += 1;
            doneWord += 1;
            keyClick();
            keyPress();
        }
    }
    }
    
    }
    
//Every word have a function. This one for word announcement.
function announcement(evt) {
    reset();
    //showing hint.
    $('.hint').append('<div>Public notification or declaration.</div>');
    //building the word cells.
    $('.main').append(
        '<div class="letter-a cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-u cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-m cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-t cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word gypsy.
function gypsy(evt) {
    reset();
    //showing hint.
    $('.hint').append('<div>Nomadic or free-spirited person.</div>');
    //building the word cells.
    $('.main').append(
        '<div class="letter-g cell"></div>',
        '<div class="letter-y cell"></div>',
        '<div class="letter-p cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-y cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word mercedes.
function mercedes(evt) {
    reset();
    //showing hint.
    $('.hint').append('<div>Car brand.</div>');
    //building the word cells.
    $('.main').append(
        '<div class="letter-m cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-d cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-s cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word pepsi
function pepsi(evt) {
    reset();
    //showing hint.
    $('.hint').append('<div>Famous drink.</div>');
    //building the word cells.
    $('.main').append(
        '<div class="letter-p cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-p cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-i cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word  pixel
function pixel(evt) {
    reset();
    //showing hint.
    $('.hint').append('<div>Measuring unit.</div>');
    //building the word cells.
    $('.main').append(
        '<div class="letter-p cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-x cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-l cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word celine dion
function celineDion(evt) {
    reset();
    //showing hint.
    $('.hint').append('<div>Canadian singer.</div>');
    //building the word cells.
    $('.main').append(
        '<div class="letter-c cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="space">.</div>',
        '<div class="letter-d cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word racism.
function racism(evt) {
    reset();
    //showing hint.
    $('.hint').append('<div>Racial prejudice or discrimination.</div>');
    //building the word cells.
    $('.main').append(
        '<div class="letter-r cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-m cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word feminism.
function feminism(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Advocacy of women's rights and  equality to men.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-f cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-m cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-m cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word empathy.
function empathy(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Ability to understand feelings of others.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-e cell"></div>',
        '<div class="letter-m cell"></div>',
        '<div class="letter-p cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="letter-y cell"></div>'
    );
    keyPress();
    keyClick();
}
//for word territory.
function territory(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Area of land under the jurisdiction of a ruler or state.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-t cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-y cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word myth.
function myth(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Legend.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-m cell"></div>',
        '<div class="letter-y cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-h cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word hydrogen.
function hydrogen(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Colorless, odorless, highly flammable gas.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-h cell"></div>',
        '<div class="letter-y cell"></div>',
        '<div class="letter-d cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-g cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word macaroni.
function macaroni(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Variety of pasta.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-m cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-i cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word jazz.
function jazz(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Type of music.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-j cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-z cell"></div>',
        '<div class="letter-z cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word drawback.
function drawback(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Disadvantage or obstacle.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-d cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-w cell"></div>',
        '<div class="letter-b cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-k cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word newsletter.
function newsletter(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Bulletin issued periodically to the members of a society.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-n cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-w cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-r cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word bargain.
function bargain(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Deal between two or more parties.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-b cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-g cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word migration.
function migration(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Animal movement from one region to another.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-m cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-g cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word wholesale.
function wholesale(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Selling goods in large quantities.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-w cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-e cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word mascot.
function mascot(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Thing supposed to bring good luck.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-m cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-t cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word Hugh Jackman.
function hughJackman(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Australian actor.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-h cell"></div>',
        '<div class="letter-u cell"></div>',
        '<div class="letter-g cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="space">.</div>',
        '<div class="letter-j cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-k cell"></div>',
        '<div class="letter-m cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word Hamlet.
function hamlet(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Tragedy written by William Shakespeare.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-h cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-m cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-t cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word dolphin.
function dolphin(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Highly intelligent marine mammal.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-d cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-p cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word shish kebab.
function shishkebab(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Skewered and grilled cubes of meat.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-s cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="space">.</div>',
        '<div class="letter-k cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-b cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-b cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word dragon.
function dragon(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Legendary creature that spew fire.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-d cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-g cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word fox.
function fox(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Animal described as sly.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-f cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-x cell"></div>'
    );
    keyPress();
    keyClick();
}
//for word taco.
function taco(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Traditional Mexican dish.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-t cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-o cell"></div>'
    );
    keyPress();
    keyClick();
}
//for word avocado.
function avocado(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Healthy pear-shaped fruit.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-a cell"></div>',
        '<div class="letter-v cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-d cell"></div>',
        '<div class="letter-o cell"></div>'
    );
    keyPress();
    keyClick();
}

//for word Jane Austen.
function janeAusten(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Writer of Pride and Prejudice.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-j cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="space">.</div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-u cell"></div>',
        '<div class="letter-s cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-n cell"></div>',
    );
    keyPress();
    keyClick();
}

//word of Woody Allen.
function woodyAllen(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Director of 'Match Point' movie.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-w cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-d cell"></div>',
        '<div class="letter-y cell"></div>',
        '<div class="space">.</div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-n cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of charcoal.
function charcoal(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Used for drawing.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-c cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-l cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of bollywood.
function bollywood(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Name for the Indian popular film industry.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-b cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-l cell"></div>',
        '<div class="letter-y cell"></div>',
        '<div class="letter-w cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-d cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of cannes.
function cannes(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Famous film festival.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-c cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-s cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of Taj Majal.
function tajMajal(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>One of the seventh world wonders.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-t cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-j cell"></div>',
        '<div class="space">.</div>',
        '<div class="letter-m cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-j cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-l cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of arctic.
function arctic(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>One of the world oceans.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-a cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-c cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-c cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of Jupiter.
function jupiter(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>The largest solar system planet.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-j cell"></div>',
        '<div class="letter-u cell"></div>',
        '<div class="letter-p cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-t cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-r cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of Mars.
function mars(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>The red planet.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-m cell"></div>',
        '<div class="letter-a cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-s cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of Friends.
function friends(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Famous television sitcom.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-f cell"></div>',
        '<div class="letter-r cell"></div>',
        '<div class="letter-i cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-d cell"></div>',
        '<div class="letter-s cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of Tuna.
function tuna(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Canned type of fish.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-t cell"></div>',
        '<div class="letter-u cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-a cell"></div>'
    );
    keyPress();
    keyClick();
}

//word of John Kennedy.
function johnKennedy(evt) {
    reset();
    //showing hint.
    $('.hint').append("<div>Canned type of fish.</div>");
    //building the word cells.
    $('.main').append(
        '<div class="letter-j cell"></div>',
        '<div class="letter-o cell"></div>',
        '<div class="letter-h cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="space">.</div>',
        '<div class="letter-k cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-n cell"></div>',
        '<div class="letter-e cell"></div>',
        '<div class="letter-d cell"></div>',
        '<div class="letter-y cell"></div>'
    );
    keyPress();
    keyClick();
}
//user keyboard action (pressing style effect and sound) on game keyboard.
function keyPress() {
    $('body').on('keydown', function(evt) {
        switch (evt.keyCode) {
            case a:
                $('.a').removeClass('btnBorder');
                $('.a').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-a')){
                        $('.letter-a').html("a");
                        solved();
                    }else{
                        failed();
                    }
                }
                break;
            case b:
                $('.b').removeClass('btnBorder');
                $('.b').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-b')){
                        $('.letter-b').html("b");
                        solved();
                    }else{
                        failed();
                    }
                }  
                break;
            case c:
                $('.c').removeClass('btnBorder');
                $('.c').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-c')){
                        $('.letter-c').html("c");
                        solved();
                    }else{
                        failed();
                    }
                }
                break;
            case d:
                $('.d').removeClass('btnBorder');
                $('.d').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-d')){
                        $('.letter-d').html("d");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case e:
                $('.e').removeClass('btnBorder');
                $('.e').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-e')){
                        $('.letter-e').html("e");
                        solved();
                    }else{
                        failed();
                    }
                }
              
                break;
            case f:
                $('.f').removeClass('btnBorder');
                $('.f').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-f')){
                        $('.letter-f').html("f");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case g:
                $('.g').removeClass('btnBorder');
                $('.g').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-g')){
                        $('.letter-g').html("g");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case h:
                $('.h').removeClass('btnBorder');
                $('.h').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-h')){
                        $('.letter-h').html("h");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case i:
                $('.i').removeClass('btnBorder');
                $('.i').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-i')){
                        $('.letter-i').html("i");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case j:
                $('.j').removeClass('btnBorder');
                $('.j').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-j')){
                        $('.letter-j').html("j");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case k:
                $('.k').removeClass('btnBorder');
                $('.k').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-k')){
                        $('.letter-k').html("k");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case l:
                $('.l').removeClass('btnBorder');
                $('.l').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-l')){
                        $('.letter-l').html("l");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case m:
                $('.m').removeClass('btnBorder');
                $('.m').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-m')){
                        $('.letter-m').html("m");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case n:
                $('.n').removeClass('btnBorder');
                $('.n').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-n')){
                        $('.letter-n').html("n");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case o:
                $('.o').removeClass('btnBorder');
                $('.o').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-o')){
                        $('.letter-o').html("o");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case p:
                $('.p').removeClass('btnBorder');
                $('.p').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-p')){
                        $('.letter-p').html("p");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case q:
                $('.q').removeClass('btnBorder');
                $('.q').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-q')){
                        $('.letter-q').html("q");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case r:
                $('.r').removeClass('btnBorder');
                $('.r').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-r')){
                        $('.letter-r').html("r");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case s:
                $('.s').removeClass('btnBorder');
                $('.s').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-s')){
                        $('.letter-s').html("s");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case t:
                $('.t').removeClass('btnBorder');
                $('.t').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-t')){
                        $('.letter-t').html("t");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case u:
                $('.u').removeClass('btnBorder');
                $('.u').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-u')){
                        $('.letter-u').html("u");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case v:
                $('.v').removeClass('btnBorder');
                $('.v').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-v')){
                        $('.letter-v').html("v");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case w:
                $('.w').removeClass('btnBorder');
                $('.w').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-w')){
                        $('.letter-w').html("w");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case x:
                $('.x').removeClass('btnBorder');
                $('.x').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-x')){
                        $('.letter-x').html("x");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case y:
                $('.y').removeClass('btnBorder');
                $('.y').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-y')){
                        $('.letter-y').html("y");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case z:
                $('.z').removeClass('btnBorder');
                $('.z').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 1){
                    if ($('.main').children().hasClass('letter-z')){
                        $('.letter-z').html("z");
                        solved();
                    }else{
                        failed();
                    }
                }
                
                break;
            case shiftKey:
                $('.next').removeClass('btnBorder');
                $('.next').addClass('btnClicked');
                $('.keySound').trigger('play'); 
                let wordLength = $('.main').children().length;
                let solvedCounter = 0;
    for (let child = 0; child < wordLength; child++) {
        if ($('.main').children().eq(child).text()) {
            solvedCounter += 1;
            if (solvedCounter === wordLength) {
                if (nextWord > 0) {
                    wordArray[0 + nextWord]();  
                }
            }
        }
    }
                
                break;
            case enterKey:
                $('.start').removeClass('btnBorder');
                $('.start').addClass('btnClicked');
                $('.keySound').trigger('play');
                if (onOffKey === 0) {
                    reset();
                    wordArray[0]();
                    $('.start').css('color', "red");
                    $('.score').html(score);
                    onOffKey += 1;
                    randomize(wordArray);
                }else{
                    $('.start').css('color', "#f0810f");
                    nextWord = 0;           
                    reset();
                    score = 0;
                    $('.score').html(score);
                    onOffKey = 0;
                    keyPress();
                    keyClick();
                }
        }
    })
    $('body').on('keyup', function(evt) {
        switch (evt.keyCode) {
            case a:
                $('.a').removeClass('btnClicked');
                $('.a').addClass('btnBorder');
                break;
            case b:
                $('.b').removeClass('btnClicked');
                $('.b').addClass('btnBorder');
                break;
            case c:
                $('.c').removeClass('btnClicked');
                $('.c').addClass('btnBorder');
                break;
            case d:
                $('.d').removeClass('btnClicked');
                $('.d').addClass('btnBorder');
                break;
            case e:
                $('.e').removeClass('btnClicked');
                $('.e').addClass('btnBorder');
                break;
            case f:
                $('.f').removeClass('btnClicked');
                $('.f').addClass('btnBorder');
                break;
            case g:
                $('.g').removeClass('btnClicked');
                $('.g').addClass('btnBorder');
                break;
            case h:
                $('.h').removeClass('btnClicked');
                $('.h').addClass('btnBorder');
                break;
            case i:
                $('.i').removeClass('btnClicked');
                $('.i').addClass('btnBorder');
                break;
            case j:
                $('.j').removeClass('btnClicked');
                $('.j').addClass('btnBorder');
                break;
            case k:
                $('.k').removeClass('btnClicked');
                $('.k').addClass('btnBorder');
                break;
            case l:
                $('.l').removeClass('btnClicked');
                $('.l').addClass('btnBorder');
                break;
            case m:
                $('.m').removeClass('btnClicked');
                $('.m').addClass('btnBorder');
                break;
            case n:
                $('.n').removeClass('btnClicked');
                $('.n').addClass('btnBorder');
                break;
            case o:
                $('.o').removeClass('btnClicked');
                $('.o').addClass('btnBorder');
                break;
            case p:
                $('.p').removeClass('btnClicked');
                $('.p').addClass('btnBorder');
                break;
            case q:
                $('.q').removeClass('btnClicked');
                $('.q').addClass('btnBorder');
                break;
            case r:
                $('.r').removeClass('btnClicked');
                $('.r').addClass('btnBorder');
                break;
            case s:
                $('.s').removeClass('btnClicked');
                $('.s').addClass('btnBorder');
                break;
            case t:
                $('.t').removeClass('btnClicked');
                $('.t').addClass('btnBorder');
                break;
            case u:
                $('.u').removeClass('btnClicked');
                $('.u').addClass('btnBorder');
                break;
            case v:
                $('.v').removeClass('btnClicked');
                $('.v').addClass('btnBorder');
                break;
            case w:
                $('.w').removeClass('btnClicked');
                $('.w').addClass('btnBorder');
                break;
            case x:
                $('.x').removeClass('btnClicked');
                $('.x').addClass('btnBorder');
                break;
            case y:
                $('.y').removeClass('btnClicked');
                $('.y').addClass('btnBorder');
                break;
            case z:
                $('.z').removeClass('btnClicked');
                $('.z').addClass('btnBorder');
                break;
            case shiftKey:
                $('.next').removeClass('btnClicked');
                $('.next').addClass('btnBorder');
                break;
            case enterKey:
                $('.start').removeClass('btnClicked');
                $('.start').addClass('btnBorder');
        }
    })
}

function keyClick() {
    //mouse action on keyboard.    
    $('.btn').on('mousedown', function(evt){
       
        if ($(this).hasClass('a')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-a')){
                    $('.letter-a').html("a");
       
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('b')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-b')){
                    $('.letter-b').html("b");
        
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('c')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-c')){
                    $('.letter-c').html("c");
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('d')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-d')){
                $('.letter-d').html("d");
  
                solved();
            }else{
                failed();
            }}
            
        }else if ($(this).hasClass('e')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-e')){
                    $('.letter-e').html("e");
     
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('f')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-f')){
                    $('.letter-f').html("f");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('g')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-g')){
                    $('.letter-g').html("g");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('h')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-h')){
                    $('.letter-h').html("h");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('i')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-i')){
                    $('.letter-i').html("i");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('j')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-j')){
                    $('.letter-j').html("j");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('k')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-k')){
                    $('.letter-k').html("k");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('l')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-l')){
                    $('.letter-l').html("l");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('m')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-m')){
                    $('.letter-m').html("m");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('n')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-n')){
                    $('.letter-n').html("n");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('o')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-o')){
                    $('.letter-o').html("o");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('p')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-p')){
                    $('.letter-p').html("p");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('q')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-q')){
                    $('.letter-q').html("q");
    
                    solved();
                }else{
                    failed();
                }
            }
           
        }else if ($(this).hasClass('r')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-r')){
                    $('.letter-r').html("r");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('s')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-s')){
                    $('.letter-s').html("s");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('t')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-t')){
                    $('.letter-t').html("t");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('u')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-u')){
                    $('.letter-u').html("u");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('v')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-v')){
                    $('.letter-v').html("v");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('w')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-w')){
                    $('.letter-w').html("w");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('x')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-x')){
                    $('.letter-x').html("x");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('y')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-y')){
                    $('.letter-y').html("y");
    
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('z')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 1){
                if ($('.main').children().hasClass('letter-z')){
                    $('.letter-z').html("z");
      
                    solved();
                }else{
                    failed();
                }
            }
            
        }else if ($(this).hasClass('next')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            let wordLength = $('.main').children().length;
                let solvedCounter = 0;
    for (let child = 0; child < wordLength; child++) {
        if ($('.main').children().eq(child).text()) {
            solvedCounter += 1;
            if (solvedCounter === wordLength) {
                if (nextWord > 0) {
                    wordArray[0 + nextWord]();  
                }
            }
        }
    }
            
        }else if ($(this).hasClass('start')){
            $(this).removeClass('btnBorder');
            $(this).addClass('btnClicked');
            $('.keySound').trigger('play');
            $('.btn').on('mouseup', function(evt) {
                $(this).removeClass('btnClicked');
                $(this).addClass('btnBorder');
            })
            if (onOffKey === 0) {
                reset();
                randomize(wordArray);   
                wordArray[0]();
                $(this).css('color', "red");
                $('.score').html(score);
                onOffKey += 1;             
            }else{
                $(this).css('color', "#f0810f");
                nextWord = 0;           
                reset();
                score = 0;
                $('.score').html(score);
                onOffKey = 0;
                keyPress();
                keyClick();
            }
        }
    })
}
    
//Fisher–Yates Shuffle to randomize the array.
function randomize(array) {
    var arrLength = array.length,
    temporaryIndex, randomIndex;
    while (arrLength) {
        randomIndex = Math.floor(Math.random() * arrLength--);
        temporaryIndex = array[arrLength];
        array[arrLength] = array[randomIndex];
        array[randomIndex] = temporaryIndex;
    }
    return array;
}

//Array of words.
var wordArray = [
    announcement,
    gypsy,
    mercedes,
    pepsi,
    pixel,
    celineDion,
    racism,
    feminism,
    empathy,
    territory,
    myth,
    hydrogen,
    macaroni,
    jazz,
    drawback,
    newsletter,
    bargain,
    migration,
    wholesale,
    mascot,
    hughJackman,
    hamlet,
    dolphin,
    shishkebab,
    dragon,
    fox,
    taco,
    avocado,
    janeAusten,
    woodyAllen,
    charcoal,
    bollywood,
    cannes,
    tajMajal,
    arctic,
    jupiter,
    mars,
    friends,
    tuna
];

keyClick();
keyPress();

})






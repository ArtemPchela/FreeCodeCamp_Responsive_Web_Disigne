"use strict";

const moreQuote = [
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "― Marilyn Monroe"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "― Oscar Wilde"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein"
    },
    {
        quote: "So many books, so little time.",
        author: "― Frank Zappa"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "― Mark Twain"
    },
];

window.onload = init;

function init() {
    generateQuote();

}

function generateQuote() {
    const quoteArr = moreQuote.length;
    const randomQuote = Math.floor(Math.random() * quoteArr);
    const innerQuote = moreQuote[randomQuote];

    document.getElementById("text").innerText = innerQuote.quote;
    document.getElementById("author").innerText = innerQuote.author;
}

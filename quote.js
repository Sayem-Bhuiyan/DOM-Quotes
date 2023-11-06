// quotes object
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        person: "Edmund Burke"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        person: "Buddha"
    }
];

document
    .getElementById('quote')
    .addEventListener('click', function () {
        let p = document.getElementById('quote-p');
        let name = document.getElementById('name');
        const newQuote = Math.floor(Math.random()*quotes.length);
        
        p.innerText = quotes[newQuote].quote;
        name.innerText = quotes[newQuote].person;

    })


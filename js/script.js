/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    source: 'Albert Einstein',
    tags: 'humor,universe'
  },
  {
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    source: 'Winston Churchill',
    tags: 'success,failure'
  },
  {
    quote: 'Believe you can and you\'re halfway there.',
    source: 'Theodore Roosevelt',
    year: 1985
  },
  {
    quote: 'When you have a dream, you\'ve got to grab it and never let go.',
    source: 'Carol Burnett',
    tags: 'inspirational,dream'
  },
  {
    quote: 'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
    source: 'Jimmy Dean',
    citation: 'NY Times'
  },
  {
    quote: 'Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.',
    source: 'Blaise Pascal',
    year: 1623
  },
  {
    quote: 'The summit of happiness is reached when a person is ready to be what he is.',
    source: 'Desiderius Erasmus'
  },
  {
    quote: 'The greatest obstacle to discovery is not ignorance - it is the illusion of knowledge.',
    source: 'Daniel J. Boorstin'
  },
  {
    quote: 'We are all in the gutter, but some of us are looking at the stars.',
    source: 'Oscar Wilde',
    citation: 'Lady Windermere\'s Fan'
  },
  {
    quote: 'You\'ve gotta dance like there\'s nobody watching,<br>Love like you\'ll never be hurt,<br>Sing like there\'s nobody listening,<br>And live like it\'s heaven on earth.',
    source: 'William W. Purkey'
  },
  {
    quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    source: 'Mahatma Gandhi',
    tags: 'learning,die'
  }

]

// console.log(quotes);  //for testing

/***
 * `getRandomQuote` function
***/

function randomQuote() {
       return quotes[Math.floor(Math.random() * quotes.length)];
   }

// console.log(randomQuote()); //for testing


/***
 * `printQuote` function
***/

function printQuote() {
  let ranq = randomQuote();
  let html = '';
  html += '<p class="quote">' + ranq.quote + '</p>';
  html += '<p class="source">' + ranq.source;
    if (ranq.hasOwnProperty('citation')) {
      html += '<span class="citation">' + ranq.citation + '</span>';
    } else if (ranq.hasOwnProperty('year')) {
      html += '<span class="year">' + ranq.year + '</span>';
    } else if (ranq.hasOwnProperty('tags')) {
      html += '<span class="tags">tags: ' + ranq.tags + '</span>';
    }
  html += '</p>'
  // console.log(html); //for testing
  document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
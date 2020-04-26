const works = [
  {
    title: "Hangman",
    image: "assets/images/works/hangman.png",
    description: "Play Classic Hangman with a golf theme.",
    link: "https://torqie.github.io/word-guess-game/",
    github: "https://github.com/torqie/word-guess-game"
  },

  {
    title: "Mario Battle",
    image: "assets/images/works/mario-battle.png",
    description: "Pick your character and battle your way thru all the other characters to victory",
    link: "http://torqie.github.io/unit-4-game",
    github: "https://github.com/torqie/unit-4-game"
  },

  {
    title: "The Office Trivia",
    image: "assets/images/works/the-office-trivia.png",
    description: "Think you know the show The Office? Think again, try out this trivia for a challenge",
    link: "http://torqie.github.io/TriviaGame",
    github: "https://github.com/torqie/TriviaGame"
  },

  {
    title: "Giftastic",
    image: "assets/images/works/giftastic.png",
    description: "Search thru Gifs to brighten up your day",
    link: "https://torqie.github.io/GifTastic/",
    github: "https://github.com/torqie/GifTastic"
  },

  {
    title: "Multiplayer Rock Paper Scissors",
    image: "assets/images/works/multiplayer-rps.png",
    description: "Grab a friend and settle and argument in this multiplayer Rock Paper scissors game.",
    link: "http://torqie.github.io/RPS-Multiplayer",
    github: "https://github.com/torqie/RPS-Multiplayer"
  },

  {
    title: "Pat Knows Best",
    image: "assets/images/works/pat-knows-best.png",
    description: "Team of 4 created a website that allows Pat your video and board game seretary to find and list 3 recommendations for you to view based on your search.",
    link: "https://asuicidalcow.github.io/Pat-Knows-Best/",
    github: "https://github.com/ASuicidalCow/Pat-Knows-Best"
  },

];


for(let i = 0; i < works.length; i++) {
  const workContent = $("#inner-works");
  const cardOuter = $('<div class="col mb-4 d-flex">');
  const card = $('<div class="card shadow-sm">');
  const cardImage = $('<img src="" alt="" class="card-img-top" />');
  const cardBody = $('<div class="card-body flex-fill">');
  const cardTitle = $('<h5 class="card-title">');
  const description = $('<p class="card-text">');
  const cardFooter = $('<div class="card-footer">')
  const githubLink = $('<a href="#" class="card-link float-right">');
  const link = $('<a href="#" class="card-link">');

  cardImage.attr("src", works[i].image);
  cardTitle.text(works[i].title);
  description.text(works[i].description);
  githubLink.attr("href", works[i].github).text("Github Link");
  link.attr("href", works[i].link).text("Demo Link");

  githubLink.prependTo(cardFooter);
  link.prependTo(cardFooter)
  description.prependTo(cardBody);
  cardTitle.prependTo(cardBody);
  cardFooter.prependTo(card);
  cardBody.prependTo(card);
  cardImage.prependTo(card);
  card.prependTo(cardOuter);
  cardOuter.prependTo(workContent);

  $(cardOuter).fadeIn()
}

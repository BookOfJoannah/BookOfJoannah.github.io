// Basically, this simple Angular controller pulls at random from an array of
// "Shortyisms" every time the moar_shorty function is called via button click,
// and sets $scope.shortyism to the string that is pulled. It also removes that
// particular shortyism from the array of shortyisms and stores it in a second
// array. If the controller detects that the original shortyism is empty, it
// refills it from the array of previously used shortyisms. This minimizes the
// repetition of "shortyisms" while still allowing the button to be pushed
// indefinitely.

var random_quip_list = [

    "100% free range!",
    "Good morning mortals!",
    "Rock and stone!",
    "Shamelessly ripping off Minecraft!",
    "Nerdy sites must die!",
    "Þank you to you are your mom!",
    "Mucho es slay",
    "You can go outside and scream in þe generic masculine all you want!",
    "Monkeyfluencers are þe future",
    "Calculators are great for cheating!",
    "Trauma Mia",
    "I have a hyperfixation now and it's everyone else's problem!",
    "Go jump off a cliff or someþing,",
    "Have you heard about our lord and savior, me?",
    "I put on a dress and all of a sudden you start rizzing me up?",
    "Incredibly violent!",
    "Turns your kids Lebanese!",
    "Stand aside, I know Integral Calculus™!",
    "100% Human-made idiocy",
    "Check out pluralistic.net by Cory Doctorow!",
    "Check out xkcd.com by Randall Munroe!",
    "Check out ncase.me by Nicky Case!",
    "Slowly learning HTML, CSS and Javascript!",
    "Being normal is a capital offense onto yourself!",
    "Þe playground of þe semi-controlled id!",
    "May contain Crystal Spiders!",
    "Synesþesia!",
    "Sorry for driving at escape velocity, space oddity was playing!",
    "Uranium? More like Uraniyummy!",
    "Inside jokes known only to me!",
    "Messing wiþ demonic powers to make title texts!",
    "Shamelessly stolen from: https://shitshortysays.netlify.app/",
    "Confessions of a future former gifted child"

];  

var app = angular.module('randomquipgenerator', []);

app.controller('control_randomness', function($scope) {
    // Default value before a shortyism is called.
    select = Math.floor(Math.random()*random_quip_list.length);
    $scope.randomquip = random_quip_list[select];
    //$scope.moar_shorty = function() {
    //   //  if the array of shortyisms is emtpy, refill it.
    //   if (shortyisms_A.length === 0) {
    //     shortyisms_A = shortyisms_B;
    //     shortyisms_B = [];
    //   }
    //   select = Math.floor(Math.random()*shortyisms_A.length);
    //   $scope.shortyism = shortyisms_A[select];
    //   // store the now-used shortyism in another array, and remove it so it
    //   // doesn't repeat
    //   shortyisms_B.push(shortyisms_A[select]);
    //   shortyisms_A.splice(select, 1);
    //};
});
/* Back-end --------------*/
var palindrome;
var word = function(input){
  for(i = 0; i <= palindrome.length; i++){
    if(input.charAt(i)) !== input.charAt()
}
};



// var palindrome = function(input){
//   if (input === input.split('').reverse().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// };


/* Front-end --------------*/
$(document).ready(function(){
  $("form#palindrome").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val();
    var result = palindrome(word);
    $("#result").text(result);
  });
});

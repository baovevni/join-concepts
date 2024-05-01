/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below

const joinList = function(concepts) {
  if (concepts.length === 0) {
    return '';
  } if (concepts.length === 1) {
    return concepts[0];
  }
  return iterrateThroughList(concepts);
};

const iterrateThroughList = function(concepts) {
  let newList = concepts[0];
  for (let i = 1; i < concepts.length - 1; i++) {
    newList += ', ' + concepts[i];
  }
  newList += ' and ' + concepts[concepts.length - 1];
  return newList;
};
  
  


// Test Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

const conceptList1 = ["gists"];
const concepts1 = joinList(conceptList1);
console.log(`Today I learned about ${concepts1}.`);
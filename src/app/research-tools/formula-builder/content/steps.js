/**
 * @param {string} parent - String name of the option that results in this question being displayed
 * @param {number} number - Number indicating the position of this step in the sequence of steps
 * @param {string | html} question - String or HTML of of the question to display 
 * @param {string[]} options - String array of answer options 
 */
export const steps = [
    {
      parent: null,
      number: 1, 
      question: "What kind of data are you analyzing?",
      options: ["Categorical", "Numerical"]
    },
    {
      parent: "Categorical",
      number: 2, 
      question: <span>What kind of <strong>categorical</strong> data?</span>,
      options: ["Nominal", "Ordinal"]
    },
    {
      parent: "Numerical",
      number: 2, 
      question: <span>What do you want to know about the <strong>numerical</strong> data?</span>,
      options: ["Differences", "Relationships"]
    }
  ]
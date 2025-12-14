/**
 * @param {string} parent - String name of the option that results in this question being displayed
 * @param {number} number - Number indicating the position of this step in the sequence of steps
 * @param {string | html} question - String or HTML of of the question to display 
 * @param {string[]} options - String array of answer options (Omit if end step)
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
      options: ["Relationships between variables", "Differences between groups"]
    },
    {
      parent: "Nominal",
      number: 3,
      question: <span>How many variables do you have?</span>,
      options: ["One", "Two or more"]
    },
    {
      parent: "One",
      number: 4,
      question: <span>Chi-square goodness of fit</span>,
      options: []
    },
    {
      parent: "Two or more",
      number: 4,
      question: <span>Chi-square test of independence</span>,
      options: []
    },
    {
      parent: "Ordinal",
      number: 3,
      question: <span>What are you investigating?</span>,
      options: ["Relationships between variables", "Differences between groups"]
    },
    {
      parent: "Relationships between variables",
      number: 4,
      question: <span>Spearman's Rank Correlation</span>,
      options: []
    },
    {
      parent: "Differences between groups",
      number: 4,
      question: <span>What kind of <strong>groups</strong> are you testing?</span>,
      options: ["Independent groups", "Within groups"]
    },
    {
      parent: "Independent groups",
      number: 5,
      question: <span>Mann Whitney U (a.k.a Wilcoxon Rank-Sum)</span>,
      options: []
    },
    {
      parent: "Within groups",
      number: 5,
      question: <span>Wilcoxon Signed-Rank Test</span>,
      options: []
    },
    {
      parent: "Relationships between variables",
      number: 3, 
      question: <span>Do you have a true independent variable?</span>,
      options: ["Yes", "No"]
    },
    {
      parent: "Yes",
      number: 4, 
      question: <span>Regression test</span>,
      options: []
    },
    {
      parent: "No",
      number: 4, 
      question: <span>How is your data <strong>distributed</strong>?</span>,
      options: ["Normal distribution", "Not normal distribution"]
    },
    {
      parent: "Normal distribution",
      number: 5, 
      question: <span>Spearman's Rank Correlation</span>,
      options: []
    },
    {
      parent: "Not normal distribution",
      number: 5, 
      question: <span>Pearson's R</span>,
      options: []
    },
    {
      parent: "Differences between groups",
      number: 4, 
      question: <span>How many groups are you comparing?</span>,
      options: ["One", "Two", "More than two"]
    },
    {
      parent: "One",
      number: 5, 
      question: <span>Do you know the <strong>population standard deviation</strong>?</span>,
      options: ["Yes", "No"]
    },
    {
      parent: "Yes",
      number: 6, 
      question: <span>Z-Test</span>,
      options: []
    },
    {
      parent: "No",
      number: 6, 
      question: <span>One sample T-test</span>,
      options: []
    },
    {
      parent: "Two",
      number: 5, 
      question: <span>Are there <strong>equal variances</strong>?</span>,
      options: ["Yes", "No"]
    },
    {
      parent: "Yes",
      number: 6, 
      question: <span>Are you analyzing <strong>repeated measures</strong>?</span>,
      options: ["Yes", "No"]
    },
    {
      parent: "Yes",
      number: 7, 
      question: <span>Paired T-test</span>,
      options: []
    },
    {
      parent: "No",
      number: 7, 
      question: <span>Independent Samples T-test</span>,
      options: []
    },
    {
      parent: "No",
      number: 5, 
      question: <span>Mann-Whitney U (a.k.a Wilcoxon Rank Sum)</span>,
      options: []
    },
    {
      parent: "More than two",
      number: 5, 
      question: <span>Are there <strong>equal variances</strong>?</span>,
      options: ["Yes", "No"]
    },
    {
      parent: "Yes",
      number: 6, 
      question: <span>Analysis of Variance (ANOVA)</span>,
      options: []
    },
    {
      parent: "No",
      number: 6, 
      question: <span>Kruskal-Wallis test</span>,
      options: []
    },



  ]
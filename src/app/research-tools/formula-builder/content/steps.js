/**
 * A dictionary where the entry's key is its ID, and its body is made of the following properties:
 * @prop {string} display - The string to display for this step, when presented as an option in its parent step
 * @prop {string | html} question - [Optional] String or HTML of the question to display 
 * @prop {string | HTML} formula - [Optional] String or HTML of the formula to display
 * @prop {string[]} options - [Optional] String array of answer options Ids (Omit if end step)
 */
export const steps = {
  "root" : {
      display: null,
      question: "What kind of data are you analyzing?",
      options: ["Cat", "Num"]
    },
  "Cat" :  {
      display: "Categorical",
      question: <span>What kind of <strong>categorical</strong> data?</span>,
      options: ["Cat-Nom", "Cat-Ord"]
    },
  "Num":  {
      display: "Numerical",
      question: <span>What do you want to know about the <strong>numerical</strong> data?</span>,
      options: ["Num-Rel", "Num-Diff"]
    },
  "Cat-Nom":  {
      display: "Nominal",
      question: <span>How many variables do you have?</span>,
      options: ["Cat-Nom-One", "Cat-Nom-TwoOrMore"]
    },
  "Cat-Nom-One":  {
      display: "One",
      question: <span>Chi-square goodness of fit</span>,
      formula: <span>Chi-square goodness of fit</span>, 
      options: [],
    },
  "Cat-Nom-TwoOrMore":  {
      display: "Two or more",
      question: <span>Chi-square test of independence</span>,
      options: []
    },
  "Cat-Ord":  {
      display: "Ordinal",
      question: <span>What are you investigating?</span>,
      options: ["Cat-Ord-Rel", "Cat-Ord-Diff"]
    },
  "Cat-Ord-Rel":  {
      display: "Relationships between variables",
      question: <span>Spearman's Rank Correlation</span>,
      options: []
    },
  "Cat-Ord-Diff":  {
      display: "Differences between groups",
      question: <span>What kind of <strong>groups</strong> are you testing?</span>,
      options: ["Cat-Ord-Diff-Independent", "Cat-Ord-Diff-Within"]
    },
  "Cat-Ord-Diff-Independent":   {
      display: "Independent groups",
      question: <span>Mann Whitney U (a.k.a Wilcoxon Rank-Sum)</span>,
      options: []
    },
  "Cat-Ord-Diff-Within":  {
      display: "Within groups",
      question: <span>Wilcoxon Signed-Rank Test</span>,
      options: []
    },
  "Num-Rel": {
      display: "Relationships between variables",
      question: <span>Do you have a true independent variable?</span>,
      options: ["Num-Rel-Yes", "Num-Rel-No"]
    },
  "Num-Rel-Yes":  {
      display: "Yes",
      question: <span>Regression test</span>,
      formula: <span>Regression test</span>,
      options: []
    },
  "Num-Rel-No":  {
      display: "No",
      question: <span>How is your data <strong>distributed</strong>?</span>,
      options: ["Num-Rel-No-NormDist", "Num-Rel-No-NotNormDist"]
    },
  "Num-Rel-No-NormDist": {
      display: "Normal distribution",
      question: <span>Spearman's Rank Correlation</span>,
      formula: <span>Spearman's Rank Correlation</span>,
      options: []
    },
  "Num-Rel-No-NotNormDist":  {
      display: "Not normal distribution",
      question: <span>Pearson's R</span>,
      formula: <span>Pearson's R</span>,
      options: []
    },
  "Num-Diff":  {
      display: "Differences between groups",
      question: <span>How many groups are you comparing?</span>,
      options: ["Num-Diff-One", "Num-Diff-Two", "Num-Diff-More"]
    },
  "Num-Diff-One":  {
      display: "One",
      question: <span>Do you know the <strong>population standard deviation</strong>?</span>,
      options: ["Num-Diff-One-Yes", "Num-Diff-One-No"]
    },
  "Num-Diff-One-Yes":  {
      display: "Yes",
      question: <span>Z-Test</span>,
      formula: <span>Z-Test</span>,
      options: []
    },
  "Num-Diff-One-No":  {
      display: "No",
      question: <span>One sample T-test</span>,
      formula: <span>One sample T-test</span>,
      options: []
    },
  "Num-Diff-Two":  {
      display: "Two",
      question: <span>Are there <strong>equal variances</strong>?</span>,
      options: ["Num-Diff-Two-Yes", "Num-Diff-Two-No"]
    },
  "Num-Diff-Two-Yes":  {
      display: "Yes",
      question: <span>Are you analyzing <strong>repeated measures</strong>?</span>,
      options: ["Num-Diff-Two-Yes-Yes", "Num-Diff-Two-Yes-No"]
    },
  "Num-Diff-Two-Yes-Yes":  {
      display: "Yes",
      question: <span>Paired T-test</span>,
      formula: <span>Paired T-test</span>,
      options: []
    },
  "Num-Diff-Two-Yes-No":  {
      display: "No",
      question: <span>Independent Samples T-test</span>,
      formula: <span>Independent Samples T-test</span>,
      options: []
    },
  "Num-Diff-Two-No":  {
      display: "No",
      question: <span>Mann-Whitney U (a.k.a Wilcoxon Rank Sum)</span>,
      formula: <span>Mann-Whitney U (a.k.a Wilcoxon Rank Sum)</span>,
      options: []
    },
  "Num-Diff-More":  {
      display: "More than two",
      question: <span>Are there <strong>equal variances</strong>?</span>,
      options: ["Num-Diff-More-Yes", "Num-Diff-More-No"]
    },
  "Num-Diff-More-Yes":  {
      display: "Yes",
      question: <span>Analysis of Variance (ANOVA)</span>,
      formula: <span>Analysis of Variance (ANOVA)</span>,
      options: []
    },
  "Num-Diff-More-No":  {
      display: "No",
      question: <span>Kruskal-Wallis test</span>,
      formula: <span>Kruskal-Wallis test</span>,
      options: []
    }
}

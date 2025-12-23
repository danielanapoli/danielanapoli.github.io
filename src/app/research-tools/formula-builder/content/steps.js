/**
 * An array of step data objects, each object includes:
 * @param {string} id - String ID of the step
 * @param {string} display - The string to display for this step, when presented as an option in its parent step
 * @param {number} number - Number indicating the position of this step is in the sequence of steps
 * @param {string | html} question - [Optional] String or HTML of the question to display 
 * @param {string | HTML} formula - [Optional] String or HTML of the formula to display
 * @param {string[]} options - [Optional] String array of answer options Ids (Omit if end step)
 * 
 * @Notes
 * If options is null or empty, it is assumed this is the last step
 */
export const steps = [
    {
      id: null,
      display: null,
      question: "What kind of data are you analyzing?",
      options: ["Cat", "Num"]
    },
    {
      id: "Cat",
      display: "Categorical",
      question: <span>What kind of <strong>categorical</strong> data?</span>,
      options: ["Cat-Nom", "Cat-Ord"]
    },
    {
      id: "Num",
      display: "Numerical",
      question: <span>What do you want to know about the <strong>numerical</strong> data?</span>,
      options: ["Num-Rel", "Num-Diff"]
    },
    {
      id: "Cat-Nom",
      display: "Nominal",
      question: <span>How many variables do you have?</span>,
      options: ["Cat-Nom-One", "Cat-Nom-TwoOrMore"]
    },
    {
      id: "Cat-Nom-One",
      display: "One",
      options: [],
      question: <span>Chi-square goodness of fit</span>,
      formula: <span>Chi-square goodness of fit</span>, 
      formulaCode: "https://latex.codecogs.com/svg.image?\chi^{2}_{c}=\sum\frac{(O_{i}-E_{i})^{2}}{E_{i}}"
    },
    {
      id: "Cat-Nom-TwoOrMore",
      display: "Two or more",
      question: <span>Chi-square test of independence</span>,
      options: []
    },
    {
      id: "Cat-Ord",
      display: "Ordinal",
      question: <span>What are you investigating?</span>,
      options: ["Cat-Ord-Rel", "Cat-Ord-Diff"]
    },
    {
      id: "Cat-Ord-Rel",
      display: "Relationships between variables",
      question: <span>Spearman's Rank Correlation</span>,
      options: []
    },
    {
      id: "Cat-Ord-Diff",
      display: "Differences between groups",
      question: <span>What kind of <strong>groups</strong> are you testing?</span>,
      options: ["Cat-Ord-Diff-Independent", "Cat-Ord-Diff-Within"]
    },
    {
      id: "Cat-Ord-Diff-Independent",
      display: "Independent groups",
      question: <span>Mann Whitney U (a.k.a Wilcoxon Rank-Sum)</span>,
      options: []
    },
    {
      id: "Cat-Ord-Diff-Within",
      display: "Within groups",
      question: <span>Wilcoxon Signed-Rank Test</span>,
      options: []
    },
    {
      id: "Num-Rel",
      display: "Relationships between variables",
      question: <span>Do you have a true independent variable?</span>,
      options: ["Num-Rel-Yes", "Num-Rel-No"]
    },
    {
      id: "Num-Rel-Yes",
      display: "Yes",
      question: <span>Regression test</span>,
      formula: <span>Regression test</span>,
      options: []
    },
    {
      id: "Num-Rel-No",
      display: "No",
      question: <span>How is your data <strong>distributed</strong>?</span>,
      options: ["Num-Rel-No-NormDist", "Num-Rel-No-NotNormDist"]
    },
    {
      id: "Num-Rel-No-NormDist",
      display: "Normal distribution",
      question: <span>Spearman's Rank Correlation</span>,
      formula: <span>Spearman's Rank Correlation</span>,
      options: []
    },
    {
      id: "Num-Rel-No-NotNormDist",
      display: "Not normal distribution",
      question: <span>Pearson's R</span>,
      formula: <span>Pearson's R</span>,
      options: []
    },
    {
      id: "Num-Diff",
      display: "Differences between groups",
      question: <span>How many groups are you comparing?</span>,
      options: ["Num-Diff-One", "Num-Diff-Two", "Num-Diff-More"]
    },
    {
      id: "Num-Diff-One",
      display: "One",
      question: <span>Do you know the <strong>population standard deviation</strong>?</span>,
      options: ["Num-Diff-One-Yes", "Num-Diff-One-No"]
    },
    {
      id: "Num-Diff-One-Yes",
      display: "Yes",
      question: <span>Z-Test</span>,
      formula: <span>Z-Test</span>,
      options: []
    },
    {
      id: "Num-Diff-One-No",
      display: "No",
      question: <span>One sample T-test</span>,
      formula: <span>One sample T-test</span>,
      options: []
    },
    {
      id: "Num-Diff-Two",
      display: "Two",
      question: <span>Are there <strong>equal variances</strong>?</span>,
      options: ["Num-Diff-Two-Yes", "Num-Diff-Two-No"]
    },
    {
      id: "Num-Diff-Two-Yes",
      display: "Yes",
      question: <span>Are you analyzing <strong>repeated measures</strong>?</span>,
      options: ["Num-Diff-Two-Yes-Yes", "Num-Diff-Two-Yes-No"]
    },
    {
      id: "Num-Diff-Two-Yes-Yes",
      display: "Yes",
      question: <span>Paired T-test</span>,
      options: []
    },
    {
      id: "Num-Diff-Two-Yes-No",
      display: "No",
      question: <span>Independent Samples T-test</span>,
      options: []
    },
    {
      id: "Num-Diff-Two-No",
      display: "No",
      question: <span>Mann-Whitney U (a.k.a Wilcoxon Rank Sum)</span>,
      formula: <span>Mann-Whitney U (a.k.a Wilcoxon Rank Sum)</span>,
      options: []
    },
    {
      id: "Num-Diff-More",
      display: "More than two",
      question: <span>Are there <strong>equal variances</strong>?</span>,
      options: ["Num-Diff-More-Yes", "Num-Diff-More-No"]
    },
    {
      id: "Num-Diff-More-Yes",
      display: "Yes",
      question: <span>Analysis of Variance (ANOVA)</span>,
      formula: <span>Analysis of Variance (ANOVA)</span>,
      options: []
    },
    {
      id: "Num-Diff-More-No",
      display: "No",
      question: <span>Kruskal-Wallis test</span>,
      formula: <span>Kruskal-Wallis test</span>,
      options: []
    },
  ]
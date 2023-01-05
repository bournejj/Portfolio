// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jack",
  middleName: "",
  lastName: "Bourne",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/bournejj",
    },
    
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jackjbourne/",
    },
    
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../config/Screenshot 2022-08-11 at 14.20.42.png"),
  imageSize: 375,
  message:
    "My name is Jack Bourne. I’m a graduate of 2022 from the Springboard Software Engineering program. In my free time I like working on my own personal projects, constantly honing my skills as a Software Engineer. I also enjoy hiking and love getting into the great outdoors when I have the chance. I have travelled to many countries and have many more to tick off my bucket list! My telecaster is my one and only love..............................alongside my incredible partner of course!",
  resume: "https://drive.google.com/file/d/1wy47XQXpJSeA_2NLQWnRStTzcOHUU0Vh/view?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bournejj", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["preffered-dishes", "Fluidity"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 70 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 70 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 90 },
  
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "cras.jbourne@gmail.com",
};





export { navBar, mainBody, about, repos, skills, getInTouch };

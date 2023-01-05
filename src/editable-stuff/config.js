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
  imageLink: require("../editable-stuff/Screenshot 2022-08-11 at 14.20.42.png"),
  imageSize: 375,
  message:
    "My name is Jack Bourne. I’m a graduate of 2022 from the Springboard Softwate Engineering program. In my free time I like working on my own personal projects, constantly honing my skills in javascript.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bournejj", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Preffered-Dishes-Api", "Fluidity"],
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

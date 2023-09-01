/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "kunalkumar168",
  title: "Hi all, I'm Kunal",
  subTitle: emoji(
    "I am currently pursuing Master's in Computer Science at University of Massachusetts Amherst where I am focusing on Artficial Intellingence track particularly on Machine Learning and Natural Language Processing. During Summer 2023, I interned with AMD in Machine Learning Solutions Team. Previously, I have worked 3 years as Associate Software Engineer at JP Morgan Chase. "
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  phone: "+14133991934",
  gmail: "kunalkumar@umass.edu",
  github: "https://github.com/kunalkumar168",
  linkedin: "https://www.linkedin.com/in/kunal-kumar-/",
  leetcode: "https://leetcode.com/kunal168/",
  codechef: "https://www.codechef.com/users/kunal_coder_1",
  kaggle: "https://www.kaggle.com/kunal168/",
  orcid: "https://orcid.org/0000-0002-7438-9050",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do \& my Skills",
  subTitle: " I am a ML and NLP enthusiast with a strong software development background. I am dedicated to solving challenging problems, staying updated with the latest trends, and creating impactful solutions. I am active competitive programmer and I like to solve Data Structures problem across multiple online platforms.",
  skills: [
    emoji(
      "⚡ Writing clean, efficient and optimized code in Python and C++."
    ),
    emoji("⚡ Researching in machine learning algorithms to improve its accuracy with proper training and finetuning models."),
    emoji(
      "⚡ Active competitive programmer solving Data Structures \& Algorithms problems to improve reasoning and thinking ability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      logo: require("./assets/images/umass.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - May 2024",
      gpa: "3.83/4.00",
      desc: "Relevant Courses: Machine Learning, Statistics, Business Application \& Development, System for Data Science, Advanced Natural Language Processing",
    },
    {
      schoolName: "Indian Institute of Technology (BHU), Varanasi",
      logo: require("./assets/images/iit.png"),
      subHeader: "Dual Degree (B.Tech \& M.Tech ) in Electrical Engineering",
      duration: "July 2014 - June 2019",
      gpa: "3.71/4.00",
      desc: "Ranked top 10% in the program. Took revelant courses as Probability & Statistics, Data Structures, Parallel Algorithms, Operations Research, Operating Systems",
      descBullets: ["Completed a Master's theis on 'Modified Bi-directional converter for Electric Vehicle Applications.' "]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "AMD",
      companylogo: require("./assets/images/amd.png"),
      date: "May 2023 – August 2023",
      location: "San Jose, CA, United States",
      desc: "As a part of Machine Learning Solutions Team in Artificial Intelligence Group at AMD, my role in the internship were : ",
      descBullets: [
        "Inferred pretrained & quantized HuggingFace NLP models for Question-Answer & Classification tasks for AI Compilers",
        "Designed and implemented a Dockerized pipeline for the seamless integration of pretrained AI models which converts the models into PyTorch and ONNX formats, conducting operator analysis, and performing model inference.",
        "Developed a web scrapper to pull stats from huggingface website.",
      ],
      exposure: "Exposure : Python, Natural Language Processing(NLP), Vision, Deep Learning, Pytorch, Docker, Linux",
    },
    {
      role: "Graduate Student Researcher",
      company: "Oracle",
      companylogo: require("./assets/images/oracle.png"),
      date: "February 2023 – May 2023",
      location: "Amherst, MA, United States",
      desc: "This is a industry research based course focusing in NLP domain. I was part of a four member team working in Machine Learning Research Group Lab at Oracle under supervision of Ari Korben and Prof. Andrew McCullum, where we researched on different prompting techniques in Large Language Model using different heuristics like Sentence Similarity and Randomization. We used different evaluation metrics to study the performance.",
      descBullets: [
        "Developed a ground language learning model using FLAN-T5 LLM in Pytorch for instruction based tuning on Oracle dataset.",
        "Automated dataset creation using web scrapping tools on Oracle documentations in JSON format.",
        "Incorporated several prompting techniques (Question-Answer, Machine Translation, Chain-of-Thought) to improve accuracy and model evaluation (Token F1, Jaccard Similarity, Token Exact Match) for few-shot learning.",
      ],
      exposure: "Exposure : Python, NLP, FLAN-T5, Pytorch, Web Scrapping",
      footerLink: [
        {
          name: "Oracle Labs",
          url: "https://labs.oracle.com/pls/apex/f?p=94065:12:116549424023892:7"
        },
        {
          name: "IESL (UMass Amherst)",
          url: "https://www.iesl.cs.umass.edu/"
        },
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "JP Morgan Chase \& Co.",
      companylogo: require("./assets/images/jpmc.png"),
      date: "July 2019 – July 2022",
      location: "Bengaluru, KA, India",
      desc: "As a part of Market Risk Team, I worked 3 years (1 year as Analyst and 2 years as Associate) software engineer working in VaR(Value at Risk) and Stress aspect of Rates team.",
      descBullets: [
        "Responsible for project deliveries in CI/CD practice working with stakeholders in the Market Risk team.",
        "Formulated efficient Python code with advanced knowledge of Object Oriented Programming (OOP’s), debugging and regression testing.",
        "Completely automated daily tasks and orchestrated utility code, which reduced 60% of handwork.",
        "Reduced run time of processes by optimizing deployed code using parallel processing.",
        "Engaged in a fast-paced environment with the integrated application of technical skills and business involved.",
      ],
      exposure: "Exposure : Python, Machine Learning, Pandas, Numpy, Unittest, NoSQL, Data Analytics, Shell Scripting",
    },
    {
      role: "Summer Research Internship",
      company: "IIIT Allahabad",
      companylogo: require("./assets/images/iiit.png"),
      date: "May 2017 – July 2017",
      location: "Prayagraj, UP, India",
      desc: "I worked under supervision of Prof. Uma Shankar Tiwary in Speech, Image, Language Processing (SILP) Lab.",
      descBullets: [
        "Used Natural Language techniques (NLTK Library) to clean and preprocess the dataset.",
        "Built an Ontology using Protege software, and using SPARQL retrieved the result from the Ontology.",
        "Improved the accuracy with an optimal RDF representation and Machine Learning algorithms.",
      ],
      exposure: "Exposure : Python3, SPARQL, LaTeX, Machine Learning, Natural Language Processing, Semantic Web",
      footerLink: [
        {
          name: "SILP Labs",
          url: "https://silp.iiita.ac.in/"
        },
      ],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Projects 👨🏻‍💻"),
  subtitle: "All academic and self-projects I completed till date.",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Common Sense Reasoning through Winograd Schema Challenge ",
      projectDesc: "Using Sentence Transformer in Bi-Encoder & Cross encoder model, Few Shot and Chain-of-Thought prompting in FLAN-T5 & davinci models achieved 91% accuracy on WSC dataset. Experimented with different heuristics for prompting and performed qualitative error analysis for overall report.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/kunalkumar168/Common-Sense-Reasoning-through-Winograd-Schema-Challenge"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Operationalizing Machine Learning in Azure ML",
      projectDesc: "In this project, we use Azure to configure a cloud-based machine learning production model, deploy it, and consume it. We also create, publish, and consume a pipeline.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/kunalkumar168/Operationalizing-Machine-Learning-in-Azure-ML"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Sentiment analysis of twitter data using SparkNLP",
      projectDesc: "Pre-processed Kaggle dataset using pre-trained SparkNLP pipeline and NLTK library. Trained the model using pretrained SparkNLP pipeline on the dataset. Achieved an 80% accuracy through different model selection using feature engineering",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/kunalkumar168/Twitter-data-sentiment-analysis-using-Spark-NLP"
        }
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "House Price Prediction using R programming",
      projectDesc: "Used dataset of tech stocks after cleaning and preprocessing. Pre-processed the Kaggle dataset by removing inner and influential outliers. Built a multi-variate linear regression model to predict the house prices with accuracy of 78\% on train data and 79.8\% on test data.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/kunalkumar168/House-price-prediction-using-R"
        }
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Chatbot using Deep Learning tool in Python",
      projectDesc: "The dataset from Kaggle was cleaned and preprocessed using the NLTK library in Python. Trained the model using deep learning tools on dataset. Created Tkinter GUI to interact with Chatbox.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/kunalkumar168/Build-a-simple-Chatbot-using-Deep-Learning-tool-in-Python"
        }
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Stock Market Analysis for Tech Stocks",
      projectDesc: "Used pandas and visualization library to analyze the risk of a stock based on performance history. Evaluated changes in stock price, daily return average, the risk associated with investing in a particular stock and attempted to predict future stock behavior.",
      // footerLink: [
      //   {
      //     name: "",
      //     url: ""
      //   }
      // ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Movie Recommender System in Python",
      projectDesc: "In this project, I have created a basic recommendation system by suggesting items that are most similar to a particular item, in this case, movies. Keep in mind, this is not a true robust recommendation system, to describe it more accurately,it just tells you what movies/items are most similar to your movie choice. We are using correlation logic to recommend a movie based on previous data.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/kunalkumar168/Movie-Recommender-System"
        }
      ]
    },    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆"),
  achievementsCards: [
    {
      title: "Scaler - Trivia Tuesday'22",
      subtitle:
        "Ranked 1st in coding contest organised by Scaler. Won a Apple Airpod's.",
      image: require("./assets/images/scaler.png"),
      imageAlt: "Scaler Logo",
      footerLink: [
        {
          name: "Post Link",
          url: "https://www.linkedin.com/posts/kunal-kumar-_scaler-interviewbit-triviatuesday-activity-6948363330692493312-tveC/?utm_source=share&utm_medium=member_desktop"
        },
      ]
    },
    {
      title: "CodeChef - Snackdown'21",
      subtitle:
        "Ranked 498 out of 34894 participants in annual coding contest organised by India's largest coding platform. Reached semi-final round and won a merchandise.",
      image: require("./assets/images/codechef.png"),
      imageAlt: "CodeChef Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.codechef.com/certificates/preview/8360142"
        },
      ]
    },
    {
      title: "TechGig - Code Gladiators'21",
      subtitle:
        "Semi-finalist on TechGig's annual coding competition.",
      image: require("./assets/images/techgig.png"),
      imageAlt: "TechGig Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1SLhp-EFcPK2z-3xgImdzOomEb8BZxRrr/view"
        },
      ]
    },
    {
      title: "Google - KickStart'21",
      subtitle:
        "Best Global rank 3404 in Google's annual programming contest.",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1mRuWiXMqlUd0U-x9P4CL3EJBXB_dwDNG/view?usp=sharing"
        },
      ]
    },
    {
      title: "Scaler - Codex'21",
      subtitle:
        "Ranked 802 out of 5000+ participents in Scaler's global programming contest.",
      image: require("./assets/images/codex.png"),
      imageAlt: "Codex Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1UzeYHDufIKcNNHQPM8huq3zCyupdn1q4/view"
        },
      ]
    },
    {
      title: "Prastuti - Solution on Spot'15",
      subtitle:
        "Won 3rd prize on IIT BHU's Electrical Engineering annual event where we needed to produce innovative ideas using EE concepts.",
      image: require("./assets/images/prastuti.png"),
      imageAlt: "Prastuti Logo",
      footerLink: [
        {
          name: "Event Link",
          url: "https://prastuti.in/"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

 // Certifications
 const certifications = {
  title: emoji("Certifications 🏅"),
  subtitle: "Few certifications/courses, I undertook to develop relevant skillset and build my profile.",
  certification: [
    {
      image: require("./assets/images/udacity.png"),
      certificationName: "Microsoft Azure Nanodegree course (Machine Learning Scholarship) from Udacity",
    },
    {
      image: require("./assets/images/udacity.png"),
      certificationName: "Next Generation Tech Booster ( Front End Developer Scholarship ) from Udacity"
    },
    {
      image: require("./assets/images/coursera.png"),
      certificationName: "Machine Learning by Stanford University from Coursera",
    },
    {
      image: require("./assets/images/datacamp.png"),
      certificationName: "Introduction to Data Science with Python from DataCamp",
    },
    {
      image: require("./assets/images/datacamp.png"),
      certificationName: "Python Programming Tutorial from DataCamp",
    },
    {
      image: require("./assets/images/pluralsight.png"),
      certificationName: "Core Python course from PluralSight",
    },
    {
      image: require("./assets/images/pluralsight.png"),
      certificationName: "C++ Programming from PluralSight",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Positions of Responisibilty
const positionOfResponsibility = {
  title: emoji("Positions of Responisbility 💼"),
  subtitle: "Few positions where I displayed my soft skills like communication, leadership, management etc.",
  por: [
    {
      descBullets: [ 
        "Worked as a 'Student Athlete Tutor' for STEM courses at UMass Amherst (2022-23).",
        "Worked as a Teaching Assistant at IIT BHU of a batch of 120 students per semester for courses: Fundamentals of Electrical Engineering : 2 semesters (2018-19) \& Network Analysis and Synthesis : 3 semesters (2017-18).",
        "Was Subject Matter Expert of Python, SQL and ML in Code For Good (2020) Hackathon conducted by JP Morgan Chase",
        "Worked in a campus recruitment drive associated with Campus Outreach Program (2020-21) by JP Morgan Chase",
      ],
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Currently, I am looking for Full-Time opportunities from June 2024 in Software Engineering, Machine Learning, Data Science \& Natural Language Processing domains. If you find my profile suitable, please reach out to me.",
  location: emoji("📍 Amherst, Massachusetts, United States"),
  content: "Open for Opportunities : Yes",
  email_address: "kunalkumar@umass.edu"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  certifications,
  positionOfResponsibility,
  isHireable
};
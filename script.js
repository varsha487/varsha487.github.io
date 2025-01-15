const aboutButton = document.getElementById("about-me");
const projectButton = document.getElementById("projects");
const workButton = document.getElementById("work-exp");
const skillsButton = document.getElementById("skills");
const clubsButton = document.getElementById("clubs");


aboutButton.addEventListener("click", function() {
    darkenNavBar(aboutButton);
    dispAboutPage();
  });

aboutButton.addEventListener("mouseover", function(){
  click();
})

projectButton.addEventListener("mouseover", function(){
  click();
})

workButton.addEventListener("mouseover", function(){
  click();
})

skillsButton.addEventListener("mouseover", function(){
  click();
})

clubsButton.addEventListener("mouseover", function(){
  click();
})


projectButton.addEventListener("click", function() {
    darkenNavBar(projectButton);
      dispProjectsPage();
      const project1 = document.getElementById("project1");
      project1.addEventListener("click", function(){
        
        window.open("https://drive.google.com/file/d/1FmMaRR15Fy5gWNLMVZkAy0U9FrH4H3xf/view?usp=sharing")
      })

      const project2 = document.getElementById("project2");
      project2.addEventListener("click", function(){
        window.open("https://github.com/varsha487/hangman.git")
      })

      const project3 = document.getElementById("project3");
      project3.addEventListener("click", function(){
        window.open("https://github.com/varsha487/ek121-final.git")
      })

      const project4 = document.getElementById("project4");
      project4.addEventListener("click", function(){
        window.open("https://github.com/varsha487/fast-fashion.git")
      })
      const project0 = document.getElementById("project0");
      project0.addEventListener("click", function(){
        window.open("https://github.com/varsha487/AquaAvengers.git")
      })

      const project5 = document.getElementById("project5");
      project5.addEventListener("click", function(){
        window.open("https://github.com/varsha487/8blab.git")
      })

      const project6 = document.getElementById("project6");
      project6.addEventListener("click", function(){
        window.open("https://github.com/TyagiArav/GymGuru.git")
      })

      const project7 = document.getElementById("project7");
      project7.addEventListener("click", function(){
        window.open("https://github.com/cc459/Predictive-Analysis.git")
      })
    });


workButton.addEventListener("click", function() {
  darkenNavBar(workButton);
  dispWorkPage();
      });


skillsButton.addEventListener("click", function() {
  darkenNavBar(skillsButton);
  dispSkillsPage();
      });


clubsButton.addEventListener("click", function() {
  darkenNavBar(clubsButton);
  dispClubsPage();
      });

let mainPage = document.getElementById("main-page");
function dispAboutPage(){
  mainPage.innerHTML = `
  <div id="text-image">
        <img width="300" id="headshot" src="images/headshot.jpg" />
        <p id = "main-text">
        I am a junior undergraduate student at Boston University's College of Engineering, and my major is Computer Engineering.
        I am originally from northern Virginia. Some activities I enjoy outside of coding are practicing the violin, playing tennis, and making origami. My favorite color is pink (clearly).
        Feel free to contact me at <a href=mailto:"vathreya@bu.edu">vathreya@bu.edu</a>.
    </p>
  </div>

        <div id="icons">
            <img width="70" height = "70" src="images/tennis.png" />
            <img width="70" height = "70" src="images/violin.svg" />
            <img width="70" height = "70" src="images/origami.png" />
            <img width="70" height = "70" src="images/music note.png" />
            <img width="70" height = "70" src="images/tennisball.png" />
        </div>`;
}

function dispProjectsPage(){
  mainPage.innerHTML = `<div id="project-page">
  <p>Click on the projects below to navigative to the respective Github repositories or papers.</p>

  <div id="project7" class = "project">
    <h3>Predictive Stock Analysis through Break Through Tech</h1>
        <li>Built ML algorithm to predict future prices and market trends from historical financial data and provide alerts of market movement and pattern recognition for fund managers in Python</li>
              <li>Utilized LLMs to read through large amounts of financial news and storing it in MongoDB database</li>
              <li>Implemented FinBERT and web scraping methods for natural language processing of financial articles daily</li>
</div>

   <div id="project0" class = "project">
    <h3>Climate Dashboard for Building Sustainable Water Infrastructure</h1>
        <li>MIT Policy Hackathon Finalist</li>
        <li>Analyzed multidimensional GIS data using Python and visualizations using GeoDataFrame package</li>
        <li>Built web application to display climate data effectively for policymakers’ use using Flask framework</li>
        <li>Presented to over 100 people including contestants and judges and defended project in Q&A section</li>  
        </div>

<div id="project5" class = "project">
  <h3>Predicting Perceptions of Corruption Using Machine Learning</h3>
      <li>Trained and validated ML model to predict perceptions of corruption from 1500+ data points with resultant R-squared of 85% using Python packages such as sklearn and scipy.stats </li>
<li>Iterated over linear regression and decision tree models to determine best model, hyperparameters and features</li>
<li>Cleaned open source data by using one-hot encoding, replacing null values and winsorizing outliers </li>
      </div>

      <div id="project6" class = "project">
  <h3>Personalized AI Fitness Trainer</h3>
      <li>Implemented OpenAI’s API to allow users to create a personalized fitness plan through a web application 
</li>

<li>Programmed application using the Flask framework in Python, Javascript, HTML, and CSS</li>
      </div>


  <div id="project1" class = "project">
    <h3>Statistical Analysis of Crime Rates</h1>
        <li>Researched background information for literature review and wrote final paper</li>
        <li>Collected, cleaned, and analyzed open-source data</li>
        <li>Implemented statistical techniques using RStudio including multiple regression, ANOVA, descriptive statistics,
              choosing significant variables (using best subsets method), training/holdout analyses, bootstrapping, MANOVA</li>
          </div>

  <div id="project2" class = "project">
              <h3>Basic Game Development</h3>
      <li>Planned, designed, and wrote program for a “Hangman” game from scratch</li>
      <li>Coded game with Java applying concepts including GUIs, types of classes, Boolean algebra, interfaces, recursion,
                  arrays, graphics, data storage, and sorting</li>
              </div>

              <div id="project3" class = "project">
  <h3>Analysis of Public School Attendance Rates</h3>
      <li>Utilized python libraries NumPy, matplotlib, and pandas to manipulate and display scatterplots and graphs</li>
      <li>Wrote analyses on findings, answering various questions about the data</li>
      <li>Organized code and analyses using an iPython Notebook in Jupyter Lab
      </li>
      </div>


      <div id="project4" class = "project">
  <h3>Sustainability Through Fast Fashion</h3>
      <li>Implemented Google Maps “Find Places” API to find nearest thrift store or donation center based on user input
          using Python; displayed map image using API</li>
      </div>
      
      `;
}

function dispWorkPage(){
  mainPage.innerHTML = `<div id="work-page">

    <div id = "work3" class = "work">
      <h3>AI Studio Fellow, Cashew Capital: August 2024 - present</h3>
          <div id = "list-work">
              <li>Break Through Tech AI at MIT Fellow</li>
              <li>Built ML algorithm to predict future prices and market trends from historical financial data and provide alerts of market movement and pattern recognition for fund managers in Python</li>
              <li>Utilized LLMs to read through large amounts of financial news and storing it in MongoDB database</li>
              <li>Implemented FinBERT and web scraping methods for natural language processing of financial articles daily</li>

          </div>
  </div>
  
  <div id = "work2" class = "work">
      <h3>WISE Engineering Internship, Medtronic: June 2024 - July 2024</h3>
          <div id = "list-work">
              <li>Improved front end GUI of computer application to log system data from surgical robot using Unity and C#</li>
              <li>Streamlined data analysis of the application’s output data using Python with libraries such as os and csv</li>
              <li>Increased capability to log additional system data from surgical robot in the back end using Unity and C#</li>
              <li>Compiled performance indicators and previous testing about the application for an engineering test report</li>
              
          </div>
  </div>

 <div id = "work5" class = "work">
      <h3>Grader for Engineering Mechanics, Boston University Engineering: September 2024 - present </h3>
          <div class = "list-work">
              <li>Scoring quizzes and homework assignments weekly for 70+ students for Engineering Mechanics (ENG EK 301)</li>
              </div>
  </div>


  <div id = "work4" class = "work">
      <h3>Engineering Tutor, Boston University Engineering: September 2024 - present</h3>
          <div class = "list-work">
              <li>Tutoring ~10 peers per week in subjects including Statics, Software Engineering, Calculus, Circuits and Chemistry</li>
              <li>Explaining concepts effectively from different perspectives to increase understanding </li>

              </div>
  </div>
    <div id = "work1" class = "work">
      <h3>Cashier, City Convenience: September 2023 - May 2024</h3>
          <div class = "list-work">
              <li>Stocked and closed store</li>
              <li>Greeted and interacted with customers</li>
              <li>Communicated with other employees and customers in English and Spanish as necessary </li>
    
              </div>
  </div>
  
</div>
`;
}

function dispSkillsPage(){
  mainPage.innerHTML = `<div id="skills-page">
  <div id="skills1" class = "skill">
      <h3>Software Skills</h3>
          <li>JavaScript/HTML/CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>R</li>
          <li>Matlab</li>
          <li>Git</li>
          <li>C#</li>
          <li>Unity</li>
      </div>

      <div id="skills2" class = "skill">
          <h3>Language Skills</h3>
              <li>English</li>
              <li>Spanish</li>

          </div>
          <div id="skills3" class = "skill">
          <h3>Relevant Coursework</h3>
              <li>Applied Algorithms</li>
              <li>Logic Design</li>
              <li>Electric Circuits</li>
              <li>Introduction to Software Engineering</li>
              <li>Discrete Mathematics</li>
              <li>Engineering Mechanics</li>
              <li>Programming for Engineers</li>
              
          </div>
</div>`;
}

function dispClubsPage(){
  mainPage.innerHTML = `<div id="clubs-page">
  
  <div id="club0" class="club">
      <h3>Artificial Intelligence Society</h3>
          <li>Secretary</li>
          <li>Managing admin duties and planning and marketing events</li>
  </div>

  <div id="club1" class="club">
      <h3>Upsilon Pi Epsilon</h3>
          <li>Current Member</li>
          <li>Boston University's Computer and Information Discipline Honor Society</li>
          
  </div>

  <div id="club2" class="club">
      <h3>Hack4Impact</h3>
          <li>Junior Development Team</li>
          <li>Attended seminars to learn Javascript/HTML/CSS/React</li>

</div>`;

}

function darkenNavBar(buttonName){
  aboutButton.style.background = "#E15D92";
  projectButton.style.background = "#E15D92";
  workButton.style.background = "#E15D92";
  skillsButton.style.background = "#E15D92";
  clubsButton.style.background = "#E15D92"
  buttonName.style.background = "#DC206D";
}

function click(){
  var snd = new Audio("click.wav")
  snd.play();
}

const instaButton = document.getElementById("insta-pic");
instaButton.addEventListener("click", function(){
  window.open("https://www.instagram.com/varsha.athreya487/");
  
})

const linkButton = document.getElementById("link-pic");
linkButton.addEventListener("click", function(){
  window.open("https://www.linkedin.com/in/varsha-athreya");
 
})

const fbButton = document.getElementById("fb-pic");
fbButton.addEventListener("click", function(){
  window.open("https://www.facebook.com/varsha.blank/");
  
})
instaButton.addEventListener("mouseover", function(){
  click();
})
linkButton.addEventListener("mouseover", function(){
  click();
})
fbButton.addEventListener("mouseover", function(){
  click();
})

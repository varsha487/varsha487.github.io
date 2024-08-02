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
        <img width="150" id="headshot" src="images/headshot.jpg" />
        <p id = "main-text">
        I am an undergraduate first-year student at Boston University's College of Engineering, and my major is Computer Engineering.
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
      
      <div id="project5" class = "project">
  <h3>Personal Portfolio Website</h3> 
      <li>Coded static portfolio website using Javascript, CSS, and HTML </li>
      <li>Applied images, buttons, transitions, sounds, and color schemes</li>
      
      </div>`;
}

function dispWorkPage(){
  mainPage.innerHTML = `<div id="work-page">

  
  <div id = "work2" class = "work">
      <h3>WISE Engineering Internship at Medtronic</h3>
          <div id = "list-work">
              <li>Improved front end GUI of computer application to log system data from surgical robot using Unity and C#</li>
              <li>Streamlined data analysis of the application’s output data using Python with libraries such as os and csv</li>
              <li>Increased capability to log additional system data from surgical robot in the back end using Unity and C#</li>
              <li>Compiled performance indicators and previous testing about the application for an engineering test report</li>
              
          </div>
  </div>
  <div id = "work3" class = "work">
      <h3>*In Progress* Break Through Tech AI at MIT Fellow</h3>
          <div id = "list-work">
              <li>Completed ML Foundations course through eCornell, learning and applying concepts including feature engineering, model selection, ensemble methods, unsupervised learning, NLP, and CV in Python</li>
          </div>
  </div>

  <div id = "work1" class = "work">
      <h3>Cashier, City Convenience</h3>
          <div class = "list-work">
              <li>Stocking and closing store</li>
              <li>Greeting and interacting with customers</li>
              <li>Communicating with other employees and customers in English and Spanish as necessary </li>
              <li>Working on average 15 hours per week</li>
              </div>
  </div>

  <div id = "work4" class = "work">
      <h3>*Incoming* Tutor, Boston University Engineering Fall 2024</h3>
          <div class = "list-work">
              <li>Will be tutoring at the engineering college's tutoring center during the fall semester</li>
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
              <li>Introduction to Software Engineering</li>
              <li>Linear Algebra</li>
              <li>Multivariable Calculus</li>
              <li>Discrete Mathematics</li>
              <li>Engineering Mechanics</li>
              <li>Programming for Engineers</li>

          </div>
</div>`;
}

function dispClubsPage(){
  mainPage.innerHTML = `<div id="clubs-page">
  <div id="club1" class="club">
      <h3>Upsilon Pi Epsilon</h3>
          <li>Current Member</li>
          <li>Boston University's Computer and Information Discipline Honor Society</li>
  </div>

  <div id="club2" class="club">
      <h3>Hack4Impact</h3>
          <li>Junior Development Team</li>
          <li>Attending seminars to learn Javascript/HTML/CSS</li>

  </div>

  <div id = "club4" class="club">
      <h3>Girls Who Math</h3>
          <li>Led the role of teacher throughout high school</li>
          <li>Became Executive Director in 12th grade</li>
          <li>Wrote weekly lessons on Algebra 1, Algebra 2, Precalculus, Trigonometry, and Geometry</li>
          <li>Taught groups of three to five younger students during free online classes</li>
          <li>Handled all communications with students and parents, managed website and social media, and advised other teachers as Executive Director</li>
      </div>

  <div id="club5" class="club">
      <h3>High School Writing Center</h3>
          <li>Edited and drafted research papers, literary analyses, and essays of other high school students weekly
          </li>
  </div>

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

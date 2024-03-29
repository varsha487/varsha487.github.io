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
        <img width="150" id="headshot" src="headshot.jpg" />
        <p id = "main-text">
            I am an undergraduate first-year student at Boston University's College of Engineering, and my major is Computer Engineering.
            I am originally from northern Virginia. Some activities I enjoy outside of coding are practicing the violin, playing tennis, and making origami. My favorite color is pink (clearly).
            Feel free to contact me at vathreya@bu.edu.
        </p>
  </div>

        <div id="icons">
            <img width="70" height = "70" src="tennis.png" />
            <img width="70" height = "70" src="violin.svg" />
            <img width="70" height = "70" src="origami.png" />
            <img width="70" height = "70" src="music note.png" />
            <img width="70" height = "70" src="tennisball.png" />
        </div>`;
}

function dispProjectsPage(){
  mainPage.innerHTML = `<div id="project-page">

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
  <h3>Analysis of Air Quality Data</h3> 
      <li>Cleaned and randomized open-source data using file I/O operations and tables in Matlab</li>
      <li>Applied Regression Machine Learning App in Matlab to develop ML model to predict air quality</li>
      <li>Wrote analysis for practical application of model
      </li>
      </div>`;
}

function dispWorkPage(){
  mainPage.innerHTML = `<div id="work-page">

  <div id = "work1" class = "work">
      <h3>Cashier, City Convenience</h3>
          <div class = "list-work">
              <li>stocking and closing store</li>
              <li>greeting and interacting with customers</li>
              <li>communicating with other employees and customers in English and Spanish as necessary </li>
              </div>
  </div>

  <div id = "work1" class = "work">
      <h3>Internship...?</h3>
          <div id = "list-work">
              <li>coming soon...hopefully</li>
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
      </div>

      <div id="skills2" class = "skill">
          <h3>Language Skills</h3>
              <li>English</li>
              <li>Spanish</li>

          </div>
</div>`;
}

function dispClubsPage(){
  mainPage.innerHTML = `<div id="clubs-page">
  <div id="club1" class="club">
      <h3>Upsilon Pi Epsilon</h3>
          <li>Current Provisional Member...soon to be regular member...maybe?</li>
          <li>Boston University's Computer and Information Discipline Honor Society</li>
  </div>

  <div id="club2" class="club">
      <h3>Hack4Impact</h3>
          <li>Junior Development Team</li>
          <li>attending seminars to learn Javascript/HTML/CSS</li>

  </div>

  <div id="club3" class="club">
      <h3>Boston University Quant Alpha</h3>
          <li>Junior Analyst Team member</li>
          <li>attending seminars about basic financial modeling topics</li>
  </div>

  <div id = "club4" class="club">
      <h3>Girls Who Math</h3>
          <li>Had the role of teacher throughout high school</li>
          <li>Became Executive Director in 12th grade</li>
          <li>Wrote weekly lessons on Algebra 1, Algebra 2, Precalculus, Trigonometry, and Geometry</li>
          <li>Taught groups of 3-5 younger students during free online classes</li>
          <li>Handled all communications with students and parents, managed website and social media, and advised other teachers as Executive Director</li>
      </div>

  <div id="club5" class="club">
      <h3>Writing Center</h3>
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

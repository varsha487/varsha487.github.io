const aboutButton = document.getElementById("about-me");
const projectButton = document.getElementById("projects");
const workButton = document.getElementById("work-exp");
const skillsButton = document.getElementById("skills");
const clubsButton = document.getElementById("clubs");
let mainPage = document.getElementById("main-page");

async function loadPage(url)
{
  let response = await fetch(url);
  let html = await response.text();
  mainPage.innerHTML = html;
}

window.addEventListener("load", function(){
  loadPage("pages/about.html");
})


aboutButton.addEventListener("click", function() {
    darkenNavBar(aboutButton);
    loadPage("pages/about.html");
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


projectButton.addEventListener("click", async function() {
    darkenNavBar(projectButton);
    await loadPage("pages/project.html");
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

    

    const project8 = document.getElementById("project8");
    project8.addEventListener("click", function(){
    window.open("https://github.com/melissaregal/ec311project_gr7")
    })
    });


workButton.addEventListener("click", function() {
  darkenNavBar(workButton);
  loadPage("pages/work.html");
      });


skillsButton.addEventListener("click", function() {
  darkenNavBar(skillsButton);
  loadPage("pages/skills.html");
      });


clubsButton.addEventListener("click", function() {
  darkenNavBar(clubsButton);
  loadPage("pages/clubs.html");
      });


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

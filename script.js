window.addEventListener("load", function(){

  const container = document.getElementById("container");
  container.innerHTML = '';
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json) {
      json.sort(function(astronaut1, astronaut2){return Number(astronaut2.hoursInSpace)-Number(astronaut1.hoursInSpace)});
      document.getElementsByTagName("h1")[0].innerHTML = `Astronauts : ${json.length}`;
      for (let astronaut of json){
        let activeColor = "black";
        if (Boolean(astronaut.active)){
          activeColor = "green";
        }
        container.innerHTML += `
          <div class="astronaut" id=${astronaut.id}>
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li style="color:${activeColor};">Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills}</li>
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}">
        </div>`;
      }  
    });
  });
});
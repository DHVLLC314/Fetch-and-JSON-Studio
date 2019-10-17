// TODO: add code here
window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {

   response.json().then( function(json) {
    const div = document.getElementById("container")
    console.log(json)
    console.log(typeof json)
      for(let key in json){
        div.innerHTML += `
        <div class='astronaut'>
          <div class='bio'>
            <h3>${json[key].firstName} ${json[key].lastName}</h3>
            <ul>
              <li>Hours in space: ${json[key].hoursInSpace}</li>
              <li>Active: ${json[key].active}</li>
              <li>Skills: ${json[key].skills}</li>
            </ul>
          </div>
          <img class="avatar" src="${json[key].picture}"></img>
        </div>`
      }
 });
} );
});
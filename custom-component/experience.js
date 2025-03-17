



async function loadRemoteData() {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/67d779e58a456b7966773132');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData.record.experiences);
        const experiences = jsonData.record.experiences;


        //LCAL STORAGE

        localStorage.setItem("experiences", JSON.stringify(experiences));
        console.log("Saved to local storage");

        //Cloud storage
        displayExperiences(experiences);
        //get container for experience section


    } catch (error) {
        console.error('There was an error fetching data:', error);

    }
}



function loadLocalData() {
    //Get stored data from local storage
    const storedExperiences = localStorage.getItem("experiences");

    if (!storedExperiences) {
        console.log("Local data is missing, please load remote data first")
        return;
    }

    const experiences = JSON.parse(storedExperiences);
    displayExperiences(experiences);


}


function displayExperiences(experiences) {
    const container = document.querySelector(".experience-page");

    container.innerHTML =
        `
            <button id="load-local">Load Local</button>
            <button id="load-remote">Load Remote</button>
        `;

    experiences.forEach(exp => {
        const expCard = document.createElement('experience-card');
        expCard.setAttribute("title", exp.title);
        expCard.setAttribute("company", exp.company);
        expCard.setAttribute("dates", exp.dates);
        expCard.setAttribute("description", exp.description);
        expCard.setAttribute("img-src", exp.imgSrc);
        expCard.setAttribute("img-alt", exp.imgAlt);
        expCard.setAttribute("link", exp.link);
        expCard.setAttribute("link-text", exp.linkText);

        container.appendChild(expCard);

        document.getElementById("load-local").addEventListener("click", loadLocalData);
        document.getElementById("load-remote").addEventListener("click", loadRemoteData);
    });
}

document.getElementById("load-local").addEventListener("click", loadLocalData);
document.getElementById("load-remote").addEventListener("click", loadRemoteData);
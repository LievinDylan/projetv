// On vérifie que tout va bien
console.log("C'est OK")

// Appel de l'API regroupant la liste des agents
async function fetchAgents() {
    const url = "https://valorant-api.com/v1/agents"
    const httpResponse = await fetch(url);
    const agents = await httpResponse.json();
    console.log(agents.data)

// Selection de la div contenant les cards agents
const agentContainer = document.querySelector("#agents-list");

// Pour chaque agent :
agents.data.forEach(agent => {
    if (agent.isPlayableCharacter === true) {
    // on créée une div avec la classe card
    const agentCard = document.createElement("div");
    agentCard.classList.add("card");
    // on créée et on insert les données de l'API dans des balises correspondantes
    // L'image de l'agent
    const agentIcon = document.createElement("img");  
    agentIcon.setAttribute("src", `${agent.displayIcon}`);
    agentIcon.setAttribute("alt", `Une icone de ${agent.displayName}`);    
    agentIcon.classList.add("icon");

    // Le nom de l'agent
    const agentName = document.createElement("h2");
    agentName.innerText = `${agent.displayName}`;

    //La description de l'agent
    const agentDesc = document.createElement("p");
    agentDesc.innerText = `${agent.description}`;

    //Le rôle de l'agent
    const agentRole = document.createElement("h4");
    agentRole.classList.add("role")
    agentRole.innerText = `${agent.role.displayName}`;
    const agentRoleIcon = document.createElement("img");
    agentRoleIcon.classList.add("role-icon");    
    agentRole.appendChild(agentRoleIcon)
    agentRoleIcon.setAttribute("src", `${agent.role.displayIcon}`);

    // on ajoute la div "card" dans la div "agents-list" puis on ajoute les balises dans la div "card"
    agentContainer.appendChild(agentCard);
    agentCard.appendChild(agentIcon);
    agentCard.appendChild(agentName);
    agentCard.appendChild(agentRole)
    agentCard.appendChild(agentDesc);
    }
});
};

fetchAgents();
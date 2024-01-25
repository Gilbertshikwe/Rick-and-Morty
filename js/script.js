function getCharacters() {
    let content = document.getElementById('content');
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            let output = '';

            data.results.forEach(character => {
                output += `
                    <div class="character-card">
                        <img class="character-image" src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                        <p>Status: ${character.status}</p>
                        <p>Species: ${character.species}</p>
                        <p>Gender: ${character.gender}</p>
                        <p>Origin: ${character.origin.name}</p>
                        <p>Location: ${character.location.name}</p>
                        
                        <!-- Gallery with only the main image for now -->
                        <div class="gallery">
                            <img src="${character.image}" alt="Main Image">
                        </div>
                    </div>
                `;
            });

            content.innerHTML = output;
        })
        .catch(error => console.log(error));
}

function initialize() {
    getCharacters();
}

initialize();

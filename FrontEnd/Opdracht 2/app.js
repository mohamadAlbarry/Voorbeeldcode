const container = document.getElementById('poke_container');

x=1;
y=20;
// Hier heb ik twee variables gemaakt om te bepalen het aantal pokemons dat op mijn index pagina aanwezig is.
// Ik heb die parameters helemaal los gelaten en niet in de fetchPokemons function omdat ik ze later nodig heb met de Next en Back buttons

async function fetchPokemons() {
    for (let id = x; id <= y; id++) {
        await getPokemon(id);
    }
};
// Hier heb ik voor een asynchronous function gekozen omdat ik binnen deze function een andere function ga roepen die promises gebruikt.
// Asynchronous functies laten js met meerdere taken bezig zijn.

async function getPokemon(id) {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);

	displayPokemon(data);
};

// Hier maak ik gebruik van "await", Dit betekent dat mijn procces is tijdelijk gepauzeerd tot dat mijn gemaakte promises zijn ingevuld

function displayPokemon(data) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');
	const pokemonInnerHTML = `
		<li class="card" onclick="selectPokemon(${data.id})">
		<img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" />
		<h2 class="card-title">${data.id}. ${data.name}</h2>
		</li>`
	;
	pokemonEl.innerHTML = pokemonInnerHTML;
	poke_container.appendChild(pokemonEl);
};

function next() {
    remove();
    x+=20;
    y+=20;
    fetchPokemons();
}

function remove()
{
    document.getElementById("poke_container").innerHTML ="";
}

function back() {
    if(x<=1)
    {
        location.reload();
    }else
    {
        remove();
        x -= 20;
        y -= 20;
        fetchPokemons();
    }
}

 async function selectPokemon(id) {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	displayPopup(data);
};

function displayPopup(data) {
	const htmlString = 
	`	<div class="popup">
			<div class="card">
			<button id="closeBtn" style="background-color: red; color: white; float: left; margin: -40px" onclick="closePopup()">X</button>
			<img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" />
			<h2 class="card-title">${data.id}. ${data.name}</h2>
			<p><small>Height: </small>${data.height}
			 | <small>Weight: </small>${data.weight}
			 | <small>Ability: </small>${data.abilities[0].ability.name}
			</p>
			</div>
		</div>
	`
	;
	container.innerHTML = htmlString + container.innerHTML;
};

const closePopup = () => {
	const popup = document.querySelector('.popup');
	popup.parentElement.removeChild(popup);
};

fetchPokemons();
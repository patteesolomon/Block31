// Api pre URL
const API = `http://localhost:8080`;
const petList = document.getElementById('pet-list');
const getPets = async () => {
    let k;
    await fetch(`${API}/api/v1/pets`)
        .then((resp) => {k = resp.json();})
        .then((data) => {
            console.log({data});
        })
        .catch((err) => console.log(err));
    return k;
};

const displayPets = async (pets) => {
    
    petList.innerHTML = '';
    pets.forEach((pet) => {
        const form = document.createElement('div');
        form.innerHTML = `
        <div class="card">
            <div class="card-body"}>
            <div>
                <p>${pet.name}</p>
                <p>${pet.breed}</p>
                <p>${pet.age}</p>
                <p>${pet.owner}</p>
                <p>${pet.telephone}</p>
            </div>
            </div>
        </div>
        <br/>
        `;
        form.innerHTML += (`<p>${pet.appointments.map((e) => [
            {
                date: e.date,
                time: e.time,
                reason: e.reason
            }
        ]
        )}
        </p>`)
        petList.appendChild(form);
    });
};

const displayPet = async (pet) => {
    const petList = document.querySelector('#pet-list');
    petList.innerHTML = '';
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="card">
        <div class="card-body">
        <p>${pet.name}</p>
        <p>${pet.owner}</p>
        <p>${pet.age}</p>
        <p>${pet.owner}</p>
        <p>${pet.telephone}</p>
        </div>
    </div>
    <br/>
    `;
    form.innerHTML += (`
        <p>
            ${pet.appointments.map((e) => [
                {
                    date: e.date,
                    time: e.time,
                    reason: e.reason
                }
            ]
        )}
        </p>
    `)
    petList.appendChild(li);

};

const searchPetsByName = async (d) => {
    const search = d;
    let k;
    await fetch(`${API}/api/v1/pets/name?name=${search}`)
        .then((res) => { k = res.json() })
        .then((data) => {
            console.log({ data });
        })
        .catch((err) => console.log(err));
    let jsonResp = await k.json();
    return jsonResp;
};

const searchPetsByOwner = async (d) => {
    const resp = await fetch(`${API}/api/v1/pets/owner/${d}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err));
    jsonResp = await resp.json();
    return jsonResp;
}

const renderPets = async () => {
    // could NOT get the other search functions to work
    // could NOT render the inner objects in the array
    const pets = await getPets();
    await displayPets(pets);
}
 
renderPets();
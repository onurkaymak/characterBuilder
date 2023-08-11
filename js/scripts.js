// Business Logic
function charBuilder(charInfo) {

    const character = {
        charName: charInfo.name,
        charAge: charInfo.age,
        charPersonality: null,
        charStrength: null,
        charColor: charInfo.color
    }

    if (charInfo.personality === "1") {
        character.charPersonality = 'Aggresive';
    }
    else {
        character.charPersonality = 'Calm'
    }

    if (charInfo.strength === 0) {
        character.charStrength = 'Weak';
    }
    else if (charInfo.strength === 1) {
        character.charStrength = 'Normal';
    }
    else {
        character.charStrength = 'Strong';
    }

    return character;
}

// User Interface Logic
function handleSubmission(event) {
    event.preventDefault();

    const name = document.querySelector("input#input_name").value;
    const age = parseInt(document.querySelector("input#input_age").value);
    const personality = document.getElementById("input_personality").value;
    const strength = document.querySelector("input#input_strength").value;
    const color = document.getElementById("color").value;
    const p = document.getElementById('output').innerText;

    if (name === "") {
        return document.getElementById('output').innerText = 'Sorry you cannot do that!';
    }

    let charInfo = {
        name,
        age,
        personality,
        strength,
        color
    };

    let result = charBuilder(charInfo);

    document.getElementById("output").innerText = `Your character name is ${result.charName}, ${result.charAge} years old, ${result.charPersonality} personality, ${result.charStrength} body strength and wears a ${result.charColor} t-shirt.`
}

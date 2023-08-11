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

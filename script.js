// Quiz data
const questions = [
    "1. WHAT IS THE GACHA GAME MADE BY HOYOVERSE, IT IS ALSO KNOWN AS THE BEST GAME OF 2021?",
    "2. WHAT IS THE GAME CURRENCY OF BLUE ARCHIVE CALLED?",
    "3. WHAT GACHA GAME IS KNOWN FOR HAVING WARSHIPS AS ITS CHARACTERS?",
    "4. WHICH GACHA GAME CHARACTER IS POPULAR FOR BEING THE HOTTEST CHARACTER IN HER GAME?",
    "5. WHO IS THE FOUNDER OF GACHA GAMES GENSHIN, HONKAI AND STARRAIL?",
    "6. WHO AMONG THESE CHARACTERS ARE POPULAR FOR HAVING A FRENCH MAGICIAN HAT?",
    "7. WHAT GACHA GAME IS KNOWN FOR BEING THE MOST REVEALING LD2'S DESPITE ITS AGE REQUIREMENTS OF 12+? THIS GAME IS A SHOOTING GAME.",
    "8. WHO IS THIS GACHA CHARACTER WHICH IS CONTROVERSIAL IN X FOR HAVING WHITE SKIN DESPITE BEING IN A NATION THAT IS SUPPOSED TO BE BASED ON EAST ASIA AND ARABIA?",
    "9. WHO IS THIS GACHA CHARACTER THAT IS KNOWN FOR BEING A SHARK MAID IN HER GAME?",
    "10. A VIDEO GAME THAT IMPLEMENTS THE ________ MACHINE STYLE MECHANICS. SIMILAR TO LOOT BOXES, THIS GAME ENTICES PLAYERS TO SPEND IN-GAME CURRENCY TO RECEIVE A RANDOM ITEM.",
    "11. WHAT GACHA GAME IS CALLED WHERE A WOMAN MC TRIES TO INVESTIGATE A REVERSE TIME INCIDENT?",
    "12. AZURE LANE'S MOST POPULAR SHIP IN 2024?",
    "13. BLUE ARCHIVE'S MAIN ANTAGONIST IS?",
    "14. WHAT ARE HONKAI STARRAIL'S CORRECT TYPES?",
    "15. WUTHERING WAVES RELEASE DATE WAS?",
    "16. GACHA GAME THAT TRIED TO COMPETE WITH GENSHIN BUT FAILED?",
    "17. WHAT IS THE NAME OF THIS GACHA GAME WHICH CONSISTS OF CHARACTERS THAT HAVE ANIMALISTIC FEATURES OR FULL ANIMAL BODIES?, IS A TOWER DEFENSE GAME?",
    "18. COUNTRY ORIGIN OF GACHA GAMES?",
    "19. WHAT ARE CALLED TO THE GODS IN THE GAME GENSHIN IMPACT?",
    "20. WHAT GACHA GAME COMPANY IS THE MULTIBILLIONAIRE HERE?"
];

const options = [
    ["A. HONKAI IMPACT 3RD", "B. GENSHIN IMPACT", "C. ZELDA BREATH OF THE WILD", "D. ELDEN RING"],
    ["A. PRIMOGEMS", "B. SHARDS", "C. PYROXENES", "D. GOLDEN TICKETS"],
    ["A. AZURE LANE", "B. PRICONNE", "C. NIKKE", "D. KANTAI COLLECTION"],
    ["A. ANIS", "B. KARIN", "C. RAIDEN EI", "D. MARCH 7TH"],
    ["A. DA WEI", "B. XI JINPING", "C. ROBERT WHITE", "D. ARONA"],
    ["A. VERTIN", "B. LYNEY", "C. LYNETTE", "D. FURINA"],
    ["A. AZURE LANE", "B. NIKKE: GODDESS OF VICTORY", "C. REVERSE 1999", "D. BLUE ARCHIVE"],
    ["A. CYNO", "B. IORI", "C. NAHIDA", "D. AETHER"],
    ["A. KARIN", "B. ASUNA", "C. JANE DOE", "D. ELLEN JOE"],
    ["A. MOBA", "B. MMORPG", "C. TRIPLE A", "D. GACHA GAMES"],
    ["A. TIME REVERSE", "B. REVERSE 2024", "C. TIME TRAVEL PARADOX", "D. REVERSE 1999"],
    ["A. AGIR", "B. SHINANO", "C. KEARSARGE", "D. MUSHASHI"],
    ["A. SHIROKO TERROR", "B. BLACK SUIT", "C. MAESTRO", "D. PHRENAPATES"],
    ["A. ANEMO, HYDRO, ELECTRO, GEO, DENDRO, CRYO, PYRO", "B. FIRE, ELECTRIC, ICE, PHYSICAL, ETHER", "C. PHYSICAL, FIRE, ICE, LIGHTNING, WIND, QUANTUM, IMAGINARY", "D. NONE"],
    ["A. MAY 21 2024", "B. MAY 22 2024", "C. MAY 15 2024", "D. MAY 24 2024"],
    ["A. MOBILE LEGENDS: BANGBANG", "B. WUTHERING WAVES", "C. TOWER OF FANTASY", "D. ZELDA: BREATH OF THE WILD"],
    ["A. ARKNIGHTS", "B. ZENLESS ZONE ZERO", "C. ARC KNIGHTS", "D. GENSHIN IMPACT"],
    ["A. CHINA", "B. USA", "C. SOUTH KOREA", "D. JAPAN"],
    ["A. ARCHONS", "B. THE SEVEN", "C. FAIRIES", "D. SUPERNATURAL BEINGS"],
    ["A. KURO GAMES", "B. NEXON", "C. HOYOVERSE/MIHOYO", "D. YOSTAR"]
];

const answers = ["B", "C", "A", "C", "A", "D", "B", "C", "D", "D", "D", "B", "D", "C", "B", "C", "A", "D", "A", "C"];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    // Update question
    questionElement.textContent = questions[currentQuestionIndex];

    // Clear existing options
    optionsContainer.innerHTML = "";

    // Display new options
    options[currentQuestionIndex].forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="option" value="${String.fromCharCode(65 + index)}"> ${option}`;
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement("br"));
    });
}

function handleNextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        if (selectedAnswer === answers[currentQuestionIndex]) {
            score++;
        }
        currentQuestionIndex++;

        // Update score display
        document.getElementById("score").textContent = "Score: " + score;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayFinalScore();
        }
    } else {
        alert("Please select an answer!");
    }
}

function displayFinalScore() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");

    // Hide options and next button
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";

    // Display final score
    questionElement.textContent = `Quiz Complete! Your final score is: ${score}`;
}

// Initialize the first question
displayQuestion();

// gameLevels.js

const allWordsDictionary = [
    // Aerolineas
    "AVIANCA", "LATAM", "IBERIA", "EMIRATES", "LUFTHANSA",
    "RYANAIR", "EASYJET", "QANTAS", "DELTA", "UNITED",
    "AMERICAN", "AIRFRANCE", "KLM", "QATAR", "COPA",
    "AEROMEXICO", "VOLARIS", "VIVA", "BRITISH", "JAPAN",
    // Animales
    "TIGRE", "LEON", "ELEFANTE", "JIRAFA", "CANGURO", "PINGUINO",
    "COCODRILO", "MURCIELAGO", "RINOCERONTE", "HIPOPOTAMO", "CHIMPANCE",
    "SERPIENTE", "AGUILA", "TORTUGA", "DELFIN", "BALLENA",
    // Otras tematicas (Espacio, Computacion, Generales)
    "ASTRONAUTA", "PLANETA", "GALAXIA", "METEORITO",
    "COMPUTADORA", "INTERNET", "PROGRAMA", "TECLADO",
    "PANTALLA", "SISTEMA", "SOFTWARE", "HARDWARE",
    "GUITARRA", "PIANO", "BATERIA", "VIOLIN",
    "ESCUELA", "UNIVERSIDAD", "BIBLIOTECA", "MUSEO"
];

function getRandomWords(dictionary, count, lengthMax = 20) {
    const validWords = dictionary.filter(w => w.length <= lengthMax);
    const shuffled = validWords.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function getLevelConfig(levelNumber) {
    // Calculamos a qué grupo de 10 pertenece el nivel.
    // Nivel 1-10 -> Grupo 0, Nivel 11-20 -> Grupo 1, etc.
    const chunkIndex = Math.floor((levelNumber - 1) / 10);
    
    // Reglas base que van aumentando según "secciones de 10 en 10"
    // Empezamos fácil y se va complicando
    const baseGridSize = 8 + (chunkIndex * 1); // 8, 9, 10, 11... max 18
    const baseWordCount = 4 + chunkIndex;      // 4, 5, 6, 7... max 14
    const baseTime = 60 - (chunkIndex * 2);    // 60, 58, 56... min 30
    
    const gridSize = Math.min(18, baseGridSize);
    const wordCount = Math.min(16, baseWordCount);
    const timeSeconds = Math.max(30, baseTime);
    
    // Diagonales e invertidas se activan en grupos más avanzados
    const allowDiagonals = chunkIndex >= 1; // A partir del nivel 11
    const allowReverse = chunkIndex >= 2;   // A partir del nivel 21

    const words = getRandomWords(allWordsDictionary, wordCount, gridSize);

    return {
        level: levelNumber,
        gridSize,
        wordCount,
        timeSeconds,
        allowDiagonals,
        allowReverse,
        words
    };
}

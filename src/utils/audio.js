// audio.js - Web Audio API Beep utility

let audioCtx = null;
let soundEnabled = true;

export const setSoundEnabled = (enabled) => {
    soundEnabled = enabled;
};

const getCtx = () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
};

export const playBeep = (freq = 600, duration = 150, type = 'sine', startTimeOffset = 0) => {
    if (!soundEnabled) return;
    try {
        const ctx = getCtx();
        const startTime = ctx.currentTime + startTimeOffset;

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = type;
        oscillator.frequency.value = freq;

        // Envelope to avoid clicking
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.02);
        gainNode.gain.linearRampToValueAtTime(0, startTime + (duration / 1000));

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + (duration / 1000) + 0.1);
    } catch (e) {
        console.warn("AudioContext no configurado o no soportado:", e);
    }
};

export const playAlertSound = () => {
    // Sharp alert double-buzzer for losing a single life
    playBeep(350, 150, 'sawtooth', 0);
    playBeep(350, 200, 'sawtooth', 0.2);
};

export const playAnguishSound = () => {
    // Sad trombone sequence for total game over (all lives lost)
    playBeep(300, 300, 'triangle', 0);
    playBeep(280, 300, 'triangle', 0.3);
    playBeep(260, 300, 'triangle', 0.6);
    playBeep(220, 800, 'triangle', 0.9);
};

import React, { useState } from 'react';
import AllAboard from './audio/AllAboard.mp3';
import Train from './assets/images/CrazyTrain.png';
import Tom from './assets/images/Tom.jpg';

const Child2 = () => {
    const [count, setCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [currentRandomFile, setCurrentRandomFile] = useState('');

    const audioFiles = [
        { label: 'm2nd', file: './src/audio/minor2nd.mp3' },
        { label: 'm2ndRev', file: './src/audio/minor2ndreverse.mp3' },
        { label: 'M2nd', file: './src/audio/major2nd.mp3' },
        { label: 'M2ndRev', file: './src/audio/major2ndreverse.mp3' },
        { label: 'm3rd', file: './src/audio/minor3rd.mp3' },
        { label: 'm3rdRev', file: './src/audio/minor3rdreverse.mp3' },
        { label: 'M3rd', file: './src/audio/major3rd.mp3' },
        { label: 'M3rdRev', file: './src/audio/major3rdreverse.mp3' },
        { label: 'P4th', file: './src/audio/perfect4th.mp3' },
        { label: 'P4thRev', file: './src/audio/perfect4threverse.mp3' },
        { label: 'D5th', file: './src/audio/diminished5th.mp3' },
        { label: 'D5thRev', file: './src/audio/diminished5threverse.mp3' },
        { label: 'P5th', file: './src/audio/perfect5th.mp3' },
        { label: 'P5thRev', file: './src/audio/perfect5threverse.mp3' },
        { label: 'A5th', file: './src/audio/augmented5th.mp3' },
        { label: 'A5thRev', file: './src/audio/augmented5threverse.mp3' },
        { label: 'M6th', file: './src/audio/major6th.mp3' },
        { label: 'M6thRev', file: './src/audio/major6threverse.mp3' },
        { label: 'm7th', file: './src/audio/minor7th.mp3' },
        { label: 'm7thRev', file: './src/audio/minor7threverse.mp3' },
        { label: 'M7th', file: './src/audio/major7th.mp3' },
        { label: 'M7thRev', file: './src/audio/major7threverse.mp3' },
        { label: 'Octave', file: './src/audio/octave.mp3' },
        { label: 'OctaveRev', file: './src/audio/octavereverse.mp3' }
    ];

    const handleComparison = (audioFile) => {
        if (audioFile === currentRandomFile) {
            setCount(prevCount => prevCount + 1);
            const incrementDisplay = document.getElementById('increment-display');
            if (incrementDisplay) {
                incrementDisplay.textContent = `CRAZY GOOD! You've been right ${count + 1} time/s.`;
                incrementDisplay.style.color = 'white';
                incrementDisplay.style.fontSize = '25px';
                const img = document.createElement('img');
                img.src = Train;
                img.alt = 'The Crazy Train';
                img.id = 'mozart';
                incrementDisplay.appendChild(img);
            }
        } else {
            setWrongCount(prevWrongCount => prevWrongCount + 1);
            const decreaseDisplay = document.getElementById('decrease-display');
            if (decreaseDisplay) {
                decreaseDisplay.innerHTML = `BLEAH! You've had the earing of Tom Morello ${wrongCount + 1} time/s.`;
                decreaseDisplay.style.color = 'white';
                decreaseDisplay.style.fontSize = '25px';
                const img1 = document.createElement('img');
                img1.src = Tom;
                img1.alt = 'Tom Morello';
                img1.id = 'morello';
                decreaseDisplay.appendChild(img1);
            }
        }
    };

    const randomPlay = () => {
        let rValue = Math.floor(Math.random() * audioFiles.length);
        const audio = new Audio(audioFiles[rValue].file);
        setCurrentRandomFile(audioFiles[rValue].file);
        audio.play();
    };

    const handleClick = (file) => {
        const audio = new Audio(file);
        audio.play();
        handleComparison(file);
    };

    const playAllAboard = () => {
        const audio = new Audio(AllAboard);
        audio.play();
    };

    const resetBtn = () => {
        const incrementDisplay = document.getElementById('increment-display');
        const decreaseDisplay = document.getElementById('decrease-display');
        setCount(0);
        setWrongCount(0);
        incrementDisplay.textContent = ``;
        decreaseDisplay.innerHTML = ``;
        const img = document.createElement('img');
                img.src = Train;
                img.alt = 'The Crazy Train';
                img.id = 'mozart';
                incrementDisplay.appendChild(img);
        const img1 = document.createElement('img');
                img1.src = Tom;
                img1.alt = 'Tom Morello';
                img1.id = 'morello';
                decreaseDisplay.appendChild(img1);
    }

    return (
        <>
            <div className="CD2">
                <div id="random-btn-container">
                    <button
                        id="play-btn"
                        className="mozart-button"
                        onClick={randomPlay}
                    >
                        Random
                    </button>
                </div>
                <div className="btn-container">
                    {audioFiles.map((audio, index) => (
                        <button key={index} className="btnBorder" onClick={() => handleClick(audio.file)}>
                            {audio.label}
                        </button>
                    ))}
                </div>
                <div id="resetBtn">
                    <button id="reset-btn" className="reset-button" onClick={() => resetBtn()}>
                        Reset
                    </button>
                    <button
                        id="call-Ozzy"
                        className="call-Ozzy"
                        onClick={playAllAboard}
                    >
                        Call Ozzy
                    </button>
                </div>

               
            </div>
        </>
    );
};

export default Child2;

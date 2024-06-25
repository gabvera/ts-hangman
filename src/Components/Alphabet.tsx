import { Letter } from '../App';

const Alphabet = ({ alphabet, getLetter }: { alphabet: Letter[], getLetter: (letter: string) => void }) => {
    return (
        <div className="alphabet-container">
            {alphabet.map((item) => (
                <button
                    onClick={() => getLetter(item.letter)}
                    key={item.letter}
                    className={item.clicked ? "letter clicked" : "letter"}
                    value={item.letter}
                >
                    {item.letter}
                </button>
            ))}
        </div>
    );
};

export default Alphabet;
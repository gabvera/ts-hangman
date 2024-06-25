import {Attempts} from '../App'

const Head = ({attempts}: {attempts: Attempts}) => {
    return(
        <div className="body-head">
            {attempts.number === 6 &&
                <div className="face-container">
                    <div className="right-eye"></div>
                    <div className="second-right-eye"></div>
                    <div className="left-eye"></div>
                    <div className="second-left-eye"></div>
                    <div className="mouth"></div>
                </div>
            }
        </div>
    )
}

const Body = () => {
    return(
        <div className="body-body"></div>
    )
}

const RightHand = () => {
    return(
        <div className="body-r-hand"></div>
    )
}

const LeftHand = () => {
    return(
        <div className="body-l-hand"></div>
    )
}

const LeftLeg = () => {
    return(
        <div className="body-l-leg"></div>
    )
}

const RightLeg = () => {
    return(
        <div className="body-r-leg"></div>
    )
}

const HangmanDrawing = ({attempts, gameWon}: {attempts: Attempts, gameWon: boolean}) => {

    return(
        <div className="hangman-container">
            {gameWon ? <h2 className='game-status'>Congratz You Won! Refresh to Restart</h2> : <h2 className="game-status">{attempts.number == 6 ? "Game Over! Refresh to Restart" : "New Game"}</h2>}
            <div className="hangman-structure">
                <div className="structure-top"></div>
                <div className="structure-down"></div>
                <div className="structure-base"></div>
                <div className="structure-hang"></div>
                {attempts.number >= 1 && <Head attempts={attempts} />}
                {attempts.number >= 2 && <Body />}
                {attempts.number >= 3 && <RightHand />}
                {attempts.number >= 4 && <LeftHand />}
                {attempts.number >= 5 && <LeftLeg />}
                {attempts.number >= 6 && <RightLeg/>}
            </div>
        </div>
    )
}

export default HangmanDrawing
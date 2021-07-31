import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdouwnContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const {resetCountdwn} = useContext(CountdownContext)

    
    function handlechallengeSucceeded(){
        completeChallenge()
        resetCountdwn()
    }

    function handlechallengeFailed(){
        resetChallenge()
        resetCountdwn()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                        type='button'
                        className={styles.challengeFailedButton}
                        onClick={handlechallengeFailed}
                        >Falhei</button>
                        <button
                        type='button'
                        className={styles.challengeSucceededButton}
                        onClick={handlechallengeSucceeded}
                        >Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}
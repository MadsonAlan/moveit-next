import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdouwnContext'
import styles from '../styles/components/Countdown.module.css'


let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdwn
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    

    return (
        <div>
            <div className={styles.CountdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdwn}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}>
                            Iniciar ciclo
                        </button>
                    )}
                </>
            )}



        </div>
    )
}
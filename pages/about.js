import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About(){
    return(
        <>
            <div className={styles.about}>
                <h1>Sobre o projeto</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Image 
                    src="/images/charizard.png"
                    width="350"
                    height="300"
                    alt="charizard"
                />
            </div>
        </>
    )
}
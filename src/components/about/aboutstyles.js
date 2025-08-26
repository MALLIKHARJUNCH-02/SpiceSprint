const AboutStyles = {
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    FAQ: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Accordion: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    About: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',       // Fill viewport width for proper centering
        height: '100vh',      // Full viewport height for vertical centering
        textAlign: 'center',  // Center text
        marginTop: '25px',
    },
    Inner: {
        maxWidth: '800px',    // Optional: makes text blocks easier to read
        width: '100%',
    }
}

export default AboutStyles;
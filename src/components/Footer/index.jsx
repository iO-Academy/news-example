import './Footer.css'

function Footer({textLeft, textRight}) {
    return (
        <footer>
            <p>{textLeft}</p>
            <p>{textRight}</p>
        </footer>
    )
}

export default Footer
import './NewsCard.css'

function NewsCard({title, image, category, alt, link}) {
    return (
        <div className='news-card'>
            <a href={link}>
                <img src={image} alt={alt} />
                <h3>{title}</h3>
                <p>{category}</p>
            </a>
        </div>
    )
}

export default NewsCard
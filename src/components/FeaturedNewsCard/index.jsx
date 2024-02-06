import './FeaturedNewsCard.css'

function FeaturedNewsCard({title, description, image, category, alt, link}) {
    return (
        <div className='featured-news-card'>
            <a href={link}>
                <img src={image} alt={alt} />
                <h3>{title}</h3>
                <p>{category}</p>
                <p>{description}</p>
            </a>
        </div>
    )
}

export default FeaturedNewsCard
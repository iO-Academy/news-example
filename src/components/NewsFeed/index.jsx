import FeaturedNewsCard from "../FeaturedNewsCard"
import NewsCard from "../NewsCard"
import './NewsFeed.css'

function NewsFeed() {
    return (
        <section className="news-feed">
            <FeaturedNewsCard
                 title='Featured Article ' 
                 category='Breaking News' 
                 image='https://ichef.bbci.co.uk/news/976/cpsprodpb/7468/production/_132500892_jess2.jpg.webp' 
                 alt="Example alt text" 
                 description='Very important news!'
                 link='#'
            />
            <NewsCard 
                title='Article 1' 
                category='Breaking News' 
                image='https://ichef.bbci.co.uk/news/976/cpsprodpb/7468/production/_132500892_jess2.jpg.webp' 
                alt="Example alt text" 
                link='#'
            />

            <NewsCard 
                title='Article 2' 
                category='Local News' 
                image='https://ichef.bbci.co.uk/news/976/cpsprodpb/7468/production/_132500892_jess2.jpg.webp' 
                alt="Example alt text" 
                link='#'
            />

            <NewsCard 
                title='Article 2' 
                category='Breaking News' 
                image='https://ichef.bbci.co.uk/news/976/cpsprodpb/7468/production/_132500892_jess2.jpg.webp' 
                alt="Example alt text" 
                link='#'
            />
        </section>
    )
}

export default NewsFeed
import HeadingTitle from './UI/HeadingTitle'
import DestinationCard from './UI/DestinationCard'
import { Destination1, Destination2, Destination3, Destination4, Destination5, Destination6 } from '../assets';

const Destination = () => {
    return (
        <>
            <HeadingTitle miniTitle='TOP DESTINATION' title='Explore Top Destination' />
            <div className="card">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap justify-center -m-4">
                            {
                                topDestinations?.map((destination) => <DestinationCard key={destination._id} destination={destination} />)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Destination;


const topDestinations = [
    {
        _id: "1",
        title: "Paris, France",
        categories: ["Europe", "City", "Culture"],
        description: "Experience the romance and charm of Paris, the capital of France. Explore iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Indulge in delicious cuisine, stroll along the Seine River, and immerse yourself in the city's rich culture.",
        comments: ["Beautiful city!", "Absolutely loved my visit!"],
        visitor: 1500,
        destinationImg: Destination1
    },
    {
        _id: "2",
        title: "Kyoto, Japan",
        categories: ["Asia", "City", "History"],
        description: "Discover the ancient capital of Japan, Kyoto, renowned for its stunning temples, traditional tea houses, and beautiful gardens. Visit historic sites such as Kinkaku-ji (Golden Pavilion), Fushimi Inari Shrine, and Arashiyama Bamboo Grove. Experience the serenity and beauty of Japanese culture.",
        comments: ["Kyoto is magical!", "Such a peaceful city.", "Good Visitor"],
        visitor: 1200,
        destinationImg: Destination2
    },
    {
        _id: "3",
        title: "Cape Town, South Africa",
        categories: ["Africa", "City", "Nature"],
        description: "Explore the breathtaking beauty of Cape Town, situated at the southern tip of Africa. Marvel at the iconic Table Mountain, relax on stunning beaches like Camps Bay, and visit historic landmarks such as Robben Island. Experience vibrant culture, delicious cuisine, and incredible wildlife.",
        comments: ["Cape Town stole my heart!", "Unforgettable experience!"],
        visitor: 1800,
        destinationImg: Destination3
    },
    {
        _id: "4",
        title: "New York City, USA",
        categories: ["North America", "City", "Culture"],
        description: "Discover the vibrant energy and diversity of New York City, the cultural capital of the United States. Explore iconic landmarks such as Times Square, Statue of Liberty, and Central Park. Immerse yourself in world-class museums, Broadway shows, and diverse cuisine.",
        comments: ["The city that never sleeps!", "So much to see and do!"],
        visitor: 2200,
        destinationImg: Destination4
    },
    {
        _id: "5",
        title: "Sydney, Australia",
        categories: ["Australia", "City", "Nature"],
        description: "Experience the beauty of Sydney, Australia's largest city, known for its stunning harbor, iconic Sydney Opera House, and picturesque beaches like Bondi and Manly. Explore vibrant neighborhoods, enjoy outdoor activities, and savor delicious cuisine.",
        comments: ["Sydney stole my heart!", "Incredible views everywhere!"],
        visitor: 1700,
        destinationImg: Destination5
    },
    {
        _id: "6",
        title: "Rio de Janeiro, Brazil",
        categories: ["South America", "City", "Nature"],
        description: "Discover the vibrant culture and natural beauty of Rio de Janeiro, Brazil. Enjoy breathtaking views from the iconic Christ the Redeemer statue, relax on the famous beaches of Copacabana and Ipanema, and experience the excitement of Carnival.",
        comments: ["Rio is amazing!", "Best vacation ever!"],
        visitor: 2000,
        destinationImg: Destination6
    }
];

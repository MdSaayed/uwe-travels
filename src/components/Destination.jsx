import HeadingTitle from './UI/HeadingTitle'
import DestinationCard from './UI/DestinationCard'

const Destination = () => {
    return (
        <>
            <HeadingTitle miniTitle='TOP DESTINATION' title='Explore Top Destination' />
            <div className="card">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap justify-center -m-4">
                            <DestinationCard/>
                            <DestinationCard/>
                            <DestinationCard/>
                            <DestinationCard/>
                            <DestinationCard/>
                            <DestinationCard/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Destination
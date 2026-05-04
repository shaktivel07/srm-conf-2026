import Image from "next/image";
import coverimage from "../../assets/plan-travel/cover.jpeg";
import { FiMapPin, FiStar, FiCamera, FiBookOpen, FiHeart } from "react-icons/fi";

export default function page() {
    return (
        <div className='flex flex-col w-full'>
            <div className='h-[30vh] md:h-[50vh] overflow-hidden relative flex justify-start items-center'>
                <Image src={coverimage} alt='bg' className='w-full object-cover md:object-fit h-full' />
                <div className="absolute flex flex-col z-10 pl-5 md:pl-20 justify-center text-white">
                    <h1 className="md:text-5xl text-white font-bold">Discover Tiruchirappalli</h1>
                    <hr className='border-t-2 md:border-t-[7px] border-white w-1/3 mt-2 md:mt-5' />
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FiMapPin className="text-2xl" /> Historical Significance</h2>
                    <p className="mb-4">Tiruchirappalli, commonly known as Trichy, has a rich historical legacy dating back over two millennia. Once a prominent stronghold of the Chola dynasty, <span className="font-medium">Trichy</span> flourished under the rule of the Nayak dynasty. Iconic landmarks such as the <span className="font-medium">Rockfort Temple</span> and the <span className="font-medium">Ranganathaswamy Temple</span> in <span className="font-medium">Srirangam</span> bear testament to the city&apos;s ancient heritage and architectural marvels.</p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FiStar className="text-2xl" />Geographical Features</h2>
                    <p className="mb-4">Nestled amidst the scenic beauty of Tamil Nadu, <span className="font-medium">Tiruchirappalli</span> boasts of the majestic Cauvery River flowing through its heart. The city is characterized by its rocky outcrops and lush greenery, creating a picturesque backdrop for its urban landscape. The surrounding agricultural region contributes significantly to the state&apos;s agricultural output, with rice paddies and verdant fields dotting the countryside.</p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FiCamera className="text-2xl" />Places to Visit</h2>
                    <ul className="list-disc pl-6">
                        <li><span className="font-medium">Ranganathaswamy Temple</span>: One of the largest functioning Hindu temples in the world, dedicated to Lord Ranganatha, an incarnation of Lord Vishnu.</li>
                        <li><span className="font-medium">Rockfort Temple</span>: A historic fort complex with rock-cut temples and a towering rock formation offering panoramic views of the city.</li>
                        <li><span className="font-medium">Srirangam Island</span>: Home to the <span className="font-medium">Sri Ranganathaswamy Temple</span>, a UNESCO World Heritage Site and one of the most important pilgrimage sites in Hinduism.</li>
                        <li><span className="font-medium">Kallanai Dam</span>: An ancient dam built across the River Kaveri, considered one of the oldest water-diversion structures in the world.</li>
                        <li><span className="font-medium">Jambukeswarar Temple</span>: A renowned Shiva temple known for its architectural grandeur and religious significance.</li>
                        <li><span className="font-medium">St. Joseph&apos;s Church</span>: A beautiful colonial-era church known for its stunning architecture and serene ambiance.</li>
                        <li><span className="font-medium">Government Museum</span>: A repository of historical artifacts, sculptures, and archaeological finds showcasing the region&apos;s rich cultural heritage.</li>
                        <li><span className="font-medium">Viralimalai Murugan Temple</span>: Situated atop a hill, this temple dedicated to Lord Murugan offers breathtaking views and spiritual solace.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FiHeart className="text-2xl" />Tourist Attractions</h2>
                    <ul className="list-disc pl-6">
                        <li><span className="font-medium">Teppakulam</span>: A massive temple tank known for its annual float festival and vibrant celebrations.</li>
                        <li><span className="font-medium">Butterfly Park</span>: A tranquil sanctuary boasting a variety of butterfly species amidst lush greenery, ideal for nature lovers and photographers.</li>
                        <li><span className="font-medium">Kudumiyanmalai Temple</span>: An ancient rock-cut cave temple adorned with exquisite sculptures and intricate carvings, offering a glimpse into the region&apos;s architectural splendor.</li>
                        <li><span className="font-medium">Puliyancholai Waterfalls</span>: A serene natural retreat nestled in the Eastern Ghats, offering refreshing dips and scenic trails for trekkers and adventure enthusiasts.</li>
                        <li><span className="font-medium">Mukkombu</span>: A popular picnic spot featuring a scenic dam and lush gardens, perfect for family outings and leisurely strolls.</li>
                        <li><span className="font-medium">Anna Science Centre Planetarium</span>: An educational and interactive facility offering insights into astronomy, space science, and technology through exhibits and multimedia presentations.</li>
                        <li><span className="font-medium">Amma Mandapam Bathing Ghat</span>: A historic bathing ghat on the banks of the River Cauvery, frequented by pilgrims and visitors seeking spiritual rejuvenation.</li>
                        <li><span className="font-medium">Rock Inscriptions of Ucchi Pillayar Temple</span>: Ancient inscriptions carved on the rock surface near the Ucchi Pillayar Temple, providing glimpses into the region&apos;s past.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FiBookOpen className="text-2xl" />Cultural Heritage</h2>
                    <p className="mb-4"><span className="font-medium">Trichy</span> is a vibrant tapestry of religious diversity and cultural vibrancy. Temples, mosques, and churches coexist harmoniously, reflecting the city&apos;s multicultural ethos. Festivals like Pongal, Diwali, and Eid are celebrated with great fervor, with colorful processions, traditional performances, and elaborate rituals that showcase the city&apos;s rich cultural heritage. Traditional arts and crafts, including bronze sculptures and silk sarees, are testament to the skill and creativity of local artisans.</p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FiStar className="text-2xl" />Modern Development</h2>
                    <p className="mb-4"><span className="font-medium">Trichy</span> is not just steeped in history; it is also a city on the move, embracing modernity while preserving its cultural roots. Esteemed educational institutions like the National Institute of Technology (NIT) and Bharathidasan University foster academic excellence and innovation. The city&apos;s strategic location and robust infrastructure have attracted industrial investment, driving economic growth and creating employment opportunities. With an international airport and well-developed road and rail networks, <span className="font-medium">Trichy</span> serves as a crucial transportation hub connecting it to major cities in India and abroad.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                    <p><span className="font-medium">Trichy</span>, with its blend of history, culture, and modernity, offers a captivating tapestry of experiences for visitors and residents alike. Whether exploring ancient temples, bustling markets, or scenic landscapes, <span className="font-medium">Trichy</span> continues to charm and inspire all who set foot in this dynamic city.</p>
                </section>
            </div>
        </div>
    );
};
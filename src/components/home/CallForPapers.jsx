import Image from "next/image";
import right from "../../assets/icons/chevron-right.svg";

export default function CallForPapers() {

    const tracks = [
        {
            number: "Track 1",
            title: "Multimodal AI & Deep Learning",
            subtopics: [
                "Multimodal learning (text, image, audio, video integration)",
                "Vision-Language Models (VLMs) & Large Language Models (LLMs)",
                "Transformer architectures & foundation models",
                "Generative AI (GANs, Diffusion Models)",
                "Cross-modal retrieval and representation learning"
            ]
        },
        {
            number: "Track 2",
            title: "Intelligent Systems & Machine Learning",
            subtopics: [
                "Supervised, unsupervised, and reinforcement learning",
                "Explainable AI (XAI) & trustworthy AI",
                "Federated and distributed learning",
                "Edge AI & TinyML",
                "AutoML and meta-learning techniques"
            ]
        },
        {
            number: "Track 3",
            title: "AI for 6G, IoT & Smart Networks",
            subtopics: [
                "AI-driven 6G communication systems",
                "Intelligent resource allocation & network optimization",
                "IoT, IIoT, and cyber-physical systems",
                "Edge-cloud collaboration",
                "Smart cities and smart infrastructure"
            ]
        },
        {
            number: "Track 4",
            title: "Cybersecurity, Privacy & Trust in AI",
            subtopics: [
                "AI for cybersecurity and threat detection",
                "Privacy-preserving AI (federated learning, differential privacy)",
                "Blockchain for secure AI systems",
                "Adversarial machine learning",
                "Trust, ethics, and responsible AI"
            ]
        },
        {
            number: "Track 5",
            title: "Quantum Computing & AI Integration",
            subtopics: [
                "Quantum machine learning (QML)",
                "Quantum algorithms and optimization",
                "Hybrid quantum-classical models",
                "Post-quantum cryptography",
                "Quantum applications in communication and security"
            ]
        },
        {
            number: "Track 6",
            title: "Data Science & Big Data Analytics",
            subtopics: [
                "Big data architectures and platforms",
                "Data mining and knowledge discovery",
                "Real-time analytics and streaming data",
                "Data visualization and decision support systems",
                "AI for data-driven innovation"
            ]
        },
        {
            number: "Track 7",
            title: "AI Applications for Sustainable Development",
            subtopics: [
                "AI for agriculture and rural development",
                "Smart healthcare & biomedical AI",
                "Climate change, environment, and energy systems",
                "AI for education and adaptive learning",
                "Social good and inclusive technologies"
            ]
        },
        {
            number: "Track 8",
            title: "Robotics, Automation & Intelligent Control",
            subtopics: [
                "Autonomous systems and robotics",
                "Human-robot interaction",
                "Industrial automation & smart manufacturing",
                "Control systems with AI",
                "Swarm intelligence"
            ]
        },
        {
            number: "Track 9",
            title: "Emerging Technologies & Innovation",
            subtopics: [
                "Digital twins and metaverse technologies",
                "AR/VR with AI integration",
                "Human-centered AI",
                "AI in fintech, legal tech, and business analytics",
                "Technology transfer and innovation ecosystems"
            ]
        },
        {
            number: "Track 10",
            title: "Entrepreneurship, Policy & Industry 5.0",
            subtopics: [
                "AI-driven startups and innovation models",
                "Technology commercialization",
                "Industry-academia collaboration",
                "Policy, governance, and ethics in AI",
                "Industry 5.0 and future workforce"
            ]
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full my-8 bg-neutral-100 py-5 scroll-m-20" id="callforpapers">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">CALL FOR <span className="text-yellow">PAPERS</span></h1>
            <div className=" flex flex-col items-center w-fit mt-5 md:mt-9">
                <div className="px-10">
                    <div className="space-y-8">
                        {tracks.map((track, index) => (
                            <div key={track.number} className="flex flex-col">
                                <h2 className="text-blue-900 font-semibold text-lg md:px-0 pb-5 md:pb-2">
                                    {track.number}: {track.title}
                                </h2>
                                <ul className="md:px-0 font-medium space-y-2">
                                    {track.subtopics.map((subtopic, sIndex) => (
                                        <li key={sIndex} className="md:ml-12 flex gap-1 items-center">
                                            <Image src={right} alt="-" className="size-5" />
                                            {subtopic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


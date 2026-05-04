import AboutConference from "@/components/home/AboutConference";
import Banner from "@/components/home/Banner";
import CallForPapers from "@/components/home/CallForPapers";
import EventDates from "@/components/home/EventDates";
// import FeeDetails from "@/components/home/FeeDetails";
import MeetSpeakers from "@/components/home/MeetSpeakers";
import OrangizedCard from "@/components/home/OrangizedCard";
import ProgramSchedule from "@/components/home/ProgramSchedule";
import RegistrationDetails from "@/components/home/RegistrationDetails";
import VenueLocation from "@/components/home/VenueLocation";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <OrangizedCard />
      <AboutConference />
      <CallForPapers />
      <EventDates />
      <ProgramSchedule />
      {/* <FeeDetails /> */}
      <RegistrationDetails />
      <VenueLocation />
      <MeetSpeakers />
    </div>
  );
}

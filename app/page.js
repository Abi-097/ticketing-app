import React from "react";
import TicketCard from "./components/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 ">
        <TicketCard /> <TicketCard /> <TicketCard /> <TicketCard />
        <TicketCard /> <TicketCard /> <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;

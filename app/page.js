import React from "react";
import TicketCard from "./components/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch(
      "https://ticketing-app-swart.vercel.app/api/Tickets",
      {
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.log("error on get tickets", error);
  }
};
const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

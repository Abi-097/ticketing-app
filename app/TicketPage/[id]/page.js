import EditTicket from "@/app/components/EditTicket";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Fail to get ticket");
  }

  return res.json();
};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    <div>
      <EditTicket ticket={updateTicketData} />
    </div>
  );
};

export default TicketPage;

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTicket = ({ ticket }) => {
  const EDITMODE = ticket?._id === "new" ? false : true;

  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to update Ticket.");
      }
      // router.refresh();
      // router.push("/"); //it will refresh automatically and goto main page
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Ticket.");
      }
      router.refresh();
      router.push("/"); //it will refresh automatically and goto main page
    }
  };
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center ">
      {" "}
      <form
        className="flex flex-col gap-3 w-1/2 text-black"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update Your Ticket" : "Create Your Ticket"}</h3>
        <br />

        <label
          htmlFor="title"
          className="block text-lg font-large leading-3 text-gray-900"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label
          htmlFor="description"
          className="block text-lg font-large leading-3 text-gray-900"
        >
          Description
        </label>
        {/* <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        /> */}
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          rows={6}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
          value={formData.description}
        />

        <label
          htmlFor="priority"
          className="block text-lg font-large leading-3 text-gray-900"
        >
          Priority
        </label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label className=" text-lg font-large text-gray-900">1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label className=" text-lg font-large text-gray-900">2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label className=" text-lg font-large text-gray-900">3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label className=" text-lg font-large text-gray-900">4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label className=" text-lg font-large text-gray-900">5</label>
        </div>

        <label
          htmlFor="progress"
          className="block text-lg font-large leading-3 text-gray-900"
        >
          Progress
        </label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label
          htmlFor="category"
          className="block text-lg font-large leading-3 text-gray-900"
        >
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label
          htmlFor="status"
          className="block text-lg font-large leading-3 text-gray-900"
        >
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="not started">Not Started</option>
          <option value="started"> Started</option>
          <option value="done"> Done</option>
          <option value="hold"> Hold</option>
        </select>
        <input
          type="submit"
          className={`btn max-w-xs ${
            EDITMODE ? "bg-orange-500" : "bg-green-500"
          }`}
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default EditTicket;

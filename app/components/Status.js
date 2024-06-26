const Status = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-red-300";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-500";
        return color;
      case "started":
        color = "bg-yellow-400";
        return color;
      case "not started":
        color = "bg-purple-200";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default Status;

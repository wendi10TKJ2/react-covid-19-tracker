import formatCount from "../helper/formatCount";

const styledBorder = (title) => {
  if (title === "confirmed") {
    return "border-b-[6px] border-indigo-500";
  } else if (title === "Deaths") {
    return "border-b-[6px] border-red-500";
  }

  return "border-b-[6px] border-green-500";
};

const Card = ({ title, total, date, subTitle }) => {
  return (
    <div
      className={`w-full py-7 px-5 bg-white shadow-lg  rounded-lg ${styledBorder(
        title
      )}`}
    >
      <h5 className="text-gray-600 font-medium text-sm">{title}</h5>
      <h2 className="text-lg mt-1 mb-2 font-bold">
        {total ? formatCount(parseFloat(total)) : 0}
      </h2>
      <p className="text-sm font-medium">{date}</p>
      <p className="font-semibold text-sm mt-2">{subTitle}</p>
    </div>
  );
};

export default Card;

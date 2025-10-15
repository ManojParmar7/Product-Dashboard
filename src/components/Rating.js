import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const total = 5;
  const full = Math.floor(rating);
  const half = Number.isInteger(rating) ? 0 : 1;
  const empty = total - full - half;
  const stars = [];

  for (let i = 0; i < full; i++)
    stars.push(<FaStar key={"full-" + i} color="gold" />);
  if (half) stars.push(<FaStarHalfAlt key="half" color="gold" />);
  for (let i = 0; i < empty; i++)
    stars.push(<FaRegStar key={"empty-" + i} color="gray" />);

  return <div className="flex gap-1 items-center">{stars}</div>;
};

export default Rating;

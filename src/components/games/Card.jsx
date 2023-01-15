import { Link } from "react-router-dom";

export default function Card({ name, img, link }) {
  return (
    <Link to={link}>
      <div className="relative w-56 h-40 rounded-xl p-4 bg-cover bg-center overflow-hidden hover:shadow-xl" style={{ backgroundImage: `url(${img})` }}>
        <h3 className="absolute bottom-4 inset-x-0 z-10 font-semibold text-center text-white">{name}</h3>
        <span className="absolute inset-0 bg-gradient-to-t from-black/60 z-0" />
      </div>
    </Link>
  )
}
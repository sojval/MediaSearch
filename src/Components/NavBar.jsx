
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
        <div className="md:flex justify-between items-center py-3 px-3 md:py-3 md:px-10 bg-blue-600 ">
        <h2 className="text-2xl font-[helvetica neue] font-bold mb-5 md:mb-0">
          MediaSearch
        </h2>
        <div className="flex gap-5 text-xl items-center ">
          <Link className="text-xl bg-white text-blue-600 rounded px-3 py-1.5" to="/">Search</Link>
          <Link className="text-xl bg-white text-blue-600 rounded px-3 py-1.5" to="/collection">Collection</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
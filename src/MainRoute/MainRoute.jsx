
import { Routes, Route } from "react-router-dom";
import ClintProfileList from "../component/ClintProfileList";
import SingleProfileList from "../component/SingleProfileList";

const MainRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ClintProfileList />} />
        <Route path="/singlepage/:id" element={<SingleProfileList />} />
        </Routes>
        )
        }

        export default MainRoutes
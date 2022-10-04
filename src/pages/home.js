import Sidebar from "../components/Sidebar.js";

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-6/7">
                HOME!
            </div>
        </div>
    );
}

export default Home;

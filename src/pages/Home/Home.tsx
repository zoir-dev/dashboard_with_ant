import { Route, Routes } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Students from './Students/Students';
import HomeWorks from './HomeWorks/HomeWorks';
import WorkValue from './WorkValue/WorkValue';
import Workers from './Workers/Workers';
import HomeLayout from './HomeLayout/HomeLayout';

const Home = () => {
    return (
        <HomeLayout>
            <Routes>
                <Route path="/" element={<Statistics />} />
                <Route path="/students" element={<Students />} />
                <Route path="/homeWorks" element={<HomeWorks />} />
                <Route path="/workValue" element={<WorkValue />} />
                <Route path="/workers" element={<Workers />} />
            </Routes>
        </HomeLayout>
    );
};

export default Home;

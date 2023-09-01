import { Route, Routes } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Students from './Students/Students';
import HomeWorks from './HomeWorks/HomeWorks';
import WorkValue from './WorkValue/WorkValue';
import Workers from './Workers/Workers';
import HomeLayout from './HomeLayout/HomeLayout';
import Settings from './Settings/Settings';

const Home = () => {
    return (
        <HomeLayout>
            <Routes>
                <Route path="/" element={<Statistics />} />
                <Route path="/students" element={<Students />} />
                <Route path="/homeWorks" element={<HomeWorks />} />
                <Route path="/workValue" element={<WorkValue />} />
                <Route path="/workers" element={<Workers />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </HomeLayout>
    );
};

export default Home;

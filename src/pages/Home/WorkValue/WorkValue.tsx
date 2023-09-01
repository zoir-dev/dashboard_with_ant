import BarGraph from "../../../components/WorkValue/MonthGraph/MonthGraph";
import Info from "../../../components/WorkValue/Info/Info";
import PartGraph from "../../../components/WorkValue/PartGraph/PartGraph";
import Kpi from "../../../components/WorkValue/Kpi/Kpi";
import Graph from "../../../components/WorkValue/Kpi/Graph";

const WorkValue = () => {
  return <div className="statistics">
    <div className="left_div">
      <Info />
      <PartGraph />
      <BarGraph />
    </div>
    <div className="right_div">
      <Kpi />
      <Graph />
    </div>
  </div>;
};

export default WorkValue;

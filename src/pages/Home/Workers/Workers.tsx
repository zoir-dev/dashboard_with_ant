import { DownOutlined, UpOutlined } from "@ant-design/icons";
import StudentsComponent from "../../../components/Students/Students";
import Kpi from "../../../components/WorkValue/Kpi/Kpi";
import PartGraph from "../../../components/WorkValue/PartGraph/PartGraph";
import Graph from "../../../components/Workers/Graph/Graph";
import WorkerCard from "../../../components/Workers/WorkerCard/WorkerCard";
import WorkersInfo from "../../../components/Workers/WorkersInfo/WorkersInfo";
import { data } from "./data";
import './style.scss'

interface renderProps {
  fio: string,
  hudud: string,
  otryad: string,
  kpi: number
}

const Workers = () => {


  const columns = [
    {
      title: 'FIO',
      dataIndex: 'fio',
      key: 'fio',
      render: (_, b: renderProps) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="https://picsum.photos/32" alt="" loading="lazy" style={{ borderRadius: '50%' }} />
          <p>{b.fio}</p>
        </div>
      )
    },
    {
      title: 'Hudud',
      dataIndex: 'hudud',
      key: 'hudud',
    },
    {
      title: 'Otryad',
      dataIndex: 'otryad',
      key: 'otryad',
    },
    {
      title: 'Guruh',
      dataIndex: 'guruh',
      key: 'guruh',
    },
    {
      title: "Kpi ko'rsatkichi",
      dataIndex: 'kpi',
      key: 'kpi',
      render: (_, b: renderProps) => (

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
          <p>{b.kpi}</p>
          {b.kpi > 60 ? <UpOutlined style={{ color: '#16EF39' }} /> : <DownOutlined style={{ color: "#FF4D4F" }} />}
        </div>
      )
    },
  ];
  return <div className="workers_div">
    <WorkerCard />
    <div className="statistics" style={{ marginTop: "24px", display: 'flex' }}>
      <div className="left_div">
        <WorkersInfo />
        <PartGraph className='pb' />
      </div>
      <div className="right_div" >
        <Kpi />
        <Graph />
      </div>
    </div>
    <StudentsComponent people='Xodimlar' dataSourc={data} columData={columns} rowSelect={false} paginate={false} />
  </div>;
};

export default Workers;

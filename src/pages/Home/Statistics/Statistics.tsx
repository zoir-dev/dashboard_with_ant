import Balance from "../../../components/Statistics/Balance/Balance";
import Category from "../../../components/Statistics/Category/Category";
import Money from "../../../components/Statistics/Money/Money";
import Spending from "../../../components/Statistics/Spending/Spending";
import Transaction from "../../../components/Statistics/Transaction/Transaction";
import './style.scss'

const Statistics = () => {
  return <div className="statistics">
    <div className="left_div">
      <Spending />
      <Transaction />
      <Money />
    </div>
    <div className="right_div">
      <Balance />
      <Category />
    </div>
  </div>;
};

export default Statistics;

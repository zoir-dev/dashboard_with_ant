import { Badge, Breadcrumb, Image, Input } from "antd";
import { BellOutlined, HomeOutlined, MenuUnfoldOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import profile_img from '../../assets/profile_img.png'
import "./style.scss";
interface appBarProps {
  setOpen: (value: boolean) => void
}
const AppBar = ({ setOpen }: appBarProps) => {
  return (
    <div className="app-bar">
      <Breadcrumb separator={<RightOutlined style={{ fontSize: '10px' }} />}>
        <Breadcrumb.Item>
          <HomeOutlined style={{ fontSize: '18px' }} />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Document</Breadcrumb.Item>
        <Breadcrumb.Item>Document Process</Breadcrumb.Item>
      </Breadcrumb>

      <div className="right">
        <Input prefix={<SearchOutlined />} placeholder="John Doe" />
        <div className="withMenuIcon">
          <MenuUnfoldOutlined className="drawer_icon" onClick={() => setOpen(true)} />
          <div className="right_div">
            <Badge dot>
              <BellOutlined />
            </Badge>
            <div className="profile">
              <p>
                Kruluz Utsman
              </p>
              <Image src={profile_img} alt="profile_img" preview={false} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;

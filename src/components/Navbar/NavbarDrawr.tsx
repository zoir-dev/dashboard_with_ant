import { Drawer } from 'antd'
import Navbar from './Navbar'

const NavbarDrawr = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) => {
    return (
        <Drawer open={open} onClose={() => setOpen(false)} placement='left' closable={false} width={280} onClick={() => setOpen(false)}>
            <Navbar />
        </Drawer>
    )
}

export default NavbarDrawr
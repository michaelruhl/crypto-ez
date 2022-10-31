import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, DollarOutlined  } from '@ant-design/icons'
import { useState, useEffect } from 'react'

import icon from'../images/cryptocurrency.png'
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize ] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerwidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
}, [])

useEffect(() => {
        if(screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
}, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                {/* <Avatar src={DollarOutlined} size="large" /> */}
                <DollarOutlined style={{fontSize: '50px'}}/>
                <Typography.Title level={2} className="logo">
                    <Link style={{color: "black",textDecoration: "none"}}to="/">crypto-ez</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                    </Button>
            </div>
            {activeMenu && (

            <Menu theme ="light">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link style={{color: "black",textDecoration: "none"}}to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link style={{color: "black",textDecoration: "none"}}to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link style={{color: "black",textDecoration: "none"}}to="/exchanges">Tickers</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link style={{color: "black",textDecoration: "none"}}to="/news">News</Link>
                </Menu.Item>
            </Menu>
            )}

        </div>
    )
}

export default Navbar
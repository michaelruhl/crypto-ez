import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
function App() {
  return (
    <div className="app">
      
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
                
              <Route path="/exchanges" element={<Exchanges />} />
                
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                
            <Route path="/news" element={<News />} />
                
            </Routes>
          </div>
        </Layout>
      <div className="footer" >
        <Typography.Title level={5} style={{color:"white",textAlign: 'center'}}>
          Crypto-ez
        </Typography.Title>
        <Space>
          <Link style={{color: "black",textDecoration: "none"}}to="/"> Home</Link>
          <Link style={{color: "black",textDecoration: "none"}}to="/exchanges"> Tickers</Link>
          <Link style={{color: "black",textDecoration: "none"}}to="/news">News</Link>
        </Space>

      </div>
      </div>
    </div>
  );
}

export default App;

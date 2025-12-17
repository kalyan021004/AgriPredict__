import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Updated text color to green for visibility on whitesmoke
  const navLinkStyle = { 
    color: '#2e7d32', 
    textDecoration: 'none', 
    fontWeight: '600',
    fontSize: '0.95rem',
    padding: '5px 10px'
  };

  return (
    <nav style={{ 
      background: 'whitesmoke', 
      padding: '0.5rem 1rem',
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      borderBottom: '1px solid #dcdcdc' /* Lighter border for light theme */
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Image */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/AgriPredict.png" 
            alt="AgriPredict Logo" 
            style={{ 
              height: '50px',
              width: '200px', 
              objectFit: 'contain'
            }} 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/crop" style={navLinkStyle}>Crop</Link>
          <Link to="/disease" style={navLinkStyle}>Disease</Link>
          <Link to="/crop-history" style={navLinkStyle}>History</Link>
          
          {!token ? (
            <>
              <Link to="/login" style={navLinkStyle}>Login</Link>
              <Link to="/register" style={{ 
                ...navLinkStyle, 
                background: '#2e7d32', /* Green background */
                color: 'white',        /* whitesmoke text */
                padding: '6px 18px', 
                borderRadius: '4px',
                fontWeight: '600'
              }}>
                Register
              </Link> 
            </>
          ) : (
            <button onClick={logout} style={{ 
              background: '#d32f2f', 
              color: 'white', 
              padding: '6px 16px', 
              borderRadius: '4px',
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer'
            }}>
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle (Hamburger Icon) - Changed to Green */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          style={{ 
            display: 'none', 
            background: 'none', 
            color: '#2e7d32', /* Green icon for visibility */
            fontSize: '1.5rem',
            padding: '5px',
            border: 'none',
            cursor: 'pointer'
          }} 
          className="mobile-toggle"
        >
          ☰
        </button>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
      
      {/* Mobile Dropdown  */}
      {mobileMenuOpen && (
        <div style={{ 
          background: 'whitesmoke', 
          padding: '15px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px',
          borderTop: '1px solid #dcdcdc'
        }}>
           <Link to="/" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>Home</Link>
           <Link to="/crop" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>Crop</Link>
           <Link to="/disease" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>Disease</Link>
           <Link to="/crop-history" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>History</Link>
           {!token ? (
            <>
              <Link to="/login" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link to="/register" style={{
                 ...navLinkStyle, 
                 background: '#2e7d32', 
                 color: 'white',
                 textAlign: 'center',
                 width: 'fit-content'
              }} onClick={() => setMobileMenuOpen(false)}>
                Register
              </Link>
            </>
          ) : (
            <button onClick={logout} style={{ 
              color: 'white', 
              background: '#d32f2f', 
              textAlign:'left',
              width: 'fit-content',
              padding: '6px 16px',
              borderRadius: '4px',
              border: 'none'
            }}>
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
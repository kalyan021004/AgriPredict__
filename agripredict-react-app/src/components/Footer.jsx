import { Leaf, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand Section */}
          <div style={styles.column}>
            <div style={styles.brandHeader}>
              <div style={styles.iconContainer}>
                <Leaf style={styles.icon} />
              </div>
              <h3 style={styles.brandTitle}>AgriPredict</h3>
            </div>
            <p style={styles.brandDescription}>
              Empowering farmers with AI-driven insights for sustainable and profitable agriculture. 
              Making smart farming accessible to everyone.
            </p>
            <div style={styles.socialContainer}>
              <a href="https://github.com/AgriPredictSIH/AgriPredict" style={styles.socialLink} onMouseOver={e => e.currentTarget.style.backgroundColor = '#16a34a'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#15803d'}>
                <svg style={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Quick Links</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <a href="/" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  Home
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="/crop" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  Crop Recommendation
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="/disease" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  Disease Detection
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="/crop-history" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  History
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Resources</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <a href="#" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  Documentation
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="#" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  Blog
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="#" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  Support
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="#" style={styles.link} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                  <span style={styles.bullet}>•</span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Contact Us</h4>
            <div style={styles.contactContainer}>
              <div style={styles.contactItem}>
                <Mail style={styles.contactIcon} />
                <div>
                  <p style={styles.contactText}>Team CHAIN X</p>
                  <p style={styles.contactSubtext}>SIH 2025 - ID: SIH25030</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <MapPin style={styles.contactIcon} />
                <p style={styles.contactText}>SriCIty, Andhra Pradesh</p>
              </div>
              <div style={styles.contactItem}>
                <Phone style={styles.contactIcon} />
                <p style={styles.contactText}>Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.bottomContent}>
            <p style={styles.copyright}>
              &copy; {new Date().getFullYear()} AgriPredict. All rights reserved.
            </p>
            <div style={styles.policyLinks}>
              <a href="#" style={styles.policyLink} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                Terms of Service
              </a>
              <a href="#" style={styles.policyLink} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                Privacy Policy
              </a>
              <a href="#" style={styles.policyLink} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#bbf7d0'}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #14532d 100%)',
    color: 'white',
    marginTop: 'auto',
  },
  container: {
    margin: '0 auto',
    padding: '48px 24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
  },
  column: {
    minWidth: '200px',
  },
  brandHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
  },
  iconContainer: {
    backgroundColor: '#16a34a',
    padding: '8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '24px',
    height: '24px',
    color: 'white',
  },
  brandTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  brandDescription: {
    color: '#dcfce7',
    lineHeight: '1.6',
    fontSize: '0.875rem',
    marginBottom: '16px',
  },
  socialContainer: {
    display: 'flex',
    gap: '12px',
    paddingTop: '8px',
  },
  socialLink: {
    backgroundColor: '#15803d',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  socialIcon: {
    width: '20px',
    height: '20px',
  },
  columnTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#dcfce7',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '12px',
  },
  link: {
    color: '#bbf7d0',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  },
  bullet: {
    marginRight: '8px',
    color: '#86efac',
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    color: '#bbf7d0',
  },
  contactIcon: {
    width: '20px',
    height: '20px',
    marginTop: '2px',
    flexShrink: 0,
  },
  contactText: {
    fontSize: '0.875rem',
    fontWeight: '500',
    margin: 0,
  },
  contactSubtext: {
    fontSize: '0.75rem',
    color: '#86efac',
    margin: '4px 0 0 0',
  },
  bottomBar: {
    marginTop: '48px',
    paddingTop: '32px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },
  bottomContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  copyright: {
    color: '#bbf7d0',
    fontSize: '0.875rem',
    margin: 0,
  },
  policyLinks: {
    display: 'flex',
    gap: '24px',
    fontSize: '0.875rem',
  },
  policyLink: {
    color: '#bbf7d0',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  },
}
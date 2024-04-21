import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
<FacebookIcon />
<InstagramIcon/>
<YouTubeIcon/>
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centers</li>
              <li>jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>corporate  information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>media Centers</li>
              <li>privacy</li>
              <li>Contact use</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>Service code</p>
          </div>
          <div className='copy-writer'>
               &copy; 1997-2024 Netflix, Inc
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer
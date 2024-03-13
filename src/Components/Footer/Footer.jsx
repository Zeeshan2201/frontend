import React from 'react'
import './Footer.css'
// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pintester_icon from '../Assets/pintester_icon.png'
import footerbg from '../Assets/bagsbg.jpg'
import weboimg from '../Assets/webo.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import x11 from '../Assets/x1.png'
import linked22 from '../Assets/linked2.png'
import google33 from '../Assets/google3.png'
import p44 from '../Assets/p4.png'
import insta5 from '../Assets/insta5.png'
import fb66 from '../Assets/fb6.png'
import phone from '../Assets/phone7.png'

import googleplay from '../Assets/googleplay.jpeg'
import appstore from '../Assets/appstore.jpeg'




const Footer = () => {
  return (
   <div>
      <div className='div' >
         <img src={footerbg} alt="" className='footerbg1' />
      </div>

      <div className='top-foot'>
         <div className='d2'>
            <img src={weboimg} alt=""  />
         </div> 
         <div className='icon'>
            <img src={x11} alt="" />
            <img src={linked22} alt=""  />
            <img src={google33} alt="" />
            <img src={p44} alt=""  />
            <img src={insta5} alt="" />
            <img src={fb66} alt="" />          
         </div>
         <div className='ph'>
            <img src={phone} alt="" />
            <div className='one'><h5>Hotline</h5>
                <div className='two'><p>9699926476</p></div>
            </div>
         </div>
      </div>  


      <div className= 'div2'>
            <p className='txt1'><FontAwesomeIcon icon={faCoffee}/>Nagpur 440022</p>
            <p className='txt2'>support@webotricks.com</p>
            
            <div className='img'>
            <img src={googleplay} alt=""  className='img1'/>
            <img src={appstore} alt=""  className='img2'/></div>
            
            
            <p className='txt3'>NEWSLETTER</p>
            <div className='txt'>
            <p className='txt4'>Subscribe our newsletter to get latest updates</p></div>
           
      </div>

      <div className='div3'>
         <div className='div6'>
             <ul className="footer-links">   </ul>
             <li className='head-name'>Accounts</li>
             <li>Open Your Store</li>
             <li>Profile</li>  
             <li>Track Order</li>  
             <li> Help & Support</li>
         </div>
          
         <div className='div6'>
             <li className='head-name'>Quick Links</li>
             <li>Featured Products</li>
             <li>Top Stores</li>
             <li>Latest Products</li> 
             <li>FAQ</li>
         </div>
         <div className='div6' >
             <li className='head-name'>Other</li>
             <li>About Company</li> 
             <li>Privacy Policy</li>
             <li>Terms & Conditions</li>
             <li>Refund Policy</li>
             <li>Return Policy</li>
             <li>Cancellation Policy</li>
             <li>Support Ticket</li>
         </div>
       </div>

             <div className='div7'>
             <p>Copyright Webotricks@2024</p>
             </div>





        </div>
  
  
      
  )
}
export default Footer;



// import React from 'react'
// import './Footer.css'
// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pintester_icon from '../Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/whatsapp_icon.png'

// export const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="footer-logo">
//             <img src={footer_logo} alt="" />
//             <p>SHOPPER</p>
//         </div>
//         <ul className="footer-links">
//             <li>Company</li>
//             <li>Product</li>
//             <li>Offices</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//         <div className="footer-social-icon">
//             <div className="footer-icons-container">
//                 <img src={instagram_icon} alt="" />
//             </div>
//             <div className="footer-icons-container">
//                 <img src={pintester_icon} alt="" />
//             </div>
//             <div className="footer-icons-container">
//                 <img src={whatsapp_icon} alt="" />
//             </div>
//         </div>
//         <div className="footer-copyright">
//             <hr />
//             <p>Copyright @ 2023 - All Right Reserved.</p>
//         </div>
//     </div>
//   )
// }
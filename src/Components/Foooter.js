import img1 from './museum.jpg';
import img2 from './learn-javascript.jpg';
import img3 from './planting-tree.jpg';
import img4 from './friends-visiting.jpg';
import img5 from './paint.jpg';
import img6 from './walk-dog.jpg';
import img7 from './to-fish.jpg';
import img8 from './jogging.jpg';
import img9 from './bouquet.jpg';
import img10 from './read-book.jpg';
import img11 from './concert.jpg';
import img12 from './cooking.jpg';

function Footer() {
       return (

       <div className='footer-container'> 

              <img src={img1} className='foot-img'  alt="Tips"/>
              <img src={img2} className='foot-img'  alt="Tips"/>
              <img src={img3} className='foot-img'  alt="Tips"/>
              <img src={img4} className='foot-img'  alt="Tips"/>
              <img src={img5} className='foot-img'  alt="Tips"/>
              <img src={img6} className='foot-img'  alt="Tips"/>
              <img src={img7} className='foot-img'  alt="Tips"/>
              <img src={img8} className='foot-img'  alt="Tips"/>
              <img src={img9} className='foot-img'  alt="Tips"/>
              <img src={img10} className='foot-img'  alt="Tips"/>
              <img src={img11} className='foot-img'  alt="Tips"/>  
              <img src={img12} className='foot-img'  alt="Tips"/>  
{/* width='200px' height='150px' */}
              </div> 
       )
}

export default Footer;
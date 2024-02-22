import React, { Component } from 'react';
import './google.css';
import './global.css';
import googleimg from '/home/gannu/Desktop/react/google/googl/images/image 6.jpg';
import searchimg from '/home/gannu/Desktop/react/google/googl/images/image 1.jpg';
import cameimg from '/home/gannu/Desktop/react/google/googl/images/image 5.jpg';
import mailimg from '/home/gannu/Desktop/react/google/googl/images/Ellipse 7.jpg';
import buttonimg from '/home/gannu/Desktop/react/google/googl/images/button.jpg';
import ellipse8 from '/home/gannu/Desktop/react/google/googl/images/logos/Ellipse 8.jpg'
import faceimg from '/home/gannu/Desktop/react/google/googl/images/logos/face.jpg'
import insta from '/home/gannu/Desktop/react/google/googl/images/logos/insta.jpg'
import messangerimg from '/home/gannu/Desktop/react/google/googl/images/logos/messanger.jpg'
import photos from '/home/gannu/Desktop/react/google/googl/images/logos/photos.jpg'
import twitter from '/home/gannu/Desktop/react/google/googl/images/logos/twitter.jpg'
import ellipse from '/home/gannu/Desktop/react/google/googl/images/logos/googleellipse.jpg'
import ellipse16 from '/home/gannu/Desktop/react/google/googl/images/logos/Ellipse 16.jpg'

class Google extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false
        };
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownVisible: !prevState.dropdownVisible
        }));
    };

    render() {
        const { dropdownVisible } = this.state;

        return (
            <div>
                <div className="google">
                  <div>
                    <img className="image-6-icon" alt="google_img" src={googleimg} />
                    <div className="search"></div>
                    <img className="image-1-icon" alt="" src={searchimg} />
                    <input
                        className="search-google-or"
                        type="text"
                    />
                    <img className="image-5-icon" alt="" src={cameimg} />
                
                    <div className="maang-search-parent">
                        <div className="div">Maang Search</div>
                        <div className="div">I’m Feeling Lucky</div>
                    </div>
                    <div className="google-offered-in-hindi-parent">
                        <div className="google-offered-in">Google offered in Hindi :<span className='div1'> हिन्दी  বাংলা  తెలుగు  मराठी  தமிழ்  ગુજરાતી  ಕನ್ನಡ  മലയാളം  ਪੰਜਾਬੀ </span></div>
                    
                    </div>
                    </div>  

                    <div className="gmail">Gmail</div>
                    <div className="images">Images</div>
                    <img className="google-child" alt="" src={mailimg}></img>
                    {/* Button with dropdown functionality */}
                    
                        <button className="button2" onClick={this.toggleDropdown}>
                            <img alt='' src={buttonimg}/> 
                        </button>
                        {dropdownVisible && (
                            <div className="dropdown">
                                <div >
                                    <img className='ellipse-icon'  alt="" src={ellipse8} /><span className='text1'>Drive</span>
                                    <img  className='ellipse-icon' alt="" src={faceimg} /><span className='text2'>Face</span>
                                    <img className='ellipse-icon' alt="" src={insta} /><span className='text3'>Insta</span>
                                    <img className='ellipse-icon' alt="" src={messangerimg} /><span className='text4'>Message</span>
                                    <img className='ellipse-icon' alt="" src={photos} /><span className='text5'>amazon</span>
                                    <img className='ellipse-icon' alt="" src={twitter} /><span className='text6'>twitter</span>
                                    <img className='ellipse-icon'  alt="" src={ellipse} /><span className='text7'>google</span>
                                    <img className='ellipse-icon' alt="" src={ellipse16} /><span className='text8'>photos</span>
                                    <img className='ellipse-icon' alt="" src={ellipse8} /><span className='text9'>Drive</span>
                                    <img className='ellipse-icon' alt="" src={faceimg} /><span className='text10'>Face</span>
                                    <img className='ellipse-icon' alt="" src={insta} /><span className='text11'>Insta</span>
                                    <img className='ellipse-icon' alt="" src={messangerimg} /><span className='text12'>Message</span>
                                    <img className='ellipse-icon' alt="" src={photos} /><span className='text13'>photos</span>
                                    <img className='ellipse-icon' alt="" src={twitter} /><span className='text14'>twitter</span>
                                    <img className='ellipse-icon' alt="" src={ellipse} /><span className='text15'>google</span>
                                </div>
                                    
                            </div>
                        )}
                    
                   
                </div>
            </div>
        );
    }
}

export default Google;

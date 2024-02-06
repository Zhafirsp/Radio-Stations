import React, { useState, useRef, useEffect  } from 'react';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Logo.png";
import NavigationBar from "./Navbar";
import PlayButton  from "./PlayButton";
import RadioStationPicker from './RadioStationPicker';

const Home = () => {
  const audioRef = useRef(null);
  const [selectedStation, setSelectedStation] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [volume, setVolume] = useState(50);

  const radioStations = [
    { name: 'Bandung', frequency: '103.1 FM', url: 'http://45.64.97.211:1031/;stream.nsv' },
    { name: 'Jakarta', frequency: '90.8 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozjakarta' },
    { name: 'Bali', frequency: '101.2 FM', url: 'https://void.idserverhost.com:8008/stream' },
    { name: 'Aceh', frequency: '102.8 FM', url: 'http://103.29.212.166:9968/;stream/1' },
  ];

  const handleStationChange = (e) => {
    const selectedStationInfo = radioStations.find(station => station.name === e.target.value);
    setSelectedStation(selectedStationInfo);
    setIsPlaying(false); // Stop pemutaran jika stasiun berubah
    setIsRotating(false); // Hentikan rotasi saat stasiun berubah
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsRotating(false);
    } else {
      audio.play();
      setIsRotating(true);
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  return (
    <section>
    <div className="home-container" id="Home">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            <span style={{ color:"#FCBB33" }} className="home-oz">OZ Radio</span> <br/>
          </h1>
            <div className="scroller">
              <span>
                Your <br/> 
                Friendly <br/> 
                Station <br/> 
                Stream Now <br/> 
              </span>
            </div>
            <div>
            <RadioStationPicker
              radioStations={radioStations}
              selectedStation={selectedStation}
              onStationChange={handleStationChange}
            />
          <PlayButton onPlayPause={handlePlayPause} isPlaying={isPlaying} />
            </div>
          <div>
            <audio ref={audioRef} src={selectedStation?.url} volume={volume / 100} />
          </div>
        <div>
            
          </div>
        </div>
        <div className="home-image-section my-5">
            <img  
            className={`rotating-image ${isRotating ? 'rotate' : ''}`} 
            src={BannerImage} alt="" 
            />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
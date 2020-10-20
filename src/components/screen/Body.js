import React from "react";
import '../../style/Body.css';
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStateValue } from './../../context/StateProvider';
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
    const [{ discover_weekly }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbN9-IbT6II7xiPT2wdgGra6qdNN3vheL_BA&usqp=CAU" 
        alt="" /> */}
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>


      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
           
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

       
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow  track={item.track} />
        ))}

      </div>
    </div>
    
  );
};

export default Body;

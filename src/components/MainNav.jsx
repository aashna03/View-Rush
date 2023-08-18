import React, { useEffect } from "react";


// import { makeStyles } from '@mui/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//
// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     position: "fixed",
//     bottom: 0,
//     background: 'linear-gradient(45deg, #271212 30%, #FF8E53 90%)',
//     // background: "#271212",
//     zIndex: 100,
//   },
// });

export default function SimpleBottomNavigation() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();//
  // const classes = {
  //   width: "100%",
  //   position: "fixed",
  //   bottom: 0,
  //   background: 'linear-gradient(45deg, #271212 30%, #FF8E53 90%)',
  //   // background: "#271212",
  //   zIndex: 100,
  // }

  useEffect(() => {
    if (value === 0) {
        navigate("/");
    } else if (value === 1) {
        navigate("/movies");
    } else if (value === 2) {
        navigate("/series");
    } else if (value === 3) {
        navigate("/search");
    }
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      // className={classes}
      sx = {{    width: "100%",
      position: "fixed",
      bottom: 0,
      background: 'linear-gradient(45deg, #271212 30%, #FF8E53 90%)',
      // background: "#271212",
      zIndex: 100,}}
    >
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        sx={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box sx={{ width: 500 }}>
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//       </BottomNavigation>
//     </Box>
//   );
// }
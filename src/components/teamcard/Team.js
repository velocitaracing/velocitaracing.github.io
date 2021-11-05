import React, { useEffect } from "react";
import { Members } from "./TeamDetails.js";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import "./style/style.scss";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      height: 85,
      width: 85,

      '@media screen and (max-width:360px)': {
        height: 65,
        width: 65,
      }

      

    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Team = (props) => {

  function SortArray(x) {
    var TeamDet = [];
    var l = Members.length;
    for (let i = 0; i < l; i++) {
      // console.log(Members[i].id);
      // console.log(i);
      if (Members[i].id === x) {
        TeamDet = Members[i].teamMembers;

        break;
      }
    }
    // console.log(TeamDet);
    return TeamDet;
  }

  var ArraySorted = SortArray(props.year);

  //   console.log(ArraySorted);

  return (
    <div className='card-wrapper'>
      <ThemeProvider theme={theme}>
        {ArraySorted.map((item, index) => (
          <Card className="team-member-card" key={item.id}>
            <Avatar {...stringAvatar(item.name)} src={item.image} ></Avatar>
            <div className="member-info">
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="subtitle2">{item.role}</Typography>
              <div className="member-social">
                <LinkedInIcon className="social-icon" />
                <EmailIcon className="social-icon" />
              </div>
            </div>
          </Card>
        ))}
      </ThemeProvider>
    </div>
  );
};

export default Team;

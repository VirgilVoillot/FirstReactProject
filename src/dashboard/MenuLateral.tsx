import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';


import Divider from '@mui/material/Divider';

import { Link } from "react-router-dom";

export function MenuLateral() {
    return <div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
    </div>;
};


const mainListItems = (
  <div>
    
      <nav>
        <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        </Link>
      </nav>

      <nav>
        <Link to="/todo">
        <ListItem button>
          <ListItemIcon>
            <FormatListNumberedIcon />
          </ListItemIcon>
          <ListItemText primary="ToDo List" />
          </ListItem>
        </Link>
      </nav>

      <nav>
        <Link to="/loan">
          <ListItem button>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Loan" />
          </ListItem>
        </Link>
      </nav>

      <nav>
        <Link to="/budget">
          <ListItem button>
            <ListItemIcon>
              <CalculateIcon />
            </ListItemIcon>
            <ListItemText primary="Budget" />
          </ListItem>
        </Link>
      </nav>
  </div>
);

const secondaryListItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>
    <nav>
      <Link to="/contact">
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </Link>
    </nav>
  </div>
);

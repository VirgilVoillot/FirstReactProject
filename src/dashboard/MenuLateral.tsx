import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

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
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumberedIcon />
      </ListItemIcon>
      <ListItemText primary="ToDo List" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Loan" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CalculateIcon />
      </ListItemIcon>
      <ListItemText primary="Budget" />
    </ListItem>
  </div>
);

const secondaryListItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
  </div>
);

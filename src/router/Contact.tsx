import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export function Contact() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350, margin:'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            V
          </Avatar>
        }
        title="Contact"
        subheader="How to contact me"
      />
      <CardMedia
        component="img"
        image="/logo192.png"
        alt="LogoReact"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          You can contact me on my LinkedIn account, and you can visit my GitHub account
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="linkedIn" href="https://ca.linkedin.com/in/virgil-voillot-62a06682">
          <LinkedInIcon color="primary"/>
        </IconButton>
        <IconButton aria-label="github" href="https://github.com/VirgilVoillot">
          <GitHubIcon color="primary"/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Website:</Typography>
          <Typography paragraph>
            Code source is on my GitHub account : <a href="https://github.com/VirgilVoillot/FirstReactProject">Here</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

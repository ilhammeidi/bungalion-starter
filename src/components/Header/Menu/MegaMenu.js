import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Icon from '@mui/material/Icon';
import classes from '../header-style';

function MegaMenu(props) {
  const {
    dataMenu,
    open,
    toggle
  } = props;

  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');

  const handleToggle = (id, event) => {
    setAnchorEl(event.currentTarget);
    toggle(id);
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
  }, []);
  
  return (
    <Box component="ul" className="multiMenu" sx={classes.multiMenu}>
      {dataMenu.map((item, index) => (
        <li key={index.toString()}>
          <div>
            <Button
              onClick={(e) => handleToggle(item.id, e)}
              ref={anchorRef}
              endIcon={<Icon>expand_more</Icon>}
            >
              {item.name}
            </Button>
            <Popper
              open={open[item.id] || false}
              anchorEl={anchorEl}
              disablePortal={false}
              transition
              className="megaMenuRoot"
              style={classes.megaMenuRoot}
            >
              {({ TransitionProps, placement }) => (
                <Fade
                  {...TransitionProps}
                  style={{ width: '100%', transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
                >
                  <Box>
                    <Paper className="megaMenu" sx={classes.megaMenu}>
                      <Container maxWidth="md">
                        <Grid container spacing={1}>
                          {item.child.map((subitem, childIndex) => (
                            <Grid item sm={3} key={childIndex.toString()}>
                              <ListSubheader
                                disableSticky
                                component="div"
                                className="titleMega"
                                sx={classes.titleMega}
                              >
                                {subitem.name}
                              </ListSubheader>
                              <Box component="img" src={subitem.thumb} alt="thumbnail" className="thumbMenu" sx={classes.thumbMenu} />
                              <List component="div">
                                {subitem.child.map((granditem, grandChildIndex) => (
                                  <ListItem
                                    key={grandChildIndex.toString()}
                                    button
                                    sx={classes.menuItem}
                                    className="menuItem"
                                    component="a"
                                    href={granditem.link}
                                  >
                                    <ListItemText
                                      primary={granditem.name}
                                      sx={classes.menuList}
                                      className="menuList"
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                          ))}
                        </Grid>
                      </Container>
                    </Paper>
                  </Box>
                </Fade>
              )}
            </Popper >
          </div>
        </li>
      ))}
    </Box>
  );
}

MegaMenu.propTypes = {
  dataMenu: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.object.isRequired
};

export default MegaMenu;

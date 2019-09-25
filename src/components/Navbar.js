import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

function Navbar(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }
    const menu = [
        { name: 'Messages', icon: <MailOutlineRoundedIcon /> },
        { name: 'Bookmarks', icon: <BookmarkBorderRoundedIcon /> },
        { name: 'Profile', icon: <AccountCircleRoundedIcon /> },
        { name: 'More', icon: <MoreHorizRoundedIcon /> }
    ]
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <NavLink to={`/feed`}>
                    <ListItem button>
                        <ListItemIcon>{<HomeRoundedIcon />}</ListItemIcon>
                        <ListItemText primary={"Feed"} />
                    </ListItem>
                </NavLink>
                {menu.map((m) => (
                    <ListItem button key={m.name}>
                        <ListItemIcon>{m.icon}</ListItemIcon>
                        <ListItemText primary={m.name} />
                    </ListItem>
                ))}
            </List>

        </div>
    );

    return (
        <div className={classes.root}>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{ paper: classes.drawerPaper, }}
                        variant="permanent"
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}


export default Navbar;
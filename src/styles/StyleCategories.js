import { blueGrey } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

const drawerWidth = 200;
const colorBack = 800;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerHeader: {
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    backgroundColor: blueGrey[900],
  },
  appBar: {
    backgroundColor: blueGrey[colorBack],
    color: blueGrey[100],
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: blueGrey[colorBack],
    width: drawerWidth,
  },
  content: {
    marginTop: -30,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  ListText: {
    color: theme.palette.common.white,
  },
  menuButton: {
    marginRight: 15,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuItem: {
    color: theme.palette.common.white,
    backgroundColor: blueGrey[colorBack],
    '& $icon': {
      color: theme.palette.common.white,
      backgroundColor: blueGrey[800],
    },
    '&:focus': {
      color: blue[700],
      backgroundColor: blueGrey[700],
      '& $primary, & $icon': {
        color: blue[600],
        backgroundColor: blueGrey[700],
      },
    },
  },
  primary: {},
  icon: {},
});

export default styles;

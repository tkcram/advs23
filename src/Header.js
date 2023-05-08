import injectSheet from 'react-jss';

const styles = {
  header: {
  	display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
    fontSize: 22,
    backgroundColor: 'black',
    color: 'white',
    height: '75px',
    position: 'fixed',
    padding: '0 50px',
    top: 0,
    width: 'calc(100% - 100px)',
    zIndex: 2
  },
  title: {

  },
  about: {
  	height: '50px'
  }
};

const Header = (props) => {
	const { classes } = props;

	return(
		<header className={classes.header}>
			<div className={classes.title}>INFO 696</div>
			<button className={classes.about}>About</button>
		</header>
	)
};

export default injectSheet(styles)(Header);
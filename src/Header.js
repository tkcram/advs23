import injectSheet from 'react-jss';
import { useState } from 'react'
import About from './About'

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
	const [showModal, setShowModal] = useState(false)
	
	const toggleModal = () => {
		setShowModal(!showModal);
	}

	return(
		<header>
			<div className={classes.header}>
				<h1 className={classes.title}>Brick x Brick</h1>
				<button className={classes.about} onClick={toggleModal}>About</button>
			</div>
			{showModal && <About onClose={toggleModal}/>}
		</header>
	)
};

export default injectSheet(styles)(Header);
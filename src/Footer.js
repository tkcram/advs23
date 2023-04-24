import injectSheet from 'react-jss';

const styles = {
	footer: {
		background:'#1A1110',
		height:'50px',
		width:'100%',
		display:'flex',
		alignItems: 'center',
		'& p': {
			paddingLeft: '20px',
			color: 'white'
		}
	},
};

const Footer = (props) => {
	const { classes } = props;

	return(
		<footer className={classes.footer}>
			<p>Tk Cram - 2023</p>
		</footer>
		)
};

export default injectSheet(styles)(Footer);
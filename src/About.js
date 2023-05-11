import injectSheet from 'react-jss';

const styles = {
  overlay: {
    position: 'fixed',
    backgroundColor: '#0009',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 2
  },
  modal: {
    background: 'white',
    padding: '20px',
    position: 'fixed',
    left: 'calc(25vw - 60px)',
    top: 'calc(25vh - 40px)',
    height: '50vh',
    width: '50vw',
    zIndex: 3,
    overflow: 'scroll',
    '& p': {
      padding: '0.4rem',
      fontSize: '16px',
      margin: 0,
      lineHeight: '1.5rem',
      fontFamily: 'lora'
    },
  },
  exit: {
    position: 'fixed',
    right: 'calc(25vw + 30px)',
    top: 'calc(25vh - 30px)',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer'
    }
  }
};

const About = (props) => {
  const { onClose, classes } = props;

	return(
    <div>
      <div className={classes.overlay} onClick={onClose}/>
      <div className={classes.modal}>
        <div className={classes.exit} onClick={onClose}>X</div>
        <h2>About This Project</h2>
        <p>This project was created by Tk Cram as coursework for INFO 696: Advanced Projects in Visualization, in pursuit of a Masters of Science in Data Analytics and Visualization from Pratt Institute.</p>
        <p>The technology for the project was SQL and Excel for the data manipulation, Pages for text editing, and built using React with D3, Scrollama, and JSS packages.</p>
        <p>I would like to thank Jenny Cahalane for her help in both developing and testing the project, Ziqi Wang for testing and Moral Support, and Kate Stringer for editing and testing.</p>
        <p>Source code available on <a href="https://github.com/tkcram/advs23">Github</a> and if you would like to see more of my work, visit <a href="https://www.tkcram.com">my website</a>, or connect with me on <a href="https://www.linkedin.com/in/sebastian-cram/">LinkedIn</a></p>
        <h3>Sources</h3>
        <p>Brick data is from the <a href="https://rebrickable.com/downloads/">Rebrickable Database</a> and financial data is from <a href="https://www.lego.com/en-us/aboutus/lego-group/policies-and-reporting/reports">LEGO Annual Reports</a></p>
        <p>Other sources:</p>
        <ul>
          <li><a href="https://www.theatlantic.com/entertainment/archive/2016/05/legos/484115/">The Atlantic - How to Play Like a Girl</a></li>
          <li><a href="https://www.theceomagazine.com/business/company-profile/rebuilding-lego/">CEO Magazine - The cautionary and inspirational story of how LEGO rebuilt itself</a></li>
          <li><a href="https://www.fastcompany.com/3040223/when-it-clicks-it-clicks">Fast Company - How Lego Became The Apple Of Toys</a></li>
          <li><a href="https://www.theguardian.com/lifeandstyle/2016/dec/06/lego-saviour-jrgen-vig-knudstorp-moves-on-to-build-global-brand">The Guardian - Lego saviour Jørgen Vig Knudstorp moves on to build global brand</a></li>
          <li><a href="https://knowledge.wharton.upenn.edu/article/how-lego-stopped-thinking-outside-the-box-and-innovated-inside-the-brick/">Knowledge at Wharton - How LEGO Stopped Thinking Outside the Box and Innovated Inside the Brick</a></li>
          <li><a href="https://knowledge.wharton.upenn.edu/article/innovation-almost-bankrupted-lego-until-it-rebuilt-with-a-better-blueprint/">Knowledge at Wharton - Innovation Almost Bankrupted LEGO — Until It Rebuilt with a Better Blueprint</a></li>
          <li><a href="https://leaders.com/articles/business/lego/">Leaders - How LEGO Rebuilt Its Empire Brick by Brick</a></li>
          <li><a href="https://www.insidermonkey.com/blog/5-biggest-toy-companies-in-the-world-1147291/?singlepage=1">Insider Monkey - 5 Biggest Toy Companies in the World</a></li>
          <li><a href="https://www.nytimes.com/2009/09/06/business/global/06lego.html">New York Times - Turning to Tie-Ins, Lego Thinks Beyond the Brick</a></li>
          <li><a href="https://www.telegraph.co.uk/finance/newsbysector/retailandconsumer/6825911/Lego-play-it-again.html">Telegraph - Lego: Play it again</a></li>
          <li><a href="https://www.wsj.com/articles/lego-builds-on-its-position-as-worlds-no-1-toy-maker-11632843755">The Wall Street Journal - Lego Builds on Its Position as World’s No. 1 Toy Maker</a></li>
          <li><a href="https://en.wikipedia.org/wiki/History_of_Lego">Wikipedia - History of Lego</a></li>

        </ul>
      </div>
    </div>
	)
};

export default injectSheet(styles)(About);

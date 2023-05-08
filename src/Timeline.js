import injectSheet from 'react-jss';
import { timelineData } from './timelineData'

const styles = {
  container: {
    display: 'flex',
    "& *": {
      flexBasis: "50%",
    },
    "& img":{
      maxHeight: "100%",
      maxWidth: "50%",
    },
    "& li ol": {
      display: "none",
      listStyleType: "none"
    }
  },
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& *": {
      flexBasis: "50%",
    },
  }
};

const Timeline = (props) => {
	const { classes } = props;
  const scroller = (id) => {
    document.getElementById(id).scrollIntoView({behavior: "smooth",block: "center"});
  }
  const detailer = (desc, img) => {
    document.getElementById("timelineDesc").innerHTML = desc;
    document.getElementById("timelineImg").src = img;
  }
	return(
    <div className={classes.container}>
      <ol>
        {Object.keys(timelineData).map(decade => {
            return (
              <li id={decade}>
                <p onClick={() => scroller({decade})}>{decade.replace("_"," ")}</p>
                <ol>
                  {timelineData[decade].map(item => {
                    return (
                      <li onClick={() => detailer(item.desc, item.img)}>{item.date}: {item.title}</li>
                    )
                  })}
                </ol>
              </li>
            )
        })}
      </ol>
      <div className={classes.description}>
        <div id="timelineDesc">here's some more random details about this fact. Isn't it amazing. It happened on this specific date</div>
        <img id="timelineImg" src="https://m.media-amazon.com/images/I/51qnro877GL._AC_SX679_.jpg"/>
      </div>
    </div>
	)
};

export default injectSheet(styles)(Timeline);

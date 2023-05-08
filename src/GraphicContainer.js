import injectSheet from 'react-jss';
import { Scrollama } from 'react-scrollama';

const styles = {
  graphicContainer: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row-reverse'
  },  
  bottom: {
    flexDirection: 'column-reverse',
    '& graphic': {
      top: '5vh'
    }
  },
  graphic: {
    position: 'sticky',
    backgroundColor: '#aaa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontSize: '5rem',
      fontWeight: 700,
      textAlign: 'center',
      color: '#fff',
    },
    '& img': {
    maxWidth: '100%',
    maxHeight: '100%'
    },
  },
  hgraphic: {
    flexBasis: '45%',
    width: '100%',
    height: '60vh',
    top: '20vh',
  },
  vgraphic: {
    width: '100%',
    height: '35vh',
    top: '75px',
  },
  hscroller: {
    flexBasis: '50%',
  },
  vscroller: {
    padding: '30px 12.5vw 0',
  }

};

const GraphicContainer = ({onStepEnter, onStepExit, onStepProgress, graphicComponent, children, alignment = "right", orientation = 'horizontal', classes}) => {
  // const onStepEnterComp = () => {
  //   onStepEnter();
  //   // console.log(data)
  // }


  return (

    <div className={`${classes.graphicContainer} ${alignment === "left" ? classes.left : ""} ${alignment === "bottom" ? classes.bottom : ""}`} >
        <div className={`${classes.scroller} ${orientation === "horizontal" ? classes.hscroller : classes.vscroller}`}>
          <Scrollama onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            progress
            onStepProgress={onStepProgress}
            offset={0.6}
            // debug
            >
            {children}
          </Scrollama>
        </div>

        <div className={`${classes.graphic} ${orientation === "horizontal" ? classes.hgraphic : classes.vgraphic}`}>
          {graphicComponent}
        </div>
      </div>
    );
}

export default injectSheet(styles)(GraphicContainer);
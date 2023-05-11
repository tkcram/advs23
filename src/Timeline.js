import injectSheet from 'react-jss';
import { timelineData } from './timelineData'

const styles = {
  container: {
    display: 'flex',
    padding: '15px',
    border: '1px solid #aaa',
    height: '50vh',
    '& *': {
      flexBasis: '50%',
    },
    '& ol':{
      listStyleType: 'none',
      padding: 0,
    }
  },
  outerList: {
    '& p': {
      padding: '5px !important',
      textAlign: 'left !important',
      fontSize: '1rem !important',
      color: 'black !important',
      '&:hover':{
        cursor: 'pointer'
      },
    },
  },
  innerList: {
    display: 'none',
    '& li': {
      padding: '5px 15px',
      fontSize: '0.8rem',
      textDecoration: 'underline',
      '&:hover':{
        cursor: 'pointer'
      }
    }
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop:'20px',
    fontSize: '0.8rem',
    '& img':{
      objectFit: 'cover',
      borderRadius: '2px',
      paddingBottom: '5px'
    }
  }
};

const Timeline = (props) => {
	const { classes } = props;
  const scroller = (id) => {
    const name = id['decade']
    const nameTrue = name.replace('_',' ')

    Array.from(document.getElementsByClassName('headers'))
      .forEach(e => {
        e.innerText = e.innerText.includes(nameTrue) ? `⌄ ${nameTrue}` : e.innerText.replace('⌄','›')
        return e.innerText;
    })

    document.getElementById(name+'_Section')
      .scrollIntoView({behavior: 'smooth',block: 'center'})
  }
  const detailer = (desc, img) => {
    document.getElementById('timelineDesc').innerHTML = desc;

    const imgDiv = document.getElementById('timelineImg')
    imgDiv.src = img;
    imgDiv.alt = 'some alt text tbd'
  }
	return(
    <div className={classes.container}>
      <ol className={classes.outerList}>
        {Object.keys(timelineData).map((decade, i) => {
            return (
              <li id={decade} key={decade}>
                <p onClick={() => scroller({decade})} className='headers'>{i === 0 ? '⌄' : '›'} {decade.replace('_',' ')}</p>
                <ol className={classes.innerList}>
                  {timelineData[decade].map(item => {
                    return (
                      <li key={item.title.replace(' ', '-')} onClick={() => detailer(item.desc, item.img)}>{item.date}: {item.title}</li>
                    )
                  })}
                </ol>
              </li>
            )
        })}
      </ol>
      <div className={classes.description}>
        <img id='timelineImg' src='https://upload.wikimedia.org/wikipedia/en/7/73/Ole_Kirk_Christiansen.jpeg' alt='some alt text'/>
        <div id='timelineDesc'>In Bilund, Denmark</div>
      </div>
    </div>
	)
};

export default injectSheet(styles)(Timeline);

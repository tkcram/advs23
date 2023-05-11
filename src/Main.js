import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { Step } from 'react-scrollama';
import * as d3 from 'd3'
import GraphicContainer from './GraphicContainer'
import Timeline from './Timeline'
import Lines from './Lines'
import Gantt from './Gantt'
import Bar from './Bar'
import Ebitda from './Ebitda'

const styles = {
  main: {
    marginTop: '75px',
    padding: '20px 15vw 0',
    '& h2': {
      textAlign: 'center'
    },
    '& h3': {
      textAlign: 'center',
      fontSize: 22,
      color: '#888',
    },
    '& p': {
      padding: '1rem',
      fontSize: '16px',
      margin: 0,
      lineHeight: '1.5rem',
      fontFamily: 'lora'
    },
  },
  step: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
};

const Main = (props) => {
  const [data, setData] = useState(0);
  // const [steps, setSteps] = useState([10, 20, 30]);
  const [progress, setProgress] = useState(0);
  // const [dataset, setDataset] = useState(null);
  const { classes } = props;

  const timelineEnter = (e) => {
    const { data } = e;
    setData(data);
    document.querySelector(`#${data} ol`).style.display = "block";
  }
  const timelineExit = (e) => {
    const { data } = e;
    setData(data);
    document.querySelector(`#${data} ol`).style.display = "none";
  }
  const timelineProgress = (e) => {
    const { data } = e;
    setData(data);
  }

  const ganttEnter = (e) => {}
  const ganttExit = (e) => {}
  const ganttProgress = (e) => {}

  const lineEnter = (e) => {
    const { data } = e;
    setData(data);
  }
  const lineExit = (e) => {}
  const lineProgress = (e) => {}


  const onStepEnter = e => {
  };

  const onStepExit = ({ direction, data }) => {
  };

  const onStepProgress = ({ progress }) => {
    setProgress(progress);
  };

  return (
    <main className={classes.main}>
      <h2>The story of the successes and failures that led to the humble LEGO brick taking over the world.</h2>
      <GraphicContainer onStepEnter={timelineEnter} onStepExit={timelineExit} onStepProgress={timelineProgress} graphicComponent={<Timeline/>}>
        <Step data="Wooden_Age">
          <div className={classes.step} id="Wooden_Age_Section">
            <p>LEGO was created by Ole Kirk Christiansen. Born in Billund, Denmark, he worked as a carpenter, primarily building and repairing houses. He enjoyed modest success during the 1920s, with a small shop and multiple apprentices. Unfortunately, like most, business fell on hard times during the Great Depression. With clients having fewer funds for large projects, he pivoted the business to focus on cheaper household objects such as ladders and ironing boards. It was the small-scale prototypes for these objects that inspired him to make children’s toys.</p>
            <p>Thus, in 1932, LEGO was founded. Named for the Danish ‘leg godt or ‘play well’, the company manufactured a wide array of wooden toys from the now iconic duck to yo-yos and pull trucks. The toys, along with the continued release of furniture, allowed the company to stay afloat through the depression and the calamity of the second world war.</p>
            <p>In the aftermath of the war, traditional manufacturing materials were scarce since most timber had gone towards military projects. However, a new material had made its way to Denmark: plastic. In 1947, Christiansen purchased a plastic injection moulding machine and began to manufacture what they called “interlocking binding bricks”. The bricks, modelled after a patent by Hilary Fisher Page, were designed to fit together in such a way they would create stable structures, but not so tight as to be inseparable.</p>
          </div>
        </Step>

        <Step data="Plastic_Age">
          <div className={classes.step} id="Plastic_Age_Section">
            <p>Originally LEGO bricks, or LEGO Mursten, were sold in 1953 as a box of assorted bricks and received mild success. A key issue was that, after the initial novelty of the material wore off, customers preferred more traditional toys made with wood and metal. Ole Kirk’s son Godtfred had the idea to have a unified ‘system’ of play where lines of toys were designed to be related to, and interoperable with, one another. He applied this system to LEGO Mursten, packaging together bricks for specific builds, such as shops and gas stations. The 1955 ‘Town Plan’ theme could then be brought together for a single-play experience.</p>
            <p>In 1958, Ole Kirk passed away and left the company to Godtfred. Over the next ten years, the design of the LEGO Brick was heavily refined to afford better interlocking between the pieces, such as with the addition of inner tubes. The company also switched from using cellulose acetate, which degraded over time, to acrylonitrile butadiene styrene. ABS is a non-toxic and highly durable plastic that the company continues to use to this day.</p>
            <p>The company saw change as well. A fire at their warehouse incinerated the majority of the wooden toys, incentivising them to focus solely on the plastic bricks. The transition proved beneficial and the company continued to grow throughout Europe and into North America. A significant milestone of the company's growth was expanding into a previously untapped, or ‘blue ocean’ market with the LEGOLand theme park. The park served not only to promote the brand, featuring many grand LEGO creations, it also existed as a standalone attraction and revenue stream for the company</p>
          </div>
        </Step>
        
        <Step data="Classic_Age">
          <div className={classes.step} id="Classic_Age_Section">
            <p>Along with Town and the Classic (1966-1999, 2014-present) box of bricks, LEGO continued to target new demographics through the ’60s and ’70s. Drawing on the idea of a ‘system’, two new LEGO themes were devised. The first was DUPLO (1969-Present), which aimed to reach a much younger age group. Taking its name from the Latin duplus, meaning double, the theme contained pieces that were scaled to two times the regular size. This minimised the need for manual dexterity and reduced the risk of choking. The second theme was Expert (1975-Present), now known as Technic, which went the opposite direction. Featuring a variety of technical parts, such as gears, cogs, and joints, the theme was designed for the most experienced LEGO builders.</p>
            <p>Although LEGO marketed itself as a gender-neutral product, one demographic they had trouble engaging was girls. Several attempts were made to capture this audience during the initial expansion, however, none were truly successful. Homemaker (1971-1981), featured dollhouse-style rooms and saw some success, but had trouble competing with ready-made dollhouses. Another attempt was Scala (1979-1980), whose sets allowed young girls to create LEGO jewellery, but this was dropped due to poor sales.</p>
            <p>The lasting legacy of the Homemaker theme was the LEGO Family set, which contained pieces and instructions for creating several fully articulated LEGO figures. The set proved so popular that the company invested in creating figurines for LEGO environments, which until this point only consisted of simple die-cast figures. And thus, the Minifigure was born. Measuring approximately 4cm tall (the equivalent of 5 ‘studs’ that connect the bricks), the figures come with posable limbs, printed faces, and even accessories.</p>
            <p>Beyond their base popularity, the Minifigure fundamentally changed how LEGO sets were designed. Now, sets needed to be built to the scale of the Minifigure. When designing a car, for instance, it needed to allow the Minifigure to be placed in the driver’s seat. Two new themes emerged to take advantage of this new approach. Space (1978–2001, 2007–2013) primarily revolved around vehicle sets and initially featured a group of peaceful space explorers. Castle (1978–2000, 2002–2014) on the other hand used a more traditional play-set style akin to the Town Plan theme, only with a Medieval flair. Especially popular amongst boys, these themes reinforced the perception that LEGO was a ‘boy’s toy’.</p>
          </div>
        </Step>
      </GraphicContainer>

      <p>LEGO enjoyed steady growth throughout the ’80s, primarily through creating sub-themes for the core Town, Space, and Castle themes, as well as new sets for Duplo, Technic, and Classic. However, when the 90’s rolled around the brand began to stumble. It seemed as though LEGO had already captured its entire audience and had no more room to grow. What’s more, innovations in home video game consoles and the internet were shaking up the entire toy market.</p>
      <p>With growth and innovation in mind, LEGO decided that big changes were necessary to ensure the company's survival. Around 1995, the company decided to ‘retire’ the majority of their designers and bring in ‘innovators’ from various European design schools. Despite minimal experience in toy design, they were quick to implement a new design philosophy that saw construction as an obstacle to play, rather than part of it. Thus low build times and high playability of the final set became the priority, begging the question of what it meant for something to be ‘LEGO-y’.</p>
      <p>This marked the end of the ‘Classic Era’ of LEGO. The ten years that followed, from 1995 to 2004, saw rapid-fire changes across the entire company. The Space, Castle, and Classic themes were all discontinued, DUPLO was rebranded as Explore (2002-2004) when it merged with LEGO Baby (1995-2005), and Technic was refocused on so-called Constraction (Constructed Action) Figures. In their wake, a litany of new themes and sub-themes attempted to capture the public’s imagination, with an average of 8 new toy lines coming out each year. Most of these failed, however, with almost as many lines being discontinued each year as had been introduced, with lifespans averaging only 1-2 years.</p>
      
      <GraphicContainer onStepEnter={ganttEnter} onStepExit={ganttExit} onStepProgress={ganttProgress} graphicComponent={<Gantt/>} alignment="bottom" orientation="vertical">
        <Step>
          <div className={classes.step}>
            <p>Two themes that challenged the idea of what LEGO should be, and failed, are Scala (1997-2001) and Galidor (2002). Scala was a renewed attempt at getting girls to engage with LEGO by reintroducing a dollhouse-like experience. Not only did this version of the theme bear no resemblance to the original, it bore little resemblance to LEGO in general. Instead of the standard Minifigure, new doll figurines akin to Barbie dolls were featured. Large custom moulded pieces designed to snap together in minimal time were introduced and a unique base-plate was created for the theme, called 'Scala-studs', making it hard to use with standard LEGO bricks. While Scala fared a little better than other themes of this time, lasting 4 years, it was ultimately discontinued.</p>
            <p>Galidor was to be the company’s first foray into using multimedia as a key part of a theme’s identity. As well as the LEGO sets themselves, Galidor was to have a television show and a game on both portable and home video consoles. Unfortunately, all three products were met with negative reviews. The show was generally panned by critics, the Gameboy version of the game received mixed reviews, and the console version was never officially released. As for the toy itself, it ran into a similar problem as Scala and didn’t feel “LEGO-y” due to minimal build time and bulky custom parts. </p>
            <p>Not every innovation was a failure. In 1999, LEGO released their first collection of media tie-in products, including sets related to the biggest movie of the year, Star Wars Episode I: The Phantom Menace. The collaboration was a massive success, with revenue for 1999 being 20% higher than the year before. Unfortunately, this success was ephemeral as, despite the continued release of products, revenue returned to previous levels in the following year. This appeared to be a trend, as sales for tie-in themes only performed well in years when the original media was released. Coupled with significant licensing fees, it was clear that while tie-ins were useful, LEGO couldn’t rely solely on this method to sustain their business.</p>
            <p>The tie-in themes were enough of a success to shift some previously held philosophies within the company. Minifigures were now produced in more natural skin tones, as opposed to the previous yellow, to better match the characters they represented. The company also loosened their stance on producing items such as guns in fantastical circumstances. Lastly, these media partnerships highlighted the consumer’s want for more involved storylines and characterisations, as opposed to the blank slate for imagination that had been previously employed.</p>
            <p>The lessons on narrative focus culminated in Bionicle (2001 - 2010, 2015 - 2016), one of the most successful LEGO themes of all time. A line of Constraction Figures, Bionicle’s strength lay in its world-building. Relying heavily on character archetypes and prototypical story beats, it struck a balance between having a fleshed-out universe and still leaving room for children to use their imagination for new stories. This theme also capitalised on other popular forms of media, with the release of both comic books and web-based video games. Its popularity helped keep the entire company afloat, and in some years it was the only profitable theme.</p>
          </div>
        </Step>
      </GraphicContainer>

      <GraphicContainer onStepEnter={lineEnter} onStepExit={lineExit} onStepProgress={lineProgress} graphicComponent={<Lines setStep={data}/>} alignment="left">
        <Step data="pieces_per_set_total">
          <div className={classes.step}>
            <p>Even with its success, Bionicle was still plagued by some of the design flaws of the time. Much like Scala and Galidor, it relied heavily on large, bespoke pieces that were intended to reduce build complexity. However, since there was no consensus as to what these pieces should be, each theme set about creating its own. Between 1995 and 2004, LEGO introduced an average of around 500 pieces each year, requiring the creation of 500 new moulds each year. And these moulds weren’t long-lived, as over the same period around 400 pieces were discontinued each year as themes came and went.</p>
          </div>
        </Step>
        <Step data="themes_per_year_new">
          <div className={classes.step}>
            <p>During this time, LEGO was also producing more sets than ever before. In 1992, they released 137 different sets. Ten years later that number had more than tripled, up to 550. That combined with a desire for each set to have new and innovative pieces, some 2500 unique LEGO pieces were being produced at the peak in 2001. Of course, innovation can only be as good as the success it breeds, and to sustain the tripling manufacturing costs, LEGO would need to bring in triple the revenue. This simply didn’t happen and the company was almost driven to bankruptcy.</p>
          </div>
        </Step>
        <Step data="themes_per_year_discontinued">
          <div className={classes.step}>
            <p>According to the company’s annual statements, which they began releasing in 1998, this downturn is obvious. From 1998 to 2004, company expenses averaged approximately 8,100 million Danish Kroner (mDKK), or roughly $2 billion USD when adjusted for inflation and conversion. The average revenue was barely keeping pace, averaging 8,200mDKK during the same period. </p>
          </div>
        </Step>
        <Step data="themes_per_year_discontinued">
          <div className={classes.step}>
            <p>Over the same seven-year period, LEGO only posted a profit for three of them. The effects of Star Wars are also clearly visible, with a 20% increase in revenue seen in 1999 and 2002 when new movies were released. If we remove those two anomalous years, the average revenue drops significantly to 7,600mDKK. The other profitable year, 2001, was bolstered by the release of another prominent tie-in franchise, Harry Potter, and saw the highest revenue at 366mDKK.</p>
          </div>
        </Step>
        <Step data="pieces_per_year_new">
          <div className={classes.step}>
            <p>The rest of this period is marred by significant losses, averaging 397mDKK per year. The lowest point was in 2004 when the company posted a 1,800mDKK loss. This was the death knell for then-CEO Kjeld Kirk Kristiansen, who resigned from the company and was replaced by Jørgen Vig Knudstorp.</p>
          </div>
        </Step>
        <Step data="staff_per_year">
          <div className={classes.step}>  
            <p>Knudstorp, an economics Ph.D., had previously worked as a consultant for McKinsey & Company. To return the company to a profitable state, he introduced three key initiatives: Stabilise the business by reducing overhead, go ‘back to the brick’ with their design philosophy, and move into previously untapped ‘blue ocean’ markets.</p>
            <p>The first of Knudstorp’s initiatives was to reduce the amount the company was spending. LEGO resumed control of their manufacturing and distribution centres, of which 80% had been previously outsourced, and moved them to cheaper regions in places such as Central Europe and Mexico. They also significantly reduced staff, from 9,100 at the company’s peak in the early ‘90s to 4,200 in 2007.</p>
          </div>
        </Step>
      </GraphicContainer>

      <p>The edict also came down for designers to significantly reign in the variety of pieces being used in sets. Previously, they had been given carte blanche to create whatever they wanted, however, they wanted, so long as it fit the theme. Now they were told to use a specific and limited palette of pieces and colours. This palette was designed to ensure maximum reusability of elements across the company, reducing the need for new and expensive moulds. These limitations also allowed for fewer, more unified themes to be created.</p>
      <p>Knudstorp also instructed the company to go ‘back to the brick’ and return to the elements that made LEGO ‘LEGO-y’. From a set perspective, this meant going back to simple, identifiable models such as fire trucks and gas stations. As for the themes, the company began aggressive audience research to investigate how consumers engaged with the product. They discovered that both the construction and the play experience were of equal importance, and it was the combination of the two that drew people to the product. They also found that play styles could be roughly defined as figures, play sets, and models.</p>
      
      <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<Bar/>} alignment="right">
        <Step>
          <div className={classes.step}>
            <p>Minifigures were utilised heavily for the first two play styles, although in different ways. Those who preferred to play with figures wanted to articulate them and move them around with the final build, similar to the Space theme or other action figures, and were typically boys. To fill this niche, LEGO released Ninjago (2011 - Present), which drew on the lessons of Bionicle in creating a fully realised world. Sets typically consisted of several Minifigures, representing franchise characters, that could battle with LEGO mechs, dragons, and vehicles. </p>
            <p>Those who preferred play sets were more interested in creating LEGO environments for the Minifigures to move around in. Product testing showed that while boys mostly ignored the buildings in sets, using them as a backdrop for play, girls wanted to be able to interact with them and often lamented their lack of detail. LEGO used these findings to revitalise the Town theme as City (2005 - Present), and create Friends (2012 - Present).</p>
            <p>Friends was the most recent attempt at creating a theme targeted at girls, an important part of Knudstorp’s third initiative to move the company into new markets. Unlike previous versions of the LEGO dollhouse, Friends was designed as a LEGO set first, using standard pieces and building techniques. The two main things that distinguished it from other LEGO sets were a more stylised Minifigure, called a Minidoll, and a colour palette made up of more traditionally ‘girly’ colours. This approach proved hugely successful, and since its release the theme has been consistently named one of the top-selling themes within the company, competing directly against the likes of LEGO Star Wars.</p>
            <p>The last of the play styles is models. This style appealed to consumers that did not want to play with sets in a traditional sense but put them out on display once constructed. An example of this is the Creator theme (2005 - Present) which includes animals and vehicles not to scale with Minifigures, or one-off sets that don’t fit into a particular theme. A surprising aspect of this set design was its popularity amongst the untapped older demographic. In order to engage with Adult Fans of LEGO (AFOLs), the company began to release sets with more involved builds that had greater detail on the final model. Creator Expert (2007 - Present) included large-scale monuments, including the 10,000-piece Eiffel Tower, as well as plant and art collections. Technic also expanded to include high-fidelity models of planes, trains, and automobiles.</p>
            <p>Beyond boys, girls, and adults, LEGO also continued to engage with fandoms, including the incredibly lucrative Star Wars collaborations. In fact, in 2021 an estimated 60% of all LEGO sold was associated with another franchise. LEGO learnt from their early mistake of overcommitting and overproducing tie-in sets, by associating the release of new themes more closely with the release of the mainline product, or by only releasing a single set associated with a pop-culture reference, such as with Golden Girls and Queer Eye.</p>
          </div>
        </Step>
      </GraphicContainer>

      <p>Knudstorp’s leadership and direction for the company proved incredibly successful. During his tenure as CEO from 2004-2017 the company saw a 500% increase in revenue, from6,296mDKK to 34,955mDKK, with an average operating profit of 6,152mDKK. Even after he stepped down in 2017, the trajectory of the company continued upwards. As of this writing, LEGO is the largest toy company in the world with a revenue of $8b USD, beating out the likes of Bandai-Namco($7.56b USD), Hasbro ($5.85b USD), and Mattel ($5.4b USD).</p>
      
      <Ebitda/>

      <p>But now that they’re at the top of the heap, what’s left for them to do? The main target appears to be moving into China, the last of the so-called ‘blue ocean’ markets. In 2017 the company opened a new factory in the country, with plans to expand it in 2022. Several new themes have also been announced to appeal to the market, such as Monkie Kid (2020 - Present) based on Chinese mythology, and Chinese New Year (2020 - Present).</p>
      <p>The company is also looking to address increasing concerns about the use of plastics. With research linking macro- and micro-plastics to detrimental effects on both human and ecological wellbeing, LEGO has sought to move away from the ABS plastic it currently uses. Significant research has been done on sustainable materials, with recycled PET plastics and sustainable bio-polyethylene being used in some new products. However, time will tell how these initiatives play out.</p>
      <p>From its humble beginnings as wooden toys in a Danish workshop, to the creation of the little plastic brick, a close shave with bankruptcy, to now being the biggest toy company in the world, LEGO has been on a wild ride. Throughout this journey, it has continued to grow, innovate, and persevere through all the challenges and failures it has faced. It has captured the hearts and minds of people across many generations and demographics and seems set to do so for a long time to come. </p>
    </main>
  );
}

export default injectSheet(styles)(Main);
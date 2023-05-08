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
    '& h1': {
    },
    '& h2': {
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
  console.log(progress)


  // useEffect(() => {
  //   getData().then(resp => {
  //     setDataset(resp);
  //   })
  // }, []);


  const timelineEnter = (e) => {
    const { data } = e;
    setData(data);
    // console.log("I entered the timeline!", data);
    document.querySelector(`#${data} ol`).style.display = "block";
  }
  const timelineExit = (e) => {
    const { data } = e;
    setData(data);
    // console.log("I entered the timeline!", data);
    document.querySelector(`#${data} ol`).style.display = "none";
  }
  const timelineProgress = (e) => {
    const { data } = e;
    setData(data);
    // console.log("I entered the timeline!", data);
    // document.querySelector(`#${data} ol`).style.display = "none";
  }

  const ganttEnter = (e) => {}
  const ganttExit = (e) => {}
  const ganttProgress = (e) => {}

  const lineEnter = (e) => {
    const { data } = e;
    setData(data);
    console.log(data)
  }
  const lineExit = (e) => {}
  const lineProgress = (e) => {}


  const onStepEnter = e => {
    const { data, entry, direction} = e;
    setData(data);
    console.log(entry, direction)
    // console.log(entry, direction)
    const dietColor = d3.scaleOrdinal(d3.schemeCategory10);
    const graph = d3.select("#diet")
      .selectAll("g.arc")
      .selectAll("path")
    // console.log(data)
    if (data === "test"){
      graph.transition()
        .duration(1000)
          .attr("fill", (d)=> dietColor(d.index))
    }
    const dietColor2 = d3.scaleOrdinal(d3.schemeSpectral[9]);
    if (data === "testup"){
      graph.transition()
        .duration(1000)
          .attr("fill", (d)=> dietColor2(d.index))
    }

    if (data === "test3"){
      graph.transition()
        .duration(1000)
          // .attr("dummy", (d) => console.log(d))
          .style("opacity", (d)=> d.value<30 ? 0 : 1)
    }
  };

  const onStepExit = ({ direction, data }) => {

    const graph = d3.select("#diet")
      .selectAll("g.arc")
      .selectAll("path")

    if (data === "test3"){
       graph.transition()
        .duration(1000)
          .style("opacity", 1)
    }
  };

  const onStepProgress = ({ progress }) => {
    // console.log(progress)
    setProgress(progress);
  };

  return (
    <main className={classes.main}>
      <h1>Brick x Brick</h1>
      <h2>The story of LEGO, told through it's humblest element</h2>
      <GraphicContainer onStepEnter={timelineEnter} onStepExit={timelineExit} onStepProgress={timelineProgress} graphicComponent={<Timeline/>}>
        <Step data="Wooden_Age">
          <div className={classes.step} id="Wooden_Age">
            <p>LEGO was created by Ole Kirk Christiansen. Born in Billund, Denmark, he worked as a carpenter, primarily building and repairing houses. He enjoyed modest success during the the 1920’s, with a small shop and multiple apprentices. Unfortunately, like most, business fell on hard times during the Great Depression. With clients having less funds for large projects, he pivoted the business to focus on cheaper household objects such as ladders and ironing boards. It was the small scale prototypes for these objects that inspired him to make children’s toys.</p>
            <p>Thus, in 1932, LEGO was founded. Named for the danish ‘leg godt or ‘play well’, the company manufactured a wide array of wooden toys from the now iconic duck to yo-yos and pull trucks. The toys, along with the continued release of furniture, allowed the company to stay afloat through the depression and the calamity of the second world war.</p>
            <p>In the aftermath of the war there was a scarcity of traditional manufacturing materials since most timber had gone to towards military projects. However, a new material had made its way to Denmark: plastic. In 1947, Christiansen purchased a plastic injection moulding machine and began to manufacture what they called “interlocking binding bricks”. The bricks, modelled after a patent by Hilary Fisher Page, were designed to fit together in such a way they would create stable structures, but not so tight as to be inseparable.</p>
          </div>
        </Step>

        <Step data="Plastic_Age">
          <div className={classes.step} id="Plastic_Age">
            <p>Originally LEGO bricks, or LEGO Mursten, were sold in 1953 as a box of assorted bricks and received mild success. A key issue was that, after the initial novelty of the material wore off, customers preferred more traditional toys made with wood and metal. Ole Kirk’s son Godtfred had the idea to have a unified ‘system’ of play where a line of toys were designed to be related to, and interoperable with, one another. He applied this system to LEGO Mursten, packaging together bricks for specific builds, such as shops and gas stations. The 1955 ‘Town Plan’ theme could then be brought together for a single play experience.</p>
            <p>In 1958, Ole Kirk passed away and left the company to Godtfred. Over the next ten years, the design of the LEGO Brick was heavily refined to afford better interlocking between the pieces, such as with the addition of inner tubes. The company also switched from using cellulose acetate, which degraded over time, to acrylonitrile butadiene styrene. ABS is a non-toxic and highly durable plastic that the company continues to use to this day.</p>
            <p>The company itself saw change as well. A fire at their warehouse incinerated the majority of the wooden toys, incentivising them to focus solely on the plastic bricks. The transition proved beneficial and the company continued to grow throughout Europe and into North America. A significant milestone of the companies growth was expanding into a previously untapped, or ‘blue ocean’ market with the LEGOLand theme park. The park served not only to promote the brand, featuring many grand LEGO creations, it also existed as a standalone attraction and revenue stream for the company.</p>
          </div>
        </Step>
        
        <Step data="Classic_Age">
          <div className={classes.step} id="Classic_Age">
            <p>Along with Town and the Classic (1966-1999, 2014-present) box of bricks, LEGO continued to target new demographics through the 60’s and 70’s. Drawing on the idea of a ‘system’, two new LEGO themes were devised. The first was DUPLO (1969-Present), which aimed to reach a much younger age group. Taking its name from the latin duplus, meaning double, the theme contained pieces that were scaled to two times the regular size. This minimised the need for manual dexterity and reduced the risk of choking. The second theme was Expert (1975-Present), now known as Technic, which went the opposite direction. Featuring a variety of technical parts, such as gears, cogs, and joints, the theme was designed for the most experienced of LEGO builders.</p>
            <p>Although LEGO marketed itself as a gender neutral product, one demographic they had trouble engaging was girls. Several attempts were made to capture this audience during the initial expansion, however none were truly successful. Homemaker (1971-1981), featured dollhouse style rooms and saw some success, but had trouble competing with ready-made dollhouses. Another attempt was Scala (1979-1980), whose sets allowed young girls to create LEGO jewellery, but was dropped due to poor sales.</p>
            <p>The lasting legacy of the Homemaker theme was the LEGO Family set, which contained pieces and instructions for creating several fully articulated LEGO figures. The set proved so popular that the company invested in creating figurines for LEGO environments, which until this point only consisted of simple die-cast figures. And thus, the Minifigure was born. Measuring approximately 4cm tall (the equivalent of 5 ‘studs’ that connect the bricks), the figures come with posable limbs, printed faces, and even accessories.</p>
            <p>Beyond their base popularity, the Minifigure fundamentally changed how LEGO sets were designed. Now, sets needed to be built to the scale of the Minifigure. When designing a car, for instance, it needed to allow the Minifigure to be placed in the driver’s seat. Two new themes emerged to take advantage of this new approach. Space (1978–2001, 2007–2013) primarily revolved around vehicle sets, and initially featured a group of peaceful space explorers. Castle (1978–2000, 2002–2014) on the other hand used a more traditional play-set style akin to the Town Plan theme, only with a renaissance flair. Especially popular amongst boys, the themes also reinforced the perception that LEGO was a ‘boy’s toy’.</p>
          </div>
        </Step>
      </GraphicContainer>

      <p>LEGO enjoyed steady growth throughout the 80’s, primarily creating sub-themes for the core Town, Space, and Castle themes, as well as new sets for Duplo, Technic, and Classic. However, when the 90’s rolled around the brand began to stumble. It seemed as though LEGO had already captured it’s entire audience and had no more room to grow. What’s more, innovations in home video game consoles and the internet were shaking up the entire toy market.</p>
      <p>With growth and innovation its mind, LEGO decided that big changes were necessary to ensure the companies survival. Around 1995 the company made the decision to ‘retire’ the majority of their designers and bring in ‘innovators’ from various European design schools. Despite minimal experience in toy design, they were quick to implement a new design philosophy that saw construction as an obstacle to play, rather than part of it. Thus low build times and high playability of the final set were the priority, begging the question of what it meant for something to be ‘LEGO-y’.</p>
      <p>This marked the end of the so called ‘Classic Age’ of LEGO. The ten years that followed, from 1995 to 2004, saw rapid fire changes across the entire company. The Space, Castle, and Classic themes were all discontinued, DUPLO was rebranded as Explore (2002-2004) when it merged with LEGO Baby (1995-2005), and Technic was refocused on so called Constraction (Constructed Action) Figures. In their wake, a litany of new themes and sub-themes attempted to capture the public’s imagination, with an average of 8 new toy lines coming out each year. Most of these failed however, with almost as many lines being discontinued each year as had been introduced, with lifespans averaging only [#] years.</p>
      
      <GraphicContainer onStepEnter={ganttEnter} onStepExit={ganttExit} onStepProgress={ganttProgress} graphicComponent={<Gantt/>} alignment="bottom" orientation="vertical">
        <Step>
          <div className={classes.step}>
      <p>Two themes that challenged the idea of what LEGO should be, and failed, are Scala (1997-2001) and Galidor (2002). Scala was a renewed attempt at getting girls to engage with LEGO by reintroducing a dollhouse like experience. Not only did this version of the theme bare no resemblance to the original, it bore little resemblance to LEGO in general. It featured doll figurines akin to Barbie dolls and large custom moulded pieces designed to snap together in minimal time. It also introduced ‘Scala-studs’ as a unique baseplate for it all, which made it hard to use with standard LEGO bricks. While Scala fared a little better than other themes of this time, lasting 4 years, it was ultimately discontinued.</p>
      <p>Galidor was to be LEGO’s first foray into using multimedia as a key part of a theme’s identity. As well as the LEGO sets themselves, Galidor was also to have a television show and a game on both portable and home video consoles. Unfortunately, all three products were met with negative reviews. The show was generally panned by critics, the Gameboy version of the game received mixed reviews, and the console version was never officially released, with only unfinished builds appearing in compilations. As for the toy itself, it ran into similar problems as Scala with it not feeling “LEGO-y” due to minimal build time and bulky custom parts.</p>
      <p>Not every innovation was a failure. In 1999, LEGO released their first collection of media tie-in products, including sets related to the biggest movie of the year, Star Wars Episode I: The Phantom Menace. The collaboration was a massive success, with revenue for 1999 being 20% higher than the year before. Unfortunately this success was ephemeral, as despite the continued release of products, revenue returned to previous levels in the following year. This appeared to be a trend, as sales for tie-in themes only performed well in years where the original media was being released. Coupled with significant licensing fees, it was clear that while they were useful, LEGO couldn’t rely solely on this method to sustain their business.</p>
      <p>The tie-in themes were enough of a success to shift some previously held philosophies within the company. Minifigures were now being produced in more natural skin tones, as opposed to the previous yellow, to better match the characters they represented. The company also loosened their stance on producing items such as guns in the cases of fantastical circumstances. Lastly, the partnership highlighted the consumer’s want for more involved storylines and characterisations, as opposed to be the blank slate for imagination that had been previously employed.</p>
      <p>The lessons on narrative focus culminated in Bionicle (2001 - 2010, 2015 - 2016), one of the most successful LEGO themes of all time. A line of Constraction Figures, Bionicle’s strength lay in its world building. Relying heavily on character archetypes and prototypical story beats, it struck the balance between having a fleshed out universe but still leaving room for children to use their imagination for new stories. It also capitalised on other popular forms of media of the time, releasing both comic books and web-based video games. Its popularity helped keep the entire company afloat, and in some years it was the only profitable theme.</p>
          </div>
        </Step>
      </GraphicContainer>

      <GraphicContainer onStepEnter={lineEnter} onStepExit={lineExit} onStepProgress={lineProgress} graphicComponent={<Lines setStep={data}/>} alignment="left">
        <Step data="pieces_per_set_total">
          <div className={classes.step}>
            <p>Even with its success, Bionicle still experienced some of the same design flaws of the time. Much like Scala and Galidor, it relied heavily on large, bespoke pieces that were intended to reduce build complexity. However, since there was no consensus as to what these pieces should be, each theme set about creating their own. Between 1995 and 2004, LEGO introduced an average of around 500 pieces each year, requiring the creation of 500 new moulds each year. And these moulds weren’t long lived, as over the same period around 400 pieces were discontinued each year as themes came and went.</p>
            <p>During this time, LEGO was also producing more sets than ever before. In 1992, they released 137 different sets. Ten years later that number had more than tripled, up to 550. That combined with a desire for each set to have new and innovative pieces, some 2500 unique LEGO pieces were being produced at its peak in 2001. Of course innovation can only be as good as the success it breeds, and to sustain the tripling manufacturing costs, LEGO would need to bring in triple the revenue. This simply didn’t happen and the company was almost driven to bankruptcy.</p>
            <p>According to the company’s annual statements, which they began releasing in 1998this downturn can be seen. From 1998 to 2004, company expenses averaged approximately 8,100 million Danish Kroner (mDKK), or roughly $2 billion USD when adjusted for inflation and conversion. The average revenue was was barely keeping pace, averaging 8,200mDKK during the same period. The effects of Star Wars are also clearly visible, with a 20% increase in revenue seen in 1999 and 2002, when new movies were released. If we remove those two anomalous years, the average revenue drops significantly to 7,600mDKK.</p>
          </div>
        </Step>
        <Step data="themes_per_year_new">
          <div className={classes.step}>
            <p>This can be seen reflected in the company’s bottom line. Over the same seven year period, LEGO only posted a profit for three of them. Partially bolstered by the release of another prominent tie-in franchise, Harry Potter, 2001 saw the highest profit at 366mDKK. The rest of this period is marred by significant losses, averaging 397mDKK per year. The lowest point was in 2004, when the company posted a 1,800mDKK loss. This was the death knell for then CEO Kjeld Kirk Kristiansen, who resigned from the company to be replaced by Jørgen Vig Knudstorp.</p>
            <p>Knudstorp, an economics PhD, had previously worked as a consultant for McKinsley & Company. In order to return the company to a profitable state, he introduced three key initiatives: Stabilise the business by reducing overhead, go ‘back to the brick’ with their design philosophy, and move into previously untapped ‘blue ocean’ markets.</p>
            <p>The first of Knudstorp’s initiatives was to reduce the amount the company was spending. LEGO resumed control of their manufacturing and distribution centres, of which 80% had been previously outsourced, and moved them to cheaper regions in places such as Central Europe and Mexico. They also significantly reduced staff, from 9,100 at the company’s peak in [year] to 4,200 in 2007.</p>
          </div>
        </Step>
      </GraphicContainer>

      <p>The edict also came down for designers to significantly reign in the variety of pieces being used in sets. Previously, they had been given carte blanch to create whatever they wanted, however they wanted, so long as it fit the theme. Now they were told to use a specific and limited palette of pieces and colours. This palette was designed to ensure maximum reusability of elements across the company, reducing the need for new and expensive moulds. These limitations also allowed for fewer, more unified themes to be created.</p>
      <p>Knudstorp’s also instructed the company to go ‘back to the brick’ and try and harness what previous themes had lacked in terms of being ‘LEGO-y’. From a set perspective, this meant going back to simple, identifiable models such as fire trucks and gas stations. As for the themes, the company began aggressive audience research to investigate how consumers engage with the product. They discovered that both the construction and the play experience were of equal importance, and it was the combination thereof that drew people to the product. They also found that play styles were roughly divided into figures, play-sets, and models.</p>
      
      <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<Bar/>} alignment="right">
        <Step>
          <div className={classes.step}>
            <p>Minifigures were utilised heavily for the first two play styles, although in different ways. Those who preferred to play with figures wanted to articulate and move around with the final build, similar to the Space theme or other action figures, and were typically boys. To fill this niche, LEGO released Ninjago (2011 - Present), which drew on the lessons of Bionicle in creating a fully realised world. Sets typically consisted of several Minifigures, representing franchise characters, that did battle with LEGO mechs, dragons, and vehicles.</p>
            <p>Those who preferred play-sets however were more interested in creating LEGO environments for the Minifigures to move around in. Product test gin showed that although boys mostly ignored the buildings in sets, mostly using them as a backdrop for play, girls wanted to be able to interact with them and often lamented their lack of detail. LEGO used these findings to revitalise the Town theme as City (2005 - Present), as well as create Friends (2012 - Present).</p>
            <p>Friends was the most recent attempt at creating a theme targeted at girls, an important part of Knudstorp’s third initiative to move the company into new markets. Unlike previous versions of the LEGO dollhouse however, Friends was designed as a LEGO set first, using standard pieces and building techniques. The only things that distinguished it from other LEGO sets were a more stylised Minifigure, called a Minidoll, and a more traditionally ‘girly’ colour palette. This approach proved hugely successful, and since its release the theme has been consistently named one the top selling themes within the company, competing directly against the likes of LEGO Star Wars.</p>
            <p>The last of the play styles, although perhaps a misnomer, involves models. These are sets that are designed not to be played with in a traditional sense, but put out on display once constructed. The Creator theme (2005 - Present) includes animals and vehicles not to scale with Minifigures, or one-off sets that don’t fit into a particular theme. A surprising aspect of this style of set was its popularity amongst the untapped older demographic. In order to engage with Adult Fans of LEGO (AFOLs), the company began to release sets with more involved builds that had greater detail on the final model. Creator Expert (2007 - Present) included large scale monuments, including the 10,000 piece Eiffel Tower, as well plant and art collections. Technic was also expanded to include high fidelity models of planes, trains, and automobiles.</p>
            <p>Beyond boys, girls, and adults, LEGO also worked to engage with fandoms, including the incredibly lucrative Star Wars collaborations. In fact, in 2021 an estimated 60% of all LEGO sold was associated with another franchise. LEGO learnt from their early mistake overcommitting however, associating the release of new themes more closely with the release of the mainline product, or by only releasing a single set associated with pop-culture, such as with Golden Girls and Queer Eye.</p>
          </div>
        </Step>
      </GraphicContainer>

      <p>Knudstorp’s leadership and direction for the company proved incredibly successful. During his tenure as CEO the company saw a 500% increase in revenue, [and a bunch of other numbers]. Even after he stepped down in 2017, the trajectory of the company continued upwards. As of this writing LEGO is the largest toy company in the world, beating out the likes of Mattel and Bandai-Namco with a valuation of [a lot].</p>
      
      <Ebitda/>

      <p>But now that they’re at the top of the heap, what’s left for them to do? The main target appears to be moving into China, the last of the so called ‘blue ocean’ markets. In 2017 the company opened a new factory in the country, with plans to expand it in 2022. Several new themes have also been announced to appeal to the market, such as Monkie Kid (2020 - Present) based on Chinese mythology, and Chinese New Year (2020 - Present).</p>
      <p>The company is also looking to address increasing concern about the use of plastics. With research linking macro- and micro-plastics to detrimental effects to both human and ecological wellbeing, LEGO has sought to move away from the ABS plastic it currently uses. Significant research has been done on sustainable materials, with recycled PET plastics and sustainable bio-polyethylene being used in some new products. However time will tell how these initiatives play out.</p>
        
      <p> Some sustainability, if we have time</p>

      <p>From its humble beginnings as wooden toys in a Danish workshop, to the creation of the little plastic brick, a close shave with bankruptcy, and now the biggest toy company in the world, LEGO has been on a wild ride. Throughout this journey, it has continued to grow, innovate, and persevere through all the challenges and failures it has faced. It has captured the hearts and minds of peoples across many generations and demographics, and seems set to do so for a long time to come.</p>
{/*      <p>An introduction might be in order. From humble biggenings, to almost bankrupt, to the biggest toy company in the world...</p>
      <section>
        <h3 className={classes.subtitle}>In the beginning (Part 1), there was nothing. Wait that’s a few billion years too early... </h3>
        <GraphicContainer onStepEnter={timelineEnter} onStepExit={timelineExit} onStepProgress={onStepProgress} graphicComponent={<Timeline/>}>
          <Step data="d1920">
            <div className={classes.step} id="s1920">
              <p>LEGO was created by Ole Kirk Christiansen, in Billund, Denmark. Trained as a carpenter, he owned a small shop with a modest staff, working primarily building houses. However it was during the depression he began taking on smaller projects, such as ironing boards and step ladders. The small scale models for these projects were what inspired him to create a series of children’s toys.</p>
            </div>
          </Step>
          <Step  data="d1930">
            <div className={classes.step} id="s1930">
              <p>Thus, in 1932, LEGO was founded. Named for the danish ‘leg godt or ‘play well’, the company manufactured a wide array of wooden toys including the now iconic duck, to yo-yos and pull trucks. The company enjoyed modest success, working to stay afloat during the great depression and WWII.</p>
            </div>
          </Step>
          <Step  data="d1940">
            <div className={classes.step} id="s1940">
              <p>By the end of the war, traditional materials were scarce. However a new material had made its way to Denmark: Plastics. Towards the end of the 1940’s Christiansen had purchased a plastic injection moulding machine, and began to manufacture what they called “interlocking binding bricks”, modelled after a patent by Hilary Fisher Page. The idea was to have pieces that could fit together snugly, but also be able to be deconstructed.</p>
            </div>
          </Step>
          <Step  data="d1950">
            <div className={classes.step} id="s1950">
              <p>Originally the LEGO bricks, or LEGO Mursten, were sold as an assorted collection of pieces, and received middling success. Two main problems arose: the bricks didn’t interlock well and once the initial novelty wore off, kids stopped engaging with them. While several iterations on the design helped alleviate the first issue, the second was solved with what would be called the ‘LEGO system’. The system involved packaging bricks as complete model sets, and unifying them under a single theme. The first theme, ‘town plan’, sold well, as children continued to play with the toy even after the model had been constructed.</p>
            </div>
          </Step>
          <Step  data="d1960">
            <div className={classes.step} id="s1960">
              <p>Even with the success of the little plastic bricks, the company continued to manufacture a wide variety of toys. It wasn’t until 1960, when a fire consumed broke out in a warehouse and consumed the wooden stock, that the decision was made to focus solely on LEGO bricks. This allowed the company to focus on expansion both in terms of product and in geography. In the years that followed LEGO became a global brand, featuring not only the classic ‘system’ sets, but also Duplo for younger audiences, and Expert (later Technic) for more advanced ones.</p>
            </div>
          </Step>
          <Step  data="d1970">
            <div className={classes.step} id="s1970">
              <p>One of the biggest success stories came from the introduction of the ‘Minifigure’ […] These figures allowed the company to further dive into various themes within the base product, including the well received Castle and Space themes.</p>
            </div>
          </Step>
        </GraphicContainer>
      </section>

      <section>
        <h3 className={classes.subtitle}>Shit hit’s the fan (Part 2)</h3>
        <h4>Let's do a quick stocktake on what lego is doing (Theme's etc) and what they expanded into in the 90's</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<Gantt/>} alignment="bottom" orientation="vertical">
          <Step data="testup">
            <div className={classes.step}>
              <p>So let’s check in. By 1992 LEGO is a household name, selling to a worldwide audience, with sets targeting a wide variety of interests across multiple demographics. How then, within the decade that follows, does the company nearly go bankrupt?</p>
              <p>Robertson points to two key factors, one organic and one external. The first was that LEGO was at the end of it’s natural growth cycle. “There are only so many feet of toy space and so many toy stores around the world”. The second was the multimedia revolution that was already taking place with the rise of the home console and the internet.</p>
              <p>In order to counteract these factors, LEGO spent a significant amount of resources focused on growth and innovation. Around 1995, the company ‘retired’ the majority of their senior design team, instead recruiting ‘innovators’ from European design schools. These innovators came with new design philosophies […].</p>
              <p>Many themes were rebranded or retired entirely, being replaced by a slate of new products. It seems as though the company wasn't sure what would be successful, as so threw everything at the wall. Between 1992-2002, LEGO released [#] of themes, of which the majority were cancelled shortly thereafter. Even previously popular themes such as space found themselves on the chopping block.</p>
              <p>Perhaps the most infamous themes released during this time was Galidor. Although the thing that made everyone hate it was more to do with the stinker of a TV show they released.</p>
              <p>Lego also attempted to expand into the video game market, albeit with little success</p>
              <p>One big success during this time of rapid fire innovation was the decision to lean more on story driven content. The first foray into this was by with a license with Star Wars that still exists today, accompanying the hotly anticipated trilogy of films. And it was a massive success! Unfortunately LEGO found themselves hampered by the fees involved, and also discovered that during years when the franchise wasn't releasing a new product, their own sales suffered.</p>
              <p>This drove LEGO to create Bionicle, of which a great deal has been written about. In fact robertson described it as the only profitible product the company had at the time. [...]</p>
            </div>
          </Step>
        </GraphicContainer>

        <h4>So how was the product changing</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<Lines/>} alignment="bottom" orientation="vertical">
          <Step data="/images/line_test_1.png">
            <div className={classes.step}>
              <p>Even with it's success, Bionicle exemplified the conceptual stuggle </p>
              <p>There was also an obvious shift when it came to designing the set’s themselves. Build complexity seemed to dwindle, utilising a smaller number of highly specialised pieces. It seemed to be build for “people who didn’t really like LEGO”.</p>
            </div>
          </Step>
          <Step data="/images/line_test_2.png">
            <div className={classes.step}>
              <p>This break neck innovation lead to the company releasing a greater number of sets than ever before, from 137 in 1992 to over 500 a decade later.</p>
            </div>
          </Step>
          <Step data="/images/line_test_3.png" data-offset="1">
            <div className={classes.step}>
              <p>The record number of sets, combined with the use of highly specialised pieces, also saw a spike in the number of unique pieces LEGO was producing - tripling between 1992 and 1997. And as to be expected, having thrice the number of pieces results in thrice the cost. Combined with increased production cost from terrestrial labour, LEGO’s financials were looking in dire shape.</p>
            </div>
          </Step>
        </GraphicContainer>

        <h4>Let's talk about the money shall we...</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<Ebitda/>} alignment="bottom" orientation="vertical">
        </GraphicContainer>


      </section>

      <section>
        <h3 className={classes.subtitle}>Back and better than ever (Part 3)</h3>
        <h4>Money is improving!</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<p>EBIBIBI Redux</p>} alignment="left">
          <Step data="test1">
            <div className={classes.step}>
              <p>In 2004 Jørgen Vig Knudstorp was appointed CEO, the first time the company was helmed by someone outside of the family. He introduced three key initiatives to help revitalise the company: Reduction and relocation of the workforce, going ‘back to the brick’, and moving into more ‘blue ocean’ markets.</p>
            </div>
          </Step>
          <Step data="test2">
            <div className={classes.step}>
              <p>[I wonder if we have any staffing data…] Between 1998 and 2007, LEGO reduced worldwide staff by over a half, from 9100 to 4200. Large parts of which came from outsourcing. For example the LEGOLAND parks were sold off to Merlin entertainment, and manufacturing and distribution centres were moved to Mexico and the Czech Republic respectively.</p>
            </div>
          </Step>
          <Step data="test3">
            <div className={classes.step}>
              <p>LEGO also sought to refocus the product lines they were creating. [We need to do more work on the complexity data].</p>
            </div>
          </Step>
          <Step data="test4">
            <div className={classes.step}>
              <p>The company also moved to unify and simplify the number of themes it was creating. Many of the more elaborate themes were discontinued, and there was a return to classic themes such as ‘City’ and ‘Creator’. ‘Ninjago’ also debuted as the premier ‘boys toys’ line.</p>
            </div>
          </Step>
          <Step data="test5">
            <div className={classes.step}>
              <p>They also solved alleviated the issue with the tie-in sets by creating their own titles in the off cycle. The ‘LEGO Star Wars’ games, for instance, are popular. (How popular?). It has proved so successful that an estimated 60% of all American sales come from tie-in products. This has incentivised LEGO to create a host of tie-in products, from current hot topics such as avatar and Batman, to nostalgic media targeting a more adult audience, such as friends and golden girls.</p>
            </div>
          </Step>
        </GraphicContainer>
      </section>

      <section>
        <h3 className={classes.subtitle}>Epilogue: To infinity and bey... shit wrong toy!</h3>

        <p>Speaking of adults, an effort has been made to engage more with the AFOL, or Adult Fans of Lego, community. These are adults who want to engage with the brand not simply as a nostalgic group, but also to interact with products in a more mature way. This involves smaller, more intricate sets such as the Architecture series, through to some of the largest sets LEGO has created such as the Eiffel Tower, coming in at over 10,000 pieces!</p>

        <p>All of this seems to be working. Look, more ALI BABA! In fact in [year] LEGO became the largest toy company in the world.</p>

        <p>The question then becomes, where to next? LEGO has continues to innovate on its existing themes, such as a revitalisation of the Friends theme to include a more diverse range of characters, and has launched the Monkey Kid and Chinese New Year themes to tap into more of the Chinese market. And of course, there will always be new and exciting franchises for the company to team up with.</p>

        <p>One big hurdle the company is working on is materials. LEGO has used ABS plastic since 1964, but research indicates that both macro and micro plastics and damaging to both the planet and to human health. While efforts are being made around the entire supply chain, such as reducing plastic packaging, the largest innovation is the investment in plant based, decomposable plastics.</p>

        <p>But whatever the future holds, it seems LEGO is here to stay this time…</p>
      </section>*/}
    </main>
  );
}

export default injectSheet(styles)(Main);
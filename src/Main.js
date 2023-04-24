import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { Step } from 'react-scrollama';
import * as d3 from 'd3'
import GraphicContainer from './GraphicContainer'

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

  dummy: {
    height: '100vh'
  }
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

  const onStepEnter = e => {
    const { data, entry, direction} = e;
    setData(data);
    console.log(entry, direction)
    const dietColor = d3.scaleOrdinal(d3.schemeCategory10);
    const graph = d3.select("#diet")
      .selectAll("g.arc")
      .selectAll("path")

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
    console.log(progress)
    setProgress(progress);
  };

  return (
    <main className={classes.main}>
      <h1>Brick x Brick</h1>
      <h2>The story of LEGO, told through it's humblest element</h2>
      <p>An introduction might be in order</p>
      <section>
        <h3 className={classes.subtitle}>In the beginning (Part 1), there was nothing. Wait that’s a few billion years too early... </h3>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<img alt="testAlt" className={classes.timeline} src={data}></img>}>
          <Step data="/images/tl_test_1.png">
            <div className={classes.step}>
              <p>LEGO was created by Ole Kirk Christiansen, in Billund, Denmark. Trained as a carpenter, he owned a small shop with a modest staff, working primarily building houses. However it was during the depression he began taking on smaller projects, such as ironing boards and step ladders. The small scale models for these projects were what inspired him to create a series of children’s toys.</p>
            </div>
          </Step>
          <Step data="/images/tl_test_2.png">
            <div className={classes.step}>
              <p>Thus, in 1932, LEGO was founded. Named for the danish ‘leg godt or ‘play well’, the company manufactured a wide array of wooden toys including the now iconic duck, to yo-yos and pull trucks. The company enjoyed modest success, working to stay afloat during the great depression and WWII.</p>
            </div>
          </Step>
          <Step data="/images/tl_test_3.png">
            <div className={classes.step}>
              <p>By the end of the war, traditional materials were scarce. However a new material had made its way to Denmark: Plastics. Towards the end of the 1940’s Christiansen had purchased a plastic injection moulding machine, and began to manufacture what they called “interlocking binding bricks”, modelled after a patent by Hilary Fisher Page. The idea was to have pieces that could fit together snugly, but also be able to be deconstructed.</p>
            </div>
          </Step>
          <Step data="/images/tl_test_4.png">
            <div className={classes.step}>
              <p>Originally the LEGO bricks, or LEGO Mursten, were sold as an assorted collection of pieces, and received middling success. Two main problems arose: the bricks didn’t interlock well and once the initial novelty wore off, kids stopped engaging with them. While several iterations on the design helped alleviate the first issue, the second was solved with what would be called the ‘LEGO system’. The system involved packaging bricks as complete model sets, and unifying them under a single theme. The first theme, ‘town plan’, sold well, as children continued to play with the toy even after the model had been constructed. </p>
            </div>
          </Step>
          <Step data="/images/tl_test_5.png">
            <div className={classes.step}>
              <p>Even with the success of the little plastic bricks, the company continued to manufacture a wide variety of toys. It wasn’t until 1960, when a fire consumed broke out in a warehouse and consumed the wooden stock, that the decision was made to focus solely on LEGO bricks. This allowed the company to focus on expansion both in terms of product and in geography. In the years that followed LEGO became a global brand, featuring not only the classic ‘system’ sets, but also Duplo for younger audiences, and Expert (later Technic) for more advanced ones.</p>
            </div>
          </Step>
          <Step data="/images/tl_test_6.png">
            <div className={classes.step}>
              <p>One of the biggest success stories came from the introduction of the ‘Minifigure’ […] These figures allowed the company to further dive into various themes within the base product, including the well received Castle and Space themes.</p>
            </div>
          </Step>
        </GraphicContainer>
      </section>

      <section>
        <h3 className={classes.subtitle}>Shit hit’s the fan (Part 2)</h3>
        <h4>Let's do a quick stocktake on what lego is doing (Theme's etc) and what they expanded into in the 90's</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<img alt="testAlt" className={classes.timeline} src="/images/theme_test.png"></img>} alignment="bottom" orientation="vertical">
          <Step data="testup">
            <div className={classes.step}>
              <p>So let’s check in. By 1992 LEGO is a household name, selling to a worldwide audience, with sets targeting a wide variety of interests across multiple demographics. How then, within the decade that follows, does the company nearly go bankrupt?</p>
            </div>
          </Step>
          <Step data="test">
            <div className={classes.step}>
              <p>Robertson points to two key factors, one organic and one external. The first was that LEGO was at the end of it’s natural growth cycle. “There are only so many feet of toy space and so many toy stores around the world”. The second was the multimedia revolution that was already taking place with the rise of the home console and the internet.</p>
            </div>
          </Step>
          <Step data="test3">
            <div className={classes.step}>
              <p>In order to counteract these factors, LEGO spent a significant amount of resources focused on innovation. Around 1995, the company ‘retired’ the majority of their senior design team, instead recruiting ‘innovators’ from European design schools. These innovators came with new design philosophies […]. Many themes were rebranded or retired entirely, being replaced by a slate of new products. By the late 90’s, the effects of this changing of the guard can be seen in the sets themselves [Themes and sets should be split into two thoughts. Can expand on the themes thought more with Galidor and Explore … even some of the strongest showings, such as star wars, did poor business in off years.]:</p>
            </div>
          </Step>
          <Step data="test4">
            <div className={classes.step}>
              <p>I… really need to get on this section… tl;dr they had no money.</p>
            </div>
          </Step>
        </GraphicContainer>

        <h4>So how was the product changing</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<img alt="testAlt" className={classes.timeline} src={data}></img>} alignment="bottom" orientation="vertical">
          <Step data="/images/line_test_1.png">
            <div className={classes.step}>
              <p>There was also an obvious shift when it came to designing the set’s themselves. Build complexity seemed to dwindle, utilising a smaller number of highly specialised pieces. It seemed to be build for “people who didn’t really like LEGO”.</p>
            </div>
          </Step>
          <Step data="/images/line_test_2.png">
            <div className={classes.step}>
              <p>This break neck innovation lead to the company releasing a greater number of sets than ever before, from 137 in 1992 to over 500 a decade later.</p>
            </div>
          </Step>
          <Step data="/images/line_test_3.png">
            <div className={classes.step}>
              <p>The record number of sets, combined with the use of highly specialised pieces, also saw a spike in the number of unique pieces LEGO was producing - tripling between 1992 and 1997. And as to be expected, having thrice the number of pieces results in thrice the cost. Combined with increased production cost from terrestrial labour, LEGO’s financials were looking in dire shape.</p>
            </div>
          </Step>
        </GraphicContainer>

        <h4>Let's talk about the money shall we...</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<img alt="testAlt" src="https://www.slideteam.net/media/catalog/product/cache/1280x720/e/b/ebitda_margin_graph_with_annual_revenue_slide01.jpg"></img>} alignment="bottom" orientation="vertical">
        </GraphicContainer>


      </section>

      <section>
        <h3 className={classes.subtitle}>Back and better than ever (Part 3)</h3>
        <h4>Money is improving!</h4>
        <GraphicContainer onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} graphicComponent={<p>EBIBIBI Redux</p>} alignment="left">
          <Step data="test1">
            <div className={classes.step}>
              <p>In 2004 Jørgen Vig Knudstorp was appointed CEO, the first time the company was helmed by someone outside of the family. He introduced three key initiatives to help revitalise the company: Reduction and relocation of the workforce, going ‘back to the brick’, and moving into more ‘blue ocean’ markets. </p>
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
      </section>

      <div className={classes.dummy}></div>
    </main>
  );
}

export default injectSheet(styles)(Main);
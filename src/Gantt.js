import {useEffect} from 'react'
import * as d3 from 'd3'

const Gantt = () => {
    useEffect(() => {
      // set the dimensions and margins of the graph
        const margin = {top: 0, right: 0, bottom: 0, left: 30},
            width = 155,
            height = 35;

      // append the svg object to the body of the page
      const svg = d3.select("#gantt")
        .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

      // Parse the Data
      d3.csv("/data/gantt.csv").then( data =>  {

        // List of subgroups = header of the csv files = soil condition here
        const subgroups = data.columns.slice(1)

        // List of groups = species here = value of the first column called group -> I show them on the X axis
        const groups = data.map(d => (d.group))

        const x = d3.scaleLinear()
                .domain([1960, 2023])
                .range([ 0, width ]);

        const xAxis = d3.axisBottom(x)
                .tickSizeOuter(0)
                .tickFormat((d,i) => d.toString().replace(",",""))

        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .attr("font-size","0.5em")
            .style("text-anchor", "end");


        // Y axis
        const y = d3.scaleBand()
                  .domain(groups)
                  .range([0, height])
                  .padding([0.2])

        svg.append("g")
          .call(d3.axisLeft(y).tickSizeOuter(0))
          .selectAll("text")
            .attr("font-size","0.5em")


        // color palette = one color per subgroup
        const color = d3.scaleOrdinal()
          .domain(subgroups)
          .range(['#e41a1c','#377eb8','#4daf4a'])

        //stack the data? --> stack per subgroup
        const stackedData = d3.stack()
          .keys(subgroups)
          (data)

        // Show the bars
        svg.append("g")
          .selectAll("g")
          // Enter in the stack data = loop key per key = group per group
          .data(stackedData)
          .join("g")
            .attr("fill", (d, i) => {
              return(i % 2 === 0 ? 'none' : color(d.key));
            })
            .selectAll("rect")
            // enter a second time = loop subgroup per subgroup to add all rectangles
            .data(d => d)
            .join("rect")
              // .attr("dummy", d=> console.log(d))
              // .attr("dummy", d=> console.log(x(d[0]) - x(d[1])))
              .attr("y", d => y(d.data.group))
              .attr("x", d => x(d[0]))
              .attr("width", d => x(d[1]) - x(d[0]))
              .attr("height",y.bandwidth())
      })

    }, [])

    return (
        <>            
            <svg id='gantt' viewBox="0 -77 200 200" xmlns="http://www.w3.org/2000/svg"/>
        </>
    )
}

export default Gantt
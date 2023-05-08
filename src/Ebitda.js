import {useEffect} from 'react'
import * as d3 from 'd3'

const Ebitda = () => {
    useEffect(() => {
      // set the dimensions and margins of the graph
        const margin = {top: 0, right: 0, bottom: 0, left: 12},
            width = 150,
            height = 40;

      // append the svg object to the body of the page
      const svg = d3.select("#ebitda")
        .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

      // Parse the Data
      d3.csv("/data/ebitda.csv").then( data => {

      const y1 = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.sales)])
        .range([height, 0])

      svg.append("g")
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call(g => g.append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("font-size","0.5em")
              .attr("text-anchor", "start")
              .text(data.y1));

      const y2 = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.efficiency)])
        .range([0, height])

      svg.append("g")
          .attr("transform", `translate(${width - margin.right},0)`)
          .call(d3.axisRight(y2))
          .call(g => g.append("text")
              .attr("x", margin.right)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("font-size","0.5em")
              .attr("text-anchor", "end")
              .text(data.y2));

      const x = d3.scaleBand()
        .domain(data.map(d => d.year))
        .range([0, width])
        .padding(0.1)

      svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x)
                .tickSizeOuter(0))
            .selectAll("text")
            .attr("font-size","0.5em")
            .attr("transform", "translate(-10,5)rotate(-45)")


      const line = d3.line()
        .x(d => x(d.year) + x.bandwidth())
        .y(d => y2(d.efficiency))

          svg.append("g")
            .attr("fill", "steelblue")
            .attr("fill-opacity", 0.8)
          .selectAll("rect")
          .data(data)
          .join("rect")
            .attr("x", d => x(d.year))
            .attr("width", x.bandwidth())
            .attr("y", d => y1(d.sales))
            .attr("height", d => y1(0) - y1(d.sales));

        svg.append("path")
            .attr("fill", "none")
            .attr("stroke", "currentColor")
            .attr("stroke-miterlimit", 1)
            .attr("stroke-width", 3)
            .attr("d", line(data));

        svg.append("g")
            .attr("fill", "none")
            .attr("pointer-events", "all")
          .selectAll("rect")
          .data(data)
          .join("rect")
            .attr("x", d => x(d.year))
            .attr("width", x.bandwidth())
            .attr("y", 0)
            .attr("height", height)

      })


    }, [])

    return (
        <>            
            <svg id='ebitda' viewBox="0 -77 200 200" xmlns="http://www.w3.org/2000/svg"/>
        </>
    )
}

export default Ebitda
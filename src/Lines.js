import {useEffect} from 'react'
import * as d3 from 'd3'

const Lines = ({setStep = "sets_per_year"}) => {
  useEffect(() => {

    d3.select("#lines").selectAll("*").remove()

    //Dimensions
    const margin = {top: -20, right: 0, bottom: 0, left: 40},
        width = 150,
        height = 100;

    //SVG
    const svg = d3.select("#lines")
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    //Data
    d3.csv("/data/line.csv").then( data =>  {

      const filterData = data.filter(d => d.field === setStep)
      const groupData = d3.group(filterData, d => d.field);

      svg.append("text")
          .attr("x", -10)
          .attr("y", -20)
          .attr("dy", ".35em")
          .text(setStep.replaceAll("_"," "));

      const xScale = d3.scaleLinear()
        .domain(d3.extent(filterData, d => d.year))
        .range([ 0, width ]);

      const xAxis = d3.axisBottom(xScale)
        .ticks(5)
        .tickSizeOuter(0)
        .tickFormat((d,i) => d.toString().replace(",",""))

      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      //Y axis
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(filterData, d => +d.n)])
        .range([ height, 0 ]);

      const yAxis = d3.axisLeft(yScale)
        .tickSizeOuter(0)

      svg.append("g")
        .call(yAxis);

      //Lines
      svg.selectAll("lines")
          .data(groupData)
          .join("path")
            .attr("fill", "none")
            .attr("stroke", "#555" )
            .attr("stroke-width", 1)
            .attr("d", d =>{
              return d3.line()
                .x(d => xScale(d.year))
                .y(d => yScale(+d.n))
                (d[1])
            })
            .on("click", function(event, d) {
              console.log(d)



              svg.selectAll("path")
                .attr("stroke", "#555" )

              d3.select(this)
                .attr("stroke","rgb(255,0,0)")
            })

    })

  }, [setStep])

  return (
    <>            
      <svg id='lines' viewBox="0 -77 200 200" xmlns="http://www.w3.org/2000/svg"/>
    </>
  )
}

export default Lines
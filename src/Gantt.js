import {useEffect} from 'react'
import * as d3 from 'd3'

const Gantt = () => {
  useEffect(() => {
    const margin = {top: 0, right: 0, bottom: 0, left: 30},
          width = 155,
          height = 35;

    const svg = d3.select('#gantt')
                  .append('g')
                  .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.csv('/data/gantt.csv').then( data =>  {
      const groups = ['Castle','Classic','Duplo','Space','Technic','Town'];      

      const xScale = d3.scaleLinear()
                      .domain([1958, 2024])
                      .range([0, width]);

      const xAxis = d3.axisBottom(xScale)
                      .tickSizeOuter(0)
                      .tickFormat((d,i) => d.toString().replace(',',''));

                    svg.append('g')
                        .attr('transform', 'translate(0,' + height + ')')
                        .call(xAxis)
                        .selectAll('text')
                          .attr('transform', 'translate(-10,0)rotate(-45)')
                          .attr('font-size','0.5em')
                          .style('text-anchor', 'end');

      const yScale = d3.scaleBand()
                        .domain(groups)
                        .range([0, height])
                        .padding([0.2]);

      const yAxis = d3.axisLeft(yScale)
                        .tickSizeOuter(0);

                    svg.append('g')
                        .call(yAxis)
                        .selectAll('text')
                          .attr('font-size','0.5em');

      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
          .attr('y', d => yScale(d.group))
          .attr('x', d => xScale(d.start)+0.5)
          .attr('width', d => xScale(d.end)-xScale(d.start))
          .attr('height',yScale.bandwidth())
          .attr('fill','#E3000B')
    });
  }, [])

  return (
    <>            
      <svg id='gantt' viewBox='-20 -100 250 250' fill='purple' xmlns='http://www.w3.org/2000/svg'/>
    </>
  )
}

export default Gantt
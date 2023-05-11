import {useEffect} from 'react'
import * as d3 from 'd3'

const Bar = () => {
  useEffect(() => {

    const margin = {top: -20, right: 0, bottom: 0, left: 45},
        width = 150,
        height = 100;

    const svg = d3.select('#bar')
                  .append('g')
                    .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.csv('/data/bar.csv').then( data => {

      svg.append('text')
          .attr('x', -40)
          .attr('y', -20)
          .attr('dy', '.35em')
          .attr('font-size', '.7em')
          .text('Years as Top Selling Theme');

    const x = d3.scaleBand()
                .domain(data.map(d => d.theme))
                .range([ 0, width ])
                .padding(0.2);

    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
          .attr('transform', 'translate(-10,0)rotate(-45)')
          .style('text-anchor', 'end');

    const y = d3.scaleLinear()
                .domain([0, 10])
                .range([ height, 0]);

    svg.append('g')
        .call(d3.axisLeft(y));

    svg.selectAll('mybar')
        .data(data)
        .enter()
        .append('rect')
          .attr('x', d=> x(d.theme))
          .attr('y', d=> y(d.occurance))
          .attr('width', x.bandwidth())
          .attr('height', d=> height - y(d.occurance)-0.5)
          .attr('fill', '#E3000B')
    });
  }, [])

  return (
    <>            
      <svg id='bar' viewBox='0 -70 200 200' xmlns='http://www.w3.org/2000/svg'/>
    </>
  )
}

export default Bar
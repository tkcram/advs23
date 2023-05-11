import {useEffect} from 'react'
import * as d3 from 'd3'

const Ebitda = () => {
  useEffect(() => {
    const margin = {top: 0, right: 0, bottom: 0, left: 12},
    width = 150,
    height = 40;

    const svg = d3.select('#ebitda')
                  .append('g')
                  .attr('transform', `translate(${margin.left},${margin.top})`);

        svg.append('text')
          .attr('x', 10)
          .attr('y', -20)
          .attr('dy', '.35em')
          .attr('font-size', '.3em')
          .text('Equity Ratio (%) & Annual Company Revenue (mDKK)');

    d3.csv('/data/ebitda.csv').then( data => {

      const y1 = d3.scaleLinear()
                    .domain([0, 14000])
                    .range([height, 0]);

                svg.append('g')
                    .style('color', 'black')
                    .attr('transform', `translate(${width + margin.right},0)`)
                    .call(d3.axisRight(y1).ticks(5, 's'))
                    .selectAll('text')
                      .attr('fill', 'black')
                      .attr('font-size','0.5em')
                      .attr('text-anchor', 'start');

      const y2 = d3.scaleLinear()
                    .domain([0, 100])
                    .range([height, 0]);
      const y2Axis = d3.axisLeft(y2)
                        .ticks(5)
                        .tickFormat(d => `${d.toString()}%`)

                  svg.append('g')
                  .style('color','#0055BF')
                  .call(y2Axis)
                  .selectAll('text')
                    .attr('fill', 'black')
                    .attr('font-size','0.5em')
                    .attr('text-anchor', 'end');

      const x = d3.scaleBand()
                  .domain(data.map(d => d.year))
                  .range([0, width])
                  .padding(0.1);

      const xAxis = d3.axisBottom(x)
                      .ticks(6)
                      .tickValues(['1998', '2000', '2005', '2010', '2015', '2020', '2022'])
                      .tickSizeOuter(0);

                svg.append('g')
                  .attr('transform', `translate(0,${height - margin.bottom})`)
                  .call(xAxis)
                  .selectAll('text')
                    .attr('font-size','0.5em')
                    .attr('transform', 'translate(-10,5)rotate(-45)');

      const line = d3.line()
                      .x(d => x(d.year) + x.bandwidth())
                      .y(d => y2(d.equity));

      svg.append('g')
          .selectAll('rect')
            .data(data)
            .join('rect')
              .attr('fill', d=> d.revenue > 0 ? 'black' : '#E3000B')
              .attr('x', d => x(d.year))
              .attr('width', x.bandwidth())
              .attr('y', d => d.revenue > 0 ? y1(d.revenue)-0.5 : y1(0) +0.5)
              .attr('height', d => y1(0) - y1(Math.abs(d.revenue)));

      svg.append('path')
          .attr('fill', 'none')
          .attr('stroke', '#0055BF')
          .attr('stroke-width', 1)
          .attr('d', line(data));
    });
  }, [])

  return (
    <>            
      <svg id='ebitda' viewBox='-10 -30 200 100' xmlns='http://www.w3.org/2000/svg'/>
    </>
  )
}

export default Ebitda
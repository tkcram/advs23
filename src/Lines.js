import {useEffect} from 'react'
import * as d3 from 'd3'

const Lines = ({setStep = 'sets_per_year'}) => {
  useEffect(() => {
    d3.select('#lines').selectAll('*').remove()

    const margin = {top: -20, right: 0, bottom: 0, left: 40},
        width = 150,
        height = 100;

    const svg = d3.select('#lines')
      .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
        
    d3.csv('/data/line.csv').then( data =>  {

      const filterData = data.filter(d => d.field === setStep)
      const groupData = d3.group(filterData, d => d.field);

      svg.append('text')
          .attr('x', 20)
          .attr('y', -20)
          .attr('dy', '.35em')
          .attr('font-size','0.5rem')
          .text(() => {
            if (['pieces_per_set_total', 'themes_per_year_new', 'themes_per_year_discontinued', 'pieces_per_year_new', 'staff_per_year'].includes(setStep)) {
              return setStep.replaceAll('_',' ')
            }
            return '';
          })

      const xScale = d3.scaleLinear()
                      .domain(d3.extent(filterData, d => d.year))
                      .range([ 0, width ]);
      const xAxis = d3.axisBottom(xScale)
                      .ticks(5)
                      .tickSizeOuter(0)
                      .tickFormat((d,i) => d.toString().replace(',',''));

                    svg.append('g')
                      .attr('transform', `translate(0, ${height})`)
                      .call(xAxis);

      const yScale = d3.scaleLinear()
                      .domain([0, d3.max(filterData, d => +d.n)])
                      .range([ height, 0 ]);

      const yAxis = d3.axisLeft(yScale)
                      .tickSizeOuter(0)

                    svg.append('g')
                      .call(yAxis);

      svg.selectAll('lines')
          .data(groupData)
          .join('path')
            .attr('fill', 'none')
            .attr('stroke', '#E3000B' )
            .attr('stroke-width', 1)
            .attr('d', d =>{
              return d3.line()
                .x(d => xScale(d.year))
                .y(d => yScale(+d.n))
                (d[1])
            })
    });
  }, [setStep])

  return (
    <>            
      <svg id='lines' viewBox='0 -77 200 200' xmlns='http://www.w3.org/2000/svg'/>
    </>
  )
}

export default Lines
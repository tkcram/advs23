import {useEffect} from 'react'
import * as d3 from 'd3'
import css from './Wingspan.module.css'

export const getData = () => {
    return d3.csv("/data/WingspanDiet.csv");
}


// export const colourGrey = (groups) => {
//     groups
//     .selectAll("path")
//         .transition()
//             .duration(1000)
//                 .attr("r", 10)  
//                 .style("fill", "#F2E8DC")
// }
const Diet = () => {
    useEffect(() => {
        if (document.querySelector("#diet g")){
            return;
        }

        const dietSvg = d3.select("#diet");
        const dietColor = d3.scaleOrdinal(d3.schemeSpectral[9]);

        //Donut Chart
        d3.csv("/data/WingspanDiet.csv").then(dataset => {
            dataset.forEach(function(d) {
                d.value = +d.pct_wt_or_vol;
            });

            const outerRadius = 100;
            const innerRadius = 60;

            const arcs = d3.arc()  
            .innerRadius(innerRadius) 
            .outerRadius(outerRadius)

            const pie = d3.pie()
            .value((d)=> d.value)

            const groups = dietSvg.selectAll("g.arc")
            .data(pie(dataset))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", `translate(${outerRadius+30},${outerRadius+30})`);

            groups.append("path")
            .attr("fill", (d,i)=> dietColor(i))
            .attr("stroke","black")
            .attr("d", arcs)
            .attr("class","dietSegments")
            .style("cursor","crosshair")
            .on("mouseover", function(event, d) {    
                d3.select(`#${css.dietTooltip}`)
                .transition()
                .duration(300)
                .style("opacity", 1)
                .style("display","block")
                .style("left", `${event.pageX+5}px`)
                .style("top", `${event.pageY+5}px`)

                d3.select(this).style("stroke", "red");

                d3.select(`#${css.dietTooltip}`)
                .html(`${d.data.taxon} <br> ${d.value}%`);
            }) 
            .on("mouseout", function (event, d, i){
                d3.select(`#${css.dietTooltip}`)
                .transition()
                .style("opacity", 0);

                d3.select(this).style("stroke", "black");
            })
            .on("mousemove", (event, d) =>{
                d3.select(`#${css.dietTooltip}`)
                .style("left", `${event.pageX+5}px`)
                .style("top", `${event.pageY+5}px`)
            })

            function colourGrey(){
                groups
                .selectAll("path")
                    .transition()
                        .duration(1000)
                            .attr("r", 10)  
                            .style("fill", "#F2E8DC")
            }

        });

    }, [])

    return (
        <>            
            <svg id='diet' width="255px" height="255px"/>
            <div id={css.dietTooltip}/>
        </>
    )
}

export default Diet
'use client';
import React from "react"
import { DataArray } from "@/app/data"
import PortfolioDetailDesign from "@/app/page/portfolio-detail-design"

const Portfolio = (props)=>{
return(
    <React.Fragment>
        <PortfolioDetailDesign
        data = {DataArray[props.params.id]}
        id={props.params.id}
        DataArray={DataArray}
        />
    </React.Fragment>
)
}

export default Portfolio
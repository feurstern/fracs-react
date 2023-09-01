"use client"
import React from "react"
import {Collapse} from 'antd'
import {certificationSchemes} from '../constant/index'

const CollapseSc1=()=>{
    const onChange=(key)=>{
        return key;
    }
    return <Collapse items={certificationSchemes} defaultActiveKey={['1']} onChange={onChange} />
}

export default CollapseSc1;

import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'

const Studies = ({ className }) => {
  return (
    <div className={className}>
      <h1>Formation</h1>
      {siteConfig.studies && siteConfig.studies.map(study => (
        <article key={study.year} className='study__item'>
          <div className="inner">
            <span className="study__year">{study.year}</span>
            <span className='study__degree'>{study.degree}</span>
             à 
            <span className='study__location'>{study.location}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Studies
import React from 'react'
import './style.css'

const About = props => {
  console.log('this is props:', props)
  const {content_urls, displaytitle, extract_html, api_urls} = props
  const pageUrl = content_urls.desktop.page
  const sourceUrl = api_urls.summary
  return (
    <div className="About">
      <h2 className="about__heading">About {displaytitle}</h2>
      <div className="wiki-content" dangerouslySetInnerHTML={{__html: extract_html}} />
      <p><a href={pageUrl} target="_blank" rel="noopener noreferrer">Full Wikipedia page</a></p>
      <address>Source: <a href={sourceUrl} target="_blank" rel="noopener noreferrer">Wikipedia API</a></address>
    </div>
  )
}

export default About
import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaViadeo, FaStackOverflow, FaStackExchange, FaEnvelope, FaPhone } from "react-icons/fa"
import siteConfig from '../../data/siteConfig'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Studies from '../components/studies'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render () {
    // validate siteConfig settings
    if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
      console.warn('WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.');
    }

    const title = siteConfig.siteTitle
    const {keywords} = siteConfig
    return (
      <Layout location={this.props.location}>
        <SEO
          title={title}
          keywords={keywords}
        />

        <Hero
          heroImg={siteConfig.siteCover}
          title={title}
        />

        <Wrapper className={this.props.className} >
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className='avatar'>
                <object
                  className="avatar__image"
                  type="image/svg+xml"
                  data='./images/avatar.svg'
                  title='user avatar'
                />
                <div className="social">
                  {siteConfig.social.github && <a className="social-link github" href={siteConfig.social.github}>
                    <FaGithub className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.linkedin && <a className="social-link linkedin" href={siteConfig.social.linkedin}>
                    <FaLinkedin className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.viadeo && <a className="social-link viadeo" href={siteConfig.social.viadeo}>
                    <FaViadeo className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.stackOverflow && <a className="social-link stackoverflow" href={siteConfig.social.stackOverflow}>
                    <FaStackOverflow className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.stackExchange && <a className="social-link stackexchange" href={siteConfig.social.stackExchange}>
                    <FaStackExchange className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.email && <a className="social-link email" href={`mailto:${siteConfig.social.email}`}>
                    <FaEnvelope className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.phone && <a className="social-link phone" href={`tel:${siteConfig.social.phone}`}>
                    <FaPhone className="social-icon" size="32" />
                  </a>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <About title='&Agrave; propos' text={siteConfig.authorDescription}/>
              </Col>
              <Col xs={4} sm={4}>
                <Skills title='Compétences' skills={siteConfig.skills} />
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Studies />
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }

  .avatar__image {
    max-width: 200px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  a.social-link.phone:hover {
    color: #40E25D;
  }

  a.social-link.viadeo:hover {
    color: #EE7252;
  }

  a.social-link.stackoverflow:hover {
    color: #DA670B;
  }
`

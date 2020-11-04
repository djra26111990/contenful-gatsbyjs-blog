import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import get from 'lodash/get'


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">¡Ooops!, parece que este recurso no está disponible o fue deshabilitado. Por favor intenta más tarde.</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex
import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Selamat datang di blog pribadi KabarSainTek</h1>
              <p>
                Mohon maaf, halaman ini masih dalam tahap pengembangan.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

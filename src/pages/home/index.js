import React from 'react'
import PageTitle from '@/components/page-title/index.js'

class Home extends React.Component {
  render ()  {
    return (
      <div id="page-wrapper">
        <PageTitle title="首页">
          <button className="btn btn-info">test</button>
        </PageTitle>
        <div className="row">
          <div className="col-md-12">
            body
          </div>
        </div>
      </div>
    )
  }
}

export default Home
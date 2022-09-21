import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

function Dashboard() {
  return (
    <div>
      <Main />
      <Row rowNumber = "1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowNumber = "2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowNumber = "3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowNumber = "4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowNumber = "5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  )
}

export default Dashboard;
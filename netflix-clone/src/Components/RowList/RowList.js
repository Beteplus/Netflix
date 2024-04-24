import React from 'react'
import Row from '../Row/Row'
import request from '../Axios/Request'

function RowList() {
  return (
    <>
    <Row title="Netflix Originals"
    fetchUrl={request.fetchNetflixOriginals}
    isLargeRow={true}
    />
    <Row title="Top Rated"
    fetchUrl={request.fetchTopRatedMovies}
    />
    <Row title="Trending"
    fetchUrl={request.fetchTranding}
    />
    <Row title="Action Movies"
    fetchUrl={request.fetchActionMovies}
    />
     <Row title="Romance Movies"
    fetchUrl={request.fetchRomanceMovies}
    />
    <Row title="Comedy Movies"
    fetchUrl={request.fetchComedyMovies}
    />
    <Row title="Documentaries"
    fetchUrl={request.fetchDocumenteries}
    />
    <Row title="Horror Movies"
    fetchUrl={request.fetchHorrorMovies}
    />
    <Row title="Fantacy"
    fetchUrl={request.fetchFantasy}
    />
     <Row title="Science Fiction"
    fetchUrl={request.fetchScience}
    />
     <Row title="Music"
    fetchUrl={request.fetchMusic}
    />
     <Row title="Mystry"
    fetchUrl={request.fetchMystry}
    />

    

    </>
  )
}

export default RowList
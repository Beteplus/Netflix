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
    fetchUrl={request.fetchDocumentary}
    />
    <Row title="Horror Movies"
    fetchUrl={request.fetchHorrorMovies}
    />
    <Row title="Fantacy"
    fetchUrl={request.fetchFantasyMovies}
    />
     <Row title="Science Fiction"
    fetchUrl={request.fetchScienceFictionMovies}
    />
     <Row title="Music"
    fetchUrl={request.fetchMusicMovies}
    />
     <Row title="Mystry"
    fetchUrl={request.fetchMysteryMovies}
    />

    

    </>
  )
}

export default RowList
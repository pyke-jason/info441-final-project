import type { NextPage } from 'next'
import { useState } from 'react';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import NavBar from '@components/NavBar';
import { InputData, ResultsPage} from '@components/homepage/';
import axios from 'axios';
import { JobListing } from './api/parser';

const Home: NextPage = () => {
    let [loading, setLoading] = useState(null);
    let [dataRetrieved, setDataRetrieved] = useState(null);

    const getData = (jobText: string, industry: string) => {
    setLoading(true)
    let request: JobListing;
    if (industry == "Software Engineering") {
        request = {
            industry : "swe",
            title : "engineer",
            text : jobText
        }
    } else if (industry == "UX Design") {
        request = {
            industry : "ux",
            title : "designer",
            text : jobText
        }
    }

    axios.post("/api/parser", request)
    .then(function (response) {
        setLoading(false);
        setDataRetrieved(response.data);
        })
    .catch(function (error) {
        console.log("ERROR AXIOS FAILURE?", error)
        })
    }

  return (
    <div style={{minHeight: '100vh',
                  backgroundImage: 'linear-gradient(217deg, rgba(129,162,255,.9), rgba(200,209,255,0.9) 100%)'}}>
      <TitleAndMetaTags />
      <NavBar />
      {!dataRetrieved && (
        <InputData loading={loading} getData={getData}/>
      )}
      {dataRetrieved && (
        <ResultsPage {...dataRetrieved} />
      )}
    </div>
  )
}

export default Home;

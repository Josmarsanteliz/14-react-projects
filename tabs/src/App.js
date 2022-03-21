import React,{useState,useEffect} from 'react';
import './index.css';
const url = 'https://www.course-api.com/react-tabs-project';




const App = () => {
const [loading,setLoading] = useState(true);
const [jobs,setJobs] = useState([]);
const [value,setValue] = useState(0);

const fetchJob = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
    console.log(newJobs);
}
useEffect(() => {
fetchJob();
}, [])

if(loading) {
    return <section className='section-loading'>
<h1>Loading...</h1>
</section>
}
const {company,dates,duties,title} = jobs[value];
    return (
        <section className='section'>
           <div className='title'>
          <h2>experience</h2>
          <div className='underline'></div>
           </div>
           <div className='jobs-center'>
             {/*btn container*/}
             <div className='btn-container'>
                 {
                     jobs.map((item,index) => {
                         return <button key={item.id} onClick={() =>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
                             {item.company}
                         </button>
                     })
                 }
             </div>
             {/*job info*/}
             <article className='job-info'>
                 <h3>{title}</h3>
                 <h4>{company}</h4>
                 <p className='job-date'>{dates}</p>
            {duties.map((duty,index) => {
  return <div key={index} className='job-desc'>
    <p>-{duty}</p>
  </div>
            })}
             </article>
           </div>
        </section>
    )
}

export default App;
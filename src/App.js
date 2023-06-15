import React, { useEffect, useState } from 'react';
import fetchApi from './api/api';
import List from './components/List';
import Paging from './components/Paging';
import Loader from './components/Loader';

function App() {

  const [users, setUsers] = useState([]);
  const [correntPage, setCorrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchApi(correntPage).then((res) => {
      setUsers(res.data);
      setCorrentPage(res.page);
      setTotalPage(res.total_pages); 
      setLoader(false);
    });
  }, [correntPage]);

  return (
    <div className='app container p-2'>
      {loader ? <Loader/> : <List users = {users}/>}
      <Paging corr = {correntPage} total = {totalPage} setCorrentPage={setCorrentPage} />
    </div>
  )
}

export default App;
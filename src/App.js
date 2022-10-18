
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const perPage = 2;
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    let url = `https://reqres.in/api/users?per_page=${perPage}&page=${page}`
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    setusers([...users, ...data.data]);

    setTotalPage(data.total_pages);
    setLoading(false);


  }

  useEffect(() => {
    getUsers();
  }, [page])




  return (
    <div className="container" style={{ padding: 20 }}>
      <div className="row">
        <div className="col-3"></div>
        <div class="col-6">
          <h3>All Users List</h3>
          {users.map((user, i) => {
            return <div key={i} className="box">
              <img src={user.avatar} />
              <div className="name">{user.first_name} {user.last_name}</div>
              <div className="email">{user.email}</div>
            </div>
          })}
          <div className="clearfix"></div>
          {totalPage !== page && <button className="btn btn-primary" onClick={() => setPage(page + 1)}>{loading ? 'Loading...' : 'Load More'}</button>}
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default App;

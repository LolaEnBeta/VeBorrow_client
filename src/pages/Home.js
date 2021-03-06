import React from 'react'

function Home() {
  return (
    <div className="row home-card">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src="images/veborrow.png" />
          </div>
          <div className="card-content">
            <span className="card-title">VeBorrow App</span>
            <p>Imagine that you are in the city and need to go somewhere, but you don’t want to pay the expensive price for underground/bus tickets, or you don’t have any account to rent the public bikes… If this happens to you, VeBorrow is your solution!
              VeBorrow is an app where the users can borrow the vehicles from other users, without paying any cost.
              Also, you can borrow your vehicle to other users that are in the same situation as you.
              </p>
              <br></br>
              <p>Let’s make this world more easy and friendly =)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
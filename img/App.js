import logo from './logo.svg';
import './App.css';
import search from './img/search.svg';
import bag from './img/bag.svg';
import heart from './img/heart.svg';
import calinder from './img/calinder.svg';
import ticket from './img/ticket.svg';
import mini_1 from './img/miniImgOne.svg';
import mini_2 from './img/miniImgTwo.svg';
import mini_3 from './img/miniImgThird.svg';
import usa from './img/usa.svg';
import itly from './img/itly.svg';

function App() {
  return (
    <div className="main">
      <div className='mainImg'>
      </div>
      <div className='mainTopBox'>
      </div>
      <div className='nav'>
        <div className='logo'></div>
        <div className='links'>
          <div className='link'>
            <img src={search}></img>
            Search
          </div>
          <div className='linkTwo'>
            Help
          </div>
          <div className='linkTwo'>
            Account
          </div>
          <div className='linkTwo'>
            <img src={bag} />
          </div>
        </div>
      </div>
      <div className='cari'>
        <h1>Cari Cari</h1>
        <p>Live from their sofa to yours. Get closer to your favorite <br />artists, and never miss out.</p>
      </div>
      <div className='circleArea'>
        <div className='circle'>
          <img src={heart} />
          <p>0</p>
          <p>Label</p>
        </div>
        <div className='circle'>
          <img src={calinder} />
          <p>0</p>
          <p>Label</p>
        </div>
        <div className='circle'>
          <img src={calinder} />
          <p>0</p>
          <p>Label</p>
        </div>
        <div className='circle'>
          <img src={calinder} />
          <p>0</p>
          <p>Label</p>
        </div>
      </div>
      <div className='contentBox'>
        <div className='upComingShows'>
          <h1>Up Coming Shows <div className='line'></div></h1>
          <div className='status'>
          <div className='localBox'>
            <div className='shadowBox'>
              <div className='statBox'>
                <div className='faceBox'></div>
                <div className='catoBox'>Folk</div>
                <div className='nameBox'>Benny Dayal</div>
                <div className='moreInfo'>More Info 
                <img src={ticket}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='localBox'>
            <div className='shadowBox'>
              <div className='statBox'>
                <div className='faceBox'></div>
                <div className='catoBox'>Bollywood</div>
                <div className='nameBox'>Vijay Yesudas</div>
                <div className='moreInfo'>More Info 
                <img src={ticket}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='localBox'>
            <div className='shadowBox'>
              <div className='statBox'>
                <div className='faceBox'></div>
                <div className='catoBox'>Folk</div>
                <div className='nameBox'>Andrea Jeremiah</div>
                <div className='moreInfo'>More Info
                <img src={ticket}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='localBox'>
            <div className='shadowBox'>
              <div className='statBox'>
                <div className='faceBox'></div>
                <div className='catoBox'>Folk</div>
                <div className='nameBox'>Shilpa Rao</div>
                <div className='moreInfo'>More Info
                <img src={ticket}></img>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='review'>
        <h1>Reviews <div className='line'></div></h1>
          <div className='reviewBox'>
            <div className='reviewShadow'>
              <div className='reviewCont'>
                <div className='head'>
                  <img src={mini_1}></img>
                  <div className='info'>
                    <h3>Hellen Jummy</h3>
                    <div className='subFlag'>
                      <img src={usa}></img>
                      <p>PALD ALTO. CA</p>
                    </div>
                  </div>
                </div>
                <div className='contentMat'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. 
                  </div>
              </div>
            </div>
            <div className='reviewShadow'>
              <div className='reviewCont'>
                <div className='head'>
                  <img src={mini_2}></img>
                  <div className='info'>
                    <h3>Isaac Oluwatemilorun</h3>
                    <div className='subFlag'>
                      <img src={itly}></img>
                      <p>PALD ALTO. CA</p>
                    </div>
                  </div>
                </div>
                <div className='contentMat'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. 
                  </div>
              </div>
            </div>
            <div className='reviewShadow'>
              <div className='reviewCont'>
                <div className='head'>
                  <img src={mini_3}></img>
                  <div className='info'>
                    <h3>Hellen Jummy</h3>
                    <div className='subFlag'>
                      <img src={usa}></img>
                      <p>PALD ALTO. CA</p>
                    </div>
                  </div>
                </div>
                <div className='contentMat'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. 
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
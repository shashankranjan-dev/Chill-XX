import React from 'react'
import './Navbar.css'

export default function Navbar() {

    const menu = document.querySelector('#menu');
    console.log(menu);
    const sidebar = document.querySelector('.sidebar');
    console.log(sidebar);
    
    menu.addEventListener('click', function () {
      sidebar.classList.toggle('show-sidebar');
    });


  return (

 

    <div>
    
    <div class="header">
      <div class="header__left">
        <i id="menu" class="material-icons">menu</i>
        <img
          src="/assets/vue.png"
          alt="" height="60px"/>
      </div>

      <div class="header__search">
        <form action="">
          <input type="text" placeholder="Search" />
          <button><i class="material-icons">search</i></button>
        </form>
      </div>

      <div class="header__icons">
        <i class="material-icons display-this">search</i>
        <i class="material-icons">videocam</i>
        <i class="material-icons">apps</i>
        <i class="material-icons">notifications</i>
        <i class="material-icons display-this">account_circle</i>
      </div>
    </div>
<div className='mainBody'>
    <div class="sidebar">
        <div class="sidebar__categories">
          <div class="sidebar__category">
            <i class="material-icons">home</i>
            <span>Home</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">local_fire_department</i>
            <span>Trending</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">subscriptions</i>
            <span>Subcriptions</span>
          </div>
        </div>
        <hr />
        <div class="sidebar__categories">
          <div class="sidebar__category">
            <i class="material-icons">library_add_check</i>
            <span>Library</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">history</i>
            <span>History</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">play_arrow</i>
            <span>Your Videos</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">watch_later</i>
            <span>Watch Later</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">thumb_up</i>
            <span>Liked Videos</span>
          </div>
        </div>
        <hr />
        <div class="sidebar__categories">
        <div class="sidebar__category">
            <i class="material-icons">flag</i>
            <span>Settings</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">report</i>
            <span>Report History</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">feedback</i>
            <span>Send Feedback</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">help</i>
            <span>Helpline Desk</span>
          </div>   
        </div>
      </div>
      <div class="videos">
        {/* <h1>Recommended</h1> */}

        <div class="videos__container">
        
          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/193914_thumb_665.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>
                  Arabic Kuthu Song| Pooja Hegde| Thalapathy 65| Anirudh Ravichander
                </h3>
                <a href="">Aditya Cinema</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>
      
          <div class="video">
            <div class="video__thumbnail">
             <a href="https://www.youtube.com/watch?v=hpwnlr-ZHB0"> <img src="/assets/199348-untitled-design-88.jpg" alt="" /></a>
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>Vikram Vedha Movie Tease Official</h3>
                <a href="">Tips Official</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>
   

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/icc-wcwc-2022-match-highlights-thumbnail-f844e8ad-919a-4bc2-b709-d338b63736fa.png" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>ICC 2022 Highlights | SA vs AUS | Women Cricket | WC</h3>
                <a href="">Netflix</a>
                <span>10M Views • 11 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
                <a href=""> Chispa Motivation</a>
                <span>10M Views • 1 Month Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Javascript Fundamentals</h3>
                <a href="">Coding Addict</a>
                <span>179K • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>470K Views • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/lyteCache.jfif" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Srivalli Song| Pushpa Song| Rashmika Mandhana| Allu Arjun| Tamil</h3>
                <a href=""> Web Dev Simplified </a>
                <span>875K Views • 1 Year Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/maxresdefault (1).jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>MBA Chai Wala - Interview</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>36K Views • 1 Day Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/maxresdefault (3).jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>
                KGF  Theme Song| BGM| Yash| Sanjay Dutt| Kannada| Tamil| Telugu| Hindi| Malayalam
                </h3>
                <a href="">T-series</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/maxresdefault (4).jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>Make Joke Of| Funny Video| The CourtRoom</h3>
                <a href="">Make Joke Of</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India</h3>
                <a href="">Netflix</a>
                <span>12M Views • 11 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>RoomMate| Stand Up Comedy| Anubhav Singh Bassi</h3>
                <a href=""> Anubhav Bassi</a>
                <span>15.6M Views • 1 Month Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/mqdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Life Of Bangad Billa| Funny Memes Video| Bangad Billa| Part 12</h3>
                <a href="">Coding Addict</a>
                <span>179K • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/q7HcIge.png" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build HTML, CSS, JavaScript Projects - Vanilla JavaScript Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>470K Views • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/The Bullet Song.png" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>The Bullet Song| Ram Potheni| Tamil</h3>
                <a href="">Tamil Edits </a>
                <span>875K Views • 1 Year Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/The-Kapil-Sharma-Show-759-1.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>The Kapil Sharma Show| Sony Liv| Comedy Video| Ranveer Singh| Sara Ali Khan</h3>
                <a href=""> Sony Set</a>
                <span>256K Views • 1 Day Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>
                  Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn
                </h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>Build A Password Generator with React JS - Beginners Tutorial</h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/x1080.jfif" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Sandeep Maheswari | Motivation Videos | Everything is Possible | Netflix India</h3>
                <a href="">Netflix</a>
                <span>80k Views • 11 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/Youtube-Thumbnail-5-Best-Design-Tools-11.webp" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Steve Smith Hundred | Amazing 100 | AUS vs Ind | Test Match</h3>
                <a href=""> Sports.com.au</a>
                <span>10M Views • 1 Month Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="/assets/yVNSCGfg.jfif" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Tribute To The Legend | Mahendra Singh Dhoni | Indian Cricketer</h3>
                <a href="">Star Sports</a>
                <span>179K • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>470K Views • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build Real Time Face Detection With JavaScript</h3>
                <a href=""> Web Dev Simplified </a>
                <span>875K Views • 1 Year Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>AWS Basics for Beginners - Full Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>36K Views • 1 Day Ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  
    </div>
  )
}

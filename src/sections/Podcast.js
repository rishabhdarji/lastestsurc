import React from 'react'
import Footer from './Footer'
import ScrollButton from './GoToTop/GoToTop'
import { Inner } from './InnerHeader'

export const Podcast = () => {
  return (
   <>
    <div className="absolute-header">
       
       <Inner/>
   <br>
   </br>
   <br>
   </br>
   <section id="pageContent">
    <div className="container">
        <div className="pageContainer mb20 pb-md-30"><div className="pageContent">
                <div className="rte">
                    <iframe src="https://open.spotify.com/embed/episode/2TpyObC0rVXvotFNE5TuPC" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://open.spotify.com/embed/episode/0ylUvk7gHAxcvr9miQvWaV" allowtransparency="true" allow="encrypted-media" width="100%" height="232" frameborder="0"></iframe>
<iframe src="https://open.spotify.com/embed/episode/6n79NKlFV0KJWNKja0hgIi?theme=0" allowtransparency="true" allow="encrypted-media" width="100%" height="232" frameborder="0"></iframe>
<iframe src="https://open.spotify.com/embed/episode/0mmVejxVpiNpXNmwOQ8CNF" allowtransparency="true" allow="encrypted-media" width="100%" height="232" frameborder="0"></iframe>
<iframe src="https://open.spotify.com/embed/episode/3JSxMqgpWh8od4egBsjzcV" allowtransparency="true" allow="encrypted-media" width="100%" height="232" frameborder="0"></iframe> 
<iframe src="https://open.spotify.com/embed/episode/4l0UisgQ8J81F1TOkR8bRY" allowtransparency="true" allow="encrypted-media" width="100%" height="232" frameborder="0"></iframe> 
<iframe src="https://open.spotify.com/embed/episode/3Kq20ixEjLmPmcG5DHxmIp" allowtransparency="true" allow="encrypted-media" width="100%" height="232" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
<ScrollButton/>
</div>
   </>
  )
}


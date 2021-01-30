import React from 'react';
import './styles.css';

function funcblog()
{
    return (
        <selection className="blogcontent">
            <article className="blog">
                <h1 className="blogtitle"> This is Me!</h1> 
                {/*hr tag deleted */}
        <p className="blogtext"> 
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo.
        </p>
            </article>
        </selection>
    );
}
export default funcblog;
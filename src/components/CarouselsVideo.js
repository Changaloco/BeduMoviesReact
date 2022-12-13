
import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function CarouselsVideo(props) {

    return (

        <div >
            <Carousel fade>
                {props.video.map((video) => {
                    return (
                        <Carousel.Item key={video.id}>
                            <iframe
                                width="100%"
                                height="500px"
                                src={`https://www.youtube.com/embed/${video.key}`}
                                allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>

    );

}




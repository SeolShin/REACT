import React from 'react';

const Card = ({
    title,
    email,
    id
}) => {
        return ( <
            div className = 'tc grow bg-white br3 ma2 dib bw2 shadow-5' >
            <
            a href = "#"
            class = "link black db mw5 pa2 br2 ba b--black-10 shadow-1" >
            <
            img alt = "${title}"
            class = ".br4 db mb2 mw-100"
            src = {
                `https://zoo-garage.ams3.digitaloceanspaces.com/flower/${id}.jpg`
            }
            /> <
            span class = "db f6 pv2" > {
                title
            } < /span> <
            /a> <
            /div>
        );
}

export default Card;


import React from 'react';
import Card from './Card';


const CardList = ({ fList }) => {

	return (
			<div>
			{
				fList.map((user, i) => {
					return(
						<Card
							key={i} 
							id={fList[i].id} 
							title={fList[i].title} 
							email={fList[i].url}
						/>
					);
				})
			}	
			</div>
	);
}

export default CardList;


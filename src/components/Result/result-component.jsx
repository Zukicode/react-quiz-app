import React from 'react';

//Style
import './result-component.scss';

//Images
import iconGroundhog from './../../images/96884-groundhog-day-cartoon-facial-expression-whiskers-for-ecards.png';
import { questions } from '../../data';

export const Result = ({ isVisible, correctAnswer, restartGame }) => {
	return (
		<div className={isVisible ? 'result active' : 'result'}>
			<img src={iconGroundhog} alt='groundhog' width={'200px'} />
			<p>
				У вас <span>{correctAnswer}</span> правльних відповіді з{' '}
				{questions.length}
			</p>
			<button onClick={restartGame}>Спробувати знову</button>
		</div>
	);
};

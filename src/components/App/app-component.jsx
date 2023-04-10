import React, { useEffect, useState } from 'react';

//Style
import './app-component.scss';

//Component
import { Game } from '../Game';
import { Result } from '../Result/result-component';

//FAKE Data
import { questions } from './../../data.js';
import { numberToProcent } from '../../utils/utils';

export const App = () => {
	const [isVisible, setVisible] = useState(false);
	const [correctAnswer, setCorrectAnswer] = useState(0);
	const [activeAnswer, setActiveAnswer] = useState(0);
	const [proggres, setProggres] = useState(0);

	const restartGame = () => {
		setActiveAnswer(0);
		setCorrectAnswer(0);
		setVisible(false);
		setProggres(0);
	};

	return (
		<div className='app'>
			{!isVisible && (
				<Game
					proggres={proggres}
					setVisible={setVisible}
					questions={questions}
					correctAnswer={correctAnswer}
					setCorrectAnswer={setCorrectAnswer}
					activeAnswer={activeAnswer}
					setActiveAnswer={setActiveAnswer}
					setProggres={setProggres}
				/>
			)}
			<Result
				isVisible={isVisible}
				restartGame={restartGame}
				questions={questions}
				correctAnswer={correctAnswer}
			/>
		</div>
	);
};

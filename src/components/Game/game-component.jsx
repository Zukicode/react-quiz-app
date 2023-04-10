import React, { useEffect, useState } from 'react';
import { numberToProcent } from '../../utils/utils';

//Style
import './game-component.scss';

export const Game = ({
	questions,
	correctAnswer,
	setCorrectAnswer,
	activeAnswer,
	setActiveAnswer,
	setVisible,
	proggres,
	setProggres,
}) => {
	const checkCorrect = choose => {
		if (activeAnswer === questions.length - 1) {
			if (choose === questions[activeAnswer].correct) {
				setCorrectAnswer(correctAnswer + 1);
			}
			setVisible(true);
		} else {
			if (choose === questions[activeAnswer].correct) {
				setCorrectAnswer(correctAnswer + 1);
			}

			setActiveAnswer(activeAnswer + 1);
			setProggres(prev => prev + numberToProcent(questions.length));
		}
	};

	return (
		<div className='game'>
			<div className='game-progress'>
				<div
					style={{ width: `${proggres}%` }}
					className='game-progress_active'
				></div>
			</div>

			<div className='game-info'>
				<h1 className='game-info_title'>{questions[activeAnswer].title}</h1>
				<p className='game-info_count'>
					{activeAnswer + 1}/{questions.length}
				</p>
			</div>

			<div className='game-answers'>
				<ul>
					{questions[activeAnswer].variants.map((answer, index) => (
						<li onClick={() => checkCorrect(index)} key={index}>
							{answer}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

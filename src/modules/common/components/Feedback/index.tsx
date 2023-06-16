import { FC } from 'react';

import FeedbackForm from '@modules/common/components/FeedbackForm';

import s from './Feedback.module.scss';

const Feedback: FC<{ messageText?: string }> = ({ messageText }) => {
	return (
		<div className={s.container}>
			<FeedbackForm messageText={messageText} />
		</div>
	);
};

export default Feedback;

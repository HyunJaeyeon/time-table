//TODO: 수정 필요

import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const onNextClick = () => navigate(+1);
const onPreviousClick = () => navigate(-1);

export { onNextClick, onPreviousClick };

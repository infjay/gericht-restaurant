import React from 'react';
import { images , data } from '../../constants';
import { SubHeading } from '../../components'; 



import './Laurels.css';
import { MdArrowForwardIos } from 'react-icons/md';

const AwardCard = ( {award: {imgUrl, title , subtitle }} )=> (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
  </div>
)
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id="awards">
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & recognition" />
      <h1 className='headtext__cormorant'>Awards & recognition</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((award)=> <AwardCard award={award} key={award.title} />) }
      </div>

      <div className='app__wrapper_img'>

      </div>
    </div>
  </div>
);

export default Laurels;

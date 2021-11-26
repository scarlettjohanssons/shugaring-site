import React, { useState } from 'react';
import Title from '../../Title/Title';
import Image1 from '../../../styles/images/foot.jpg';
import Image2 from '../../../styles/images/hands.jpg';
import Image7 from '../../../styles/images/pregnance.jpg';
import Image8 from '../../../styles/images/teen.jpg';
import Image3 from '../../../styles/images/photo3.svg';
import Image4 from '../../../styles/images/photo2.svg';
import Image5 from '../../../styles/images/photo1.svg';
import Image6 from '../../../styles/images/photo5.svg';
import { questionsText } from '../../../helper/questionsTextConfig';

const Questions = () => {

  const [whatIsOpen, setWhatIsOpen] = useState('');

  return (
    <section class="letest-blog ptb--70" id="questions">
      <div class="container">
        <div class="section-title text-black">
          <Title titleName='Questions' />
          {/* <h2>Questions</h2> */}
        </div>
        <div class="row">
          <div class="blog-list">

            <div className='blog-list__item'>
              <div className='list__item questions_content'>
                <img className='questions_img' src={Image5} alt="image description" />
              </div>

              <div class="list__item list__item--hidden"></div>

              <div class="list__item">
                <div class="list-item">
                  <div class="blog-thumbnail">
                    <img src={Image1} alt="blog thumbnail" />
                  </div>
                  <h4 class="blog-title">{questionsText.text1.title}</h4>
                  <a
                    class="read-more"
                    name='text1'
                    onClick={(e) => setWhatIsOpen(e.target.name)}
                  >
                    Read More
                  </a>
                  <div class="blog-summery">
                    <p className={`${whatIsOpen !== 'text1' ? 'questions_hidden' : ''}`}>{questionsText.text1.body}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='blog-list__item'>
              <div class="list__item">
                <div class="list-item">
                  <div class="blog-thumbnail">
                    <img src={Image8} alt="blog thumbnail" />
                  </div>
                  <h4 class="blog-title">{questionsText.text2.title}</h4>
                  <a
                    class="read-more"
                    name='text2'
                    onClick={(e) => setWhatIsOpen(e.target.name)}
                  >
                    Read More
                  </a>
                  <div class="blog-summery">
                    <p className={`${whatIsOpen !== 'text2' ? 'questions_hidden' : ''}`}>{questionsText.text2.body}</p>
                  </div>
                </div>
              </div>

              <div class="list__item list__item--hidden-right"></div>

              <div className='list__item questions_content questions_content--right'>
                <img className='questions_img' src={Image4} alt="image description" />
              </div>
            </div>

            <div className='blog-list__item'>
              <div className='list__item questions_content'>
                <img className='questions_img' src={Image3} alt="image description" />
              </div>

              <div class="list__item list__item--hidden"></div>

              <div class="list__item ">
                <div class="list-item">
                  <div class="blog-thumbnail">
                    <img src={Image7} alt="blog thumbnail" />
                  </div>
                  <h4 class="blog-title">{questionsText.text3.title}</h4>
                  <a
                    class="read-more"
                    name='text3'
                    onClick={(e) => setWhatIsOpen(e.target.name)}
                  >
                    Read More
                  </a>
                  <div class="blog-summery">
                    <p className={`${whatIsOpen !== 'text3' ? 'questions_hidden' : ''}`}>{questionsText.text3.body}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='blog-list__item'>
              <div class="list__item">
                <div class="list-item">
                  <div class="blog-thumbnail">
                    <img src={Image2} alt="blog thumbnail" />
                  </div>
                  <h4 class="blog-title">{questionsText.text4.title}</h4>
                  <a
                    class="read-more"
                    name='text4'
                    onClick={(e) => setWhatIsOpen(e.target.name)}
                  >
                    Read More
                  </a>
                  <div class="blog-summery">
                    <p className={`${whatIsOpen !== 'text4' ? 'questions_hidden' : ''}`}>{questionsText.text4.body}</p>
                  </div>
                </div>
              </div>

              <div class="list__item list__item--hidden-right"></div>

              <div className='list__item questions_content questions_content--right'>
                <img className='questions_img' src={Image6} alt="image description" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

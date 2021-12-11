import React, { useState } from 'react';
import Title from '../../Title/Title';
import Image1 from '../../../styles/images/foot2.jpg';
import Image2 from '../../../styles/images/hair-bad2.jpg';
import Image7 from '../../../styles/images/pregnance2.jpg';
import Image8 from '../../../styles/images/teen.jpg';
import Image9 from '../../../styles/images/after-shugaring.jpg';
import Image3 from '../../../styles/images/photo3.svg';
import Image4 from '../../../styles/images/photo2.svg';
import Image5 from '../../../styles/images/photo1.svg';
import Image6 from '../../../styles/images/photo5.svg';
import { questionsText, questionsText1 } from '../../../helper/questionsTextConfig';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1
  }
};

const Questions = () => {

  const [whatRead, setWhatRead] = useState('text1');

  return (
    <section class="letest-blog ptb--10" id="questions">
      <div class="container">
        <div class="section-title text-black">
          {/* <Title titleName='Questions' /> */}
        </div>
        <div class="row">
          <Carousel
            swipeable={false}
            responsive={responsive}
            infinite={true}
          >
            <div className='blog-list__item'>
              <div class='list__item item-block'>
                <div class="list-item">
                  <div class="blog-thumbnail1">
                  </div>
                  <img className='disabled' src={Image1} alt="blog thumbnail" />
                  <h4 class="blog-title">{questionsText.text1.title}</h4>
                  <div class="blog-summery">
                  </div>
                  <a
                    class="read-more"
                    name='text1'
                    onClick={(e) => {
                      setWhatRead(e.target.name)
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className='blog-list__item'>
              <div class="list__item item-block">
                <div class="list-item">
                  <div class="blog-thumbnail2">
                  </div>
                  <img className='disabled' src={Image8} alt="blog thumbnail" />
                  <h4 class="blog-title">{questionsText.text2.title}</h4>
                  <div class="blog-summery">
                  </div>
                  <a
                    class="read-more"
                    name='text2'
                    onClick={(e) => {
                      setWhatRead(e.target.name)
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* <div class="list__item list__item--hidden-right"></div> */}

              {/* <div className='list__item questions_content questions_content--right'>
                <img className='questions_img' src={Image4} alt="image description" />
              </div> */}
            </div>

            <div className='blog-list__item'>

              <div class="list__item item-block">
                <div class="list-item">
                  <div class="blog-thumbnail3">
                  </div>
                  <img className='disabled' src={Image7} alt="blog thumbnail" />
                  <h4 class="blog-title">{questionsText.text3.title}</h4>
                  <div class="blog-summery">
                  </div>
                  <a
                    class="read-more"
                    name='text3'
                    onClick={(e) => {
                      setWhatRead(e.target.name)
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className='blog-list__item'>
              <div class="list__item item-block">
                <div class="list-item">
                  <div class="blog-thumbnail4">
                  </div>
                  <img className='disabled' src={Image2} alt="blog thumbnail" />
                  <h4 class="blog-title">{questionsText.text4.title}</h4>
                  <div class="blog-summery">
                  </div>
                  <a
                    class="read-more"
                    name='text4'
                    onClick={(e) => {
                      setWhatRead(e.target.name)
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* <div class="list__item list__item--hidden-right"></div> */}

              {/* <div className='list__item questions_content questions_content--right'>
                <img className='questions_img' src={Image6} alt="image description" />
              </div> */}
            </div>

            <div className='blog-list__item'>
              <div class="list__item item-block">
                <div class="list-item">
                  <div class="blog-thumbnail5">
                  </div>
                  <img className='disabled' src={Image9} alt="blog thumbnail" />
                  <h4 class="blog-title">{questionsText.text5.title}</h4>
                  <div class="blog-summery">
                  </div>
                  <a
                    class="read-more"
                    name='text5'
                    onClick={(e) => {
                      setWhatRead(e.target.name)
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* <div class="list__item list__item--hidden-right"></div> */}

              {/* <div className='list__item questions_content questions_content--right'>
                <img className='questions_img' src={Image6} alt="image description" />
              </div> */}
            </div>





          </Carousel>
          <div>
            {questionsText1.map(question => {
              if (whatRead === question.text) {
                return (
                  <div key={question.id}>
                    <h1>{question.title}</h1>
                    <p>{question.body}</p>
                    {question.list && (
                      <div className="question-ft">
                        <ol>
                          {question.list.map(item => (
                            <li>
                              <p>
                                {item}
                              </p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {question.body && (
                      <p>{question.body2}</p>
                    )}
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

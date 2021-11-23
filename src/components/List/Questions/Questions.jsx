import React from 'react';
import Title from '../../Title/Title';

const Questions = () => {
  return (
    <section class="letest-blog ptb--70" id="questions">
      <div class="container">
        <div class="section-title text-black">
          <Title titleName='Questions' />
          {/* <h2>Questions</h2> */}
        </div>
        <div class="row">
          <div class="row blog-list">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="list-item">
                <div class="blog-thumbnail">
                  {/* <a href="blog-details.html"><img src="assets/img/blog/blog-thumb1.jpg" alt="blog thumbnail" /></a> */}
                </div>
                <h4 class="blog-title">Как подготовиться к эпиляции</h4>
                <div class="blog-summery">
                  <p>
                    Очень часто девочки переживают перед эпиляцией, а особенно если в первый раз.
                    «Как же я лягу?», «А вдруг у меня там что-то не так?», «А что она обо мне подумает?».
                    Поверьте, мастера интересуют только ваши волосы. Расслабьтесь и отбросьте все лишние
                    мысли. Я видела все и много раз. И все-таки, как мы готовимся к процедуре?
                  </p>
                </div>
                <a class="read-more">Read More</a>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="list-item">
                <div class="blog-thumbnail">
                  {/* <a href="blog-details.html"><img src="assets/img/blog/blog-thumb2.jpg" alt="blog thumbnail" /></a> */}
                </div>
                <h4 class="blog-title">Можно ли делать эпиляцию детям, подросткам?</h4>
                <div class="blog-summery">
                  <p>
                    Давайте вспомним, что такое шугаринг. Шугаринг – это самый щадящий
                    вид эпиляции (удаляет волос с корнем). Выполняется проффесиональной
                    сахарной пастой, убирая волосы ПО росту, что практически исключает
                    травматизацию кожи.
                  </p>
                </div>
                <a class="read-more">Read More</a>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="list-item">
                <div class="blog-thumbnail">
                  {/* <a href="blog-details.html"><img src="assets/img/blog/blog-thumb3.jpg" alt="blog thumbnail" /></a> */}
                </div>
                <h4 class="blog-title">Шугаринг беременным</h4>
                <div class="blog-summery">
                  <p>
                    Беременность – это не болезнь и это не имеет противопоказаний
                    к проведению эпиляции. НО! Нужно воздержаться от процедуры в
                    первый триместр. Это связано с тем, что именно в этот период
                    формируется сердечно – сосудистая система плода. В это время
                    закрепляется все процессы и организм женщины несет большую
                    нагрузку. Поэтому, если не обязательно – лучше не делать.
                  </p>
                </div>
                <a href="blog.html" class="read-more">Read More</a>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="list-item">
                <div class="blog-thumbnail">
                  {/* <a href="blog-details.html"><img src="assets/img/blog/blog-thumb3.jpg" alt="blog thumbnail" /></a> */}
                </div>
                <h4 class="blog-title">Вросшие волосы</h4>
                <div class="blog-summery">
                  <p>
                    К сожалению мы очень часто сталкиваемся с таким понятием
                    как вросшие волосы. Причины, которые могут вызвать такие
                    неприятные последствия могут быть разные. Это бритье,
                    неправильный уход за кожей или попросту его отсутствие,
                    некачественно сделанная процедура эпиляции (не придерживаясь
                    протокола процедуры). Но и с этой проблемой можно справиться,
                    если правильно определить ее причину и начать с ней работать.
                    И очень скоро кожа снова будет радовать вас своей гладкостью,
                    чистотой и красотой.
                  </p>
                </div>
                <a href="blog.html" class="read-more">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

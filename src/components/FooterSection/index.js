import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" className="fh5co-section" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Terima Kasih</h2>
              <p className="info">
                Atas segala do'a dan restu saudara/i,
                <br /> kami ucapkan terima kasih. <br />
              </p>
              <p className="info">Om Shanti, Shanti, Shanti Om</p>
            </div>
          </div>
        </div>
      </div>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2021 Pratiwi & Ade Wedding. All Rights Reserved.</small>
                <small className="block" style={{ marginTop: 20 }}>
                  <a href="https://www.instagram.com/chandraaryadi/" target="_blank">
                    <i className="icon-instagram" style={{ fontSize: 24 }}></i>
                  </a>
                  <br></br>
                  Made with <i className="icon-heart2" style={{ color: '#f7606b' }}></i> by
                  <a href="https://www.instagram.com/chandraaryadi/" target="_blank" style={{ marginLeft: 5 }}>
                    chandraaryadi
                  </a>
                </small>
                {/* <small className="block">
                  Covid-19 Icon by{' '}
                  <a href="https://www.flaticon.com/packs/covid-protection-measures-5" target="_blank" rel="noreferrer">
                    Flat Icon - Frepik
                  </a>
                </small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank" rel="noreferrer">
                    Anandito Anisa - Pernikahan Impian
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);

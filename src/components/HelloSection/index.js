import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Om Swastyastu</h2>
              <p className="info">
                Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang Maha Esa. Kami bermaksud mengundang
                Bapak/Ibu/Saudara/i pada Pernikahan Putra - Putri kami
              </p>
              {/* <h3 className="hs main-font">{finalSubtitle}</h3> */}
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Ni Putu Ade Pratiwi A.Md. Farm</h3>
                <p className="parent-name parent-name__top">
                  Putri dari pasangan I Made Wardana <br />& Ni Made Suriati
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Kadek Ade Wira Putra, S.Ip., M.Ap.</h3>
                <p className="parent-name">
                  Putra dari pasangan I Putu Sudana <br />& Ni Ketut Suwitri
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;

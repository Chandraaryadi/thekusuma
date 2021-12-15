import React from 'react';

import IconMask from './assets/face-mask.png';
import IconSocialDistancing from './assets/social-distancing.png';
import IconGuest from './assets/parents.png';
import IconDoctor from './assets/doctor.png';
import IconClock from './assets/clock.png';
import IconQRcode from './assets/qr.png';
import SectionBox from './SectionBox';

function CovidSection() {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Panduan Protokol Covid-19</h2>
            <p className="info" style={{ marginBottom: '-16px' }}>
              Keberlangsungan acara ini mengacu pada pedoman kesehatan dari Kementerian Kesehatan:
            </p>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
          <div className="col-md-12">
            <SectionBox icon={IconMask} text="Wajib menggunakan masker dan dilakukan pengecekan suhu." />
            <SectionBox icon={IconSocialDistancing} text="Pembatasan jarak dan pembatasan jumlah tamu." />
            <SectionBox icon={IconGuest} text="Hindari kontak fisik." />
            <SectionBox icon={IconGuest} text="Cuci tangan dan gunakan hand sanitizer." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;

import React from "react";
function Home() {
    return (
        <React.Fragment>
            <div id="demo" className="carousel slide" data-bs-ride="carousel" >


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" style={{height:"5px",width:'4.5%'}} data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" style={{height:"5px",width:'4.5%'}} data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" style={{height:"5px",width:'4.5%'}} data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" style={{height:"5px",width:'4.5%'}} data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/Slide-show-website-2.png" alt="Los Angeles" id="img" className="d-block " style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/t-1.jpg" alt="Chicago" id="img" className="d-block" style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">
                            <h3>LODON</h3>
                            <p>Thank you, LODON!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/SoICT-Talk-5.jpg" alt="New York" id="img" className="d-block" style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">
                            <h3>OSAKA</h3>
                            <p>We love the anime!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/%E1%BA%A2nh-chung.jpg" alt="New York" id="img" className="d-block" style={{ width: '100%', height: '100%' }} />
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev"  type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div className="text-center my-5 fs-3">
                <strong>TIN M???I NH???T</strong>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/BKAI-NAVER-Challenge-2022-02.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">V??NG CHUNG K???T BKAI-NAVER CHALLENGE 2022</strong>
                        </div>
                        <div className="content">
                            <span>
                            BKAI-NAVER Challenge 2022 l?? ho???t ?????ng thu???c d??? ??n h???p t??c nghi??n c???u AI gi???a Trung t??m BKAI, Tr?????ng CNTT&TT v?? T???p...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/05-Hoi-truong.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">INNOVATION DAY V?? CU???C THI S??NG T???O ?? T?????NG SINH VI??N CREATIVE</strong>
                        </div>
                        <div className="content">
                            <span>
                            Ng??y 14/05/2022, Innovation Day 2022 ???? di???n ra th??nh c??ng v???i r???t nhi???u ho???t ?????ng, tr???i nghi???m th?? v???, bao g???m: T???a...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">SOICT ?????ng h??nh v?? h??? tr??? sinh vi??n Nguy???n V??n Quy???n</strong>
                        </div>
                        <div className="content">
                            <span>
                                Nguy???n V??n Quy???n l?? m???t sinh vi??n l???p KHMT04 K65 thu???c Tr?????ng CNTT&TT, ?????i h???c B??ch khoa H?? N???i. Ho??n c???nh gia...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/DAT01879.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">???T???NG K???T ?????I H???I ?????I BI???U ??O??N THANH NI??N TR?????NG C??NG NGH???</strong>
                        </div>
                        <div className="content">
                            <span>
                            ???V??o h???i 14h ng??y 07/05/2022 t???i H???i tr?????ng d???c t??a nh?? B1, ???????c s??? ?????ng ?? c???a ??o??n thanh ni??n Tr?????ng ?????i...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="color-red p-1 text-center mt-5 ">
                <span className="text-white">Xem th??m tin t???c</span>
            </div>
            <div className="position-relative d-flex justify-content-center" style={{ height: '550px' }}>
                <div className="w-100">
                    <img src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg" id="img" alt="" style={{ width: '100%', height: '550px' }} />
                </div>
                <div className="position-absolute">
                    <div className=" top-0 my-4 fs-3 text-center p-4">
                        <strong className="text-white">S??? ki???n m???i nh???t</strong>
                    </div>
                    <div className="row row-cols-4 px-5">
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Khai-Truong-EdTech.jpg" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">
                                       L??? ra m???t "Trung t??m c??ng ngh??? chuy???n ?????i"                     </strong>
                                </div>
                                <div className="content">
                                    <span className="">
                                        th???i gian 9:45 AM
                                        ?????a ??i???m: S???nh t???ng 1-4 v?? H???i tr?????ng B1 - Tr?????ng ?????i h???c B??ch khoa H?? N???i
                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">05</strong>
                                <br />
                                <strong className="text-white">TH03</strong>
                            </div>
                        </div>
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-final.png" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">INNOVATION DAY 2022</strong>
                                </div>
                                <div className="content">
                                    <span className="">
                                        Th???i gian b???t ?????u: 8:00 am 14/05/2022
                                        ?????a ??i???m: S???nh t???ng 1-4 v?? H???i tr?????ng B1 - Tr?????ng ?????i h???c B??ch khoa H?? N???i
                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">05</strong>
                                <br />
                                <strong className="text-white">TH15</strong>
                            </div>
                        </div>
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-fb-final-of-final.png" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">CU???C THI T??M KI???M ?? T?????NG S??NG T???O SINH VI??N 2022 </strong>
                                </div>
                                <div className="content">
                                    <span className="">
                                        Th???i gian b???t ?????u: 8:00 am 08/05/2022
                                        ?????a ??i???m: T??a nh?? B1 - ?????i h???c B??ch khoa H?? N???i
                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">05</strong>
                                <br />
                                <strong className="text-white">TH10</strong>
                            </div>
                        </div>
                        <div className="col position-relative">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/LE-KHANH-THANH-1.png" alt="" style={{ width: '100%' }} />
                            <div className="bg-white p-3">
                                <div className="title mt-5">
                                    <strong className="fs-5">Ra m???t Trung t??m Qu???c t??? v??? Tr?? tu??? nh??n t???o</strong>
                                </div>
                                <div className="content">
                                    <span className="">
                                        Th???i gian b???t ?????u: 1:30 pm 04/03/2022
                                        ?????a ??i???m: Ph??ng 404, Nh?? B1, Tr?????ng ?????i h???c B??ch khoa H?? N???i
                                    </span>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg position-absolute p-3 mx-5" style={{ top: '30%' }}>
                                <strong className="text-white fs-5">04</strong>
                                <br />
                                <strong className="text-white">TH03</strong>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="color-red p-1 text-center">
                <span className="text-white">Xem th??m s??? ki???n</span>
            </div>
            <div className="container text-center p-5">
                <strong className="fs-4">????O T???O ??? TUY???N SINH</strong>
                <p className="p-4">
                    <span >
                        N??m 2020, T??? ch???c Gi??o d???c Quacquarelli Symonds (vi???t t???t QS ??? V????ng qu???c Anh) ???? ????nh gi?? v?? x???p ch???t l?????ng ????o t???o v?? nghi??n c???u c???a ??HBK H?? N???i trong c??c l??nh
                        v???c m?? Tr?????ng ??ang ?????m nh???n thu???c nh??m h???ng t??? 451 ?????n 500 tr??n to??n Th??? gi???i, ti???p t???c gi??? v??? tr?? s??? 1 t???i Vi???t Nam.
                    </span>
                </p>
            </div>

            <div className="container">
                <div className="d-flex">
                    <div className="row Small shadow mx-2  p-3">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/152127_1-400x267.jpg" alt="" height="300px" className="col-6" />
                        <div className="content col-6">
                            <strong>
                                CH????NG TR??NH ????O T???O
                            </strong>
                            <p>
                                Tr?????ng hi???n ??ang cung c???p h??n 20 ch????ng tr??nh ????o t???o ch???t l?????ng cao thu???c 3 h??? ?????i h???c, ThS v?? TS; trong ????,
                                c?? ch????ng tr??nh ???????c th??? tr?????ng lao ?????ng qu???c t??? ????n nh???n v???i h??n 60% sinh vi??n t???t nghi???p l??m vi???c ??? n?????c ngo??i.
                                C??c ch????ng tr??nh ????o t???o thu???c v??o 3 nh??m ng??nh ch??nh(xem ti???p)
                            </p>
                        </div>
                    </div>
                    <div className="row Small shadow mx-2  p-3">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/IMG_8268_2-001-400x268.jpg" alt="" height="300px" className="col-6" />
                        <div className="content col-6">
                            <strong>
                            KI???N T???O T????NG LAI V???I SoICT
                            </strong>
                            <p>
                            Th????ng hi???u K??? s?? CNTT B??ch khoa ???? v?????t ra kh???i bi??n gi???i n?????c nh??, 
                            v?? ng??y c??ng ch???ng minh ???????c ch???t l?????ng tr??n tr?????ng Qu???c t???. Trong l??n s??ng Chuy???n ?????i s???,
                             l???a ch???n ph??t tri???n t????ng lai v???i SoICT s??? ??em l???i cho c??c b???n c?? h???i tr??? th??nh c??c chuy??n gia c??ng ngh???, 
                             c?? kh??? n??ng l??m ch??? v?? d???n d???t s??? ph??t tri???n KHCN n?????c nh????? (xem ti???p)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-relative d-flex justify-content-center mt-5" style={{ height: '500px' }}>
                <div className="w-100 ">
                    <img src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg" id="img" className="h-100" alt="" style={{ width: '100%' }} />
                </div>
                <div className="position-absolute py-5">
                    <div className="text-center">
                        <h2><small className="text-white">H???P T??C ?????I NGO???I</small></h2>
                        <p className="text-white py-2">Tr?????ng CNTT&TT lu??n coi tr???ng c??c ho???t ?????ng h???p t??c qu???c t??? v?? h???p
                            t??c doanh nghi???p ????? n??ng cao ch???t l?????ng c??c ho???t gi???ng d???y, nghi??n c???u v?? chuy???n giao c??ng ngh???.</p>
                    </div>
                    <div className="d-flex px-5 py-2">
                        <div className="d-flex  Small shadow mx-2">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" alt="" height="100%" className="w-50" />
                            <div className="content bg-white w-50  p-3" >
                                <strong>
                                    CH????NG TR??NH ????O T???O
                                </strong>
                                <p>
                                ????o t???o v?? nghi??n c???u r???t c???n s??? h???p t??c th???c ch???t v???i c???ng ?????ng doanh nghi???p. 
                                Tr?????ng hi???n ??ang duy tr?? h???p t??c v???i m???ng l?????i g???m h??n 130 doanh nghi???p CNTT trong v?? ngo??i n?????c, trong ???? c?? th??? k??? t???i HEDSPI Supporting Partner Network (HEDSPI-SPN), m???ng l?????i h??? tr??? sinh vi??n t??ng c?????ng ngo???i ng???, ph??t tri???n k??? n??ng m???m, 
                                c??ng nh?? l??m quen v???i v??n h??a DN ????? gia t??ng s???c c???nh tranh trong th??? tr?????ng lao ?????ng qu???c t?????? (xem ti???p)
                                </p>
                            </div>
                        </div>
                        <div className="d-flex Small shadow mx-2">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" alt="" height="100%" className="w-50" />
                            <div className="content bg-white w-50  p-3">
                                <strong>
                                    CH????NG TR??NH ????O T???O
                                </strong>
                                <p>
                                ????o t???o v?? nghi??n c???u r???t c???n s??? h???p t??c th???c ch???t v???i c???ng ?????ng doanh nghi???p. 
                                Tr?????ng hi???n ??ang duy tr?? h???p t??c v???i m???ng l?????i g???m h??n 130 doanh nghi???p CNTT trong v?? ngo??i n?????c, trong ???? c?? th??? k??? t???i HEDSPI Supporting Partner Network (HEDSPI-SPN), m???ng l?????i h??? tr??? sinh vi??n t??ng c?????ng ngo???i ng???, ph??t tri???n k??? n??ng m???m, 
                                c??ng nh?? l??m quen v???i v??n h??a DN ????? gia t??ng s???c c???nh tranh trong th??? tr?????ng lao ?????ng qu???c t?????? (xem ti???p)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center my-5 fs-3">
                <strong>C???U SINH VI??N</strong>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu-.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">NGUY???N H?? ????NG ??? CHA ????? FLAPPY BIRD ???N??O LO???N??? TH??? GI???I</strong>
                        </div>
                        <div className="content">
                            <span>
                            T???p ch?? c??ng ngh??? Cnet c???a M??? c??ng b??? danh s??ch 25 ???ng d???ng c?? ???nh h?????ng nh???t th??? gi???i trong giai ??o???n 2010 ??? 2019...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu-.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">NGUY???N H?? ????NG ??? CHA ????? FLAPPY BIRD ???N??O LO???N??? TH??? GI???I</strong>
                        </div>
                        <div className="content">
                            <span>
                            T???p ch?? c??ng ngh??? Cnet c???a M??? c??ng b??? danh s??ch 25 ???ng d???ng c?? ???nh h?????ng nh???t th??? gi???i trong giai ??o???n 2010 ??? 2019...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu-.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5">NGUY???N H?? ????NG ??? CHA ????? FLAPPY BIRD ???N??O LO???N??? TH??? GI???I</strong>
                        </div>
                        <div className="content">
                            <span>
                            T???p ch?? c??ng ngh??? Cnet c???a M??? c??ng b??? danh s??ch 25 ???ng d???ng c?? ???nh h?????ng nh???t th??? gi???i trong giai ??o???n 2010 ??? 2019...
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu-.jpg" alt="" className="w-100" />
                        </div>
                        <div className="title text-content">
                            <strong className="fs-5 ">NGUY???N H?? ????NG ??? CHA ????? FLAPPY BIRD ???N??O LO???N??? TH??? GI???I</strong>
                        </div>
                        <div className="content">
                            <span>
                            T???p ch?? c??ng ngh??? Cnet c???a M??? c??ng b??? danh s??ch 25 ???ng d???ng c?? ???nh h?????ng nh???t th??? gi???i trong giai ??o???n 2010 ??? 2019...
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 color-nau p-5 ">
                <h3 className="text-center text-white">N??I V??? SoICT</h3>
                <div className="item d-flex container px-5 mt-5 ">
                    <div className="px-4 ">
                        <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/President_Mr.-Kim-In-Soo-150x250.jpg" alt="" className="rounded-pill " />
                    </div>
                    <div className="content text-white px-4 border-start border-3" id="style-3">
                        <span >
                            N???u b???n mu???n c?? m???t th???i sinh vi??n nh??n nh?? th?? ?????ng bao gi??? ngh??
                            t???i SoICT! B???n s??? ph???i h???c h??nh c???c k??? ch??m ch???, ph???i hy sinh nhi???u s??? th??ch c?? nh??n,
                            ph???i th???c ????m ????? ho??n th??nh c??c kho?? h???c v?? c??c project t??? ch????ng tr??nh ????o t???o r???t n???ng.
                            Tuy nhi??n khi b???n v?????t qua ???????c ch???ng ???????ng ?????y gian nan n??y, b???n c?? c?? h???i tham gia v??o m???ng
                            l?????i c???u sinh vi??n ???? t???o ra danh ti???ng cho SoICT kh??ng ch??? ??? Vi???t nam nh?? c??c gi??o s?? ??? ?????i h???c danh ti???ng M???,
                            c??c nh?? khoa h???c ??? NASA, c??c k??? s?? ph???n m???m ??? nh???ng t???p ??o??n c??ng ngh??? kh???ng l???, c??c doanh nh??n
                        </span>
                    </div>
                </div>
                <div className="text-white p-5">
                    <strong>
                        TS. Tr???n Vi???t H??ng ??? Nh?? s??ng l???p GotIT (Silicon Valley)
                    </strong>
                    <br />
                    C???u Sinh vi??n K42
                </div>
            </div>
            <div className="text-center my-5 fs-3">
                <strong>V??? CH??NG T??I</strong>
            </div>
            <div className="container">
                <div className="row row-cols-5">
                    <div className="col text-center">
                        <p> <span className="fs-4">QS ranking 2022</span></p>
                        <p>  <strong className="fs-3">401 ??? 450</strong></p>
                        <span>tr??n Th??? gi???i trong nh??m ng??nh Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin</span>
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">QS ranking 2022</span></p>
                        <p>  <strong className="fs-3">401 ??? 450</strong></p>
                        <span>tr??n Th??? gi???i trong nh??m ng??nh Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin</span>
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">QS ranking 2022</span></p>
                        <p>  <strong className="fs-3">401 ??? 450</strong></p>
                        <span>tr??n Th??? gi???i trong nh??m ng??nh Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin</span>
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">QS ranking 2022</span></p>
                        <p>  <strong className="fs-3">401 ??? 450</strong></p>
                        <span>tr??n Th??? gi???i trong nh??m ng??nh Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin</span>
                    </div>
                    <div className="col text-center">
                        <p> <span className="fs-4">QS ranking 2022</span></p>
                        <p>  <strong className="fs-3">401 ??? 450</strong></p>
                        <span>tr??n Th??? gi???i trong nh??m ng??nh Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin</span>
                    </div>
                </div>
            </div>
            <div className="color-red text-center mt-5 p-1">
                <span className="text-white">Xem th??m tin t???c</span>
            </div>
        </React.Fragment>
    )
}
export default Home
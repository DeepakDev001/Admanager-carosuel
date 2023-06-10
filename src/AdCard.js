import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'
import ProfileImg from './Img/profileImg.png'
import CardImg1 from './Img/Img1.png'
import CardImg2 from './Img/Img2.png'
import User1 from './Img/user.png'
import Slider from 'react-slick';

const AdCard = () => {
    const [readMore, setReadMore] = useState(false)

    var SettingsAdPreview = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const DummyCardData = [
        {
            img: CardImg1,
            userImg: User1,
            type: "Food Market Zone"

        },
        {
            img: CardImg2,
            userImg: ProfileImg,
            type: "Total spa Gym"


        },
        {
            img: CardImg1,
            userImg: User1,
            type: "Total Body Gym"


        }
    ]
    //================== Main_return_function ==================//
    return (
        <Fragment>
            <Card className='Ad_Carousel_card'>
                <CardHeader className='Ad_Card_Header_blk'>
                    <div className='Card_Profile_section'>
                        <img src={ProfileImg} width={40} height={40} className='img-fluid' alt='img' />
                        <div >
                            <h3>Total Body Gym</h3>
                            <h4>Sponsored</h4>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className='post_display_Card_blk'>
                    <Slider {...SettingsAdPreview} className='Slider-Blk'>
                        {DummyCardData.map((item) => (
                            <div className='Carousel_Img_Blk'>
                                <img src={item.img} alt="img" />
                                <div className='Carousel_Overly_blk'>
                                    <div className='Carousel-Content-blk'>
                                        <div className='d-flex'>
                                            <img src={item.userImg} className='Carousel-img'  alt="img"/>
                                            <div>
                                                <h3>{item.type}</h3>
                                                <h4>Sponsored</h4>
                                            </div>
                                        </div>
                                        <Button color='primary' className='Ad_Carousel_btn'>Know more</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </CardBody>
                <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px", width: "447px" }} className='Card_Content_blk'>
                    <h3>Build Your Personal Brand.</h3>
                    <p>01 July, 2022</p>
                    <h4>
                        This award goes to the coworker who’s always doing the
                        thankless work of keeping the office up to date on pop culture.
                        work of keeping the office up to date on pop culture
                        {readMore ? "thankless work of keeping the office up to date on pop culture." : null}...
                        <span onClick={() => setReadMore(!readMore)}>{!readMore ? "Read More" : "Read Less"}</span>
                    </h4>
                </div>

            </Card>


        </Fragment>
    )
}

export default AdCard

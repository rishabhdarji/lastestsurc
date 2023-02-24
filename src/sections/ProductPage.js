import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShimmerSocialPost } from 'react-shimmer-effects';
import Footer from './Footer';

import { Inner } from './InnerHeader';
import { ProductInner } from './ProductInner';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { GrTwitter } from 'react-icons/gr';
import { GrFacebookOption } from 'react-icons/gr';

import { FaPinterestP } from 'react-icons/fa';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiFillCloseCircle } from 'react-icons/ai';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ScrollButton from './GoToTop/GoToTop';


const ProductPage = (props) => {



    const { id } = useParams();
    const [open, setOpen] = React.useState(false)
    const [openn, setOpenn] = useState(false)

    const [sizee, setSize] = useState("S")

    const [colorr, setColor] = useState("Red")
    const onColorChange = (e) => {
        setColor(e)
    }

    const onOptionChange = e => {
        setSize(e.target.value)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenn = () => {
        setOpenn(true);
        // const list= data.map((item)=> {
        //     return{ name: item.name,
        //              id:item.id,
        //              price:item.price,
        //              color:colorr,
        //              size:sizee,
        //              qunt: count
        //     }

        // })
        // console.log(list);
        // localStorage.removeItem('list')
        console.log("here 76" + JSON.parse(localStorage.getItem('list')));
        let listt = JSON.parse(localStorage.getItem('list')) == null ? [] : JSON.parse(localStorage.getItem('list'));
        console.log("here 78" + listt);

        var indexl = -1;
        if (listt != []) {
            indexl = listt.findIndex(x => x.id === data.id)
        }
        console.log("here 84", indexl)
        if (indexl != -1) {
            console.log("here 86")
            if (data.id == listt[indexl].id) {
                console.log("here 88")
                if (listt[indexl].color == colorr && listt[indexl].size == sizee) {
                    console.log("here 91")
                    var qty = listt[indexl].count + count;
                    listt[indexl].count = qty;
                    console.log("here 94", qty)
                } else {
                    listt.push({
                        'name': data.name,
                        'id': data.id,
                        'price': data.price,
                        'color': colorr,
                        'size': sizee,
                        'count': count
                    });
                }

            } else {
                listt.push({
                    'name': data.name,
                    'id': data.id,
                    'price': data.price,
                    'color': colorr,
                    'size': sizee,
                    'count': count
                });


            }

        } else {

            listt.push({
                'name': data.name,
                'id': data.id,
                'price': data.price,
                'color': colorr,
                'size': sizee,
                'count': count
            });

            console.log(listt)

        }
        localStorage.setItem('list', JSON.stringify(listt));






    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClosee = () => {
        setOpenn(false);
    };

    console.log(id);



    const [data, setData] = useState(null)

    useEffect(() => {


        fetch("http://surc.online/api/products/" + id).then((result) => {
            result.json().then((resp) => {
                console.log("result", resp.data)

                setData(resp.data)
            })
        })


    }, [])


    var colorindex = 0;

    const [count, setCount] = useState(1);

    function increment() {
       
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 1) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
    }





    return (
        <>
            <div className="absolute-header">

                <Inner />
                {data != null ?
                    <section id="pageContent">
                        <div id="shopify-section-vela-template-product" className="shopify-section">
                            <div className="pageCollectionInner detail_default">
                                <div className="productBox">
                                    <div className="proBoxPrimary" id="ProductSection-vela-template-product" data-section-id="vela-template-product" data-section-type="product">
                                        <div className="boxProduct" style={{ backgroundColor: "#ffffff" }}>
                                            <div className="container">
                                                <div className="row mb30">
                                                    <div className="proBoxImage col-xs-12 col-md-6  mb30">


                                                        <div id="proFeaturedImage" className="proFeaturedImage "><div id="groupMedia" style={{ display: 'none' }} data-product-single-media-group="">

                                                        </div>

                                                            <div id="groupProImage" className="p-relative" style={{ display: 'block' }}>
                                                                <img id="ProductPhotoImg" className="img-responsive" alt="Black" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1000x.jpg?v=1628248696" data-zoom-enable="true" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172.jpg?v=1628248696" data-zoom-scroll="false" data-zoom-type="lens" data-zoom-width="300" data-zoom-height="300" data-zoom-lens="250" data-lens-shape="round" />
                                                                <button id="velaViewImage" className="btn hidden-xs hidden-sm">
                                                                    <i><BsArrowsFullscreen size={30} /></i>
                                                                </button>
                                                            </div>
                                                        </div><div id="productThumbs" className="proThumbnails thumbnails-wrapper">
                                                            <div className="owl-thumblist">
                                                                <div className="owl-carousel product-single_thumbnails product-single_thumbnails-vela-template-product slick-initialized slick-slider" data-item="5" data-vertical="false">
                                                                    <button type="button" data-role="none" className="slick-prev slick-arrow slick-disabled" aria-label="Previous" role="button" aria-disabled="true" style={{ display: " block" }}>< IoIosArrowBack size={20} /></button>


                                                                    <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{ opacity: ' 1', width: '4440px', left: '0px' }}><div className="thumbItem product-single__thumbnails-item slick-slide slick-current slick-active" tabIndex="-1" role="option" aria-describedby="slick-slide00" style={{ width: "118px" }} data-slick-index="0" aria-hidden="false">
                                                                        <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172.jpg?v=1628248696" className="product-single_thumbnail product-single_thumbnail--vela-template-product active-thumb" data-thumbnail-id="vela-template-product-21740303515828" data-imageid="21740303515828" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1000x.jpg?v=1628248696" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172.jpg?v=1628248696" tabIndex="0" aria-current="true">
                                                                            <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_150x.jpg?v=1628248696" alt="Black" /></a>
                                                                    </div><div className="thumbItem product-single__thumbnails-item slick-slide slick-active" tabIndex="-1" role="option" aria-describedby="slick-slide01" style={{ width: "118px" }} data-slick-index="1" aria-hidden="false">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225.jpg?v=1628248696" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303548596" data-imageid="21740303548596" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1000x.jpg?v=1628248696" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225.jpg?v=1628248696" tabIndex="0">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_150x.jpg?v=1628248696" alt="Black" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide slick-active" tabIndex="-1" role="option" aria-describedby="slick-slide02" style={{ width: "118px" }} data-slick-index="2" aria-hidden="false">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1fca0U1TrIc64C8AkDxyKHFWSUU-Un82m_79782880-8fef-47a8-97af-9e8bd3e1cc22.jpg?v=1628248696" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303581364" data-imageid="21740303581364" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1fca0U1TrIc64C8AkDxyKHFWSUU-Un82m_79782880-8fef-47a8-97af-9e8bd3e1cc22_1000x.jpg?v=1628248696" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1fca0U1TrIc64C8AkDxyKHFWSUU-Un82m_79782880-8fef-47a8-97af-9e8bd3e1cc22.jpg?v=1628248696" tabIndex="0">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1fca0U1TrIc64C8AkDxyKHFWSUU-Un82m_79782880-8fef-47a8-97af-9e8bd3e1cc22_150x.jpg?v=1628248696" alt="Black" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide slick-active" tabIndex="-1" role="option" aria-describedby="slick-slide03" style={{ width: "118px" }} data-slick-index="3" aria-hidden="false">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1aVpnn_KNejA3sQl6R77GlfTDpAChrp7V_16c143d1-f9ec-4c5d-baa2-07abaf562315.jpg?v=1628248696" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303646900" data-imageid="21740303646900" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1aVpnn_KNejA3sQl6R77GlfTDpAChrp7V_16c143d1-f9ec-4c5d-baa2-07abaf562315_1000x.jpg?v=1628248696" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1aVpnn_KNejA3sQl6R77GlfTDpAChrp7V_16c143d1-f9ec-4c5d-baa2-07abaf562315.jpg?v=1628248696" tabIndex="0">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1aVpnn_KNejA3sQl6R77GlfTDpAChrp7V_16c143d1-f9ec-4c5d-baa2-07abaf562315_150x.jpg?v=1628248696" alt="Blue" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide slick-active" tabIndex="-1" role="option" aria-describedby="slick-slide04" style={{ width: "118px" }} data-slick-index="4" aria-hidden="false">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1d3g-KWPFCMQL19suwORtKHV2TQWmyQpq_d827e0c3-ba9c-42e2-b269-46ad325bdf50.jpg?v=1628248696" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303502436" data-imageid="21740303502436" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1d3g-KWPFCMQL19suwORtKHV2TQWmyQpq_d827e0c3-ba9c-42e2-b269-46ad325bdf50_1000x.jpg?v=1628248696" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1d3g-KWPFCMQL19suwORtKHV2TQWmyQpq_d827e0c3-ba9c-42e2-b269-46ad325bdf50.jpg?v=1628248696" tabIndex="0">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1d3g-KWPFCMQL19suwORtKHV2TQWmyQpq_d827e0c3-ba9c-42e2-b269-46ad325bdf50_150x.jpg?v=1628248696" alt="Blue" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide05" style={{ width: "118px" }} data-slick-index="5" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/12zMn0lZ2odmR9dktAqDLK_ch4Sg5-eVO_8681746f-4127-431f-8514-28e22e6da10f.jpg?v=1628248681" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303745204" data-imageid="21740303745204" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/12zMn0lZ2odmR9dktAqDLK_ch4Sg5-eVO_8681746f-4127-431f-8514-28e22e6da10f_1000x.jpg?v=1628248681" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/12zMn0lZ2odmR9dktAqDLK_ch4Sg5-eVO_8681746f-4127-431f-8514-28e22e6da10f.jpg?v=1628248681" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/12zMn0lZ2odmR9dktAqDLK_ch4Sg5-eVO_8681746f-4127-431f-8514-28e22e6da10f_150x.jpg?v=1628248681" alt="Blue" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide06" style={{ width: "118px" }} data-slick-index="6" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gpxeMRlVrzgVUonHfpd849VeNMAIWRxm_34e5b036-a0d9-47c2-bde4-57664f5f40e9.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303777972" data-imageid="21740303777972" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gpxeMRlVrzgVUonHfpd849VeNMAIWRxm_34e5b036-a0d9-47c2-bde4-57664f5f40e9_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gpxeMRlVrzgVUonHfpd849VeNMAIWRxm_34e5b036-a0d9-47c2-bde4-57664f5f40e9.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gpxeMRlVrzgVUonHfpd849VeNMAIWRxm_34e5b036-a0d9-47c2-bde4-57664f5f40e9_150x.jpg?v=1624552141" alt="Orange" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide07" style={{ width: "118px" }} data-slick-index="7" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1bbt4Z8CCmCJcZCpAdl8IqEFVta-QwbVW_f2300fa2-2ed2-4d7a-a4ee-d1ddab63443d.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303810740" data-imageid="21740303810740" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1bbt4Z8CCmCJcZCpAdl8IqEFVta-QwbVW_f2300fa2-2ed2-4d7a-a4ee-d1ddab63443d_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1bbt4Z8CCmCJcZCpAdl8IqEFVta-QwbVW_f2300fa2-2ed2-4d7a-a4ee-d1ddab63443d.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1bbt4Z8CCmCJcZCpAdl8IqEFVta-QwbVW_f2300fa2-2ed2-4d7a-a4ee-d1ddab63443d_150x.jpg?v=1624552141" alt="Orange" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide08" style={{ width: "118px" }} data-slick-index="8" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vgMc4bnWOu-gQMbYrDW-xDCj9X-pF6hW_2acad034-c54e-4b22-821a-08dc29cf88ab.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303843508" data-imageid="21740303843508" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vgMc4bnWOu-gQMbYrDW-xDCj9X-pF6hW_2acad034-c54e-4b22-821a-08dc29cf88ab_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vgMc4bnWOu-gQMbYrDW-xDCj9X-pF6hW_2acad034-c54e-4b22-821a-08dc29cf88ab.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vgMc4bnWOu-gQMbYrDW-xDCj9X-pF6hW_2acad034-c54e-4b22-821a-08dc29cf88ab_150x.jpg?v=1624552141" alt="Orange" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide09" style={{ width: "118px" }} data-slick-index="9" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1GTnVH10PfNi85uOoPLoRDA5PinZOjHD1_92aac30b-9170-4ef4-a728-08df09a1b6bb.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303876276" data-imageid="21740303876276" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1GTnVH10PfNi85uOoPLoRDA5PinZOjHD1_92aac30b-9170-4ef4-a728-08df09a1b6bb_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1GTnVH10PfNi85uOoPLoRDA5PinZOjHD1_92aac30b-9170-4ef4-a728-08df09a1b6bb.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1GTnVH10PfNi85uOoPLoRDA5PinZOjHD1_92aac30b-9170-4ef4-a728-08df09a1b6bb_150x.jpg?v=1624552141" alt="Grey" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide010" style={{ width: "118px" }} data-slick-index="10" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1nH42SGY9xAusbAj_gvPZsl0TEUwzodGA_105ba2f9-b807-4f9a-bf70-c6240fe5a9cc.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303909044" data-imageid="21740303909044" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1nH42SGY9xAusbAj_gvPZsl0TEUwzodGA_105ba2f9-b807-4f9a-bf70-c6240fe5a9cc_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1nH42SGY9xAusbAj_gvPZsl0TEUwzodGA_105ba2f9-b807-4f9a-bf70-c6240fe5a9cc.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1nH42SGY9xAusbAj_gvPZsl0TEUwzodGA_105ba2f9-b807-4f9a-bf70-c6240fe5a9cc_150x.jpg?v=1624552141" alt="Grey" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide011" style={{ width: "118px" }} data-slick-index="11" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1OHkrS3YGWA9dGV8gqvdlrXwO7TOWXpd0_13cb5476-c054-4302-a53e-6ed63534209d.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740303974580" data-imageid="21740303974580" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1OHkrS3YGWA9dGV8gqvdlrXwO7TOWXpd0_13cb5476-c054-4302-a53e-6ed63534209d_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1OHkrS3YGWA9dGV8gqvdlrXwO7TOWXpd0_13cb5476-c054-4302-a53e-6ed63534209d.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1OHkrS3YGWA9dGV8gqvdlrXwO7TOWXpd0_13cb5476-c054-4302-a53e-6ed63534209d_150x.jpg?v=1624552141" alt="Grey" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide012" style={{ width: "118px" }} data-slick-index="12" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/196j9vnYknqQl38NdYzgsi7pBDj4ICOiM_f820563a-0c40-4215-8a38-364721ebe5
                                                .jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304007348" data-imageid="21740304007348" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/196j9vnYknqQl38NdYzgsi7pBDj4ICOiM_f820563a-0c40-4215-8a38-364721ebe550_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/196j9vnYknqQl38NdYzgsi7pBDj4ICOiM_f820563a-0c40-4215-8a38-364721ebe550.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/196j9vnYknqQl38NdYzgsi7pBDj4ICOiM_f820563a-0c40-4215-8a38-364721ebe550_150x.jpg?v=1624552141" alt="Olive" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide013" style={{ width: "118px" }} data-slick-index="13" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1RTo93azEY7MA-LthHx-F2DrmrmzaggJc_145a7602-aad5-4aa6-8a50-5de98c2f0856.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304040116" data-imageid="21740304040116" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1RTo93azEY7MA-LthHx-F2DrmrmzaggJc_145a7602-aad5-4aa6-8a50-5de98c2f0856_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1RTo93azEY7MA-LthHx-F2DrmrmzaggJc_145a7602-aad5-4aa6-8a50-5de98c2f0856.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1RTo93azEY7MA-LthHx-F2DrmrmzaggJc_145a7602-aad5-4aa6-8a50-5de98c2f0856_150x.jpg?v=1624552141" alt="Olive" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide014" style={{ width: "118px" }} data-slick-index="14" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1qdP3qW65IVFTMKPWzg1BT-uXBjpHKq2E_e044941c-fe50-40c7-9e8d-23c063e6ee94.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304072884" data-imageid="21740304072884" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1qdP3qW65IVFTMKPWzg1BT-uXBjpHKq2E_e044941c-fe50-40c7-9e8d-23c063e6ee94_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1qdP3qW65IVFTMKPWzg1BT-uXBjpHKq2E_e044941c-fe50-40c7-9e8d-23c063e6ee94.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1qdP3qW65IVFTMKPWzg1BT-uXBjpHKq2E_e044941c-fe50-40c7-9e8d-23c063e6ee94_150x.jpg?v=1624552141" alt="Olive" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide015" style={{ width: "118px" }} data-slick-index="15" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gijcaUHEpMFGQPDcJcxNxRRdzR0ejczU_c3a8c6bd-5c8c-42f7-ae1c-87fb5223af22.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304105652" data-imageid="21740304105652" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gijcaUHEpMFGQPDcJcxNxRRdzR0ejczU_c3a8c6bd-5c8c-42f7-ae1c-87fb5223af22_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gijcaUHEpMFGQPDcJcxNxRRdzR0ejczU_c3a8c6bd-5c8c-42f7-ae1c-87fb5223af22.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1gijcaUHEpMFGQPDcJcxNxRRdzR0ejczU_c3a8c6bd-5c8c-42f7-ae1c-87fb5223af22_150x.jpg?v=1624552141" alt="Pink" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide016" style={{ width: "118px" }} data-slick-index="16" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_eaff99aa-c818-4963-815f-ce4c68a3175b.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304138420" data-imageid="21740304138420" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_eaff99aa-c818-4963-815f-ce4c68a3175b_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_eaff99aa-c818-4963-815f-ce4c68a3175b.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1jvFcgPrICVM-rWnK867v3sv0xN37j1dL_eaff99aa-c818-4963-815f-ce4c68a3175b_150x.jpg?v=1624552141" alt="Pink" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide017" style={{ width: "118px" }} data-slick-index="17" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1hRD3_8du04hZXRUlsA9iKlz-2KxP3HT3_093dffdd-bdb1-4d47-adeb-c55b5118dc2d.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304150188" data-imageid="21740304150188" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1hRD3_8du04hZXRUlsA9iKlz-2KxP3HT3_093dffdd-bdb1-4d47-adeb-c55b5118dc2d_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1hRD3_8du04hZXRUlsA9iKlz-2KxP3HT3_093dffdd-bdb1-4d47-adeb-c55b5118dc2d.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1hRD3_8du04hZXRUlsA9iKlz-2KxP3HT3_093dffdd-bdb1-4d47-adeb-c55b5118dc2d_150x.jpg?v=1624552141" alt="Pink" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide018" style={{ width: "118px" }} data-slick-index="18" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1AIDsP89Y23Tr-YrGvCLyyOViox1Fivhw_b19ed206-4e2f-49e0-afd4-44428021205f.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304433332" data-imageid="21740304433332" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1AIDsP89Y23Tr-YrGvCLyyOViox1Fivhw_b19ed206-4e2f-49e0-afd4-44428021205f_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1AIDsP89Y23Tr-YrGvCLyyOViox1Fivhw_b19ed206-4e2f-49e0-afd4-44428021205f.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1AIDsP89Y23Tr-YrGvCLyyOViox1Fivhw_b19ed206-4e2f-49e0-afd4-44428021205f_150x.jpg?v=1625745056" alt="Teal" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide019" style={{ width: "118px" }} data-slick-index="19" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1-5JNdLA8GPJ-tWtgVcFtvniWzQR7o49Q_e8da39b5-d907-4059-b7d1-17662fb29f98.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304498868" data-imageid="21740304498868" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1-5JNdLA8GPJ-tWtgVcFtvniWzQR7o49Q_e8da39b5-d907-4059-b7d1-17662fb29f98_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1-5JNdLA8GPJ-tWtgVcFtvniWzQR7o49Q_e8da39b5-d907-4059-b7d1-17662fb29f98.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1-5JNdLA8GPJ-tWtgVcFtvniWzQR7o49Q_e8da39b5-d907-4059-b7d1-17662fb29f98_150x.jpg?v=1625745056" alt="Teal" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide020" style={{ width: "118px" }} data-slick-index="20" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vsL3lgEbEP0574srsoQnSlAH7hkuB8r1_d3d5eaa8-db0d-4654-9274-d5ab3c305fd9.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304531636" data-imageid="21740304531636" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vsL3lgEbEP0574srsoQnSlAH7hkuB8r1_d3d5eaa8-db0d-4654-9274-d5ab3c305fd9_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vsL3lgEbEP0574srsoQnSlAH7hkuB8r1_d3d5eaa8-db0d-4654-9274-d5ab3c305fd9.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1vsL3lgEbEP0574srsoQnSlAH7hkuB8r1_d3d5eaa8-db0d-4654-9274-d5ab3c305fd9_150x.jpg?v=1625745056" alt="Teal" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide021" style={{ width: "118px" }} data-slick-index="21" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1u1afciNVkMhQtMK8TQKomM8MhdKe7Ke4_3bb117c5-6508-41fa-982e-24aa20dad6c1.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304203956" data-imageid="21740304203956" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1u1afciNVkMhQtMK8TQKomM8MhdKe7Ke4_3bb117c5-6508-41fa-982e-24aa20dad6c1_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1u1afciNVkMhQtMK8TQKomM8MhdKe7Ke4_3bb117c5-6508-41fa-982e-24aa20dad6c1.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1u1afciNVkMhQtMK8TQKomM8MhdKe7Ke4_3bb117c5-6508-41fa-982e-24aa20dad6c1_150x.jpg?v=1625745056" alt="Red" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide022" style={{ width: "118px" }} data-slick-index="22" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1IEYQ10vIH07udGBDdoStmPmZBiGw-TuA_7b0137db-a2de-4069-a737-697c8368e4c1.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304236724" data-imageid="21740304236724" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1IEYQ10vIH07udGBDdoStmPmZBiGw-TuA_7b0137db-a2de-4069-a737-697c8368e4c1_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1IEYQ10vIH07udGBDdoStmPmZBiGw-TuA_7b0137db-a2de-4069-a737-697c8368e4c1.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1IEYQ10vIH07udGBDdoStmPmZBiGw-TuA_7b0137db-a2de-4069-a737-697c8368e4c1_150x.jpg?v=1625745056" alt="Red" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide023" style={{ width: "118px" }} data-slick-index="23" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1HJZUXFgxL5hUR_P3G7wocddnkfpKvM6e_54b48ba0-75e7-4304-a1dd-4bd6d2930111.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304302260" data-imageid="21740304302260" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1HJZUXFgxL5hUR_P3G7wocddnkfpKvM6e_54b48ba0-75e7-4304-a1dd-4bd6d2930111_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1HJZUXFgxL5hUR_P3G7wocddnkfpKvM6e_54b48ba0-75e7-4304-a1dd-4bd6d2930111.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1HJZUXFgxL5hUR_P3G7wocddnkfpKvM6e_54b48ba0-75e7-4304-a1dd-4bd6d2930111_150x.jpg?v=1625745056" alt="Red" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide024" style={{ width: "118px" }} data-slick-index="24" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1190Mn_YxVtiCmOQ6L9T-3fr_iX_T0gsu_d03f7ea8-3ae5-4e1f-ad2f-3ab37b93f88c.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304335028" data-imageid="21740304335028" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1190Mn_YxVtiCmOQ6L9T-3fr_iX_T0gsu_d03f7ea8-3ae5-4e1f-ad2f-3ab37b93f88c_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1190Mn_YxVtiCmOQ6L9T-3fr_iX_T0gsu_d03f7ea8-3ae5-4e1f-ad2f-3ab37b93f88c.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1190Mn_YxVtiCmOQ6L9T-3fr_iX_T0gsu_d03f7ea8-3ae5-4e1f-ad2f-3ab37b93f88c_150x.jpg?v=1625745056" alt="Green" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide025" style={{ width: "118px" }} data-slick-index="25" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1KkGXKS11ucX5q3VkXELpjaD6-0uJ14a8_acc57452-ec1a-4c6c-b23b-08f66ce33a0c.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304367796" data-imageid="21740304367796" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1KkGXKS11ucX5q3VkXELpjaD6-0uJ14a8_acc57452-ec1a-4c6c-b23b-08f66ce33a0c_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1KkGXKS11ucX5q3VkXELpjaD6-0uJ14a8_acc57452-ec1a-4c6c-b23b-08f66ce33a0c.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1KkGXKS11ucX5q3VkXELpjaD6-0uJ14a8_acc57452-ec1a-4c6c-b23b-08f66ce33a0c_150x.jpg?v=1625745056" alt="Green" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide026" style={{ width: "118px" }} data-slick-index="26" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1mIzKWAyCLS5XFXrGqe7rogu1w8Z68t99_a4bc7e62-0e21-4dc1-a9fc-0f5b4c16194e.jpg?v=1625745056" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304400564" data-imageid="21740304400564" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1mIzKWAyCLS5XFXrGqe7rogu1w8Z68t99_a4bc7e62-0e21-4dc1-a9fc-0f5b4c16194e_1000x.jpg?v=1625745056" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1mIzKWAyCLS5XFXrGqe7rogu1w8Z68t99_a4bc7e62-0e21-4dc1-a9fc-0f5b4c16194e.jpg?v=1625745056" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1mIzKWAyCLS5XFXrGqe7rogu1w8Z68t99_a4bc7e62-0e21-4dc1-a9fc-0f5b4c16194e_150x.jpg?v=1625745056" alt="Green" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide027" style={{ width: "118px" }} data-slick-index="27" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1pPTVTXKH8ll7qE_g4jq9LXIdzDvba2FU_33cca850-72ed-4eea-9256-6af7c817ba94.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304564404" data-imageid="21740304564404" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1pPTVTXKH8ll7qE_g4jq9LXIdzDvba2FU_33cca850-72ed-4eea-9256-6af7c817ba94_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1pPTVTXKH8ll7qE_g4jq9LXIdzDvba2FU_33cca850-72ed-4eea-9256-6af7c817ba94.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1pPTVTXKH8ll7qE_g4jq9LXIdzDvba2FU_33cca850-72ed-4eea-9256-6af7c817ba94_150x.jpg?v=1624552141" alt="White" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide028" style={{ width: "118px" }} data-slick-index="28" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Vmc9tADznQHV-XfzhEjXZYidAPogWxUe_e0abec69-0eba-458d-8a7d-32973d116e57.jpg?v=1624552141" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304595072" data-imageid="21740304595072" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Vmc9tADznQHV-XfzhEjXZYidAPogWxUe_e0abec69-0eba-458d-8a7d-32973d116e57_1000x.jpg?v=1624552141" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Vmc9tADznQHV-XfzhEjXZYidAPogWxUe_e0abec69-0eba-458d-8a7d-32973d116e57.jpg?v=1624552141" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1Vmc9tADznQHV-XfzhEjXZYidAPogWxUe_e0abec69-0eba-458d-8a7d-32973d116e57_150x.jpg?v=1624552141" alt="White" /></a>
                                                                        </div><div className="thumbItem product-single__thumbnails-item slick-slide" tabIndex="-1" role="option" aria-describedby="slick-slide029" style={{ width: "118px" }} data-slick-index="29" aria-hidden="true">
                                                                            <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1CrDfgtdeot2Mi5pfJbE9GKHcX06_3roF_dd02190c-fc47-4c18-a921-ae6a8996022d.jpg?v=1624552142" className="product-single_thumbnail product-single_thumbnail--vela-template-product" data-thumbnail-id="vela-template-product-21740304629940" data-imageid="21740304629940" data-stype="image" data-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1CrDfgtdeot2Mi5pfJbE9GKHcX06_3roF_dd02190c-fc47-4c18-a921-ae6a8996022d_1000x.jpg?v=1624552142" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1CrDfgtdeot2Mi5pfJbE9GKHcX06_3roF_dd02190c-fc47-4c18-a921-ae6a8996022d.jpg?v=1624552142" tabIndex="-1">
                                                                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1CrDfgtdeot2Mi5pfJbE9GKHcX06_3roF_dd02190c-fc47-4c18-a921-ae6a8996022d_150x.jpg?v=1624552142" alt="White" /></a>
                                                                        </div></div></div>
                                                                    



                                                                    <button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button" style={{ display: "block" }} aria-disabled="false">< IoIosArrowForward size={20} /></button></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-12 col-md-6 mb30">
                                                        {/* { data.map((i)=> */}
                                                        <div className="proBoxInfo">

                                                            <h1>{data.name}</h1><div className="wrapper mb30">
                                                                <form acceptCharset="UTF-8" className="htmlFormAddToCart" >
                                                                    <div className="proVariants">
                                                                        <div className="selector-wrapper"><label htmlFor="productSelect-option-0">Size</label>
                                                                            {console.log("check1")}
                                                                            {console.log(data)}
                                                                            {data != null ? console.log(data.super_attributes[1].options) : console.log("data.super_attributes[1].options")}
    
                                                                       

                                                                        </div>
                                                                       


                                                                        <div className="js-swatch swatch clearfix" data-option-index="0">
                                                                            <div className="header">Size: <span className="js-swatch-display text"> {sizee}</span></div>

                                                                            {console.log(data != null ? data.super_attributes[1].options : "test")}
                                                                            {data != null ? data.super_attributes[1].options.map((size) =>
                                                                                <div data-value="XS" className="swatch-element xs available">
                                                                        
                                                                                    <div>

                                                                                        <FormControl>

                                                                                            <RadioGroup
                                                                                                row
                                                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                                                name="row-radio-buttons-group"
                                                                                            >
                                                                                                <FormControlLabel name="sizee"
                                                                                                    value={size.label}
                                                                                                    id={size.label}
                                                                                                    checked={sizee === size.label}
                                                                                                    defaultChecked
                                                                                                    onChange={onOptionChange} control={<Radio style={{ color: "#a4d5dc" }} />} label={size.label} />


                                                                                            </RadioGroup>
                                                                                        </FormControl>



                                                                                        <img className="crossed-out" alt="" src="//cdn.shopify.com/s/files/1/0535/4812/2292/t/2/assets/soldout.png?v=169392025580765019841613038081" />
                                                                                    </div>
                                                                                </div>
                                                                            ) : console.log("null")}






                                                                        </div>









                                                                        <div className="js-swatch swatch clearfix" data-option-index="1">
                                                                            
                                                                            <div className="header">Color: <span className="js-swatch-display text">{colorr}</span></div>
                                                                            <div data-value="Black" className="swatch-element color black available">
                                                                                <div className="tooltip"></div>
                                                                                <input className="swatchItem" id="swatch-1-black" type="radio" name="option-1" value="Black" />
                                                                                {data.super_attributes[colorindex].options.map((pcolor) =>
                                                                                    <label htmlFor="swatch-1-black" value={pcolor.label}
                                                                                        id={pcolor.label}

                                                                                        onClick={() => onColorChange(pcolor.label)}

                                                                                        style={{ backgroundColor: pcolor.swatch_value, margin: "4px" }}>

                                                                                    </label>
                                                                                )}
                                                                            </div>


                                                                        </div>



                                                                    </div>
                                                                    <div className="proPrice flexRow flexAlignCenter"><span id="ProductPrice" className="priceProduct " style={{ fontWeight: "bold", color: "black" }}> Rs. {parseFloat(data.price).toFixed(2)}</span>
                                                                    </div>
                                                                    <div className="velaGroup d-flex flexAlignEnd mb20">


                                                                        <div id="velaSizeGuide" style={{ display: 'none' }}>
                                                                            <div className="velaSizeGuide">




                                                                                <div id="groupProImage" className="image p-relative">
                                                                                    <img id="ProductPhotoImg1" className="img-responsive" alt="Size Guide" src="//cdn.shopify.com/s/files/1/0535/4812/2292/files/Apple_bottom_shorts.jpg?v=1622856176" data-zoom-enable="true" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/files/Apple_bottom_shorts.jpg?v=1622856176" data-zoom-scroll="false" data-zoom-type="lens" data-zoom-width="300" data-zoom-height="300" data-zoom-lens="250" data-lens-shape="round" />
                                                                                    <button id="velaViewImage1" className="btn">
                                                                                        <i className="icons icon-size-fullscreen"></i>
                                                                                    </button>
                                                                                </div>


                                                                                {/* size dailog box */}
                                                                                <Dialog open={open} >
                                                                                    <DialogTitle>

                                                                                        <Button onClick={() => handleClose()} title="Close">
                                                                                            <AiFillCloseCircle size={40} />
                                                                                        </Button>

                                                                                    </DialogTitle>
                                                                                    <DialogContent>
                                                                                        <DialogContentText>
                                                                                            <div id="groupProImage" className="image p-relative">
                                                                                                <img id="ProductPhotoImg1" className="img-responsive" alt="Size Guide"
                                                                                                    src="//cdn.shopify.com/s/files/1/0535/4812/2292/files/Apple_bottom_shorts.jpg?v=1622856176"
                                                                                                    data-zoom-enable="true" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/files/Apple_bottom_shorts.jpg?v=1622856176"
                                                                                                    data-zoom-scroll="false" data-zoom-type="lens" data-zoom-width="300" data-zoom-height="300" data-zoom-lens="250" data-lens-shape="round" />
                                                                                            </div>
                                                                                        </DialogContentText>
                                                                                    </DialogContent>
                                                                                    <DialogActions>


                                                                                    </DialogActions>
                                                                                </Dialog>




                                                                            </div>
                                                                        </div>
                                                                        {/*   */}
                                                                        <a onClick={() => handleClickOpen()} className="btnSizeGuide" data-fancybox="" data-src="#velaSizeGuide" title="Size Guide" style={{ marginTop: "317px", fontWeight: "bold", fontFamily: "sans-serif", fontSize: "15px" }}>
                                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve">
                                                                                <g>
                                                                                    <g>
                                                                                        <path d="M491.797,348.594L266.656,229.656V214.64c0.094-0.023,0.188-0.055,0.297-0.078c35.469-8.781,59.281-30.875,59.281-59.281
                    c0-32.742-26.547-59.281-59.281-59.281c-30.234,0-56.516,22.125-59.109,51.773c-0.078,0.453-0.125,0.922-0.125,1.391
                    c0,0.055-0.016,0.109-0.016,0.172c0,5.891,4.781,10.664,10.672,10.664s10.672-4.773,10.672-10.664h0.062
                    c0.859-9.227,5.344-15.844,9.281-19.969c7.281-7.648,17.703-12.031,28.562-12.031c20.922,0,37.938,17.023,37.938,37.945
                    c0,7.984-3.328,15.305-9.922,21.758c-7.703,7.539-19.156,13.352-33.141,16.812c0,0-16.203,5-16.484,5.102v3.501h-0.016v26.992
                    L20.219,348.594C8.141,354.812,0,366.5,0,379.906C0,399.844,18.016,416,40.234,416c0.406,0,1.203,0,1.203,0h429.141
                    c0,0,0.797,0,1.203,0C494,416,512,399.844,512,379.906C512,366.5,503.875,354.812,491.797,348.594z M450.781,394.656h-1.203
                    H41.438h-1.203c-10.234,0-18.891-6.75-18.891-14.75c0-4.938,3.234-9.562,8.656-12.375l0.094-0.031l0.094-0.062l225.797-119.289
                    l225.844,119.289l0.094,0.062l0.094,0.031c5.422,2.812,8.656,7.438,8.656,12.375C490.672,387.906,482.016,394.656,450.781,394.656
                    z"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </svg>
                                                                            Size Guide</a>
                                                                        <div className="proQuantity">
                                                                            <label htmlFor="Quantity" className="qtySelector" style={{ fontWeight: "bold", fontSize: "13px", fontFamily: "sans-serif" }}>Quantity:</label>


                                                                            <div className="velaQty">
                                                                                <button type="button" onClick={decrement} className="velaQtyAdjust velaQtyButton velaQtyMinus" >
                                                                                    <span className="txtFallback" style={{ fontSize: "25px", fontWeight: "bold" }}>−</span>
                                                                                </button>
                                                                                <input type="text" style={{ fontSize: "20px", fontFamily: "sans-serif" }} value={count} className="velaQtyNum velaQtyText" readOnly={true} />
                                                                                <button type="button" onClick={increment} className="velaQtyAdjust velaQtyButton velaQtyPlus">
                                                                                    <span className="txtFallback" style={{ fontSize: "25px", fontWeight: "bold" }}>+</span>
                                                                                </button>
                                                                            </div>


                                                                        </div>
                                                                        <a onClick={() => handleClickOpenn()} className="btn btnAddToCart">
                                                                            <span >Add to Cart</span>
                                                                        </a></div>
                                                                   
                                                                    <Dialog open={openn} style={{width:"450px",alignContent:"center"}}>


                                                                        <Button style={{ marginLeft: "300px" }} onClick={() => handleClosee()} title="Close">
                                                                            <AiFillCloseCircle size={25} />
                                                                        </Button>


                                                                        <DialogContent>
                                                                            <DialogContentText>
                                                                               

                                                                                <div className="headerCartContent rowFlex flexAlignCenter">
                                                                                    <a className="closeCartModal" href="javascript:void(0)" style={{ position: "absolute" }}></a>
                                                                                    <div className="cartProductImage" style={{ width: "42%", paddingRight: "30px" }}>
                                                                                        <img className="img-responsive" alt="Surc" src="https://cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac.jpg?v=1628677075" />
                                                                                    </div>
                                                                                    <div className="cartProductContent" style={{
                                                                                        float: "center",
                                                                                        width: "58%",
                                                                                        padding: "15px 0",
                                                                                        textAlign: "center", fontSize: "15px"
                                                                                    }}>
                                                                                        <div className="productTitle">{data.name} - {sizee} / {colorr}</div>
                                                                                        <div style={{ color: "green" }} className="alertCartModal">Has been added to the cart!</div>
                                                                                        <div className="cartModalButtons">
                                                                                            <a className="btn btnVelaCart btnViewCart" href="/viewCart">View Cart</a>
                                                                                            <a className="btn btnVelaCart btnCheckout" href="/checkout">Check out</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>


                                                                        </DialogActions>
                                                                    </Dialog>




                                                                </form>
                                                                <div style={{ borderTop: "1px solid #a4d5dc", marginTop: "30px" }}>
                                                                    <br>
                                                                    </br>
                                                                    <p className="proAttr productType"><label style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "bold" }}>Product type:</label>Shorts</p>
                                                                    <div className="proAttr proPageCategories"><label style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "bold" }} className="cateTitle">COLLECTIONS:</label>
                                                                        <a href="/collections/apple-bottom-shorts" title="Apple bottom shorts">Apple bottom shorts</a>,
                                                                        <a href="/collections/bottom-wear" title="Bottom Wear">Bottom Wear</a>,
                                                                        <a href="/collections/no-fuss" title="No Fuss">No Fuss</a>

                                                                    </div>
                                                                </div>
                                                                <div style={{ borderBottom: "1px solid #a4d5dc" }} className="velaProductSharing"><div className="velaProductSharingTittle" style={{ fontFamily: "sans-serif", fontSize: "18px" }}>Share:</div><ul className="socialSharing list-unstyled">

                                                                    <li>
                                                                        <a className="btnSharing btnTwitter" data-social="twitter">
                                                                            <span style={{ padding: "10px", color: "GrayText" }}> <GrTwitter size={30} /></span>
                                                                        </a>
                                                                    </li>


                                                                    <li>
                                                                        <a className="btnSharing btnFacebook" data-social="facebook">
                                                                            <span style={{ padding: "10px", color: "GrayText" }}><GrFacebookOption size={30} /></span>
                                                                        </a>
                                                                    </li>



                                                                    <li>
                                                                        <a className="btnSharing btnPinterest" >
                                                                            <span style={{ padding: "10px", color: "GrayText" }}> <FaPinterestP size={30} /></span>
                                                                        </a>
                                                                    </li>

                                                                </ul>
                                                                    <br>
                                                                    </br>
                                                                    <br>
                                                                    </br>
                                                                </div>
                                                                <div>
                                                                    <script type="text/javascript">

                                                                    </script>

                                                                </div>



                                                                <div style={{ display: 'block', width: 700, padding: 2 }}>
                                                                    {/* <div style={{borderBottom:"1px solid #a4d5dc"}}> */}
                                                                    <Tabs defaultActiveKey="first" style={{ fontSize: "15px", fontFamily: "sans-serif", fontWeight: "bold" }}>

                                                                        <Tab eventKey="first" title="PRODUCT DESCRIPTION" style={{ fontSize: "15px", fontFamily: "sans-serif", color: "GrayText" }}>
                                                                            {data.description}
                                                                        </Tab>
                                                                        <Tab eventKey="second" title="WE'RE MADE TO ORDER">
                                                                            Hii, I am 2nd tab content
                                                                        </Tab>
                                                                        <Tab eventKey="third" title="COMPOSITION">
                                                                            Hii, I am 3rd tab content
                                                                        </Tab>
                                                                    </Tabs>
                                                                    <br>
                                                                    </br>

                                                                </div>
                                                               
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="zoomContainer" style={{ transform: " translateZ(0px)", position: " absolute ", left: "356.5px", top: "565px", height: "869px", width: "580px" }}>
                            <div className="zoomLens" style={{  backgroundPosition: "-131.586px center, 74.4568px center", float: "left", border: "4px solid rgb(136, 136, 136)", width: "250px", height: "250px", backgroundRepeat: "no-repeat", position: "absolute", borderRadius: "129px", backgroundImage: 'url("//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172.jpg?v=1628248696")', left: "25px", top: "-94px" }}>
                            </div>
                            <div className="zoomWindowContainer" style={{ width: "300px" }}>
                                <div className="zoomWindow" style={{ zIndex: " 999", top: "0px", left: "580px" }}>&nbsp;
                                </div>
                            </div>
                        </div>
                    </section>
                    : <ShimmerSocialPost type="image" />}


                <ProductInner />
                <Footer />
                <ScrollButton/>
            </div>


        </>

    )
}


export default ProductPage;
import React, { useEffect, useState } from 'react';
// import Mycard from './Mycard.js'
import { generatePath, useHistory } from 'react-router-dom';
import './Imagecarousel.css'

import { GrFormAdd } from "react-icons/gr";
import { GrView } from "react-icons/gr";
import { Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import { GrFormClose } from 'react-icons/gr';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { AiFillCloseCircle } from 'react-icons/ai';
import DialogActions from '@material-ui/core/DialogActions';



const Imagecarousel = () => {
    let box = document.querySelector('.product-container');
    const [sizee, setSize] = useState("S")
    const onOptionChange = e => {
        setSize(e.target.value)
    }

    const [colorr, setColor] = useState("Red")
    const onColorChange = (e) => {
        setColor(e)
    }
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

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }




    const [data, setData] = useState([])
    const [dataa, setDataa] = useState([])
    const [openn, setOpenn] = useState(false)

    const history = useHistory();
    useEffect(() => {

        fetch("http://surc.online/api/products?category_id=22,13,27,8,12,25").then((result) => {
            result.json().then((resp) => {
                console.log("result", resp.data)

                setData(resp.data)
            })
        })
    }, [])

    const handleProceed = (id) => {
        console.log("clicked")
        id && history.push(generatePath("/products/:id", { id }));
    }
    const handleClickOpenn = (id) => {
        console.log(id);
        setOpenn(true);
        setDataa(id)

    }
    const handleToClose = () => {
        setOpenn(false);
    };





    var colorindex = 0;
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {

        setOpen(true);

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
                        'name': dataa.name,
                        'id': dataa.id,
                        'price': dataa.price,
                        'color': colorr,
                        'size': sizee,
                        'count': count
                    });
                }

            } else {
                listt.push({
                    'name': dataa.name,
                    'id': dataa.id,
                    'price': dataa.price,
                    'color': colorr,
                    'size': sizee,
                    'count': count
                });


            }

        } else {

            listt.push({
                'name': dataa.name,
                'id': dataa.id,
                'price': dataa.price,
                'color': colorr,
                'size': sizee,
                'count': count
            });

            console.log(listt)

        }
        localStorage.setItem('list', JSON.stringify(listt));






    };


    const handleClosee = () => {
        setOpen(false);
    };

    return (
        <div className="product-carousel">
            <button className="pre-btn" style={{ marginLeft: "290px" }} onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" style={{ marginRight: "320px" }} onClick={btnpressnext}><p>&gt;</p></button>



            <div style={{ marginLeft: "370px" }}>
                <div className="product-container" style={{ width: "1100px" }}>
                    {data.map((name, index) =>
                        <div style={{ width: '575px', marginRight: '30px', float: "left" }}><div className="velaProBlock grid " key={index} data-price="1,600.00"  >
                            <div className="velaProBlockInner">
                                <div className="proHImage d-flex flexJustifyCenter">
                                    <a className="proFeaturedImage">
                                        <div >
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{ paddingTop: "149.8%", width: "250px" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_4320x.jpg?v=1628248696 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_4320x.jpg?v=1628248696 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm hidden-xs proSwatch proImageSecond">
                                            <div className="p-relative">
                                                <div className="product-card__image" style={{ paddingTop: "149.8%" }}>
                                                    <img className="product-card__img lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,4320]" data-aspectratio="0.6675567423230975" data-ratio="0.6675567423230975" data-sizes="auto" alt="Black" data-srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_4320x.jpg?v=1628248696 4320w" sizes="275px" srcset="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_180x.jpg?v=1628248696 180w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_360x.jpg?v=1628248696 360w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_540x.jpg?v=1628248696 540w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_720x.jpg?v=1628248696 720w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_900x.jpg?v=1628248696 900w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1080x.jpg?v=1628248696 1080w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1296x.jpg?v=1628248696 1296w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1512x.jpg?v=1628248696 1512w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1728x.jpg?v=1628248696 1728w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_1944x.jpg?v=1628248696 1944w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2160x.jpg?v=1628248696 2160w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2376x.jpg?v=1628248696 2376w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2592x.jpg?v=1628248696 2592w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_2808x.jpg?v=1628248696 2808w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_3024x.jpg?v=1628248696 3024w, //cdn.shopify.com/s/files/1/0535/4812/2292/products/1wGndvibKzlyucMJyKIsHiqTXchK-TGTp_5ee4aa8d-0b37-43bd-baae-9d9b3b763225_4320x.jpg?v=1628248696 4320w" />
                                                </div>
                                                <div className="placeholder-background placeholder-background--animation" data-image-placeholder=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="productLable"></div><div className="proButton clearfix"><form action="/cart/add" method="post" enctype="multipart/form-data" className="formAddToCart">
                                        <input type="hidden" name="id" value="40047432368308" /><a className="btn btnProduct btnAddToCart" title="Select options">
                                            <span style={{ color: "white" }}>+</span>
                                            <span style={{ color: "white" }} onClick={() => handleProceed(name.id)}>Select options</span>
                                        </a></form>

                                        <div className="productQuickView">
                                            <a className="btn btnProduct btnProductQuickview" onClick={(e) => { handleClickOpenn(name) }} data-handle="apple-shorts" title="Quick view">
                                                <span><GrView size={20} /></span>

                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="proContent text-center">
                                    <h5 className="proName">

                                        <a href="/products/apple-shorts">{name.name}</a>
                                    </h5>
                                    <div className="proPrice"><div className="priceProduct ">{parseFloat(name.price).toFixed(2)}</div>
                                    </div><div className="velaSwatchCus">

                                        {/* { colorindex = name.super_attributes.findIndex(x => x.name ==="Color")} */}
                                        <ul className="velaSwatchProduct d-flex flexJustifyCenter">
                                            {name.super_attributes[colorindex].options.map((pcolor) =>


                                                <li style={{ margin: "3px" }}>

                                                    <label style={{ backgroundColor: pcolor.swatch_value }}></label>


                                                    <div className="hidden">
                                                        <a href="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_large.jpg?v=1628248696"></a>
                                                    </div>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></div>

                    )}
                    <Dialog open={openn} onClose={handleToClose} >

                        <DialogContent>
                            <DialogContentText>
                                <GrFormClose onClick={handleToClose} />

                                <section  >

                                    {dataa != [] ?
                                        <div className="shopify-section ">
                                            <div className="pageCollectionInner detail_default">
                                                <div className="productBox">
                                                    <div className="proBoxPrimary">
                                                        <div style={{ backgroundColor: "#ffffff" }}>
                                                            <div>
                                                                <div className="row mb2">
                                                                    <div>

                                                                    <div className="proBoxImage col-xs-12 col-md-10 mb2">


                                                                        <div className="proFeaturedImage"  >


                                                                            <div id="groupProImage" className="p-relative" >
                                                                                <img id="ProductPhotoImg" className="img-responsive" style={{ width: "280px", height: "410px" }} alt="Black" src="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172_1000x.jpg?v=1628248696" data-zoom-enable="true" data-zoom-image="//cdn.shopify.com/s/files/1/0535/4812/2292/products/1_EFZ84DVPN4_hKBlmnJ5QcXsz7D7zcCX_ff132c06-fdfa-4007-b907-b6688e53d172.jpg?v=1628248696" data-zoom-scroll="false" data-zoom-type="lens" data-zoom-width="300" data-zoom-height="300" data-zoom-lens="250" data-lens-shape="round" />

                                                                            </div>
                                                                        </div>
                                                                        <div id="productThumbs" className="proThumbnails thumbnails-wrapper" style={{ width: "280px" }} >
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
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>



                                                                                    <button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button" style={{ display: "block" }} aria-disabled="false">< IoIosArrowForward size={20} /></button></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div     className="col-xs-12 col-md-6 mb30" style={{ width: "450px" , height:"200px" }}>

                                                                        <div className="proBoxInfo">

                                                                            <h1>{dataa.name}</h1><div className="wrapper mb30">
                                                                                <form acceptCharset="UTF-8" className="htmlFormAddToCart" >
                                                                                    <div className="proVariants">

                                                                                        <div class="proShortDescription rte">
                                                                                            Comfort wear with pockets!Whether you are planning a trip to your favorite destination or kitchen to grab a snack, you must do it in our Apple Bottom Shorts. These...</div><br></br>


                                                                                      

                                                                                        {openn ?

                                                                                            <div className="js-swatch swatch clearfix">
                                                                                                <div className="header">Size: <span className="js-swatch-display text"> {sizee}</span></div>

                                                                                                {console.log(dataa != null ? dataa.super_attributes[1].options : "test")}
                                                                                                {dataa != null ? dataa.super_attributes[1].options.map((size) =>
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
                                                                                            :
                                                                                            <div>
                                                                                            </div>

                                                                                        }




                                                                                       
                                                                                        {openn ?

                                                                                            <div className="js-swatch swatch clearfix" data-option-index="1">

                                                                                                <div className="header">Color: <span className="js-swatch-display text">{colorr}</span></div>
                                                                                                <div data-value="Black" className="swatch-element color black available">
                                                                                                    <div className="tooltip"></div>
                                                                                                    <input className="swatchItem" id="swatch-1-black" type="radio" name="option-1" value="Black" />
                                                                                                    {/* {colorindex = dataa.super_attributes.findIndex(x => x.name === "Color")} */}
                                                                                                    {dataa.super_attributes[colorindex].options.map((pcolor) =>
                                                                                                        <label htmlFor="swatch-1-black" value={pcolor.label}
                                                                                                            id={pcolor.label}

                                                                                                            onClick={() => onColorChange(pcolor.label)}

                                                                                                            style={{ backgroundColor: pcolor.swatch_value, margin: "4px" }}>

                                                                                                        </label>
                                                                                                    )}
                                                                                                </div>


                                                                                            </div>
                                                                                            :
                                                                                            <div>
                                                                                            </div>
                                                                                        }


                                                                                    </div>
                                                                                    <div className="proPrice flexRow flexAlignCenter"><span id="ProductPrice" className="priceProduct " style={{ fontWeight: "bold", color: "black" }}> Rs. {dataa.price}</span>
                                                                                    </div>
                                                                                    <div className="velaGroup d-flex flexAlignEnd mb20">





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
                                                                                        <a className="btn btnAddToCart">
                                                                                            <span onClick={() => handleClickOpen()}>Add to Cart</span>
                                                                                        </a></div>

                                                                                    <Dialog open={open} >


                                                                                        <div style={{ marginLeft: "350px" }} onClick={() => handleClosee()} title="Close">
                                                                                            <AiFillCloseCircle size={25} />
                                                                                        </div>


                                                                                        <DialogContent>
                                                                                            <DialogContentText>


                                                                                                <div className="headerCartContent rowFlex flexAlignCenter" style={{margin:"2px"}}>
                                                                                                    <a className="closeCartModal" href="javascript:void(0)" style={{ position: "absolute" }}></a>
                                                                                                    <div className="cartProductImage" style={{ width: "42%", paddingRight: "30px" }}>
                                                                                                        <img className="img-responsive" alt="Surc" src="https://cdn.shopify.com/s/files/1/0535/4812/2292/products/CIRCDAY28791_c3def02d-9646-4ab8-b3de-69a730200eac.jpg?v=1628677075" />
                                                                                                    </div>
                                                                                                    <div className="cartProductContent" style={{
                                                                                                        float: "center",
                                                                                                        width: "50%",
                                                                                                        padding: "10px 0",
                                                                                                        textAlign: "center", fontSize: "15px"
                                                                                                    }}>
                                                                                                        <div className="productTitle">{dataa.name} - {sizee} / {colorr} </div>
                                                                                                        <div style={{ color: "green" }} className="alertCartModal">Has been added to the cart!</div>
                                                                                                        <div className="cartModalButtons">
                                                                                                            <a className="btn btnVelaCart btnViewCart" href="/viewCart">View Cart</a>
                                                                                                            <a className="btn btnVelaCart btnCheckout" href="/checkout">Check out</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </DialogContentText>
                                                                                        </DialogContent>
                                                                                       
                                                                                    </Dialog>




                                                                                </form>







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
                                        :
                                        <div></div>}


                                </section>
                            </DialogContentText>
                        </DialogContent>

                    </Dialog>
                </div>
            </div>
        </div>

    )
}

export default Imagecarousel
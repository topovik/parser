const fs = require('fs');
const uuid = require('node-uuid');
const router = require('express').Router();
const request = require('request');
const cheerio = require('cheerio');
const sharp = require('sharp');

const titleModel = require('./mongoDb/title');
const articlesModel = require('./mongoDb/articles');


const URL = 'https://topovik.com/bussiness/samye-bogatye-zhenshhiny-v-mire-kto-oni'


request(URL, (err, res, body) => {
    if (err) return err;
    console.log(res.statusCode);


    const root = cheerio.load(body, {
        decodeEntities: false
    });

    //First block (txt)
    const txt = root('body > main > div > div > div.column.is-two-thirds-desktop > section > article > div.post > p.info').next()
    root('.post-rating').remove()
    root('.ads').remove()

    //1//
    const txt2 = root(txt).children().attr('href');
    const txt2_5 = root(txt).children().attr('src');
    const txt3 = root(txt).text();
    let result1;

    txt2 === undefined ? result1 = txt3 : result1 = txt2;

    if (result1.length === 0) {
        result1 = txt2_5
    } else if (result1.trim().slice(0, 4) === 'http') {
        result1 = txt2
    } else {
        result1 = txt3
    }

    if (result1 === null || Boolean(result1) === false) {
        console.log(err)
    } else if (result1.trim().slice(0, 4) === 'http') {
        let nameNext = result1.trim().slice(47, -4);
        let name = result1.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result1.toString())
            .pipe(fs.createWriteStream(pathStart))
        result1 = pathNext;
    }

    //2//
    const txt4 = root(txt).next().children().attr('href');
    const txt4_5 = root(txt).next().children().attr('src');
    const txt5 = root(txt).next().text();
    let result2;

    txt4 === undefined ? result2 = txt5 : result2 = txt4;

    if (result2.length === 0) {
        result2 = txt4_5
    } else if (result2.trim().slice(0, 4) === 'http') {
        result2 = txt4
    } else {
        result2 = txt5
    }

    if (result2 === null || Boolean(result2) === false) {
        console.log(err)
    } else if (result2.trim().slice(0, 4) === 'http') {
        let nameNext = result2.trim().slice(47, -4);
        let name = result2.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result2.toString())
            .pipe(fs.createWriteStream(pathStart))
        result2 = pathNext;

    }

    //3//
    const txt6 = root(txt).next().next().children().attr('href');
    const txt6_5 = root(txt).next().next().children().attr('src');
    const txt7 = root(txt).next().next().text();
    let result3;

    txt6 === undefined ? result3 = txt7 : result3 = txt6;

    if (result3.length === 0) {
        result3 = txt6_5
    } else if (result3.trim().slice(0, 4) === 'http') {
        result3 = txt6
    } else {
        result3 = txt7
    }

    if (result3 === null || Boolean(result3) === false) {
        console.log(err)
    } else if (result3.trim().slice(0, 4) === 'http') {
        let nameNext = result3.trim().slice(47, -4);
        let name = result3.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result3.toString())
            .pipe(fs.createWriteStream(pathStart))
        result3 = pathNext;

    }

    //4//
    const txt8 = root(txt).next().next().next().children().attr('href');
    const txt8_5 = root(txt).next().next().next().children().attr('src');
    const txt9 = root(txt).next().next().next().text();
    let result4;

    txt8 === undefined ? result4 = txt9 : result4 = txt8;

    if (result4.length === 0) {
        result4 = txt8_5
    } else if (result4.trim().slice(0, 4) === 'http') {
        result4 = txt8
    } else {
        result4 = txt9
    }

    if (result4 === null || Boolean(result4) === false) {
        console.log(err)
    } else if (result4.trim().slice(0, 4) === 'http') {
        let nameNext = result4.trim().slice(47, -4);
        let name = result4.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result4.toString())
            .pipe(fs.createWriteStream(pathStart))
        result4 = pathNext;
    }

    //5//
    const txt10 = root(txt).next().next().next().next().children().attr('href');
    const txt10_5 = root(txt).next().next().next().next().children().attr('src')
    const txt11 = root(txt).next().next().next().next().text();
    let result5;

    txt10 === undefined ? result5 = txt11 : result5 = txt10;

    if (result5.length === 0) {
        result5 = txt10_5
    } else if (result5.trim().slice(0, 4) === 'http') {
        result5 = txt10
    } else {
        result5 = txt11
    }

    if (result5 === null || Boolean(result5) === false) {
        console.log(err)
    } else if (result5.trim().slice(0, 4) === 'http') {
        let nameNext = result5.trim().slice(47, -4);
        let name = result5.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result5.toString())
            .pipe(fs.createWriteStream(pathStart))
        result5 = pathNext;
    }

    //6//
    const txt12 = root(txt).next().next().next().next().next().children().attr('href');
    const txt12_5 = root(txt).next().next().next().next().next().children().attr('src');
    const txt13 = root(txt).next().next().next().next().next().text();
    let result6;

    txt12 === undefined ? result6 = txt13 : result6 = txt12;

    if (result6.length === 0) {
        result6 = txt12_5
    } else if (result6.trim().slice(0, 4) === 'http') {
        result6 = txt12
    } else {
        result6 = txt13
    }

    if (result6 === null || Boolean(result6) === false) {
        console.log(err)
    } else if (result6.trim().slice(0, 4) === 'http') {
        let nameNext = result6.trim().slice(47, -4);
        let name = result6.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result6.toString())
            .pipe(fs.createWriteStream(pathStart))
        result6 = pathNext;
    }

    //7//
    const txt14 = root(txt).next().next().next().next().next().next().children().attr('href');
    const txt14_5 = root(txt).next().next().next().next().next().next().children().attr('src');
    const txt15 = root(txt).next().next().next().next().next().next().text();
    let result7;

    txt14 === undefined ? result7 = txt15 : result7 = txt14;

    if (result7.length === 0) {
        result7 = txt14_5
    } else if (result7.trim().slice(0, 4) === 'http') {
        result7 = txt14
    } else {
        result7 = txt15
    }

    if (result7 === null || Boolean(result7) === false) {
        console.log(err)
    } else if (result7.trim().slice(0, 4) === 'http') {
        let nameNext = result7.trim().slice(47, -4);
        let name = result7.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result7.toString())
            .pipe(fs.createWriteStream(pathStart))
        result7 = pathNext;
    }

    //8//
    const txt16 = root(txt).next().next().next().next().next().next().next().children().attr('href');
    const txt16_5 = root(txt).next().next().next().next().next().next().next().children().attr('src');
    const txt17 = root(txt).next().next().next().next().next().next().next().text();
    let result8;

    txt16 === undefined ? result8 = txt17 : result8 = txt16;

    if (result8.length === 0) {
        result8 = txt16_5
    } else if (result8.trim().slice(0, 4) === 'http') {
        result8 = txt16
    } else {
        result8 = txt17
    }

    if (result8 === null || Boolean(result8) === false) {
        console.log(err)
    } else if (result8.trim().slice(0, 4) === 'http') {
        let nameNext = result8.trim().slice(47, -4);
        let name = result8.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result8.toString())
            .pipe(fs.createWriteStream(pathStart))
        result8 = pathNext;
    }

    //9//
    const txt18 = root(txt).next().next().next().next().next().next().next().next().children().attr('href');
    const txt18_5 = root(txt).next().next().next().next().next().next().next().next().children().attr('src');
    const txt19 = root(txt).next().next().next().next().next().next().next().next().text();
    let result9;

    txt18 === undefined ? result9 = txt19 : result9 = txt18;

    if (result9.length === 0) {
        result9 = txt18_5
    } else if (result9.trim().slice(0, 4) === 'http') {
        result9 = txt18
    } else {
        result9 = txt19
    }

    if (result9 === null || Boolean(result9) === false) {
        console.log(err)
    } else if (result9.trim().slice(0, 4) === 'http') {
        let nameNext = result9.trim().slice(47, -4);
        let name = result9.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result9.toString())
            .pipe(fs.createWriteStream(pathStart))
        result9 = pathNext;
    }

    //10//
    const txt20 = root(txt).next().next().next().next().next().next().next().next().next().children().attr('href');
    const txt20_5 = root(txt).next().next().next().next().next().next().next().next().next().children().attr('src');
    const txt21 = root(txt).next().next().next().next().next().next().next().next().next().text();
    let result10;

    txt20 === undefined ? result10 = txt21 : result10 = txt20;

    if (result10.length === 0) {
        result10 = txt20_5
    } else if (result10.trim().slice(0, 4) === 'http') {
        result10 = txt20
    } else {
        result10 = txt21
    }

    if (result10 === null || Boolean(result10) === false) {
        console.log(err)
    } else if (result10.trim().slice(0, 4) === 'http') {
        let nameNext = result10.trim().slice(47, -4);
        let name = result10.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result10.toString())
            .pipe(fs.createWriteStream(pathStart))
        result10 = pathNext;
    }

    let images;

    switch ('/') {
        case result1.trim().slice(0, 1):
            images = result1;
            break;

        case result2.trim().slice(0, 1):
            images = result2;
            break;

        case result3.trim().slice(0, 1):
            images = result3;
            break;

        case result4.trim().slice(0, 1):
            images = result4;
            break;

        case result5.trim().slice(0, 1):
            images = result5;
            break;

        case result6.trim().slice(0, 1):
            images = result6;
            break;

        case result7.trim().slice(0, 1):
            images = result7;
            break;

        case result8.trim().slice(0, 1):
            images = result8;
            break;

        case result9.trim().slice(0, 1):
            images = result9;
            break;

        case result10.trim().slice(0, 1):
            images = result10;
            break;

        default:
            console.log('none images')
    }

    //Second block (trt)
    const trt = root('body > main > div > div > div.column.is-two-thirds-desktop > section > article > div.post > p:nth-child(14)')

    //1//
    const trt2 = root(trt).children().attr('href');
    const trt2_5 = root(trt).children().attr('src');
    const trt3 = root(trt).text();
    let result11;

    trt2 === undefined ? result11 = trt3 : result11 = trt2;

    if (result11.length === 0) {
        result11 = trt2_5
    } else if (result11.trim().slice(0, 4) === 'http') {
        result11 = trt2
    } else {
        result11 = trt3
    }

    if (result11 === null || Boolean(result11) === false) {
        console.log(err)
    } else if (result11.trim().slice(0, 4) === 'http') {
        let nameNext = result11.trim().slice(47, -4);
        let name = result11.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result11.toString())
            .pipe(fs.createWriteStream(pathStart))
        result11 = pathNext;
    }

    //2//
    const trt4 = root(trt).next().children().attr('href');
    const trt4_5 = root(trt).next().children().attr('src');
    const trt5 = root(trt).next().text();
    let result12;

    trt4 === undefined ? result12 = trt5 : result12 = trt4;

    if (result12.length === 0) {
        result12 = trt4_5
    } else if (result12.trim().slice(0, 4) === 'http') {
        result12 = trt4
    } else {
        result12 = trt5
    }

    if (result12 === null || Boolean(result12) === false) {
        console.log(err)
    } else if (result12.trim().slice(0, 4) === 'http') {
        let nameNext = result12.trim().slice(47, -4);
        let name = result12.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result12.toString())
            .pipe(fs.createWriteStream(pathStart))
        result12 = pathNext;
    }

    //3//
    const trt6 = root(trt).next().next().children().attr('href');
    const trt6_5 = root(trt).next().next().children().attr('src');
    const trt7 = root(trt).next().next().text();
    let result13;

    trt6 === undefined ? result13 = trt7 : result13 = trt6;

    if (result13.length === 0) {
        result13 = trt6_5
    } else if (result13.trim().slice(0, 4) === 'http') {
        result13 = trt6
    } else {
        result13 = trt7
    }

    if (result13 === null || Boolean(result13) === false) {
        console.log(err)
    } else if (result13.trim().slice(0, 4) === 'http') {
        let nameNext = result13.trim().slice(47, -4);
        let name = result13.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result13.toString())
            .pipe(fs.createWriteStream(pathStart))
        result13 = pathNext;
    }


    //4//
    const trt8 = root(trt).next().next().next().children().attr('href');
    const trt8_5 = root(trt).next().next().next().children().attr('src');
    const trt9 = root(trt).next().next().next().text();
    let result14;

    trt8 === undefined ? result14 = trt9 : result14 = trt8;

    if (result14.length === 0) {
        result14 = trt8_5
    } else if (result14.trim().slice(0, 4) === 'http') {
        result14 = trt8
    } else {
        result14 = trt9
    }

    if (result14 === null || Boolean(result14) === false) {
        console.log(err)
    } else if (result14.trim().slice(0, 4) === 'http') {
        let nameNext = result14.trim().slice(47, -4);
        let name = result14.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result14.toString())
            .pipe(fs.createWriteStream(pathStart))
        result14 = pathNext;
    }

    //5//
    const trt10 = root(trt).next().next().next().next().children().attr('href');
    const trt10_5 = root(trt).next().next().next().next().children().attr('src');
    const trt11 = root(trt).next().next().next().next().text();
    let result15;

    trt10 === undefined ? result15 = trt11 : result15 = trt10;

    if (result15.length === 0) {
        result15 = trt10_5
    } else if (result15.trim().slice(0, 4) === 'http') {
        result15 = trt10
    } else {
        result15 = trt11
    }

    if (result15 === null || Boolean(result15) === false) {
        console.log(err)
    } else if (result15.trim().slice(0, 4) === 'http') {
        let nameNext = result15.trim().slice(47, -4);
        let name = result15.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result15.toString())
            .pipe(fs.createWriteStream(pathStart))
        result15 = pathNext;
    }

    //6//
    const trt12 = root(trt).next().next().next().next().children().attr('href');
    const trt12_5 = root(trt).next().next().next().next().children().attr('src');
    const trt13 = root(trt).next().next().next().next().text();
    let result16;

    trt12 === undefined ? result16 = trt13 : result16 = trt12;

    if (result16.length === 0) {
        result16 = trt12_5
    } else if (result16.trim().slice(0, 4) === 'http') {
        result16 = trt12
    } else {
        result16 = trt13
    }

    if (result16 === null || Boolean(result16) === false) {
        console.log(err)
    } else if (result16.trim().slice(0, 4) === 'http') {
        let nameNext = result16.trim().slice(47, -4);
        let name = result16.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result16.toString())
            .pipe(fs.createWriteStream(pathStart))
        result16 = pathNext;
    }

    //7//
    const trt14 = root(trt).next().next().next().next().next().children().attr('href');
    const trt14_5 = root(trt).next().next().next().next().next().children().attr('src');
    const trt15 = root(trt).next().next().next().next().next().text();
    let result17;

    trt14 === undefined ? result17 = trt15 : result17 = trt14;

    if (result17.length === 0) {
        result17 = trt14_5
    } else if (result17.trim().slice(0, 4) === 'http') {
        result17 = trt14
    } else {
        result17 = trt15
    }

    if (result17 === null || Boolean(result17) === false) {
        console.log(err)
    } else if (result17.trim().slice(0, 4) === 'http') {
        let nameNext = result17.trim().slice(47, -4);
        let name = result17.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result17.toString())
            .pipe(fs.createWriteStream(pathStart))
        result17 = pathNext;
    }

    //8//
    const trt16 = root(trt).next().next().next().next().next().next().children().attr('href');
    const trt16_5 = root(trt).next().next().next().next().next().next().children().attr('src');
    const trt17 = root(trt).next().next().next().next().next().next().text();
    let result18;

    trt16 === undefined ? result18 = trt17 : result18 = trt16;

    if (result18.length === 0) {
        result18 = trt16_5
    } else if (result18.trim().slice(0, 4) === 'http') {
        result18 = trt16
    } else {
        result18 = trt17
    }


    if (result18 === null || Boolean(result18) === false) {
        console.log(err)
    } else if (result18.trim().slice(0, 4) === 'http') {
        let nameNext = result18.trim().slice(47, -4);
        let name = result18.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result18.toString())
            .pipe(fs.createWriteStream(pathStart))
        result18 = pathNext;
    }

    //9//
    const trt18 = root(trt).next().next().next().next().next().next().next().children().attr('href');
    const trt18_5 = root(trt).next().next().next().next().next().next().next().children().attr('src');
    const trt19 = root(trt).next().next().next().next().next().next().next().text();
    let result19;

    trt18 === undefined ? result19 = trt19 : result19 = trt18;

    if (result19.length === 0) {
        result19 = trt18_5
    } else if (result19.trim().slice(0, 4) === 'http') {
        result19 = trt18
    } else {
        result19 = trt19
    }

    if (result19 === null || Boolean(result19) === false) {
        console.log(err)
    } else if (result19.trim().slice(0, 4) === 'http') {
        let nameNext = result19.trim().slice(47, -4);
        let name = result19.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result19.toString())
            .pipe(fs.createWriteStream(pathStart))
        result19 = pathNext;
    }

    //10//
    const trt20 = root(trt).next().next().next().next().next().next().next().next().children().attr('href');
    const trt20_5 = root(trt).next().next().next().next().next().next().next().next().children().attr('src');
    const trt21 = root(trt).next().next().next().next().next().next().next().next().text();
    let result20;

    trt20 === undefined ? result20 = trt21 : result20 = trt20;

    if (result20.length === 0) {
        result20 = trt20_5
    } else if (result20.trim().slice(0, 4) === 'http') {
        result20 = trt20
    } else {
        result20 = trt21
    }

    if (result20 === null || Boolean(result20) === false) {
        console.log(err)
    } else if (result20.trim().slice(0, 4) === 'http') {
        let nameNext = result20.trim().slice(47, -4);
        let name = result20.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result20.toString())
            .pipe(fs.createWriteStream(pathStart))
        result20 = pathNext;
    }


    //Third block (tqt)
    const tqt = root('body > main > div > div > div.column.is-two-thirds-desktop > section > article > div.post > p:nth-child(23)');

    //1//
    const tqt2 = root(tqt).children().attr('href');
    const tqt2_5 = root(tqt).children().attr('src');
    const tqt3 = root(tqt).text();
    let result21;

    tqt2 === undefined ? result21 = tqt3 : result21 = tqt2;

    if (result21.length === 0) {
        result21 = tqt2_5
    } else if (result21.trim().slice(0, 4) === 'http') {
        result21 = tqt2
    } else {
        result21 = tqt3
    }

    if (result21 === null || Boolean(result21) === false) {
        console.log(err)
    } else if (result21.trim().slice(0, 4) === 'http') {
        let nameNext = result21.trim().slice(47, -4);
        let name = result21.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result21.toString())
            .pipe(fs.createWriteStream(pathStart))
        result21 = pathNext;
    }

    //2//
    const tqt4 = root(tqt).next().children().attr('href');
    const tqt4_5 = root(tqt).next().children().attr('src');
    const tqt5 = root(tqt).next().text();
    let result22;

    tqt4 === undefined ? result22 = tqt5 : result22 = tqt4;

    if (result22.length === 0) {
        result22 = tqt4_5
    } else if (result22.trim().slice(0, 4) === 'http') {
        result22 = tqt4
    } else {
        result22 = tqt5
    }

    if (result22 === null || Boolean(result22) === false) {
        console.log(err)
    } else if (result22.trim().slice(0, 4) === 'http') {
        let nameNext = result22.trim().slice(47, -4);
        let name = result22.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result22.toString())
            .pipe(fs.createWriteStream(pathStart))
        result22 = pathNext;
    }

    //3//
    const tqt6 = root(tqt).next().next().children().attr('href');
    const tqt6_5 = root(tqt).next().next().children().attr('src');
    const tqt7 = root(tqt).next().next().text();
    let result23;

    tqt6 === undefined ? result23 = tqt7 : result23 = tqt6;

    if (result23.length === 0) {
        result23 = tqt6_5
    } else if (result23.trim().slice(0, 4) === 'http') {
        result23 = tqt6
    } else {
        result23 = tqt7
    }

    if (result23 === null || Boolean(result23) === false) {
        console.log(err)
    } else if (result23.trim().slice(0, 4) === 'http') {
        let nameNext = result23.trim().slice(47, -4);
        let name = result23.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result23.toString())
            .pipe(fs.createWriteStream(pathStart))
        result23 = pathNext;
    }

    //4//
    const tqt8 = root(tqt).next().next().next().children().attr('href');
    const tqt8_5 = root(tqt).next().next().next().children().attr('src');
    const tqt9 = root(tqt).next().next().next().text();
    let result24;

    tqt8 === undefined ? result24 = tqt9 : result24 = tqt8;

    if (result24.length === 0) {
        result24 = tqt8_5
    } else if (result24.trim().slice(0, 4) === 'http') {
        result24 = tqt8
    } else {
        result24 = tqt9
    }

    if (result24 === null || Boolean(result24) === false) {
        console.log(err)
    } else if (result24.trim().slice(0, 4) === 'http') {
        let nameNext = result24.trim().slice(47, -4);
        let name = result24.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result24.toString())
            .pipe(fs.createWriteStream(pathStart))
        result24 = pathNext;
    }

    //5//
    const tqt10 = root(tqt).next().next().next().next().children().attr('href');
    const tqt10_5 = root(tqt).next().next().next().next().children().attr('src');
    const tqt11 = root(tqt).next().next().next().next().text();
    let result25;

    tqt10 === undefined ? result25 = tqt11 : result25 = tqt10;

    if (result25.length === 0) {
        result25 = tqt10_5
    } else if (result25.trim().slice(0, 4) === 'http') {
        result25 = tqt10
    } else {
        result25 = tqt11
    }

    if (result25 === null || Boolean(result25) === false) {
        console.log(err)
    } else if (result25.trim().slice(0, 4) === 'http') {
        let nameNext = result25.trim().slice(47, -4);
        let name = result25.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result25.toString())
            .pipe(fs.createWriteStream(pathStart))
        result25 = pathNext;
    }

    //6//
    const tqt12 = root(tqt).next().next().next().next().next().children().attr('href');
    const tqt12_5 = root(tqt).next().next().next().next().next().children().attr('src');
    const tqt13 = root(tqt).next().next().next().next().next().text();
    let result26;

    tqt12 === undefined ? result26 = tqt13 : result26 = tqt12;

    if (result26.length === 0) {
        result26 = tqt12_5
    } else if (result26.trim().slice(0, 4) === 'http') {
        result26 = tqt12
    } else {
        result26 = tqt13
    }

    if (result26 === null || Boolean(result26) === false) {
        console.log(err)
    } else if (result26.trim().slice(0, 4) === 'http') {
        let nameNext = result26.trim().slice(47, -4);
        let name = result26.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result26.toString())
            .pipe(fs.createWriteStream(pathStart))
        result26 = pathNext;
    }

    //7//
    const tqt14 = root(tqt).next().next().next().next().next().next().children().attr('href');
    const tqt14_5 = root(tqt).next().next().next().next().next().next().children().attr('src');
    const tqt15 = root(tqt).next().next().next().next().next().next().text();
    let result27;

    tqt14 === undefined ? result27 = tqt15 : result27 = tqt14;

    if (result27.length === 0) {
        result27 = tqt14_5
    } else if (result27.trim().slice(0, 4) === 'http') {
        result27 = tqt14
    } else {
        result27 = tqt15
    }

    if (result27 === null || Boolean(result27) === false) {
        console.log(err)
    } else if (result27.trim().slice(0, 4) === 'http') {
        let nameNext = result27.trim().slice(47, -4);
        let name = result27.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result27.toString())
            .pipe(fs.createWriteStream(pathStart))
        result27 = pathNext;
    }

    //8//
    const tqt16 = root(tqt).next().next().next().next().next().next().next().children().attr('href');
    const tqt16_5 = root(tqt).next().next().next().next().next().next().next().children().attr('src');
    const tqt17 = root(tqt).next().next().next().next().next().next().next().text();
    let result28;

    tqt16 === undefined ? result28 = tqt17 : result28 = tqt16;

    if (result28.length === 0) {
        result28 = tqt16_5
    } else if (result28.trim().slice(0, 4) === 'http') {
        result28 = tqt16
    } else {
        result28 = tqt17
    }

    if (result28 === null || Boolean(result28) === false) {
        console.log(err)
    } else if (result28.trim().slice(0, 4) === 'http') {
        let nameNext = result28.trim().slice(47, -4);
        let name = result28.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result28.toString())
            .pipe(fs.createWriteStream(pathStart))
        result28 = pathNext;
    }

    //9//
    const tqt18 = root(tqt).next().next().next().next().next().next().next().next().children().attr('href');
    const tqt18_5 = root(tqt).next().next().next().next().next().next().next().next().children().attr('src');
    const tqt19 = root(tqt).next().next().next().next().next().next().next().next().text();
    let result29;

    tqt18 === undefined ? result29 = tqt19 : result29 = tqt18;

    if (result29.length === 0) {
        result29 = tqt18_5
    } else if (result29.trim().slice(0, 4) === 'http') {
        result29 = tqt18
    } else {
        result29 = tqt19
    }

    if (result29 === null || Boolean(result29) === false) {
        console.log(err)
    } else if (result29.trim().slice(0, 4) === 'http') {
        let nameNext = result29.trim().slice(47, -4);
        let name = result29.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result29.toString())
            .pipe(fs.createWriteStream(pathStart))
        result29 = pathNext;
    }

    //10//
    const tqt20 = root(tqt).next().next().next().next().next().next().next().next().next().children().attr('href');
    const tqt20_5 = root(tqt).next().next().next().next().next().next().next().next().next().children().attr('src');
    const tqt21 = root(tqt).next().next().next().next().next().next().next().next().next().text();
    let result30;

    tqt20 === undefined ? result30 = tqt21 : result30 = tqt20;

    if (result30.length === 0) {
        result30 = tqt20_5
    } else if (result30.trim().slice(0, 4) === 'http') {
        result30 = tqt20
    } else {
        result30 = tqt21
    }

    if (result30 === null || Boolean(result30) === false) {
        console.log(err)
    } else if (result30.trim().slice(0, 4) === 'http') {
        let nameNext = result30.trim().slice(47, -4);
        let name = result30.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result30.toString())
            .pipe(fs.createWriteStream(pathStart))
        result30 = pathNext;
    }

    //Fourth block (tzt)
    const tzt = root('body > main > div > div > div.column.is-two-thirds-desktop > section > article > div.post > p:nth-child(33)');

    //1//
    const tzt2 = root(tzt).children().attr('href');
    const tzt2_5 = root(tzt).children().attr('src');
    const tzt3 = root(tzt).text();
    let result31;

    tzt2 === undefined ? result31 = tzt3 : result31 = tzt2;

    if (result31.length === 0) {
        result31 = tzt2_5
    } else if (result31.trim().slice(0, 4) === 'http') {
        result31 = tzt2
    } else {
        result31 = tzt3
    }

    if (result31 === null || Boolean(result31) === false) {
        console.log(err)
    } else if (result31.trim().slice(0, 4) === 'http') {
        let nameNext = result31.trim().slice(47, -4);
        let name = result31.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result31.toString())
            .pipe(fs.createWriteStream(pathStart))
        result31 = pathNext;
    }

    //2//
    const tzt4 = root(tzt).next().children().attr('href');
    const tzt4_5 = root(tzt).next().children().attr('src');
    const tzt5 = root(tzt).next().text();
    let result32;

    tzt4 === undefined ? result32 = tzt5 : result32 = tzt4;

    if (result32.length === 0) {
        result32 = tzt4_5
    } else if (result32.trim().slice(0, 4) === 'http') {
        result32 = tzt4
    } else {
        result32 = tzt5
    }

    if (result32 === null || Boolean(result32) === false) {
        console.log(err)
    } else if (result32.trim().slice(0, 4) === 'http') {
        let nameNext = result32.trim().slice(47, -4);
        let name = result32.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result32.toString())
            .pipe(fs.createWriteStream(pathStart))
        result32 = pathNext;
    }

    //3//
    const tzt6 = root(tzt).next().next().children().attr('href');
    const tzt6_5 = root(tzt).next().next().children().attr('src');
    const tzt7 = root(tzt).next().next().text();
    let result33;

    tzt6 === undefined ? result33 = tzt7 : result33 = tzt6;

    if (result33.length === 0) {
        result33 = tzt6_5
    } else if (result33.trim().slice(0, 4) === 'http') {
        result33 = tzt6
    } else {
        result33 = tzt7
    }

    if (result33 === null || Boolean(result33) === false) {
        console.log(err)
    } else if (result33.trim().slice(0, 4) === 'http') {
        let nameNext = result33.trim().slice(47, -4);
        let name = result33.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result33.toString())
            .pipe(fs.createWriteStream(pathStart))
        result33 = pathNext;
    }

    //4//
    const tzt8 = root(tzt).next().next().next().children().attr('href');
    const tzt8_5 = root(tzt).next().next().next().children().attr('src');
    const tzt9 = root(tzt).next().next().next().text();
    let result34;

    tzt8 === undefined ? result34 = tzt9 : result34 = tzt8;

    if (result34.length === 0) {
        result34 = tzt8_5
    } else if (result34.trim().slice(0, 4) === 'http') {
        result34 = tzt8
    } else {
        result34 = tzt9
    }

    if (result34 === null || Boolean(result34) === false) {
        console.log(err)
    } else if (result34.trim().slice(0, 4) === 'http') {
        let nameNext = result34.trim().slice(47, -4);
        let name = result34.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result34.toString())
            .pipe(fs.createWriteStream(pathStart))
        result34 = pathNext;
    }

    //5//
    const tzt10 = root(tzt).next().next().next().next().children().attr('href');
    const tzt10_5 = root(tzt).next().next().next().next().children().attr('src');
    const tzt11 = root(tzt).next().next().next().next().text();
    let result35;

    tzt10 === undefined ? result35 = tzt11 : result35 = tzt10;

    if (result35.length === 0) {
        result35 = tzt10_5
    } else if (result35.trim().slice(0, 4) === 'http') {
        result35 = tzt10
    } else {
        result35 = tzt11
    }

    if (result35 === null || Boolean(result35) === false) {
        console.log(err)
    } else if (result35.trim().slice(0, 4) === 'http') {
        let nameNext = result35.trim().slice(47, -4);
        let name = result35.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result35.toString())
            .pipe(fs.createWriteStream(pathStart))
        result35 = pathNext;
    }

    //6//
    const tzt12 = root(tzt).next().next().next().next().next().children().attr('href');
    const tzt12_5 = root(tzt).next().next().next().next().next().children().attr('src');
    const tzt13 = root(tzt).next().next().next().next().next().text();
    let result36;

    tzt12 === undefined ? result36 = tzt13 : result36 = tzt12;

    if (result36.length === 0) {
        result36 = tzt12_5
    } else if (result36.trim().slice(0, 4) === 'http') {
        result36 = tzt12
    } else {
        result36 = tzt13
    }

    if (result36 === null || Boolean(result36) === false) {
        console.log(err)
    } else if (result36.trim().slice(0, 4) === 'http') {
        let nameNext = result36.trim().slice(47, -4);
        let name = result36.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result36.toString())
            .pipe(fs.createWriteStream(pathStart))
        result36 = pathNext;
    }

    //7//
    const tzt14 = root(tzt).next().next().next().next().next().next().children().attr('href');
    const tzt14_5 = root(tzt).next().next().next().next().next().next().children().attr('src');
    const tzt15 = root(tzt).next().next().next().next().next().next().text();
    let result37;

    tzt14 === undefined ? result37 = tzt15 : result37 = tzt14;

    if (result37.length === 0) {
        result37 = tzt14_5
    } else if (result37.trim().slice(0, 4) === 'http') {
        result37 = tzt14
    } else {
        result37 = tzt15
    }

    if (result37 === null || Boolean(result37) === false) {
        console.log(err)
    } else if (result37.trim().slice(0, 4) === 'http') {
        let nameNext = result37.trim().slice(47, -4);
        let name = result37.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result37.toString())
            .pipe(fs.createWriteStream(pathStart))
        result37 = pathNext;
    }

    //8//
    const tzt16 = root(tzt).next().next().next().next().next().next().next().children().attr('href');
    const tzt16_5 = root(tzt).next().next().next().next().next().next().next().children().attr('src');
    const tzt17 = root(tzt).next().next().next().next().next().next().next().text();
    let result38;

    tzt16 === undefined ? result38 = tzt17 : result38 = tzt16;

    if (result38.length === 0) {
        result38 = tzt16_5
    } else if (result38.trim().slice(0, 4) === 'http') {
        result38 = tzt16
    } else {
        result38 = tzt17
    }

    if (result38 === null || Boolean(result38) === false) {
        console.log(err)
    } else if (result38.trim().slice(0, 4) === 'http') {
        let nameNext = result38.trim().slice(47, -4);
        let name = result38.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result38.toString())
            .pipe(fs.createWriteStream(pathStart))
        result38 = pathNext;
    }

    //9//
    const tzt18 = root(tzt).next().next().next().next().next().next().next().next().children().attr('href');
    const tzt18_5 = root(tzt).next().next().next().next().next().next().next().next().children().attr('src');
    const tzt19 = root(tzt).next().next().next().next().next().next().next().next().text();
    let result39;

    tzt18 === undefined ? result39 = tzt19 : result39 = tzt18;

    if (result39.length === 0) {
        result39 = tzt18_5
    } else if (result39.trim().slice(0, 4) === 'http') {
        result39 = tzt18
    } else {
        result39 = tzt19
    }

    if (result39 === null || Boolean(result39) === false) {
        console.log(err)
    } else if (result39.trim().slice(0, 4) === 'http') {
        let nameNext = result39.trim().slice(47, -4);
        let name = result39.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result39.toString())
            .pipe(fs.createWriteStream(pathStart))
        result39 = pathNext;
    }

    //10//
    const tzt20 = root(tzt).next().next().next().next().next().next().next().next().next().children().attr('href');
    const tzt20_5 = root(tzt).next().next().next().next().next().next().next().next().next().children().attr('src');
    const tzt21 = root(tzt).next().next().next().next().next().next().next().next().next().text();
    let result40;

    tzt20 === undefined ? result40 = tzt21 : result40 = tzt20;

    if (result40.length === 0) {
        result40 = tzt20_5
    } else if (result40.trim().slice(0, 4) === 'http') {
        result40 = tzt20
    } else {
        result40 = tzt21
    }

    if (result40 === null || Boolean(result40) === false) {
        console.log(err)
    } else if (result40.trim().slice(0, 4) === 'http') {
        let nameNext = result40.trim().slice(47, -4);
        let name = result40.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result40.toString())
            .pipe(fs.createWriteStream(pathStart))
        result40 = pathNext;
    }

    //Fifth block (tnt)
    const tnt = root('body > main > div > div > div.column.is-two-thirds-desktop > section > article > div.post > p:nth-child(43)');

    //1//
    const tnt2 = root(tnt).children().attr('href');
    const tnt2_5 = root(tnt).children().attr('src');
    const tnt3 = root(tnt).text();
    let result41;

    tnt2 === undefined ? result41 = tnt3 : result41 = tnt2;

    if (result41.length === 0) {
        result41 = tnt2_5
    } else if (result41.trim().slice(0, 4) === 'http') {
        result41 = tnt2
    } else {
        result41 = tnt3
    }

    if (result41 === null || Boolean(result41) === false) {
        console.log(err)
    } else if (result41.trim().slice(0, 4) === 'http') {
        let nameNext = result41.trim().slice(47, -4);
        let name = result41.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result41.toString())
            .pipe(fs.createWriteStream(pathStart))
        result41 = pathNext;
    }

    //2//
    const tnt4 = root(tnt).next().children().attr('href');
    const tnt4_5 = root(tnt).next().children().attr('src');
    const tnt5 = root(tnt).next().text();
    let result42;

    tnt4 === undefined ? result42 = tnt5 : result42 = tnt4;

    if (result42.length === 0) {
        result42 = tnt4_5
    } else if (result42.trim().slice(0, 4) === 'http') {
        result42 = tnt4
    } else {
        result42 = tnt5
    }

    if (result42 === null || Boolean(result42) === false) {
        console.log(err)
    } else if (result42.trim().slice(0, 4) === 'http') {
        let nameNext = result42.trim().slice(47, -4);
        let name = result42.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result42.toString())
            .pipe(fs.createWriteStream(pathStart))
        result42 = pathNext;
    }

    //3//
    const tnt6 = root(tnt).next().next().children().attr('href');
    const tnt6_5 = root(tnt).next().next().children().attr('src');
    const tnt7 = root(tnt).next().next().text();
    let result43;

    tnt6 === undefined ? result43 = tnt7 : result43 = tnt6;

    if (result43.length === 0) {
        result43 = tnt6_5
    } else if (result43.trim().slice(0, 4) === 'http') {
        result43 = tnt6
    } else {
        result43 = tnt7
    }

    if (result43 === null || Boolean(result43) === false) {
        console.log(err)
    } else if (result43.trim().slice(0, 4) === 'http') {
        let nameNext = result43.trim().slice(47, -4);
        let name = result43.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result43.toString())
            .pipe(fs.createWriteStream(pathStart))
        result43 = pathNext;
    }

    //4//
    const tnt8 = root(tnt).next().next().next().children().attr('href');
    const tnt8_5 = root(tnt).next().next().next().children().attr('src');
    const tnt9 = root(tnt).next().next().next().text();
    let result44;

    tnt8 === undefined ? result44 = tnt9 : result44 = tnt8;

    if (result44.length === 0) {
        result44 = tnt8_5
    } else if (result44.trim().slice(0, 4) === 'http') {
        result44 = tnt8
    } else {
        result44 = tnt9
    }

    if (result44 === null || Boolean(result44) === false) {
        console.log(err)
    } else if (result44.trim().slice(0, 4) === 'http') {
        let nameNext = result44.trim().slice(47, -4);
        let name = result44.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result44.toString())
            .pipe(fs.createWriteStream(pathStart))
        result44 = pathNext;
    }

    //5//
    const tnt10 = root(tnt).next().next().next().next().children().attr('href');
    const tnt10_5 = root(tnt).next().next().next().next().children().attr('src');
    const tnt11 = root(tnt).next().next().next().next().text();
    let result45;

    tnt10 === undefined ? result45 = tnt11 : result45 = tnt10;

    if (result45.length === 0) {
        result45 = tnt10_5
    } else if (result45.trim().slice(0, 4) === 'http') {
        result45 = tnt10
    } else {
        result45 = tnt11
    }

    if (result45 === null || Boolean(result45) === false) {
        console.log(err)
    } else if (result45.trim().slice(0, 4) === 'http') {
        let nameNext = result45.trim().slice(47, -4);
        let name = result45.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result45.toString())
            .pipe(fs.createWriteStream(pathStart))
        result45 = pathNext;
    }

    //6//
    const tnt12 = root(tnt).next().next().next().next().next().children().attr('href');
    const tnt12_5 = root(tnt).next().next().next().next().next().children().attr('src');
    const tnt13 = root(tnt).next().next().next().next().next().text();
    let result46;

    tnt12 === undefined ? result46 = tnt13 : result46 = tnt12;

    if (result46.length === 0) {
        result46 = tnt12_5
    } else if (result46.trim().slice(0, 4) === 'http') {
        result46 = tnt12
    } else {
        result46 = tnt13
    }

    if (result46 === null || Boolean(result46) === false) {
        console.log(err)
    } else if (result46.trim().slice(0, 4) === 'http') {
        let nameNext = result46.trim().slice(47, -4);
        let name = result46.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result46.toString())
            .pipe(fs.createWriteStream(pathStart))
        result46 = pathNext;
    }

    //7//
    const tnt14 = root(tnt).next().next().next().next().next().next().children().attr('href');
    const tnt14_5 = root(tnt).next().next().next().next().next().next().children().attr('src');
    const tnt15 = root(tnt).next().next().next().next().next().next().text();
    let result47;

    tnt14 === undefined ? result47 = tnt15 : result47 = tnt14;

    if (result47.length === 0) {
        result47 = tnt14_5
    } else if (result47.trim().slice(0, 4) === 'http') {
        result47 = tnt14
    } else {
        result47 = tnt15
    }

    if (result47 === null || Boolean(result47) === false) {
        console.log(err)
    } else if (result47.trim().slice(0, 4) === 'http') {
        let nameNext = result47.trim().slice(47, -4);
        let name = result47.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result47.toString())
            .pipe(fs.createWriteStream(pathStart))
        result47 = pathNext;
    }

    //8//
    const tnt16 = root(tnt).next().next().next().next().next().next().next().children().attr('href');
    const tnt16_5 = root(tnt).next().next().next().next().next().next().next().children().attr('src');
    const tnt17 = root(tnt).next().next().next().next().next().next().next().text();
    let result48;

    tnt16 === undefined ? result48 = tnt17 : result48 = tnt16;

    if (result48.length === 0) {
        result48 = tnt16_5
    } else if (result48.trim().slice(0, 4) === 'http') {
        result48 = tnt16
    } else {
        result48 = tnt17
    }

    if (result48 === null || Boolean(result48) === false) {
        console.log(err)
    } else if (result48.trim().slice(0, 4) === 'http') {
        let nameNext = result48.trim().slice(47, -4);
        let name = result48.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result48.toString())
            .pipe(fs.createWriteStream(pathStart))
        result48 = pathNext;
    }

    //9//
    const tnt18 = root(tnt).next().next().next().next().next().next().next().next().children().attr('href');
    const tnt18_5 = root(tnt).next().next().next().next().next().next().next().next().children().attr('src');
    const tnt19 = root(tnt).next().next().next().next().next().next().next().next().text();
    let result49;

    tnt18 === undefined ? result49 = tnt19 : result49 = tnt18;

    if (result49.length === 0) {
        result49 = tnt18_5
    } else if (result49.trim().slice(0, 4) === 'http') {
        result49 = tnt18
    } else {
        result49 = tnt19
    }

    if (result49 === null || Boolean(result49) === false) {
        console.log(err)
    } else if (result49.trim().slice(0, 4) === 'http') {
        let nameNext = result49.trim().slice(47, -4);
        let name = result49.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result49.toString())
            .pipe(fs.createWriteStream(pathStart))
        result49 = pathNext;
    }

    //10//
    const tnt20 = root(tnt).next().next().next().next().next().next().next().next().next().children().attr('href');
    const tnt20_5 = root(tnt).next().next().next().next().next().next().next().next().next().children().attr('src');
    const tnt21 = root(tnt).next().next().next().next().next().next().next().next().next().text();
    let result50;

    tnt20 === undefined ? result50 = tnt21 : result50 = tnt20;

    if (result50.length === 0) {
        result50 = tnt20_5
    } else if (result50.trim().slice(0, 4) === 'http') {
        result50 = tnt20
    } else {
        result50 = tnt21
    }

    if (result50 === null || Boolean(result50) === false) {
        console.log(err)
    } else if (result50.trim().slice(0, 4) === 'http') {
        let nameNext = result50.trim().slice(47, -4);
        let name = result50.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result50.toString())
            .pipe(fs.createWriteStream(pathStart))
        result50 = pathNext;
    }

    //Sixth block (tvt)
    const tvt = root('body > main > div > div > div.column.is-two-thirds-desktop > section > article > div.post > p:nth-child(53)');

    //1//
    const tvt2 = root(tvt).children().attr('href');
    const tvt2_5 = root(tvt).children().attr('src');
    const tvt3 = root(tvt).text();
    let result51;

    tvt2 === undefined ? result51 = tvt3 : result51 = tvt2;

    if (result51.length === 0) {
        result51 = tvt2_5
    } else if (result51.trim().slice(0, 4) === 'http') {
        result51 = tvt2
    } else {
        result51 = tvt3
    }

    if (result51 === null || Boolean(result51) === false) {
        console.log(err)
    } else if (result51.trim().slice(0, 4) === 'http') {
        let nameNext = result51.trim().slice(47, -4);
        let name = result51.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result51.toString())
            .pipe(fs.createWriteStream(pathStart))
        result51 = pathNext;
    }

    //2//
    const tvt4 = root(tvt).next().children().attr('href');
    const tvt4_5 = root(tvt).next().children().attr('src');
    const tvt5 = root(tvt).next().text();
    let result52;

    tvt4 === undefined ? result52 = tvt5 : result52 = tvt4;

    if (result52.length === 0) {
        result52 = tvt4_5
    } else if (result52.trim().slice(0, 4) === 'http') {
        result52 = tvt4
    } else {
        result52 = tvt5
    }

    if (result52 === null || Boolean(result52) === false) {
        console.log(err)
    } else if (result52.trim().slice(0, 4) === 'http') {
        let nameNext = result52.trim().slice(47, -4);
        let name = result52.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result52.toString())
            .pipe(fs.createWriteStream(pathStart))
        result52 = pathNext;
    }

    //3//
    const tvt6 = root(tvt).next().next().children().attr('href');
    const tvt6_5 = root(tvt).next().next().children().attr('src');
    const tvt7 = root(tvt).next().next().text();
    let result53;

    tvt6 === undefined ? result53 = tvt7 : result53 = tvt6;

    if (result53.length === 0) {
        result53 = tvt6_5
    } else if (result53.trim().slice(0, 4) === 'http') {
        result53 = tvt6
    } else {
        result53 = tvt7
    }

    if (result53 === null || Boolean(result53) === false) {
        console.log(err)
    } else if (result53.trim().slice(0, 4) === 'http') {
        let nameNext = result53.trim().slice(47, -4);
        let name = result53.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result53.toString())
            .pipe(fs.createWriteStream(pathStart))
        result53 = pathNext;
    }

    //4//
    const tvt8 = root(tvt).next().next().next().children().attr('href');
    const tvt8_5 = root(tvt).next().next().next().children().attr('src');
    const tvt9 = root(tvt).next().next().next().text();
    let result54;

    tvt8 === undefined ? result54 = tvt9 : result54 = tvt8;

    if (result54.length === 0) {
        result54 = tvt8_5
    } else if (result54.trim().slice(0, 4) === 'http') {
        result54 = tvt8
    } else {
        result54 = tvt9
    }

    if (result54 === null || Boolean(result54) === false) {
        console.log(err)
    } else if (result54.trim().slice(0, 4) === 'http') {
        let nameNext = result54.trim().slice(47, -4);
        let name = result54.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result54.toString())
            .pipe(fs.createWriteStream(pathStart))
        result54 = pathNext;
    }

    //5//
    const tvt10 = root(tvt).next().next().next().next().children().attr('href');
    const tvt10_5 = root(tvt).next().next().next().next().children().attr('src');
    const tvt11 = root(tvt).next().next().next().next().text();
    let result55;

    tvt10 === undefined ? result55 = tvt11 : result55 = tvt10;

    if (result55.length === 0) {
        result55 = tvt10_5
    } else if (result55.trim().slice(0, 4) === 'http') {
        result55 = tvt10
    } else {
        result55 = tvt11
    }

    if (result55 === null || Boolean(result55) === false) {
        console.log(err)
    } else if (result55.trim().slice(0, 4) === 'http') {
        let nameNext = result55.trim().slice(47, -4);
        let name = result55.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result55.toString())
            .pipe(fs.createWriteStream(pathStart))
        result55 = pathNext;
    }

    //6//
    const tvt12 = root(tvt).next().next().next().next().next().children().attr('href');
    const tvt12_5 = root(tvt).next().next().next().next().next().children().attr('src');
    const tvt13 = root(tvt).next().next().next().next().next().text();
    let result56;

    tvt12 === undefined ? result56 = tvt13 : result56 = tvt12;

    if (result56.length === 0) {
        result56 = tvt12_5
    } else if (result56.trim().slice(0, 4) === 'http') {
        result56 = tvt12
    } else {
        result56 = tvt13
    }

    if (result56 === null || Boolean(result56) === false) {
        console.log(err)
    } else if (result56.trim().slice(0, 4) === 'http') {
        let nameNext = result56.trim().slice(47, -4);
        let name = result56.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result56.toString())
            .pipe(fs.createWriteStream(pathStart))
        result56 = pathNext;
    }

    //7//
    const tvt14 = root(tvt).next().next().next().next().next().next().children().attr('href');
    const tvt14_5 = root(tvt).next().next().next().next().next().next().children().attr('src');
    const tvt15 = root(tvt).next().next().next().next().next().next().text();
    let result57;

    tvt14 === undefined ? result57 = tvt15 : result57 = tvt14;

    if (result57.length === 0) {
        result57 = tvt14_5
    } else if (result57.trim().slice(0, 4) === 'http') {
        result57 = tvt14
    } else {
        result57 = tvt15
    }

    if (result57 === null || Boolean(result57) === false) {
        console.log(err)
    } else if (result57.trim().slice(0, 4) === 'http') {
        let nameNext = result57.trim().slice(47, -4);
        let name = result57.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result57.toString())
            .pipe(fs.createWriteStream(pathStart))
        result57 = pathNext;
    }

    //8//
    const tvt16 = root(tvt).next().next().next().next().next().next().next().children().attr('href');
    const tvt16_5 = root(tvt).next().next().next().next().next().next().next().children().attr('src');
    const tvt17 = root(tvt).next().next().next().next().next().next().next().text();
    let result58;

    tvt16 === undefined ? result58 = tvt17 : result58 = tvt16;

    if (result58.length === 0) {
        result58 = tvt16_5
    } else if (result58.trim().slice(0, 4) === 'http') {
        result58 = tvt16
    } else {
        result58 = tvt17
    }

    if (result58 === null || Boolean(result58) === false) {
        console.log(err)
    } else if (result58.trim().slice(0, 4) === 'http') {
        let nameNext = result58.trim().slice(47, -4);
        let name = result58.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result58.toString())
            .pipe(fs.createWriteStream(pathStart))
        result58 = pathNext;
    }

    //9//
    const tvt18 = root(tvt).next().next().next().next().next().next().next().next().children().attr('href');
    const tvt18_5 = root(tvt).next().next().next().next().next().next().next().next().children().attr('src');
    const tvt19 = root(tvt).next().next().next().next().next().next().next().next().text();
    let result59;

    tvt18 === undefined ? result59 = tvt19 : result59 = tvt18;

    if (result59.length === 0) {
        result59 = tvt18_5
    } else if (result59.trim().slice(0, 4) === 'http') {
        result59 = tvt18
    } else {
        result59 = tvt19
    }

    if (result59 === null || Boolean(result59) === false) {
        console.log(err)
    } else if (result59.trim().slice(0, 4) === 'http') {
        let nameNext = result59.trim().slice(47, -4);
        let name = result59.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result59.toString())
            .pipe(fs.createWriteStream(pathStart))
        result59 = pathNext;
    }


    //10//
    const tvt20 = root(tvt).next().next().next().next().next().next().next().next().next().children().attr('href');
    const tvt20_5 = root(tvt).next().next().next().next().next().next().next().next().next().children().attr('src');
    const tvt21 = root(tvt).next().next().next().next().next().next().next().next().next().text();
    let result60;

    tvt20 === undefined ? result60 = tvt21 : result60 = tvt20;

    if (result60.length === 0) {
        result60 = tvt20_5
    } else if (result60.trim().slice(0, 4) === 'http') {
        result60 = tvt20
    } else {
        result60 = tvt21
    }

    if (result60 === null || Boolean(result60) === false) {
        console.log(err)
    } else if (result60.trim().slice(0, 4) === 'http') {
        let nameNext = result60.trim().slice(47, -4);
        let name = result60.trim().slice(47);
        let pathStart = `/home/dima/parser/upload/${name}`;
        let pathNext = `/home/dima/parser/test/${nameNext}.webp`;
        request
            .get(result60.toString())
            .pipe(fs.createWriteStream(pathStart))
        result60 = pathNext;

    }












    // console.log(`${result1} \n ${result2} \n ${result3} \n 
    // ${result4} \n ${result5} \n ${result6} \n ${result7} \n
    // ${result8} \n ${result9} \n ${result10} \n ${result11} \n 
    // ${result12} \n ${result13} \n ${result14} \n ${result15} \n 
    // ${result16} \n ${result17} \n ${result18} \n ${result19} \n 
    // ${result20} \n ${result21} \n ${result22} \n ${result23} \n 
    // ${result24} \n ${result25} \n ${result26} \n ${result27} \n 
    // ${result28} \n ${result29} \n ${result30} \n ${result31} \n 
    // ${result32} \n ${result33} \n ${result34} \n ${result35} \n 
    // ${result36} \n ${result37} \n ${result38} \n ${result39} \n 
    // ${result40} \n ${result41} \n ${result42} \n ${result43} \n 
    // ${result44} \n ${result45} \n ${result46} \n ${result47} \n
    // ${result48} \n ${result49} \n ${result50} \n ${result50} \n 
    // ${result51} \n ${result52} \n ${result53} \n ${result54} \n
    // ${result55} \n ${result56} \n ${result57} \n ${result58} \n
    // ${result59} \n ${result60} \n ${images}`);


    // Model articles.json
    let idCommon = uuid.v4()

    const objArticles = new articlesModel({
        title: root('.post h1').text(),
        text: {
            t1: result1,
            t2: result2,
            t3: result3,
            t4: result4,
            t5: result5,
            t6: result6,
            t7: result7,
            t8: result8,
            t9: result9,
            t10: result10,
            t11: result11,
            t12: result12,
            t13: result13,
            t14: result14,
            t15: result15,
            t16: result16,
            t17: result17,
            t18: result18,
            t19: result19,
            t20: result20,
            t21: result21,
            t22: result22,
            t23: result23,
            t24: result24,
            t25: result25,
            t26: result26,
            t27: result27,
            t28: result28,
            t29: result29,
            t30: result30,
            t31: result31,
            t32: result32,
            t33: result33,
            t34: result34,
            t35: result35,
            t36: result36,
            t37: result37,
            t38: result38,
            t39: result39,
            t40: result40,
            t41: result41,
            t42: result42,
            t43: result43,
            t44: result44,
            t45: result45,
            t46: result46,
            t47: result47,
            t48: result48,
            t49: result49,
            t50: result50,
            t51: result51,
            t52: result52,
            t53: result53,
            t54: result54,
            t55: result55,
            t56: result56,
            t57: result57,
            t58: result58,
            t59: result59,
            t60: result60,
        },
        id: idCommon
    })

    objArticles.save(err => {
        if (err) throw err;
        console.log('Article successfully saved')
    })

    // Model title.json
    const objTitle = new titleModel({
        title: root('.post h1').text(),
        images: images,
        id: idCommon,
        count: 0
    })

    objTitle.save(err => {
        if (err) throw err;
        console.log('Title successfully saved');
    })
})

// Foto converter
const readDr = fs.readdirSync('./upload')
readDr.map(t => {
    let newname = t.slice(0, -4)
    sharp(`./upload/${t}`)
        .flop()
        .toFormat('webp')
        .toFile(`./test/${newname}.webp`)
})


router.get("/api/mainarticles", (req, res) => {
    titleModel.find({}).limit(3).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/asidearticles", (req, res) => {
    titleModel.find({}).sort('-count').limit(5).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/:cnt/nextarticles", (req, res) => {
    let countArticles = Number(req.params.cnt);
    titleModel.find({}).skip(countArticles).limit(4).exec((err, articles) => {
        res.json(articles)
    })
})


router.get("/api/:id/article", (req, res) => {
    articlesModel.find({
        id: req.params.id
    }, (err, articles) => {
        res.json(articles)

        titleModel.find({
            id: req.params.id
        }, (err, out) => {
            let data = out.map(t => t.count)
            titleModel.update({
                id: req.params.id
            }, {
                count: ++data
            }, err => {
                if (err) throw err
            })
        })

    })

})

module.exports = router;
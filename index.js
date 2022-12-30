const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 

//mongoose.connect('mongodb://localhost:27017/scroll')
mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0.yi4xclr.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('db connected')
    })
    .catch((e) => {
        console.log(e)
    })

app.use(express.static('public')); 

//#33acac



// Post model
const Post = mongoose.model('Post', {
    title: { type: String },
    created: { type: Number },
    body: { type: String },
    id: { type: Number }
});

/*

Post.insertMany([
    { id: 1, title: 'My First Blog', date: 'Feb 2, 2017', body: 'I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 2, title: 'My Second Blog', date: 'Feb 2, 2017', body: 'Me travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 3, title: 'My Third Blog', date: 'Feb 2, 2017', body: 'You travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 4, title: 'My Fourth Blog', date: 'Feb 2, 2017', body: 'We travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 5, title: 'My Fifth Blog', date: 'Feb 2, 2017', body: 'He travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 6, title: 'My Sixth Blog', date: 'Feb 2, 2017', body: 'She travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 7, title: 'My Seventh Blog', date: 'Feb 2, 2017', body: 'It travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 8, title: 'My Eigth Blog', date: 'Feb 2, 2017', body: 'I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 9, title: 'My Ninth Blog', date: 'Feb 2, 2017', body: 'Me travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
    { id: 10, title: 'My Tenth Blog', date: 'Feb 2, 2017', body: 'I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.I travelled to Raipur, Chhattisgarh on the evening of 20th January, 2017 to conduct a “Linux kernel workshop” at NIT, Raipur. It was my first time travelling to Chhattisgarh. Lalit [student of the university and program co-ordinator] reached out to me sometime during October, 2016 for having a talk on Linux kernel at their university as part of Codeutsava 1.0. Based on my previous experience of conducting kernel workshop(s), I told them to have a full day session so that I can have enough time to solve the queries of participants.' },
]).then(function () {
    console.log("Data inserted")  // Success
}).catch(function (error) {
    console.log(error)      // Failure
});

*/


app.get('/find', async function (req, res) {
    
    let one, two, three, four; 
    try {
        let flag = true; 
        if (flag == true) {
            console.log(flag)
            one = 1; two = 2; three = 3; four = 4;
            const posts = await Post.find({ id: { $in: [one, two, three, four] } });
            console.log(posts)
            return res.status(200).json({posts})
            flag = false
        } else if (flag == false) {
            one = 5; two = 6; three = 7; four = 8;
            const posts = await Post.find({ id: { $in: [one, two, three, four] } });
            console.log(posts)
            return res.send('world')
            flag = '';
        } else {
            one = 9; two = 10; three = 11; four = 12;
            const posts = await Post.find({ id: { $in: [one, two, three, four] } });
            console.log(posts)
            return res.send('world')
            flag = true;
        }
    } catch (e) {
        console.log(e)
    }
})


mongoose.set('strictQuery', false);

app.listen('3000', function () {
    console.log('server up and running....')
})
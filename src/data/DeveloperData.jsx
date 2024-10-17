import React from "react";
import myImage from '../assets/myimage.jpeg';
import secondImg from "../assets/profile_pic.png";
import thirdImg from "../assets/image2.png"
const DeveloperData = [
    {
        id : 1,
        imageSrc:myImage,
        rating:10,
        name: "Muhammad Shah",
        age:19,
        passion: "Web Developer",
        company: "Saylani Mass It Training Ltd."
    },
    {
        id : 2,
        imageSrc:secondImg,
        rating:9,
        name: "Naveed Ullah",
        age:27,
        passion: "React Native Developer",
        company: " Botnastic Solutions Ltd."
    },
    {
        id : 3,
        imageSrc :thirdImg,
        rating:8,
        name: "Mustafeez Khan",
        age:24,
        passion: "NodeJs Developer",
        company: "Khyber Digital IT."
    }

]

export default DeveloperData;
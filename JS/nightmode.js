const nightMode = () =>{
    const nightToggle = document.querySelector('.night-toggle');
    const body = document.querySelector('body');
    const aHeading = document.querySelector('.about-heading');
    const aHeadingBorder = document.querySelector('.about-heading');
    const aboutBox = document.querySelector('.about-box2');
    const cHeading = document.querySelector('.cars-heading');
    const carBox = document.querySelector('.swiper-slide');
    const car = document.querySelector('.car-name');
    const tHeading = document.querySelector('.team-heading');
    const tInfo = document.querySelector('.info-team');
    const tBox = document.querySelector('.team-card-one');
    const tBox2 = document.querySelector('.team-card-two');
    const tBox3 = document.querySelector('.team-card-three');
    const tBox4 = document.querySelector('.team-card-four');
    const tBox5 = document.querySelector('.team-card-five');
    const caHeading = document.querySelector('.career-heading');
    const deptCard1 = document.querySelector('.card-one');
    const deptCard2 = document.querySelector('.card-two');
    const deptCard3 = document.querySelector('.card-three');
    const deptCard4 = document.querySelector('.card-four');
    const deptCard5 = document.querySelector('.card-five');
    const deptCard6 = document.querySelector('.card-six');
    const deptCard7 = document.querySelector('.card-seven');
    const deptCard8 = document.querySelector('.card-eight');
    const deptCard9 = document.querySelector('.card-nine');
    const deptCard10 = document.querySelector('.card-ten');
    const deptCard11 = document.querySelector('.card-eleven');
    const deptCard12 = document.querySelector('.card-twelve');
    const juHeading = document.querySelector('.career-joinus-heading');
    const juInfo = document.querySelector('.info-career-joinus');
    const sponHeading = document.querySelector('.sponsors-heading');
    const jSponHeading = document.querySelector('.sponsor-heading');
    const jSponInfo = document.querySelector('.info-sponsor');
    const sponBox = document.querySelector('.sponsor-box');
    const shopHeading = document.querySelector('.shop-heading');
    const contHeading = document.querySelector('.contact-heading');
    const social = document.querySelector('.social-link-one');
    const social2 = document.querySelector('.social-link-two');
    const social3 = document.querySelector('.social-link-three');
    const social4 = document.querySelector('.social-link-four');
    const social5 = document.querySelector('.social-link-five');
    const social6 = document.querySelector('.social-link-six');
    const contHeadingBorder = document.querySelector('.contact-heading');
    const footer = document.querySelector('.night-foot');

    const button1 = document.querySelector('.career-toggle');
    const button2 = document.querySelector('.career-button');
    const button3 = document.querySelector('.career-button-two');
    const button4 = document.querySelector('.sponsor-button');
    const button5 = document.querySelector('.sponsor-button-two');
    const button6 = document.querySelector('.shop-button-one');
    const button7 = document.querySelector('.shop-button-two');
    const button8 = document.querySelector('.shop-button-three');
    const button9 = document.querySelector('.shop-button-four');
    const modbtn1 = document.querySelector('.modal-night-button-one');
    const modbtn2 = document.querySelector('.modal-night-button-two');
    const modbtn3 = document.querySelector('.modal-night-button-three');
    const modbtn4 = document.querySelector('.modal-night-button-four');
    const modbtn5 = document.querySelector('.modal-night-button-five');
    const modbtn6 = document.querySelector('.modal-night-button-six');
    const modbtn7 = document.querySelector('.modal-night-button-seven');

    const podbtn1 = document.querySelector('.podcast-night-one');
    const podbtn2 = document.querySelector('.podcast-night-two');


    const modalOne = document.querySelector('.modal-night-one');
    const modalTwo = document.querySelector('.modal-night-two');
    const modalThree = document.querySelector('.modal-night-three');
    const modalFour = document.querySelector('.modal-night-four');
    const modalFive = document.querySelector('.modal-night-five');
    const modalSix = document.querySelector('.modal-night-six');

    const arrow = document.querySelector('.arrow-one');  
    const arrow2 = document.querySelector('.arrow-two');  
    const arrow3 = document.querySelector('.arrow-three'); 

    const teamSocialIcon = document.querySelector('.team-social-icon-one');
    const teamSocialIcon2 = document.querySelector('.team-social-icon-two');
    const teamSocialIcon3 = document.querySelector('.team-social-icon-three');
    const teamSocialIcon4 = document.querySelector('.team-social-icon-four');
    const teamSocialIcon5 = document.querySelector('.team-social-icon-five');
    const teamSocialIcon6 = document.querySelector('.team-social-icon-six');
    const teamSocialIcon7 = document.querySelector('.team-social-icon-seven');
    const teamSocialIcon8 = document.querySelector('.team-social-icon-eight');
    const teamSocialIcon9 = document.querySelector('.team-social-icon-nine');
    const teamSocialIcon10 = document.querySelector('.team-social-icon-ten');

    // const teamBack = document.querySelector('.member-card');

            // toggle
    nightToggle.addEventListener('click',()=>{
        body.classList.toggle('body-night');
        aHeading.classList.toggle('heading-night');
        cHeading.classList.toggle('heading-night');
        car.classList.toggle('heading-night');
        tHeading.classList.toggle('heading-night');
        tInfo.classList.toggle('info-color');
        carBox.classList.toggle('body-night');
        tBox.classList.toggle('card-night');
        tBox2.classList.toggle('card-night');
        tBox3.classList.toggle('card-night');
        tBox4.classList.toggle('card-night');
        tBox5.classList.toggle('card-night');
        caHeading.classList.toggle('heading-night');
        // deptCard1.classList.toggle('card-night');
        // deptCard2.classList.toggle('card-night');
        // deptCard3.classList.toggle('card-night');
        // deptCard4.classList.toggle('card-night');
        // deptCard5.classList.toggle('card-night');
        // deptCard6.classList.toggle('card-night');
        // deptCard7.classList.toggle('card-night');
        // deptCard8.classList.toggle('card-night');
        // deptCard9.classList.toggle('card-night');
        // deptCard10.classList.toggle('card-night');
        // deptCard11.classList.toggle('card-night');
        // deptCard12.classList.toggle('card-night');
        juHeading.classList.toggle('heading-night');   
        juInfo.classList.toggle('info-color'); 
        sponHeading.classList.toggle('heading-night');
        jSponHeading.classList.toggle('heading-night');
        jSponInfo.classList.toggle('info-color');
        sponBox.classList.toggle('sponsor-box-night');
        shopHeading.classList.toggle('heading-night');
        social.classList.toggle('card-night');
        social2.classList.toggle('card-night');
        social3.classList.toggle('card-night');
        social4.classList.toggle('card-night');
        social5.classList.toggle('card-night');
        social6.classList.toggle('card-night');
        contHeading.classList.toggle('heading-night');
        footer.classList.toggle('footer-night');
        aHeadingBorder.classList.toggle('heading-border-night');
        contHeadingBorder.classList.toggle('heading-border-night');
        aboutBox.classList.toggle('about-box2-night');
        
        button1.classList.toggle('button-night');
        button2.classList.toggle('button-night');
        button3.classList.toggle('button-night');
        button4.classList.toggle('button-night');
        button5.classList.toggle('button-night');
        button6.classList.toggle('button-night');
        button7.classList.toggle('button-night');
        button8.classList.toggle('button-night');
        button9.classList.toggle('button-night');
        modbtn1.classList.toggle('button-night');
        modbtn2.classList.toggle('button-night');
        modbtn3.classList.toggle('button-night');
        modbtn4.classList.toggle('button-night');
        modbtn5.classList.toggle('button-night');
        modbtn6.classList.toggle('button-night');
        modbtn7.classList.toggle('button-night');

        podbtn1.classList.toggle('button-night');
        podbtn2.classList.toggle('button-night');

        
        modalOne.classList.toggle('body-night');
        modalTwo.classList.toggle('body-night');
        modalThree.classList.toggle('body-night');
        modalFour.classList.toggle('body-night');
        modalFive.classList.toggle('body-night');
        modalSix.classList.toggle('body-night');

        arrow.classList.toggle('arrow-night');
        arrow2.classList.toggle('arrow-night');
        arrow3.classList.toggle('arrow-night');

        teamSocialIcon.classList.toggle('team-social-night');
        teamSocialIcon2.classList.toggle('team-social-night');
        teamSocialIcon3.classList.toggle('team-social-night');
        teamSocialIcon4.classList.toggle('team-social-night');
        teamSocialIcon5.classList.toggle('team-social-night');
        teamSocialIcon6.classList.toggle('team-social-night');
        teamSocialIcon7.classList.toggle('team-social-night');
        teamSocialIcon8.classList.toggle('team-social-night');
        teamSocialIcon9.classList.toggle('team-social-night');
        teamSocialIcon10.classList.toggle('team-social-night');

        // teamBack.classList.toggle('team-back-night');


    });
    



}

nightMode();



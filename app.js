

function animation(){
    //Initiate the controller object
    let controller = new ScrollMagic.Controller();
    console.log(controller);

    //Select the individual boxes
    const boxes = document.querySelectorAll('.box');
    //Loop over each box
    boxes.forEach( box =>{
        //We don't need to document.querySelector from start now
        const reveal_img = box.querySelector('.reveal-img');
        const reveal_text = box.querySelector('.reveal-text');

        //Introduce a new timeline
        const timeline1 = gsap.timeline({
            //.timeline() takes in an object
            //defaults introduces a default set of parameters
            defaults: {duration: 1, ease: 'power2.inOut'}
        });

        //Animate with respect to that timeline
        //.fromTo takes the item, duration, {}, {} as arguements
        timeline1.fromTo(reveal_img, {x: '0%', y:'0%'}, {x: '0%', y:'-100%'});
        timeline1.fromTo(reveal_text, 2, {x: '0%', y:'0%'}, {x: '1000%', y:'0%'});


        //We can introduce a new trigger for the above animations
        //We do this in the form of a scene
        let triggerScene = new ScrollMagic.Scene({
            triggerElement: box,
            triggerHook: 0.25
        })
         .setTween(timeline1)
         .addIndicators({colorStart: 'white', colorTrigger: 'white', name: 'start'})
         .addTo(controller);


    });

}

animation();
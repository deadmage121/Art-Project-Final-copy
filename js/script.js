/* Code regarding typing functionality is modeled after Samanta Shi's code, minus the j-query; so basically the majority of it: 
https://imanas.shanghai.nyu.edu/~sls741/audio_project/

Also credit to Tristen and Dave, for being wonderful people and having the patience to help me 
to read and understand my code even though they basically helped me write like 90% of the Javascript.
*/

// Global Variables: 

    //ss is a replacement variable used for substring functions
    var ss = 0;
    //defining gottagofast
    var gottagofast;
    //decfining gottagoslow
    var gottagoslow;
    //defining i as a variable
    var i = -1;
    //defining scripttype as a variable
    var scripttype;
    //defining dontstopplease as a boolean statement to equal true
    var dontstopplease = true;
    //defining textBoxActive as a boolean statement to equal false initially
    var unrealityActive = false;
    //variable to get element of paragraph -> used to change the style of css
    var paragraph = document.querySelector("p");
 
// Functions:
    //button functions
        //autoplay function
    function play() {
        ss = 0;
        // var gottagofast is used to set reload time of window -> also used to clear the Interval. 
        dontstopplease = true;
        gottagofast = window.setInterval(runtext, 63);
        console.log("I was ", i);
        i++;
        //function that saves i value
        console.log("I is ",i);
        eyeballchecker(i);
        console.log('checkmieyeballs')
        scripttype = story[i];
        scripttype2 = story2[i];
    }

        //function used to pause script - should be able to work in tandem with autoruntext script
    function stop() {
        //experiment with a boolean function around runtext
        dontstopplease = false;
        //clearInterval(gottagofast);
        console.log('hmmm')
    }
    function reset() {
        document.getElementById("scriptwriter").innerHTML = "";
        i = -1;
        clearInterval(gottagofast);
        document.getElementById('mainimg').style.display = 'none';
        document.getElementById('subimg').style.display = 'none';
        dontstopplease = false;
    }
    function change() {
        if(unrealityActive == false){
            document.getElementById('realitywriter').style.display = 'block';
            document.getElementById('scriptwriter').style.display = 'none';
            document.getElementById('mainimg').style.display = 'none';
            document.getElementById('subimg').style.display = 'block';
            document.getElementById('title').innerHTML = 'Script.';
            document.getElementById('real').innerHTML = 'Text';
            document.getElementById('narratoraudio').muted = true;
            paragraph.style.fontFamily = 'Gugi', 'cursive';
            unrealityActive = true;
            //scripttype = story[i];
        }
        else if(unrealityActive == true){
            document.getElementById('realitywriter').style.display = 'none';
            document.getElementById('scriptwriter').style.display = 'block';
            document.getElementById('mainimg').style.display = 'block';
            document.getElementById('subimg').style.display = 'none';
            document.getElementById('title').innerHTML = '10/11/18.';
            document.getElementById('real').innerHTML = 'Reality';
            document.getElementById('narratoraudio').muted = false;
            paragraph.style.fontFamily = 'Just Another Hand', 'cursive';
            unrealityActive = false;
            //scripttype = story2[i];
        }
    }

    //auto-play function!
    function runtext() {
        if (dontstopplease === true){


            var str = document.getElementById("scriptwriter").innerHTML;
            //changes scriptwriter to equal the text string length minus one character
            str = str.substr(0,str.length-1) ;
            //gets the character of ss using charAt
            str += scripttype.charAt(ss);
            //sets scriptwriter to equal new string "str"
            document.getElementById("scriptwriter").innerHTML = str;

            var string = document.getElementById("realitywriter").innerHTML;
            //changes scriptwriter to equal the text string length minus one character
            string = string.substr(0,str.length-1) ;
            //gets the character of ss using charAt
            string += scripttype2.charAt(ss);
            //sets scriptwriter to equal new string "str"
            document.getElementById("realitywriter").innerHTML = string;

            //autoscrolling feature
            var write = document.getElementById("script");
            //element.scrollTop
            write.scrollTop += 100000;
            //if (Boolean(stopplease = true)) {
                console.log('whatthefrenchtoast')
                // adds to counter of var ss
                ss++;
                // console.log('yeet')
            // stops the text from running after narrator[0] reaches 0.
                if (ss > scripttype.length) {
                    clearInterval(gottagofast);
                    //idk why this works but it just does -> autoplay feature but delays the play after 500 miliseconds
                    setTimeout(play, 500);
                    document.getElementById("scriptwriter").innerHTML += "<br><br>";
                    document.getElementById("realitywriter").innerHTML += ".<br><br>";
                }
                document.getElementById("scriptwriter").innerHTML += "_";
                document.getElementById("realitywriter").innerHTML += "_|";
        }
        //none of these console.logs are running
        else if (dontstopplease === false){
            // var string = document.getElementById("scriptwriter").innerHTML;
            // //changes scriptwriter to equal the text string length minus one character
            // string = string.substr(0,str.length-1) ;
            // string = document.getElementById("scriptwriter").innerHTML;
            document.getElementById("scriptwriter").innerHTML += "<br><br>" ;
            console.log('BEKFEST');
            //gets the character of ss using charAt
            var write = document.getElementById("script");
            //element.scrollTop
            write.scrollTop += 100000;
            clearInterval(gottagofast);
            console.log('noyou')
        }
    }
    //index = i (check function play())
    function eyeballchecker(scriptvalue) {
        //if statements that will determine whether or not images show
        if (scriptvalue === 0) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA')
        }
        else if (scriptvalue === 1 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_1')
        }
        else if (scriptvalue === 2 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_2')
        }
        else if (scriptvalue === 3 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_3')
        }
        else if (scriptvalue === 4 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_4')
        }
        else if (scriptvalue === 5 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_5')
        }
        else if (scriptvalue === 7 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_6')
        }
        else if (scriptvalue === 9 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_7')
        }
        else if (scriptvalue === 10 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_8')
        }
        else if (scriptvalue === 11 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_9')
        }
        else if (scriptvalue === 12 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_10')
        }
        else if (scriptvalue === 15 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_11')
        }
        else if (scriptvalue === 16 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_12')
        }
        else if (scriptvalue === 17 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_13')
        }
        else if (scriptvalue === 18 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_14')
        }
        else if (scriptvalue === 19 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_15')
        }
        else if (scriptvalue === 20 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_16')
        }
        else if (scriptvalue === 22 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_17')
        }
        else if (scriptvalue === 30 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_18')
        }
        else if (scriptvalue === 35 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_19')
        }
        else if (scriptvalue === 36 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_20')
        }
        else if (scriptvalue === 37 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_21')
        }
        else if (scriptvalue === 39 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_22')
        }
        else if (scriptvalue === 41 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_23')
        }
        else if (scriptvalue === 42 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_24')
        }
        else if (scriptvalue === 43 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_25')
        }
        else if (scriptvalue === 44 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_26')
        }
        else if (scriptvalue === 45 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_27')
        }
        else if (scriptvalue === 46 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_28')
        }
        else if (scriptvalue === 47 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_29')
        }
        else if (scriptvalue === 50 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_30')
        }
        else if (scriptvalue === 54 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_31')
        }
        //need to make this still
        else if (scriptvalue === 59 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_32')
        }
        else if (scriptvalue === 60 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_33')
        }
        //need to make this still
        else if (scriptvalue === 61 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_34')
        }
        //meed to make this still - maybe reuse assets
        else if (scriptvalue === 63 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_35')
        }
        //need to make this - maybe substitute lip features and add in breath who knows
        else if (scriptvalue === 64 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_36')
        }
        else if (scriptvalue === 67 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_37')
        }
        else if (scriptvalue === 71 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_38')
        }
        else if (scriptvalue === 76 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_39')
        }
        else if (scriptvalue === 78 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_40')
        }
        else if (scriptvalue === 79 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_41')
        }
        else if (scriptvalue === 80 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_42')
        }
        else if (scriptvalue === 84 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_43')
        }/*
        else if (scriptvalue === 87 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_44')
        }
        else if (scriptvalue === 90 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_45')
        }
        else if (scriptvalue === 91 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_46')
        }
        else if (scriptvalue === 92 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_47')
        }
        else if (scriptvalue === 96 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_48')
        }
        else if (scriptvalue === 98 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_49')
        }
        else if (scriptvalue === 100 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_50')
        }
        else if (scriptvalue === 102 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_51')
        }
        else if (scriptvalue === 106 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_52')
        }
        else if (scriptvalue === 107 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_53')
        }
        //still have to make this
        else if (scriptvalue === 108 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_54')
        }
        else if (scriptvalue === 119 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_55')
        }
        //still need to draw this
        else if (scriptvalue === 123) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_56')
        }
        //reuse assets
        else if (scriptvalue === 137 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_57')
        }
        //still need to draw this
        else if (scriptvalue === 140 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_58')
        }
        //still need to draw this
        else if (scriptvalue === 142 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_59')
        }
        //still need to draw this
        else if (scriptvalue === 143 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_60')
        }
        //still need to draw this
        else if (scriptvalue === 144 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_61')
        }
        //still need to draw this
        else if (scriptvalue === 145 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_62')
        }
        //still need to draw this
        else if (scriptvalue === 146 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_63')
        }
        //still need to draw this
        else if (scriptvalue === 147 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_64')
        }
        //still need to draw this
        else if (scriptvalue === 148 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_65')
        }
        //still need to draw this
        else if (scriptvalue === 149 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_66')
        }
        //still need to draw this
        else if (scriptvalue === 152 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_67')
        }
        //still need to draw this
        else if (scriptvalue === 153 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_68')
        }
        //still need to draw this
        else if (scriptvalue === 154 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_69')
        }
        //still need to draw this
        else if (scriptvalue === 155 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_70')
        }
        //still need to draw this
        else if (scriptvalue === 156 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_71')
        }
        //still need to draw this
        else if (scriptvalue === 158 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_72')
        }
        //still need to draw this
        else if (scriptvalue === 159 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_73')
        }
        //still need to draw this
        else if (scriptvalue === 162 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_74')
        }
        //still need to draw this
        else if (scriptvalue === 163 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_75')
        }
        //still need to draw this - headshot of her in bed
        else if (scriptvalue === 164 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_76')
        }
        //still need to draw this - just her face
        else if (scriptvalue === 165 ) {
            document.getElementById('mainimg').src = 'img/example_1.jpg';
            document.getElementById('subimg').src = 'img/example_2.jpg';
            console.log('WHOOOHAA_77')
        }
        else if (scriptvalue === 167 ) {
            document.getElementById('mainimg').src = 'img/example_3.jpg';
            document.getElementById('subimg').src = 'img/example_4.jpg';
            console.log('WHOOOHAA_78')
        }*/
    }
    //"http://place-puppy.com/300x300"


//Story

let story = [
    //0
    'Today, Miki wants to dance in the rain.', //new image
    //1
    'But the clouds today are plump, a gorgeous white that she\'s afraid to touch with her bare hands.', //new image
    //2
    'There are birds perched outside her window, chirping.', //new image
    //3
    'She hears them, and covers her face with a blanket, sheltering her ears from song.', //new image
    //4
    'Today, Miki doesn\’t want to put on perfume. She slides out of bed and goes to the washroom.', //new image
    //5
    'She brushes her teeth and washes her face, but before she leaves, she takes a moment to look at herself.', 
    //6
    'She has brown eyes, like the color of coffee, and freckles that dot her cheeks, and long, dark brown hair - which most people mistaken for black.', //image
    //7
    'She looks into the mirror, squinting as she scrutinizes her face.',
    //8
    'She picks up a razor and moves the blade across her face. She shaves off small strands of hair, all in an effort to look clean.', //new image
    //9
    'Done with washing up, she moves to her closet.', //new image
    //10
    'Today she wears a black dress, with a white cardigan over; just like last year.', //new image
    //11
    'She inspects her outfit in the mirror.', //new image
    //12
    'It\'s fine for today.', 
    //13
    'Then, her face must be done',
    //14
    'She moves to her desk', //new image
    //15
    'Already set is her mirror, and the items she will use to blemish her face.', //new image
    //16
    'She pushes her hair back - braiding it with her bracelet.', //new image
    //17
    'First comes sunscreen, which she rubs on.', //new image
    //18
    'Then, a dash of primer, foundation, a touch of powder, eyeshadow, mascara, eyeliner, a brow pencil, bronzer, blush, highlighter, and setting spray.', //new image (maybe a gif)
    //19
    'For good measure, she applies light pink lipstick - nothing too extravagant for the day.', //new image - change the color of the lips
    //20
    'She stares at herself for a moment, making sure she is up to standard.', //new image
    //21
    'She is ready for the day.',
    //22
    'Her phone rings, calling her attention.', //new image
    //23
    'She stares at the screen, contemplating whether or not she should.',
    //24
    'It’s that boy again: don’t answer the phone.', 
    //25
    'It’s been about a week since they last talked about their future.',
    //26
    'Then, she ran away to the comfort of her bed, upset.',
    //27
    'He stormed off to god knows where.',
    //28
    'She loves him, still does.',
    //29
    'It still hurts her that he’s gone.',
    //30
    'She squeezes her thin cardigan, close to her heart.', //new image
    //31
    'So close, yet so far.',
    //32
    'A phone call away, but emotionally -',
    //33
    'Not yet.',
    //34
    'She won’t allow herself to be distracted by him.',
    //35
    'Today is a special day.', //new image
    //36
    'Today she prepares lunch, a salad with cherry tomatoes, avocados, onions, watercress, arugula, and lettuce.', //new image gif
    //37
    'For him, she makes him kalbi (korean style prepared beef), with a side of lettuce and doenjang (soybean paste).', //new image gif
    //38
    'She packs it in two boxes, one for her, one for him in her tote along with a pair of chopsticks.', //new image gif
    //39
    'She leaves her apartment, and walks to the florist down the street, who greets her with a smile.', //new image
    //40
    'Light, casual conversation progresses, and she soon walks out with her flowers - a bouquet of chrysanthemums and daisies.', 
    //41
    'They are his favorite flowers, the ones she brings to him every year.', //new image
    //42
    'The sun is out, and the sky is blue today.', //new image
    //43
    'A warm breeze caresses her cheek, and her eyes close as she breathes in the scent of fall.', //new image
    //44
    'The walk to the train is short, a few blocks from the florist.', //new image
    //45
    'She sees the bar they frequented, on late nights.', //new image
    //46
    'She feels a soft touch on her hand and her heart skips a beat ~', //new image
    //47
    'Miki: Who the ~', //new image
    //48
    'She glances around, but nobody is near her.', 
    //49
    'Just her imagination.',
    //50
    'She checks her phone.', //new image
    //51
    '12pm.', 
    //52
    'She always has lunch with him at 1pm.',
    //53
    'She crosses the street, and walks down the station steps, swipes her metro card, and walks to line number 2.', //new image
    //54
    'She checks her phone again.', //new image
    //55
    'No new notifications.',
    //56
    'She\'s still thinking about him, worried about what he’d said...',
    //57
    'But I can’t call him.... we haven’t been talking and....',
    //58
    'She doesn\’t want to think about it.',
    //59
    'She puts in her headphones and zones out.', //new image
    //60
    'The train comes, she boards, she waits along the line of other inhabitants of the vessel, looking at the window.', //new image 
    //61
    'The subway tunnel is black, but she can still see her reflection.',
    //62
    'What is it he sees in her, she wonders? My face is just like any other face My eyes are small, like other Asians I hide my face with a thin layer of makeup because I think its long, and my eyebrows are too thick for a girl ~',
    //63
    'She arrives at the cemetery and she has to get off.',
    //64
    'She takes a deep breath as she walks out of the station.', //new image
    //65
    'Today, is the day.',
    //66
    'The walk is short, as it usually is.',
    //67
    'The sight of trees greets her as soon as she steps out of the station.', //new image
    //68
    'That is how she knows that she is in the right place.',
    //69
    'The trees are turning a ripe orange, setting the scene for fall.',
    //70
    'She wants to reach out and grab one, but she’s too short.',
    //71
    'She tries anyways, and looks the fool she is, jumping in her dress.', //new image
    //72
    'She hears laughter in the distance.', //new image
    //73
    'Some guy.',
    //74
    'Irrelevant.',
    //75
    'Fuck him.',
    //76
    'Miki: "GO FUCK YOURSELF, ASSHOLE!"', //new image
    //77
    'She reaches the gate to the cemetery and walks in.',
    //78
    'She is greeted by rows and rows of names, headstone columns that have been erected in patronage.', //new image
    //79
    'Tears are running down her face.', //new image
    //80
    'She walks as she wipes her face.', //new image
    //81
    'It’s okay if a little mascara blends with her skin.',
    //82
    'Nobody will see her tears.',
    //83
    'Only her father.',
    //84
    'She arrives at his grave and sits down.', //new image
    //85
    'Miki: "Papa, I brought you food."',
    /*
    //86
    '*she sniffles*',
    //87
    'Miki: "She takes out the food that she had packed, the air spreading the decadent smells across the cemetery"', //new image
    //88
    'Miki: "Your favorite."',
    //89
    'Miki: "Here, I’ll feed you, you’re too old to feed yourself."',
    //90
    'She wraps the rice in lettuce, patting it in', //new image - gif maybe
    //91
    'Then, a blanket of kalbi comes next.', //new image
    //92
    'And then the doenjang.', //new image
    //93
    'Miki: "You’ll eat well today, Dad."',
    //94
    'She does this, until there is no more to put.',
    //95
    'Miki: "Sorry I don’t come here often."',
    //96
    'She lays the packages of rice, lettuce, kalbi, and doenjang side by side on the ground.', //new image
    //97
    'They blend with the green grass It looks nice and appetizing, good for the birds to eat and spread later.',
    //98
    'She opens her lunch, the salad she made earlier.', //new image
    //99
    'Miki: "Look, tomatoes and greens!"',
    //100
    'She shoves a forkful into her mouth', //new image
    //101
    'Miki: "Some onions too!"',
    //102
    'Another forkful enters her mouth.', //new image
    //103
    'MIki: "I’m eating healthy Dad"',
    //104
    'And another.',
    //105
    'Miki: Mom would be proud, I’m getting thinner."',
    //106
    'She continues until she is finished.', //new image
    //107
    'Satisfied, she lays down, next to the headstone.', //new image
    //108
    'She stares at the sky, looking at the shapeshifting clouds.',
    //109
    'Miki: "Dad, I’m seeing this boy now... but I’m scared..."',
    //110
    'Miki: "...I just..."',
    //111
    'Miki: "...I don’t know yet"',
    //112
    'Miki: "Jin ... he asked my hand in marriage, but I’m old, almost 30..."',
    //113
    'Miki: "...He’s young too, almost 25. But he loves me..."',
    //114
    'Miki: "...but I just..."',
    //115
    'Miki: "...I don’t know if I want to have kids, and I know that he wants them."',
    //116
    'Miki: "Dad, what would you do if you were still here?"',
    //117
    'Miki: "What would you say?"',
    //118
    'Miki: "Did you want to have, me?"',
    //119
    'She wraps her cardigan closer to her chest.', //new image
    //120
    'Miki: "Sometimes I ask every day, thinking about what happened between you and mom that made me happen."',
    //121
    'Miki: "She doesn’t like it when I visit you, you know."',
    //122
    'Miki: "She’s old now, but she still gets sad when she thinks of you about how you left when you were still young, how you left us all alone."',
    //123
    'She cradles her legs, letting her lips kiss her knees.', //new image
    //124
    'Miki: "I barely know you... I don\'t remember..."',
    //125
    'Miki: "...I don\'t remember your face anymore."',
    //126
    'Miki: "There are pictures, and stories they told me when I was a kid, but I still feel uncomfortable calling you my father."',
    //127
    'Miki: "I wasn\'t there when you died, and all I\'ve had for all these years is this headstone on top of your grave."',
    //128
    'Miki: "I\'m talking to it right now instead of you and I feel stupid."',
    //129
    'Miki: "I say this every-time I come; you know this."',
    //130
    'Miki: "But this boy, Jin, what if he’s like you?"',
    //131
    'Miki: "What if he runs out on me?"',
    //132
    'Miki: "What if later, I’m unhappy with him?"',
    //133
    'Miki: "I don’t know if I trust him enough to dedicate my life to him it’s just so..."',
    //134
    'Miki: "...so much to bear.',
    //135
    'Miki: "I wish that I had something of a regular family, I want that for child, if I ever decide to have kids but it’s so hard to know...',
    //136
    'Miki: "I just don’t know...',
    //137
    'Her tears slide down her face, running down her face into the shallow earth.', //new image
    //138
    'It starts with a stream.',
    //139
    'Then, a river flows forth.',
    //140
    'Her cry engulfs the cemetery. It echoes off of impassive headstones and close-eared statues.', //new image
    //141
    'The cemetery whispers grief into passing ears.',
    //142
    'As her sobs start to ebb, she reclaims her composure, wrapping her hands around her legs, letting her head kiss her knees.', //new image
    //143
    'Her hair shimmers a dark hazel in the sun.', //new image
    //144
    'The wind blows her hair back, and her neck is warm.', //new image
    //145
    'She takes a deep breath.', //new image
    //146
    'She Exhales.', //new image
    //147
    'The tears are gone, and she is calm.', //new image
    //148
    'She turns her head, to look at the headstone.', //new image
    //149
    'There are birds now, where she had once placed her offerings.', //new image
    //150
    'They are eating the food she had made for her father.',
    //151
    'And soon they will go off, to do whatever it is birds do.',
    //152
    'She gets up, dusts off her clothes, stands in front of the headstone and bows.', //new image
    //153
    'Once.', //new image - gif?
    //154
    'Twice.', //new image - gif? 
    //155
    'Three times, as per the custom.', //new image - gif?
    //156
    'Miki: "Thanks dad, for being here for me."', //new image
    //157
    'Miki: "Sorry I\'m always a mess."',
    //158
    'She grabs her tote bag, puts in her headphones and she walks back, back to the train, back to home; back to comfort, belonging, and safety.', //new image
    //159
    'For the rest of the day, she will do nothing.', //new image
    //160
    'She will read a book, or write, or watch a movie.',
    //161
    'She is exhausted.',
    //162
    'She tosses in bed that night It is hard to sleep.',
    //163
    'Her phone buzzes through-out the night, but she refrains from looking.',
    //164
    'He hasn’t called or texted since the morning.', //new image
    //165
    'Should I check now?', //new image
    //166
    'I wonder how he feels.',
    //167
    'Her eyes are welling.' //new image
    */
]


let story2 = [
    //1
    '',
    //2
    '',
    //3
    '',
    //4
    '',
    //5
    '',
    //6
    '',
    //7
    '',
    //8
    '',
    //9
    '',
    //10
    '',
    //11
    '',
    //12
    '',
    //13
    '',
    //14
    '',
    //15
    '',
    //16
    '',
    //17
    '',
    //18
    '',
    //19
    '',
    //20
    '',
    //21
    '',
    //22
    '',
    //23
    '',
    //24
    '',
    //25
    '',
    //26
    '',
    //27
    '',
    //28
    '',
    //29
    '',
    //30
    '',
    //31
    '',
    //32
    '',
    //33
    '',
    //34
    '',
    //35
    '',
    //36
    '',
    //37
    '',
    //38
    '',
    //39
    '',
    //40
    '',
    //41
    '',
    //42
    '',
    //43
    '',
    //44
    '',
    //45
    '',
    //46
    '',
    //47
    'Miki: Who the ~', //new image
    //48
    '',
    //49
    '',
    //50
    '',
    //51
    '',
    //52
    '',
    //53
    '',
    //54
    '',
    //55
    '',
    //56
    '',
    //57
    '',
    //58
    '',
    //59
    '',
    //60
    '',
    //61
    '',
    //62
    '',
    //63
    '',
    //64
    '',
    //65
    '',
    //66
    '',
    //67
    '',
    //68
    '',
    //69
    '',
    //70
    '',
    //71
    '',
    //72
    '',
    //73
    '',
    //74
    '',
    //75
    '',
    //76
    'Miki: "GO FUCK YOURSELF, ASSHOLE!"', //new image
    //77
    '',
    //78
    '',
    //79
    '',
    //80
    '',
    //81
    '',
    //82
    '',
    //83
    '',
    //84
    '',
    //85
    'Miki: "Papa, I brought you food."',
    /*
    //86
    '*she sniffles*',
    //87
    'Miki: "She takes out the food that she had packed, the air spreading the decadent smells across the cemetery"', //new image
    //88
    'Miki: "Your favorite."',
    //89
    'Miki: "Here, I’ll feed you, you’re too old to feed yourself."',
    //90
    '',
    //91
    '',
    //92
    '',
    //93
    'Miki: "You’ll eat well today, Dad."',
    //94
    '',
    //95
    'Miki:"Sorry I don’t come here often."',
    //96
    '',
    //97
    '',
    //98
    '',
    //99
    'Miki: "Look, tomatoes and greens!"',
    //100
    '',
    //101
    'Miki: "Some onions too!"',
    //102
    '',
    //103
    'MIki: "I’m eating healthy Dad"',
    //104
    '',
    //105
    'Miki: Mom would be proud, I’m getting thinner."',
    //106
    '',
    //107
    '',
    //108
    '',
    //109
    'Miki: "Dad, I’m seeing this boy now... but I’m scared..."',
    //110
    'Miki: "...I just..."',
    //111
    'Miki: "...I don’t know yet"',
    //112
    'Miki: "Jin ... he asked my hand in marriage, but I’m old, almost 30..."',
    //113
    'Miki: "...He’s young too, almost 25. But he loves me..."',
    //114
    'Miki: "...but I just..."',
    //115
    'Miki: "...I don’t know if I want to have kids, and I know that he wants them."',
    //116
    'Miki: "Dad, what would you do if you were still here?"',
    //117
    'Miki: "What would you say?"',
    //118
    'Miki: "Did you want to have, me?"',
    //119
    '',
    //120
    'Miki: "Sometimes I ask every day, thinking about what happened between you and mom that made me happen."',
    //121
    'Miki: "She doesn’t like it when I visit you, you know."',
    //122
    'Miki: "She’s old now, but she still gets sad when she thinks of you about how you left when you were still young, how you left us all alone."',
    //123
    '',
    //124
    'Miki: "I barely know you... I don\'t remember..."',
    //125
    'Miki: "...I don\'t remember your face anymore."',
    //126
    'Miki: "There are pictures, and stories they told me when I was a kid, but I still feel uncomfortable calling you my father."',
    //127
    'Miki: "I wasn\'t there when you died, and all I\'ve had for all these years is this headstone on top of your grave."',
    //128
    'Miki: "I\'m talking to it right now instead of you and I feel stupid."',
    //129
    'Miki: "I say this every-time I come; you know this."',
    //130
    'Miki: "But this boy, Jin, what if he’s like you?"',
    //131
    'Miki: "What if he runs out on me?"',
    //132
    'Miki: "What if later, I’m unhappy with him?"',
    //133
    'Miki: "I don’t know if I trust him enough to dedicate my life to him it’s just so..."',
    //134
    'Miki: "...so much to bear.',
    //135
    'Miki: "I wish that I had something of a regular family, I want that for child, if I ever decide to have kids but it’s so hard to know...',
    //136
    'Miki: "I just don’t know...',
    //137
    '',
    //138
    '',
    //139
    '',
    //140
    '',
    //141
    '',
    //142
    '',
    //143
    '',
    //144
    '',
    //145
    '',
    //146
    '',
    //147
    '',
    //148
    '',
    //149
    '',
    //150
    '',
    //151
    '',
    //152
    '',
    //153
    '',
    //154
    '',
    //155
    '',
    //156
    'Miki: "Thanks dad, for being here for me."', //new image
    //157
    'Miki: "Sorry I\'m always a mess."',
    //158
    '',
    //159
    '',
    //160
    '',
    //161
    '',
    //162
    '',
    //163
    '',
    //164
    '',
    //165
    'Should I check now?', //new image
    //166
    'I wonder how he feels.',
    //167
    '',
    */
]
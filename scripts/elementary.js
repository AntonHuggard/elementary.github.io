// Written by Anton Huggard
// Last edited 16th Oct, 2020 
// - modified reset_opacity() for new JSON design, fixed mobile mug
// - added function for showing the help modal.
// - added filter ...thing


// this is the master JavaScript file for the periodic table, important functions and global variables
// are declared here. Also some other stuff that's still here for historic reasons.

const filter_button = document.getElementById('fltr_btn');
const low_opacity_value = "25%";


function getWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

function getHeight() {
    return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}


function show_accordian(object) {
    object.classList.toggle("active");
    document.getElementById("drpdwn-menu").classList.toggle("begone");
}

var search_type = 0;

function set_search(n, mobile_view) {

    // from here ...

    document.getElementById("electronegativity_div").style.display = "none";
    document.getElementById("melting_pt_div").style.display = "none";
    document.getElementById("boiling_pt_div").style.display = "none";
    document.getElementById("discovery_div").style.display = "none";

    const acc = document.getElementById("accordion_btn");

    if (mobile_view) {
        switch (n) {
            case 0:
                acc.innerText = "default";
                break;
            case 1:
                acc.innerText = "electronegativity";
                break;
            case 2:
                acc.innerText = "melting point";
                break;
            case 3:
                acc.innerText = "boiling point";
                break;
            case 4:
                acc.innerText = "discovery";
                break;
        }
    }

    // ... to here, it's all just visual indicators of the selectors at the top
    // the following code has all the functionality ...

    switch (n) {
        case 0:
            document.getElementById("element_search_container").style.display = "grid";
            reset_opacity();
            acc.innerText = "default";
            search_type = 0;
            break;
        case 1:
            if (search_type != n) {
                document.getElementById("electronegativity_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                en_slider_function();
                search_type = 1;
            } else {
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                acc.innerText = "default";
                search_type = 0;
            }
            break;
        case 2:
            if (search_type != n) {
                search_type = 2;
                document.getElementById("melting_pt_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                mp_slider_function();
            } else {
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                search_type = 0;
                acc.innerText = "default";
            }
            break;
        case 3:
            if (search_type != n) {
                search_type = 3;
                document.getElementById("boiling_pt_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                bp_slider_function();
            } else {
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                search_type = 0;
                acc.innerText = "default";
            }
            break;
        case 4:
            if (search_type != n) {
                search_type = 4;
                document.getElementById("discovery_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                ds_slider_function();
            } else {
                document.getElementById("element_search_container").style.display = "grid";
                reset_opacity();
                search_type = 0;
                acc.innerText = "default";
            }
            break;
    }
}

function change_btn(btn, locn) {

    const srch_typs = document.getElementById(locn).getElementsByTagName('button');

    for (i = 0; i < srch_typs.length; i++) {
        if (!(srch_typs[i].classList.contains('selected')) && (srch_typs[i] === btn)) {
            btn.classList.add('selected');
        } else {
            srch_typs[i].classList.remove('selected');
        }

    }

}

function reset_opacity() {
    filter_button.innerHTML = 'filter';
    elements.forEach(element => {
        document.getElementById(element.name).style.opacity = "100%";
        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
    });
}

function show_help() {
    document.getElementById('help').style.display = 'block';
}

function filter_options(go_away) {
    if (go_away) {
        filter_button.classList.remove('selected-fltr-btn');
        document.getElementById('properties_menu').style.display = 'none';
    }
}

function filter_options() {
    const filter_options = document.getElementById('properties_menu');
    const filter_button = document.getElementById('fltr_btn');
    if (!(filter_options.style.display == 'block')) {
        filter_button.classList.add('selected-fltr-btn');
        filter_options.classList.remove('desktop-right-col');
        filter_options.classList.add('desktop-left-col');
        filter_options.classList.add('fltr-opns-drp-dwn');
        filter_options.style.display = 'block';
    } else {
        filter_button.classList.remove('selected-fltr-btn');
        filter_options.style.display = 'none';
    }
}
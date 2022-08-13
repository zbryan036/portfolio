$().ready(() => {

    ////// EVENT HANDLERS //////
    $('#nav-burger').click(toggleNav);
    $('#home-link').click(scrollToHome);
    $('#projects-link').click(scrollToProjects);
    $('#about-link').click(scrollToAbout);
    $('#details-link').click(scrollToDetails);
    $('#show-contact').click(showContact);
    $('#hide-contact').click(hideContact);
    $('#show-phone-number').click(showPhoneNumber);
    $('#toggle-sound .button').click(toggleSound);
});

////// DOM FUNCTIONS //////
// nav
function toggleNav() {
    if($('#nav').css('display') === 'none') openNav();
    else closeNav();
}

function openNav() {
    $('#nav').fadeIn(100);
    $('#nav-burger .line').animate(
        {margin: '0 0.3rem'},
        100
    );
    $('#nav-burger .line.top').animate(
        {margin: '0.85rem 0 0 0.3rem'},
        {duration: 100, queue: false}
    );
}

function closeNav() {
    $('#nav').fadeOut(100);
    $('#nav-burger .line').animate(
        {margin: '0.3rem'},
        100
    );
    $('#nav-burger .line.top').animate(
        {margin: '0.55rem 0 0.3rem 0.3rem'},
        {duration: 100, queue: false}
    );
}

function scrollToHome() {
    closeNav();
    window.scrollTo(0, 0);
}

function scrollToProjects() {
    closeNav();
    document.getElementById('projects').scrollIntoView();
}

function scrollToAbout() {
    closeNav();
    document.getElementById('about').scrollIntoView();
}

function scrollToDetails() {
    closeNav();
    document.getElementById('details').scrollIntoView();
}

function toggleSound() {
    if($(this).hasClass('fa-volume-mute')) mute(this);
    else unMute(this);
}

function mute(button) {
    $(button).css('display', 'none').removeClass('fa-volume-mute').addClass('fa-volume-up').fadeIn(200);
}

function unMute(button) {
    $(button).css('display', 'none').removeClass('fa-volume-up').addClass('fa-volume-mute').fadeIn(200);
}

// contact
function showContact() {
    $('#show-contact').fadeOut(100);
    $('#contact').animate({right: '0'});
}

function hideContact() {
    $('#contact').animate(
        {right: '-15rem'},
        {complete: () => $('#show-contact').fadeIn(100)}
    );
}

function showPhoneNumber() {
    $('#phone-number').css('display', 'block');
    let number = $('#phone-number p');
    number.select();
    navigator.clipboard.writeText(number.html());
    setTimeout(
        () => $('#phone-number').fadeOut(
            400,
            () => $('#phone-number').css('display', 'none')
        ),
        600
    );
}

// projects
// function showProjectDetails() {
//     // todo: FADE IN .LINK
//     $(this, '> .link').fadeIn();
// }
// function hideProjectDetails() {

// }
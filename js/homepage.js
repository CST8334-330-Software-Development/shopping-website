$(function () {
    $('#filter-all').click(function() {
        $('.category').show();
        $('#dropdownMenuButton').text($('#filter-all').text());
    });
    $('#filter-fashion').click(function() {
        $('.category').hide();
        $('.fashion-section').show();
        $('#dropdownMenuButton').text($('#filter-fashion').text());
    });
    $('#filter-electronic').click(function() {
        $('.category').hide();
        $('.electronic-section').show();
        $('#dropdownMenuButton').text($('#filter-electronic').text());
    });
    $('#filter-jewellery').click(function() {
        $('.category').hide();
        $('.jewellery-section').show();
        $('#dropdownMenuButton').text($('#filter-jewellery').text());
    });
    
    /* Check user session 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    // sessionStorage.setItem("login", true);
    // sessionStorage.removeItem("login");
    let login = sessionStorage.getItem("login");
    if (login) {
        $('.fa-user').next().text('Account');
    }
});
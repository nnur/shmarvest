var ready;
ready = () => {
    $('#filter-projects-button').click(() => {
        $('#filter-projects-button').toggleClass("button-secondary--selected");
        $('.filter-projects__dropdown').toggleClass("filter-projects__dropdown--hidden");
    })
};

$(document).ready(ready);
// $(document).on('turbolinks:load', ready);
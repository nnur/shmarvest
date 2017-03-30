$(document).ready(() => {
    initializePicker();
    initializeEntryForm();
});

function initializeEntryForm() {
     $(".chosen-select").chosen({});
     $("#new-entry-button").click((e) => {
        $(".entry-modal__overlay").toggleClass("entry-modal__overlay--hidden");
     });

     $("#entry-card-save-button").click((e) => {
         e.preventDefault();
         $(".entry-modal__overlay").toggleClass("entry-modal__overlay--hidden");
     });

     $("#entry-card-cancel-button").click((e) => {
         e.preventDefault();
         $(".entry-modal__overlay").toggleClass("entry-modal__overlay--hidden");
     });
}

function initializePicker() {
    var picker = new Pikaday({
        field: $('#calendar-popup-button')[0],
        position: 'bottom right',
        reposition: false,
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Su','Mo','Tu','We','Th','Fr','Sa']
        },
        onOpen: () => {
            $("#calendar-popup-button").toggleClass("timesheet__calendar--selected")
        },
        onClose: () => {
            $("#calendar-popup-button").toggleClass("timesheet__calendar--selected")
        }
    });
}
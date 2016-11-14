
jQuery(document).ready(function($) {
    //Loop to hide/show divs with classname display<xxxx> or displayNo<xxxx>
    $(':checkbox').each(function() {
        var checkName = $(this).attr('name');
            if(this.checked === true && checkName !== 'select-all') {
                //Filter to find only the related divs based on class and replace them.
                $('div').filter('.displayNo'+checkName).removeClass('displayNo'+checkName).addClass('display'+checkName);
            } else if (this.checked === false && checkName !== 'select-all') {
                $('div').filter('.display'+checkName).removeClass('display'+checkName).addClass('displayNo'+checkName);
            }
    });
});

// Listen for filter button click to expand and collapse filter menu
$( "#filter" ).click(function() {
    // Check if element is hidden
    if ( $( "#filter_content" ).is( ":hidden" ) ) {
        $( "#filter_content" ).slideDown( "fast" );
    } else {
        $( "#filter_content" ).hide( "fast" );
    }
});


// Listen for click on toggle checkbox in filter menu.
$('#select-all').click(function(event) {
    if(this.checked) {
        // Iterate each checkbox
        $(':checkbox').each(function() {
            this.checked = true;
        });
    }else {
        // Iterate each checkbox
        $(":checkbox").each(function() {
            this.checked = false;
        });
    }
});

//Listen for click on save button under filter menu
$('#save').click(function(event) {
    //Loop to hide/show divs with classname display<xxxx> or displayNo<xxxx>
    $(':checkbox').each(function() {
        var saveError = document.getElementById('saveError'),
            checkCount = 0,
            checkName = $(this).attr('name');
        //Loop to count total unchecked checkboxes
        $(':checkBox').each(function() {
            if (this.checked === false) {
                checkCount++;
            }
        });
        if(this.checked === true && checkName !== 'select-all') {
            saveError.style.display = "none";
            //Filter to find only the related divs based on class and replace them.
            $('div').filter('.displayNo'+checkName).removeClass('displayNo'+checkName).addClass('display'+checkName);
        } else if (this.checked === false && checkName !== 'select-all') {
            //increase the number to equal the total amount of filter categories
            if(checkCount >= 4) {
                //shows error messages if all checkboxes are unchecked
                saveError.style.display = "inline";
                checkCount = 0;
            } else {
                saveError.style.display = "none";
                $('div').filter('.display'+checkName).removeClass('display'+checkName).addClass('displayNo'+checkName);
            }

        }
    });
});
